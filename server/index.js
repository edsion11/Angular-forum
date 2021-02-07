const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const port = 1234

app.use(express.static('public'))
mongoose.Promise = Promise

mongoose.connect('mongodb://127.0.0.1:27017/Angular').then(() => {
  console.log('Mongoose up!')
})

/**
 *  database:Angular1
 *
 *  mongod --config E:\\mongodb\mongodb\Mongo.config
 */
const {
  User,
  Posts
} = require('./models/users')
const {
  Decrypt,
  Encrypt
} = require('./secret/secret')

//app.use((req, res, next) => {
//  res.set({
//    'Access-Control-Allow-Origin': '*'
//  });
//})

app.use(bodyParser.json())


/**
 *登录功能
 *
 */
app.post('/userApi/auth', async (req, res) => {
  const {
    username,
    password
  } = req.body
  console.log(username, password)

  const resp = await User.findOne({
    username,
    password,
  })
  if (!resp) {
    console.log('Incorrect Details')
    res.json({
      success: false,
      message: 'Incorrect Details',
    })
  } else {
    res.json({
      success: true,
      message: 'logging you in',
    })
    console.log('logging you in ')
  }
})

/**
 * 注册功能
 *
 *
 */

app.post('/userApi/register', async (req, res) => {
  const {
    username,
    password,
    email
  } = req.body
  const existingUser = await User.findOne({
    username,
  })
  const existingEmail = await User.findOne({
    email,
  })

  if (existingUser) {
    res.json({
      success: false,
      message: 'username already in use',
    })
    return
  }
  if (existingEmail) {
    res.json({
      success: false,
      message: 'Email already in use',
    })
    return
  }
  const user = new User({
    email,
    username,
    password,
  })
  const result = await user.save()
  console.log('result' + result)
  //store this data on database
  res.json({
    success: true,
    message: 'success',
  })
})
/**
 *退出登录
 *
 */
app.get('/userApi/logout', async (req, res) => {
  res.json({
    success: true,
    message: 'success',
  })
})
/**
 * 获取文章列表
 */
app.get('/userApi/posts:username?', async (req, res) => {
  let username = null
  if (req.query.username) {
    username = req.query.username
  } else {
    res.json({
      success: false,
      message: 'noInfo',
    })
  }
  const posts = await Posts.find({
    username: username
  }, (error, post) => {
    if (error) {
      res.json({
        success: false,
        message: '该用户不存在',
      })
      throw new error(error)
    }
    if (post.length > 0) {
      res.json({
        posts: post,
        success: true,
        message: 'yes',
      })
    } else {
      res.json({
        posts: post,
        success: false,
        message: 'no posts',
      })
    }
  })
})

/**
 * 修改文章
 */
app.put('/userApi/editPosts', async (req, res) => {
  const {
    _id,
    title,
    content
  } = req.body
  console.log(req.body)
  const id = await Posts.findById({
    _id
  }, (error, data) => {
    if (error) {
      res.json({
        success: false,
        message: '出错了',
      })
      throw new error(error)
    } else if (data) {
      data.title = title
      data.content = content
      data.save()
      res.json({
        success: true,
        message: 'success',
      })
    } else {
      res.json({
        success: false,
        message: 'error',
      })
    }
  })
})

/**
 * 删除文章
 * Delete
 * userApi/delete
 */
app.delete('/userApi/delete:id?', async (req, res) => {
  const _id = req.query.id
  console.log(_id)
  const del = await Posts.findById({
    _id
  }, (error, data) => {
    if (error) {
      res.json({
        success: false,
        message: error,
      })
      throw new error(error)
    }
    if (data) {
      console.log(data)
      data.deleteOne()
      data.save()
      res.json({
        success: true,
        message: 'ok',
      })
    } else {
      res.json({
        success: false,
        message: '请勿重复操作',
      })
    }
  })
})

/**
 * 添加文章
 */
app.post('/userApi/addPost', async (req, res) => {
  const {
    title,
    username,
    content
  } = req.body
  if (!(title && username && content)) {
    res.json({
      success: false,
      message: '参数错误',
    })
  }
  const post = new Posts({
    title,
    username,
    content
  })
  await post.save()
  res.json({
    success: true,
    message: '保存成功',
  })
})

// console.log('加密了', Decrypt(Encrypt('javascript')))
app.listen(port, () => {
  console.log('Server listening at port ' + port)
})