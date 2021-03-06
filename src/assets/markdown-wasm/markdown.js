(function (exports) {
  "use strict";

  var e, n, t, r, o, i, a, s, u, f, c, l, d, p, m, y, h, w, b, A, E, g, _, S, R, T, I, v, L, x, P, U, M, W, O, H, D, F, N, B, C, j, K, k = "object" == typeof process && "object" == typeof process.versions && "string" == typeof process.versions.node && "function" == typeof require;
  let q;
  if (k) try {
    q = require("path")
  } catch (e) {}

  function G(e) {
    throw new Error("wasm abort" + (e ? ": " + (e.stack || e) : ""))
  }
  "undefined" != typeof module && (s = module, module = void 0), (u = {
    preRun: [],
    postRun: [],
    print: console.log.bind(console),
    printErr: console.error.bind(console)
  }).ready = new Promise(s => {
    u.onRuntimeInitialized = (() => {
      u.___wasm_call_ctors = e = u.asm.c, u._wrealloc = n = u.asm.d, u._wfree = t = u.asm.e, u._WErrGetCode = r = u.asm.f, u._WErrGetMsg = o = u.asm.g, u._WErrClear = i = u.asm.h, u._parseUTF8 = a = u.asm.i;
      let f = exports;
      "function" == typeof define && define("markdown", f), s(f)
    })
  }), k && q && (u.locateFile = function (e) {
    return q.join(__dirname, e)
  });
  const V = u.print;
  let z = u.printErr;
  for (c in f = {}, u = void 0 !== u ? u : {}) u.hasOwnProperty(c) && (f[c] = u[c]);
  for (c in l = [], d = !1, p = !1, !1, !1, d = "object" == typeof window, p = "function" == typeof importScripts, m = "object" == typeof process && "object" == typeof process.versions && "string" == typeof process.versions.node && !d && !p, y = !d && !m && !p, h = "", m ? (h = __dirname + "/", w = function (e, n) {
      return A || (A = require("fs")), E || (E = require("path")), e = E.normalize(e), A.readFileSync(e, n ? null : "utf8")
    }, b = function (e) {
      var n = w(e, !0);
      return n.buffer || (n = new Uint8Array(n)), n.buffer, n
    }, process.argv.length > 1 && process.argv[1].replace(/\\/g, "/"), l = process.argv.slice(2), "undefined" != typeof module && (module.exports = u), u.inspect = function () {
      return "[Emscripten Module object]"
    }) : y ? ("undefined" != typeof read && (w = function (e) {
      return read(e)
    }), b = function (e) {
      return "function" == typeof readbuffer ? new Uint8Array(readbuffer(e)) : read(e, "binary")
    }, "undefined" != typeof scriptArgs ? l = scriptArgs : "undefined" != typeof arguments && (l = arguments), void 0 !== V && ("undefined" == typeof console && (console = {}), console.log = V, console.warn = console.error = "undefined" != typeof printErr ? printErr : V)) : (d || p) && (p ? h = self.location.href : document.currentScript && (h = document.currentScript.src), h = 0 !== h.indexOf("blob:") ? h.substr(0, h.lastIndexOf("/") + 1) : "", w = function (e) {
      var n = new XMLHttpRequest;
      return n.open("GET", e, !1), n.send(null), n.responseText
    }, p && (b = function (e) {
      var n = new XMLHttpRequest;
      return n.open("GET", e, !1), n.responseType = "arraybuffer", n.send(null), new Uint8Array(n.response)
    })), f) f.hasOwnProperty(c) && (u[c] = f[c]);

  function X(e, n) {
    return e % n > 0 && (e += n - e % n), e
  }

  function Y(e) {
    T = e, u.HEAP8 = I = new Int8Array(e), u.HEAP16 = new Int16Array(e), u.HEAP32 = L = new Int32Array(e), u.HEAPU8 = v = new Uint8Array(e), u.HEAPU16 = new Uint16Array(e), u.HEAPU32 = new Uint32Array(e), u.HEAPF32 = new Float32Array(e), u.HEAPF64 = new Float64Array(e)
  }

  function $(e) {
    for (var n, t; e.length > 0;) "function" != typeof (n = e.shift()) ? "number" == typeof (t = n.func) ? void 0 === n.arg ? u.dynCall_v(t) : u.dynCall_vi(t, n.arg) : t(void 0 === n.arg ? null : n.arg) : n()
  }

  function J(e) {
    return String.prototype.startsWith ? e.startsWith(F) : 0 === e.indexOf(F)
  }

  function Q() {
    try {
      if (g) return new Uint8Array(g);
      if (b) return b(N);
      throw "both async and sync fetching of the wasm failed"
    } catch (e) {
      G(e)
    }
  }

  function Z(e) {
    function n() {
      j || (j = !0, R || ($(U), $(M), u.onRuntimeInitialized && u.onRuntimeInitialized(), function () {
        if (u.postRun)
          for ("function" == typeof u.postRun && (u.postRun = [u.postRun]); u.postRun.length;) e = u.postRun.shift(), W.unshift(e);
        var e;
        $(W)
      }()))
    }
    e = e || l, O > 0 || (function () {
      if (u.preRun)
        for ("function" == typeof u.preRun && (u.preRun = [u.preRun]); u.preRun.length;) e = u.preRun.shift(), P.unshift(e);
      var e;
      $(P)
    }(), O > 0 || (u.setStatus ? (u.setStatus("Running..."), setTimeout(function () {
      setTimeout(function () {
        u.setStatus("")
      }, 1), n()
    }, 1)) : n()))
  }
  if (f = null, u.arguments && (l = u.arguments), u.thisProgram && u.thisProgram, u.quit && u.quit, u.wasmBinary && (g = u.wasmBinary), u.noExitRuntime && u.noExitRuntime, "object" != typeof WebAssembly && z("no native wasm support detected"), S = new WebAssembly.Table({
      initial: 8,
      maximum: 8,
      element: "anyfunc"
    }), R = !1, "undefined" != typeof TextDecoder && new TextDecoder("utf8"), "undefined" != typeof TextDecoder && new TextDecoder("utf-16le"), 65536, 5251216, 8176, x = u.TOTAL_MEMORY || 16777216, (_ = u.wasmMemory ? u.wasmMemory : new WebAssembly.Memory({
      initial: x / 65536
    })) && (T = _.buffer), x = T.byteLength, Y(T), L[2044] = 5251216, P = [], U = [], M = [], W = [], O = 0, H = null, D = null, u.preloadedImages = {}, u.preloadedAudios = {}, F = "data:application/octet-stream;base64,", J(N = "assets/markdown-wasm/markdown.wasm") || (K = N, N = u.locateFile ? u.locateFile(K, h) : h + K), U.push({
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
        for (16777216, n = Math.max(t, 16777216); n < e;) n = n <= 536870912 ? X(2 * n, 65536) : Math.min(X((3 * n + 2147483648) / 4, 65536), 2147418112);
        return !! function (e) {
          try {
            return _.grow(e - T.byteLength + 65535 >> 16), Y(_.buffer), 1
          } catch (e) {}
        }(n)
      },
      memory: _,
      table: S
    }, C = function () {
      var e = {
        env: B,
        wasi_unstable: B
      };

      function n(e, n) {
        var t = e.exports;
        u.asm = t,
          function (e) {
            if (O--, u.monitorRunDependencies && u.monitorRunDependencies(O), 0 == O && (null !== H && (clearInterval(H), H = null), D)) {
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
          z("failed to asynchronously prepare wasm: " + e), G(e)
        })
      }
      if (O++, u.monitorRunDependencies && u.monitorRunDependencies(O), u.instantiateWasm) try {
        return u.instantiateWasm(e, n)
      } catch (e) {
        return z("Module.instantiateWasm callback failed with error: " + e), !1
      }
      return function () {
        if (g || "function" != typeof WebAssembly.instantiateStreaming || J(N) || "function" != typeof fetch) return r(t);
        fetch(N, {
          credentials: "same-origin"
        }).then(function (n) {
          return WebAssembly.instantiateStreaming(n, e).then(t, function (e) {
            z("wasm streaming compile failed: " + e), z("falling back to ArrayBuffer instantiation"), r(t)
          })
        })
      }(), {}
    }(), u.asm = C, e = u.___wasm_call_ctors = function () {
      return u.asm.c.apply(null, arguments)
    }, u.asm = C, D = function e() {
      j || Z(), j || (D = e)
    }, u.run = Z, u.preInit)
    for ("function" == typeof u.preInit && (u.preInit = [u.preInit]); u.preInit.length > 0;) u.preInit.pop()();
  Z(), u.inspect = (() => "[asm]"), void 0 !== s && (module = s, s = void 0), Object.defineProperty(exports, "__esModule", {
    value: !0
  });
  class WError extends Error {
    constructor(e, n, t, r) {
      super(n, t || "wasm", r || 0), this.name = "WError", this.code = e
    }
  }
  let ee = 0;
  u.postRun.push(() => {
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
    te = u.ready,
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
    oe = 1,
    ie = 2;
  exports.ready = te, exports.ParseFlags = re, exports.parse = function (e, s) {
    let u = void 0 === (s = s || {}).parseFlags ? re.DEFAULT : s.parseFlags,
      f = 0;
    switch (s.format) {
      case "xhtml":
        f |= oe | ie;
        break;
      case "html":
      case void 0:
      case null:
      case "":
        f |= oe;
        break;
      default:
        throw new Error(`invalid format "${s.format}"`)
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
          s = r(a, i);
        return function (e) {
          t(e)
        }(a), s
      })(c, (n, t) => a(n, t, u, f, e)));
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
    }(), s.bytes || s.asMemoryView ? l : ne.decode(l)
  };
})(typeof exports != 'undefined' ? exports : this["markdown"] = {})
//# sourceMappingURL=markdown.js.map
