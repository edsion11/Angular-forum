var e, n, t, r, o, i, a, u, s, f, c, l, d, p, m, y, h, w, A, b, E, g, _, T, S, R, I, v, L, M, U, H, P, W, x, O, D, F, N, B, C, K, j, q = "object" == typeof process && "object" == typeof process.versions && "string" == typeof process.versions.node && "function" == typeof require;
let k;
if (q) try {
  k = require("path")
} catch (e) {}

function X(e) {
  throw new Error("wasm abort" + (e ? ": " + (e.stack || e) : ""))
}
"undefined" != typeof module && (u = module, module = void 0), (s = {
  preRun: [],
  postRun: [],
  print: console.log.bind(console),
  printErr: console.error.bind(console)
}).ready = new Promise(u => {
  s.onRuntimeInitialized = (() => {
    s.___wasm_call_ctors = e = s.asm.c, s._wrealloc = n = s.asm.d, s._wfree = t = s.asm.e, s._WErrGetCode = r = s.asm.f, s._WErrGetMsg = o = s.asm.g, s._WErrClear = i = s.asm.h, s._parseUTF8 = a = s.asm.i, u({})
  })
}), q && k && (s.locateFile = function (e) {
  return k.join(__dirname, e)
});
const G = s.print;
let V = s.printErr;
for (c in f = {}, s = void 0 !== s ? s : {}) s.hasOwnProperty(c) && (f[c] = s[c]);
for (c in l = [], d = !1, p = !1, !1, !1, d = "object" == typeof window, p = "function" == typeof importScripts, m = "object" == typeof process && "object" == typeof process.versions && "string" == typeof process.versions.node && !d && !p, y = !d && !m && !p, h = "", m ? (h = __dirname + "/", w = function (e, n) {
    return b || (b = require("fs")), E || (E = require("path")), e = E.normalize(e), b.readFileSync(e, n ? null : "utf8")
  }, A = function (e) {
    var n = w(e, !0);
    return n.buffer || (n = new Uint8Array(n)), n.buffer, n
  }, process.argv.length > 1 && process.argv[1].replace(/\\/g, "/"), l = process.argv.slice(2), "undefined" != typeof module && (module.exports = s), s.inspect = function () {
    return "[Emscripten Module object]"
  }) : y ? ("undefined" != typeof read && (w = function (e) {
    return read(e)
  }), A = function (e) {
    return "function" == typeof readbuffer ? new Uint8Array(readbuffer(e)) : read(e, "binary")
  }, "undefined" != typeof scriptArgs ? l = scriptArgs : "undefined" != typeof arguments && (l = arguments), void 0 !== G && ("undefined" == typeof console && (console = {}), console.log = G, console.warn = console.error = "undefined" != typeof printErr ? printErr : G)) : (d || p) && (p ? h = self.location.href : document.currentScript && (h = document.currentScript.src), h = 0 !== h.indexOf("blob:") ? h.substr(0, h.lastIndexOf("/") + 1) : "", w = function (e) {
    var n = new XMLHttpRequest;
    return n.open("GET", e, !1), n.send(null), n.responseText
  }, p && (A = function (e) {
    var n = new XMLHttpRequest;
    return n.open("GET", e, !1), n.responseType = "arraybuffer", n.send(null), new Uint8Array(n.response)
  })), f) f.hasOwnProperty(c) && (s[c] = f[c]);

function z(e, n) {
  return e % n > 0 && (e += n - e % n), e
}

function Y(e) {
  R = e, s.HEAP8 = I = new Int8Array(e), s.HEAP16 = new Int16Array(e), s.HEAP32 = L = new Int32Array(e), s.HEAPU8 = v = new Uint8Array(e), s.HEAPU16 = new Uint16Array(e), s.HEAPU32 = new Uint32Array(e), s.HEAPF32 = new Float32Array(e), s.HEAPF64 = new Float64Array(e)
}

function $(e) {
  for (var n, t; e.length > 0;) "function" != typeof (n = e.shift()) ? "number" == typeof (t = n.func) ? void 0 === n.arg ? s.dynCall_v(t) : s.dynCall_vi(t, n.arg) : t(void 0 === n.arg ? null : n.arg) : n()
}

function J(e) {
  return String.prototype.startsWith ? e.startsWith(F) : 0 === e.indexOf(F)
}

function Q() {
  try {
    if (g) return new Uint8Array(g);
    if (A) return A(N);
    throw "both async and sync fetching of the wasm failed"
  } catch (e) {
    X(e)
  }
}

function Z(e) {
  function n() {
    K || (K = !0, S || ($(H), $(P), s.onRuntimeInitialized && s.onRuntimeInitialized(), function () {
      if (s.postRun)
        for ("function" == typeof s.postRun && (s.postRun = [s.postRun]); s.postRun.length;) e = s.postRun.shift(), W.unshift(e);
      var e;
      $(W)
    }()))
  }
  e = e || l, x > 0 || (function () {
    if (s.preRun)
      for ("function" == typeof s.preRun && (s.preRun = [s.preRun]); s.preRun.length;) e = s.preRun.shift(), U.unshift(e);
    var e;
    $(U)
  }(), x > 0 || (s.setStatus ? (s.setStatus("Running..."), setTimeout(function () {
    setTimeout(function () {
      s.setStatus("")
    }, 1), n()
  }, 1)) : n()))
}
if (f = null, s.arguments && (l = s.arguments), s.thisProgram && s.thisProgram, s.quit && s.quit, s.wasmBinary && (g = s.wasmBinary), s.noExitRuntime && s.noExitRuntime, "object" != typeof WebAssembly && V("no native wasm support detected"), T = new WebAssembly.Table({
    initial: 8,
    maximum: 8,
    element: "anyfunc"
  }), S = !1, "undefined" != typeof TextDecoder && new TextDecoder("utf8"), "undefined" != typeof TextDecoder && new TextDecoder("utf-16le"), 65536, 5251216, 8176, M = s.TOTAL_MEMORY || 16777216, (_ = s.wasmMemory ? s.wasmMemory : new WebAssembly.Memory({
    initial: M / 65536
  })) && (R = _.buffer), M = R.byteLength, Y(R), L[2044] = 5251216, U = [], H = [], P = [], W = [], x = 0, O = null, D = null, s.preloadedImages = {}, s.preloadedAudios = {}, F = "data:application/octet-stream;base64,", J(N = "assets/markdown-wasm/markdown.wasm") || (j = N, N = s.locateFile ? s.locateFile(j, h) : h + j), H.push({
    func: function () {
      e()
    }
  }), B = {
    a: function (e, n, t) {
      v.set(v.subarray(n, n + t), e)
    },
    b: function (e) {
      var n, t = I.length;
      if (e > 2147418112) return !1;
      for (16777216, n = Math.max(t, 16777216); n < e;) n = n <= 536870912 ? z(2 * n, 65536) : Math.min(z((3 * n + 2147483648) / 4, 65536), 2147418112);
      return !! function (e) {
        try {
          return _.grow(e - R.byteLength + 65535 >> 16), Y(_.buffer), 1
        } catch (e) {}
      }(n)
    },
    memory: _,
    table: T
  }, C = function () {
    var e = {
      env: B,
      wasi_unstable: B
    };

    function n(e, n) {
      var t = e.exports;
      s.asm = t,
        function (e) {
          if (x--, s.monitorRunDependencies && s.monitorRunDependencies(x), 0 == x && (null !== O && (clearInterval(O), O = null), D)) {
            var n = D;
            D = null, n()
          }
        }()
    }

    function t(e) {
      n(e.instance)
    }

    function r(n) {
      return (g || !d && !p || "function" != typeof fetch ? new Promise(function (e, n) {
        e(Q())
      }) : fetch(N, {
        credentials: "same-origin"
      }).then(function (e) {
        if (!e.ok) throw "failed to load wasm binary file at '" + N + "'";
        return e.arrayBuffer()
      }).catch(function () {
        return Q()
      })).then(function (n) {
        return WebAssembly.instantiate(n, e)
      }).then(n, function (e) {
        V("failed to asynchronously prepare wasm: " + e), X(e)
      })
    }
    if (x++, s.monitorRunDependencies && s.monitorRunDependencies(x), s.instantiateWasm) try {
      return s.instantiateWasm(e, n)
    } catch (e) {
      return V("Module.instantiateWasm callback failed with error: " + e), !1
    }
    return function () {
      if (g || "function" != typeof WebAssembly.instantiateStreaming || J(N) || "function" != typeof fetch) return r(t);
      fetch(N, {
        credentials: "same-origin"
      }).then(function (n) {
        return WebAssembly.instantiateStreaming(n, e).then(t, function (e) {
          V("wasm streaming compile failed: " + e), V("falling back to ArrayBuffer instantiation"), r(t)
        })
      })
    }(), {}
  }(), s.asm = C, e = s.___wasm_call_ctors = function () {
    return s.asm.c.apply(null, arguments)
  }, s.asm = C, D = function e() {
    K || Z(), K || (D = e)
  }, s.run = Z, s.preInit)
  for ("function" == typeof s.preInit && (s.preInit = [s.preInit]); s.preInit.length > 0;) s.preInit.pop()();
Z(), s.inspect = (() => "[asm]"), void 0 !== u && (module = u, u = void 0);
class WError extends Error {
  constructor(e, n, t, r) {
    super(n, t || "wasm", r || 0), this.name = "WError", this.code = e
  }
}
let ee = 0;
s.postRun.push(() => {
  ee = n(0, 4)
});
const ne = "undefined" != typeof TextEncoder ? (() => {
    const e = new TextEncoder("utf-8"),
      n = new TextDecoder("utf-8");
    return {
      encode: n => e.encode(n),
      decode: e => n.decode(e)
    }
  })() : "undefined" != typeof Buffer ? {
    encode: e => new Uint8Array(Buffer.from(e, "utf-8")),
    decode: e => Buffer.from(e.buffer, e.byteOffset, e.byteLength).toString("utf8")
  } : {
    encode: e => {
      let n = [];
      for (let t = 0, r = e.length; t != r; ++t) n[t] = 255 & e.charCodeAt(t);
      return new Uint8Array(n)
    },
    decode: e => String(e)
  },
  te = s.ready,
  re = {
    COLLAPSE_WHITESPACE: 1,
    PERMISSIVE_ATX_HEADERS: 2,
    PERMISSIVE_URL_AUTO_LINKS: 4,
    PERMISSIVE_EMAIL_AUTO_LINKS: 8,
    NO_INDENTED_CODE_BLOCKS: 16,
    NO_HTML_BLOCKS: 32,
    NO_HTML_SPANS: 64,
    TABLES: 256,
    STRIKETHROUGH: 512,
    PERMISSIVE_WWW_AUTOLINKS: 1024,
    TASK_LISTS: 2048,
    LATEX_MATH_SPANS: 4096,
    WIKI_LINKS: 8192,
    UNDERLINE: 16384,
    DEFAULT: 2823,
    NO_HTML: 96
  },
  oe = {
    HTML: 1,
    XHTML: 2
  };

function ie(e, u) {
  let s = void 0 === (u = u || {}).parseFlags ? re.DEFAULT : u.parseFlags,
    f = 0;
  switch (u.format) {
    case "xhtml":
      f |= oe.HTML | oe.XHTML;
      break;
    case "html":
    case void 0:
    case null:
    case "":
      f |= oe.HTML;
      break;
    default:
      throw new Error(`invalid format "${u.format}"`)
  }
  let c = "string" == typeof e ? ne.encode(e) : e,
    l = function (e) {
      let n = e(ee),
        t = L[ee >> 2];
      if (0 == t) return null;
      let r = v.subarray(t, t + n);
      return r.heapAddr = t, r
    }(e => (function (e, r) {
      const o = function (e) {
          return e instanceof Uint8Array ? e : new Uint8Array(e)
        }(e),
        i = o.length,
        a = function (e, t) {
          const r = n(0, i);
          return v.set(e, r), r
        }(o),
        u = r(a, i);
      return function (e) {
        t(e)
      }(a), u
    })(c, (n, t) => a(n, t, s, f, e)));
  return function () {
    let e = function () {
      let e = r();
      if (0 != e) {
        let n = o(),
          t = 0 != n ? UTF8ArrayToString(v, n) : "";
        return i(), new WError(e, t)
      }
    }();
    if (e) throw e
  }(), u.bytes || u.asMemoryView ? l : ne.decode(l)
}
export {
  te as ready, re as ParseFlags, ie as parse
};
//# sourceMappingURL=markdown.es.js.map
