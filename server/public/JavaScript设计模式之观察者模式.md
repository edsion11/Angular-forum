---
title: JavaScript设计模式之观察者模式
date: 2020-07-25 13:12:22
tags:
  - 设计模式
---

### 发布-订阅模式

发布订阅模式又称为观察者模式，它定义了对象间的一种一对多的依赖关系，当一个对象发生改变时，所有依赖与它的对象都会得到通知。在前端开发中，DOM 事件是一个典型的发布-订阅模型。比如我们监听一个点击事件，设置一个回调函数负责收到通知。
现在来看看如何来实现一个 JavaScript 版的发布-订阅模式
先实现一个发布者工厂：

```js
var event = {
  clientList: [],
  subscribe(key, fn) {
    if (!this.clientList[key]) {
      this.clientList[key] = []
    }
    this.clientList[key].push(fn)
  },
  trigger() {
    var key = Array.prototype.shift.call(arguments),
      fns = this.clientList[key]
    if (!fns || fns.length === 0) {
      return false
    }
    for (let i = 0, fn; (fn = fns[i++]); ) {
      fn.apply(this, arguments)
    }
  },
  unsubscribe(key, fn) {
    var fns = this.clientList[key]
    if (!fns) {
      return false
    }
    if (!fn) {
      fns && (fns.length = 0)
    } else {
      for (let l = fns.length - 1; l >= 0; l--) {
        let _fn = fns[l]
        if (_fn === fn) {
          fns.splice(l, 1)
        }
      }
    }
  },
}
```

在这个发布者工厂里我们先是定义个`subscribe`函数来对特定的属性进行订阅，并将订阅者存在属性订阅者列表中。接着定义一个`trigger`用来发布通知给所有的订阅者，接下来是一个`unsubscribe`来取消订阅，对对应属性的特定订阅者取消该属性的订阅。

接着写一个给对象布置“发布-订阅”功能的函数

```js
var installEvent = function (obj) {
  for (let i in event) {
    obj[i] = event[i]
  }
}
//测试
let xiaoming = (price) => {
  console.log('apple-price', price)
}
let xiaoHong = (price) => {
  console.log('banana-price', price)
}
sales.subscribe('apple', xiaoming)
sales.subscribe('banana', xiaoHong)
sales.trigger('apple', 500) //apple-price 500
sales.trigger('banana', 600) //banana-price 600
sales.trigger('apple', 1200) //apple-price 1200
sales.unsubscribe('apple', xiaoming) //取消订阅
sales.trigger('apple', 1) //
```

以上就实现了一个简单的发布-订阅模式

### Vue 中的发布-订阅

发布-订阅在目前的前端框架有诸多的应用，常见的是 Vue2.0 的双向绑定就利用了观察者模式
在 Vue2.0 中使用`Object.defineProperty`对数据的属性进行劫持可以收到数据更改的消息，而如何通知视图更新呢，Vue 中定义了一个依赖类：`dep`

```js
// 源码位置：src/core/observer/dep.js
export default class Dep {
  constructor() {
    this.subs = []
  }

  addSub(sub) {
    this.subs.push(sub)
  }
  // 删除一个依赖
  removeSub(sub) {
    remove(this.subs, sub)
  }
  // 添加一个依赖
  depend() {
    if (window.target) {
      this.addSub(window.target)
    }
  }
  // 通知所有依赖更新
  notify() {
    const subs = this.subs.slice()
    for (let i = 0, l = subs.length; i < l; i++) {
      subs[i].update()
    }
  }
}

/**
 * Remove an item from an array
 */
export function remove(arr, item) {
  if (arr.length) {
    const index = arr.indexOf(item)
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}
```

在上面的依赖管理器 Dep 类中，我们先初始化了一个 subs 数组，用来存放依赖，并且定义了几个实例方法用来对依赖进行添加，删除，通知等操作。

有了依赖管理器后，我们就可以在 getter 中收集依赖，在 setter 中通知依赖更新了，代码如下：

```js
function defineReactive(obj, key, val) {
  if (arguments.length === 2) {
    val = obj[key]
  }
  if (typeof val === 'object') {
    new Observer(val)
  }
  const dep = new Dep() //实例化一个依赖管理器，生成一个依赖管理数组dep
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get() {
      dep.depend() // 在getter中收集依赖
      return val
    },
    set(newVal) {
      if (val === newVal) {
        return
      }
      val = newVal
      dep.notify() // 在setter中通知依赖更新
    },
  })
}
```

其实在 Vue 中还实现了一个叫做`Watcher`的类，而`Watcher`类的实例就是我们上面所说的那个"谁"。换句话说就是：谁用到了数据，谁就是依赖，我们就为谁创建一个`Watcher`实例。在之后数据变化时，我们不直接去通知依赖更新，而是通知依赖对应的`Watch`实例，由`Watcher`实例去通知真正的视图。

`Watcher`类的具体实现如下：

```js
export default class Watcher {
  constructor(vm, expOrFn, cb) {
    this.vm = vm
    this.cb = cb
    this.getter = parsePath(expOrFn)
    this.value = this.get()
  }
  get() {
    window.target = this
    const vm = this.vm
    let value = this.getter.call(vm, vm)
    window.target = undefined
    return value
  }
  update() {
    const oldValue = this.value
    this.value = this.get()
    this.cb.call(this.vm, this.value, oldValue)
  }
}

/**
 * Parse simple path.
 * 把一个形如'data.a.b.c'的字符串路径所表示的值，从真实的data对象中取出来
 * 例如：
 * data = {a:{b:{c:2}}}
 * parsePath('a.b.c')(data)  // 2
 */
const bailRE = /[^\w.$]/
export function parsePath(path) {
  if (bailRE.test(path)) {
    return
  }
  const segments = path.split('.')
  return function (obj) {
    for (let i = 0; i < segments.length; i++) {
      if (!obj) return
      obj = obj[segments[i]]
    }
    return obj
  }
}
```
