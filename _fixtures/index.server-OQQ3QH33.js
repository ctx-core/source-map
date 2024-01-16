var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined")
    return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// ../../../node_modules/.pnpm/memoirist@0.1.4/node_modules/memoirist/dist/cjs/index.js
var require_cjs = __commonJS({
  "../../../node_modules/.pnpm/memoirist@0.1.4/node_modules/memoirist/dist/cjs/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true }), function(e2, t2) {
      for (var r2 in t2)
        Object.defineProperty(e2, r2, { enumerable: true, get: t2[r2] });
    }(exports, { Memoirist: function() {
      return a;
    }, default: function() {
      return n;
    } });
    var e = (e2, t2) => ({ part: e2, store: null, inert: void 0 !== t2 ? new Map(t2.map((e3) => [e3.part.charCodeAt(0), e3])) : null, params: null, wildcardStore: null });
    var t = (e2, t2) => ({ ...e2, part: t2 });
    var r = (e2) => ({ paramName: e2, store: null, inert: null });
    var a = class _a {
      root = {};
      history = [];
      static regex = { static: /:.+?(?=\/|$)/, params: /:.+?(?=\/|$)/g };
      add(l2, n2, i) {
        let s;
        if ("string" != typeof n2)
          throw TypeError("Route path must be a string");
        "" === n2 ? n2 = "/" : "/" !== n2[0] && (n2 = `/${n2}`), this.history.push([l2, n2, i]);
        let o = "*" === n2[n2.length - 1];
        o && (n2 = n2.slice(0, -1));
        let u = n2.split(_a.regex.static), p = n2.match(_a.regex.params) || [];
        "" === u[u.length - 1] && u.pop(), s = this.root[l2] ? this.root[l2] : this.root[l2] = e("/");
        let c = 0;
        for (let a2 = 0; a2 < u.length; ++a2) {
          let l3 = u[a2];
          if (a2 > 0) {
            let t2 = p[c++].slice(1);
            if (null === s.params)
              s.params = r(t2);
            else if (s.params.paramName !== t2)
              throw Error(`Cannot create route "${n2}" with parameter "${t2}" because a route already exists with a different parameter name ("${s.params.paramName}") in the same location`);
            let a3 = s.params;
            if (null === a3.inert) {
              s = a3.inert = e(l3);
              continue;
            }
            s = a3.inert;
          }
          for (let r2 = 0; ; ) {
            if (r2 === l3.length) {
              if (r2 < s.part.length) {
                let a3 = t(s, s.part.slice(r2));
                Object.assign(s, e(l3, [a3]));
              }
              break;
            }
            if (r2 === s.part.length) {
              if (null === s.inert)
                s.inert = /* @__PURE__ */ new Map();
              else if (s.inert.has(l3.charCodeAt(r2))) {
                s = s.inert.get(l3.charCodeAt(r2)), l3 = l3.slice(r2), r2 = 0;
                continue;
              }
              let t2 = e(l3.slice(r2));
              s.inert.set(l3.charCodeAt(r2), t2), s = t2;
              break;
            }
            if (l3[r2] !== s.part[r2]) {
              let a3 = t(s, s.part.slice(r2)), n3 = e(l3.slice(r2));
              Object.assign(s, e(s.part.slice(0, r2), [a3, n3])), s = n3;
              break;
            }
            ++r2;
          }
        }
        if (c < p.length) {
          let e2 = p[c], t2 = e2.slice(1);
          if (null === s.params)
            s.params = r(t2);
          else if (s.params.paramName !== t2)
            throw Error(`Cannot create route "${n2}" with parameter "${t2}" because a route already exists with a different parameter name ("${s.params.paramName}") in the same location`);
          return null === s.params.store && (s.params.store = i), s.params.store;
        }
        return o ? (null === s.wildcardStore && (s.wildcardStore = i), s.wildcardStore) : (null === s.store && (s.store = i), s.store);
      }
      find(e2, t2) {
        let r2 = this.root[e2];
        return r2 ? l(t2, t2.length, r2, 0) : null;
      }
    };
    var l = (e2, t2, r2, a2) => {
      let n2 = r2?.part, i = a2 + n2.length;
      if (n2.length > 1) {
        if (i > t2)
          return null;
        if (n2.length < 15) {
          for (let t3 = 1, r3 = a2 + 1; t3 < n2.length; ++t3, ++r3)
            if (n2.charCodeAt(t3) !== e2.charCodeAt(r3))
              return null;
        } else if (e2.substring(a2, i) !== n2)
          return null;
      }
      if (i === t2)
        return null !== r2.store ? { store: r2.store, params: {} } : null !== r2.wildcardStore ? { store: r2.wildcardStore, params: { "*": "" } } : null;
      if (null !== r2.inert) {
        let a3 = r2.inert.get(e2.charCodeAt(i));
        if (void 0 !== a3) {
          let r3 = l(e2, t2, a3, i);
          if (null !== r3)
            return r3;
        }
      }
      if (null !== r2.params) {
        let a3 = r2.params, n3 = e2.indexOf("/", i);
        if (n3 !== i) {
          if (-1 === n3 || n3 >= t2) {
            if (null !== a3.store) {
              let r3 = {};
              return r3[a3.paramName] = e2.substring(i, t2), { store: a3.store, params: r3 };
            }
          } else if (null !== a3.inert) {
            let r3 = l(e2, t2, a3.inert, n3);
            if (null !== r3)
              return r3.params[a3.paramName] = e2.substring(i, n3), r3;
          }
        }
      }
      return null !== r2.wildcardStore ? { store: r2.wildcardStore, params: { "*": e2.substring(i, t2) } } : null;
    };
    var n = a;
  }
});

// ../../../node_modules/.pnpm/eventemitter3@5.0.1/node_modules/eventemitter3/index.js
var require_eventemitter3 = __commonJS({
  "../../../node_modules/.pnpm/eventemitter3@5.0.1/node_modules/eventemitter3/index.js"(exports, module) {
    "use strict";
    var has = Object.prototype.hasOwnProperty;
    var prefix = "~";
    function Events() {
    }
    if (Object.create) {
      Events.prototype = /* @__PURE__ */ Object.create(null);
      if (!new Events().__proto__)
        prefix = false;
    }
    function EE(fn, context, once) {
      this.fn = fn;
      this.context = context;
      this.once = once || false;
    }
    function addListener(emitter, event, fn, context, once) {
      if (typeof fn !== "function") {
        throw new TypeError("The listener must be a function");
      }
      var listener = new EE(fn, context || emitter, once), evt = prefix ? prefix + event : event;
      if (!emitter._events[evt])
        emitter._events[evt] = listener, emitter._eventsCount++;
      else if (!emitter._events[evt].fn)
        emitter._events[evt].push(listener);
      else
        emitter._events[evt] = [emitter._events[evt], listener];
      return emitter;
    }
    function clearEvent(emitter, evt) {
      if (--emitter._eventsCount === 0)
        emitter._events = new Events();
      else
        delete emitter._events[evt];
    }
    function EventEmitter() {
      this._events = new Events();
      this._eventsCount = 0;
    }
    EventEmitter.prototype.eventNames = function eventNames() {
      var names = [], events, name;
      if (this._eventsCount === 0)
        return names;
      for (name in events = this._events) {
        if (has.call(events, name))
          names.push(prefix ? name.slice(1) : name);
      }
      if (Object.getOwnPropertySymbols) {
        return names.concat(Object.getOwnPropertySymbols(events));
      }
      return names;
    };
    EventEmitter.prototype.listeners = function listeners(event) {
      var evt = prefix ? prefix + event : event, handlers = this._events[evt];
      if (!handlers)
        return [];
      if (handlers.fn)
        return [handlers.fn];
      for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
        ee[i] = handlers[i].fn;
      }
      return ee;
    };
    EventEmitter.prototype.listenerCount = function listenerCount(event) {
      var evt = prefix ? prefix + event : event, listeners = this._events[evt];
      if (!listeners)
        return 0;
      if (listeners.fn)
        return 1;
      return listeners.length;
    };
    EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
      var evt = prefix ? prefix + event : event;
      if (!this._events[evt])
        return false;
      var listeners = this._events[evt], len = arguments.length, args, i;
      if (listeners.fn) {
        if (listeners.once)
          this.removeListener(event, listeners.fn, void 0, true);
        switch (len) {
          case 1:
            return listeners.fn.call(listeners.context), true;
          case 2:
            return listeners.fn.call(listeners.context, a1), true;
          case 3:
            return listeners.fn.call(listeners.context, a1, a2), true;
          case 4:
            return listeners.fn.call(listeners.context, a1, a2, a3), true;
          case 5:
            return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
          case 6:
            return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
        }
        for (i = 1, args = new Array(len - 1); i < len; i++) {
          args[i - 1] = arguments[i];
        }
        listeners.fn.apply(listeners.context, args);
      } else {
        var length = listeners.length, j;
        for (i = 0; i < length; i++) {
          if (listeners[i].once)
            this.removeListener(event, listeners[i].fn, void 0, true);
          switch (len) {
            case 1:
              listeners[i].fn.call(listeners[i].context);
              break;
            case 2:
              listeners[i].fn.call(listeners[i].context, a1);
              break;
            case 3:
              listeners[i].fn.call(listeners[i].context, a1, a2);
              break;
            case 4:
              listeners[i].fn.call(listeners[i].context, a1, a2, a3);
              break;
            default:
              if (!args)
                for (j = 1, args = new Array(len - 1); j < len; j++) {
                  args[j - 1] = arguments[j];
                }
              listeners[i].fn.apply(listeners[i].context, args);
          }
        }
      }
      return true;
    };
    EventEmitter.prototype.on = function on(event, fn, context) {
      return addListener(this, event, fn, context, false);
    };
    EventEmitter.prototype.once = function once(event, fn, context) {
      return addListener(this, event, fn, context, true);
    };
    EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
      var evt = prefix ? prefix + event : event;
      if (!this._events[evt])
        return this;
      if (!fn) {
        clearEvent(this, evt);
        return this;
      }
      var listeners = this._events[evt];
      if (listeners.fn) {
        if (listeners.fn === fn && (!once || listeners.once) && (!context || listeners.context === context)) {
          clearEvent(this, evt);
        }
      } else {
        for (var i = 0, events = [], length = listeners.length; i < length; i++) {
          if (listeners[i].fn !== fn || once && !listeners[i].once || context && listeners[i].context !== context) {
            events.push(listeners[i]);
          }
        }
        if (events.length)
          this._events[evt] = events.length === 1 ? events[0] : events;
        else
          clearEvent(this, evt);
      }
      return this;
    };
    EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
      var evt;
      if (event) {
        evt = prefix ? prefix + event : event;
        if (this._events[evt])
          clearEvent(this, evt);
      } else {
        this._events = new Events();
        this._eventsCount = 0;
      }
      return this;
    };
    EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
    EventEmitter.prototype.addListener = EventEmitter.prototype.on;
    EventEmitter.prefixed = prefix;
    EventEmitter.EventEmitter = EventEmitter;
    if ("undefined" !== typeof module) {
      module.exports = EventEmitter;
    }
  }
});

// ../../../node_modules/.pnpm/elysia@0.8.9_@sinclair+typebox@0.32.9_typescript@5.4.0-dev.20231224/node_modules/elysia/dist/cjs/trace.js
var require_trace = __commonJS({
  "../../../node_modules/.pnpm/elysia@0.8.9_@sinclair+typebox@0.32.9_typescript@5.4.0-dev.20231224/node_modules/elysia/dist/cjs/trace.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createTraceListener = void 0;
    var resolver = () => {
      let resolve2;
      const promise = new Promise((r) => {
        resolve2 = r;
      });
      return [promise, resolve2];
    };
    var createSignal = () => {
      const [start, resolveStart] = resolver();
      const [end, resolveEnd] = resolver();
      const children = [];
      const resolvers = [];
      return {
        signal: start,
        consume: (trace) => {
          switch (trace.type) {
            case "begin":
              if (trace.unit && children.length === 0)
                for (let i = 0; i < trace.unit; i++) {
                  const [start2, resolveStart2] = resolver();
                  const [end2, resolveEnd2] = resolver();
                  children.push(start2);
                  resolvers.push([
                    (trace2) => {
                      resolveStart2({
                        children: [],
                        end: end2,
                        name: trace2.name ?? "",
                        skip: false,
                        time: trace2.time
                      });
                    },
                    (time) => {
                      resolveEnd2(time);
                    }
                  ]);
                }
              resolveStart({
                children,
                end,
                name: trace.name ?? "",
                skip: false,
                time: trace.time
              });
              break;
            case "end":
              resolveEnd(trace.time);
              break;
          }
        },
        consumeChild(trace) {
          switch (trace.type) {
            case "begin":
              if (!resolvers[0])
                return;
              const [resolveStart2] = resolvers[0];
              resolveStart2({
                children: [],
                end,
                name: trace.name ?? "",
                skip: false,
                time: trace.time
              });
              break;
            case "end":
              const child = resolvers.shift();
              if (!child)
                return;
              child[1](trace.time);
          }
        },
        resolve() {
          resolveStart({
            children: [],
            end: new Promise((resolve2) => resolve2(0)),
            name: "",
            skip: true,
            time: 0
          });
          for (const [resolveStart2, resolveEnd2] of resolvers) {
            resolveStart2({
              children: [],
              end: new Promise((resolve2) => resolve2(0)),
              name: "",
              skip: true,
              time: 0
            });
            resolveEnd2(0);
          }
          resolveEnd(0);
        }
      };
    };
    var createTraceListener = (getReporter, totalListener, handler) => {
      return async function trace(trace) {
        if (trace.event !== "request" || trace.type !== "begin")
          return;
        const id = trace.id;
        const reporter = getReporter();
        const request = createSignal();
        const parse = createSignal();
        const transform = createSignal();
        const beforeHandle = createSignal();
        const handle = createSignal();
        const afterHandle = createSignal();
        const error = createSignal();
        const response = createSignal();
        request.consume(trace);
        const reducer = (event) => {
          if (event.id === id)
            switch (event.event) {
              case "request":
                request.consume(event);
                break;
              case "request.unit":
                request.consumeChild(event);
                break;
              case "parse":
                parse.consume(event);
                break;
              case "parse.unit":
                parse.consumeChild(event);
                break;
              case "transform":
                transform.consume(event);
                break;
              case "transform.unit":
                transform.consumeChild(event);
                break;
              case "beforeHandle":
                beforeHandle.consume(event);
                break;
              case "beforeHandle.unit":
                beforeHandle.consumeChild(event);
                break;
              case "handle":
                handle.consume(event);
                break;
              case "afterHandle":
                afterHandle.consume(event);
                break;
              case "afterHandle.unit":
                afterHandle.consumeChild(event);
                break;
              case "error":
                error.consume(event);
                break;
              case "error.unit":
                error.consumeChild(event);
                break;
              case "response":
                if (event.type === "begin") {
                  request.resolve();
                  parse.resolve();
                  transform.resolve();
                  beforeHandle.resolve();
                  handle.resolve();
                  afterHandle.resolve();
                  error.resolve();
                } else
                  reporter.off("event", reducer);
                response.consume(event);
                break;
              case "response.unit":
                response.consumeChild(event);
                break;
              case "exit":
                request.resolve();
                parse.resolve();
                transform.resolve();
                beforeHandle.resolve();
                handle.resolve();
                afterHandle.resolve();
                error.resolve();
                break;
            }
        };
        reporter.on("event", reducer);
        await handler({
          id,
          // @ts-ignore
          context: trace.ctx,
          // @ts-ignore
          set: trace.ctx?.set,
          // @ts-ignore
          store: trace.ctx?.store,
          time: trace.time,
          request: request.signal,
          parse: parse.signal,
          transform: transform.signal,
          beforeHandle: beforeHandle.signal,
          handle: handle.signal,
          afterHandle: afterHandle.signal,
          error: error.signal,
          response: response.signal
        });
        reporter.emit(`res${id}.${totalListener}`, void 0);
      };
    };
    exports.createTraceListener = createTraceListener;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/value/guard/guard.js
var require_guard = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/value/guard/guard.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.IsValueType = exports.IsSymbol = exports.IsFunction = exports.IsString = exports.IsBigInt = exports.IsInteger = exports.IsNumber = exports.IsBoolean = exports.IsNull = exports.IsUndefined = exports.IsArray = exports.IsObject = exports.IsPlainObject = exports.HasPropertyKey = exports.IsDate = exports.IsUint8Array = exports.IsPromise = exports.IsTypedArray = exports.IsIterator = exports.IsAsyncIterator = void 0;
    function IsAsyncIterator(value) {
      return IsObject(value) && Symbol.asyncIterator in value;
    }
    exports.IsAsyncIterator = IsAsyncIterator;
    function IsIterator(value) {
      return IsObject(value) && Symbol.iterator in value;
    }
    exports.IsIterator = IsIterator;
    function IsTypedArray(value) {
      return ArrayBuffer.isView(value);
    }
    exports.IsTypedArray = IsTypedArray;
    function IsPromise(value) {
      return value instanceof Promise;
    }
    exports.IsPromise = IsPromise;
    function IsUint8Array(value) {
      return value instanceof Uint8Array;
    }
    exports.IsUint8Array = IsUint8Array;
    function IsDate(value) {
      return value instanceof Date && Number.isFinite(value.getTime());
    }
    exports.IsDate = IsDate;
    function HasPropertyKey(value, key) {
      return key in value;
    }
    exports.HasPropertyKey = HasPropertyKey;
    function IsPlainObject(value) {
      return IsObject(value) && IsFunction(value.constructor) && value.constructor.name === "Object";
    }
    exports.IsPlainObject = IsPlainObject;
    function IsObject(value) {
      return value !== null && typeof value === "object";
    }
    exports.IsObject = IsObject;
    function IsArray(value) {
      return Array.isArray(value) && !ArrayBuffer.isView(value);
    }
    exports.IsArray = IsArray;
    function IsUndefined(value) {
      return value === void 0;
    }
    exports.IsUndefined = IsUndefined;
    function IsNull(value) {
      return value === null;
    }
    exports.IsNull = IsNull;
    function IsBoolean(value) {
      return typeof value === "boolean";
    }
    exports.IsBoolean = IsBoolean;
    function IsNumber(value) {
      return typeof value === "number";
    }
    exports.IsNumber = IsNumber;
    function IsInteger(value) {
      return IsNumber(value) && Number.isInteger(value);
    }
    exports.IsInteger = IsInteger;
    function IsBigInt(value) {
      return typeof value === "bigint";
    }
    exports.IsBigInt = IsBigInt;
    function IsString(value) {
      return typeof value === "string";
    }
    exports.IsString = IsString;
    function IsFunction(value) {
      return typeof value === "function";
    }
    exports.IsFunction = IsFunction;
    function IsSymbol(value) {
      return typeof value === "symbol";
    }
    exports.IsSymbol = IsSymbol;
    function IsValueType(value) {
      return IsBigInt(value) || IsBoolean(value) || IsNull(value) || IsNumber(value) || IsString(value) || IsSymbol(value) || IsUndefined(value);
    }
    exports.IsValueType = IsValueType;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/value/guard/index.js
var require_guard2 = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/value/guard/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_guard(), exports);
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/system/policy.js
var require_policy = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/system/policy.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TypeSystemPolicy = void 0;
    var index_1 = require_guard2();
    var TypeSystemPolicy;
    (function(TypeSystemPolicy2) {
      TypeSystemPolicy2.ExactOptionalPropertyTypes = false;
      TypeSystemPolicy2.AllowArrayObject = false;
      TypeSystemPolicy2.AllowNaN = false;
      TypeSystemPolicy2.AllowNullVoid = false;
      function IsExactOptionalProperty(value, key) {
        return TypeSystemPolicy2.ExactOptionalPropertyTypes ? key in value : value[key] !== void 0;
      }
      TypeSystemPolicy2.IsExactOptionalProperty = IsExactOptionalProperty;
      function IsObjectLike(value) {
        const isObject = (0, index_1.IsObject)(value);
        return TypeSystemPolicy2.AllowArrayObject ? isObject : isObject && !(0, index_1.IsArray)(value);
      }
      TypeSystemPolicy2.IsObjectLike = IsObjectLike;
      function IsRecordLike(value) {
        return IsObjectLike(value) && !(value instanceof Date) && !(value instanceof Uint8Array);
      }
      TypeSystemPolicy2.IsRecordLike = IsRecordLike;
      function IsNumberLike(value) {
        const isNumber = (0, index_1.IsNumber)(value);
        return TypeSystemPolicy2.AllowNaN ? isNumber : isNumber && Number.isFinite(value);
      }
      TypeSystemPolicy2.IsNumberLike = IsNumberLike;
      function IsVoidLike(value) {
        const isUndefined = (0, index_1.IsUndefined)(value);
        return TypeSystemPolicy2.AllowNullVoid ? isUndefined || value === null : isUndefined;
      }
      TypeSystemPolicy2.IsVoidLike = IsVoidLike;
    })(TypeSystemPolicy || (exports.TypeSystemPolicy = TypeSystemPolicy = {}));
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/registry/format.js
var require_format = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/registry/format.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Get = exports.Set = exports.Has = exports.Delete = exports.Clear = exports.Entries = void 0;
    var map = /* @__PURE__ */ new Map();
    function Entries() {
      return new Map(map);
    }
    exports.Entries = Entries;
    function Clear() {
      return map.clear();
    }
    exports.Clear = Clear;
    function Delete(format) {
      return map.delete(format);
    }
    exports.Delete = Delete;
    function Has(format) {
      return map.has(format);
    }
    exports.Has = Has;
    function Set2(format, func) {
      map.set(format, func);
    }
    exports.Set = Set2;
    function Get(format) {
      return map.get(format);
    }
    exports.Get = Get;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/registry/type.js
var require_type = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/registry/type.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Get = exports.Set = exports.Has = exports.Delete = exports.Clear = exports.Entries = void 0;
    var map = /* @__PURE__ */ new Map();
    function Entries() {
      return new Map(map);
    }
    exports.Entries = Entries;
    function Clear() {
      return map.clear();
    }
    exports.Clear = Clear;
    function Delete(kind) {
      return map.delete(kind);
    }
    exports.Delete = Delete;
    function Has(kind) {
      return map.has(kind);
    }
    exports.Has = Has;
    function Set2(kind, func) {
      map.set(kind, func);
    }
    exports.Set = Set2;
    function Get(kind) {
      return map.get(kind);
    }
    exports.Get = Get;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/registry/index.js
var require_registry = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/registry/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TypeRegistry = exports.FormatRegistry = void 0;
    exports.FormatRegistry = require_format();
    exports.TypeRegistry = require_type();
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/symbols/symbols.js
var require_symbols = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/symbols/symbols.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Kind = exports.Hint = exports.OptionalKind = exports.ReadonlyKind = exports.TransformKind = void 0;
    exports.TransformKind = Symbol.for("TypeBox.Transform");
    exports.ReadonlyKind = Symbol.for("TypeBox.Readonly");
    exports.OptionalKind = Symbol.for("TypeBox.Optional");
    exports.Hint = Symbol.for("TypeBox.Hint");
    exports.Kind = Symbol.for("TypeBox.Kind");
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/symbols/index.js
var require_symbols2 = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/symbols/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_symbols(), exports);
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/unsafe/unsafe.js
var require_unsafe = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/unsafe/unsafe.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Unsafe = void 0;
    var index_1 = require_symbols2();
    function Unsafe(options = {}) {
      return {
        ...options,
        [index_1.Kind]: options[index_1.Kind] ?? "Unsafe"
      };
    }
    exports.Unsafe = Unsafe;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/unsafe/index.js
var require_unsafe2 = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/unsafe/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_unsafe(), exports);
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/error/error.js
var require_error = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/error/error.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TypeBoxError = void 0;
    var TypeBoxError = class extends Error {
      constructor(message) {
        super(message);
      }
    };
    exports.TypeBoxError = TypeBoxError;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/error/index.js
var require_error2 = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/error/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_error(), exports);
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/system/system.js
var require_system = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/system/system.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TypeSystem = exports.TypeSystemDuplicateFormat = exports.TypeSystemDuplicateTypeKind = void 0;
    var index_1 = require_registry();
    var index_2 = require_unsafe2();
    var index_3 = require_symbols2();
    var index_4 = require_error2();
    var TypeSystemDuplicateTypeKind = class extends index_4.TypeBoxError {
      constructor(kind) {
        super(`Duplicate type kind '${kind}' detected`);
      }
    };
    exports.TypeSystemDuplicateTypeKind = TypeSystemDuplicateTypeKind;
    var TypeSystemDuplicateFormat = class extends index_4.TypeBoxError {
      constructor(kind) {
        super(`Duplicate string format '${kind}' detected`);
      }
    };
    exports.TypeSystemDuplicateFormat = TypeSystemDuplicateFormat;
    var TypeSystem;
    (function(TypeSystem2) {
      function Type(kind, check) {
        if (index_1.TypeRegistry.Has(kind))
          throw new TypeSystemDuplicateTypeKind(kind);
        index_1.TypeRegistry.Set(kind, check);
        return (options = {}) => (0, index_2.Unsafe)({ ...options, [index_3.Kind]: kind });
      }
      TypeSystem2.Type = Type;
      function Format(format, check) {
        if (index_1.FormatRegistry.Has(format))
          throw new TypeSystemDuplicateFormat(format);
        index_1.FormatRegistry.Set(format, check);
        return format;
      }
      TypeSystem2.Format = Format;
    })(TypeSystem || (exports.TypeSystem = TypeSystem = {}));
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/system/index.js
var require_system2 = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/system/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TypeSystemDuplicateTypeKind = exports.TypeSystemDuplicateFormat = exports.TypeSystem = exports.TypeSystemPolicy = void 0;
    var policy_1 = require_policy();
    Object.defineProperty(exports, "TypeSystemPolicy", { enumerable: true, get: function() {
      return policy_1.TypeSystemPolicy;
    } });
    var system_1 = require_system();
    Object.defineProperty(exports, "TypeSystem", { enumerable: true, get: function() {
      return system_1.TypeSystem;
    } });
    Object.defineProperty(exports, "TypeSystemDuplicateFormat", { enumerable: true, get: function() {
      return system_1.TypeSystemDuplicateFormat;
    } });
    Object.defineProperty(exports, "TypeSystemDuplicateTypeKind", { enumerable: true, get: function() {
      return system_1.TypeSystemDuplicateTypeKind;
    } });
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/mapped/mapped-key.js
var require_mapped_key = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/mapped/mapped-key.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MappedKey = void 0;
    var index_1 = require_symbols2();
    function MappedKey(T) {
      return {
        [index_1.Kind]: "MappedKey",
        keys: T
      };
    }
    exports.MappedKey = MappedKey;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/mapped/mapped-result.js
var require_mapped_result = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/mapped/mapped-result.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MappedResult = void 0;
    var index_1 = require_symbols2();
    function MappedResult(properties) {
      return {
        [index_1.Kind]: "MappedResult",
        properties
      };
    }
    exports.MappedResult = MappedResult;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/guard/value.js
var require_value = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/guard/value.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.IsUndefined = exports.IsUint8Array = exports.IsSymbol = exports.IsString = exports.IsRegExp = exports.IsObject = exports.IsNumber = exports.IsNull = exports.IsIterator = exports.IsFunction = exports.IsDate = exports.IsBoolean = exports.IsBigInt = exports.IsArray = exports.IsAsyncIterator = void 0;
    function IsAsyncIterator(value) {
      return IsObject(value) && !IsArray(value) && !IsUint8Array(value) && Symbol.asyncIterator in value;
    }
    exports.IsAsyncIterator = IsAsyncIterator;
    function IsArray(value) {
      return Array.isArray(value);
    }
    exports.IsArray = IsArray;
    function IsBigInt(value) {
      return typeof value === "bigint";
    }
    exports.IsBigInt = IsBigInt;
    function IsBoolean(value) {
      return typeof value === "boolean";
    }
    exports.IsBoolean = IsBoolean;
    function IsDate(value) {
      return value instanceof globalThis.Date;
    }
    exports.IsDate = IsDate;
    function IsFunction(value) {
      return typeof value === "function";
    }
    exports.IsFunction = IsFunction;
    function IsIterator(value) {
      return IsObject(value) && !IsArray(value) && !IsUint8Array(value) && Symbol.iterator in value;
    }
    exports.IsIterator = IsIterator;
    function IsNull(value) {
      return value === null;
    }
    exports.IsNull = IsNull;
    function IsNumber(value) {
      return typeof value === "number";
    }
    exports.IsNumber = IsNumber;
    function IsObject(value) {
      return typeof value === "object" && value !== null;
    }
    exports.IsObject = IsObject;
    function IsRegExp(value) {
      return value instanceof globalThis.RegExp;
    }
    exports.IsRegExp = IsRegExp;
    function IsString(value) {
      return typeof value === "string";
    }
    exports.IsString = IsString;
    function IsSymbol(value) {
      return typeof value === "symbol";
    }
    exports.IsSymbol = IsSymbol;
    function IsUint8Array(value) {
      return value instanceof globalThis.Uint8Array;
    }
    exports.IsUint8Array = IsUint8Array;
    function IsUndefined(value) {
      return value === void 0;
    }
    exports.IsUndefined = IsUndefined;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/clone/value.js
var require_value2 = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/clone/value.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Clone = void 0;
    var ValueGuard = require_value();
    function ArrayType(value) {
      return value.map((value2) => Visit(value2));
    }
    function DateType(value) {
      return new Date(value.getTime());
    }
    function Uint8ArrayType(value) {
      return new Uint8Array(value);
    }
    function RegExpType(value) {
      return new RegExp(value.source, value.flags);
    }
    function ObjectType(value) {
      const clonedProperties = Object.getOwnPropertyNames(value).reduce((acc, key) => ({ ...acc, [key]: Visit(value[key]) }), {});
      const clonedSymbols = Object.getOwnPropertySymbols(value).reduce((acc, key) => ({ ...acc, [key]: Visit(value[key]) }), {});
      return { ...clonedProperties, ...clonedSymbols };
    }
    function Visit(value) {
      return ValueGuard.IsArray(value) ? ArrayType(value) : ValueGuard.IsDate(value) ? DateType(value) : ValueGuard.IsUint8Array(value) ? Uint8ArrayType(value) : ValueGuard.IsRegExp(value) ? RegExpType(value) : ValueGuard.IsObject(value) ? ObjectType(value) : value;
    }
    function Clone(value) {
      return Visit(value);
    }
    exports.Clone = Clone;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/clone/type.js
var require_type2 = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/clone/type.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CloneType = exports.CloneRest = void 0;
    var value_1 = require_value2();
    function CloneRest(schemas) {
      return schemas.map((schema) => CloneType(schema));
    }
    exports.CloneRest = CloneRest;
    function CloneType(schema, options = {}) {
      return { ...(0, value_1.Clone)(schema), ...options };
    }
    exports.CloneType = CloneType;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/discard/discard.js
var require_discard = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/discard/discard.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Discard = void 0;
    function DiscardKey(value, key) {
      const { [key]: _, ...rest } = value;
      return rest;
    }
    function Discard(value, keys) {
      return keys.reduce((acc, key) => DiscardKey(acc, key), value);
    }
    exports.Discard = Discard;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/discard/index.js
var require_discard2 = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/discard/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_discard(), exports);
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/array/array.js
var require_array = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/array/array.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Array = void 0;
    var index_1 = require_symbols2();
    var type_1 = require_type2();
    function Array2(schema, options = {}) {
      return {
        ...options,
        [index_1.Kind]: "Array",
        type: "array",
        items: (0, type_1.CloneType)(schema)
      };
    }
    exports.Array = Array2;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/array/index.js
var require_array2 = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/array/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_array(), exports);
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/async-iterator/async-iterator.js
var require_async_iterator = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/async-iterator/async-iterator.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AsyncIterator = void 0;
    var index_1 = require_symbols2();
    var type_1 = require_type2();
    function AsyncIterator(items, options = {}) {
      return {
        ...options,
        [index_1.Kind]: "AsyncIterator",
        type: "AsyncIterator",
        items: (0, type_1.CloneType)(items)
      };
    }
    exports.AsyncIterator = AsyncIterator;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/async-iterator/index.js
var require_async_iterator2 = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/async-iterator/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_async_iterator(), exports);
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/constructor/constructor.js
var require_constructor = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/constructor/constructor.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Constructor = void 0;
    var type_1 = require_type2();
    var index_1 = require_symbols2();
    function Constructor(parameters, returns, options) {
      return {
        ...options,
        [index_1.Kind]: "Constructor",
        type: "Constructor",
        parameters: (0, type_1.CloneRest)(parameters),
        returns: (0, type_1.CloneType)(returns)
      };
    }
    exports.Constructor = Constructor;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/constructor/index.js
var require_constructor2 = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/constructor/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_constructor(), exports);
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/function/function.js
var require_function = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/function/function.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Function = void 0;
    var type_1 = require_type2();
    var index_1 = require_symbols2();
    function Function2(parameters, returns, options) {
      return {
        ...options,
        [index_1.Kind]: "Function",
        type: "Function",
        parameters: (0, type_1.CloneRest)(parameters),
        returns: (0, type_1.CloneType)(returns)
      };
    }
    exports.Function = Function2;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/function/index.js
var require_function2 = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/function/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_function(), exports);
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/never/never.js
var require_never = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/never/never.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Never = void 0;
    var index_1 = require_symbols2();
    function Never(options = {}) {
      return {
        ...options,
        [index_1.Kind]: "Never",
        not: {}
      };
    }
    exports.Never = Never;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/never/index.js
var require_never2 = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/never/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_never(), exports);
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/guard/type.js
var require_type3 = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/guard/type.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.IsSchema = exports.IsKind = exports.IsVoid = exports.IsUnsafe = exports.IsUnknown = exports.IsUint8Array = exports.IsUnion = exports.IsUnionLiteral = exports.IsUndefined = exports.IsTuple = exports.IsTransform = exports.IsThis = exports.IsTemplateLiteral = exports.IsSymbol = exports.IsString = exports.IsRegExp = exports.IsRef = exports.IsRecursive = exports.IsRecord = exports.IsPromise = exports.IsObject = exports.IsNumber = exports.IsNull = exports.IsNot = exports.IsNever = exports.IsMappedResult = exports.IsMappedKey = exports.IsLiteralValue = exports.IsLiteral = exports.IsLiteralBoolean = exports.IsLiteralNumber = exports.IsLiteralString = exports.IsKindOf = exports.IsIterator = exports.IsIntersect = exports.IsProperties = exports.IsInteger = exports.IsFunction = exports.IsDate = exports.IsConstructor = exports.IsBoolean = exports.IsBigInt = exports.IsAsyncIterator = exports.IsArray = exports.IsAny = exports.IsOptional = exports.IsReadonly = exports.TypeGuardUnknownTypeError = void 0;
    var ValueGuard = require_value();
    var index_1 = require_symbols2();
    var index_2 = require_error2();
    var TypeGuardUnknownTypeError = class extends index_2.TypeBoxError {
    };
    exports.TypeGuardUnknownTypeError = TypeGuardUnknownTypeError;
    var KnownTypes = [
      "Any",
      "Array",
      "AsyncIterator",
      "BigInt",
      "Boolean",
      "Constructor",
      "Date",
      "Enum",
      "Function",
      "Integer",
      "Intersect",
      "Iterator",
      "Literal",
      "MappedKey",
      "MappedResult",
      "Not",
      "Null",
      "Number",
      "Object",
      "Promise",
      "Record",
      "Ref",
      "RegExp",
      "String",
      "Symbol",
      "TemplateLiteral",
      "This",
      "Tuple",
      "Undefined",
      "Union",
      "Uint8Array",
      "Unknown",
      "Void"
    ];
    function IsPattern(value) {
      try {
        new RegExp(value);
        return true;
      } catch {
        return false;
      }
    }
    function IsControlCharacterFree(value) {
      if (!ValueGuard.IsString(value))
        return false;
      for (let i = 0; i < value.length; i++) {
        const code = value.charCodeAt(i);
        if (code >= 7 && code <= 13 || code === 27 || code === 127) {
          return false;
        }
      }
      return true;
    }
    function IsAdditionalProperties(value) {
      return IsOptionalBoolean(value) || IsSchema(value);
    }
    function IsOptionalBigInt(value) {
      return ValueGuard.IsUndefined(value) || ValueGuard.IsBigInt(value);
    }
    function IsOptionalNumber(value) {
      return ValueGuard.IsUndefined(value) || ValueGuard.IsNumber(value);
    }
    function IsOptionalBoolean(value) {
      return ValueGuard.IsUndefined(value) || ValueGuard.IsBoolean(value);
    }
    function IsOptionalString(value) {
      return ValueGuard.IsUndefined(value) || ValueGuard.IsString(value);
    }
    function IsOptionalPattern(value) {
      return ValueGuard.IsUndefined(value) || ValueGuard.IsString(value) && IsControlCharacterFree(value) && IsPattern(value);
    }
    function IsOptionalFormat(value) {
      return ValueGuard.IsUndefined(value) || ValueGuard.IsString(value) && IsControlCharacterFree(value);
    }
    function IsOptionalSchema(value) {
      return ValueGuard.IsUndefined(value) || IsSchema(value);
    }
    function IsReadonly(value) {
      return ValueGuard.IsObject(value) && value[index_1.ReadonlyKind] === "Readonly";
    }
    exports.IsReadonly = IsReadonly;
    function IsOptional(value) {
      return ValueGuard.IsObject(value) && value[index_1.OptionalKind] === "Optional";
    }
    exports.IsOptional = IsOptional;
    function IsAny(value) {
      return IsKindOf(value, "Any") && IsOptionalString(value.$id);
    }
    exports.IsAny = IsAny;
    function IsArray(value) {
      return IsKindOf(value, "Array") && value.type === "array" && IsOptionalString(value.$id) && IsSchema(value.items) && IsOptionalNumber(value.minItems) && IsOptionalNumber(value.maxItems) && IsOptionalBoolean(value.uniqueItems) && IsOptionalSchema(value.contains) && IsOptionalNumber(value.minContains) && IsOptionalNumber(value.maxContains);
    }
    exports.IsArray = IsArray;
    function IsAsyncIterator(value) {
      return IsKindOf(value, "AsyncIterator") && value.type === "AsyncIterator" && IsOptionalString(value.$id) && IsSchema(value.items);
    }
    exports.IsAsyncIterator = IsAsyncIterator;
    function IsBigInt(value) {
      return IsKindOf(value, "BigInt") && value.type === "bigint" && IsOptionalString(value.$id) && IsOptionalBigInt(value.exclusiveMaximum) && IsOptionalBigInt(value.exclusiveMinimum) && IsOptionalBigInt(value.maximum) && IsOptionalBigInt(value.minimum) && IsOptionalBigInt(value.multipleOf);
    }
    exports.IsBigInt = IsBigInt;
    function IsBoolean(value) {
      return IsKindOf(value, "Boolean") && value.type === "boolean" && IsOptionalString(value.$id);
    }
    exports.IsBoolean = IsBoolean;
    function IsConstructor(value) {
      return IsKindOf(value, "Constructor") && value.type === "Constructor" && IsOptionalString(value.$id) && ValueGuard.IsArray(value.parameters) && value.parameters.every((schema) => IsSchema(schema)) && IsSchema(value.returns);
    }
    exports.IsConstructor = IsConstructor;
    function IsDate(value) {
      return IsKindOf(value, "Date") && value.type === "Date" && IsOptionalString(value.$id) && IsOptionalNumber(value.exclusiveMaximumTimestamp) && IsOptionalNumber(value.exclusiveMinimumTimestamp) && IsOptionalNumber(value.maximumTimestamp) && IsOptionalNumber(value.minimumTimestamp) && IsOptionalNumber(value.multipleOfTimestamp);
    }
    exports.IsDate = IsDate;
    function IsFunction(value) {
      return IsKindOf(value, "Function") && value.type === "Function" && IsOptionalString(value.$id) && ValueGuard.IsArray(value.parameters) && value.parameters.every((schema) => IsSchema(schema)) && IsSchema(value.returns);
    }
    exports.IsFunction = IsFunction;
    function IsInteger(value) {
      return IsKindOf(value, "Integer") && value.type === "integer" && IsOptionalString(value.$id) && IsOptionalNumber(value.exclusiveMaximum) && IsOptionalNumber(value.exclusiveMinimum) && IsOptionalNumber(value.maximum) && IsOptionalNumber(value.minimum) && IsOptionalNumber(value.multipleOf);
    }
    exports.IsInteger = IsInteger;
    function IsProperties(value) {
      return ValueGuard.IsObject(value) && Object.entries(value).every(([key, schema]) => IsControlCharacterFree(key) && IsSchema(schema));
    }
    exports.IsProperties = IsProperties;
    function IsIntersect(value) {
      return IsKindOf(value, "Intersect") && (ValueGuard.IsString(value.type) && value.type !== "object" ? false : true) && ValueGuard.IsArray(value.allOf) && value.allOf.every((schema) => IsSchema(schema) && !IsTransform(schema)) && IsOptionalString(value.type) && (IsOptionalBoolean(value.unevaluatedProperties) || IsOptionalSchema(value.unevaluatedProperties)) && IsOptionalString(value.$id);
    }
    exports.IsIntersect = IsIntersect;
    function IsIterator(value) {
      return IsKindOf(value, "Iterator") && value.type === "Iterator" && IsOptionalString(value.$id) && IsSchema(value.items);
    }
    exports.IsIterator = IsIterator;
    function IsKindOf(value, kind) {
      return ValueGuard.IsObject(value) && index_1.Kind in value && value[index_1.Kind] === kind;
    }
    exports.IsKindOf = IsKindOf;
    function IsLiteralString(value) {
      return IsLiteral(value) && ValueGuard.IsString(value.const);
    }
    exports.IsLiteralString = IsLiteralString;
    function IsLiteralNumber(value) {
      return IsLiteral(value) && ValueGuard.IsNumber(value.const);
    }
    exports.IsLiteralNumber = IsLiteralNumber;
    function IsLiteralBoolean(value) {
      return IsLiteral(value) && ValueGuard.IsBoolean(value.const);
    }
    exports.IsLiteralBoolean = IsLiteralBoolean;
    function IsLiteral(value) {
      return IsKindOf(value, "Literal") && IsOptionalString(value.$id) && IsLiteralValue(value.const);
    }
    exports.IsLiteral = IsLiteral;
    function IsLiteralValue(value) {
      return ValueGuard.IsBoolean(value) || ValueGuard.IsNumber(value) || ValueGuard.IsString(value);
    }
    exports.IsLiteralValue = IsLiteralValue;
    function IsMappedKey(value) {
      return IsKindOf(value, "MappedKey") && ValueGuard.IsArray(value.keys) && value.keys.every((key) => ValueGuard.IsNumber(key) || ValueGuard.IsString(key));
    }
    exports.IsMappedKey = IsMappedKey;
    function IsMappedResult(value) {
      return IsKindOf(value, "MappedResult") && IsProperties(value.properties);
    }
    exports.IsMappedResult = IsMappedResult;
    function IsNever(value) {
      return IsKindOf(value, "Never") && ValueGuard.IsObject(value.not) && Object.getOwnPropertyNames(value.not).length === 0;
    }
    exports.IsNever = IsNever;
    function IsNot(value) {
      return IsKindOf(value, "Not") && IsSchema(value.not);
    }
    exports.IsNot = IsNot;
    function IsNull(value) {
      return IsKindOf(value, "Null") && value.type === "null" && IsOptionalString(value.$id);
    }
    exports.IsNull = IsNull;
    function IsNumber(value) {
      return IsKindOf(value, "Number") && value.type === "number" && IsOptionalString(value.$id) && IsOptionalNumber(value.exclusiveMaximum) && IsOptionalNumber(value.exclusiveMinimum) && IsOptionalNumber(value.maximum) && IsOptionalNumber(value.minimum) && IsOptionalNumber(value.multipleOf);
    }
    exports.IsNumber = IsNumber;
    function IsObject(value) {
      return IsKindOf(value, "Object") && value.type === "object" && IsOptionalString(value.$id) && IsProperties(value.properties) && IsAdditionalProperties(value.additionalProperties) && IsOptionalNumber(value.minProperties) && IsOptionalNumber(value.maxProperties);
    }
    exports.IsObject = IsObject;
    function IsPromise(value) {
      return IsKindOf(value, "Promise") && value.type === "Promise" && IsOptionalString(value.$id) && IsSchema(value.item);
    }
    exports.IsPromise = IsPromise;
    function IsRecord(value) {
      return IsKindOf(value, "Record") && value.type === "object" && IsOptionalString(value.$id) && IsAdditionalProperties(value.additionalProperties) && ValueGuard.IsObject(value.patternProperties) && ((schema) => {
        const keys = Object.getOwnPropertyNames(schema.patternProperties);
        return keys.length === 1 && IsPattern(keys[0]) && ValueGuard.IsObject(schema.patternProperties) && IsSchema(schema.patternProperties[keys[0]]);
      })(value);
    }
    exports.IsRecord = IsRecord;
    function IsRecursive(value) {
      return ValueGuard.IsObject(value) && index_1.Hint in value && value[index_1.Hint] === "Recursive";
    }
    exports.IsRecursive = IsRecursive;
    function IsRef(value) {
      return IsKindOf(value, "Ref") && IsOptionalString(value.$id) && ValueGuard.IsString(value.$ref);
    }
    exports.IsRef = IsRef;
    function IsRegExp(value) {
      return IsKindOf(value, "RegExp") && IsOptionalString(value.$id) && ValueGuard.IsString(value.source) && ValueGuard.IsString(value.flags);
    }
    exports.IsRegExp = IsRegExp;
    function IsString(value) {
      return IsKindOf(value, "String") && value.type === "string" && IsOptionalString(value.$id) && IsOptionalNumber(value.minLength) && IsOptionalNumber(value.maxLength) && IsOptionalPattern(value.pattern) && IsOptionalFormat(value.format);
    }
    exports.IsString = IsString;
    function IsSymbol(value) {
      return IsKindOf(value, "Symbol") && value.type === "symbol" && IsOptionalString(value.$id);
    }
    exports.IsSymbol = IsSymbol;
    function IsTemplateLiteral(value) {
      return IsKindOf(value, "TemplateLiteral") && value.type === "string" && ValueGuard.IsString(value.pattern) && value.pattern[0] === "^" && value.pattern[value.pattern.length - 1] === "$";
    }
    exports.IsTemplateLiteral = IsTemplateLiteral;
    function IsThis(value) {
      return IsKindOf(value, "This") && IsOptionalString(value.$id) && ValueGuard.IsString(value.$ref);
    }
    exports.IsThis = IsThis;
    function IsTransform(value) {
      return ValueGuard.IsObject(value) && index_1.TransformKind in value;
    }
    exports.IsTransform = IsTransform;
    function IsTuple(value) {
      return IsKindOf(value, "Tuple") && value.type === "array" && IsOptionalString(value.$id) && ValueGuard.IsNumber(value.minItems) && ValueGuard.IsNumber(value.maxItems) && value.minItems === value.maxItems && // empty
      (ValueGuard.IsUndefined(value.items) && ValueGuard.IsUndefined(value.additionalItems) && value.minItems === 0 || ValueGuard.IsArray(value.items) && value.items.every((schema) => IsSchema(schema)));
    }
    exports.IsTuple = IsTuple;
    function IsUndefined(value) {
      return IsKindOf(value, "Undefined") && value.type === "undefined" && IsOptionalString(value.$id);
    }
    exports.IsUndefined = IsUndefined;
    function IsUnionLiteral(value) {
      return IsUnion(value) && value.anyOf.every((schema) => IsLiteralString(schema) || IsLiteralNumber(schema));
    }
    exports.IsUnionLiteral = IsUnionLiteral;
    function IsUnion(value) {
      return IsKindOf(value, "Union") && IsOptionalString(value.$id) && ValueGuard.IsObject(value) && ValueGuard.IsArray(value.anyOf) && value.anyOf.every((schema) => IsSchema(schema));
    }
    exports.IsUnion = IsUnion;
    function IsUint8Array(value) {
      return IsKindOf(value, "Uint8Array") && value.type === "Uint8Array" && IsOptionalString(value.$id) && IsOptionalNumber(value.minByteLength) && IsOptionalNumber(value.maxByteLength);
    }
    exports.IsUint8Array = IsUint8Array;
    function IsUnknown(value) {
      return IsKindOf(value, "Unknown") && IsOptionalString(value.$id);
    }
    exports.IsUnknown = IsUnknown;
    function IsUnsafe(value) {
      return IsKindOf(value, "Unsafe");
    }
    exports.IsUnsafe = IsUnsafe;
    function IsVoid(value) {
      return IsKindOf(value, "Void") && value.type === "void" && IsOptionalString(value.$id);
    }
    exports.IsVoid = IsVoid;
    function IsKind(value) {
      return ValueGuard.IsObject(value) && index_1.Kind in value && ValueGuard.IsString(value[index_1.Kind]) && !KnownTypes.includes(value[index_1.Kind]);
    }
    exports.IsKind = IsKind;
    function IsSchema(value) {
      return ValueGuard.IsObject(value) && (IsAny(value) || IsArray(value) || IsBoolean(value) || IsBigInt(value) || IsAsyncIterator(value) || IsConstructor(value) || IsDate(value) || IsFunction(value) || IsInteger(value) || IsIntersect(value) || IsIterator(value) || IsLiteral(value) || IsMappedKey(value) || IsMappedResult(value) || IsNever(value) || IsNot(value) || IsNull(value) || IsNumber(value) || IsObject(value) || IsPromise(value) || IsRecord(value) || IsRef(value) || IsRegExp(value) || IsString(value) || IsSymbol(value) || IsTemplateLiteral(value) || IsThis(value) || IsTuple(value) || IsUndefined(value) || IsUnion(value) || IsUint8Array(value) || IsUnknown(value) || IsUnsafe(value) || IsVoid(value) || IsKind(value));
    }
    exports.IsSchema = IsSchema;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/optional/optional.js
var require_optional = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/optional/optional.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Optional = void 0;
    var index_1 = require_symbols2();
    var type_1 = require_type2();
    var index_2 = require_discard2();
    var optional_from_mapped_result_1 = require_optional_from_mapped_result();
    var type_2 = require_type3();
    function RemoveOptional(schema) {
      return (0, index_2.Discard)((0, type_1.CloneType)(schema), [index_1.OptionalKind]);
    }
    function AddOptional(schema) {
      return { ...(0, type_1.CloneType)(schema), [index_1.OptionalKind]: "Optional" };
    }
    function OptionalWithFlag(schema, F) {
      return F === false ? RemoveOptional(schema) : AddOptional(schema);
    }
    function Optional(schema, enable) {
      const F = enable ?? true;
      return (0, type_2.IsMappedResult)(schema) ? (0, optional_from_mapped_result_1.OptionalFromMappedResult)(schema, F) : OptionalWithFlag(schema, F);
    }
    exports.Optional = Optional;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/optional/optional-from-mapped-result.js
var require_optional_from_mapped_result = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/optional/optional-from-mapped-result.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OptionalFromMappedResult = void 0;
    var index_1 = require_mapped2();
    var optional_1 = require_optional();
    function FromProperties(P, F) {
      return globalThis.Object.getOwnPropertyNames(P).reduce((Acc, K2) => {
        return { ...Acc, [K2]: (0, optional_1.Optional)(P[K2], F) };
      }, {});
    }
    function FromMappedResult(R, F) {
      return FromProperties(R.properties, F);
    }
    function OptionalFromMappedResult(R, F) {
      const P = FromMappedResult(R, F);
      return (0, index_1.MappedResult)(P);
    }
    exports.OptionalFromMappedResult = OptionalFromMappedResult;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/optional/index.js
var require_optional2 = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/optional/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_optional_from_mapped_result(), exports);
    __exportStar(require_optional(), exports);
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/intersect/intersect-create.js
var require_intersect_create = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/intersect/intersect-create.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.IntersectCreate = void 0;
    var index_1 = require_symbols2();
    var type_1 = require_type2();
    var type_2 = require_type3();
    function IntersectCreate(T, options) {
      const allObjects = T.every((schema) => (0, type_2.IsObject)(schema));
      const clonedUnevaluatedProperties = (0, type_2.IsSchema)(options.unevaluatedProperties) ? { unevaluatedProperties: (0, type_1.CloneType)(options.unevaluatedProperties) } : {};
      return options.unevaluatedProperties === false || (0, type_2.IsSchema)(options.unevaluatedProperties) || allObjects ? { ...options, ...clonedUnevaluatedProperties, [index_1.Kind]: "Intersect", type: "object", allOf: (0, type_1.CloneRest)(T) } : { ...options, ...clonedUnevaluatedProperties, [index_1.Kind]: "Intersect", allOf: (0, type_1.CloneRest)(T) };
    }
    exports.IntersectCreate = IntersectCreate;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/intersect/intersect-evaluated.js
var require_intersect_evaluated = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/intersect/intersect-evaluated.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.IntersectEvaluated = void 0;
    var index_1 = require_symbols2();
    var type_1 = require_type2();
    var index_2 = require_discard2();
    var index_3 = require_never2();
    var index_4 = require_optional2();
    var intersect_create_1 = require_intersect_create();
    var type_2 = require_type3();
    function IsIntersectOptional(T) {
      return T.every((L) => (0, type_2.IsOptional)(L));
    }
    function RemoveOptionalFromType(T) {
      return (0, index_2.Discard)(T, [index_1.OptionalKind]);
    }
    function RemoveOptionalFromRest(T) {
      return T.map((L) => (0, type_2.IsOptional)(L) ? RemoveOptionalFromType(L) : L);
    }
    function ResolveIntersect(T, options) {
      return IsIntersectOptional(T) ? (0, index_4.Optional)((0, intersect_create_1.IntersectCreate)(RemoveOptionalFromRest(T), options)) : (0, intersect_create_1.IntersectCreate)(RemoveOptionalFromRest(T), options);
    }
    function IntersectEvaluated(T, options = {}) {
      if (T.length === 0)
        return (0, index_3.Never)(options);
      if (T.length === 1)
        return (0, type_1.CloneType)(T[0], options);
      if (T.some((schema) => (0, type_2.IsTransform)(schema)))
        throw new Error("Cannot intersect transform types");
      return ResolveIntersect(T, options);
    }
    exports.IntersectEvaluated = IntersectEvaluated;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/intersect/intersect-type.js
var require_intersect_type = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/intersect/intersect-type.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var index_1 = require_symbols2();
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/intersect/intersect.js
var require_intersect = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/intersect/intersect.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Intersect = void 0;
    var type_1 = require_type2();
    var index_1 = require_never2();
    var intersect_create_1 = require_intersect_create();
    var type_2 = require_type3();
    function Intersect(T, options = {}) {
      if (T.length === 0)
        return (0, index_1.Never)(options);
      if (T.length === 1)
        return (0, type_1.CloneType)(T[0], options);
      if (T.some((schema) => (0, type_2.IsTransform)(schema)))
        throw new Error("Cannot intersect transform types");
      return (0, intersect_create_1.IntersectCreate)(T, options);
    }
    exports.Intersect = Intersect;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/intersect/index.js
var require_intersect2 = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/intersect/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_intersect_evaluated(), exports);
    __exportStar(require_intersect_type(), exports);
    __exportStar(require_intersect(), exports);
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/union/union-create.js
var require_union_create = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/union/union-create.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.UnionCreate = void 0;
    var type_1 = require_type2();
    var index_1 = require_symbols2();
    function UnionCreate(T, options) {
      return { ...options, [index_1.Kind]: "Union", anyOf: (0, type_1.CloneRest)(T) };
    }
    exports.UnionCreate = UnionCreate;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/union/union-evaluated.js
var require_union_evaluated = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/union/union-evaluated.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.UnionEvaluated = void 0;
    var index_1 = require_symbols2();
    var type_1 = require_type2();
    var index_2 = require_discard2();
    var index_3 = require_never2();
    var index_4 = require_optional2();
    var union_create_1 = require_union_create();
    var type_2 = require_type3();
    function IsUnionOptional(T) {
      return T.some((L) => (0, type_2.IsOptional)(L));
    }
    function RemoveOptionalFromRest(T) {
      return T.map((L) => (0, type_2.IsOptional)(L) ? RemoveOptionalFromType(L) : L);
    }
    function RemoveOptionalFromType(T) {
      return (0, index_2.Discard)(T, [index_1.OptionalKind]);
    }
    function ResolveUnion(T, options) {
      return IsUnionOptional(T) ? (0, index_4.Optional)((0, union_create_1.UnionCreate)(RemoveOptionalFromRest(T), options)) : (0, union_create_1.UnionCreate)(RemoveOptionalFromRest(T), options);
    }
    function UnionEvaluated(T, options = {}) {
      return T.length === 0 ? (0, index_3.Never)(options) : T.length === 1 ? (0, type_1.CloneType)(T[0], options) : ResolveUnion(T, options);
    }
    exports.UnionEvaluated = UnionEvaluated;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/union/union-type.js
var require_union_type = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/union/union-type.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var index_1 = require_symbols2();
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/union/union.js
var require_union = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/union/union.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Union = void 0;
    var index_1 = require_never2();
    var type_1 = require_type2();
    var union_create_1 = require_union_create();
    function Union(T, options = {}) {
      return T.length === 0 ? (0, index_1.Never)(options) : T.length === 1 ? (0, type_1.CloneType)(T[0], options) : (0, union_create_1.UnionCreate)(T, options);
    }
    exports.Union = Union;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/union/index.js
var require_union2 = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/union/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_union_evaluated(), exports);
    __exportStar(require_union_type(), exports);
    __exportStar(require_union(), exports);
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/template-literal/parse.js
var require_parse = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/template-literal/parse.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TemplateLiteralParseExact = exports.TemplateLiteralParse = exports.TemplateLiteralParserError = void 0;
    var index_1 = require_error2();
    var TemplateLiteralParserError = class extends index_1.TypeBoxError {
    };
    exports.TemplateLiteralParserError = TemplateLiteralParserError;
    function IsNonEscaped(pattern, index, char) {
      return pattern[index] === char && pattern.charCodeAt(index - 1) !== 92;
    }
    function IsOpenParen(pattern, index) {
      return IsNonEscaped(pattern, index, "(");
    }
    function IsCloseParen(pattern, index) {
      return IsNonEscaped(pattern, index, ")");
    }
    function IsSeparator(pattern, index) {
      return IsNonEscaped(pattern, index, "|");
    }
    function IsGroup(pattern) {
      if (!(IsOpenParen(pattern, 0) && IsCloseParen(pattern, pattern.length - 1)))
        return false;
      let count = 0;
      for (let index = 0; index < pattern.length; index++) {
        if (IsOpenParen(pattern, index))
          count += 1;
        if (IsCloseParen(pattern, index))
          count -= 1;
        if (count === 0 && index !== pattern.length - 1)
          return false;
      }
      return true;
    }
    function InGroup(pattern) {
      return pattern.slice(1, pattern.length - 1);
    }
    function IsPrecedenceOr(pattern) {
      let count = 0;
      for (let index = 0; index < pattern.length; index++) {
        if (IsOpenParen(pattern, index))
          count += 1;
        if (IsCloseParen(pattern, index))
          count -= 1;
        if (IsSeparator(pattern, index) && count === 0)
          return true;
      }
      return false;
    }
    function IsPrecedenceAnd(pattern) {
      for (let index = 0; index < pattern.length; index++) {
        if (IsOpenParen(pattern, index))
          return true;
      }
      return false;
    }
    function Or(pattern) {
      let [count, start] = [0, 0];
      const expressions = [];
      for (let index = 0; index < pattern.length; index++) {
        if (IsOpenParen(pattern, index))
          count += 1;
        if (IsCloseParen(pattern, index))
          count -= 1;
        if (IsSeparator(pattern, index) && count === 0) {
          const range2 = pattern.slice(start, index);
          if (range2.length > 0)
            expressions.push(TemplateLiteralParse(range2));
          start = index + 1;
        }
      }
      const range = pattern.slice(start);
      if (range.length > 0)
        expressions.push(TemplateLiteralParse(range));
      if (expressions.length === 0)
        return { type: "const", const: "" };
      if (expressions.length === 1)
        return expressions[0];
      return { type: "or", expr: expressions };
    }
    function And(pattern) {
      function Group(value, index) {
        if (!IsOpenParen(value, index))
          throw new TemplateLiteralParserError(`TemplateLiteralParser: Index must point to open parens`);
        let count = 0;
        for (let scan = index; scan < value.length; scan++) {
          if (IsOpenParen(value, scan))
            count += 1;
          if (IsCloseParen(value, scan))
            count -= 1;
          if (count === 0)
            return [index, scan];
        }
        throw new TemplateLiteralParserError(`TemplateLiteralParser: Unclosed group parens in expression`);
      }
      function Range(pattern2, index) {
        for (let scan = index; scan < pattern2.length; scan++) {
          if (IsOpenParen(pattern2, scan))
            return [index, scan];
        }
        return [index, pattern2.length];
      }
      const expressions = [];
      for (let index = 0; index < pattern.length; index++) {
        if (IsOpenParen(pattern, index)) {
          const [start, end] = Group(pattern, index);
          const range = pattern.slice(start, end + 1);
          expressions.push(TemplateLiteralParse(range));
          index = end;
        } else {
          const [start, end] = Range(pattern, index);
          const range = pattern.slice(start, end);
          if (range.length > 0)
            expressions.push(TemplateLiteralParse(range));
          index = end - 1;
        }
      }
      return expressions.length === 0 ? { type: "const", const: "" } : expressions.length === 1 ? expressions[0] : { type: "and", expr: expressions };
    }
    function TemplateLiteralParse(pattern) {
      return IsGroup(pattern) ? TemplateLiteralParse(InGroup(pattern)) : IsPrecedenceOr(pattern) ? Or(pattern) : IsPrecedenceAnd(pattern) ? And(pattern) : { type: "const", const: pattern };
    }
    exports.TemplateLiteralParse = TemplateLiteralParse;
    function TemplateLiteralParseExact(pattern) {
      return TemplateLiteralParse(pattern.slice(1, pattern.length - 1));
    }
    exports.TemplateLiteralParseExact = TemplateLiteralParseExact;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/template-literal/finite.js
var require_finite = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/template-literal/finite.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.IsTemplateLiteralFinite = exports.IsTemplateLiteralExpressionFinite = exports.TemplateLiteralFiniteError = void 0;
    var parse_1 = require_parse();
    var index_1 = require_error2();
    var TemplateLiteralFiniteError = class extends index_1.TypeBoxError {
    };
    exports.TemplateLiteralFiniteError = TemplateLiteralFiniteError;
    function IsNumberExpression(expression) {
      return expression.type === "or" && expression.expr.length === 2 && expression.expr[0].type === "const" && expression.expr[0].const === "0" && expression.expr[1].type === "const" && expression.expr[1].const === "[1-9][0-9]*";
    }
    function IsBooleanExpression(expression) {
      return expression.type === "or" && expression.expr.length === 2 && expression.expr[0].type === "const" && expression.expr[0].const === "true" && expression.expr[1].type === "const" && expression.expr[1].const === "false";
    }
    function IsStringExpression(expression) {
      return expression.type === "const" && expression.const === ".*";
    }
    function IsTemplateLiteralExpressionFinite(expression) {
      return IsNumberExpression(expression) || IsStringExpression(expression) ? false : IsBooleanExpression(expression) ? true : expression.type === "and" ? expression.expr.every((expr) => IsTemplateLiteralExpressionFinite(expr)) : expression.type === "or" ? expression.expr.every((expr) => IsTemplateLiteralExpressionFinite(expr)) : expression.type === "const" ? true : (() => {
        throw new TemplateLiteralFiniteError(`Unknown expression type`);
      })();
    }
    exports.IsTemplateLiteralExpressionFinite = IsTemplateLiteralExpressionFinite;
    function IsTemplateLiteralFinite(schema) {
      const expression = (0, parse_1.TemplateLiteralParseExact)(schema.pattern);
      return IsTemplateLiteralExpressionFinite(expression);
    }
    exports.IsTemplateLiteralFinite = IsTemplateLiteralFinite;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/template-literal/generate.js
var require_generate = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/template-literal/generate.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TemplateLiteralGenerate = exports.TemplateLiteralExpressionGenerate = exports.TemplateLiteralGenerateError = void 0;
    var finite_1 = require_finite();
    var parse_1 = require_parse();
    var index_1 = require_error2();
    var TemplateLiteralGenerateError = class extends index_1.TypeBoxError {
    };
    exports.TemplateLiteralGenerateError = TemplateLiteralGenerateError;
    function* GenerateReduce(buffer) {
      if (buffer.length === 1)
        return yield* buffer[0];
      for (const left of buffer[0]) {
        for (const right of GenerateReduce(buffer.slice(1))) {
          yield `${left}${right}`;
        }
      }
    }
    function* GenerateAnd(expression) {
      return yield* GenerateReduce(expression.expr.map((expr) => [...TemplateLiteralExpressionGenerate(expr)]));
    }
    function* GenerateOr(expression) {
      for (const expr of expression.expr)
        yield* TemplateLiteralExpressionGenerate(expr);
    }
    function* GenerateConst(expression) {
      return yield expression.const;
    }
    function* TemplateLiteralExpressionGenerate(expression) {
      return expression.type === "and" ? yield* GenerateAnd(expression) : expression.type === "or" ? yield* GenerateOr(expression) : expression.type === "const" ? yield* GenerateConst(expression) : (() => {
        throw new TemplateLiteralGenerateError("Unknown expression");
      })();
    }
    exports.TemplateLiteralExpressionGenerate = TemplateLiteralExpressionGenerate;
    function TemplateLiteralGenerate(schema) {
      const expression = (0, parse_1.TemplateLiteralParseExact)(schema.pattern);
      return (0, finite_1.IsTemplateLiteralExpressionFinite)(expression) ? [...TemplateLiteralExpressionGenerate(expression)] : [];
    }
    exports.TemplateLiteralGenerate = TemplateLiteralGenerate;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/literal/literal.js
var require_literal = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/literal/literal.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Literal = void 0;
    var index_1 = require_symbols2();
    function Literal(value, options = {}) {
      return {
        ...options,
        [index_1.Kind]: "Literal",
        const: value,
        type: typeof value
      };
    }
    exports.Literal = Literal;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/literal/index.js
var require_literal2 = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/literal/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_literal(), exports);
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/boolean/boolean.js
var require_boolean = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/boolean/boolean.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Boolean = void 0;
    var index_1 = require_symbols2();
    function Boolean2(options = {}) {
      return {
        ...options,
        [index_1.Kind]: "Boolean",
        type: "boolean"
      };
    }
    exports.Boolean = Boolean2;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/boolean/index.js
var require_boolean2 = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/boolean/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_boolean(), exports);
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/bigint/bigint.js
var require_bigint = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/bigint/bigint.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BigInt = void 0;
    var index_1 = require_symbols2();
    function BigInt2(options = {}) {
      return {
        ...options,
        [index_1.Kind]: "BigInt",
        type: "bigint"
      };
    }
    exports.BigInt = BigInt2;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/bigint/index.js
var require_bigint2 = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/bigint/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_bigint(), exports);
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/number/number.js
var require_number = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/number/number.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Number = void 0;
    var index_1 = require_symbols2();
    function Number2(options = {}) {
      return {
        ...options,
        [index_1.Kind]: "Number",
        type: "number"
      };
    }
    exports.Number = Number2;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/number/index.js
var require_number2 = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/number/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_number(), exports);
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/string/string.js
var require_string = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/string/string.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.String = void 0;
    var index_1 = require_symbols2();
    function String2(options = {}) {
      return { ...options, [index_1.Kind]: "String", type: "string" };
    }
    exports.String = String2;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/string/index.js
var require_string2 = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/string/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_string(), exports);
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/template-literal/syntax.js
var require_syntax = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/template-literal/syntax.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TemplateLiteralSyntax = void 0;
    var index_1 = require_literal2();
    var index_2 = require_boolean2();
    var index_3 = require_bigint2();
    var index_4 = require_number2();
    var index_5 = require_string2();
    var index_6 = require_union2();
    var index_7 = require_never2();
    function* FromUnion(syntax) {
      const trim = syntax.trim().replace(/"|'/g, "");
      return trim === "boolean" ? yield (0, index_2.Boolean)() : trim === "number" ? yield (0, index_4.Number)() : trim === "bigint" ? yield (0, index_3.BigInt)() : trim === "string" ? yield (0, index_5.String)() : yield (() => {
        const literals = trim.split("|").map((literal) => (0, index_1.Literal)(literal.trim()));
        return literals.length === 0 ? (0, index_7.Never)() : literals.length === 1 ? literals[0] : (0, index_6.UnionEvaluated)(literals);
      })();
    }
    function* FromTerminal(syntax) {
      if (syntax[1] !== "{") {
        const L = (0, index_1.Literal)("$");
        const R = FromSyntax(syntax.slice(1));
        return yield* [L, ...R];
      }
      for (let i = 2; i < syntax.length; i++) {
        if (syntax[i] === "}") {
          const L = FromUnion(syntax.slice(2, i));
          const R = FromSyntax(syntax.slice(i + 1));
          return yield* [...L, ...R];
        }
      }
      yield (0, index_1.Literal)(syntax);
    }
    function* FromSyntax(syntax) {
      for (let i = 0; i < syntax.length; i++) {
        if (syntax[i] === "$") {
          const L = (0, index_1.Literal)(syntax.slice(0, i));
          const R = FromTerminal(syntax.slice(i));
          return yield* [L, ...R];
        }
      }
      yield (0, index_1.Literal)(syntax);
    }
    function TemplateLiteralSyntax(syntax) {
      return [...FromSyntax(syntax)];
    }
    exports.TemplateLiteralSyntax = TemplateLiteralSyntax;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/patterns/patterns.js
var require_patterns = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/patterns/patterns.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PatternStringExact = exports.PatternNumberExact = exports.PatternBooleanExact = exports.PatternString = exports.PatternNumber = exports.PatternBoolean = void 0;
    exports.PatternBoolean = "(true|false)";
    exports.PatternNumber = "(0|[1-9][0-9]*)";
    exports.PatternString = "(.*)";
    exports.PatternBooleanExact = `^${exports.PatternBoolean}$`;
    exports.PatternNumberExact = `^${exports.PatternNumber}$`;
    exports.PatternStringExact = `^${exports.PatternString}$`;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/patterns/index.js
var require_patterns2 = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/patterns/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_patterns(), exports);
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/template-literal/pattern.js
var require_pattern = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/template-literal/pattern.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TemplateLiteralPattern = exports.TemplateLiteralPatternError = void 0;
    var index_1 = require_patterns2();
    var index_2 = require_symbols2();
    var index_3 = require_error2();
    var type_1 = require_type3();
    var TemplateLiteralPatternError = class extends index_3.TypeBoxError {
    };
    exports.TemplateLiteralPatternError = TemplateLiteralPatternError;
    function Escape(value) {
      return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
    function Visit(schema, acc) {
      return (0, type_1.IsTemplateLiteral)(schema) ? schema.pattern.slice(1, schema.pattern.length - 1) : (0, type_1.IsUnion)(schema) ? `(${schema.anyOf.map((schema2) => Visit(schema2, acc)).join("|")})` : (0, type_1.IsNumber)(schema) ? `${acc}${index_1.PatternNumber}` : (0, type_1.IsInteger)(schema) ? `${acc}${index_1.PatternNumber}` : (0, type_1.IsBigInt)(schema) ? `${acc}${index_1.PatternNumber}` : (0, type_1.IsString)(schema) ? `${acc}${index_1.PatternString}` : (0, type_1.IsLiteral)(schema) ? `${acc}${Escape(schema.const.toString())}` : (0, type_1.IsBoolean)(schema) ? `${acc}${index_1.PatternBoolean}` : (() => {
        throw new TemplateLiteralPatternError(`Unexpected Kind '${schema[index_2.Kind]}'`);
      })();
    }
    function TemplateLiteralPattern(kinds) {
      return `^${kinds.map((schema) => Visit(schema, "")).join("")}$`;
    }
    exports.TemplateLiteralPattern = TemplateLiteralPattern;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/template-literal/union.js
var require_union3 = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/template-literal/union.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TemplateLiteralToUnion = void 0;
    var index_1 = require_union2();
    var index_2 = require_literal2();
    var generate_1 = require_generate();
    function TemplateLiteralToUnion(schema) {
      const R = (0, generate_1.TemplateLiteralGenerate)(schema);
      const L = R.map((S) => (0, index_2.Literal)(S));
      return (0, index_1.Union)(L);
    }
    exports.TemplateLiteralToUnion = TemplateLiteralToUnion;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/template-literal/template-literal.js
var require_template_literal = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/template-literal/template-literal.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TemplateLiteral = void 0;
    var syntax_1 = require_syntax();
    var pattern_1 = require_pattern();
    var value_1 = require_value();
    var index_1 = require_symbols2();
    function TemplateLiteral(unresolved, options = {}) {
      const pattern = (0, value_1.IsString)(unresolved) ? (0, pattern_1.TemplateLiteralPattern)((0, syntax_1.TemplateLiteralSyntax)(unresolved)) : (0, pattern_1.TemplateLiteralPattern)(unresolved);
      return { ...options, [index_1.Kind]: "TemplateLiteral", type: "string", pattern };
    }
    exports.TemplateLiteral = TemplateLiteral;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/template-literal/index.js
var require_template_literal2 = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/template-literal/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_finite(), exports);
    __exportStar(require_generate(), exports);
    __exportStar(require_syntax(), exports);
    __exportStar(require_parse(), exports);
    __exportStar(require_pattern(), exports);
    __exportStar(require_union3(), exports);
    __exportStar(require_template_literal(), exports);
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/indexed/indexed-property-keys.js
var require_indexed_property_keys = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/indexed/indexed-property-keys.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.IndexPropertyKeys = void 0;
    var index_1 = require_template_literal2();
    var type_1 = require_type3();
    function FromTemplateLiteral(T) {
      const R = (0, index_1.TemplateLiteralGenerate)(T);
      return R.map((S) => S.toString());
    }
    function FromUnion(T) {
      return T.reduce((Acc, L) => {
        return [...Acc, ...IndexPropertyKeys(L)];
      }, []);
    }
    function FromLiteral(T) {
      return [T.toString()];
    }
    function IndexPropertyKeys(T) {
      return [...new Set((0, type_1.IsTemplateLiteral)(T) ? FromTemplateLiteral(T) : (0, type_1.IsUnion)(T) ? FromUnion(T.anyOf) : (0, type_1.IsLiteral)(T) ? FromLiteral(T.const) : (0, type_1.IsNumber)(T) ? ["[number]"] : (0, type_1.IsInteger)(T) ? ["[number]"] : [])];
    }
    exports.IndexPropertyKeys = IndexPropertyKeys;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/indexed/indexed-from-mapped-result.js
var require_indexed_from_mapped_result = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/indexed/indexed-from-mapped-result.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.IndexFromMappedResult = void 0;
    var index_1 = require_mapped2();
    var indexed_property_keys_1 = require_indexed_property_keys();
    var index_2 = require_indexed2();
    function FromProperties(T, P, options) {
      return globalThis.Object.getOwnPropertyNames(P).reduce((Acc, K2) => {
        return { ...Acc, [K2]: (0, index_2.Index)(T, (0, indexed_property_keys_1.IndexPropertyKeys)(P[K2]), options) };
      }, {});
    }
    function FromMappedResult(T, R, options) {
      return FromProperties(T, R.properties, options);
    }
    function IndexFromMappedResult(T, R, options) {
      const P = FromMappedResult(T, R, options);
      return (0, index_1.MappedResult)(P);
    }
    exports.IndexFromMappedResult = IndexFromMappedResult;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/indexed/indexed.js
var require_indexed = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/indexed/indexed.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Index = exports.IndexFromPropertyKeys = exports.IndexFromPropertyKey = void 0;
    var index_1 = require_never2();
    var index_2 = require_intersect2();
    var index_3 = require_union2();
    var type_1 = require_type2();
    var indexed_property_keys_1 = require_indexed_property_keys();
    var indexed_from_mapped_key_1 = require_indexed_from_mapped_key();
    var indexed_from_mapped_result_1 = require_indexed_from_mapped_result();
    var type_2 = require_type3();
    function FromRest(T, K) {
      return T.map((L) => IndexFromPropertyKey(L, K));
    }
    function FromIntersectRest(T) {
      return T.filter((L) => !(0, type_2.IsNever)(L));
    }
    function FromIntersect(T, K) {
      return (0, index_2.IntersectEvaluated)(FromIntersectRest(FromRest(T, K)));
    }
    function FromUnionRest(T) {
      return T;
    }
    function FromUnion(T, K) {
      return (0, index_3.UnionEvaluated)(FromUnionRest(FromRest(T, K)));
    }
    function FromTuple(T, K) {
      return K in T ? T[K] : K === "[number]" ? (0, index_3.UnionEvaluated)(T) : (0, index_1.Never)();
    }
    function FromArray(T, K) {
      return K === "[number]" ? T : (0, index_1.Never)();
    }
    function FromProperty(T, K) {
      return K in T ? T[K] : (0, index_1.Never)();
    }
    function IndexFromPropertyKey(T, K) {
      return (0, type_2.IsIntersect)(T) ? FromIntersect(T.allOf, K) : (0, type_2.IsUnion)(T) ? FromUnion(T.anyOf, K) : (0, type_2.IsTuple)(T) ? FromTuple(T.items ?? [], K) : (0, type_2.IsArray)(T) ? FromArray(T.items, K) : (0, type_2.IsObject)(T) ? FromProperty(T.properties, K) : (0, index_1.Never)();
    }
    exports.IndexFromPropertyKey = IndexFromPropertyKey;
    function IndexFromPropertyKeys(T, K) {
      return K.map((L) => IndexFromPropertyKey(T, L));
    }
    exports.IndexFromPropertyKeys = IndexFromPropertyKeys;
    function FromSchema(T, K) {
      return (0, index_3.UnionEvaluated)(IndexFromPropertyKeys(T, K));
    }
    function Index(T, K, options = {}) {
      return (0, type_2.IsMappedResult)(K) ? (0, type_1.CloneType)((0, indexed_from_mapped_result_1.IndexFromMappedResult)(T, K, options)) : (0, type_2.IsMappedKey)(K) ? (0, type_1.CloneType)((0, indexed_from_mapped_key_1.IndexFromMappedKey)(T, K, options)) : (0, type_2.IsSchema)(K) ? (0, type_1.CloneType)(FromSchema(T, (0, indexed_property_keys_1.IndexPropertyKeys)(K)), options) : (0, type_1.CloneType)(FromSchema(T, K), options);
    }
    exports.Index = Index;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/indexed/indexed-from-mapped-key.js
var require_indexed_from_mapped_key = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/indexed/indexed-from-mapped-key.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.IndexFromMappedKey = void 0;
    var indexed_1 = require_indexed();
    var index_1 = require_mapped2();
    function MappedIndexPropertyKey(T, K, options) {
      return { [K]: (0, indexed_1.Index)(T, [K], options) };
    }
    function MappedIndexPropertyKeys(T, K, options) {
      return K.reduce((Acc, L) => {
        return { ...Acc, ...MappedIndexPropertyKey(T, L, options) };
      }, {});
    }
    function MappedIndexProperties(T, K, options) {
      return MappedIndexPropertyKeys(T, K.keys, options);
    }
    function IndexFromMappedKey(T, K, options) {
      const P = MappedIndexProperties(T, K, options);
      return (0, index_1.MappedResult)(P);
    }
    exports.IndexFromMappedKey = IndexFromMappedKey;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/indexed/index.js
var require_indexed2 = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/indexed/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_indexed_from_mapped_key(), exports);
    __exportStar(require_indexed_from_mapped_result(), exports);
    __exportStar(require_indexed_property_keys(), exports);
    __exportStar(require_indexed(), exports);
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/iterator/iterator.js
var require_iterator = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/iterator/iterator.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Iterator = void 0;
    var type_1 = require_type2();
    var index_1 = require_symbols2();
    function Iterator(items, options = {}) {
      return {
        ...options,
        [index_1.Kind]: "Iterator",
        type: "Iterator",
        items: (0, type_1.CloneType)(items)
      };
    }
    exports.Iterator = Iterator;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/iterator/index.js
var require_iterator2 = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/iterator/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_iterator(), exports);
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/object/object.js
var require_object = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/object/object.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Object = exports._Object = void 0;
    var type_1 = require_type2();
    var index_1 = require_symbols2();
    var type_2 = require_type3();
    function _Object(properties, options = {}) {
      const propertyKeys = globalThis.Object.getOwnPropertyNames(properties);
      const optionalKeys = propertyKeys.filter((key) => (0, type_2.IsOptional)(properties[key]));
      const requiredKeys = propertyKeys.filter((name) => !optionalKeys.includes(name));
      const clonedAdditionalProperties = (0, type_2.IsSchema)(options.additionalProperties) ? { additionalProperties: (0, type_1.CloneType)(options.additionalProperties) } : {};
      const clonedProperties = propertyKeys.reduce((acc, key) => ({ ...acc, [key]: (0, type_1.CloneType)(properties[key]) }), {});
      return requiredKeys.length > 0 ? { ...options, ...clonedAdditionalProperties, [index_1.Kind]: "Object", type: "object", properties: clonedProperties, required: requiredKeys } : { ...options, ...clonedAdditionalProperties, [index_1.Kind]: "Object", type: "object", properties: clonedProperties };
    }
    exports._Object = _Object;
    exports.Object = _Object;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/object/index.js
var require_object2 = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/object/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_object(), exports);
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/promise/promise.js
var require_promise = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/promise/promise.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Promise = void 0;
    var type_1 = require_type2();
    var index_1 = require_symbols2();
    function Promise2(item, options = {}) {
      return {
        ...options,
        [index_1.Kind]: "Promise",
        type: "Promise",
        item: (0, type_1.CloneType)(item)
      };
    }
    exports.Promise = Promise2;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/promise/index.js
var require_promise2 = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/promise/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_promise(), exports);
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/readonly/readonly.js
var require_readonly = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/readonly/readonly.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Readonly = void 0;
    var index_1 = require_symbols2();
    var type_1 = require_type2();
    var index_2 = require_discard2();
    var readonly_from_mapped_result_1 = require_readonly_from_mapped_result();
    var type_2 = require_type3();
    function RemoveReadonly(schema) {
      return (0, index_2.Discard)((0, type_1.CloneType)(schema), [index_1.ReadonlyKind]);
    }
    function AddReadonly(schema) {
      return { ...(0, type_1.CloneType)(schema), [index_1.ReadonlyKind]: "Readonly" };
    }
    function ReadonlyWithFlag(schema, F) {
      return F === false ? RemoveReadonly(schema) : AddReadonly(schema);
    }
    function Readonly(schema, enable) {
      const F = enable ?? true;
      return (0, type_2.IsMappedResult)(schema) ? (0, readonly_from_mapped_result_1.ReadonlyFromMappedResult)(schema, F) : ReadonlyWithFlag(schema, F);
    }
    exports.Readonly = Readonly;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/readonly/readonly-from-mapped-result.js
var require_readonly_from_mapped_result = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/readonly/readonly-from-mapped-result.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ReadonlyFromMappedResult = void 0;
    var index_1 = require_mapped2();
    var readonly_1 = require_readonly();
    function FromProperties(K, F) {
      return globalThis.Object.getOwnPropertyNames(K).reduce((Acc, K2) => {
        return { ...Acc, [K2]: (0, readonly_1.Readonly)(K[K2], F) };
      }, {});
    }
    function FromMappedResult(R, F) {
      return FromProperties(R.properties, F);
    }
    function ReadonlyFromMappedResult(R, F) {
      const P = FromMappedResult(R, F);
      return (0, index_1.MappedResult)(P);
    }
    exports.ReadonlyFromMappedResult = ReadonlyFromMappedResult;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/readonly/index.js
var require_readonly2 = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/readonly/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_readonly_from_mapped_result(), exports);
    __exportStar(require_readonly(), exports);
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/tuple/tuple.js
var require_tuple = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/tuple/tuple.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Tuple = void 0;
    var type_1 = require_type2();
    var index_1 = require_symbols2();
    function Tuple(items, options = {}) {
      const [additionalItems, minItems, maxItems] = [false, items.length, items.length];
      return items.length > 0 ? { ...options, [index_1.Kind]: "Tuple", type: "array", items: (0, type_1.CloneRest)(items), additionalItems, minItems, maxItems } : { ...options, [index_1.Kind]: "Tuple", type: "array", minItems, maxItems };
    }
    exports.Tuple = Tuple;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/tuple/index.js
var require_tuple2 = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/tuple/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_tuple(), exports);
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/sets/set.js
var require_set = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/sets/set.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SetUnionMany = exports.SetIntersectMany = exports.SetComplement = exports.SetUnion = exports.SetIntersect = exports.SetDistinct = exports.SetIsSubset = exports.SetIncludes = void 0;
    function SetIncludes(T, S) {
      return T.includes(S);
    }
    exports.SetIncludes = SetIncludes;
    function SetIsSubset(T, S) {
      return T.every((L) => SetIncludes(S, L));
    }
    exports.SetIsSubset = SetIsSubset;
    function SetDistinct(T) {
      return [...new Set(T)];
    }
    exports.SetDistinct = SetDistinct;
    function SetIntersect(T, S) {
      return T.filter((L) => S.includes(L));
    }
    exports.SetIntersect = SetIntersect;
    function SetUnion(T, S) {
      return [...T, ...S];
    }
    exports.SetUnion = SetUnion;
    function SetComplement(T, S) {
      return T.filter((L) => !S.includes(L));
    }
    exports.SetComplement = SetComplement;
    function SetIntersectManyResolve(T, Init) {
      return T.reduce((Acc, L) => {
        return SetIntersect(Acc, L);
      }, Init);
    }
    function SetIntersectMany(T) {
      return T.length === 1 ? T[0] : T.length > 1 ? SetIntersectManyResolve(T.slice(1), T[0]) : [];
    }
    exports.SetIntersectMany = SetIntersectMany;
    function SetUnionMany(T) {
      return T.reduce((Acc, L) => [...Acc, ...L], []);
    }
    exports.SetUnionMany = SetUnionMany;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/sets/index.js
var require_sets = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/sets/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_set(), exports);
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/mapped/mapped.js
var require_mapped = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/mapped/mapped.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Mapped = exports.MappedFunctionReturnType = void 0;
    var index_1 = require_symbols2();
    var type_1 = require_type2();
    var index_2 = require_discard2();
    var index_3 = require_array2();
    var index_4 = require_async_iterator2();
    var index_5 = require_constructor2();
    var index_6 = require_function2();
    var index_7 = require_indexed2();
    var index_8 = require_intersect2();
    var index_9 = require_iterator2();
    var index_10 = require_literal2();
    var index_11 = require_object2();
    var index_12 = require_optional2();
    var index_13 = require_promise2();
    var index_14 = require_readonly2();
    var index_15 = require_tuple2();
    var index_16 = require_union2();
    var index_17 = require_sets();
    var mapped_result_1 = require_mapped_result();
    var type_2 = require_type3();
    function FromMappedResult(K, P) {
      return K in P ? FromSchemaType(K, P[K]) : (0, mapped_result_1.MappedResult)(P);
    }
    function MappedKeyToKnownMappedResultProperties(K) {
      return { [K]: (0, index_10.Literal)(K) };
    }
    function MappedKeyToUnknownMappedResultProperties(P) {
      return P.reduce((Acc, L) => {
        return { ...Acc, [L]: (0, index_10.Literal)(L) };
      }, {});
    }
    function MappedKeyToMappedResultProperties(K, P) {
      return (0, index_17.SetIncludes)(P, K) ? MappedKeyToKnownMappedResultProperties(K) : MappedKeyToUnknownMappedResultProperties(P);
    }
    function FromMappedKey(K, P) {
      const R = MappedKeyToMappedResultProperties(K, P);
      return FromMappedResult(K, R);
    }
    function FromRest(K, T) {
      return T.map((L) => FromSchemaType(K, L));
    }
    function FromProperties(K, T) {
      return globalThis.Object.getOwnPropertyNames(T).reduce((Acc, K2) => {
        return { ...Acc, [K2]: FromSchemaType(K, T[K2]) };
      }, {});
    }
    function FromSchemaType(K, T) {
      return (
        // unevaluated modifier types
        (0, type_2.IsOptional)(T) ? (0, index_12.Optional)(FromSchemaType(K, (0, index_2.Discard)(T, [index_1.OptionalKind]))) : (0, type_2.IsReadonly)(T) ? (0, index_14.Readonly)(FromSchemaType(K, (0, index_2.Discard)(T, [index_1.ReadonlyKind]))) : (
          // unevaluated mapped types
          (0, type_2.IsMappedResult)(T) ? FromMappedResult(K, T.properties) : (0, type_2.IsMappedKey)(T) ? FromMappedKey(K, T.keys) : (
            // unevaluated types
            (0, type_2.IsConstructor)(T) ? (0, index_5.Constructor)(FromRest(K, T.parameters), FromSchemaType(K, T.returns)) : (0, type_2.IsFunction)(T) ? (0, index_6.Function)(FromRest(K, T.parameters), FromSchemaType(K, T.returns)) : (0, type_2.IsAsyncIterator)(T) ? (0, index_4.AsyncIterator)(FromSchemaType(K, T.items)) : (0, type_2.IsIterator)(T) ? (0, index_9.Iterator)(FromSchemaType(K, T.items)) : (0, type_2.IsIntersect)(T) ? (0, index_8.Intersect)(FromRest(K, T.allOf)) : (0, type_2.IsUnion)(T) ? (0, index_16.Union)(FromRest(K, T.anyOf)) : (0, type_2.IsTuple)(T) ? (0, index_15.Tuple)(FromRest(K, T.items ?? [])) : (0, type_2.IsObject)(T) ? (0, index_11.Object)(FromProperties(K, T.properties)) : (0, type_2.IsArray)(T) ? (0, index_3.Array)(FromSchemaType(K, T.items)) : (0, type_2.IsPromise)(T) ? (0, index_13.Promise)(FromSchemaType(K, T.item)) : T
          )
        )
      );
    }
    function MappedFunctionReturnType(K, T, Acc = {}) {
      return K.reduce((Acc2, L) => {
        return { ...Acc2, [L]: FromSchemaType(L, T) };
      }, {});
    }
    exports.MappedFunctionReturnType = MappedFunctionReturnType;
    function Mapped(key, map, options = {}) {
      const K = (0, type_2.IsSchema)(key) ? (0, index_7.IndexPropertyKeys)(key) : key;
      const RT = map({ [index_1.Kind]: "MappedKey", keys: K });
      const R = MappedFunctionReturnType(K, RT);
      return (0, type_1.CloneType)((0, index_11.Object)(R), options);
    }
    exports.Mapped = Mapped;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/mapped/index.js
var require_mapped2 = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/mapped/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_mapped_key(), exports);
    __exportStar(require_mapped_result(), exports);
    __exportStar(require_mapped(), exports);
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/keyof/keyof-property-keys.js
var require_keyof_property_keys = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/keyof/keyof-property-keys.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.KeyOfPattern = exports.KeyOfPropertyKeys = void 0;
    var index_1 = require_sets();
    var type_1 = require_type3();
    function FromRest(T) {
      return T.reduce((Acc, L) => {
        return [...Acc, KeyOfPropertyKeys(L)];
      }, []);
    }
    function FromIntersect(T) {
      const C = FromRest(T);
      const R = (0, index_1.SetUnionMany)(C);
      return R;
    }
    function FromUnion(T) {
      const C = FromRest(T);
      const R = (0, index_1.SetIntersectMany)(C);
      return R;
    }
    function FromTuple(T) {
      return T.map((_, I) => I.toString());
    }
    function FromArray(_) {
      return ["[number]"];
    }
    function FromProperties(T) {
      return globalThis.Object.getOwnPropertyNames(T);
    }
    function FromPatternProperties(patternProperties) {
      if (!includePatternProperties)
        return [];
      const patternPropertyKeys = globalThis.Object.getOwnPropertyNames(patternProperties);
      return patternPropertyKeys.map((key) => {
        return key[0] === "^" && key[key.length - 1] === "$" ? key.slice(1, key.length - 1) : key;
      });
    }
    function KeyOfPropertyKeys(T) {
      return (0, type_1.IsIntersect)(T) ? FromIntersect(T.allOf) : (0, type_1.IsUnion)(T) ? FromUnion(T.anyOf) : (0, type_1.IsTuple)(T) ? FromTuple(T.items ?? []) : (0, type_1.IsArray)(T) ? FromArray(T.items) : (0, type_1.IsObject)(T) ? FromProperties(T.properties) : (0, type_1.IsRecord)(T) ? FromPatternProperties(T.patternProperties) : [];
    }
    exports.KeyOfPropertyKeys = KeyOfPropertyKeys;
    var includePatternProperties = false;
    function KeyOfPattern(schema) {
      includePatternProperties = true;
      const keys = KeyOfPropertyKeys(schema);
      includePatternProperties = false;
      const pattern = keys.map((key) => `(${key})`);
      return `^(${pattern.join("|")})$`;
    }
    exports.KeyOfPattern = KeyOfPattern;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/keyof/keyof.js
var require_keyof = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/keyof/keyof.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.KeyOf = exports.KeyOfPropertyKeysToRest = void 0;
    var index_1 = require_literal2();
    var index_2 = require_number2();
    var keyof_property_keys_1 = require_keyof_property_keys();
    var index_3 = require_union2();
    var type_1 = require_type2();
    var keyof_from_mapped_result_1 = require_keyof_from_mapped_result();
    var type_2 = require_type3();
    function KeyOfPropertyKeysToRest(T) {
      return T.map((L) => L === "[number]" ? (0, index_2.Number)() : (0, index_1.Literal)(L));
    }
    exports.KeyOfPropertyKeysToRest = KeyOfPropertyKeysToRest;
    function KeyOf(T, options = {}) {
      if ((0, type_2.IsMappedResult)(T)) {
        return (0, keyof_from_mapped_result_1.KeyOfFromMappedResult)(T, options);
      } else {
        const K = (0, keyof_property_keys_1.KeyOfPropertyKeys)(T);
        const S = KeyOfPropertyKeysToRest(K);
        const U = (0, index_3.UnionEvaluated)(S);
        return (0, type_1.CloneType)(U, options);
      }
    }
    exports.KeyOf = KeyOf;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/keyof/keyof-from-mapped-result.js
var require_keyof_from_mapped_result = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/keyof/keyof-from-mapped-result.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.KeyOfFromMappedResult = void 0;
    var index_1 = require_mapped2();
    var keyof_1 = require_keyof();
    function FromProperties(K, options) {
      return globalThis.Object.getOwnPropertyNames(K).reduce((Acc, K2) => {
        return { ...Acc, [K2]: (0, keyof_1.KeyOf)(K[K2], options) };
      }, {});
    }
    function FromMappedResult(R, options) {
      return FromProperties(R.properties, options);
    }
    function KeyOfFromMappedResult(R, options) {
      const P = FromMappedResult(R, options);
      return (0, index_1.MappedResult)(P);
    }
    exports.KeyOfFromMappedResult = KeyOfFromMappedResult;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/keyof/index.js
var require_keyof2 = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/keyof/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_keyof_from_mapped_result(), exports);
    __exportStar(require_keyof_property_keys(), exports);
    __exportStar(require_keyof(), exports);
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/extends/extends-undefined.js
var require_extends_undefined = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/extends/extends-undefined.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ExtendsUndefinedCheck = void 0;
    var index_1 = require_symbols2();
    function Intersect(schema) {
      return schema.allOf.every((schema2) => ExtendsUndefinedCheck(schema2));
    }
    function Union(schema) {
      return schema.anyOf.some((schema2) => ExtendsUndefinedCheck(schema2));
    }
    function Not(schema) {
      return !ExtendsUndefinedCheck(schema.not);
    }
    function ExtendsUndefinedCheck(schema) {
      return schema[index_1.Kind] === "Intersect" ? Intersect(schema) : schema[index_1.Kind] === "Union" ? Union(schema) : schema[index_1.Kind] === "Not" ? Not(schema) : schema[index_1.Kind] === "Undefined" ? true : false;
    }
    exports.ExtendsUndefinedCheck = ExtendsUndefinedCheck;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/errors/function.js
var require_function3 = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/errors/function.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.GetErrorFunction = exports.SetErrorFunction = exports.DefaultErrorFunction = void 0;
    var index_1 = require_symbols2();
    var errors_1 = require_errors();
    function DefaultErrorFunction(error) {
      switch (error.errorType) {
        case errors_1.ValueErrorType.ArrayContains:
          return "Expected array to contain at least one matching value";
        case errors_1.ValueErrorType.ArrayMaxContains:
          return `Expected array to contain no more than ${error.schema.maxContains} matching values`;
        case errors_1.ValueErrorType.ArrayMinContains:
          return `Expected array to contain at least ${error.schema.minContains} matching values`;
        case errors_1.ValueErrorType.ArrayMaxItems:
          return `Expected array length to be less or equal to ${error.schema.maxItems}`;
        case errors_1.ValueErrorType.ArrayMinItems:
          return `Expected array length to be greater or equal to ${error.schema.minItems}`;
        case errors_1.ValueErrorType.ArrayUniqueItems:
          return "Expected array elements to be unique";
        case errors_1.ValueErrorType.Array:
          return "Expected array";
        case errors_1.ValueErrorType.AsyncIterator:
          return "Expected AsyncIterator";
        case errors_1.ValueErrorType.BigIntExclusiveMaximum:
          return `Expected bigint to be less than ${error.schema.exclusiveMaximum}`;
        case errors_1.ValueErrorType.BigIntExclusiveMinimum:
          return `Expected bigint to be greater than ${error.schema.exclusiveMinimum}`;
        case errors_1.ValueErrorType.BigIntMaximum:
          return `Expected bigint to be less or equal to ${error.schema.maximum}`;
        case errors_1.ValueErrorType.BigIntMinimum:
          return `Expected bigint to be greater or equal to ${error.schema.minimum}`;
        case errors_1.ValueErrorType.BigIntMultipleOf:
          return `Expected bigint to be a multiple of ${error.schema.multipleOf}`;
        case errors_1.ValueErrorType.BigInt:
          return "Expected bigint";
        case errors_1.ValueErrorType.Boolean:
          return "Expected boolean";
        case errors_1.ValueErrorType.DateExclusiveMinimumTimestamp:
          return `Expected Date timestamp to be greater than ${error.schema.exclusiveMinimumTimestamp}`;
        case errors_1.ValueErrorType.DateExclusiveMaximumTimestamp:
          return `Expected Date timestamp to be less than ${error.schema.exclusiveMaximumTimestamp}`;
        case errors_1.ValueErrorType.DateMinimumTimestamp:
          return `Expected Date timestamp to be greater or equal to ${error.schema.minimumTimestamp}`;
        case errors_1.ValueErrorType.DateMaximumTimestamp:
          return `Expected Date timestamp to be less or equal to ${error.schema.maximumTimestamp}`;
        case errors_1.ValueErrorType.DateMultipleOfTimestamp:
          return `Expected Date timestamp to be a multiple of ${error.schema.multipleOfTimestamp}`;
        case errors_1.ValueErrorType.Date:
          return "Expected Date";
        case errors_1.ValueErrorType.Function:
          return "Expected function";
        case errors_1.ValueErrorType.IntegerExclusiveMaximum:
          return `Expected integer to be less than ${error.schema.exclusiveMaximum}`;
        case errors_1.ValueErrorType.IntegerExclusiveMinimum:
          return `Expected integer to be greater than ${error.schema.exclusiveMinimum}`;
        case errors_1.ValueErrorType.IntegerMaximum:
          return `Expected integer to be less or equal to ${error.schema.maximum}`;
        case errors_1.ValueErrorType.IntegerMinimum:
          return `Expected integer to be greater or equal to ${error.schema.minimum}`;
        case errors_1.ValueErrorType.IntegerMultipleOf:
          return `Expected integer to be a multiple of ${error.schema.multipleOf}`;
        case errors_1.ValueErrorType.Integer:
          return "Expected integer";
        case errors_1.ValueErrorType.IntersectUnevaluatedProperties:
          return "Unexpected property";
        case errors_1.ValueErrorType.Intersect:
          return "Expected all values to match";
        case errors_1.ValueErrorType.Iterator:
          return "Expected Iterator";
        case errors_1.ValueErrorType.Literal:
          return `Expected ${typeof error.schema.const === "string" ? `'${error.schema.const}'` : error.schema.const}`;
        case errors_1.ValueErrorType.Never:
          return "Never";
        case errors_1.ValueErrorType.Not:
          return "Value should not match";
        case errors_1.ValueErrorType.Null:
          return "Expected null";
        case errors_1.ValueErrorType.NumberExclusiveMaximum:
          return `Expected number to be less than ${error.schema.exclusiveMaximum}`;
        case errors_1.ValueErrorType.NumberExclusiveMinimum:
          return `Expected number to be greater than ${error.schema.exclusiveMinimum}`;
        case errors_1.ValueErrorType.NumberMaximum:
          return `Expected number to be less or equal to ${error.schema.maximum}`;
        case errors_1.ValueErrorType.NumberMinimum:
          return `Expected number to be greater or equal to ${error.schema.minimum}`;
        case errors_1.ValueErrorType.NumberMultipleOf:
          return `Expected number to be a multiple of ${error.schema.multipleOf}`;
        case errors_1.ValueErrorType.Number:
          return "Expected number";
        case errors_1.ValueErrorType.Object:
          return "Expected object";
        case errors_1.ValueErrorType.ObjectAdditionalProperties:
          return "Unexpected property";
        case errors_1.ValueErrorType.ObjectMaxProperties:
          return `Expected object to have no more than ${error.schema.maxProperties} properties`;
        case errors_1.ValueErrorType.ObjectMinProperties:
          return `Expected object to have at least ${error.schema.minProperties} properties`;
        case errors_1.ValueErrorType.ObjectRequiredProperty:
          return "Required property";
        case errors_1.ValueErrorType.Promise:
          return "Expected Promise";
        case errors_1.ValueErrorType.RegExp:
          return "Expected string to match regular expression";
        case errors_1.ValueErrorType.StringFormatUnknown:
          return `Unknown format '${error.schema.format}'`;
        case errors_1.ValueErrorType.StringFormat:
          return `Expected string to match '${error.schema.format}' format`;
        case errors_1.ValueErrorType.StringMaxLength:
          return `Expected string length less or equal to ${error.schema.maxLength}`;
        case errors_1.ValueErrorType.StringMinLength:
          return `Expected string length greater or equal to ${error.schema.minLength}`;
        case errors_1.ValueErrorType.StringPattern:
          return `Expected string to match '${error.schema.pattern}'`;
        case errors_1.ValueErrorType.String:
          return "Expected string";
        case errors_1.ValueErrorType.Symbol:
          return "Expected symbol";
        case errors_1.ValueErrorType.TupleLength:
          return `Expected tuple to have ${error.schema.maxItems || 0} elements`;
        case errors_1.ValueErrorType.Tuple:
          return "Expected tuple";
        case errors_1.ValueErrorType.Uint8ArrayMaxByteLength:
          return `Expected byte length less or equal to ${error.schema.maxByteLength}`;
        case errors_1.ValueErrorType.Uint8ArrayMinByteLength:
          return `Expected byte length greater or equal to ${error.schema.minByteLength}`;
        case errors_1.ValueErrorType.Uint8Array:
          return "Expected Uint8Array";
        case errors_1.ValueErrorType.Undefined:
          return "Expected undefined";
        case errors_1.ValueErrorType.Union:
          return "Expected union value";
        case errors_1.ValueErrorType.Void:
          return "Expected void";
        case errors_1.ValueErrorType.Kind:
          return `Expected kind '${error.schema[index_1.Kind]}'`;
        default:
          return "Unknown error type";
      }
    }
    exports.DefaultErrorFunction = DefaultErrorFunction;
    var errorFunction = DefaultErrorFunction;
    function SetErrorFunction(callback) {
      errorFunction = callback;
    }
    exports.SetErrorFunction = SetErrorFunction;
    function GetErrorFunction() {
      return errorFunction;
    }
    exports.GetErrorFunction = GetErrorFunction;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/value/deref/deref.js
var require_deref = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/value/deref/deref.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Deref = exports.TypeDereferenceError = void 0;
    var index_1 = require_error2();
    var TypeDereferenceError = class extends index_1.TypeBoxError {
      constructor(schema) {
        super(`Unable to dereference schema with $id '${schema.$id}'`);
        this.schema = schema;
      }
    };
    exports.TypeDereferenceError = TypeDereferenceError;
    function Deref(schema, references) {
      const index = references.findIndex((target) => target.$id === schema.$ref);
      if (index === -1)
        throw new TypeDereferenceError(schema);
      return references[index];
    }
    exports.Deref = Deref;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/value/deref/index.js
var require_deref2 = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/value/deref/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_deref(), exports);
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/value/hash/hash.js
var require_hash = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/value/hash/hash.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Hash = exports.ValueHashError = void 0;
    var index_1 = require_guard2();
    var index_2 = require_error2();
    var ValueHashError = class extends index_2.TypeBoxError {
      constructor(value) {
        super(`Unable to hash value`);
        this.value = value;
      }
    };
    exports.ValueHashError = ValueHashError;
    var ByteMarker;
    (function(ByteMarker2) {
      ByteMarker2[ByteMarker2["Undefined"] = 0] = "Undefined";
      ByteMarker2[ByteMarker2["Null"] = 1] = "Null";
      ByteMarker2[ByteMarker2["Boolean"] = 2] = "Boolean";
      ByteMarker2[ByteMarker2["Number"] = 3] = "Number";
      ByteMarker2[ByteMarker2["String"] = 4] = "String";
      ByteMarker2[ByteMarker2["Object"] = 5] = "Object";
      ByteMarker2[ByteMarker2["Array"] = 6] = "Array";
      ByteMarker2[ByteMarker2["Date"] = 7] = "Date";
      ByteMarker2[ByteMarker2["Uint8Array"] = 8] = "Uint8Array";
      ByteMarker2[ByteMarker2["Symbol"] = 9] = "Symbol";
      ByteMarker2[ByteMarker2["BigInt"] = 10] = "BigInt";
    })(ByteMarker || (ByteMarker = {}));
    var Accumulator = BigInt("14695981039346656037");
    var [Prime, Size] = [BigInt("1099511628211"), BigInt("2") ** BigInt("64")];
    var Bytes = Array.from({ length: 256 }).map((_, i) => BigInt(i));
    var F64 = new Float64Array(1);
    var F64In = new DataView(F64.buffer);
    var F64Out = new Uint8Array(F64.buffer);
    function* NumberToBytes(value) {
      const byteCount = value === 0 ? 1 : Math.ceil(Math.floor(Math.log2(value) + 1) / 8);
      for (let i = 0; i < byteCount; i++) {
        yield value >> 8 * (byteCount - 1 - i) & 255;
      }
    }
    function ArrayType(value) {
      FNV1A64(ByteMarker.Array);
      for (const item of value) {
        Visit(item);
      }
    }
    function BooleanType(value) {
      FNV1A64(ByteMarker.Boolean);
      FNV1A64(value ? 1 : 0);
    }
    function BigIntType(value) {
      FNV1A64(ByteMarker.BigInt);
      F64In.setBigInt64(0, value);
      for (const byte of F64Out) {
        FNV1A64(byte);
      }
    }
    function DateType(value) {
      FNV1A64(ByteMarker.Date);
      Visit(value.getTime());
    }
    function NullType(value) {
      FNV1A64(ByteMarker.Null);
    }
    function NumberType(value) {
      FNV1A64(ByteMarker.Number);
      F64In.setFloat64(0, value);
      for (const byte of F64Out) {
        FNV1A64(byte);
      }
    }
    function ObjectType(value) {
      FNV1A64(ByteMarker.Object);
      for (const key of globalThis.Object.keys(value).sort()) {
        Visit(key);
        Visit(value[key]);
      }
    }
    function StringType(value) {
      FNV1A64(ByteMarker.String);
      for (let i = 0; i < value.length; i++) {
        for (const byte of NumberToBytes(value.charCodeAt(i))) {
          FNV1A64(byte);
        }
      }
    }
    function SymbolType(value) {
      FNV1A64(ByteMarker.Symbol);
      Visit(value.description);
    }
    function Uint8ArrayType(value) {
      FNV1A64(ByteMarker.Uint8Array);
      for (let i = 0; i < value.length; i++) {
        FNV1A64(value[i]);
      }
    }
    function UndefinedType(value) {
      return FNV1A64(ByteMarker.Undefined);
    }
    function Visit(value) {
      if ((0, index_1.IsArray)(value))
        return ArrayType(value);
      if ((0, index_1.IsBoolean)(value))
        return BooleanType(value);
      if ((0, index_1.IsBigInt)(value))
        return BigIntType(value);
      if ((0, index_1.IsDate)(value))
        return DateType(value);
      if ((0, index_1.IsNull)(value))
        return NullType(value);
      if ((0, index_1.IsNumber)(value))
        return NumberType(value);
      if ((0, index_1.IsPlainObject)(value))
        return ObjectType(value);
      if ((0, index_1.IsString)(value))
        return StringType(value);
      if ((0, index_1.IsSymbol)(value))
        return SymbolType(value);
      if ((0, index_1.IsUint8Array)(value))
        return Uint8ArrayType(value);
      if ((0, index_1.IsUndefined)(value))
        return UndefinedType(value);
      throw new ValueHashError(value);
    }
    function FNV1A64(byte) {
      Accumulator = Accumulator ^ Bytes[byte];
      Accumulator = Accumulator * Prime % Size;
    }
    function Hash(value) {
      Accumulator = BigInt("14695981039346656037");
      Visit(value);
      return Accumulator;
    }
    exports.Hash = Hash;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/value/hash/index.js
var require_hash2 = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/value/hash/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_hash(), exports);
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/errors/errors.js
var require_errors = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/errors/errors.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Errors = exports.ValueErrorIterator = exports.ValueErrorsUnknownTypeError = exports.ValueErrorType = void 0;
    var index_1 = require_system2();
    var index_2 = require_keyof2();
    var index_3 = require_registry();
    var extends_undefined_1 = require_extends_undefined();
    var function_1 = require_function3();
    var index_4 = require_error2();
    var index_5 = require_deref2();
    var index_6 = require_hash2();
    var index_7 = require_symbols2();
    var index_8 = require_never2();
    var index_9 = require_guard2();
    var ValueErrorType;
    (function(ValueErrorType2) {
      ValueErrorType2[ValueErrorType2["ArrayContains"] = 0] = "ArrayContains";
      ValueErrorType2[ValueErrorType2["ArrayMaxContains"] = 1] = "ArrayMaxContains";
      ValueErrorType2[ValueErrorType2["ArrayMaxItems"] = 2] = "ArrayMaxItems";
      ValueErrorType2[ValueErrorType2["ArrayMinContains"] = 3] = "ArrayMinContains";
      ValueErrorType2[ValueErrorType2["ArrayMinItems"] = 4] = "ArrayMinItems";
      ValueErrorType2[ValueErrorType2["ArrayUniqueItems"] = 5] = "ArrayUniqueItems";
      ValueErrorType2[ValueErrorType2["Array"] = 6] = "Array";
      ValueErrorType2[ValueErrorType2["AsyncIterator"] = 7] = "AsyncIterator";
      ValueErrorType2[ValueErrorType2["BigIntExclusiveMaximum"] = 8] = "BigIntExclusiveMaximum";
      ValueErrorType2[ValueErrorType2["BigIntExclusiveMinimum"] = 9] = "BigIntExclusiveMinimum";
      ValueErrorType2[ValueErrorType2["BigIntMaximum"] = 10] = "BigIntMaximum";
      ValueErrorType2[ValueErrorType2["BigIntMinimum"] = 11] = "BigIntMinimum";
      ValueErrorType2[ValueErrorType2["BigIntMultipleOf"] = 12] = "BigIntMultipleOf";
      ValueErrorType2[ValueErrorType2["BigInt"] = 13] = "BigInt";
      ValueErrorType2[ValueErrorType2["Boolean"] = 14] = "Boolean";
      ValueErrorType2[ValueErrorType2["DateExclusiveMaximumTimestamp"] = 15] = "DateExclusiveMaximumTimestamp";
      ValueErrorType2[ValueErrorType2["DateExclusiveMinimumTimestamp"] = 16] = "DateExclusiveMinimumTimestamp";
      ValueErrorType2[ValueErrorType2["DateMaximumTimestamp"] = 17] = "DateMaximumTimestamp";
      ValueErrorType2[ValueErrorType2["DateMinimumTimestamp"] = 18] = "DateMinimumTimestamp";
      ValueErrorType2[ValueErrorType2["DateMultipleOfTimestamp"] = 19] = "DateMultipleOfTimestamp";
      ValueErrorType2[ValueErrorType2["Date"] = 20] = "Date";
      ValueErrorType2[ValueErrorType2["Function"] = 21] = "Function";
      ValueErrorType2[ValueErrorType2["IntegerExclusiveMaximum"] = 22] = "IntegerExclusiveMaximum";
      ValueErrorType2[ValueErrorType2["IntegerExclusiveMinimum"] = 23] = "IntegerExclusiveMinimum";
      ValueErrorType2[ValueErrorType2["IntegerMaximum"] = 24] = "IntegerMaximum";
      ValueErrorType2[ValueErrorType2["IntegerMinimum"] = 25] = "IntegerMinimum";
      ValueErrorType2[ValueErrorType2["IntegerMultipleOf"] = 26] = "IntegerMultipleOf";
      ValueErrorType2[ValueErrorType2["Integer"] = 27] = "Integer";
      ValueErrorType2[ValueErrorType2["IntersectUnevaluatedProperties"] = 28] = "IntersectUnevaluatedProperties";
      ValueErrorType2[ValueErrorType2["Intersect"] = 29] = "Intersect";
      ValueErrorType2[ValueErrorType2["Iterator"] = 30] = "Iterator";
      ValueErrorType2[ValueErrorType2["Kind"] = 31] = "Kind";
      ValueErrorType2[ValueErrorType2["Literal"] = 32] = "Literal";
      ValueErrorType2[ValueErrorType2["Never"] = 33] = "Never";
      ValueErrorType2[ValueErrorType2["Not"] = 34] = "Not";
      ValueErrorType2[ValueErrorType2["Null"] = 35] = "Null";
      ValueErrorType2[ValueErrorType2["NumberExclusiveMaximum"] = 36] = "NumberExclusiveMaximum";
      ValueErrorType2[ValueErrorType2["NumberExclusiveMinimum"] = 37] = "NumberExclusiveMinimum";
      ValueErrorType2[ValueErrorType2["NumberMaximum"] = 38] = "NumberMaximum";
      ValueErrorType2[ValueErrorType2["NumberMinimum"] = 39] = "NumberMinimum";
      ValueErrorType2[ValueErrorType2["NumberMultipleOf"] = 40] = "NumberMultipleOf";
      ValueErrorType2[ValueErrorType2["Number"] = 41] = "Number";
      ValueErrorType2[ValueErrorType2["ObjectAdditionalProperties"] = 42] = "ObjectAdditionalProperties";
      ValueErrorType2[ValueErrorType2["ObjectMaxProperties"] = 43] = "ObjectMaxProperties";
      ValueErrorType2[ValueErrorType2["ObjectMinProperties"] = 44] = "ObjectMinProperties";
      ValueErrorType2[ValueErrorType2["ObjectRequiredProperty"] = 45] = "ObjectRequiredProperty";
      ValueErrorType2[ValueErrorType2["Object"] = 46] = "Object";
      ValueErrorType2[ValueErrorType2["Promise"] = 47] = "Promise";
      ValueErrorType2[ValueErrorType2["RegExp"] = 48] = "RegExp";
      ValueErrorType2[ValueErrorType2["StringFormatUnknown"] = 49] = "StringFormatUnknown";
      ValueErrorType2[ValueErrorType2["StringFormat"] = 50] = "StringFormat";
      ValueErrorType2[ValueErrorType2["StringMaxLength"] = 51] = "StringMaxLength";
      ValueErrorType2[ValueErrorType2["StringMinLength"] = 52] = "StringMinLength";
      ValueErrorType2[ValueErrorType2["StringPattern"] = 53] = "StringPattern";
      ValueErrorType2[ValueErrorType2["String"] = 54] = "String";
      ValueErrorType2[ValueErrorType2["Symbol"] = 55] = "Symbol";
      ValueErrorType2[ValueErrorType2["TupleLength"] = 56] = "TupleLength";
      ValueErrorType2[ValueErrorType2["Tuple"] = 57] = "Tuple";
      ValueErrorType2[ValueErrorType2["Uint8ArrayMaxByteLength"] = 58] = "Uint8ArrayMaxByteLength";
      ValueErrorType2[ValueErrorType2["Uint8ArrayMinByteLength"] = 59] = "Uint8ArrayMinByteLength";
      ValueErrorType2[ValueErrorType2["Uint8Array"] = 60] = "Uint8Array";
      ValueErrorType2[ValueErrorType2["Undefined"] = 61] = "Undefined";
      ValueErrorType2[ValueErrorType2["Union"] = 62] = "Union";
      ValueErrorType2[ValueErrorType2["Void"] = 63] = "Void";
    })(ValueErrorType || (exports.ValueErrorType = ValueErrorType = {}));
    var ValueErrorsUnknownTypeError = class extends index_4.TypeBoxError {
      constructor(schema) {
        super("Unknown type");
        this.schema = schema;
      }
    };
    exports.ValueErrorsUnknownTypeError = ValueErrorsUnknownTypeError;
    function EscapeKey(key) {
      return key.replace(/~/g, "~0").replace(/\//g, "~1");
    }
    function IsDefined(value) {
      return value !== void 0;
    }
    var ValueErrorIterator = class {
      constructor(iterator) {
        this.iterator = iterator;
      }
      [Symbol.iterator]() {
        return this.iterator;
      }
      /** Returns the first value error or undefined if no errors */
      First() {
        const next = this.iterator.next();
        return next.done ? void 0 : next.value;
      }
    };
    exports.ValueErrorIterator = ValueErrorIterator;
    function Create(errorType, schema, path, value) {
      return { type: errorType, schema, path, value, message: (0, function_1.GetErrorFunction)()({ errorType, path, schema, value }) };
    }
    function* FromAny(schema, references, path, value) {
    }
    function* FromArray(schema, references, path, value) {
      if (!(0, index_9.IsArray)(value)) {
        return yield Create(ValueErrorType.Array, schema, path, value);
      }
      if (IsDefined(schema.minItems) && !(value.length >= schema.minItems)) {
        yield Create(ValueErrorType.ArrayMinItems, schema, path, value);
      }
      if (IsDefined(schema.maxItems) && !(value.length <= schema.maxItems)) {
        yield Create(ValueErrorType.ArrayMaxItems, schema, path, value);
      }
      for (let i = 0; i < value.length; i++) {
        yield* Visit(schema.items, references, `${path}/${i}`, value[i]);
      }
      if (schema.uniqueItems === true && !function() {
        const set = /* @__PURE__ */ new Set();
        for (const element of value) {
          const hashed = (0, index_6.Hash)(element);
          if (set.has(hashed)) {
            return false;
          } else {
            set.add(hashed);
          }
        }
        return true;
      }()) {
        yield Create(ValueErrorType.ArrayUniqueItems, schema, path, value);
      }
      if (!(IsDefined(schema.contains) || IsDefined(schema.minContains) || IsDefined(schema.maxContains))) {
        return;
      }
      const containsSchema = IsDefined(schema.contains) ? schema.contains : (0, index_8.Never)();
      const containsCount = value.reduce((acc, value2, index) => Visit(containsSchema, references, `${path}${index}`, value2).next().done === true ? acc + 1 : acc, 0);
      if (containsCount === 0) {
        yield Create(ValueErrorType.ArrayContains, schema, path, value);
      }
      if ((0, index_9.IsNumber)(schema.minContains) && containsCount < schema.minContains) {
        yield Create(ValueErrorType.ArrayMinContains, schema, path, value);
      }
      if ((0, index_9.IsNumber)(schema.maxContains) && containsCount > schema.maxContains) {
        yield Create(ValueErrorType.ArrayMaxContains, schema, path, value);
      }
    }
    function* FromAsyncIterator(schema, references, path, value) {
      if (!(0, index_9.IsAsyncIterator)(value))
        yield Create(ValueErrorType.AsyncIterator, schema, path, value);
    }
    function* FromBigInt(schema, references, path, value) {
      if (!(0, index_9.IsBigInt)(value))
        return yield Create(ValueErrorType.BigInt, schema, path, value);
      if (IsDefined(schema.exclusiveMaximum) && !(value < schema.exclusiveMaximum)) {
        yield Create(ValueErrorType.BigIntExclusiveMaximum, schema, path, value);
      }
      if (IsDefined(schema.exclusiveMinimum) && !(value > schema.exclusiveMinimum)) {
        yield Create(ValueErrorType.BigIntExclusiveMinimum, schema, path, value);
      }
      if (IsDefined(schema.maximum) && !(value <= schema.maximum)) {
        yield Create(ValueErrorType.BigIntMaximum, schema, path, value);
      }
      if (IsDefined(schema.minimum) && !(value >= schema.minimum)) {
        yield Create(ValueErrorType.BigIntMinimum, schema, path, value);
      }
      if (IsDefined(schema.multipleOf) && !(value % schema.multipleOf === BigInt(0))) {
        yield Create(ValueErrorType.BigIntMultipleOf, schema, path, value);
      }
    }
    function* FromBoolean(schema, references, path, value) {
      if (!(0, index_9.IsBoolean)(value))
        yield Create(ValueErrorType.Boolean, schema, path, value);
    }
    function* FromConstructor(schema, references, path, value) {
      yield* Visit(schema.returns, references, path, value.prototype);
    }
    function* FromDate(schema, references, path, value) {
      if (!(0, index_9.IsDate)(value))
        return yield Create(ValueErrorType.Date, schema, path, value);
      if (IsDefined(schema.exclusiveMaximumTimestamp) && !(value.getTime() < schema.exclusiveMaximumTimestamp)) {
        yield Create(ValueErrorType.DateExclusiveMaximumTimestamp, schema, path, value);
      }
      if (IsDefined(schema.exclusiveMinimumTimestamp) && !(value.getTime() > schema.exclusiveMinimumTimestamp)) {
        yield Create(ValueErrorType.DateExclusiveMinimumTimestamp, schema, path, value);
      }
      if (IsDefined(schema.maximumTimestamp) && !(value.getTime() <= schema.maximumTimestamp)) {
        yield Create(ValueErrorType.DateMaximumTimestamp, schema, path, value);
      }
      if (IsDefined(schema.minimumTimestamp) && !(value.getTime() >= schema.minimumTimestamp)) {
        yield Create(ValueErrorType.DateMinimumTimestamp, schema, path, value);
      }
      if (IsDefined(schema.multipleOfTimestamp) && !(value.getTime() % schema.multipleOfTimestamp === 0)) {
        yield Create(ValueErrorType.DateMultipleOfTimestamp, schema, path, value);
      }
    }
    function* FromFunction(schema, references, path, value) {
      if (!(0, index_9.IsFunction)(value))
        yield Create(ValueErrorType.Function, schema, path, value);
    }
    function* FromInteger(schema, references, path, value) {
      if (!(0, index_9.IsInteger)(value))
        return yield Create(ValueErrorType.Integer, schema, path, value);
      if (IsDefined(schema.exclusiveMaximum) && !(value < schema.exclusiveMaximum)) {
        yield Create(ValueErrorType.IntegerExclusiveMaximum, schema, path, value);
      }
      if (IsDefined(schema.exclusiveMinimum) && !(value > schema.exclusiveMinimum)) {
        yield Create(ValueErrorType.IntegerExclusiveMinimum, schema, path, value);
      }
      if (IsDefined(schema.maximum) && !(value <= schema.maximum)) {
        yield Create(ValueErrorType.IntegerMaximum, schema, path, value);
      }
      if (IsDefined(schema.minimum) && !(value >= schema.minimum)) {
        yield Create(ValueErrorType.IntegerMinimum, schema, path, value);
      }
      if (IsDefined(schema.multipleOf) && !(value % schema.multipleOf === 0)) {
        yield Create(ValueErrorType.IntegerMultipleOf, schema, path, value);
      }
    }
    function* FromIntersect(schema, references, path, value) {
      for (const inner of schema.allOf) {
        const next = Visit(inner, references, path, value).next();
        if (!next.done) {
          yield Create(ValueErrorType.Intersect, schema, path, value);
          yield next.value;
        }
      }
      if (schema.unevaluatedProperties === false) {
        const keyCheck = new RegExp((0, index_2.KeyOfPattern)(schema));
        for (const valueKey of Object.getOwnPropertyNames(value)) {
          if (!keyCheck.test(valueKey)) {
            yield Create(ValueErrorType.IntersectUnevaluatedProperties, schema, `${path}/${valueKey}`, value);
          }
        }
      }
      if (typeof schema.unevaluatedProperties === "object") {
        const keyCheck = new RegExp((0, index_2.KeyOfPattern)(schema));
        for (const valueKey of Object.getOwnPropertyNames(value)) {
          if (!keyCheck.test(valueKey)) {
            const next = Visit(schema.unevaluatedProperties, references, `${path}/${valueKey}`, value[valueKey]).next();
            if (!next.done)
              yield next.value;
          }
        }
      }
    }
    function* FromIterator(schema, references, path, value) {
      if (!(0, index_9.IsIterator)(value))
        yield Create(ValueErrorType.Iterator, schema, path, value);
    }
    function* FromLiteral(schema, references, path, value) {
      if (!(value === schema.const))
        yield Create(ValueErrorType.Literal, schema, path, value);
    }
    function* FromNever(schema, references, path, value) {
      yield Create(ValueErrorType.Never, schema, path, value);
    }
    function* FromNot(schema, references, path, value) {
      if (Visit(schema.not, references, path, value).next().done === true)
        yield Create(ValueErrorType.Not, schema, path, value);
    }
    function* FromNull(schema, references, path, value) {
      if (!(0, index_9.IsNull)(value))
        yield Create(ValueErrorType.Null, schema, path, value);
    }
    function* FromNumber(schema, references, path, value) {
      if (!index_1.TypeSystemPolicy.IsNumberLike(value))
        return yield Create(ValueErrorType.Number, schema, path, value);
      if (IsDefined(schema.exclusiveMaximum) && !(value < schema.exclusiveMaximum)) {
        yield Create(ValueErrorType.NumberExclusiveMaximum, schema, path, value);
      }
      if (IsDefined(schema.exclusiveMinimum) && !(value > schema.exclusiveMinimum)) {
        yield Create(ValueErrorType.NumberExclusiveMinimum, schema, path, value);
      }
      if (IsDefined(schema.maximum) && !(value <= schema.maximum)) {
        yield Create(ValueErrorType.NumberMaximum, schema, path, value);
      }
      if (IsDefined(schema.minimum) && !(value >= schema.minimum)) {
        yield Create(ValueErrorType.NumberMinimum, schema, path, value);
      }
      if (IsDefined(schema.multipleOf) && !(value % schema.multipleOf === 0)) {
        yield Create(ValueErrorType.NumberMultipleOf, schema, path, value);
      }
    }
    function* FromObject(schema, references, path, value) {
      if (!index_1.TypeSystemPolicy.IsObjectLike(value))
        return yield Create(ValueErrorType.Object, schema, path, value);
      if (IsDefined(schema.minProperties) && !(Object.getOwnPropertyNames(value).length >= schema.minProperties)) {
        yield Create(ValueErrorType.ObjectMinProperties, schema, path, value);
      }
      if (IsDefined(schema.maxProperties) && !(Object.getOwnPropertyNames(value).length <= schema.maxProperties)) {
        yield Create(ValueErrorType.ObjectMaxProperties, schema, path, value);
      }
      const requiredKeys = Array.isArray(schema.required) ? schema.required : [];
      const knownKeys = Object.getOwnPropertyNames(schema.properties);
      const unknownKeys = Object.getOwnPropertyNames(value);
      for (const requiredKey of requiredKeys) {
        if (unknownKeys.includes(requiredKey))
          continue;
        yield Create(ValueErrorType.ObjectRequiredProperty, schema.properties[requiredKey], `${path}/${EscapeKey(requiredKey)}`, void 0);
      }
      if (schema.additionalProperties === false) {
        for (const valueKey of unknownKeys) {
          if (!knownKeys.includes(valueKey)) {
            yield Create(ValueErrorType.ObjectAdditionalProperties, schema, `${path}/${EscapeKey(valueKey)}`, value[valueKey]);
          }
        }
      }
      if (typeof schema.additionalProperties === "object") {
        for (const valueKey of unknownKeys) {
          if (knownKeys.includes(valueKey))
            continue;
          yield* Visit(schema.additionalProperties, references, `${path}/${EscapeKey(valueKey)}`, value[valueKey]);
        }
      }
      for (const knownKey of knownKeys) {
        const property = schema.properties[knownKey];
        if (schema.required && schema.required.includes(knownKey)) {
          yield* Visit(property, references, `${path}/${EscapeKey(knownKey)}`, value[knownKey]);
          if ((0, extends_undefined_1.ExtendsUndefinedCheck)(schema) && !(knownKey in value)) {
            yield Create(ValueErrorType.ObjectRequiredProperty, property, `${path}/${EscapeKey(knownKey)}`, void 0);
          }
        } else {
          if (index_1.TypeSystemPolicy.IsExactOptionalProperty(value, knownKey)) {
            yield* Visit(property, references, `${path}/${EscapeKey(knownKey)}`, value[knownKey]);
          }
        }
      }
    }
    function* FromPromise(schema, references, path, value) {
      if (!(0, index_9.IsPromise)(value))
        yield Create(ValueErrorType.Promise, schema, path, value);
    }
    function* FromRecord(schema, references, path, value) {
      if (!index_1.TypeSystemPolicy.IsRecordLike(value))
        return yield Create(ValueErrorType.Object, schema, path, value);
      if (IsDefined(schema.minProperties) && !(Object.getOwnPropertyNames(value).length >= schema.minProperties)) {
        yield Create(ValueErrorType.ObjectMinProperties, schema, path, value);
      }
      if (IsDefined(schema.maxProperties) && !(Object.getOwnPropertyNames(value).length <= schema.maxProperties)) {
        yield Create(ValueErrorType.ObjectMaxProperties, schema, path, value);
      }
      const [patternKey, patternSchema] = Object.entries(schema.patternProperties)[0];
      const regex = new RegExp(patternKey);
      for (const [propertyKey, propertyValue] of Object.entries(value)) {
        if (regex.test(propertyKey))
          yield* Visit(patternSchema, references, `${path}/${EscapeKey(propertyKey)}`, propertyValue);
      }
      if (typeof schema.additionalProperties === "object") {
        for (const [propertyKey, propertyValue] of Object.entries(value)) {
          if (!regex.test(propertyKey))
            yield* Visit(schema.additionalProperties, references, `${path}/${EscapeKey(propertyKey)}`, propertyValue);
        }
      }
      if (schema.additionalProperties === false) {
        for (const [propertyKey, propertyValue] of Object.entries(value)) {
          if (regex.test(propertyKey))
            continue;
          return yield Create(ValueErrorType.ObjectAdditionalProperties, schema, `${path}/${EscapeKey(propertyKey)}`, propertyValue);
        }
      }
    }
    function* FromRef(schema, references, path, value) {
      yield* Visit((0, index_5.Deref)(schema, references), references, path, value);
    }
    function* FromRegExp(schema, references, path, value) {
      const regex = new RegExp(schema.source, schema.flags);
      if (!regex.test(value)) {
        return yield Create(ValueErrorType.RegExp, schema, path, value);
      }
    }
    function* FromString(schema, references, path, value) {
      if (!(0, index_9.IsString)(value))
        return yield Create(ValueErrorType.String, schema, path, value);
      if (IsDefined(schema.minLength) && !(value.length >= schema.minLength)) {
        yield Create(ValueErrorType.StringMinLength, schema, path, value);
      }
      if (IsDefined(schema.maxLength) && !(value.length <= schema.maxLength)) {
        yield Create(ValueErrorType.StringMaxLength, schema, path, value);
      }
      if ((0, index_9.IsString)(schema.pattern)) {
        const regex = new RegExp(schema.pattern);
        if (!regex.test(value)) {
          yield Create(ValueErrorType.StringPattern, schema, path, value);
        }
      }
      if ((0, index_9.IsString)(schema.format)) {
        if (!index_3.FormatRegistry.Has(schema.format)) {
          yield Create(ValueErrorType.StringFormatUnknown, schema, path, value);
        } else {
          const format = index_3.FormatRegistry.Get(schema.format);
          if (!format(value)) {
            yield Create(ValueErrorType.StringFormat, schema, path, value);
          }
        }
      }
    }
    function* FromSymbol(schema, references, path, value) {
      if (!(0, index_9.IsSymbol)(value))
        yield Create(ValueErrorType.Symbol, schema, path, value);
    }
    function* FromTemplateLiteral(schema, references, path, value) {
      if (!(0, index_9.IsString)(value))
        return yield Create(ValueErrorType.String, schema, path, value);
      const regex = new RegExp(schema.pattern);
      if (!regex.test(value)) {
        yield Create(ValueErrorType.StringPattern, schema, path, value);
      }
    }
    function* FromThis(schema, references, path, value) {
      yield* Visit((0, index_5.Deref)(schema, references), references, path, value);
    }
    function* FromTuple(schema, references, path, value) {
      if (!(0, index_9.IsArray)(value))
        return yield Create(ValueErrorType.Tuple, schema, path, value);
      if (schema.items === void 0 && !(value.length === 0)) {
        return yield Create(ValueErrorType.TupleLength, schema, path, value);
      }
      if (!(value.length === schema.maxItems)) {
        return yield Create(ValueErrorType.TupleLength, schema, path, value);
      }
      if (!schema.items) {
        return;
      }
      for (let i = 0; i < schema.items.length; i++) {
        yield* Visit(schema.items[i], references, `${path}/${i}`, value[i]);
      }
    }
    function* FromUndefined(schema, references, path, value) {
      if (!(0, index_9.IsUndefined)(value))
        yield Create(ValueErrorType.Undefined, schema, path, value);
    }
    function* FromUnion(schema, references, path, value) {
      let count = 0;
      for (const subschema of schema.anyOf) {
        const errors = [...Visit(subschema, references, path, value)];
        if (errors.length === 0)
          return;
        count += errors.length;
      }
      if (count > 0) {
        yield Create(ValueErrorType.Union, schema, path, value);
      }
    }
    function* FromUint8Array(schema, references, path, value) {
      if (!(0, index_9.IsUint8Array)(value))
        return yield Create(ValueErrorType.Uint8Array, schema, path, value);
      if (IsDefined(schema.maxByteLength) && !(value.length <= schema.maxByteLength)) {
        yield Create(ValueErrorType.Uint8ArrayMaxByteLength, schema, path, value);
      }
      if (IsDefined(schema.minByteLength) && !(value.length >= schema.minByteLength)) {
        yield Create(ValueErrorType.Uint8ArrayMinByteLength, schema, path, value);
      }
    }
    function* FromUnknown(schema, references, path, value) {
    }
    function* FromVoid(schema, references, path, value) {
      if (!index_1.TypeSystemPolicy.IsVoidLike(value))
        yield Create(ValueErrorType.Void, schema, path, value);
    }
    function* FromKind(schema, references, path, value) {
      const check = index_3.TypeRegistry.Get(schema[index_7.Kind]);
      if (!check(schema, value))
        yield Create(ValueErrorType.Kind, schema, path, value);
    }
    function* Visit(schema, references, path, value) {
      const references_ = IsDefined(schema.$id) ? [...references, schema] : references;
      const schema_ = schema;
      switch (schema_[index_7.Kind]) {
        case "Any":
          return yield* FromAny(schema_, references_, path, value);
        case "Array":
          return yield* FromArray(schema_, references_, path, value);
        case "AsyncIterator":
          return yield* FromAsyncIterator(schema_, references_, path, value);
        case "BigInt":
          return yield* FromBigInt(schema_, references_, path, value);
        case "Boolean":
          return yield* FromBoolean(schema_, references_, path, value);
        case "Constructor":
          return yield* FromConstructor(schema_, references_, path, value);
        case "Date":
          return yield* FromDate(schema_, references_, path, value);
        case "Function":
          return yield* FromFunction(schema_, references_, path, value);
        case "Integer":
          return yield* FromInteger(schema_, references_, path, value);
        case "Intersect":
          return yield* FromIntersect(schema_, references_, path, value);
        case "Iterator":
          return yield* FromIterator(schema_, references_, path, value);
        case "Literal":
          return yield* FromLiteral(schema_, references_, path, value);
        case "Never":
          return yield* FromNever(schema_, references_, path, value);
        case "Not":
          return yield* FromNot(schema_, references_, path, value);
        case "Null":
          return yield* FromNull(schema_, references_, path, value);
        case "Number":
          return yield* FromNumber(schema_, references_, path, value);
        case "Object":
          return yield* FromObject(schema_, references_, path, value);
        case "Promise":
          return yield* FromPromise(schema_, references_, path, value);
        case "Record":
          return yield* FromRecord(schema_, references_, path, value);
        case "Ref":
          return yield* FromRef(schema_, references_, path, value);
        case "RegExp":
          return yield* FromRegExp(schema_, references_, path, value);
        case "String":
          return yield* FromString(schema_, references_, path, value);
        case "Symbol":
          return yield* FromSymbol(schema_, references_, path, value);
        case "TemplateLiteral":
          return yield* FromTemplateLiteral(schema_, references_, path, value);
        case "This":
          return yield* FromThis(schema_, references_, path, value);
        case "Tuple":
          return yield* FromTuple(schema_, references_, path, value);
        case "Undefined":
          return yield* FromUndefined(schema_, references_, path, value);
        case "Union":
          return yield* FromUnion(schema_, references_, path, value);
        case "Uint8Array":
          return yield* FromUint8Array(schema_, references_, path, value);
        case "Unknown":
          return yield* FromUnknown(schema_, references_, path, value);
        case "Void":
          return yield* FromVoid(schema_, references_, path, value);
        default:
          if (!index_3.TypeRegistry.Has(schema_[index_7.Kind]))
            throw new ValueErrorsUnknownTypeError(schema);
          return yield* FromKind(schema_, references_, path, value);
      }
    }
    function Errors(...args) {
      const iterator = args.length === 3 ? Visit(args[0], args[1], "", args[2]) : Visit(args[0], [], "", args[1]);
      return new ValueErrorIterator(iterator);
    }
    exports.Errors = Errors;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/errors/index.js
var require_errors2 = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/errors/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SetErrorFunction = exports.GetErrorFunction = exports.DefaultErrorFunction = exports.ValueErrorsUnknownTypeError = exports.ValueErrorType = exports.ValueErrorIterator = exports.Errors = void 0;
    var errors_1 = require_errors();
    Object.defineProperty(exports, "Errors", { enumerable: true, get: function() {
      return errors_1.Errors;
    } });
    Object.defineProperty(exports, "ValueErrorIterator", { enumerable: true, get: function() {
      return errors_1.ValueErrorIterator;
    } });
    Object.defineProperty(exports, "ValueErrorType", { enumerable: true, get: function() {
      return errors_1.ValueErrorType;
    } });
    Object.defineProperty(exports, "ValueErrorsUnknownTypeError", { enumerable: true, get: function() {
      return errors_1.ValueErrorsUnknownTypeError;
    } });
    var function_1 = require_function3();
    Object.defineProperty(exports, "DefaultErrorFunction", { enumerable: true, get: function() {
      return function_1.DefaultErrorFunction;
    } });
    Object.defineProperty(exports, "GetErrorFunction", { enumerable: true, get: function() {
      return function_1.GetErrorFunction;
    } });
    Object.defineProperty(exports, "SetErrorFunction", { enumerable: true, get: function() {
      return function_1.SetErrorFunction;
    } });
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/any/any.js
var require_any = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/any/any.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Any = void 0;
    var index_1 = require_symbols2();
    function Any(options = {}) {
      return { ...options, [index_1.Kind]: "Any" };
    }
    exports.Any = Any;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/any/index.js
var require_any2 = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/any/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_any(), exports);
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/unknown/unknown.js
var require_unknown = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/unknown/unknown.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Unknown = void 0;
    var index_1 = require_symbols2();
    function Unknown(options = {}) {
      return {
        ...options,
        [index_1.Kind]: "Unknown"
      };
    }
    exports.Unknown = Unknown;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/unknown/index.js
var require_unknown2 = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/unknown/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_unknown(), exports);
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/guard/index.js
var require_guard3 = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/guard/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ValueGuard = exports.TypeGuard = void 0;
    exports.TypeGuard = require_type3();
    exports.ValueGuard = require_value();
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/extends/extends-check.js
var require_extends_check = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/extends/extends-check.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ExtendsCheck = exports.ExtendsResult = exports.ExtendsResolverError = void 0;
    var index_1 = require_any2();
    var index_2 = require_function2();
    var index_3 = require_number2();
    var index_4 = require_string2();
    var index_5 = require_unknown2();
    var index_6 = require_template_literal2();
    var index_7 = require_patterns2();
    var index_8 = require_symbols2();
    var index_9 = require_error2();
    var index_10 = require_guard3();
    var ExtendsResolverError = class extends index_9.TypeBoxError {
    };
    exports.ExtendsResolverError = ExtendsResolverError;
    var ExtendsResult;
    (function(ExtendsResult2) {
      ExtendsResult2[ExtendsResult2["Union"] = 0] = "Union";
      ExtendsResult2[ExtendsResult2["True"] = 1] = "True";
      ExtendsResult2[ExtendsResult2["False"] = 2] = "False";
    })(ExtendsResult || (exports.ExtendsResult = ExtendsResult = {}));
    function IntoBooleanResult(result) {
      return result === ExtendsResult.False ? result : ExtendsResult.True;
    }
    function Throw(message) {
      throw new ExtendsResolverError(message);
    }
    function IsStructuralRight(right) {
      return index_10.TypeGuard.IsNever(right) || index_10.TypeGuard.IsIntersect(right) || index_10.TypeGuard.IsUnion(right) || index_10.TypeGuard.IsUnknown(right) || index_10.TypeGuard.IsAny(right);
    }
    function StructuralRight(left, right) {
      return index_10.TypeGuard.IsNever(right) ? FromNeverRight(left, right) : index_10.TypeGuard.IsIntersect(right) ? FromIntersectRight(left, right) : index_10.TypeGuard.IsUnion(right) ? FromUnionRight(left, right) : index_10.TypeGuard.IsUnknown(right) ? FromUnknownRight(left, right) : index_10.TypeGuard.IsAny(right) ? FromAnyRight(left, right) : Throw("StructuralRight");
    }
    function FromAnyRight(left, right) {
      return ExtendsResult.True;
    }
    function FromAny(left, right) {
      return index_10.TypeGuard.IsIntersect(right) ? FromIntersectRight(left, right) : index_10.TypeGuard.IsUnion(right) && right.anyOf.some((schema) => index_10.TypeGuard.IsAny(schema) || index_10.TypeGuard.IsUnknown(schema)) ? ExtendsResult.True : index_10.TypeGuard.IsUnion(right) ? ExtendsResult.Union : index_10.TypeGuard.IsUnknown(right) ? ExtendsResult.True : index_10.TypeGuard.IsAny(right) ? ExtendsResult.True : ExtendsResult.Union;
    }
    function FromArrayRight(left, right) {
      return index_10.TypeGuard.IsUnknown(left) ? ExtendsResult.False : index_10.TypeGuard.IsAny(left) ? ExtendsResult.Union : index_10.TypeGuard.IsNever(left) ? ExtendsResult.True : ExtendsResult.False;
    }
    function FromArray(left, right) {
      return index_10.TypeGuard.IsObject(right) && IsObjectArrayLike(right) ? ExtendsResult.True : IsStructuralRight(right) ? StructuralRight(left, right) : !index_10.TypeGuard.IsArray(right) ? ExtendsResult.False : IntoBooleanResult(Visit(left.items, right.items));
    }
    function FromAsyncIterator(left, right) {
      return IsStructuralRight(right) ? StructuralRight(left, right) : !index_10.TypeGuard.IsAsyncIterator(right) ? ExtendsResult.False : IntoBooleanResult(Visit(left.items, right.items));
    }
    function FromBigInt(left, right) {
      return IsStructuralRight(right) ? StructuralRight(left, right) : index_10.TypeGuard.IsObject(right) ? FromObjectRight(left, right) : index_10.TypeGuard.IsRecord(right) ? FromRecordRight(left, right) : index_10.TypeGuard.IsBigInt(right) ? ExtendsResult.True : ExtendsResult.False;
    }
    function FromBooleanRight(left, right) {
      return index_10.TypeGuard.IsLiteralBoolean(left) ? ExtendsResult.True : index_10.TypeGuard.IsBoolean(left) ? ExtendsResult.True : ExtendsResult.False;
    }
    function FromBoolean(left, right) {
      return IsStructuralRight(right) ? StructuralRight(left, right) : index_10.TypeGuard.IsObject(right) ? FromObjectRight(left, right) : index_10.TypeGuard.IsRecord(right) ? FromRecordRight(left, right) : index_10.TypeGuard.IsBoolean(right) ? ExtendsResult.True : ExtendsResult.False;
    }
    function FromConstructor(left, right) {
      return IsStructuralRight(right) ? StructuralRight(left, right) : index_10.TypeGuard.IsObject(right) ? FromObjectRight(left, right) : !index_10.TypeGuard.IsConstructor(right) ? ExtendsResult.False : left.parameters.length > right.parameters.length ? ExtendsResult.False : !left.parameters.every((schema, index) => IntoBooleanResult(Visit(right.parameters[index], schema)) === ExtendsResult.True) ? ExtendsResult.False : IntoBooleanResult(Visit(left.returns, right.returns));
    }
    function FromDate(left, right) {
      return IsStructuralRight(right) ? StructuralRight(left, right) : index_10.TypeGuard.IsObject(right) ? FromObjectRight(left, right) : index_10.TypeGuard.IsRecord(right) ? FromRecordRight(left, right) : index_10.TypeGuard.IsDate(right) ? ExtendsResult.True : ExtendsResult.False;
    }
    function FromFunction(left, right) {
      return IsStructuralRight(right) ? StructuralRight(left, right) : index_10.TypeGuard.IsObject(right) ? FromObjectRight(left, right) : !index_10.TypeGuard.IsFunction(right) ? ExtendsResult.False : left.parameters.length > right.parameters.length ? ExtendsResult.False : !left.parameters.every((schema, index) => IntoBooleanResult(Visit(right.parameters[index], schema)) === ExtendsResult.True) ? ExtendsResult.False : IntoBooleanResult(Visit(left.returns, right.returns));
    }
    function FromIntegerRight(left, right) {
      return index_10.TypeGuard.IsLiteral(left) && index_10.ValueGuard.IsNumber(left.const) ? ExtendsResult.True : index_10.TypeGuard.IsNumber(left) || index_10.TypeGuard.IsInteger(left) ? ExtendsResult.True : ExtendsResult.False;
    }
    function FromInteger(left, right) {
      return index_10.TypeGuard.IsInteger(right) || index_10.TypeGuard.IsNumber(right) ? ExtendsResult.True : IsStructuralRight(right) ? StructuralRight(left, right) : index_10.TypeGuard.IsObject(right) ? FromObjectRight(left, right) : index_10.TypeGuard.IsRecord(right) ? FromRecordRight(left, right) : ExtendsResult.False;
    }
    function FromIntersectRight(left, right) {
      return right.allOf.every((schema) => Visit(left, schema) === ExtendsResult.True) ? ExtendsResult.True : ExtendsResult.False;
    }
    function FromIntersect(left, right) {
      return left.allOf.some((schema) => Visit(schema, right) === ExtendsResult.True) ? ExtendsResult.True : ExtendsResult.False;
    }
    function FromIterator(left, right) {
      return IsStructuralRight(right) ? StructuralRight(left, right) : !index_10.TypeGuard.IsIterator(right) ? ExtendsResult.False : IntoBooleanResult(Visit(left.items, right.items));
    }
    function FromLiteral(left, right) {
      return index_10.TypeGuard.IsLiteral(right) && right.const === left.const ? ExtendsResult.True : IsStructuralRight(right) ? StructuralRight(left, right) : index_10.TypeGuard.IsObject(right) ? FromObjectRight(left, right) : index_10.TypeGuard.IsRecord(right) ? FromRecordRight(left, right) : index_10.TypeGuard.IsString(right) ? FromStringRight(left, right) : index_10.TypeGuard.IsNumber(right) ? FromNumberRight(left, right) : index_10.TypeGuard.IsInteger(right) ? FromIntegerRight(left, right) : index_10.TypeGuard.IsBoolean(right) ? FromBooleanRight(left, right) : ExtendsResult.False;
    }
    function FromNeverRight(left, right) {
      return ExtendsResult.False;
    }
    function FromNever(left, right) {
      return ExtendsResult.True;
    }
    function UnwrapTNot(schema) {
      let [current, depth] = [schema, 0];
      while (true) {
        if (!index_10.TypeGuard.IsNot(current))
          break;
        current = current.not;
        depth += 1;
      }
      return depth % 2 === 0 ? current : (0, index_5.Unknown)();
    }
    function FromNot(left, right) {
      return index_10.TypeGuard.IsNot(left) ? Visit(UnwrapTNot(left), right) : index_10.TypeGuard.IsNot(right) ? Visit(left, UnwrapTNot(right)) : Throw("Invalid fallthrough for Not");
    }
    function FromNull(left, right) {
      return IsStructuralRight(right) ? StructuralRight(left, right) : index_10.TypeGuard.IsObject(right) ? FromObjectRight(left, right) : index_10.TypeGuard.IsRecord(right) ? FromRecordRight(left, right) : index_10.TypeGuard.IsNull(right) ? ExtendsResult.True : ExtendsResult.False;
    }
    function FromNumberRight(left, right) {
      return index_10.TypeGuard.IsLiteralNumber(left) ? ExtendsResult.True : index_10.TypeGuard.IsNumber(left) || index_10.TypeGuard.IsInteger(left) ? ExtendsResult.True : ExtendsResult.False;
    }
    function FromNumber(left, right) {
      return IsStructuralRight(right) ? StructuralRight(left, right) : index_10.TypeGuard.IsObject(right) ? FromObjectRight(left, right) : index_10.TypeGuard.IsRecord(right) ? FromRecordRight(left, right) : index_10.TypeGuard.IsInteger(right) || index_10.TypeGuard.IsNumber(right) ? ExtendsResult.True : ExtendsResult.False;
    }
    function IsObjectPropertyCount(schema, count) {
      return Object.getOwnPropertyNames(schema.properties).length === count;
    }
    function IsObjectStringLike(schema) {
      return IsObjectArrayLike(schema);
    }
    function IsObjectSymbolLike(schema) {
      return IsObjectPropertyCount(schema, 0) || IsObjectPropertyCount(schema, 1) && "description" in schema.properties && index_10.TypeGuard.IsUnion(schema.properties.description) && schema.properties.description.anyOf.length === 2 && (index_10.TypeGuard.IsString(schema.properties.description.anyOf[0]) && index_10.TypeGuard.IsUndefined(schema.properties.description.anyOf[1]) || index_10.TypeGuard.IsString(schema.properties.description.anyOf[1]) && index_10.TypeGuard.IsUndefined(schema.properties.description.anyOf[0]));
    }
    function IsObjectNumberLike(schema) {
      return IsObjectPropertyCount(schema, 0);
    }
    function IsObjectBooleanLike(schema) {
      return IsObjectPropertyCount(schema, 0);
    }
    function IsObjectBigIntLike(schema) {
      return IsObjectPropertyCount(schema, 0);
    }
    function IsObjectDateLike(schema) {
      return IsObjectPropertyCount(schema, 0);
    }
    function IsObjectUint8ArrayLike(schema) {
      return IsObjectArrayLike(schema);
    }
    function IsObjectFunctionLike(schema) {
      const length = (0, index_3.Number)();
      return IsObjectPropertyCount(schema, 0) || IsObjectPropertyCount(schema, 1) && "length" in schema.properties && IntoBooleanResult(Visit(schema.properties["length"], length)) === ExtendsResult.True;
    }
    function IsObjectConstructorLike(schema) {
      return IsObjectPropertyCount(schema, 0);
    }
    function IsObjectArrayLike(schema) {
      const length = (0, index_3.Number)();
      return IsObjectPropertyCount(schema, 0) || IsObjectPropertyCount(schema, 1) && "length" in schema.properties && IntoBooleanResult(Visit(schema.properties["length"], length)) === ExtendsResult.True;
    }
    function IsObjectPromiseLike(schema) {
      const then = (0, index_2.Function)([(0, index_1.Any)()], (0, index_1.Any)());
      return IsObjectPropertyCount(schema, 0) || IsObjectPropertyCount(schema, 1) && "then" in schema.properties && IntoBooleanResult(Visit(schema.properties["then"], then)) === ExtendsResult.True;
    }
    function Property(left, right) {
      return Visit(left, right) === ExtendsResult.False ? ExtendsResult.False : index_10.TypeGuard.IsOptional(left) && !index_10.TypeGuard.IsOptional(right) ? ExtendsResult.False : ExtendsResult.True;
    }
    function FromObjectRight(left, right) {
      return index_10.TypeGuard.IsUnknown(left) ? ExtendsResult.False : index_10.TypeGuard.IsAny(left) ? ExtendsResult.Union : index_10.TypeGuard.IsNever(left) || index_10.TypeGuard.IsLiteralString(left) && IsObjectStringLike(right) || index_10.TypeGuard.IsLiteralNumber(left) && IsObjectNumberLike(right) || index_10.TypeGuard.IsLiteralBoolean(left) && IsObjectBooleanLike(right) || index_10.TypeGuard.IsSymbol(left) && IsObjectSymbolLike(right) || index_10.TypeGuard.IsBigInt(left) && IsObjectBigIntLike(right) || index_10.TypeGuard.IsString(left) && IsObjectStringLike(right) || index_10.TypeGuard.IsSymbol(left) && IsObjectSymbolLike(right) || index_10.TypeGuard.IsNumber(left) && IsObjectNumberLike(right) || index_10.TypeGuard.IsInteger(left) && IsObjectNumberLike(right) || index_10.TypeGuard.IsBoolean(left) && IsObjectBooleanLike(right) || index_10.TypeGuard.IsUint8Array(left) && IsObjectUint8ArrayLike(right) || index_10.TypeGuard.IsDate(left) && IsObjectDateLike(right) || index_10.TypeGuard.IsConstructor(left) && IsObjectConstructorLike(right) || index_10.TypeGuard.IsFunction(left) && IsObjectFunctionLike(right) ? ExtendsResult.True : index_10.TypeGuard.IsRecord(left) && index_10.TypeGuard.IsString(RecordKey(left)) ? (() => {
        return right[index_8.Hint] === "Record" ? ExtendsResult.True : ExtendsResult.False;
      })() : index_10.TypeGuard.IsRecord(left) && index_10.TypeGuard.IsNumber(RecordKey(left)) ? (() => {
        return IsObjectPropertyCount(right, 0) ? ExtendsResult.True : ExtendsResult.False;
      })() : ExtendsResult.False;
    }
    function FromObject(left, right) {
      return IsStructuralRight(right) ? StructuralRight(left, right) : index_10.TypeGuard.IsRecord(right) ? FromRecordRight(left, right) : !index_10.TypeGuard.IsObject(right) ? ExtendsResult.False : (() => {
        for (const key of Object.getOwnPropertyNames(right.properties)) {
          if (!(key in left.properties) && !index_10.TypeGuard.IsOptional(right.properties[key])) {
            return ExtendsResult.False;
          }
          if (index_10.TypeGuard.IsOptional(right.properties[key])) {
            return ExtendsResult.True;
          }
          if (Property(left.properties[key], right.properties[key]) === ExtendsResult.False) {
            return ExtendsResult.False;
          }
        }
        return ExtendsResult.True;
      })();
    }
    function FromPromise(left, right) {
      return IsStructuralRight(right) ? StructuralRight(left, right) : index_10.TypeGuard.IsObject(right) && IsObjectPromiseLike(right) ? ExtendsResult.True : !index_10.TypeGuard.IsPromise(right) ? ExtendsResult.False : IntoBooleanResult(Visit(left.item, right.item));
    }
    function RecordKey(schema) {
      return index_7.PatternNumberExact in schema.patternProperties ? (0, index_3.Number)() : index_7.PatternStringExact in schema.patternProperties ? (0, index_4.String)() : Throw("Unknown record key pattern");
    }
    function RecordValue(schema) {
      return index_7.PatternNumberExact in schema.patternProperties ? schema.patternProperties[index_7.PatternNumberExact] : index_7.PatternStringExact in schema.patternProperties ? schema.patternProperties[index_7.PatternStringExact] : Throw("Unable to get record value schema");
    }
    function FromRecordRight(left, right) {
      const [Key, Value] = [RecordKey(right), RecordValue(right)];
      return index_10.TypeGuard.IsLiteralString(left) && index_10.TypeGuard.IsNumber(Key) && IntoBooleanResult(Visit(left, Value)) === ExtendsResult.True ? ExtendsResult.True : index_10.TypeGuard.IsUint8Array(left) && index_10.TypeGuard.IsNumber(Key) ? Visit(left, Value) : index_10.TypeGuard.IsString(left) && index_10.TypeGuard.IsNumber(Key) ? Visit(left, Value) : index_10.TypeGuard.IsArray(left) && index_10.TypeGuard.IsNumber(Key) ? Visit(left, Value) : index_10.TypeGuard.IsObject(left) ? (() => {
        for (const key of Object.getOwnPropertyNames(left.properties)) {
          if (Property(Value, left.properties[key]) === ExtendsResult.False) {
            return ExtendsResult.False;
          }
        }
        return ExtendsResult.True;
      })() : ExtendsResult.False;
    }
    function FromRecord(left, right) {
      return IsStructuralRight(right) ? StructuralRight(left, right) : index_10.TypeGuard.IsObject(right) ? FromObjectRight(left, right) : !index_10.TypeGuard.IsRecord(right) ? ExtendsResult.False : Visit(RecordValue(left), RecordValue(right));
    }
    function FromRegExp(left, right) {
      const L = index_10.TypeGuard.IsRegExp(left) ? (0, index_4.String)() : left;
      const R = index_10.TypeGuard.IsRegExp(right) ? (0, index_4.String)() : right;
      return Visit(L, R);
    }
    function FromStringRight(left, right) {
      return index_10.TypeGuard.IsLiteral(left) && index_10.ValueGuard.IsString(left.const) ? ExtendsResult.True : index_10.TypeGuard.IsString(left) ? ExtendsResult.True : ExtendsResult.False;
    }
    function FromString(left, right) {
      return IsStructuralRight(right) ? StructuralRight(left, right) : index_10.TypeGuard.IsObject(right) ? FromObjectRight(left, right) : index_10.TypeGuard.IsRecord(right) ? FromRecordRight(left, right) : index_10.TypeGuard.IsString(right) ? ExtendsResult.True : ExtendsResult.False;
    }
    function FromSymbol(left, right) {
      return IsStructuralRight(right) ? StructuralRight(left, right) : index_10.TypeGuard.IsObject(right) ? FromObjectRight(left, right) : index_10.TypeGuard.IsRecord(right) ? FromRecordRight(left, right) : index_10.TypeGuard.IsSymbol(right) ? ExtendsResult.True : ExtendsResult.False;
    }
    function FromTemplateLiteral(left, right) {
      return index_10.TypeGuard.IsTemplateLiteral(left) ? Visit((0, index_6.TemplateLiteralToUnion)(left), right) : index_10.TypeGuard.IsTemplateLiteral(right) ? Visit(left, (0, index_6.TemplateLiteralToUnion)(right)) : Throw("Invalid fallthrough for TemplateLiteral");
    }
    function IsArrayOfTuple(left, right) {
      return index_10.TypeGuard.IsArray(right) && left.items !== void 0 && left.items.every((schema) => Visit(schema, right.items) === ExtendsResult.True);
    }
    function FromTupleRight(left, right) {
      return index_10.TypeGuard.IsNever(left) ? ExtendsResult.True : index_10.TypeGuard.IsUnknown(left) ? ExtendsResult.False : index_10.TypeGuard.IsAny(left) ? ExtendsResult.Union : ExtendsResult.False;
    }
    function FromTuple(left, right) {
      return IsStructuralRight(right) ? StructuralRight(left, right) : index_10.TypeGuard.IsObject(right) && IsObjectArrayLike(right) ? ExtendsResult.True : index_10.TypeGuard.IsArray(right) && IsArrayOfTuple(left, right) ? ExtendsResult.True : !index_10.TypeGuard.IsTuple(right) ? ExtendsResult.False : index_10.ValueGuard.IsUndefined(left.items) && !index_10.ValueGuard.IsUndefined(right.items) || !index_10.ValueGuard.IsUndefined(left.items) && index_10.ValueGuard.IsUndefined(right.items) ? ExtendsResult.False : index_10.ValueGuard.IsUndefined(left.items) && !index_10.ValueGuard.IsUndefined(right.items) ? ExtendsResult.True : left.items.every((schema, index) => Visit(schema, right.items[index]) === ExtendsResult.True) ? ExtendsResult.True : ExtendsResult.False;
    }
    function FromUint8Array(left, right) {
      return IsStructuralRight(right) ? StructuralRight(left, right) : index_10.TypeGuard.IsObject(right) ? FromObjectRight(left, right) : index_10.TypeGuard.IsRecord(right) ? FromRecordRight(left, right) : index_10.TypeGuard.IsUint8Array(right) ? ExtendsResult.True : ExtendsResult.False;
    }
    function FromUndefined(left, right) {
      return IsStructuralRight(right) ? StructuralRight(left, right) : index_10.TypeGuard.IsObject(right) ? FromObjectRight(left, right) : index_10.TypeGuard.IsRecord(right) ? FromRecordRight(left, right) : index_10.TypeGuard.IsVoid(right) ? FromVoidRight(left, right) : index_10.TypeGuard.IsUndefined(right) ? ExtendsResult.True : ExtendsResult.False;
    }
    function FromUnionRight(left, right) {
      return right.anyOf.some((schema) => Visit(left, schema) === ExtendsResult.True) ? ExtendsResult.True : ExtendsResult.False;
    }
    function FromUnion(left, right) {
      return left.anyOf.every((schema) => Visit(schema, right) === ExtendsResult.True) ? ExtendsResult.True : ExtendsResult.False;
    }
    function FromUnknownRight(left, right) {
      return ExtendsResult.True;
    }
    function FromUnknown(left, right) {
      return index_10.TypeGuard.IsNever(right) ? FromNeverRight(left, right) : index_10.TypeGuard.IsIntersect(right) ? FromIntersectRight(left, right) : index_10.TypeGuard.IsUnion(right) ? FromUnionRight(left, right) : index_10.TypeGuard.IsAny(right) ? FromAnyRight(left, right) : index_10.TypeGuard.IsString(right) ? FromStringRight(left, right) : index_10.TypeGuard.IsNumber(right) ? FromNumberRight(left, right) : index_10.TypeGuard.IsInteger(right) ? FromIntegerRight(left, right) : index_10.TypeGuard.IsBoolean(right) ? FromBooleanRight(left, right) : index_10.TypeGuard.IsArray(right) ? FromArrayRight(left, right) : index_10.TypeGuard.IsTuple(right) ? FromTupleRight(left, right) : index_10.TypeGuard.IsObject(right) ? FromObjectRight(left, right) : index_10.TypeGuard.IsUnknown(right) ? ExtendsResult.True : ExtendsResult.False;
    }
    function FromVoidRight(left, right) {
      return index_10.TypeGuard.IsUndefined(left) ? ExtendsResult.True : index_10.TypeGuard.IsUndefined(left) ? ExtendsResult.True : ExtendsResult.False;
    }
    function FromVoid(left, right) {
      return index_10.TypeGuard.IsIntersect(right) ? FromIntersectRight(left, right) : index_10.TypeGuard.IsUnion(right) ? FromUnionRight(left, right) : index_10.TypeGuard.IsUnknown(right) ? FromUnknownRight(left, right) : index_10.TypeGuard.IsAny(right) ? FromAnyRight(left, right) : index_10.TypeGuard.IsObject(right) ? FromObjectRight(left, right) : index_10.TypeGuard.IsVoid(right) ? ExtendsResult.True : ExtendsResult.False;
    }
    function Visit(left, right) {
      return (
        // resolvable
        index_10.TypeGuard.IsTemplateLiteral(left) || index_10.TypeGuard.IsTemplateLiteral(right) ? FromTemplateLiteral(left, right) : index_10.TypeGuard.IsRegExp(left) || index_10.TypeGuard.IsRegExp(right) ? FromRegExp(left, right) : index_10.TypeGuard.IsNot(left) || index_10.TypeGuard.IsNot(right) ? FromNot(left, right) : (
          // standard
          index_10.TypeGuard.IsAny(left) ? FromAny(left, right) : index_10.TypeGuard.IsArray(left) ? FromArray(left, right) : index_10.TypeGuard.IsBigInt(left) ? FromBigInt(left, right) : index_10.TypeGuard.IsBoolean(left) ? FromBoolean(left, right) : index_10.TypeGuard.IsAsyncIterator(left) ? FromAsyncIterator(left, right) : index_10.TypeGuard.IsConstructor(left) ? FromConstructor(left, right) : index_10.TypeGuard.IsDate(left) ? FromDate(left, right) : index_10.TypeGuard.IsFunction(left) ? FromFunction(left, right) : index_10.TypeGuard.IsInteger(left) ? FromInteger(left, right) : index_10.TypeGuard.IsIntersect(left) ? FromIntersect(left, right) : index_10.TypeGuard.IsIterator(left) ? FromIterator(left, right) : index_10.TypeGuard.IsLiteral(left) ? FromLiteral(left, right) : index_10.TypeGuard.IsNever(left) ? FromNever(left, right) : index_10.TypeGuard.IsNull(left) ? FromNull(left, right) : index_10.TypeGuard.IsNumber(left) ? FromNumber(left, right) : index_10.TypeGuard.IsObject(left) ? FromObject(left, right) : index_10.TypeGuard.IsRecord(left) ? FromRecord(left, right) : index_10.TypeGuard.IsString(left) ? FromString(left, right) : index_10.TypeGuard.IsSymbol(left) ? FromSymbol(left, right) : index_10.TypeGuard.IsTuple(left) ? FromTuple(left, right) : index_10.TypeGuard.IsPromise(left) ? FromPromise(left, right) : index_10.TypeGuard.IsUint8Array(left) ? FromUint8Array(left, right) : index_10.TypeGuard.IsUndefined(left) ? FromUndefined(left, right) : index_10.TypeGuard.IsUnion(left) ? FromUnion(left, right) : index_10.TypeGuard.IsUnknown(left) ? FromUnknown(left, right) : index_10.TypeGuard.IsVoid(left) ? FromVoid(left, right) : Throw(`Unknown left type operand '${left[index_8.Kind]}'`)
        )
      );
    }
    function ExtendsCheck(left, right) {
      return Visit(left, right);
    }
    exports.ExtendsCheck = ExtendsCheck;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/extends/extends-from-mapped-result.js
var require_extends_from_mapped_result = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/extends/extends-from-mapped-result.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ExtendsFromMappedResult = void 0;
    var index_1 = require_mapped2();
    var extends_1 = require_extends();
    function FromProperties(P, Right, True, False, options) {
      return globalThis.Object.getOwnPropertyNames(P).reduce((Acc, K2) => {
        return { ...Acc, [K2]: (0, extends_1.Extends)(P[K2], Right, True, False, options) };
      }, {});
    }
    function FromMappedResult(Left, Right, True, False, options) {
      return FromProperties(Left.properties, Right, True, False, options);
    }
    function ExtendsFromMappedResult(Left, Right, True, False, options) {
      const P = FromMappedResult(Left, Right, True, False, options);
      return (0, index_1.MappedResult)(P);
    }
    exports.ExtendsFromMappedResult = ExtendsFromMappedResult;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/extends/extends.js
var require_extends = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/extends/extends.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Extends = void 0;
    var index_1 = require_union2();
    var extends_check_1 = require_extends_check();
    var type_1 = require_type2();
    var extends_from_mapped_key_1 = require_extends_from_mapped_key();
    var extends_from_mapped_result_1 = require_extends_from_mapped_result();
    var type_2 = require_type3();
    function ExtendsResolve(left, right, trueType, falseType) {
      const R = (0, extends_check_1.ExtendsCheck)(left, right);
      return R === extends_check_1.ExtendsResult.Union ? (0, index_1.Union)([trueType, falseType]) : R === extends_check_1.ExtendsResult.True ? trueType : falseType;
    }
    function Extends(L, R, T, F, options = {}) {
      return (0, type_2.IsMappedResult)(L) ? (0, extends_from_mapped_result_1.ExtendsFromMappedResult)(L, R, T, F, options) : (0, type_2.IsMappedKey)(L) ? (0, type_1.CloneType)((0, extends_from_mapped_key_1.ExtendsFromMappedKey)(L, R, T, F, options)) : (0, type_1.CloneType)(ExtendsResolve(L, R, T, F), options);
    }
    exports.Extends = Extends;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/extends/extends-from-mapped-key.js
var require_extends_from_mapped_key = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/extends/extends-from-mapped-key.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ExtendsFromMappedKey = void 0;
    var index_1 = require_mapped2();
    var index_2 = require_literal2();
    var extends_1 = require_extends();
    function FromPropertyKey(K, U, L, R, options) {
      return {
        [K]: (0, extends_1.Extends)((0, index_2.Literal)(K), U, L, R, options)
      };
    }
    function FromPropertyKeys(K, U, L, R, options) {
      return K.reduce((Acc, LK) => {
        return { ...Acc, ...FromPropertyKey(LK, U, L, R, options) };
      }, {});
    }
    function FromMappedKey(K, U, L, R, options) {
      return FromPropertyKeys(K.keys, U, L, R, options);
    }
    function ExtendsFromMappedKey(T, U, L, R, options) {
      const P = FromMappedKey(T, U, L, R, options);
      return (0, index_1.MappedResult)(P);
    }
    exports.ExtendsFromMappedKey = ExtendsFromMappedKey;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/extends/index.js
var require_extends2 = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/extends/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_extends_check(), exports);
    __exportStar(require_extends_from_mapped_key(), exports);
    __exportStar(require_extends_from_mapped_result(), exports);
    __exportStar(require_extends_undefined(), exports);
    __exportStar(require_extends(), exports);
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/value/check/check.js
var require_check = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/value/check/check.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Check = exports.ValueCheckUnknownTypeError = void 0;
    var index_1 = require_system2();
    var index_2 = require_deref2();
    var index_3 = require_hash2();
    var index_4 = require_symbols2();
    var index_5 = require_keyof2();
    var index_6 = require_extends2();
    var index_7 = require_registry();
    var index_8 = require_error2();
    var index_9 = require_never2();
    var index_10 = require_guard2();
    var type_1 = require_type3();
    var ValueCheckUnknownTypeError = class extends index_8.TypeBoxError {
      constructor(schema) {
        super(`Unknown type`);
        this.schema = schema;
      }
    };
    exports.ValueCheckUnknownTypeError = ValueCheckUnknownTypeError;
    function IsAnyOrUnknown(schema) {
      return schema[index_4.Kind] === "Any" || schema[index_4.Kind] === "Unknown";
    }
    function IsDefined(value) {
      return value !== void 0;
    }
    function FromAny(schema, references, value) {
      return true;
    }
    function FromArray(schema, references, value) {
      if (!(0, index_10.IsArray)(value))
        return false;
      if (IsDefined(schema.minItems) && !(value.length >= schema.minItems)) {
        return false;
      }
      if (IsDefined(schema.maxItems) && !(value.length <= schema.maxItems)) {
        return false;
      }
      if (!value.every((value2) => Visit(schema.items, references, value2))) {
        return false;
      }
      if (schema.uniqueItems === true && !function() {
        const set = /* @__PURE__ */ new Set();
        for (const element of value) {
          const hashed = (0, index_3.Hash)(element);
          if (set.has(hashed)) {
            return false;
          } else {
            set.add(hashed);
          }
        }
        return true;
      }()) {
        return false;
      }
      if (!(IsDefined(schema.contains) || (0, index_10.IsNumber)(schema.minContains) || (0, index_10.IsNumber)(schema.maxContains))) {
        return true;
      }
      const containsSchema = IsDefined(schema.contains) ? schema.contains : (0, index_9.Never)();
      const containsCount = value.reduce((acc, value2) => Visit(containsSchema, references, value2) ? acc + 1 : acc, 0);
      if (containsCount === 0) {
        return false;
      }
      if ((0, index_10.IsNumber)(schema.minContains) && containsCount < schema.minContains) {
        return false;
      }
      if ((0, index_10.IsNumber)(schema.maxContains) && containsCount > schema.maxContains) {
        return false;
      }
      return true;
    }
    function FromAsyncIterator(schema, references, value) {
      return (0, index_10.IsAsyncIterator)(value);
    }
    function FromBigInt(schema, references, value) {
      if (!(0, index_10.IsBigInt)(value))
        return false;
      if (IsDefined(schema.exclusiveMaximum) && !(value < schema.exclusiveMaximum)) {
        return false;
      }
      if (IsDefined(schema.exclusiveMinimum) && !(value > schema.exclusiveMinimum)) {
        return false;
      }
      if (IsDefined(schema.maximum) && !(value <= schema.maximum)) {
        return false;
      }
      if (IsDefined(schema.minimum) && !(value >= schema.minimum)) {
        return false;
      }
      if (IsDefined(schema.multipleOf) && !(value % schema.multipleOf === BigInt(0))) {
        return false;
      }
      return true;
    }
    function FromBoolean(schema, references, value) {
      return (0, index_10.IsBoolean)(value);
    }
    function FromConstructor(schema, references, value) {
      return Visit(schema.returns, references, value.prototype);
    }
    function FromDate(schema, references, value) {
      if (!(0, index_10.IsDate)(value))
        return false;
      if (IsDefined(schema.exclusiveMaximumTimestamp) && !(value.getTime() < schema.exclusiveMaximumTimestamp)) {
        return false;
      }
      if (IsDefined(schema.exclusiveMinimumTimestamp) && !(value.getTime() > schema.exclusiveMinimumTimestamp)) {
        return false;
      }
      if (IsDefined(schema.maximumTimestamp) && !(value.getTime() <= schema.maximumTimestamp)) {
        return false;
      }
      if (IsDefined(schema.minimumTimestamp) && !(value.getTime() >= schema.minimumTimestamp)) {
        return false;
      }
      if (IsDefined(schema.multipleOfTimestamp) && !(value.getTime() % schema.multipleOfTimestamp === 0)) {
        return false;
      }
      return true;
    }
    function FromFunction(schema, references, value) {
      return (0, index_10.IsFunction)(value);
    }
    function FromInteger(schema, references, value) {
      if (!(0, index_10.IsInteger)(value)) {
        return false;
      }
      if (IsDefined(schema.exclusiveMaximum) && !(value < schema.exclusiveMaximum)) {
        return false;
      }
      if (IsDefined(schema.exclusiveMinimum) && !(value > schema.exclusiveMinimum)) {
        return false;
      }
      if (IsDefined(schema.maximum) && !(value <= schema.maximum)) {
        return false;
      }
      if (IsDefined(schema.minimum) && !(value >= schema.minimum)) {
        return false;
      }
      if (IsDefined(schema.multipleOf) && !(value % schema.multipleOf === 0)) {
        return false;
      }
      return true;
    }
    function FromIntersect(schema, references, value) {
      const check1 = schema.allOf.every((schema2) => Visit(schema2, references, value));
      if (schema.unevaluatedProperties === false) {
        const keyPattern = new RegExp((0, index_5.KeyOfPattern)(schema));
        const check2 = Object.getOwnPropertyNames(value).every((key) => keyPattern.test(key));
        return check1 && check2;
      } else if ((0, type_1.IsSchema)(schema.unevaluatedProperties)) {
        const keyCheck = new RegExp((0, index_5.KeyOfPattern)(schema));
        const check2 = Object.getOwnPropertyNames(value).every((key) => keyCheck.test(key) || Visit(schema.unevaluatedProperties, references, value[key]));
        return check1 && check2;
      } else {
        return check1;
      }
    }
    function FromIterator(schema, references, value) {
      return (0, index_10.IsIterator)(value);
    }
    function FromLiteral(schema, references, value) {
      return value === schema.const;
    }
    function FromNever(schema, references, value) {
      return false;
    }
    function FromNot(schema, references, value) {
      return !Visit(schema.not, references, value);
    }
    function FromNull(schema, references, value) {
      return (0, index_10.IsNull)(value);
    }
    function FromNumber(schema, references, value) {
      if (!index_1.TypeSystemPolicy.IsNumberLike(value))
        return false;
      if (IsDefined(schema.exclusiveMaximum) && !(value < schema.exclusiveMaximum)) {
        return false;
      }
      if (IsDefined(schema.exclusiveMinimum) && !(value > schema.exclusiveMinimum)) {
        return false;
      }
      if (IsDefined(schema.minimum) && !(value >= schema.minimum)) {
        return false;
      }
      if (IsDefined(schema.maximum) && !(value <= schema.maximum)) {
        return false;
      }
      if (IsDefined(schema.multipleOf) && !(value % schema.multipleOf === 0)) {
        return false;
      }
      return true;
    }
    function FromObject(schema, references, value) {
      if (!index_1.TypeSystemPolicy.IsObjectLike(value))
        return false;
      if (IsDefined(schema.minProperties) && !(Object.getOwnPropertyNames(value).length >= schema.minProperties)) {
        return false;
      }
      if (IsDefined(schema.maxProperties) && !(Object.getOwnPropertyNames(value).length <= schema.maxProperties)) {
        return false;
      }
      const knownKeys = Object.getOwnPropertyNames(schema.properties);
      for (const knownKey of knownKeys) {
        const property = schema.properties[knownKey];
        if (schema.required && schema.required.includes(knownKey)) {
          if (!Visit(property, references, value[knownKey])) {
            return false;
          }
          if (((0, index_6.ExtendsUndefinedCheck)(property) || IsAnyOrUnknown(property)) && !(knownKey in value)) {
            return false;
          }
        } else {
          if (index_1.TypeSystemPolicy.IsExactOptionalProperty(value, knownKey) && !Visit(property, references, value[knownKey])) {
            return false;
          }
        }
      }
      if (schema.additionalProperties === false) {
        const valueKeys = Object.getOwnPropertyNames(value);
        if (schema.required && schema.required.length === knownKeys.length && valueKeys.length === knownKeys.length) {
          return true;
        } else {
          return valueKeys.every((valueKey) => knownKeys.includes(valueKey));
        }
      } else if (typeof schema.additionalProperties === "object") {
        const valueKeys = Object.getOwnPropertyNames(value);
        return valueKeys.every((key) => knownKeys.includes(key) || Visit(schema.additionalProperties, references, value[key]));
      } else {
        return true;
      }
    }
    function FromPromise(schema, references, value) {
      return (0, index_10.IsPromise)(value);
    }
    function FromRecord(schema, references, value) {
      if (!index_1.TypeSystemPolicy.IsRecordLike(value)) {
        return false;
      }
      if (IsDefined(schema.minProperties) && !(Object.getOwnPropertyNames(value).length >= schema.minProperties)) {
        return false;
      }
      if (IsDefined(schema.maxProperties) && !(Object.getOwnPropertyNames(value).length <= schema.maxProperties)) {
        return false;
      }
      const [patternKey, patternSchema] = Object.entries(schema.patternProperties)[0];
      const regex = new RegExp(patternKey);
      const check1 = Object.entries(value).every(([key, value2]) => {
        return regex.test(key) ? Visit(patternSchema, references, value2) : true;
      });
      const check2 = typeof schema.additionalProperties === "object" ? Object.entries(value).every(([key, value2]) => {
        return !regex.test(key) ? Visit(schema.additionalProperties, references, value2) : true;
      }) : true;
      const check3 = schema.additionalProperties === false ? Object.getOwnPropertyNames(value).every((key) => {
        return regex.test(key);
      }) : true;
      return check1 && check2 && check3;
    }
    function FromRef(schema, references, value) {
      return Visit((0, index_2.Deref)(schema, references), references, value);
    }
    function FromRegExp(schema, references, value) {
      const regex = new RegExp(schema.source, schema.flags);
      return regex.test(value);
    }
    function FromString(schema, references, value) {
      if (!(0, index_10.IsString)(value)) {
        return false;
      }
      if (IsDefined(schema.minLength)) {
        if (!(value.length >= schema.minLength))
          return false;
      }
      if (IsDefined(schema.maxLength)) {
        if (!(value.length <= schema.maxLength))
          return false;
      }
      if (IsDefined(schema.pattern)) {
        const regex = new RegExp(schema.pattern);
        if (!regex.test(value))
          return false;
      }
      if (IsDefined(schema.format)) {
        if (!index_7.FormatRegistry.Has(schema.format))
          return false;
        const func = index_7.FormatRegistry.Get(schema.format);
        return func(value);
      }
      return true;
    }
    function FromSymbol(schema, references, value) {
      return (0, index_10.IsSymbol)(value);
    }
    function FromTemplateLiteral(schema, references, value) {
      return (0, index_10.IsString)(value) && new RegExp(schema.pattern).test(value);
    }
    function FromThis(schema, references, value) {
      return Visit((0, index_2.Deref)(schema, references), references, value);
    }
    function FromTuple(schema, references, value) {
      if (!(0, index_10.IsArray)(value)) {
        return false;
      }
      if (schema.items === void 0 && !(value.length === 0)) {
        return false;
      }
      if (!(value.length === schema.maxItems)) {
        return false;
      }
      if (!schema.items) {
        return true;
      }
      for (let i = 0; i < schema.items.length; i++) {
        if (!Visit(schema.items[i], references, value[i]))
          return false;
      }
      return true;
    }
    function FromUndefined(schema, references, value) {
      return (0, index_10.IsUndefined)(value);
    }
    function FromUnion(schema, references, value) {
      return schema.anyOf.some((inner) => Visit(inner, references, value));
    }
    function FromUint8Array(schema, references, value) {
      if (!(0, index_10.IsUint8Array)(value)) {
        return false;
      }
      if (IsDefined(schema.maxByteLength) && !(value.length <= schema.maxByteLength)) {
        return false;
      }
      if (IsDefined(schema.minByteLength) && !(value.length >= schema.minByteLength)) {
        return false;
      }
      return true;
    }
    function FromUnknown(schema, references, value) {
      return true;
    }
    function FromVoid(schema, references, value) {
      return index_1.TypeSystemPolicy.IsVoidLike(value);
    }
    function FromKind(schema, references, value) {
      if (!index_7.TypeRegistry.Has(schema[index_4.Kind]))
        return false;
      const func = index_7.TypeRegistry.Get(schema[index_4.Kind]);
      return func(schema, value);
    }
    function Visit(schema, references, value) {
      const references_ = IsDefined(schema.$id) ? [...references, schema] : references;
      const schema_ = schema;
      switch (schema_[index_4.Kind]) {
        case "Any":
          return FromAny(schema_, references_, value);
        case "Array":
          return FromArray(schema_, references_, value);
        case "AsyncIterator":
          return FromAsyncIterator(schema_, references_, value);
        case "BigInt":
          return FromBigInt(schema_, references_, value);
        case "Boolean":
          return FromBoolean(schema_, references_, value);
        case "Constructor":
          return FromConstructor(schema_, references_, value);
        case "Date":
          return FromDate(schema_, references_, value);
        case "Function":
          return FromFunction(schema_, references_, value);
        case "Integer":
          return FromInteger(schema_, references_, value);
        case "Intersect":
          return FromIntersect(schema_, references_, value);
        case "Iterator":
          return FromIterator(schema_, references_, value);
        case "Literal":
          return FromLiteral(schema_, references_, value);
        case "Never":
          return FromNever(schema_, references_, value);
        case "Not":
          return FromNot(schema_, references_, value);
        case "Null":
          return FromNull(schema_, references_, value);
        case "Number":
          return FromNumber(schema_, references_, value);
        case "Object":
          return FromObject(schema_, references_, value);
        case "Promise":
          return FromPromise(schema_, references_, value);
        case "Record":
          return FromRecord(schema_, references_, value);
        case "Ref":
          return FromRef(schema_, references_, value);
        case "RegExp":
          return FromRegExp(schema_, references_, value);
        case "String":
          return FromString(schema_, references_, value);
        case "Symbol":
          return FromSymbol(schema_, references_, value);
        case "TemplateLiteral":
          return FromTemplateLiteral(schema_, references_, value);
        case "This":
          return FromThis(schema_, references_, value);
        case "Tuple":
          return FromTuple(schema_, references_, value);
        case "Undefined":
          return FromUndefined(schema_, references_, value);
        case "Union":
          return FromUnion(schema_, references_, value);
        case "Uint8Array":
          return FromUint8Array(schema_, references_, value);
        case "Unknown":
          return FromUnknown(schema_, references_, value);
        case "Void":
          return FromVoid(schema_, references_, value);
        default:
          if (!index_7.TypeRegistry.Has(schema_[index_4.Kind]))
            throw new ValueCheckUnknownTypeError(schema_);
          return FromKind(schema_, references_, value);
      }
    }
    function Check(...args) {
      return args.length === 3 ? Visit(args[0], args[1], args[2]) : Visit(args[0], [], args[1]);
    }
    exports.Check = Check;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/value/check/index.js
var require_check2 = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/value/check/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_check(), exports);
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/value/clone/clone.js
var require_clone = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/value/clone/clone.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Clone = void 0;
    var index_1 = require_guard2();
    function ObjectType(value) {
      const keys = [...Object.getOwnPropertyNames(value), ...Object.getOwnPropertySymbols(value)];
      return keys.reduce((acc, key) => ({ ...acc, [key]: Clone(value[key]) }), {});
    }
    function ArrayType(value) {
      return value.map((element) => Clone(element));
    }
    function TypedArrayType(value) {
      return value.slice();
    }
    function DateType(value) {
      return new Date(value.toISOString());
    }
    function ValueType(value) {
      return value;
    }
    function Clone(value) {
      if ((0, index_1.IsArray)(value))
        return ArrayType(value);
      if ((0, index_1.IsDate)(value))
        return DateType(value);
      if ((0, index_1.IsPlainObject)(value))
        return ObjectType(value);
      if ((0, index_1.IsTypedArray)(value))
        return TypedArrayType(value);
      if ((0, index_1.IsValueType)(value))
        return ValueType(value);
      throw new Error("ValueClone: Unable to clone value");
    }
    exports.Clone = Clone;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/value/clone/index.js
var require_clone2 = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/value/clone/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_clone(), exports);
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/value/create/create.js
var require_create = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/value/create/create.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Create = exports.ValueCreateError = void 0;
    var index_1 = require_guard2();
    var index_2 = require_check2();
    var index_3 = require_clone2();
    var index_4 = require_deref2();
    var index_5 = require_template_literal2();
    var index_6 = require_patterns2();
    var index_7 = require_registry();
    var index_8 = require_symbols2();
    var index_9 = require_error2();
    var ValueCreateError = class extends index_9.TypeBoxError {
      constructor(schema, message) {
        super(message);
        this.schema = schema;
      }
    };
    exports.ValueCreateError = ValueCreateError;
    function FromDefault(value) {
      return typeof value === "function" ? value : (0, index_3.Clone)(value);
    }
    function FromAny(schema, references) {
      if ((0, index_1.HasPropertyKey)(schema, "default")) {
        return FromDefault(schema.default);
      } else {
        return {};
      }
    }
    function FromArray(schema, references) {
      if (schema.uniqueItems === true && !(0, index_1.HasPropertyKey)(schema, "default")) {
        throw new ValueCreateError(schema, "Array with the uniqueItems constraint requires a default value");
      } else if ("contains" in schema && !(0, index_1.HasPropertyKey)(schema, "default")) {
        throw new ValueCreateError(schema, "Array with the contains constraint requires a default value");
      } else if ("default" in schema) {
        return FromDefault(schema.default);
      } else if (schema.minItems !== void 0) {
        return Array.from({ length: schema.minItems }).map((item) => {
          return Visit(schema.items, references);
        });
      } else {
        return [];
      }
    }
    function FromAsyncIterator(schema, references) {
      if ((0, index_1.HasPropertyKey)(schema, "default")) {
        return FromDefault(schema.default);
      } else {
        return async function* () {
        }();
      }
    }
    function FromBigInt(schema, references) {
      if ((0, index_1.HasPropertyKey)(schema, "default")) {
        return FromDefault(schema.default);
      } else {
        return BigInt(0);
      }
    }
    function FromBoolean(schema, references) {
      if ((0, index_1.HasPropertyKey)(schema, "default")) {
        return FromDefault(schema.default);
      } else {
        return false;
      }
    }
    function FromConstructor(schema, references) {
      if ((0, index_1.HasPropertyKey)(schema, "default")) {
        return FromDefault(schema.default);
      } else {
        const value = Visit(schema.returns, references);
        if (typeof value === "object" && !Array.isArray(value)) {
          return class {
            constructor() {
              for (const [key, val] of Object.entries(value)) {
                const self = this;
                self[key] = val;
              }
            }
          };
        } else {
          return class {
          };
        }
      }
    }
    function FromDate(schema, references) {
      if ((0, index_1.HasPropertyKey)(schema, "default")) {
        return FromDefault(schema.default);
      } else if (schema.minimumTimestamp !== void 0) {
        return new Date(schema.minimumTimestamp);
      } else {
        return /* @__PURE__ */ new Date();
      }
    }
    function FromFunction(schema, references) {
      if ((0, index_1.HasPropertyKey)(schema, "default")) {
        return FromDefault(schema.default);
      } else {
        return () => Visit(schema.returns, references);
      }
    }
    function FromInteger(schema, references) {
      if ((0, index_1.HasPropertyKey)(schema, "default")) {
        return FromDefault(schema.default);
      } else if (schema.minimum !== void 0) {
        return schema.minimum;
      } else {
        return 0;
      }
    }
    function FromIntersect(schema, references) {
      if ((0, index_1.HasPropertyKey)(schema, "default")) {
        return FromDefault(schema.default);
      } else {
        const value = schema.allOf.reduce((acc, schema2) => {
          const next = Visit(schema2, references);
          return typeof next === "object" ? { ...acc, ...next } : next;
        }, {});
        if (!(0, index_2.Check)(schema, references, value))
          throw new ValueCreateError(schema, "Intersect produced invalid value. Consider using a default value.");
        return value;
      }
    }
    function FromIterator(schema, references) {
      if ((0, index_1.HasPropertyKey)(schema, "default")) {
        return FromDefault(schema.default);
      } else {
        return function* () {
        }();
      }
    }
    function FromLiteral(schema, references) {
      if ((0, index_1.HasPropertyKey)(schema, "default")) {
        return FromDefault(schema.default);
      } else {
        return schema.const;
      }
    }
    function FromNever(schema, references) {
      if ((0, index_1.HasPropertyKey)(schema, "default")) {
        return FromDefault(schema.default);
      } else {
        throw new ValueCreateError(schema, "Never types cannot be created. Consider using a default value.");
      }
    }
    function FromNot(schema, references) {
      if ((0, index_1.HasPropertyKey)(schema, "default")) {
        return FromDefault(schema.default);
      } else {
        throw new ValueCreateError(schema, "Not types must have a default value");
      }
    }
    function FromNull(schema, references) {
      if ((0, index_1.HasPropertyKey)(schema, "default")) {
        return FromDefault(schema.default);
      } else {
        return null;
      }
    }
    function FromNumber(schema, references) {
      if ((0, index_1.HasPropertyKey)(schema, "default")) {
        return FromDefault(schema.default);
      } else if (schema.minimum !== void 0) {
        return schema.minimum;
      } else {
        return 0;
      }
    }
    function FromObject(schema, references) {
      if ((0, index_1.HasPropertyKey)(schema, "default")) {
        return FromDefault(schema.default);
      } else {
        const required = new Set(schema.required);
        return FromDefault(schema.default) || Object.entries(schema.properties).reduce((acc, [key, schema2]) => {
          return required.has(key) ? { ...acc, [key]: Visit(schema2, references) } : { ...acc };
        }, {});
      }
    }
    function FromPromise(schema, references) {
      if ((0, index_1.HasPropertyKey)(schema, "default")) {
        return FromDefault(schema.default);
      } else {
        return Promise.resolve(Visit(schema.item, references));
      }
    }
    function FromRecord(schema, references) {
      const [keyPattern, valueSchema] = Object.entries(schema.patternProperties)[0];
      if ((0, index_1.HasPropertyKey)(schema, "default")) {
        return FromDefault(schema.default);
      } else if (!(keyPattern === index_6.PatternStringExact || keyPattern === index_6.PatternNumberExact)) {
        const propertyKeys = keyPattern.slice(1, keyPattern.length - 1).split("|");
        return propertyKeys.reduce((acc, key) => {
          return { ...acc, [key]: Visit(valueSchema, references) };
        }, {});
      } else {
        return {};
      }
    }
    function FromRef(schema, references) {
      if ((0, index_1.HasPropertyKey)(schema, "default")) {
        return FromDefault(schema.default);
      } else {
        return Visit((0, index_4.Deref)(schema, references), references);
      }
    }
    function FromRegExp(schema, references) {
      if ((0, index_1.HasPropertyKey)(schema, "default")) {
        return FromDefault(schema.default);
      } else {
        throw new ValueCreateError(schema, "RegExp types cannot be created. Consider using a default value.");
      }
    }
    function FromString(schema, references) {
      if (schema.pattern !== void 0) {
        if (!(0, index_1.HasPropertyKey)(schema, "default")) {
          throw new ValueCreateError(schema, "String types with patterns must specify a default value");
        } else {
          return FromDefault(schema.default);
        }
      } else if (schema.format !== void 0) {
        if (!(0, index_1.HasPropertyKey)(schema, "default")) {
          throw new ValueCreateError(schema, "String types with formats must specify a default value");
        } else {
          return FromDefault(schema.default);
        }
      } else {
        if ((0, index_1.HasPropertyKey)(schema, "default")) {
          return FromDefault(schema.default);
        } else if (schema.minLength !== void 0) {
          return Array.from({ length: schema.minLength }).map(() => " ").join("");
        } else {
          return "";
        }
      }
    }
    function FromSymbol(schema, references) {
      if ((0, index_1.HasPropertyKey)(schema, "default")) {
        return FromDefault(schema.default);
      } else if ("value" in schema) {
        return Symbol.for(schema.value);
      } else {
        return Symbol();
      }
    }
    function FromTemplateLiteral(schema, references) {
      if ((0, index_1.HasPropertyKey)(schema, "default")) {
        return FromDefault(schema.default);
      }
      if (!(0, index_5.IsTemplateLiteralFinite)(schema))
        throw new ValueCreateError(schema, "Can only create template literals that produce a finite variants. Consider using a default value.");
      const generated = (0, index_5.TemplateLiteralGenerate)(schema);
      return generated[0];
    }
    function FromThis(schema, references) {
      if (recursiveDepth++ > recursiveMaxDepth)
        throw new ValueCreateError(schema, "Cannot create recursive type as it appears possibly infinite. Consider using a default.");
      if ((0, index_1.HasPropertyKey)(schema, "default")) {
        return FromDefault(schema.default);
      } else {
        return Visit((0, index_4.Deref)(schema, references), references);
      }
    }
    function FromTuple(schema, references) {
      if ((0, index_1.HasPropertyKey)(schema, "default")) {
        return FromDefault(schema.default);
      }
      if (schema.items === void 0) {
        return [];
      } else {
        return Array.from({ length: schema.minItems }).map((_, index) => Visit(schema.items[index], references));
      }
    }
    function FromUndefined(schema, references) {
      if ((0, index_1.HasPropertyKey)(schema, "default")) {
        return FromDefault(schema.default);
      } else {
        return void 0;
      }
    }
    function FromUnion(schema, references) {
      if ((0, index_1.HasPropertyKey)(schema, "default")) {
        return FromDefault(schema.default);
      } else if (schema.anyOf.length === 0) {
        throw new Error("ValueCreate.Union: Cannot create Union with zero variants");
      } else {
        return Visit(schema.anyOf[0], references);
      }
    }
    function FromUint8Array(schema, references) {
      if ((0, index_1.HasPropertyKey)(schema, "default")) {
        return FromDefault(schema.default);
      } else if (schema.minByteLength !== void 0) {
        return new Uint8Array(schema.minByteLength);
      } else {
        return new Uint8Array(0);
      }
    }
    function FromUnknown(schema, references) {
      if ((0, index_1.HasPropertyKey)(schema, "default")) {
        return FromDefault(schema.default);
      } else {
        return {};
      }
    }
    function FromVoid(schema, references) {
      if ((0, index_1.HasPropertyKey)(schema, "default")) {
        return FromDefault(schema.default);
      } else {
        return void 0;
      }
    }
    function FromKind(schema, references) {
      if ((0, index_1.HasPropertyKey)(schema, "default")) {
        return FromDefault(schema.default);
      } else {
        throw new Error("User defined types must specify a default value");
      }
    }
    function Visit(schema, references) {
      const references_ = (0, index_1.IsString)(schema.$id) ? [...references, schema] : references;
      const schema_ = schema;
      switch (schema_[index_8.Kind]) {
        case "Any":
          return FromAny(schema_, references_);
        case "Array":
          return FromArray(schema_, references_);
        case "AsyncIterator":
          return FromAsyncIterator(schema_, references_);
        case "BigInt":
          return FromBigInt(schema_, references_);
        case "Boolean":
          return FromBoolean(schema_, references_);
        case "Constructor":
          return FromConstructor(schema_, references_);
        case "Date":
          return FromDate(schema_, references_);
        case "Function":
          return FromFunction(schema_, references_);
        case "Integer":
          return FromInteger(schema_, references_);
        case "Intersect":
          return FromIntersect(schema_, references_);
        case "Iterator":
          return FromIterator(schema_, references_);
        case "Literal":
          return FromLiteral(schema_, references_);
        case "Never":
          return FromNever(schema_, references_);
        case "Not":
          return FromNot(schema_, references_);
        case "Null":
          return FromNull(schema_, references_);
        case "Number":
          return FromNumber(schema_, references_);
        case "Object":
          return FromObject(schema_, references_);
        case "Promise":
          return FromPromise(schema_, references_);
        case "Record":
          return FromRecord(schema_, references_);
        case "Ref":
          return FromRef(schema_, references_);
        case "RegExp":
          return FromRegExp(schema_, references_);
        case "String":
          return FromString(schema_, references_);
        case "Symbol":
          return FromSymbol(schema_, references_);
        case "TemplateLiteral":
          return FromTemplateLiteral(schema_, references_);
        case "This":
          return FromThis(schema_, references_);
        case "Tuple":
          return FromTuple(schema_, references_);
        case "Undefined":
          return FromUndefined(schema_, references_);
        case "Union":
          return FromUnion(schema_, references_);
        case "Uint8Array":
          return FromUint8Array(schema_, references_);
        case "Unknown":
          return FromUnknown(schema_, references_);
        case "Void":
          return FromVoid(schema_, references_);
        default:
          if (!index_7.TypeRegistry.Has(schema_[index_8.Kind]))
            throw new ValueCreateError(schema_, "Unknown type");
          return FromKind(schema_, references_);
      }
    }
    var recursiveMaxDepth = 512;
    var recursiveDepth = 0;
    function Create(...args) {
      recursiveDepth = 0;
      return args.length === 2 ? Visit(args[0], args[1]) : Visit(args[0], []);
    }
    exports.Create = Create;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/value/create/index.js
var require_create2 = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/value/create/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_create(), exports);
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/value/cast/cast.js
var require_cast = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/value/cast/cast.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Cast = exports.ValueCastError = void 0;
    var index_1 = require_guard2();
    var index_2 = require_error2();
    var index_3 = require_symbols2();
    var index_4 = require_create2();
    var index_5 = require_check2();
    var index_6 = require_clone2();
    var index_7 = require_deref2();
    var ValueCastError = class extends index_2.TypeBoxError {
      constructor(schema, message) {
        super(message);
        this.schema = schema;
      }
    };
    exports.ValueCastError = ValueCastError;
    function ScoreUnion(schema, references, value) {
      if (schema[index_3.Kind] === "Object" && typeof value === "object" && !(0, index_1.IsNull)(value)) {
        const object = schema;
        const keys = Object.getOwnPropertyNames(value);
        const entries = Object.entries(object.properties);
        const [point, max] = [1 / entries.length, entries.length];
        return entries.reduce((acc, [key, schema2]) => {
          const literal = schema2[index_3.Kind] === "Literal" && schema2.const === value[key] ? max : 0;
          const checks = (0, index_5.Check)(schema2, references, value[key]) ? point : 0;
          const exists = keys.includes(key) ? point : 0;
          return acc + (literal + checks + exists);
        }, 0);
      } else {
        return (0, index_5.Check)(schema, references, value) ? 1 : 0;
      }
    }
    function SelectUnion(union, references, value) {
      let [select, best] = [union.anyOf[0], 0];
      for (const schema of union.anyOf) {
        const score = ScoreUnion(schema, references, value);
        if (score > best) {
          select = schema;
          best = score;
        }
      }
      return select;
    }
    function CastUnion(union, references, value) {
      if ("default" in union) {
        return typeof value === "function" ? union.default : (0, index_6.Clone)(union.default);
      } else {
        const schema = SelectUnion(union, references, value);
        return Cast(schema, references, value);
      }
    }
    function DefaultClone(schema, references, value) {
      return (0, index_5.Check)(schema, references, value) ? (0, index_6.Clone)(value) : (0, index_4.Create)(schema, references);
    }
    function Default(schema, references, value) {
      return (0, index_5.Check)(schema, references, value) ? value : (0, index_4.Create)(schema, references);
    }
    function FromArray(schema, references, value) {
      if ((0, index_5.Check)(schema, references, value))
        return (0, index_6.Clone)(value);
      const created = (0, index_1.IsArray)(value) ? (0, index_6.Clone)(value) : (0, index_4.Create)(schema, references);
      const minimum = (0, index_1.IsNumber)(schema.minItems) && created.length < schema.minItems ? [...created, ...Array.from({ length: schema.minItems - created.length }, () => null)] : created;
      const maximum = (0, index_1.IsNumber)(schema.maxItems) && minimum.length > schema.maxItems ? minimum.slice(0, schema.maxItems) : minimum;
      const casted = maximum.map((value2) => Visit(schema.items, references, value2));
      if (schema.uniqueItems !== true)
        return casted;
      const unique = [...new Set(casted)];
      if (!(0, index_5.Check)(schema, references, unique))
        throw new ValueCastError(schema, "Array cast produced invalid data due to uniqueItems constraint");
      return unique;
    }
    function FromConstructor(schema, references, value) {
      if ((0, index_5.Check)(schema, references, value))
        return (0, index_4.Create)(schema, references);
      const required = new Set(schema.returns.required || []);
      const result = function() {
      };
      for (const [key, property] of Object.entries(schema.returns.properties)) {
        if (!required.has(key) && value.prototype[key] === void 0)
          continue;
        result.prototype[key] = Visit(property, references, value.prototype[key]);
      }
      return result;
    }
    function FromIntersect(schema, references, value) {
      const created = (0, index_4.Create)(schema, references);
      const mapped = (0, index_1.IsPlainObject)(created) && (0, index_1.IsPlainObject)(value) ? { ...created, ...value } : value;
      return (0, index_5.Check)(schema, references, mapped) ? mapped : (0, index_4.Create)(schema, references);
    }
    function FromNever(schema, references, value) {
      throw new ValueCastError(schema, "Never types cannot be cast");
    }
    function FromObject(schema, references, value) {
      if ((0, index_5.Check)(schema, references, value))
        return value;
      if (value === null || typeof value !== "object")
        return (0, index_4.Create)(schema, references);
      const required = new Set(schema.required || []);
      const result = {};
      for (const [key, property] of Object.entries(schema.properties)) {
        if (!required.has(key) && value[key] === void 0)
          continue;
        result[key] = Visit(property, references, value[key]);
      }
      if (typeof schema.additionalProperties === "object") {
        const propertyNames = Object.getOwnPropertyNames(schema.properties);
        for (const propertyName of Object.getOwnPropertyNames(value)) {
          if (propertyNames.includes(propertyName))
            continue;
          result[propertyName] = Visit(schema.additionalProperties, references, value[propertyName]);
        }
      }
      return result;
    }
    function FromRecord(schema, references, value) {
      if ((0, index_5.Check)(schema, references, value))
        return (0, index_6.Clone)(value);
      if (value === null || typeof value !== "object" || Array.isArray(value) || value instanceof Date)
        return (0, index_4.Create)(schema, references);
      const subschemaPropertyName = Object.getOwnPropertyNames(schema.patternProperties)[0];
      const subschema = schema.patternProperties[subschemaPropertyName];
      const result = {};
      for (const [propKey, propValue] of Object.entries(value)) {
        result[propKey] = Visit(subschema, references, propValue);
      }
      return result;
    }
    function FromRef(schema, references, value) {
      return Visit((0, index_7.Deref)(schema, references), references, value);
    }
    function FromThis(schema, references, value) {
      return Visit((0, index_7.Deref)(schema, references), references, value);
    }
    function FromTuple(schema, references, value) {
      if ((0, index_5.Check)(schema, references, value))
        return (0, index_6.Clone)(value);
      if (!(0, index_1.IsArray)(value))
        return (0, index_4.Create)(schema, references);
      if (schema.items === void 0)
        return [];
      return schema.items.map((schema2, index) => Visit(schema2, references, value[index]));
    }
    function FromUnion(schema, references, value) {
      return (0, index_5.Check)(schema, references, value) ? (0, index_6.Clone)(value) : CastUnion(schema, references, value);
    }
    function Visit(schema, references, value) {
      const references_ = (0, index_1.IsString)(schema.$id) ? [...references, schema] : references;
      const schema_ = schema;
      switch (schema[index_3.Kind]) {
        case "Array":
          return FromArray(schema_, references_, value);
        case "Constructor":
          return FromConstructor(schema_, references_, value);
        case "Intersect":
          return FromIntersect(schema_, references_, value);
        case "Never":
          return FromNever(schema_, references_, value);
        case "Object":
          return FromObject(schema_, references_, value);
        case "Record":
          return FromRecord(schema_, references_, value);
        case "Ref":
          return FromRef(schema_, references_, value);
        case "This":
          return FromThis(schema_, references_, value);
        case "Tuple":
          return FromTuple(schema_, references_, value);
        case "Union":
          return FromUnion(schema_, references_, value);
        case "Date":
        case "Symbol":
        case "Uint8Array":
          return DefaultClone(schema, references, value);
        default:
          return Default(schema_, references_, value);
      }
    }
    function Cast(...args) {
      return args.length === 3 ? Visit(args[0], args[1], args[2]) : Visit(args[0], [], args[1]);
    }
    exports.Cast = Cast;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/value/cast/index.js
var require_cast2 = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/value/cast/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_cast(), exports);
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/value/clean/clean.js
var require_clean = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/value/clean/clean.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Clean = void 0;
    var index_1 = require_keyof2();
    var index_2 = require_check2();
    var index_3 = require_clone2();
    var index_4 = require_deref2();
    var index_5 = require_symbols2();
    var index_6 = require_guard2();
    var type_1 = require_type3();
    function IsCheckable(schema) {
      return (0, type_1.IsSchema)(schema) && schema[index_5.Kind] !== "Unsafe";
    }
    function FromArray(schema, references, value) {
      if (!(0, index_6.IsArray)(value))
        return value;
      return value.map((value2) => Visit(schema.items, references, value2));
    }
    function FromIntersect(schema, references, value) {
      const unevaluatedProperties = schema.unevaluatedProperties;
      const intersections = schema.allOf.map((schema2) => Visit(schema2, references, (0, index_3.Clone)(value)));
      const composite = intersections.reduce((acc, value2) => (0, index_6.IsObject)(value2) ? { ...acc, ...value2 } : value2, {});
      if (!(0, index_6.IsObject)(value) || !(0, index_6.IsObject)(composite) || !(0, type_1.IsSchema)(unevaluatedProperties))
        return composite;
      const knownkeys = (0, index_1.KeyOfPropertyKeys)(schema);
      for (const key of Object.getOwnPropertyNames(value)) {
        if (knownkeys.includes(key))
          continue;
        if ((0, index_2.Check)(unevaluatedProperties, references, value[key])) {
          composite[key] = Visit(unevaluatedProperties, references, value[key]);
        }
      }
      return composite;
    }
    function FromObject(schema, references, value) {
      if (!(0, index_6.IsObject)(value) || (0, index_6.IsArray)(value))
        return value;
      const additionalProperties = schema.additionalProperties;
      for (const key of Object.getOwnPropertyNames(value)) {
        if (key in schema.properties) {
          value[key] = Visit(schema.properties[key], references, value[key]);
          continue;
        }
        if ((0, type_1.IsSchema)(additionalProperties) && (0, index_2.Check)(additionalProperties, references, value[key])) {
          value[key] = Visit(additionalProperties, references, value[key]);
          continue;
        }
        delete value[key];
      }
      return value;
    }
    function FromRecord(schema, references, value) {
      if (!(0, index_6.IsObject)(value))
        return value;
      const additionalProperties = schema.additionalProperties;
      const propertyKeys = Object.keys(value);
      const [propertyKey, propertySchema] = Object.entries(schema.patternProperties)[0];
      const propertyKeyTest = new RegExp(propertyKey);
      for (const key of propertyKeys) {
        if (propertyKeyTest.test(key)) {
          value[key] = Visit(propertySchema, references, value[key]);
          continue;
        }
        if ((0, type_1.IsSchema)(additionalProperties) && (0, index_2.Check)(additionalProperties, references, value[key])) {
          value[key] = Visit(additionalProperties, references, value[key]);
          continue;
        }
        delete value[key];
      }
      return value;
    }
    function FromRef(schema, references, value) {
      return Visit((0, index_4.Deref)(schema, references), references, value);
    }
    function FromThis(schema, references, value) {
      return Visit((0, index_4.Deref)(schema, references), references, value);
    }
    function FromTuple(schema, references, value) {
      if (!(0, index_6.IsArray)(value))
        return value;
      if ((0, index_6.IsUndefined)(schema.items))
        return [];
      const length = Math.min(value.length, schema.items.length);
      for (let i = 0; i < length; i++) {
        value[i] = Visit(schema.items[i], references, value[i]);
      }
      return value.length > length ? value.slice(0, length) : value;
    }
    function FromUnion(schema, references, value) {
      for (const inner of schema.anyOf) {
        if (IsCheckable(inner) && (0, index_2.Check)(inner, value)) {
          return Visit(inner, references, value);
        }
      }
      return value;
    }
    function Visit(schema, references, value) {
      const references_ = (0, index_6.IsString)(schema.$id) ? [...references, schema] : references;
      const schema_ = schema;
      switch (schema_[index_5.Kind]) {
        case "Array":
          return FromArray(schema_, references_, value);
        case "Intersect":
          return FromIntersect(schema_, references_, value);
        case "Object":
          return FromObject(schema_, references_, value);
        case "Record":
          return FromRecord(schema_, references_, value);
        case "Ref":
          return FromRef(schema_, references_, value);
        case "This":
          return FromThis(schema_, references_, value);
        case "Tuple":
          return FromTuple(schema_, references_, value);
        case "Union":
          return FromUnion(schema_, references_, value);
        default:
          return value;
      }
    }
    function Clean(...args) {
      return args.length === 3 ? Visit(args[0], args[1], args[2]) : Visit(args[0], [], args[1]);
    }
    exports.Clean = Clean;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/value/clean/index.js
var require_clean2 = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/value/clean/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_clean(), exports);
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/composite/composite.js
var require_composite = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/composite/composite.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Composite = void 0;
    var index_1 = require_intersect2();
    var index_2 = require_indexed2();
    var index_3 = require_keyof2();
    var index_4 = require_object2();
    var index_5 = require_sets();
    var type_1 = require_type3();
    function CompositeKeys(T) {
      return T.reduce((Acc, L) => {
        return (0, index_5.SetDistinct)([...Acc, ...(0, index_3.KeyOfPropertyKeys)(L)]);
      }, []);
    }
    function FilterNever(T) {
      return T.filter((L) => !(0, type_1.IsNever)(L));
    }
    function CompositeProperty(T, K) {
      return T.reduce((Acc, L) => {
        return FilterNever([...Acc, ...(0, index_2.IndexFromPropertyKeys)(L, [K])]);
      }, []);
    }
    function CompositeProperties(T, K) {
      return K.reduce((Acc, L) => {
        return { ...Acc, [L]: (0, index_1.IntersectEvaluated)(CompositeProperty(T, L)) };
      }, {});
    }
    function Composite(T, options = {}) {
      const K = CompositeKeys(T);
      const P = CompositeProperties(T, K);
      const R = (0, index_4.Object)(P, options);
      return R;
    }
    exports.Composite = Composite;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/composite/index.js
var require_composite2 = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/composite/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_composite(), exports);
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/value/convert/convert.js
var require_convert = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/value/convert/convert.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Convert = void 0;
    var index_1 = require_clone2();
    var index_2 = require_check2();
    var index_3 = require_deref2();
    var type_1 = require_type3();
    var index_4 = require_symbols2();
    var index_5 = require_composite2();
    var index_6 = require_guard2();
    function IsStringNumeric(value) {
      return (0, index_6.IsString)(value) && !isNaN(value) && !isNaN(parseFloat(value));
    }
    function IsValueToString(value) {
      return (0, index_6.IsBigInt)(value) || (0, index_6.IsBoolean)(value) || (0, index_6.IsNumber)(value);
    }
    function IsValueTrue(value) {
      return value === true || (0, index_6.IsNumber)(value) && value === 1 || (0, index_6.IsBigInt)(value) && value === BigInt("1") || (0, index_6.IsString)(value) && (value.toLowerCase() === "true" || value === "1");
    }
    function IsValueFalse(value) {
      return value === false || (0, index_6.IsNumber)(value) && (value === 0 || Object.is(value, -0)) || (0, index_6.IsBigInt)(value) && value === BigInt("0") || (0, index_6.IsString)(value) && (value.toLowerCase() === "false" || value === "0" || value === "-0");
    }
    function IsTimeStringWithTimeZone(value) {
      return (0, index_6.IsString)(value) && /^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i.test(value);
    }
    function IsTimeStringWithoutTimeZone(value) {
      return (0, index_6.IsString)(value) && /^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)?$/i.test(value);
    }
    function IsDateTimeStringWithTimeZone(value) {
      return (0, index_6.IsString)(value) && /^\d\d\d\d-[0-1]\d-[0-3]\dt(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i.test(value);
    }
    function IsDateTimeStringWithoutTimeZone(value) {
      return (0, index_6.IsString)(value) && /^\d\d\d\d-[0-1]\d-[0-3]\dt(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)?$/i.test(value);
    }
    function IsDateString(value) {
      return (0, index_6.IsString)(value) && /^\d\d\d\d-[0-1]\d-[0-3]\d$/i.test(value);
    }
    function TryConvertLiteralString(value, target) {
      const conversion = TryConvertString(value);
      return conversion === target ? conversion : value;
    }
    function TryConvertLiteralNumber(value, target) {
      const conversion = TryConvertNumber(value);
      return conversion === target ? conversion : value;
    }
    function TryConvertLiteralBoolean(value, target) {
      const conversion = TryConvertBoolean(value);
      return conversion === target ? conversion : value;
    }
    function TryConvertLiteral(schema, value) {
      return (0, index_6.IsString)(schema.const) ? TryConvertLiteralString(value, schema.const) : (0, index_6.IsNumber)(schema.const) ? TryConvertLiteralNumber(value, schema.const) : (0, index_6.IsBoolean)(schema.const) ? TryConvertLiteralBoolean(value, schema.const) : (0, index_1.Clone)(value);
    }
    function TryConvertBoolean(value) {
      return IsValueTrue(value) ? true : IsValueFalse(value) ? false : value;
    }
    function TryConvertBigInt(value) {
      return IsStringNumeric(value) ? BigInt(parseInt(value)) : (0, index_6.IsNumber)(value) ? BigInt(value | 0) : IsValueFalse(value) ? BigInt(0) : IsValueTrue(value) ? BigInt(1) : value;
    }
    function TryConvertString(value) {
      return IsValueToString(value) ? value.toString() : (0, index_6.IsSymbol)(value) && value.description !== void 0 ? value.description.toString() : value;
    }
    function TryConvertNumber(value) {
      return IsStringNumeric(value) ? parseFloat(value) : IsValueTrue(value) ? 1 : IsValueFalse(value) ? 0 : value;
    }
    function TryConvertInteger(value) {
      return IsStringNumeric(value) ? parseInt(value) : (0, index_6.IsNumber)(value) ? value | 0 : IsValueTrue(value) ? 1 : IsValueFalse(value) ? 0 : value;
    }
    function TryConvertNull(value) {
      return (0, index_6.IsString)(value) && value.toLowerCase() === "null" ? null : value;
    }
    function TryConvertUndefined(value) {
      return (0, index_6.IsString)(value) && value === "undefined" ? void 0 : value;
    }
    function TryConvertDate(value) {
      return (0, index_6.IsDate)(value) ? value : (0, index_6.IsNumber)(value) ? new Date(value) : IsValueTrue(value) ? /* @__PURE__ */ new Date(1) : IsValueFalse(value) ? /* @__PURE__ */ new Date(0) : IsStringNumeric(value) ? new Date(parseInt(value)) : IsTimeStringWithoutTimeZone(value) ? /* @__PURE__ */ new Date(`1970-01-01T${value}.000Z`) : IsTimeStringWithTimeZone(value) ? /* @__PURE__ */ new Date(`1970-01-01T${value}`) : IsDateTimeStringWithoutTimeZone(value) ? /* @__PURE__ */ new Date(`${value}.000Z`) : IsDateTimeStringWithTimeZone(value) ? new Date(value) : IsDateString(value) ? /* @__PURE__ */ new Date(`${value}T00:00:00.000Z`) : value;
    }
    function Default(value) {
      return value;
    }
    function FromArray(schema, references, value) {
      if ((0, index_6.IsArray)(value)) {
        return value.map((value2) => Visit(schema.items, references, value2));
      }
      return value;
    }
    function FromBigInt(schema, references, value) {
      return TryConvertBigInt(value);
    }
    function FromBoolean(schema, references, value) {
      return TryConvertBoolean(value);
    }
    function FromDate(schema, references, value) {
      return TryConvertDate(value);
    }
    function FromInteger(schema, references, value) {
      return TryConvertInteger(value);
    }
    function FromIntersect(schema, references, value) {
      const allObjects = schema.allOf.every((schema2) => (0, type_1.IsObject)(schema2));
      if (allObjects)
        return Visit((0, index_5.Composite)(schema.allOf), references, value);
      return Visit(schema.allOf[0], references, value);
    }
    function FromLiteral(schema, references, value) {
      return TryConvertLiteral(schema, value);
    }
    function FromNull(schema, references, value) {
      return TryConvertNull(value);
    }
    function FromNumber(schema, references, value) {
      return TryConvertNumber(value);
    }
    function FromObject(schema, references, value) {
      const isConvertable = (0, index_6.IsObject)(value);
      if (!isConvertable)
        return value;
      return Object.getOwnPropertyNames(schema.properties).reduce((value2, key) => {
        return !(0, index_6.IsUndefined)(value2[key]) ? { ...value2, [key]: Visit(schema.properties[key], references, value2[key]) } : { ...value2 };
      }, value);
    }
    function FromRecord(schema, references, value) {
      const propertyKey = Object.getOwnPropertyNames(schema.patternProperties)[0];
      const property = schema.patternProperties[propertyKey];
      const result = {};
      for (const [propKey, propValue] of Object.entries(value)) {
        result[propKey] = Visit(property, references, propValue);
      }
      return result;
    }
    function FromRef(schema, references, value) {
      return Visit((0, index_3.Deref)(schema, references), references, value);
    }
    function FromString(schema, references, value) {
      return TryConvertString(value);
    }
    function FromSymbol(schema, references, value) {
      return (0, index_6.IsString)(value) || (0, index_6.IsNumber)(value) ? Symbol(value) : value;
    }
    function FromThis(schema, references, value) {
      return Visit((0, index_3.Deref)(schema, references), references, value);
    }
    function FromTuple(schema, references, value) {
      const isConvertable = (0, index_6.IsArray)(value) && !(0, index_6.IsUndefined)(schema.items);
      if (!isConvertable)
        return value;
      return value.map((value2, index) => {
        return index < schema.items.length ? Visit(schema.items[index], references, value2) : value2;
      });
    }
    function FromUndefined(schema, references, value) {
      return TryConvertUndefined(value);
    }
    function FromUnion(schema, references, value) {
      for (const subschema of schema.anyOf) {
        const converted = Visit(subschema, references, value);
        if ((0, index_2.Check)(subschema, references, converted)) {
          return converted;
        }
      }
      return value;
    }
    function Visit(schema, references, value) {
      const references_ = (0, index_6.IsString)(schema.$id) ? [...references, schema] : references;
      const schema_ = schema;
      switch (schema[index_4.Kind]) {
        case "Array":
          return FromArray(schema_, references_, value);
        case "BigInt":
          return FromBigInt(schema_, references_, value);
        case "Boolean":
          return FromBoolean(schema_, references_, value);
        case "Date":
          return FromDate(schema_, references_, value);
        case "Integer":
          return FromInteger(schema_, references_, value);
        case "Intersect":
          return FromIntersect(schema_, references_, value);
        case "Literal":
          return FromLiteral(schema_, references_, value);
        case "Null":
          return FromNull(schema_, references_, value);
        case "Number":
          return FromNumber(schema_, references_, value);
        case "Object":
          return FromObject(schema_, references_, value);
        case "Record":
          return FromRecord(schema_, references_, value);
        case "Ref":
          return FromRef(schema_, references_, value);
        case "String":
          return FromString(schema_, references_, value);
        case "Symbol":
          return FromSymbol(schema_, references_, value);
        case "This":
          return FromThis(schema_, references_, value);
        case "Tuple":
          return FromTuple(schema_, references_, value);
        case "Undefined":
          return FromUndefined(schema_, references_, value);
        case "Union":
          return FromUnion(schema_, references_, value);
        default:
          return Default(value);
      }
    }
    function Convert(...args) {
      return args.length === 3 ? Visit(args[0], args[1], args[2]) : Visit(args[0], [], args[1]);
    }
    exports.Convert = Convert;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/value/convert/index.js
var require_convert2 = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/value/convert/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_convert(), exports);
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/value/default/default.js
var require_default = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/value/default/default.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Default = void 0;
    var index_1 = require_check2();
    var index_2 = require_clone2();
    var index_3 = require_deref2();
    var index_4 = require_symbols2();
    var index_5 = require_guard2();
    var type_1 = require_type3();
    function ValueOrDefault(schema, value) {
      return value === void 0 && "default" in schema ? (0, index_2.Clone)(schema.default) : value;
    }
    function IsCheckable(schema) {
      return (0, type_1.IsSchema)(schema) && schema[index_4.Kind] !== "Unsafe";
    }
    function IsDefaultSchema(value) {
      return (0, type_1.IsSchema)(value) && "default" in value;
    }
    function FromArray(schema, references, value) {
      const defaulted = ValueOrDefault(schema, value);
      if (!(0, index_5.IsArray)(defaulted))
        return defaulted;
      for (let i = 0; i < defaulted.length; i++) {
        defaulted[i] = Visit(schema.items, references, defaulted[i]);
      }
      return defaulted;
    }
    function FromIntersect(schema, references, value) {
      const defaulted = ValueOrDefault(schema, value);
      return schema.allOf.reduce((acc, schema2) => {
        const next = Visit(schema2, references, defaulted);
        return (0, index_5.IsObject)(next) ? { ...acc, ...next } : next;
      }, {});
    }
    function FromObject(schema, references, value) {
      const defaulted = ValueOrDefault(schema, value);
      if (!(0, index_5.IsObject)(defaulted))
        return defaulted;
      const additionalPropertiesSchema = schema.additionalProperties;
      const knownPropertyKeys = Object.getOwnPropertyNames(schema.properties);
      for (const key of knownPropertyKeys) {
        if (!IsDefaultSchema(schema.properties[key]))
          continue;
        defaulted[key] = Visit(schema.properties[key], references, defaulted[key]);
      }
      if (!IsDefaultSchema(additionalPropertiesSchema))
        return defaulted;
      for (const key of Object.getOwnPropertyNames(defaulted)) {
        if (knownPropertyKeys.includes(key))
          continue;
        defaulted[key] = Visit(additionalPropertiesSchema, references, defaulted[key]);
      }
      return defaulted;
    }
    function FromRecord(schema, references, value) {
      const defaulted = ValueOrDefault(schema, value);
      if (!(0, index_5.IsObject)(defaulted))
        return defaulted;
      const additionalPropertiesSchema = schema.additionalProperties;
      const [propertyKeyPattern, propertySchema] = Object.entries(schema.patternProperties)[0];
      const knownPropertyKey = new RegExp(propertyKeyPattern);
      for (const key of Object.getOwnPropertyNames(defaulted)) {
        if (!(knownPropertyKey.test(key) && IsDefaultSchema(propertySchema)))
          continue;
        defaulted[key] = Visit(propertySchema, references, defaulted[key]);
      }
      if (!IsDefaultSchema(additionalPropertiesSchema))
        return defaulted;
      for (const key of Object.getOwnPropertyNames(defaulted)) {
        if (knownPropertyKey.test(key))
          continue;
        defaulted[key] = Visit(additionalPropertiesSchema, references, defaulted[key]);
      }
      return defaulted;
    }
    function FromRef(schema, references, value) {
      return Visit((0, index_3.Deref)(schema, references), references, ValueOrDefault(schema, value));
    }
    function FromThis(schema, references, value) {
      return Visit((0, index_3.Deref)(schema, references), references, value);
    }
    function FromTuple(schema, references, value) {
      const defaulted = ValueOrDefault(schema, value);
      if (!(0, index_5.IsArray)(defaulted) || (0, index_5.IsUndefined)(schema.items))
        return defaulted;
      const [items, max] = [schema.items, Math.max(schema.items.length, defaulted.length)];
      for (let i = 0; i < max; i++) {
        if (i < items.length)
          defaulted[i] = Visit(items[i], references, defaulted[i]);
      }
      return defaulted;
    }
    function FromUnion(schema, references, value) {
      const defaulted = ValueOrDefault(schema, value);
      for (const inner of schema.anyOf) {
        const result = Visit(inner, references, defaulted);
        if (IsCheckable(inner) && (0, index_1.Check)(inner, result)) {
          return result;
        }
      }
      return defaulted;
    }
    function Visit(schema, references, value) {
      const references_ = (0, index_5.IsString)(schema.$id) ? [...references, schema] : references;
      const schema_ = schema;
      switch (schema_[index_4.Kind]) {
        case "Array":
          return FromArray(schema_, references_, value);
        case "Intersect":
          return FromIntersect(schema_, references_, value);
        case "Object":
          return FromObject(schema_, references_, value);
        case "Record":
          return FromRecord(schema_, references_, value);
        case "Ref":
          return FromRef(schema_, references_, value);
        case "This":
          return FromThis(schema_, references_, value);
        case "Tuple":
          return FromTuple(schema_, references_, value);
        case "Union":
          return FromUnion(schema_, references_, value);
        default:
          return ValueOrDefault(schema_, value);
      }
    }
    function Default(...args) {
      return args.length === 3 ? Visit(args[0], args[1], args[2]) : Visit(args[0], [], args[1]);
    }
    exports.Default = Default;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/value/default/index.js
var require_default2 = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/value/default/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_default(), exports);
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/value/pointer/pointer.js
var require_pointer = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/value/pointer/pointer.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Get = exports.Has = exports.Delete = exports.Set = exports.Format = exports.ValuePointerRootDeleteError = exports.ValuePointerRootSetError = void 0;
    var index_1 = require_error2();
    var ValuePointerRootSetError = class extends index_1.TypeBoxError {
      constructor(value, path, update) {
        super("Cannot set root value");
        this.value = value;
        this.path = path;
        this.update = update;
      }
    };
    exports.ValuePointerRootSetError = ValuePointerRootSetError;
    var ValuePointerRootDeleteError = class extends index_1.TypeBoxError {
      constructor(value, path) {
        super("Cannot delete root value");
        this.value = value;
        this.path = path;
      }
    };
    exports.ValuePointerRootDeleteError = ValuePointerRootDeleteError;
    function Escape(component) {
      return component.indexOf("~") === -1 ? component : component.replace(/~1/g, "/").replace(/~0/g, "~");
    }
    function* Format(pointer) {
      if (pointer === "")
        return;
      let [start, end] = [0, 0];
      for (let i = 0; i < pointer.length; i++) {
        const char = pointer.charAt(i);
        if (char === "/") {
          if (i === 0) {
            start = i + 1;
          } else {
            end = i;
            yield Escape(pointer.slice(start, end));
            start = i + 1;
          }
        } else {
          end = i;
        }
      }
      yield Escape(pointer.slice(start));
    }
    exports.Format = Format;
    function Set2(value, pointer, update) {
      if (pointer === "")
        throw new ValuePointerRootSetError(value, pointer, update);
      let [owner, next, key] = [null, value, ""];
      for (const component of Format(pointer)) {
        if (next[component] === void 0)
          next[component] = {};
        owner = next;
        next = next[component];
        key = component;
      }
      owner[key] = update;
    }
    exports.Set = Set2;
    function Delete(value, pointer) {
      if (pointer === "")
        throw new ValuePointerRootDeleteError(value, pointer);
      let [owner, next, key] = [null, value, ""];
      for (const component of Format(pointer)) {
        if (next[component] === void 0 || next[component] === null)
          return;
        owner = next;
        next = next[component];
        key = component;
      }
      if (Array.isArray(owner)) {
        const index = parseInt(key);
        owner.splice(index, 1);
      } else {
        delete owner[key];
      }
    }
    exports.Delete = Delete;
    function Has(value, pointer) {
      if (pointer === "")
        return true;
      let [owner, next, key] = [null, value, ""];
      for (const component of Format(pointer)) {
        if (next[component] === void 0)
          return false;
        owner = next;
        next = next[component];
        key = component;
      }
      return Object.getOwnPropertyNames(owner).includes(key);
    }
    exports.Has = Has;
    function Get(value, pointer) {
      if (pointer === "")
        return value;
      let current = value;
      for (const component of Format(pointer)) {
        if (current[component] === void 0)
          return void 0;
        current = current[component];
      }
      return current;
    }
    exports.Get = Get;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/value/pointer/index.js
var require_pointer2 = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/value/pointer/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ValuePointer = void 0;
    exports.ValuePointer = require_pointer();
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/value/delta/delta.js
var require_delta = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/value/delta/delta.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Patch = exports.Diff = exports.ValueDeltaSymbolError = exports.ValueDeltaError = exports.Edit = exports.Delete = exports.Update = exports.Insert = void 0;
    var index_1 = require_guard2();
    var index_2 = require_pointer2();
    var index_3 = require_clone2();
    var index_4 = require_error2();
    var index_5 = require_literal2();
    var index_6 = require_object2();
    var index_7 = require_string2();
    var index_8 = require_unknown2();
    var index_9 = require_union2();
    exports.Insert = (0, index_6.Object)({
      type: (0, index_5.Literal)("insert"),
      path: (0, index_7.String)(),
      value: (0, index_8.Unknown)()
    });
    exports.Update = (0, index_6.Object)({
      type: (0, index_5.Literal)("update"),
      path: (0, index_7.String)(),
      value: (0, index_8.Unknown)()
    });
    exports.Delete = (0, index_6.Object)({
      type: (0, index_5.Literal)("delete"),
      path: (0, index_7.String)()
    });
    exports.Edit = (0, index_9.Union)([exports.Insert, exports.Update, exports.Delete]);
    var ValueDeltaError = class extends index_4.TypeBoxError {
      constructor(value, message) {
        super(message);
        this.value = value;
      }
    };
    exports.ValueDeltaError = ValueDeltaError;
    var ValueDeltaSymbolError = class extends ValueDeltaError {
      constructor(value) {
        super(value, "Cannot diff objects with symbol keys");
        this.value = value;
      }
    };
    exports.ValueDeltaSymbolError = ValueDeltaSymbolError;
    function CreateUpdate(path, value) {
      return { type: "update", path, value };
    }
    function CreateInsert(path, value) {
      return { type: "insert", path, value };
    }
    function CreateDelete(path) {
      return { type: "delete", path };
    }
    function* ObjectType(path, current, next) {
      if (!(0, index_1.IsPlainObject)(next))
        return yield CreateUpdate(path, next);
      const currentKeys = [...globalThis.Object.keys(current), ...globalThis.Object.getOwnPropertySymbols(current)];
      const nextKeys = [...globalThis.Object.keys(next), ...globalThis.Object.getOwnPropertySymbols(next)];
      for (const key of currentKeys) {
        if ((0, index_1.IsSymbol)(key))
          throw new ValueDeltaSymbolError(key);
        if ((0, index_1.IsUndefined)(next[key]) && nextKeys.includes(key))
          yield CreateUpdate(`${path}/${globalThis.String(key)}`, void 0);
      }
      for (const key of nextKeys) {
        if ((0, index_1.IsUndefined)(current[key]) || (0, index_1.IsUndefined)(next[key]))
          continue;
        if ((0, index_1.IsSymbol)(key))
          throw new ValueDeltaSymbolError(key);
        yield* Visit(`${path}/${globalThis.String(key)}`, current[key], next[key]);
      }
      for (const key of nextKeys) {
        if ((0, index_1.IsSymbol)(key))
          throw new ValueDeltaSymbolError(key);
        if ((0, index_1.IsUndefined)(current[key]))
          yield CreateInsert(`${path}/${globalThis.String(key)}`, next[key]);
      }
      for (const key of currentKeys.reverse()) {
        if ((0, index_1.IsSymbol)(key))
          throw new ValueDeltaSymbolError(key);
        if ((0, index_1.IsUndefined)(next[key]) && !nextKeys.includes(key))
          yield CreateDelete(`${path}/${globalThis.String(key)}`);
      }
    }
    function* ArrayType(path, current, next) {
      if (!(0, index_1.IsArray)(next))
        return yield CreateUpdate(path, next);
      for (let i = 0; i < Math.min(current.length, next.length); i++) {
        yield* Visit(`${path}/${i}`, current[i], next[i]);
      }
      for (let i = 0; i < next.length; i++) {
        if (i < current.length)
          continue;
        yield CreateInsert(`${path}/${i}`, next[i]);
      }
      for (let i = current.length - 1; i >= 0; i--) {
        if (i < next.length)
          continue;
        yield CreateDelete(`${path}/${i}`);
      }
    }
    function* TypedArrayType(path, current, next) {
      if (!(0, index_1.IsTypedArray)(next) || current.length !== next.length || globalThis.Object.getPrototypeOf(current).constructor.name !== globalThis.Object.getPrototypeOf(next).constructor.name)
        return yield CreateUpdate(path, next);
      for (let i = 0; i < Math.min(current.length, next.length); i++) {
        yield* Visit(`${path}/${i}`, current[i], next[i]);
      }
    }
    function* ValueType(path, current, next) {
      if (current === next)
        return;
      yield CreateUpdate(path, next);
    }
    function* Visit(path, current, next) {
      if ((0, index_1.IsPlainObject)(current))
        return yield* ObjectType(path, current, next);
      if ((0, index_1.IsArray)(current))
        return yield* ArrayType(path, current, next);
      if ((0, index_1.IsTypedArray)(current))
        return yield* TypedArrayType(path, current, next);
      if ((0, index_1.IsValueType)(current))
        return yield* ValueType(path, current, next);
      throw new ValueDeltaError(current, "Unable to create diff edits for unknown value");
    }
    function Diff(current, next) {
      return [...Visit("", current, next)];
    }
    exports.Diff = Diff;
    function IsRootUpdate(edits) {
      return edits.length > 0 && edits[0].path === "" && edits[0].type === "update";
    }
    function IsIdentity(edits) {
      return edits.length === 0;
    }
    function Patch(current, edits) {
      if (IsRootUpdate(edits)) {
        return (0, index_3.Clone)(edits[0].value);
      }
      if (IsIdentity(edits)) {
        return (0, index_3.Clone)(current);
      }
      const clone = (0, index_3.Clone)(current);
      for (const edit of edits) {
        switch (edit.type) {
          case "insert": {
            index_2.ValuePointer.Set(clone, edit.path, edit.value);
            break;
          }
          case "update": {
            index_2.ValuePointer.Set(clone, edit.path, edit.value);
            break;
          }
          case "delete": {
            index_2.ValuePointer.Delete(clone, edit.path);
            break;
          }
        }
      }
      return clone;
    }
    exports.Patch = Patch;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/value/delta/index.js
var require_delta2 = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/value/delta/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_delta(), exports);
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/value/equal/equal.js
var require_equal = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/value/equal/equal.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Equal = void 0;
    var index_1 = require_guard2();
    function ObjectType(left, right) {
      if (!(0, index_1.IsPlainObject)(right))
        return false;
      const leftKeys = [...Object.keys(left), ...Object.getOwnPropertySymbols(left)];
      const rightKeys = [...Object.keys(right), ...Object.getOwnPropertySymbols(right)];
      if (leftKeys.length !== rightKeys.length)
        return false;
      return leftKeys.every((key) => Equal(left[key], right[key]));
    }
    function DateType(left, right) {
      return (0, index_1.IsDate)(right) && left.getTime() === right.getTime();
    }
    function ArrayType(left, right) {
      if (!(0, index_1.IsArray)(right) || left.length !== right.length)
        return false;
      return left.every((value, index) => Equal(value, right[index]));
    }
    function TypedArrayType(left, right) {
      if (!(0, index_1.IsTypedArray)(right) || left.length !== right.length || Object.getPrototypeOf(left).constructor.name !== Object.getPrototypeOf(right).constructor.name)
        return false;
      return left.every((value, index) => Equal(value, right[index]));
    }
    function ValueType(left, right) {
      return left === right;
    }
    function Equal(left, right) {
      if ((0, index_1.IsPlainObject)(left))
        return ObjectType(left, right);
      if ((0, index_1.IsDate)(left))
        return DateType(left, right);
      if ((0, index_1.IsTypedArray)(left))
        return TypedArrayType(left, right);
      if ((0, index_1.IsArray)(left))
        return ArrayType(left, right);
      if ((0, index_1.IsValueType)(left))
        return ValueType(left, right);
      throw new Error("ValueEquals: Unable to compare value");
    }
    exports.Equal = Equal;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/value/equal/index.js
var require_equal2 = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/value/equal/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_equal(), exports);
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/value/mutate/mutate.js
var require_mutate = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/value/mutate/mutate.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Mutate = exports.ValueMutateError = void 0;
    var index_1 = require_guard2();
    var index_2 = require_pointer2();
    var index_3 = require_clone2();
    var index_4 = require_error2();
    var ValueMutateError = class extends index_4.TypeBoxError {
      constructor(message) {
        super(message);
      }
    };
    exports.ValueMutateError = ValueMutateError;
    function ObjectType(root, path, current, next) {
      if (!(0, index_1.IsPlainObject)(current)) {
        index_2.ValuePointer.Set(root, path, (0, index_3.Clone)(next));
      } else {
        const currentKeys = Object.keys(current);
        const nextKeys = Object.keys(next);
        for (const currentKey of currentKeys) {
          if (!nextKeys.includes(currentKey)) {
            delete current[currentKey];
          }
        }
        for (const nextKey of nextKeys) {
          if (!currentKeys.includes(nextKey)) {
            current[nextKey] = null;
          }
        }
        for (const nextKey of nextKeys) {
          Visit(root, `${path}/${nextKey}`, current[nextKey], next[nextKey]);
        }
      }
    }
    function ArrayType(root, path, current, next) {
      if (!(0, index_1.IsArray)(current)) {
        index_2.ValuePointer.Set(root, path, (0, index_3.Clone)(next));
      } else {
        for (let index = 0; index < next.length; index++) {
          Visit(root, `${path}/${index}`, current[index], next[index]);
        }
        current.splice(next.length);
      }
    }
    function TypedArrayType(root, path, current, next) {
      if ((0, index_1.IsTypedArray)(current) && current.length === next.length) {
        for (let i = 0; i < current.length; i++) {
          current[i] = next[i];
        }
      } else {
        index_2.ValuePointer.Set(root, path, (0, index_3.Clone)(next));
      }
    }
    function ValueType(root, path, current, next) {
      if (current === next)
        return;
      index_2.ValuePointer.Set(root, path, next);
    }
    function Visit(root, path, current, next) {
      if ((0, index_1.IsArray)(next))
        return ArrayType(root, path, current, next);
      if ((0, index_1.IsTypedArray)(next))
        return TypedArrayType(root, path, current, next);
      if ((0, index_1.IsPlainObject)(next))
        return ObjectType(root, path, current, next);
      if ((0, index_1.IsValueType)(next))
        return ValueType(root, path, current, next);
    }
    function IsNonMutableValue(value) {
      return (0, index_1.IsTypedArray)(value) || (0, index_1.IsValueType)(value);
    }
    function IsMismatchedValue(current, next) {
      return (0, index_1.IsPlainObject)(current) && (0, index_1.IsArray)(next) || (0, index_1.IsArray)(current) && (0, index_1.IsPlainObject)(next);
    }
    function Mutate(current, next) {
      if (IsNonMutableValue(current) || IsNonMutableValue(next))
        throw new ValueMutateError("Only object and array types can be mutated at the root level");
      if (IsMismatchedValue(current, next))
        throw new ValueMutateError("Cannot assign due type mismatch of assignable values");
      Visit(current, "", current, next);
    }
    exports.Mutate = Mutate;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/value/mutate/index.js
var require_mutate2 = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/value/mutate/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_mutate(), exports);
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/value/transform/decode.js
var require_decode = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/value/transform/decode.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TransformDecode = exports.TransformDecodeError = exports.TransformDecodeCheckError = void 0;
    var index_1 = require_symbols2();
    var index_2 = require_error2();
    var index_3 = require_keyof2();
    var index_4 = require_indexed2();
    var index_5 = require_deref2();
    var index_6 = require_check2();
    var index_7 = require_guard2();
    var type_1 = require_type3();
    var TransformDecodeCheckError = class extends index_2.TypeBoxError {
      constructor(schema, value, error) {
        super(`Unable to decode due to invalid value`);
        this.schema = schema;
        this.value = value;
        this.error = error;
      }
    };
    exports.TransformDecodeCheckError = TransformDecodeCheckError;
    var TransformDecodeError = class extends index_2.TypeBoxError {
      constructor(schema, value, error) {
        super(`${error instanceof Error ? error.message : "Unknown error"}`);
        this.schema = schema;
        this.value = value;
      }
    };
    exports.TransformDecodeError = TransformDecodeError;
    function Default(schema, value) {
      try {
        return (0, type_1.IsTransform)(schema) ? schema[index_1.TransformKind].Decode(value) : value;
      } catch (error) {
        throw new TransformDecodeError(schema, value, error);
      }
    }
    function FromArray(schema, references, value) {
      return (0, index_7.IsArray)(value) ? Default(schema, value.map((value2) => Visit(schema.items, references, value2))) : Default(schema, value);
    }
    function FromIntersect(schema, references, value) {
      if (!(0, index_7.IsPlainObject)(value) || (0, index_7.IsValueType)(value))
        return Default(schema, value);
      const knownKeys = (0, index_3.KeyOfPropertyKeys)(schema);
      const knownProperties = knownKeys.reduce((value2, key) => {
        return key in value2 ? { ...value2, [key]: Visit((0, index_4.Index)(schema, [key]), references, value2[key]) } : value2;
      }, value);
      if (!(0, type_1.IsTransform)(schema.unevaluatedProperties)) {
        return Default(schema, knownProperties);
      }
      const unknownKeys = Object.getOwnPropertyNames(knownProperties);
      const unevaluatedProperties = schema.unevaluatedProperties;
      const unknownProperties = unknownKeys.reduce((value2, key) => {
        return !knownKeys.includes(key) ? { ...value2, [key]: Default(unevaluatedProperties, value2[key]) } : value2;
      }, knownProperties);
      return Default(schema, unknownProperties);
    }
    function FromNot(schema, references, value) {
      return Default(schema, Visit(schema.not, references, value));
    }
    function FromObject(schema, references, value) {
      if (!(0, index_7.IsPlainObject)(value))
        return Default(schema, value);
      const knownKeys = (0, index_3.KeyOfPropertyKeys)(schema);
      const knownProperties = knownKeys.reduce((value2, key) => {
        return key in value2 ? { ...value2, [key]: Visit(schema.properties[key], references, value2[key]) } : value2;
      }, value);
      if (!(0, type_1.IsSchema)(schema.additionalProperties)) {
        return Default(schema, knownProperties);
      }
      const unknownKeys = Object.getOwnPropertyNames(knownProperties);
      const additionalProperties = schema.additionalProperties;
      const unknownProperties = unknownKeys.reduce((value2, key) => {
        return !knownKeys.includes(key) ? { ...value2, [key]: Default(additionalProperties, value2[key]) } : value2;
      }, knownProperties);
      return Default(schema, unknownProperties);
    }
    function FromRecord(schema, references, value) {
      if (!(0, index_7.IsPlainObject)(value))
        return Default(schema, value);
      const pattern = Object.getOwnPropertyNames(schema.patternProperties)[0];
      const knownKeys = new RegExp(pattern);
      const knownProperties = Object.getOwnPropertyNames(value).reduce((value2, key) => {
        return knownKeys.test(key) ? { ...value2, [key]: Visit(schema.patternProperties[pattern], references, value2[key]) } : value2;
      }, value);
      if (!(0, type_1.IsSchema)(schema.additionalProperties)) {
        return Default(schema, knownProperties);
      }
      const unknownKeys = Object.getOwnPropertyNames(knownProperties);
      const additionalProperties = schema.additionalProperties;
      const unknownProperties = unknownKeys.reduce((value2, key) => {
        return !knownKeys.test(key) ? { ...value2, [key]: Default(additionalProperties, value2[key]) } : value2;
      }, knownProperties);
      return Default(schema, unknownProperties);
    }
    function FromRef(schema, references, value) {
      const target = (0, index_5.Deref)(schema, references);
      return Default(schema, Visit(target, references, value));
    }
    function FromThis(schema, references, value) {
      const target = (0, index_5.Deref)(schema, references);
      return Default(schema, Visit(target, references, value));
    }
    function FromTuple(schema, references, value) {
      return (0, index_7.IsArray)(value) && (0, index_7.IsArray)(schema.items) ? Default(schema, schema.items.map((schema2, index) => Visit(schema2, references, value[index]))) : Default(schema, value);
    }
    function FromUnion(schema, references, value) {
      for (const subschema of schema.anyOf) {
        if (!(0, index_6.Check)(subschema, references, value))
          continue;
        const decoded = Visit(subschema, references, value);
        return Default(schema, decoded);
      }
      return Default(schema, value);
    }
    function Visit(schema, references, value) {
      const references_ = typeof schema.$id === "string" ? [...references, schema] : references;
      const schema_ = schema;
      switch (schema[index_1.Kind]) {
        case "Array":
          return FromArray(schema_, references_, value);
        case "Intersect":
          return FromIntersect(schema_, references_, value);
        case "Not":
          return FromNot(schema_, references_, value);
        case "Object":
          return FromObject(schema_, references_, value);
        case "Record":
          return FromRecord(schema_, references_, value);
        case "Ref":
          return FromRef(schema_, references_, value);
        case "Symbol":
          return Default(schema_, value);
        case "This":
          return FromThis(schema_, references_, value);
        case "Tuple":
          return FromTuple(schema_, references_, value);
        case "Union":
          return FromUnion(schema_, references_, value);
        default:
          return Default(schema_, value);
      }
    }
    function TransformDecode(schema, references, value) {
      return Visit(schema, references, value);
    }
    exports.TransformDecode = TransformDecode;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/value/transform/encode.js
var require_encode = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/value/transform/encode.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TransformEncode = exports.TransformEncodeError = exports.TransformEncodeCheckError = void 0;
    var index_1 = require_symbols2();
    var index_2 = require_error2();
    var index_3 = require_keyof2();
    var index_4 = require_indexed2();
    var index_5 = require_deref2();
    var index_6 = require_check2();
    var index_7 = require_guard2();
    var type_1 = require_type3();
    var TransformEncodeCheckError = class extends index_2.TypeBoxError {
      constructor(schema, value, error) {
        super(`Unable to encode due to invalid value`);
        this.schema = schema;
        this.value = value;
        this.error = error;
      }
    };
    exports.TransformEncodeCheckError = TransformEncodeCheckError;
    var TransformEncodeError = class extends index_2.TypeBoxError {
      constructor(schema, value, error) {
        super(`${error instanceof Error ? error.message : "Unknown error"}`);
        this.schema = schema;
        this.value = value;
      }
    };
    exports.TransformEncodeError = TransformEncodeError;
    function Default(schema, value) {
      try {
        return (0, type_1.IsTransform)(schema) ? schema[index_1.TransformKind].Encode(value) : value;
      } catch (error) {
        throw new TransformEncodeError(schema, value, error);
      }
    }
    function FromArray(schema, references, value) {
      const defaulted = Default(schema, value);
      return (0, index_7.IsArray)(defaulted) ? defaulted.map((value2) => Visit(schema.items, references, value2)) : defaulted;
    }
    function FromIntersect(schema, references, value) {
      const defaulted = Default(schema, value);
      if (!(0, index_7.IsPlainObject)(value) || (0, index_7.IsValueType)(value))
        return defaulted;
      const knownKeys = (0, index_3.KeyOfPropertyKeys)(schema);
      const knownProperties = knownKeys.reduce((value2, key) => {
        return key in defaulted ? { ...value2, [key]: Visit((0, index_4.Index)(schema, [key]), references, value2[key]) } : value2;
      }, defaulted);
      if (!(0, type_1.IsTransform)(schema.unevaluatedProperties)) {
        return Default(schema, knownProperties);
      }
      const unknownKeys = Object.getOwnPropertyNames(knownProperties);
      const unevaluatedProperties = schema.unevaluatedProperties;
      return unknownKeys.reduce((value2, key) => {
        return !knownKeys.includes(key) ? { ...value2, [key]: Default(unevaluatedProperties, value2[key]) } : value2;
      }, knownProperties);
    }
    function FromNot(schema, references, value) {
      return Default(schema.not, Default(schema, value));
    }
    function FromObject(schema, references, value) {
      const defaulted = Default(schema, value);
      if (!(0, index_7.IsPlainObject)(value))
        return defaulted;
      const knownKeys = (0, index_3.KeyOfPropertyKeys)(schema);
      const knownProperties = knownKeys.reduce((value2, key) => {
        return key in value2 ? { ...value2, [key]: Visit(schema.properties[key], references, value2[key]) } : value2;
      }, defaulted);
      if (!(0, type_1.IsSchema)(schema.additionalProperties)) {
        return knownProperties;
      }
      const unknownKeys = Object.getOwnPropertyNames(knownProperties);
      const additionalProperties = schema.additionalProperties;
      return unknownKeys.reduce((value2, key) => {
        return !knownKeys.includes(key) ? { ...value2, [key]: Default(additionalProperties, value2[key]) } : value2;
      }, knownProperties);
    }
    function FromRecord(schema, references, value) {
      const defaulted = Default(schema, value);
      if (!(0, index_7.IsPlainObject)(value))
        return defaulted;
      const pattern = Object.getOwnPropertyNames(schema.patternProperties)[0];
      const knownKeys = new RegExp(pattern);
      const knownProperties = Object.getOwnPropertyNames(value).reduce((value2, key) => {
        return knownKeys.test(key) ? { ...value2, [key]: Visit(schema.patternProperties[pattern], references, value2[key]) } : value2;
      }, defaulted);
      if (!(0, type_1.IsSchema)(schema.additionalProperties)) {
        return Default(schema, knownProperties);
      }
      const unknownKeys = Object.getOwnPropertyNames(knownProperties);
      const additionalProperties = schema.additionalProperties;
      return unknownKeys.reduce((value2, key) => {
        return !knownKeys.test(key) ? { ...value2, [key]: Default(additionalProperties, value2[key]) } : value2;
      }, knownProperties);
    }
    function FromRef(schema, references, value) {
      const target = (0, index_5.Deref)(schema, references);
      const resolved = Visit(target, references, value);
      return Default(schema, resolved);
    }
    function FromThis(schema, references, value) {
      const target = (0, index_5.Deref)(schema, references);
      const resolved = Visit(target, references, value);
      return Default(schema, resolved);
    }
    function FromTuple(schema, references, value) {
      const value1 = Default(schema, value);
      return (0, index_7.IsArray)(schema.items) ? schema.items.map((schema2, index) => Visit(schema2, references, value1[index])) : [];
    }
    function FromUnion(schema, references, value) {
      for (const subschema of schema.anyOf) {
        if (!(0, index_6.Check)(subschema, references, value))
          continue;
        const value1 = Visit(subschema, references, value);
        return Default(schema, value1);
      }
      for (const subschema of schema.anyOf) {
        const value1 = Visit(subschema, references, value);
        if (!(0, index_6.Check)(schema, references, value1))
          continue;
        return Default(schema, value1);
      }
      return Default(schema, value);
    }
    function Visit(schema, references, value) {
      const references_ = typeof schema.$id === "string" ? [...references, schema] : references;
      const schema_ = schema;
      switch (schema[index_1.Kind]) {
        case "Array":
          return FromArray(schema_, references_, value);
        case "Intersect":
          return FromIntersect(schema_, references_, value);
        case "Not":
          return FromNot(schema_, references_, value);
        case "Object":
          return FromObject(schema_, references_, value);
        case "Record":
          return FromRecord(schema_, references_, value);
        case "Ref":
          return FromRef(schema_, references_, value);
        case "This":
          return FromThis(schema_, references_, value);
        case "Tuple":
          return FromTuple(schema_, references_, value);
        case "Union":
          return FromUnion(schema_, references_, value);
        default:
          return Default(schema_, value);
      }
    }
    function TransformEncode(schema, references, value) {
      return Visit(schema, references, value);
    }
    exports.TransformEncode = TransformEncode;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/value/transform/has.js
var require_has = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/value/transform/has.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HasTransform = void 0;
    var index_1 = require_deref2();
    var index_2 = require_symbols2();
    var type_1 = require_type3();
    var index_3 = require_guard2();
    function FromArray(schema, references) {
      return (0, type_1.IsTransform)(schema) || Visit(schema.items, references);
    }
    function FromAsyncIterator(schema, references) {
      return (0, type_1.IsTransform)(schema) || Visit(schema.items, references);
    }
    function FromConstructor(schema, references) {
      return (0, type_1.IsTransform)(schema) || Visit(schema.returns, references) || schema.parameters.some((schema2) => Visit(schema2, references));
    }
    function FromFunction(schema, references) {
      return (0, type_1.IsTransform)(schema) || Visit(schema.returns, references) || schema.parameters.some((schema2) => Visit(schema2, references));
    }
    function FromIntersect(schema, references) {
      return (0, type_1.IsTransform)(schema) || (0, type_1.IsTransform)(schema.unevaluatedProperties) || schema.allOf.some((schema2) => Visit(schema2, references));
    }
    function FromIterator(schema, references) {
      return (0, type_1.IsTransform)(schema) || Visit(schema.items, references);
    }
    function FromNot(schema, references) {
      return (0, type_1.IsTransform)(schema) || Visit(schema.not, references);
    }
    function FromObject(schema, references) {
      return (0, type_1.IsTransform)(schema) || Object.values(schema.properties).some((schema2) => Visit(schema2, references)) || (0, type_1.IsSchema)(schema.additionalProperties) && Visit(schema.additionalProperties, references);
    }
    function FromPromise(schema, references) {
      return (0, type_1.IsTransform)(schema) || Visit(schema.item, references);
    }
    function FromRecord(schema, references) {
      const pattern = Object.getOwnPropertyNames(schema.patternProperties)[0];
      const property = schema.patternProperties[pattern];
      return (0, type_1.IsTransform)(schema) || Visit(property, references) || (0, type_1.IsSchema)(schema.additionalProperties) && (0, type_1.IsTransform)(schema.additionalProperties);
    }
    function FromRef(schema, references) {
      if ((0, type_1.IsTransform)(schema))
        return true;
      return Visit((0, index_1.Deref)(schema, references), references);
    }
    function FromThis(schema, references) {
      if ((0, type_1.IsTransform)(schema))
        return true;
      return Visit((0, index_1.Deref)(schema, references), references);
    }
    function FromTuple(schema, references) {
      return (0, type_1.IsTransform)(schema) || !(0, index_3.IsUndefined)(schema.items) && schema.items.some((schema2) => Visit(schema2, references));
    }
    function FromUnion(schema, references) {
      return (0, type_1.IsTransform)(schema) || schema.anyOf.some((schema2) => Visit(schema2, references));
    }
    function Visit(schema, references) {
      const references_ = (0, index_3.IsString)(schema.$id) ? [...references, schema] : references;
      const schema_ = schema;
      if (schema.$id && visited.has(schema.$id))
        return false;
      if (schema.$id)
        visited.add(schema.$id);
      switch (schema[index_2.Kind]) {
        case "Array":
          return FromArray(schema_, references_);
        case "AsyncIterator":
          return FromAsyncIterator(schema_, references_);
        case "Constructor":
          return FromConstructor(schema_, references_);
        case "Function":
          return FromFunction(schema_, references_);
        case "Intersect":
          return FromIntersect(schema_, references_);
        case "Iterator":
          return FromIterator(schema_, references_);
        case "Not":
          return FromNot(schema_, references_);
        case "Object":
          return FromObject(schema_, references_);
        case "Promise":
          return FromPromise(schema_, references_);
        case "Record":
          return FromRecord(schema_, references_);
        case "Ref":
          return FromRef(schema_, references_);
        case "This":
          return FromThis(schema_, references_);
        case "Tuple":
          return FromTuple(schema_, references_);
        case "Union":
          return FromUnion(schema_, references_);
        default:
          return (0, type_1.IsTransform)(schema);
      }
    }
    var visited = /* @__PURE__ */ new Set();
    function HasTransform(schema, references) {
      visited.clear();
      return Visit(schema, references);
    }
    exports.HasTransform = HasTransform;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/value/transform/index.js
var require_transform = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/value/transform/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_decode(), exports);
    __exportStar(require_encode(), exports);
    __exportStar(require_has(), exports);
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/value/value/value.js
var require_value3 = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/value/value/value.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Mutate = exports.Patch = exports.Hash = exports.Diff = exports.Equal = exports.Errors = exports.Encode = exports.Default = exports.Decode = exports.Clone = exports.Convert = exports.Clean = exports.Check = exports.Create = exports.Cast = void 0;
    var index_1 = require_transform();
    var index_2 = require_mutate2();
    var index_3 = require_hash2();
    var index_4 = require_equal2();
    var index_5 = require_cast2();
    var index_6 = require_clone2();
    var index_7 = require_convert2();
    var index_8 = require_create2();
    var index_9 = require_clean2();
    var index_10 = require_check2();
    var index_11 = require_default2();
    var index_12 = require_delta2();
    var index_13 = require_errors2();
    function Cast(...args) {
      return index_5.Cast.apply(index_5.Cast, args);
    }
    exports.Cast = Cast;
    function Create(...args) {
      return index_8.Create.apply(index_8.Create, args);
    }
    exports.Create = Create;
    function Check(...args) {
      return index_10.Check.apply(index_10.Check, args);
    }
    exports.Check = Check;
    function Clean(...args) {
      return index_9.Clean.apply(index_9.Clean, args);
    }
    exports.Clean = Clean;
    function Convert(...args) {
      return index_7.Convert.apply(index_7.Convert, args);
    }
    exports.Convert = Convert;
    function Clone(value) {
      return (0, index_6.Clone)(value);
    }
    exports.Clone = Clone;
    function Decode(...args) {
      const [schema, references, value] = args.length === 3 ? [args[0], args[1], args[2]] : [args[0], [], args[1]];
      if (!Check(schema, references, value))
        throw new index_1.TransformDecodeCheckError(schema, value, Errors(schema, references, value).First());
      return (0, index_1.TransformDecode)(schema, references, value);
    }
    exports.Decode = Decode;
    function Default(...args) {
      return index_11.Default.apply(index_11.Default, args);
    }
    exports.Default = Default;
    function Encode(...args) {
      const [schema, references, value] = args.length === 3 ? [args[0], args[1], args[2]] : [args[0], [], args[1]];
      const encoded = (0, index_1.TransformEncode)(schema, references, value);
      if (!Check(schema, references, encoded))
        throw new index_1.TransformEncodeCheckError(schema, value, Errors(schema, references, value).First());
      return encoded;
    }
    exports.Encode = Encode;
    function Errors(...args) {
      return index_13.Errors.apply(index_13.Errors, args);
    }
    exports.Errors = Errors;
    function Equal(left, right) {
      return (0, index_4.Equal)(left, right);
    }
    exports.Equal = Equal;
    function Diff(current, next) {
      return (0, index_12.Diff)(current, next);
    }
    exports.Diff = Diff;
    function Hash(value) {
      return (0, index_3.Hash)(value);
    }
    exports.Hash = Hash;
    function Patch(current, edits) {
      return (0, index_12.Patch)(current, edits);
    }
    exports.Patch = Patch;
    function Mutate(current, next) {
      (0, index_2.Mutate)(current, next);
    }
    exports.Mutate = Mutate;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/value/value/index.js
var require_value4 = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/value/value/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Value = void 0;
    exports.Value = require_value3();
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/value/index.js
var require_value5 = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/value/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.IsUndefined = exports.IsUint8Array = exports.IsTypedArray = exports.IsSymbol = exports.IsString = exports.IsPromise = exports.IsPlainObject = exports.IsObject = exports.IsNumber = exports.IsNull = exports.IsIterator = exports.IsInteger = exports.IsFunction = exports.IsDate = exports.IsBoolean = exports.IsBigInt = exports.IsAsyncIterator = exports.IsArray = exports.HasPropertyKey = exports.TransformEncodeError = exports.TransformEncodeCheckError = exports.TransformDecodeError = exports.TransformDecodeCheckError = exports.HasTransform = exports.TransformEncode = exports.TransformDecode = exports.ValuePointer = exports.ValueMutateError = exports.Mutate = exports.ValueHashError = exports.Hash = exports.Equal = exports.ValueDeltaError = exports.Update = exports.Insert = exports.Delete = exports.Edit = exports.Patch = exports.Diff = exports.Default = exports.ValueCreateError = exports.Create = exports.Convert = exports.Clone = exports.Clean = exports.Check = exports.ValueCastError = exports.Cast = exports.ValueErrorIterator = exports.ValueErrorType = void 0;
    exports.Value = exports.IsValueType = void 0;
    var index_1 = require_errors2();
    Object.defineProperty(exports, "ValueErrorType", { enumerable: true, get: function() {
      return index_1.ValueErrorType;
    } });
    Object.defineProperty(exports, "ValueErrorIterator", { enumerable: true, get: function() {
      return index_1.ValueErrorIterator;
    } });
    var index_2 = require_cast2();
    Object.defineProperty(exports, "Cast", { enumerable: true, get: function() {
      return index_2.Cast;
    } });
    Object.defineProperty(exports, "ValueCastError", { enumerable: true, get: function() {
      return index_2.ValueCastError;
    } });
    var index_3 = require_check2();
    Object.defineProperty(exports, "Check", { enumerable: true, get: function() {
      return index_3.Check;
    } });
    var index_4 = require_clean2();
    Object.defineProperty(exports, "Clean", { enumerable: true, get: function() {
      return index_4.Clean;
    } });
    var index_5 = require_clone2();
    Object.defineProperty(exports, "Clone", { enumerable: true, get: function() {
      return index_5.Clone;
    } });
    var index_6 = require_convert2();
    Object.defineProperty(exports, "Convert", { enumerable: true, get: function() {
      return index_6.Convert;
    } });
    var index_7 = require_create2();
    Object.defineProperty(exports, "Create", { enumerable: true, get: function() {
      return index_7.Create;
    } });
    Object.defineProperty(exports, "ValueCreateError", { enumerable: true, get: function() {
      return index_7.ValueCreateError;
    } });
    var index_8 = require_default2();
    Object.defineProperty(exports, "Default", { enumerable: true, get: function() {
      return index_8.Default;
    } });
    var index_9 = require_delta2();
    Object.defineProperty(exports, "Diff", { enumerable: true, get: function() {
      return index_9.Diff;
    } });
    Object.defineProperty(exports, "Patch", { enumerable: true, get: function() {
      return index_9.Patch;
    } });
    Object.defineProperty(exports, "Edit", { enumerable: true, get: function() {
      return index_9.Edit;
    } });
    Object.defineProperty(exports, "Delete", { enumerable: true, get: function() {
      return index_9.Delete;
    } });
    Object.defineProperty(exports, "Insert", { enumerable: true, get: function() {
      return index_9.Insert;
    } });
    Object.defineProperty(exports, "Update", { enumerable: true, get: function() {
      return index_9.Update;
    } });
    Object.defineProperty(exports, "ValueDeltaError", { enumerable: true, get: function() {
      return index_9.ValueDeltaError;
    } });
    var index_10 = require_equal2();
    Object.defineProperty(exports, "Equal", { enumerable: true, get: function() {
      return index_10.Equal;
    } });
    var index_11 = require_hash2();
    Object.defineProperty(exports, "Hash", { enumerable: true, get: function() {
      return index_11.Hash;
    } });
    Object.defineProperty(exports, "ValueHashError", { enumerable: true, get: function() {
      return index_11.ValueHashError;
    } });
    var index_12 = require_mutate2();
    Object.defineProperty(exports, "Mutate", { enumerable: true, get: function() {
      return index_12.Mutate;
    } });
    Object.defineProperty(exports, "ValueMutateError", { enumerable: true, get: function() {
      return index_12.ValueMutateError;
    } });
    var index_13 = require_pointer2();
    Object.defineProperty(exports, "ValuePointer", { enumerable: true, get: function() {
      return index_13.ValuePointer;
    } });
    var index_14 = require_transform();
    Object.defineProperty(exports, "TransformDecode", { enumerable: true, get: function() {
      return index_14.TransformDecode;
    } });
    Object.defineProperty(exports, "TransformEncode", { enumerable: true, get: function() {
      return index_14.TransformEncode;
    } });
    Object.defineProperty(exports, "HasTransform", { enumerable: true, get: function() {
      return index_14.HasTransform;
    } });
    Object.defineProperty(exports, "TransformDecodeCheckError", { enumerable: true, get: function() {
      return index_14.TransformDecodeCheckError;
    } });
    Object.defineProperty(exports, "TransformDecodeError", { enumerable: true, get: function() {
      return index_14.TransformDecodeError;
    } });
    Object.defineProperty(exports, "TransformEncodeCheckError", { enumerable: true, get: function() {
      return index_14.TransformEncodeCheckError;
    } });
    Object.defineProperty(exports, "TransformEncodeError", { enumerable: true, get: function() {
      return index_14.TransformEncodeError;
    } });
    var index_15 = require_guard2();
    Object.defineProperty(exports, "HasPropertyKey", { enumerable: true, get: function() {
      return index_15.HasPropertyKey;
    } });
    Object.defineProperty(exports, "IsArray", { enumerable: true, get: function() {
      return index_15.IsArray;
    } });
    Object.defineProperty(exports, "IsAsyncIterator", { enumerable: true, get: function() {
      return index_15.IsAsyncIterator;
    } });
    Object.defineProperty(exports, "IsBigInt", { enumerable: true, get: function() {
      return index_15.IsBigInt;
    } });
    Object.defineProperty(exports, "IsBoolean", { enumerable: true, get: function() {
      return index_15.IsBoolean;
    } });
    Object.defineProperty(exports, "IsDate", { enumerable: true, get: function() {
      return index_15.IsDate;
    } });
    Object.defineProperty(exports, "IsFunction", { enumerable: true, get: function() {
      return index_15.IsFunction;
    } });
    Object.defineProperty(exports, "IsInteger", { enumerable: true, get: function() {
      return index_15.IsInteger;
    } });
    Object.defineProperty(exports, "IsIterator", { enumerable: true, get: function() {
      return index_15.IsIterator;
    } });
    Object.defineProperty(exports, "IsNull", { enumerable: true, get: function() {
      return index_15.IsNull;
    } });
    Object.defineProperty(exports, "IsNumber", { enumerable: true, get: function() {
      return index_15.IsNumber;
    } });
    Object.defineProperty(exports, "IsObject", { enumerable: true, get: function() {
      return index_15.IsObject;
    } });
    Object.defineProperty(exports, "IsPlainObject", { enumerable: true, get: function() {
      return index_15.IsPlainObject;
    } });
    Object.defineProperty(exports, "IsPromise", { enumerable: true, get: function() {
      return index_15.IsPromise;
    } });
    Object.defineProperty(exports, "IsString", { enumerable: true, get: function() {
      return index_15.IsString;
    } });
    Object.defineProperty(exports, "IsSymbol", { enumerable: true, get: function() {
      return index_15.IsSymbol;
    } });
    Object.defineProperty(exports, "IsTypedArray", { enumerable: true, get: function() {
      return index_15.IsTypedArray;
    } });
    Object.defineProperty(exports, "IsUint8Array", { enumerable: true, get: function() {
      return index_15.IsUint8Array;
    } });
    Object.defineProperty(exports, "IsUndefined", { enumerable: true, get: function() {
      return index_15.IsUndefined;
    } });
    Object.defineProperty(exports, "IsValueType", { enumerable: true, get: function() {
      return index_15.IsValueType;
    } });
    var index_16 = require_value4();
    Object.defineProperty(exports, "Value", { enumerable: true, get: function() {
      return index_16.Value;
    } });
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/helpers/helpers.js
var require_helpers = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/helpers/helpers.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Increment = void 0;
    function Increment(T) {
      return (parseInt(T) + 1).toString();
    }
    exports.Increment = Increment;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/helpers/index.js
var require_helpers2 = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/helpers/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_helpers(), exports);
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/awaited/awaited.js
var require_awaited = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/awaited/awaited.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Awaited = void 0;
    var index_1 = require_intersect2();
    var index_2 = require_union2();
    var type_1 = require_type2();
    var type_2 = require_type3();
    function FromRest(T) {
      return T.map((L) => AwaitedResolve(L));
    }
    function FromIntersect(T) {
      return (0, index_1.Intersect)(FromRest(T));
    }
    function FromUnion(T) {
      return (0, index_2.Union)(FromRest(T));
    }
    function FromPromise(T) {
      return AwaitedResolve(T);
    }
    function AwaitedResolve(T) {
      return (0, type_2.IsIntersect)(T) ? FromIntersect(T.allOf) : (0, type_2.IsUnion)(T) ? FromUnion(T.anyOf) : (0, type_2.IsPromise)(T) ? FromPromise(T.item) : T;
    }
    function Awaited(T, options = {}) {
      return (0, type_1.CloneType)(AwaitedResolve(T), options);
    }
    exports.Awaited = Awaited;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/awaited/index.js
var require_awaited2 = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/awaited/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_awaited(), exports);
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/date/date.js
var require_date = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/date/date.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Date = void 0;
    var index_1 = require_symbols2();
    function Date2(options = {}) {
      return {
        ...options,
        [index_1.Kind]: "Date",
        type: "Date"
      };
    }
    exports.Date = Date2;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/date/index.js
var require_date2 = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/date/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_date(), exports);
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/null/null.js
var require_null = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/null/null.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Null = void 0;
    var index_1 = require_symbols2();
    function Null(options = {}) {
      return {
        ...options,
        [index_1.Kind]: "Null",
        type: "null"
      };
    }
    exports.Null = Null;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/null/index.js
var require_null2 = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/null/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_null(), exports);
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/symbol/symbol.js
var require_symbol = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/symbol/symbol.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Symbol = void 0;
    var index_1 = require_symbols2();
    function Symbol2(options) {
      return { ...options, [index_1.Kind]: "Symbol", type: "symbol" };
    }
    exports.Symbol = Symbol2;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/symbol/index.js
var require_symbol2 = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/symbol/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_symbol(), exports);
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/undefined/undefined.js
var require_undefined = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/undefined/undefined.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Undefined = void 0;
    var index_1 = require_symbols2();
    function Undefined(options = {}) {
      return { ...options, [index_1.Kind]: "Undefined", type: "undefined" };
    }
    exports.Undefined = Undefined;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/undefined/index.js
var require_undefined2 = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/undefined/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_undefined(), exports);
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/uint8array/uint8array.js
var require_uint8array = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/uint8array/uint8array.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Uint8Array = void 0;
    var index_1 = require_symbols2();
    function Uint8Array2(options = {}) {
      return { ...options, [index_1.Kind]: "Uint8Array", type: "Uint8Array" };
    }
    exports.Uint8Array = Uint8Array2;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/uint8array/index.js
var require_uint8array2 = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/uint8array/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_uint8array(), exports);
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/clone/index.js
var require_clone3 = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/clone/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ValueClone = exports.TypeClone = void 0;
    exports.TypeClone = require_type2();
    exports.ValueClone = require_value2();
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/const/const.js
var require_const = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/const/const.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Const = void 0;
    var index_1 = require_any2();
    var index_2 = require_bigint2();
    var index_3 = require_date2();
    var index_4 = require_function2();
    var index_5 = require_literal2();
    var index_6 = require_null2();
    var index_7 = require_object2();
    var index_8 = require_symbol2();
    var index_9 = require_tuple2();
    var index_10 = require_readonly2();
    var index_11 = require_undefined2();
    var index_12 = require_uint8array2();
    var index_13 = require_unknown2();
    var index_14 = require_clone3();
    var value_1 = require_value();
    function FromArray(T) {
      return T.map((L) => FromValue(L, false));
    }
    function FromProperties(value) {
      return globalThis.Object.getOwnPropertyNames(value).reduce((acc, key) => {
        return { ...acc, [key]: (0, index_10.Readonly)(FromValue(value[key], false)) };
      }, {});
    }
    function ConditionalReadonly(T, root) {
      return root === true ? T : (0, index_10.Readonly)(T);
    }
    function FromValue(value, root) {
      return (0, value_1.IsAsyncIterator)(value) ? ConditionalReadonly((0, index_1.Any)(), root) : (0, value_1.IsIterator)(value) ? ConditionalReadonly((0, index_1.Any)(), root) : (0, value_1.IsArray)(value) ? (0, index_10.Readonly)((0, index_9.Tuple)(FromArray(value))) : (0, value_1.IsUint8Array)(value) ? (0, index_12.Uint8Array)() : (0, value_1.IsDate)(value) ? (0, index_3.Date)() : (0, value_1.IsObject)(value) ? ConditionalReadonly((0, index_7.Object)(FromProperties(value)), root) : (0, value_1.IsFunction)(value) ? ConditionalReadonly((0, index_4.Function)([], (0, index_13.Unknown)()), root) : (0, value_1.IsUndefined)(value) ? (0, index_11.Undefined)() : (0, value_1.IsNull)(value) ? (0, index_6.Null)() : (0, value_1.IsSymbol)(value) ? (0, index_8.Symbol)() : (0, value_1.IsBigInt)(value) ? (0, index_2.BigInt)() : (0, value_1.IsNumber)(value) ? (0, index_5.Literal)(value) : (0, value_1.IsBoolean)(value) ? (0, index_5.Literal)(value) : (0, value_1.IsString)(value) ? (0, index_5.Literal)(value) : (0, index_7.Object)({});
    }
    function Const(T, options = {}) {
      return index_14.TypeClone.CloneType(FromValue(T, true), options);
    }
    exports.Const = Const;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/const/index.js
var require_const2 = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/const/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_const(), exports);
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/constructor-parameters/constructor-parameters.js
var require_constructor_parameters = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/constructor-parameters/constructor-parameters.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ConstructorParameters = void 0;
    var index_1 = require_tuple2();
    var type_1 = require_type2();
    function ConstructorParameters(schema, options = {}) {
      return (0, index_1.Tuple)((0, type_1.CloneRest)(schema.parameters), { ...options });
    }
    exports.ConstructorParameters = ConstructorParameters;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/constructor-parameters/index.js
var require_constructor_parameters2 = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/constructor-parameters/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_constructor_parameters(), exports);
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/deref/deref.js
var require_deref3 = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/deref/deref.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Deref = void 0;
    var type_1 = require_type2();
    var index_1 = require_discard2();
    var value_1 = require_value();
    var type_2 = require_type3();
    function FromRest(schema, references) {
      return schema.map((schema2) => Deref(schema2, references));
    }
    function FromProperties(properties, references) {
      return globalThis.Object.getOwnPropertyNames(properties).reduce((acc, key) => {
        return { ...acc, [key]: Deref(properties[key], references) };
      }, {});
    }
    function FromConstructor(schema, references) {
      schema.parameters = FromRest(schema.parameters, references);
      schema.returns = Deref(schema.returns, references);
      return schema;
    }
    function FromFunction(schema, references) {
      schema.parameters = FromRest(schema.parameters, references);
      schema.returns = Deref(schema.returns, references);
      return schema;
    }
    function FromIntersect(schema, references) {
      schema.allOf = FromRest(schema.allOf, references);
      return schema;
    }
    function FromUnion(schema, references) {
      schema.anyOf = FromRest(schema.anyOf, references);
      return schema;
    }
    function FromTuple(schema, references) {
      if ((0, value_1.IsUndefined)(schema.items))
        return schema;
      schema.items = FromRest(schema.items, references);
      return schema;
    }
    function FromArray(schema, references) {
      schema.items = Deref(schema.items, references);
      return schema;
    }
    function FromObject(schema, references) {
      schema.properties = FromProperties(schema.properties, references);
      return schema;
    }
    function FromPromise(schema, references) {
      schema.item = Deref(schema.item, references);
      return schema;
    }
    function FromAsyncIterator(schema, references) {
      schema.items = Deref(schema.items, references);
      return schema;
    }
    function FromIterator(schema, references) {
      schema.items = Deref(schema.items, references);
      return schema;
    }
    function FromRef(schema, references) {
      const target = references.find((remote) => remote.$id === schema.$ref);
      if (target === void 0)
        throw Error(`Unable to dereference schema with $id ${schema.$ref}`);
      const discard = (0, index_1.Discard)(target, ["$id"]);
      return Deref(discard, references);
    }
    function DerefResolve(schema, references) {
      return (0, type_2.IsConstructor)(schema) ? FromConstructor(schema, references) : (0, type_2.IsFunction)(schema) ? FromFunction(schema, references) : (0, type_2.IsIntersect)(schema) ? FromIntersect(schema, references) : (0, type_2.IsUnion)(schema) ? FromUnion(schema, references) : (0, type_2.IsTuple)(schema) ? FromTuple(schema, references) : (0, type_2.IsArray)(schema) ? FromArray(schema, references) : (0, type_2.IsObject)(schema) ? FromObject(schema, references) : (0, type_2.IsPromise)(schema) ? FromPromise(schema, references) : (0, type_2.IsAsyncIterator)(schema) ? FromAsyncIterator(schema, references) : (0, type_2.IsIterator)(schema) ? FromIterator(schema, references) : (0, type_2.IsRef)(schema) ? FromRef(schema, references) : schema;
    }
    function Deref(schema, references) {
      return DerefResolve((0, type_1.CloneType)(schema), (0, type_1.CloneRest)(references));
    }
    exports.Deref = Deref;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/deref/index.js
var require_deref4 = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/deref/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_deref3(), exports);
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/enum/enum.js
var require_enum = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/enum/enum.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Enum = void 0;
    var index_1 = require_literal2();
    var index_2 = require_symbols2();
    var index_3 = require_union2();
    var value_1 = require_value();
    function Enum(item, options = {}) {
      if ((0, value_1.IsUndefined)(item))
        throw new Error("Enum undefined or empty");
      const values1 = globalThis.Object.getOwnPropertyNames(item).filter((key) => isNaN(key)).map((key) => item[key]);
      const values2 = [...new Set(values1)];
      const anyOf = values2.map((value) => (0, index_1.Literal)(value));
      return (0, index_3.Union)(anyOf, { ...options, [index_2.Hint]: "Enum" });
    }
    exports.Enum = Enum;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/enum/index.js
var require_enum2 = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/enum/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_enum(), exports);
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/exclude/exclude.js
var require_exclude = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/exclude/exclude.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Exclude = void 0;
    var index_1 = require_template_literal2();
    var index_2 = require_union2();
    var index_3 = require_never2();
    var index_4 = require_extends2();
    var type_1 = require_type2();
    var exclude_from_mapped_result_1 = require_exclude_from_mapped_result();
    var type_2 = require_type3();
    function ExcludeRest(L, R) {
      const excluded = L.filter((inner) => (0, index_4.ExtendsCheck)(inner, R) === index_4.ExtendsResult.False);
      return excluded.length === 1 ? excluded[0] : (0, index_2.Union)(excluded);
    }
    function Exclude(L, R, options = {}) {
      return (0, type_1.CloneType)((0, type_2.IsMappedResult)(L) ? (0, exclude_from_mapped_result_1.ExcludeFromMappedResult)(L, R, options) : (0, type_2.IsTemplateLiteral)(L) ? Exclude((0, index_1.TemplateLiteralToUnion)(L), R) : (0, type_2.IsTemplateLiteral)(R) ? Exclude(L, (0, index_1.TemplateLiteralToUnion)(R)) : (0, type_2.IsUnion)(L) ? ExcludeRest(L.anyOf, R) : (0, index_4.ExtendsCheck)(L, R) !== index_4.ExtendsResult.False ? (0, index_3.Never)() : L, options);
    }
    exports.Exclude = Exclude;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/exclude/exclude-from-mapped-result.js
var require_exclude_from_mapped_result = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/exclude/exclude-from-mapped-result.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ExcludeFromMappedResult = void 0;
    var index_1 = require_mapped2();
    var exclude_1 = require_exclude();
    function FromProperties(P, U, options) {
      return globalThis.Object.getOwnPropertyNames(P).reduce((Acc, K2) => {
        return { ...Acc, [K2]: (0, exclude_1.Exclude)(P[K2], U, options) };
      }, {});
    }
    function FromMappedResult(R, T, options) {
      return FromProperties(R.properties, T, options);
    }
    function ExcludeFromMappedResult(R, T, options) {
      const P = FromMappedResult(R, T, options);
      return (0, index_1.MappedResult)(P);
    }
    exports.ExcludeFromMappedResult = ExcludeFromMappedResult;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/exclude/index.js
var require_exclude2 = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/exclude/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_exclude_from_mapped_result(), exports);
    __exportStar(require_exclude(), exports);
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/extract/extract.js
var require_extract = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/extract/extract.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Extract = void 0;
    var index_1 = require_template_literal2();
    var index_2 = require_union2();
    var index_3 = require_never2();
    var index_4 = require_extends2();
    var type_1 = require_type2();
    var extract_from_mapped_result_1 = require_extract_from_mapped_result();
    var type_2 = require_type3();
    function ExtractRest(L, R) {
      const extracted = L.filter((inner) => (0, index_4.ExtendsCheck)(inner, R) !== index_4.ExtendsResult.False);
      return extracted.length === 1 ? extracted[0] : (0, index_2.Union)(extracted);
    }
    function Extract(L, R, options = {}) {
      return (0, type_1.CloneType)((0, type_2.IsMappedResult)(L) ? (0, extract_from_mapped_result_1.ExtractFromMappedResult)(L, R, options) : (0, type_2.IsTemplateLiteral)(L) ? Extract((0, index_1.TemplateLiteralToUnion)(L), R) : (0, type_2.IsTemplateLiteral)(R) ? Extract(L, (0, index_1.TemplateLiteralToUnion)(R)) : (0, type_2.IsUnion)(L) ? ExtractRest(L.anyOf, R) : (0, index_4.ExtendsCheck)(L, R) !== index_4.ExtendsResult.False ? L : (0, index_3.Never)(), options);
    }
    exports.Extract = Extract;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/extract/extract-from-mapped-result.js
var require_extract_from_mapped_result = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/extract/extract-from-mapped-result.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ExtractFromMappedResult = void 0;
    var index_1 = require_mapped2();
    var extract_1 = require_extract();
    function FromProperties(P, T, options) {
      return globalThis.Object.getOwnPropertyNames(P).reduce((Acc, K2) => {
        return { ...Acc, [K2]: (0, extract_1.Extract)(P[K2], T, options) };
      }, {});
    }
    function FromMappedResult(R, T, options) {
      return FromProperties(R.properties, T, options);
    }
    function ExtractFromMappedResult(R, T, options) {
      const P = FromMappedResult(R, T, options);
      return (0, index_1.MappedResult)(P);
    }
    exports.ExtractFromMappedResult = ExtractFromMappedResult;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/extract/index.js
var require_extract2 = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/extract/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_extract_from_mapped_result(), exports);
    __exportStar(require_extract(), exports);
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/instance-type/instance-type.js
var require_instance_type = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/instance-type/instance-type.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.InstanceType = void 0;
    var type_1 = require_type2();
    function InstanceType(schema, options = {}) {
      return (0, type_1.CloneType)(schema.returns, options);
    }
    exports.InstanceType = InstanceType;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/instance-type/index.js
var require_instance_type2 = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/instance-type/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_instance_type(), exports);
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/integer/integer.js
var require_integer = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/integer/integer.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Integer = void 0;
    var index_1 = require_symbols2();
    function Integer(options = {}) {
      return {
        ...options,
        [index_1.Kind]: "Integer",
        type: "integer"
      };
    }
    exports.Integer = Integer;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/integer/index.js
var require_integer2 = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/integer/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_integer(), exports);
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/intrinsic/intrinsic-from-mapped-key.js
var require_intrinsic_from_mapped_key = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/intrinsic/intrinsic-from-mapped-key.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.IntrinsicFromMappedKey = void 0;
    var index_1 = require_mapped2();
    var intrinsic_1 = require_intrinsic();
    var index_2 = require_literal2();
    function MappedIntrinsicPropertyKey(K, M, options) {
      return {
        [K]: (0, intrinsic_1.Intrinsic)((0, index_2.Literal)(K), M, options)
      };
    }
    function MappedIntrinsicPropertyKeys(K, M, options) {
      return K.reduce((Acc, L) => {
        return { ...Acc, ...MappedIntrinsicPropertyKey(L, M, options) };
      }, {});
    }
    function MappedIntrinsicProperties(T, M, options) {
      return MappedIntrinsicPropertyKeys(T["keys"], M, options);
    }
    function IntrinsicFromMappedKey(T, M, options) {
      const P = MappedIntrinsicProperties(T, M, options);
      return (0, index_1.MappedResult)(P);
    }
    exports.IntrinsicFromMappedKey = IntrinsicFromMappedKey;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/intrinsic/intrinsic.js
var require_intrinsic = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/intrinsic/intrinsic.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Intrinsic = void 0;
    var index_1 = require_template_literal2();
    var intrinsic_from_mapped_key_1 = require_intrinsic_from_mapped_key();
    var index_2 = require_literal2();
    var index_3 = require_union2();
    var type_1 = require_type3();
    function ApplyUncapitalize(value) {
      const [first, rest] = [value.slice(0, 1), value.slice(1)];
      return [first.toLowerCase(), rest].join("");
    }
    function ApplyCapitalize(value) {
      const [first, rest] = [value.slice(0, 1), value.slice(1)];
      return [first.toUpperCase(), rest].join("");
    }
    function ApplyUppercase(value) {
      return value.toUpperCase();
    }
    function ApplyLowercase(value) {
      return value.toLowerCase();
    }
    function FromTemplateLiteral(schema, mode, options) {
      const expression = (0, index_1.TemplateLiteralParseExact)(schema.pattern);
      const finite = (0, index_1.IsTemplateLiteralExpressionFinite)(expression);
      if (!finite)
        return { ...schema, pattern: FromLiteralValue(schema.pattern, mode) };
      const strings = [...(0, index_1.TemplateLiteralExpressionGenerate)(expression)];
      const literals = strings.map((value) => (0, index_2.Literal)(value));
      const mapped = FromRest(literals, mode);
      const union = (0, index_3.Union)(mapped);
      return (0, index_1.TemplateLiteral)([union], options);
    }
    function FromLiteralValue(value, mode) {
      return typeof value === "string" ? mode === "Uncapitalize" ? ApplyUncapitalize(value) : mode === "Capitalize" ? ApplyCapitalize(value) : mode === "Uppercase" ? ApplyUppercase(value) : mode === "Lowercase" ? ApplyLowercase(value) : value : value.toString();
    }
    function FromRest(T, M) {
      return T.map((L) => Intrinsic(L, M));
    }
    function Intrinsic(schema, mode, options = {}) {
      return (
        // Intrinsic-Mapped-Inference
        (0, type_1.IsMappedKey)(schema) ? (0, intrinsic_from_mapped_key_1.IntrinsicFromMappedKey)(schema, mode, options) : (
          // Standard-Inference
          (0, type_1.IsTemplateLiteral)(schema) ? FromTemplateLiteral(schema, mode, schema) : (0, type_1.IsUnion)(schema) ? (0, index_3.Union)(FromRest(schema.anyOf, mode), options) : (0, type_1.IsLiteral)(schema) ? (0, index_2.Literal)(FromLiteralValue(schema.const, mode), options) : schema
        )
      );
    }
    exports.Intrinsic = Intrinsic;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/intrinsic/capitalize.js
var require_capitalize = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/intrinsic/capitalize.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Capitalize = void 0;
    var intrinsic_1 = require_intrinsic();
    function Capitalize(T, options = {}) {
      return (0, intrinsic_1.Intrinsic)(T, "Capitalize", options);
    }
    exports.Capitalize = Capitalize;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/intrinsic/lowercase.js
var require_lowercase = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/intrinsic/lowercase.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Lowercase = void 0;
    var intrinsic_1 = require_intrinsic();
    function Lowercase(T, options = {}) {
      return (0, intrinsic_1.Intrinsic)(T, "Lowercase", options);
    }
    exports.Lowercase = Lowercase;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/intrinsic/uncapitalize.js
var require_uncapitalize = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/intrinsic/uncapitalize.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Uncapitalize = void 0;
    var intrinsic_1 = require_intrinsic();
    function Uncapitalize(T, options = {}) {
      return (0, intrinsic_1.Intrinsic)(T, "Uncapitalize", options);
    }
    exports.Uncapitalize = Uncapitalize;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/intrinsic/uppercase.js
var require_uppercase = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/intrinsic/uppercase.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Uppercase = void 0;
    var intrinsic_1 = require_intrinsic();
    function Uppercase(T, options = {}) {
      return (0, intrinsic_1.Intrinsic)(T, "Uppercase", options);
    }
    exports.Uppercase = Uppercase;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/intrinsic/index.js
var require_intrinsic2 = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/intrinsic/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_capitalize(), exports);
    __exportStar(require_intrinsic_from_mapped_key(), exports);
    __exportStar(require_intrinsic(), exports);
    __exportStar(require_lowercase(), exports);
    __exportStar(require_uncapitalize(), exports);
    __exportStar(require_uppercase(), exports);
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/not/not.js
var require_not = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/not/not.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Not = void 0;
    var type_1 = require_type2();
    var index_1 = require_symbols2();
    function Not(schema, options) {
      return {
        ...options,
        [index_1.Kind]: "Not",
        not: (0, type_1.CloneType)(schema)
      };
    }
    exports.Not = Not;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/not/index.js
var require_not2 = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/not/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_not(), exports);
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/omit/omit-from-mapped-result.js
var require_omit_from_mapped_result = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/omit/omit-from-mapped-result.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OmitFromMappedResult = void 0;
    var index_1 = require_mapped2();
    var omit_1 = require_omit();
    function FromProperties(P, K, options) {
      return globalThis.Object.getOwnPropertyNames(P).reduce((Acc, K2) => {
        return { ...Acc, [K2]: (0, omit_1.Omit)(P[K2], K, options) };
      }, {});
    }
    function FromMappedResult(R, K, options) {
      return FromProperties(R.properties, K, options);
    }
    function OmitFromMappedResult(R, K, options) {
      const P = FromMappedResult(R, K, options);
      return (0, index_1.MappedResult)(P);
    }
    exports.OmitFromMappedResult = OmitFromMappedResult;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/omit/omit.js
var require_omit = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/omit/omit.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Omit = void 0;
    var index_1 = require_intersect2();
    var index_2 = require_union2();
    var index_3 = require_object2();
    var index_4 = require_indexed2();
    var index_5 = require_discard2();
    var index_6 = require_symbols2();
    var type_1 = require_type2();
    var omit_from_mapped_key_1 = require_omit_from_mapped_key();
    var omit_from_mapped_result_1 = require_omit_from_mapped_result();
    var type_2 = require_type3();
    function FromIntersect(T, K) {
      return T.map((T2) => OmitResolve(T2, K));
    }
    function FromUnion(T, K) {
      return T.map((T2) => OmitResolve(T2, K));
    }
    function FromProperty(T, K) {
      const { [K]: _, ...R } = T;
      return R;
    }
    function FromProperties(T, K) {
      return K.reduce((T2, K2) => {
        return FromProperty(T2, K2);
      }, T);
    }
    function OmitResolve(T, K) {
      return (0, type_2.IsIntersect)(T) ? (0, index_1.Intersect)(FromIntersect(T.allOf, K)) : (0, type_2.IsUnion)(T) ? (0, index_2.Union)(FromUnion(T.anyOf, K)) : (0, type_2.IsObject)(T) ? (0, index_3.Object)(FromProperties(T.properties, K)) : (0, index_3.Object)({});
    }
    function Omit(T, K, options = {}) {
      if ((0, type_2.IsMappedKey)(K))
        return (0, omit_from_mapped_key_1.OmitFromMappedKey)(T, K, options);
      if ((0, type_2.IsMappedResult)(T))
        return (0, omit_from_mapped_result_1.OmitFromMappedResult)(T, K, options);
      const I = (0, type_2.IsSchema)(K) ? (0, index_4.IndexPropertyKeys)(K) : K;
      const D = (0, index_5.Discard)(T, [index_6.TransformKind, "$id", "required"]);
      const R = (0, type_1.CloneType)(OmitResolve(T, I), options);
      return { ...D, ...R };
    }
    exports.Omit = Omit;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/omit/omit-from-mapped-key.js
var require_omit_from_mapped_key = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/omit/omit-from-mapped-key.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OmitFromMappedKey = void 0;
    var index_1 = require_mapped2();
    var omit_1 = require_omit();
    function FromPropertyKey(T, K, options) {
      return {
        [K]: (0, omit_1.Omit)(T, [K], options)
      };
    }
    function FromPropertyKeys(T, K, options) {
      return K.reduce((Acc, LK) => {
        return { ...Acc, ...FromPropertyKey(T, LK, options) };
      }, {});
    }
    function FromMappedKey(T, K, options) {
      return FromPropertyKeys(T, K.keys, options);
    }
    function OmitFromMappedKey(T, K, options) {
      const P = FromMappedKey(T, K, options);
      return (0, index_1.MappedResult)(P);
    }
    exports.OmitFromMappedKey = OmitFromMappedKey;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/omit/index.js
var require_omit2 = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/omit/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_omit_from_mapped_key(), exports);
    __exportStar(require_omit_from_mapped_result(), exports);
    __exportStar(require_omit(), exports);
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/parameters/parameters.js
var require_parameters = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/parameters/parameters.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Parameters = void 0;
    var index_1 = require_tuple2();
    var type_1 = require_type2();
    function Parameters(schema, options = {}) {
      return (0, index_1.Tuple)((0, type_1.CloneRest)(schema.parameters), { ...options });
    }
    exports.Parameters = Parameters;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/parameters/index.js
var require_parameters2 = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/parameters/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_parameters(), exports);
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/partial/partial.js
var require_partial = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/partial/partial.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Partial = void 0;
    var index_1 = require_optional2();
    var index_2 = require_object2();
    var index_3 = require_intersect2();
    var index_4 = require_union2();
    var index_5 = require_discard2();
    var index_6 = require_symbols2();
    var type_1 = require_type2();
    var partial_from_mapped_result_1 = require_partial_from_mapped_result();
    var type_2 = require_type3();
    function FromRest(T) {
      return T.map((L) => PartialResolve(L));
    }
    function FromProperties(T) {
      return globalThis.Object.getOwnPropertyNames(T).reduce((Acc, K) => {
        return { ...Acc, [K]: (0, index_1.Optional)(T[K]) };
      }, {});
    }
    function PartialResolve(T) {
      return (0, type_2.IsIntersect)(T) ? (0, index_3.Intersect)(FromRest(T.allOf)) : (0, type_2.IsUnion)(T) ? (0, index_4.Union)(FromRest(T.anyOf)) : (0, type_2.IsObject)(T) ? (0, index_2.Object)(FromProperties(T.properties)) : (0, index_2.Object)({});
    }
    function Partial(T, options = {}) {
      if ((0, type_2.IsMappedResult)(T))
        return (0, partial_from_mapped_result_1.PartialFromMappedResult)(T, options);
      const D = (0, index_5.Discard)(T, [index_6.TransformKind, "$id", "required"]);
      const R = (0, type_1.CloneType)(PartialResolve(T), options);
      return { ...D, ...R };
    }
    exports.Partial = Partial;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/partial/partial-from-mapped-result.js
var require_partial_from_mapped_result = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/partial/partial-from-mapped-result.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PartialFromMappedResult = void 0;
    var index_1 = require_mapped2();
    var partial_1 = require_partial();
    function FromProperties(K, options) {
      return globalThis.Object.getOwnPropertyNames(K).reduce((Acc, K2) => {
        return { ...Acc, [K2]: (0, partial_1.Partial)(K[K2], options) };
      }, {});
    }
    function FromMappedResult(R, options) {
      return FromProperties(R.properties, options);
    }
    function PartialFromMappedResult(R, options) {
      const P = FromMappedResult(R, options);
      return (0, index_1.MappedResult)(P);
    }
    exports.PartialFromMappedResult = PartialFromMappedResult;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/partial/index.js
var require_partial2 = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/partial/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_partial_from_mapped_result(), exports);
    __exportStar(require_partial(), exports);
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/pick/pick-from-mapped-result.js
var require_pick_from_mapped_result = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/pick/pick-from-mapped-result.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PickFromMappedResult = void 0;
    var index_1 = require_mapped2();
    var pick_1 = require_pick();
    function FromProperties(P, K, options) {
      return globalThis.Object.getOwnPropertyNames(P).reduce((Acc, K2) => {
        return { ...Acc, [K2]: (0, pick_1.Pick)(P[K2], K, options) };
      }, {});
    }
    function FromMappedResult(R, K, options) {
      return FromProperties(R.properties, K, options);
    }
    function PickFromMappedResult(R, K, options) {
      const P = FromMappedResult(R, K, options);
      return (0, index_1.MappedResult)(P);
    }
    exports.PickFromMappedResult = PickFromMappedResult;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/pick/pick.js
var require_pick = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/pick/pick.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Pick = void 0;
    var index_1 = require_intersect2();
    var index_2 = require_union2();
    var index_3 = require_object2();
    var index_4 = require_indexed2();
    var index_5 = require_discard2();
    var index_6 = require_symbols2();
    var type_1 = require_type2();
    var pick_from_mapped_key_1 = require_pick_from_mapped_key();
    var pick_from_mapped_result_1 = require_pick_from_mapped_result();
    var type_2 = require_type3();
    function FromIntersect(T, K) {
      return T.map((T2) => PickResolve(T2, K));
    }
    function FromUnion(T, K) {
      return T.map((T2) => PickResolve(T2, K));
    }
    function FromProperties(T, K) {
      return K.reduce((Acc, K2) => {
        return K2 in T ? { ...Acc, [K2]: T[K2] } : Acc;
      }, {});
    }
    function PickResolve(T, K) {
      return (0, type_2.IsIntersect)(T) ? (0, index_1.Intersect)(FromIntersect(T.allOf, K)) : (0, type_2.IsUnion)(T) ? (0, index_2.Union)(FromUnion(T.anyOf, K)) : (0, type_2.IsObject)(T) ? (0, index_3.Object)(FromProperties(T.properties, K)) : (0, index_3.Object)({});
    }
    function Pick(T, K, options = {}) {
      if ((0, type_2.IsMappedKey)(K))
        return (0, pick_from_mapped_key_1.PickFromMappedKey)(T, K, options);
      if ((0, type_2.IsMappedResult)(T))
        return (0, pick_from_mapped_result_1.PickFromMappedResult)(T, K, options);
      const I = (0, type_2.IsSchema)(K) ? (0, index_4.IndexPropertyKeys)(K) : K;
      const D = (0, index_5.Discard)(T, [index_6.TransformKind, "$id", "required"]);
      const R = (0, type_1.CloneType)(PickResolve(T, I), options);
      return { ...D, ...R };
    }
    exports.Pick = Pick;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/pick/pick-from-mapped-key.js
var require_pick_from_mapped_key = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/pick/pick-from-mapped-key.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PickFromMappedKey = void 0;
    var index_1 = require_mapped2();
    var pick_1 = require_pick();
    function FromPropertyKey(T, K, options) {
      return {
        [K]: (0, pick_1.Pick)(T, [K], options)
      };
    }
    function FromPropertyKeys(T, K, options) {
      return K.reduce((Acc, LK) => {
        return { ...Acc, ...FromPropertyKey(T, LK, options) };
      }, {});
    }
    function FromMappedKey(T, K, options) {
      return FromPropertyKeys(T, K.keys, options);
    }
    function PickFromMappedKey(T, K, options) {
      const P = FromMappedKey(T, K, options);
      return (0, index_1.MappedResult)(P);
    }
    exports.PickFromMappedKey = PickFromMappedKey;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/pick/index.js
var require_pick2 = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/pick/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_pick_from_mapped_key(), exports);
    __exportStar(require_pick_from_mapped_result(), exports);
    __exportStar(require_pick(), exports);
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/readonly-optional/readonly-optional.js
var require_readonly_optional = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/readonly-optional/readonly-optional.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ReadonlyOptional = void 0;
    var index_1 = require_readonly2();
    var index_2 = require_optional2();
    function ReadonlyOptional(schema) {
      return (0, index_1.Readonly)((0, index_2.Optional)(schema));
    }
    exports.ReadonlyOptional = ReadonlyOptional;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/readonly-optional/index.js
var require_readonly_optional2 = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/readonly-optional/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_readonly_optional(), exports);
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/record/record.js
var require_record = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/record/record.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Record = void 0;
    var index_1 = require_object2();
    var index_2 = require_never2();
    var index_3 = require_union2();
    var index_4 = require_template_literal2();
    var index_5 = require_patterns2();
    var index_6 = require_indexed2();
    var index_7 = require_symbols2();
    var type_1 = require_type2();
    var value_1 = require_value();
    var type_2 = require_type3();
    function RecordCreateFromPattern(pattern, T, options) {
      return {
        ...options,
        [index_7.Kind]: "Record",
        type: "object",
        patternProperties: { [pattern]: (0, type_1.CloneType)(T) }
      };
    }
    function RecordCreateFromKeys(K, T, options) {
      const P = K.reduce((Acc, K2) => ({ ...Acc, [K2]: (0, type_1.CloneType)(T) }), {});
      return (0, index_1.Object)(P, { ...options, [index_7.Hint]: "Record" });
    }
    function FromTemplateLiteralKey(K, T, options) {
      return (0, index_4.IsTemplateLiteralFinite)(K) ? RecordCreateFromKeys((0, index_6.IndexPropertyKeys)(K), T, options) : RecordCreateFromPattern(K.pattern, T, options);
    }
    function FromUnionKey(K, T, options) {
      return RecordCreateFromKeys((0, index_6.IndexPropertyKeys)((0, index_3.Union)(K)), T, options);
    }
    function FromLiteralKey(K, T, options) {
      return RecordCreateFromKeys([K.toString()], T, options);
    }
    function FromRegExpKey(K, T, options) {
      return RecordCreateFromPattern(K.source, T, options);
    }
    function FromStringKey(K, T, options) {
      const pattern = (0, value_1.IsUndefined)(K.pattern) ? index_5.PatternStringExact : K.pattern;
      return RecordCreateFromPattern(pattern, T, options);
    }
    function FromIntegerKey(_, T, options) {
      return RecordCreateFromPattern(index_5.PatternNumberExact, T, options);
    }
    function FromNumberKey(_, T, options) {
      return RecordCreateFromPattern(index_5.PatternNumberExact, T, options);
    }
    function Record(K, T, options = {}) {
      return (0, type_2.IsUnion)(K) ? FromUnionKey(K.anyOf, T, options) : (0, type_2.IsTemplateLiteral)(K) ? FromTemplateLiteralKey(K, T, options) : (0, type_2.IsLiteral)(K) ? FromLiteralKey(K.const, T, options) : (0, type_2.IsInteger)(K) ? FromIntegerKey(K, T, options) : (0, type_2.IsNumber)(K) ? FromNumberKey(K, T, options) : (0, type_2.IsRegExp)(K) ? FromRegExpKey(K, T, options) : (0, type_2.IsString)(K) ? FromStringKey(K, T, options) : (0, index_2.Never)(options);
    }
    exports.Record = Record;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/record/index.js
var require_record2 = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/record/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_record(), exports);
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/recursive/recursive.js
var require_recursive = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/recursive/recursive.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Recursive = void 0;
    var type_1 = require_type2();
    var value_1 = require_value();
    var index_1 = require_symbols2();
    var Ordinal = 0;
    function Recursive(callback, options = {}) {
      if ((0, value_1.IsUndefined)(options.$id))
        options.$id = `T${Ordinal++}`;
      const thisType = callback({ [index_1.Kind]: "This", $ref: `${options.$id}` });
      thisType.$id = options.$id;
      return (0, type_1.CloneType)({ ...options, [index_1.Hint]: "Recursive", ...thisType });
    }
    exports.Recursive = Recursive;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/recursive/index.js
var require_recursive2 = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/recursive/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_recursive(), exports);
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/ref/ref.js
var require_ref = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/ref/ref.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Ref = void 0;
    var index_1 = require_symbols2();
    var value_1 = require_value();
    function Ref(unresolved, options = {}) {
      if ((0, value_1.IsString)(unresolved))
        return { ...options, [index_1.Kind]: "Ref", $ref: unresolved };
      if ((0, value_1.IsUndefined)(unresolved.$id))
        throw new Error("Reference target type must specify an $id");
      return {
        ...options,
        [index_1.Kind]: "Ref",
        $ref: unresolved.$id
      };
    }
    exports.Ref = Ref;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/ref/index.js
var require_ref2 = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/ref/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_ref(), exports);
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/regexp/regexp.js
var require_regexp = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/regexp/regexp.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RegExp = void 0;
    var value_1 = require_value();
    var index_1 = require_symbols2();
    function RegExp2(unresolved, options = {}) {
      const expr = (0, value_1.IsString)(unresolved) ? new globalThis.RegExp(unresolved) : unresolved;
      return { ...options, [index_1.Kind]: "RegExp", type: "RegExp", source: expr.source, flags: expr.flags };
    }
    exports.RegExp = RegExp2;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/regexp/index.js
var require_regexp2 = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/regexp/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_regexp(), exports);
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/required/required.js
var require_required = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/required/required.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Required = void 0;
    var index_1 = require_intersect2();
    var index_2 = require_union2();
    var index_3 = require_object2();
    var index_4 = require_symbols2();
    var type_1 = require_type2();
    var index_5 = require_discard2();
    var required_from_mapped_result_1 = require_required_from_mapped_result();
    var type_2 = require_type3();
    function FromRest(T) {
      return T.map((L) => RequiredResolve(L));
    }
    function FromProperties(T) {
      return globalThis.Object.getOwnPropertyNames(T).reduce((Acc, K) => {
        return { ...Acc, [K]: (0, index_5.Discard)(T[K], [index_4.OptionalKind]) };
      }, {});
    }
    function RequiredResolve(T) {
      return (0, type_2.IsIntersect)(T) ? (0, index_1.Intersect)(FromRest(T.allOf)) : (0, type_2.IsUnion)(T) ? (0, index_2.Union)(FromRest(T.anyOf)) : (0, type_2.IsObject)(T) ? (0, index_3.Object)(FromProperties(T.properties)) : (0, index_3.Object)({});
    }
    function Required(T, options = {}) {
      if ((0, type_2.IsMappedResult)(T)) {
        return (0, required_from_mapped_result_1.RequiredFromMappedResult)(T, options);
      } else {
        const D = (0, index_5.Discard)(T, [index_4.TransformKind, "$id", "required"]);
        const R = (0, type_1.CloneType)(RequiredResolve(T), options);
        return { ...D, ...R };
      }
    }
    exports.Required = Required;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/required/required-from-mapped-result.js
var require_required_from_mapped_result = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/required/required-from-mapped-result.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RequiredFromMappedResult = void 0;
    var index_1 = require_mapped2();
    var required_1 = require_required();
    function FromProperties(P, options) {
      return globalThis.Object.getOwnPropertyNames(P).reduce((Acc, K2) => {
        return { ...Acc, [K2]: (0, required_1.Required)(P[K2], options) };
      }, {});
    }
    function FromMappedResult(R, options) {
      return FromProperties(R.properties, options);
    }
    function RequiredFromMappedResult(R, options) {
      const P = FromMappedResult(R, options);
      return (0, index_1.MappedResult)(P);
    }
    exports.RequiredFromMappedResult = RequiredFromMappedResult;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/required/index.js
var require_required2 = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/required/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_required_from_mapped_result(), exports);
    __exportStar(require_required(), exports);
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/rest/rest.js
var require_rest = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/rest/rest.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Rest = void 0;
    var type_1 = require_type2();
    var type_2 = require_type3();
    function RestResolve(T) {
      return (0, type_2.IsIntersect)(T) ? [...T.allOf] : (0, type_2.IsUnion)(T) ? [...T.anyOf] : (0, type_2.IsTuple)(T) ? [...T.items ?? []] : [];
    }
    function Rest(T) {
      return (0, type_1.CloneRest)(RestResolve(T));
    }
    exports.Rest = Rest;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/rest/index.js
var require_rest2 = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/rest/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_rest(), exports);
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/return-type/return-type.js
var require_return_type = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/return-type/return-type.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ReturnType = void 0;
    var type_1 = require_type2();
    function ReturnType(schema, options = {}) {
      return (0, type_1.CloneType)(schema.returns, options);
    }
    exports.ReturnType = ReturnType;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/return-type/index.js
var require_return_type2 = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/return-type/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_return_type(), exports);
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/strict/strict.js
var require_strict = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/strict/strict.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Strict = void 0;
    function Strict(schema) {
      return JSON.parse(JSON.stringify(schema));
    }
    exports.Strict = Strict;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/strict/index.js
var require_strict2 = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/strict/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_strict(), exports);
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/transform/transform.js
var require_transform2 = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/transform/transform.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Transform = exports.TransformEncodeBuilder = exports.TransformDecodeBuilder = void 0;
    var index_1 = require_symbols2();
    var type_1 = require_type2();
    var type_2 = require_type3();
    var TransformDecodeBuilder = class {
      constructor(schema) {
        this.schema = schema;
      }
      Decode(decode) {
        return new TransformEncodeBuilder(this.schema, decode);
      }
    };
    exports.TransformDecodeBuilder = TransformDecodeBuilder;
    var TransformEncodeBuilder = class {
      constructor(schema, decode) {
        this.schema = schema;
        this.decode = decode;
      }
      EncodeTransform(encode, schema) {
        const Encode = (value) => schema[index_1.TransformKind].Encode(encode(value));
        const Decode = (value) => this.decode(schema[index_1.TransformKind].Decode(value));
        const Codec = { Encode, Decode };
        return { ...schema, [index_1.TransformKind]: Codec };
      }
      EncodeSchema(encode, schema) {
        const Codec = { Decode: this.decode, Encode: encode };
        return { ...schema, [index_1.TransformKind]: Codec };
      }
      Encode(encode) {
        const schema = (0, type_1.CloneType)(this.schema);
        return (0, type_2.IsTransform)(schema) ? this.EncodeTransform(encode, schema) : this.EncodeSchema(encode, schema);
      }
    };
    exports.TransformEncodeBuilder = TransformEncodeBuilder;
    function Transform(schema) {
      return new TransformDecodeBuilder(schema);
    }
    exports.Transform = Transform;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/transform/index.js
var require_transform3 = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/transform/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_transform2(), exports);
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/void/void.js
var require_void = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/void/void.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Void = void 0;
    var index_1 = require_symbols2();
    function Void(options = {}) {
      return {
        ...options,
        [index_1.Kind]: "Void",
        type: "void"
      };
    }
    exports.Void = Void;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/void/index.js
var require_void2 = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/void/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_void(), exports);
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/type/json.js
var require_json = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/type/json.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.JsonTypeBuilder = void 0;
    var index_1 = require_any2();
    var index_2 = require_array2();
    var index_3 = require_boolean2();
    var index_4 = require_composite2();
    var index_5 = require_const2();
    var index_6 = require_deref4();
    var index_7 = require_enum2();
    var index_8 = require_exclude2();
    var index_9 = require_extends2();
    var index_10 = require_extract2();
    var index_11 = require_indexed2();
    var index_12 = require_integer2();
    var index_13 = require_intersect2();
    var index_14 = require_intrinsic2();
    var index_15 = require_keyof2();
    var index_16 = require_literal2();
    var index_17 = require_mapped2();
    var index_18 = require_never2();
    var index_19 = require_not2();
    var index_20 = require_null2();
    var index_21 = require_number2();
    var index_22 = require_object2();
    var index_23 = require_omit2();
    var index_24 = require_optional2();
    var index_25 = require_partial2();
    var index_26 = require_pick2();
    var index_27 = require_readonly2();
    var index_28 = require_readonly_optional2();
    var index_29 = require_record2();
    var index_30 = require_recursive2();
    var index_31 = require_ref2();
    var index_32 = require_required2();
    var index_33 = require_rest2();
    var index_34 = require_strict2();
    var index_35 = require_string2();
    var index_36 = require_template_literal2();
    var index_37 = require_transform3();
    var index_38 = require_tuple2();
    var index_39 = require_union2();
    var index_40 = require_unknown2();
    var index_41 = require_unsafe2();
    var JsonTypeBuilder = class {
      // ------------------------------------------------------------------------
      // Strict
      // ------------------------------------------------------------------------
      /** `[Json]` Omits compositing symbols from this schema */
      Strict(schema) {
        return (0, index_34.Strict)(schema);
      }
      // ------------------------------------------------------------------------
      // Modifiers
      // ------------------------------------------------------------------------
      /** `[Json]` Creates a Readonly and Optional property */
      ReadonlyOptional(schema) {
        return (0, index_28.ReadonlyOptional)(schema);
      }
      /** `[Json]` Creates a Readonly property */
      Readonly(schema, enable) {
        return (0, index_27.Readonly)(schema, enable ?? true);
      }
      /** `[Json]` Creates a Optional property */
      Optional(schema, enable) {
        return (0, index_24.Optional)(schema, enable ?? true);
      }
      // ------------------------------------------------------------------------
      // Types
      // ------------------------------------------------------------------------
      /** `[Json]` Creates an Any type */
      Any(options = {}) {
        return (0, index_1.Any)(options);
      }
      /** `[Json]` Creates an Array type */
      Array(schema, options = {}) {
        return (0, index_2.Array)(schema, options);
      }
      /** `[Json]` Creates a Boolean type */
      Boolean(options = {}) {
        return (0, index_3.Boolean)(options);
      }
      /** `[Json]` Intrinsic function to Capitalize LiteralString types */
      Capitalize(schema, options = {}) {
        return (0, index_14.Capitalize)(schema, options);
      }
      /** `[Json]` Creates a Composite object type */
      Composite(schemas, options) {
        return (0, index_4.Composite)(schemas, options);
      }
      /** `[JavaScript]` Creates a readonly const type from the given value. */
      Const(value, options = {}) {
        return (0, index_5.Const)(value, options);
      }
      /** `[Json]` Creates a dereferenced type */
      Deref(schema, references) {
        return (0, index_6.Deref)(schema, references);
      }
      /** `[Json]` Creates a Enum type */
      Enum(item, options = {}) {
        return (0, index_7.Enum)(item, options);
      }
      /** `[Json]` Constructs a type by excluding from unionType all union members that are assignable to excludedMembers */
      Exclude(unionType, excludedMembers, options = {}) {
        return (0, index_8.Exclude)(unionType, excludedMembers, options);
      }
      /** `[Json]` Creates a Conditional type */
      Extends(L, R, T, F, options = {}) {
        return (0, index_9.Extends)(L, R, T, F, options);
      }
      /** `[Json]` Constructs a type by extracting from type all union members that are assignable to union */
      Extract(type, union, options = {}) {
        return (0, index_10.Extract)(type, union, options);
      }
      /** `[Json]` Returns an Indexed property type for the given keys */
      Index(schema, unresolved, options = {}) {
        return (0, index_11.Index)(schema, unresolved, options);
      }
      /** `[Json]` Creates an Integer type */
      Integer(options = {}) {
        return (0, index_12.Integer)(options);
      }
      /** `[Json]` Creates an Intersect type */
      Intersect(T, options = {}) {
        return (0, index_13.Intersect)(T, options);
      }
      /** `[Json]` Creates a KeyOf type */
      KeyOf(schema, options = {}) {
        return (0, index_15.KeyOf)(schema, options);
      }
      /** `[Json]` Creates a Literal type */
      Literal(value, options = {}) {
        return (0, index_16.Literal)(value, options);
      }
      /** `[Json]` Intrinsic function to Lowercase LiteralString types */
      Lowercase(schema, options = {}) {
        return (0, index_14.Lowercase)(schema, options);
      }
      /** `[Json]` Creates a Mapped object type */
      Mapped(key, map, options = {}) {
        return (0, index_17.Mapped)(key, map, options);
      }
      /** `[Json]` Creates a Never type */
      Never(options = {}) {
        return (0, index_18.Never)(options);
      }
      /** `[Json]` Creates a Not type */
      Not(schema, options) {
        return (0, index_19.Not)(schema, options);
      }
      /** `[Json]` Creates a Null type */
      Null(options = {}) {
        return (0, index_20.Null)(options);
      }
      /** `[Json]` Creates a Number type */
      Number(options = {}) {
        return (0, index_21.Number)(options);
      }
      /** `[Json]` Creates an Object type */
      Object(properties, options = {}) {
        return (0, index_22.Object)(properties, options);
      }
      /** `[Json]` Constructs a type whose keys are omitted from the given type */
      Omit(schema, unresolved, options = {}) {
        return (0, index_23.Omit)(schema, unresolved, options);
      }
      /** `[Json]` Constructs a type where all properties are optional */
      Partial(schema, options = {}) {
        return (0, index_25.Partial)(schema, options);
      }
      /** `[Json]` Constructs a type whose keys are picked from the given type */
      Pick(schema, unresolved, options = {}) {
        return (0, index_26.Pick)(schema, unresolved, options);
      }
      /** `[Json]` Creates a Record type */
      Record(key, schema, options = {}) {
        return (0, index_29.Record)(key, schema);
      }
      /** `[Json]` Creates a Recursive type */
      Recursive(callback, options = {}) {
        return (0, index_30.Recursive)(callback, options);
      }
      /** `[Json]` Creates a Ref type. */
      Ref(unresolved, options = {}) {
        return (0, index_31.Ref)(unresolved, options);
      }
      /** `[Json]` Constructs a type where all properties are required */
      Required(schema, options = {}) {
        return (0, index_32.Required)(schema, options);
      }
      /** `[Json]` Extracts interior Rest elements from Tuple, Intersect and Union types */
      Rest(schema) {
        return (0, index_33.Rest)(schema);
      }
      /** `[Json]` Creates a String type */
      String(options = {}) {
        return (0, index_35.String)(options);
      }
      /** `[Json]` Creates a TemplateLiteral type */
      TemplateLiteral(unresolved, options = {}) {
        return (0, index_36.TemplateLiteral)(unresolved, options);
      }
      /** `[Json]` Creates a Transform type */
      Transform(schema) {
        return (0, index_37.Transform)(schema);
      }
      /** `[Json]` Creates a Tuple type */
      Tuple(items, options = {}) {
        return (0, index_38.Tuple)(items, options);
      }
      /** `[Json]` Intrinsic function to Uncapitalize LiteralString types */
      Uncapitalize(schema, options = {}) {
        return (0, index_14.Uncapitalize)(schema, options);
      }
      /** `[Json]` Creates a Union type */
      Union(schemas, options = {}) {
        return (0, index_39.Union)(schemas, options);
      }
      /** `[Json]` Creates an Unknown type */
      Unknown(options = {}) {
        return (0, index_40.Unknown)(options);
      }
      /** `[Json]` Creates a Unsafe type that will infers as the generic argument T */
      Unsafe(options = {}) {
        return (0, index_41.Unsafe)(options);
      }
      /** `[Json]` Intrinsic function to Uppercase LiteralString types */
      Uppercase(schema, options = {}) {
        return (0, index_14.Uppercase)(schema, options);
      }
    };
    exports.JsonTypeBuilder = JsonTypeBuilder;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/type/type.js
var require_type4 = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/type/type.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Strict = exports.ReturnType = exports.Rest = exports.Required = exports.RegExp = exports.Ref = exports.Recursive = exports.Record = exports.ReadonlyOptional = exports.Readonly = exports.Promise = exports.Pick = exports.Partial = exports.Parameters = exports.Optional = exports.Omit = exports.Object = exports.Number = exports.Null = exports.Not = exports.Never = exports.Mapped = exports.Literal = exports.KeyOf = exports.Iterator = exports.Uppercase = exports.Lowercase = exports.Uncapitalize = exports.Capitalize = exports.Intersect = exports.Integer = exports.InstanceType = exports.Index = exports.Function = exports.Extract = exports.Extends = exports.Exclude = exports.Enum = exports.Deref = exports.Date = exports.ConstructorParameters = exports.Constructor = exports.Const = exports.Composite = exports.Boolean = exports.BigInt = exports.Awaited = exports.AsyncIterator = exports.Array = exports.Any = void 0;
    exports.Void = exports.Unsafe = exports.Unknown = exports.Union = exports.Undefined = exports.Uint8Array = exports.Tuple = exports.Transform = exports.TemplateLiteral = exports.Symbol = exports.String = void 0;
    var index_1 = require_any2();
    Object.defineProperty(exports, "Any", { enumerable: true, get: function() {
      return index_1.Any;
    } });
    var index_2 = require_array2();
    Object.defineProperty(exports, "Array", { enumerable: true, get: function() {
      return index_2.Array;
    } });
    var index_3 = require_async_iterator2();
    Object.defineProperty(exports, "AsyncIterator", { enumerable: true, get: function() {
      return index_3.AsyncIterator;
    } });
    var index_4 = require_awaited2();
    Object.defineProperty(exports, "Awaited", { enumerable: true, get: function() {
      return index_4.Awaited;
    } });
    var index_5 = require_bigint2();
    Object.defineProperty(exports, "BigInt", { enumerable: true, get: function() {
      return index_5.BigInt;
    } });
    var index_6 = require_boolean2();
    Object.defineProperty(exports, "Boolean", { enumerable: true, get: function() {
      return index_6.Boolean;
    } });
    var index_7 = require_composite2();
    Object.defineProperty(exports, "Composite", { enumerable: true, get: function() {
      return index_7.Composite;
    } });
    var index_8 = require_const2();
    Object.defineProperty(exports, "Const", { enumerable: true, get: function() {
      return index_8.Const;
    } });
    var index_9 = require_constructor2();
    Object.defineProperty(exports, "Constructor", { enumerable: true, get: function() {
      return index_9.Constructor;
    } });
    var index_10 = require_constructor_parameters2();
    Object.defineProperty(exports, "ConstructorParameters", { enumerable: true, get: function() {
      return index_10.ConstructorParameters;
    } });
    var index_11 = require_date2();
    Object.defineProperty(exports, "Date", { enumerable: true, get: function() {
      return index_11.Date;
    } });
    var index_12 = require_deref4();
    Object.defineProperty(exports, "Deref", { enumerable: true, get: function() {
      return index_12.Deref;
    } });
    var index_13 = require_enum2();
    Object.defineProperty(exports, "Enum", { enumerable: true, get: function() {
      return index_13.Enum;
    } });
    var index_14 = require_exclude2();
    Object.defineProperty(exports, "Exclude", { enumerable: true, get: function() {
      return index_14.Exclude;
    } });
    var index_15 = require_extends2();
    Object.defineProperty(exports, "Extends", { enumerable: true, get: function() {
      return index_15.Extends;
    } });
    var index_16 = require_extract2();
    Object.defineProperty(exports, "Extract", { enumerable: true, get: function() {
      return index_16.Extract;
    } });
    var index_17 = require_function2();
    Object.defineProperty(exports, "Function", { enumerable: true, get: function() {
      return index_17.Function;
    } });
    var index_18 = require_indexed2();
    Object.defineProperty(exports, "Index", { enumerable: true, get: function() {
      return index_18.Index;
    } });
    var index_19 = require_instance_type2();
    Object.defineProperty(exports, "InstanceType", { enumerable: true, get: function() {
      return index_19.InstanceType;
    } });
    var index_20 = require_integer2();
    Object.defineProperty(exports, "Integer", { enumerable: true, get: function() {
      return index_20.Integer;
    } });
    var index_21 = require_intersect2();
    Object.defineProperty(exports, "Intersect", { enumerable: true, get: function() {
      return index_21.Intersect;
    } });
    var index_22 = require_intrinsic2();
    Object.defineProperty(exports, "Capitalize", { enumerable: true, get: function() {
      return index_22.Capitalize;
    } });
    Object.defineProperty(exports, "Uncapitalize", { enumerable: true, get: function() {
      return index_22.Uncapitalize;
    } });
    Object.defineProperty(exports, "Lowercase", { enumerable: true, get: function() {
      return index_22.Lowercase;
    } });
    Object.defineProperty(exports, "Uppercase", { enumerable: true, get: function() {
      return index_22.Uppercase;
    } });
    var index_23 = require_iterator2();
    Object.defineProperty(exports, "Iterator", { enumerable: true, get: function() {
      return index_23.Iterator;
    } });
    var index_24 = require_keyof2();
    Object.defineProperty(exports, "KeyOf", { enumerable: true, get: function() {
      return index_24.KeyOf;
    } });
    var index_25 = require_literal2();
    Object.defineProperty(exports, "Literal", { enumerable: true, get: function() {
      return index_25.Literal;
    } });
    var index_26 = require_mapped2();
    Object.defineProperty(exports, "Mapped", { enumerable: true, get: function() {
      return index_26.Mapped;
    } });
    var index_27 = require_never2();
    Object.defineProperty(exports, "Never", { enumerable: true, get: function() {
      return index_27.Never;
    } });
    var index_28 = require_not2();
    Object.defineProperty(exports, "Not", { enumerable: true, get: function() {
      return index_28.Not;
    } });
    var index_29 = require_null2();
    Object.defineProperty(exports, "Null", { enumerable: true, get: function() {
      return index_29.Null;
    } });
    var index_30 = require_number2();
    Object.defineProperty(exports, "Number", { enumerable: true, get: function() {
      return index_30.Number;
    } });
    var index_31 = require_object2();
    Object.defineProperty(exports, "Object", { enumerable: true, get: function() {
      return index_31.Object;
    } });
    var index_32 = require_omit2();
    Object.defineProperty(exports, "Omit", { enumerable: true, get: function() {
      return index_32.Omit;
    } });
    var index_33 = require_optional2();
    Object.defineProperty(exports, "Optional", { enumerable: true, get: function() {
      return index_33.Optional;
    } });
    var index_34 = require_parameters2();
    Object.defineProperty(exports, "Parameters", { enumerable: true, get: function() {
      return index_34.Parameters;
    } });
    var index_35 = require_partial2();
    Object.defineProperty(exports, "Partial", { enumerable: true, get: function() {
      return index_35.Partial;
    } });
    var index_36 = require_pick2();
    Object.defineProperty(exports, "Pick", { enumerable: true, get: function() {
      return index_36.Pick;
    } });
    var index_37 = require_promise2();
    Object.defineProperty(exports, "Promise", { enumerable: true, get: function() {
      return index_37.Promise;
    } });
    var index_38 = require_readonly2();
    Object.defineProperty(exports, "Readonly", { enumerable: true, get: function() {
      return index_38.Readonly;
    } });
    var index_39 = require_readonly_optional2();
    Object.defineProperty(exports, "ReadonlyOptional", { enumerable: true, get: function() {
      return index_39.ReadonlyOptional;
    } });
    var index_40 = require_record2();
    Object.defineProperty(exports, "Record", { enumerable: true, get: function() {
      return index_40.Record;
    } });
    var index_41 = require_recursive2();
    Object.defineProperty(exports, "Recursive", { enumerable: true, get: function() {
      return index_41.Recursive;
    } });
    var index_42 = require_ref2();
    Object.defineProperty(exports, "Ref", { enumerable: true, get: function() {
      return index_42.Ref;
    } });
    var index_43 = require_regexp2();
    Object.defineProperty(exports, "RegExp", { enumerable: true, get: function() {
      return index_43.RegExp;
    } });
    var index_44 = require_required2();
    Object.defineProperty(exports, "Required", { enumerable: true, get: function() {
      return index_44.Required;
    } });
    var index_45 = require_rest2();
    Object.defineProperty(exports, "Rest", { enumerable: true, get: function() {
      return index_45.Rest;
    } });
    var index_46 = require_return_type2();
    Object.defineProperty(exports, "ReturnType", { enumerable: true, get: function() {
      return index_46.ReturnType;
    } });
    var index_47 = require_strict2();
    Object.defineProperty(exports, "Strict", { enumerable: true, get: function() {
      return index_47.Strict;
    } });
    var index_48 = require_string2();
    Object.defineProperty(exports, "String", { enumerable: true, get: function() {
      return index_48.String;
    } });
    var index_49 = require_symbol2();
    Object.defineProperty(exports, "Symbol", { enumerable: true, get: function() {
      return index_49.Symbol;
    } });
    var index_50 = require_template_literal2();
    Object.defineProperty(exports, "TemplateLiteral", { enumerable: true, get: function() {
      return index_50.TemplateLiteral;
    } });
    var index_51 = require_transform3();
    Object.defineProperty(exports, "Transform", { enumerable: true, get: function() {
      return index_51.Transform;
    } });
    var index_52 = require_tuple2();
    Object.defineProperty(exports, "Tuple", { enumerable: true, get: function() {
      return index_52.Tuple;
    } });
    var index_53 = require_uint8array2();
    Object.defineProperty(exports, "Uint8Array", { enumerable: true, get: function() {
      return index_53.Uint8Array;
    } });
    var index_54 = require_undefined2();
    Object.defineProperty(exports, "Undefined", { enumerable: true, get: function() {
      return index_54.Undefined;
    } });
    var index_55 = require_union2();
    Object.defineProperty(exports, "Union", { enumerable: true, get: function() {
      return index_55.Union;
    } });
    var index_56 = require_unknown2();
    Object.defineProperty(exports, "Unknown", { enumerable: true, get: function() {
      return index_56.Unknown;
    } });
    var index_57 = require_unsafe2();
    Object.defineProperty(exports, "Unsafe", { enumerable: true, get: function() {
      return index_57.Unsafe;
    } });
    var index_58 = require_void2();
    Object.defineProperty(exports, "Void", { enumerable: true, get: function() {
      return index_58.Void;
    } });
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/type/javascript.js
var require_javascript = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/type/javascript.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.JavaScriptTypeBuilder = void 0;
    var json_1 = require_json();
    var index_1 = require_async_iterator2();
    var index_2 = require_awaited2();
    var index_3 = require_bigint2();
    var index_4 = require_constructor2();
    var index_5 = require_constructor_parameters2();
    var index_6 = require_date2();
    var index_7 = require_function2();
    var index_8 = require_instance_type2();
    var index_9 = require_iterator2();
    var index_10 = require_parameters2();
    var index_11 = require_promise2();
    var index_12 = require_regexp2();
    var index_13 = require_return_type2();
    var index_14 = require_symbol2();
    var index_15 = require_uint8array2();
    var index_16 = require_undefined2();
    var index_17 = require_void2();
    var JavaScriptTypeBuilder = class extends json_1.JsonTypeBuilder {
      /** `[JavaScript]` Creates a AsyncIterator type */
      AsyncIterator(items, options = {}) {
        return (0, index_1.AsyncIterator)(items, options);
      }
      /** `[JavaScript]` Constructs a type by recursively unwrapping Promise types */
      Awaited(schema, options = {}) {
        return (0, index_2.Awaited)(schema, options);
      }
      /** `[JavaScript]` Creates a BigInt type */
      BigInt(options = {}) {
        return (0, index_3.BigInt)(options);
      }
      /** `[JavaScript]` Extracts the ConstructorParameters from the given Constructor type */
      ConstructorParameters(schema, options = {}) {
        return (0, index_5.ConstructorParameters)(schema, options);
      }
      /** `[JavaScript]` Creates a Constructor type */
      Constructor(parameters, returns, options) {
        return (0, index_4.Constructor)(parameters, returns, options);
      }
      /** `[JavaScript]` Creates a Date type */
      Date(options = {}) {
        return (0, index_6.Date)(options);
      }
      /** `[JavaScript]` Creates a Function type */
      Function(parameters, returns, options) {
        return (0, index_7.Function)(parameters, returns, options);
      }
      /** `[JavaScript]` Extracts the InstanceType from the given Constructor type */
      InstanceType(schema, options = {}) {
        return (0, index_8.InstanceType)(schema, options);
      }
      /** `[JavaScript]` Creates an Iterator type */
      Iterator(items, options = {}) {
        return (0, index_9.Iterator)(items, options);
      }
      /** `[JavaScript]` Extracts the Parameters from the given Function type */
      Parameters(schema, options = {}) {
        return (0, index_10.Parameters)(schema, options);
      }
      /** `[JavaScript]` Creates a Promise type */
      Promise(item, options = {}) {
        return (0, index_11.Promise)(item, options);
      }
      /** `[JavaScript]` Creates a RegExp type */
      RegExp(unresolved, options = {}) {
        return (0, index_12.RegExp)(unresolved, options);
      }
      /** `[JavaScript]` Extracts the ReturnType from the given Function type */
      ReturnType(schema, options = {}) {
        return (0, index_13.ReturnType)(schema, options);
      }
      /** `[JavaScript]` Creates a Symbol type */
      Symbol(options) {
        return (0, index_14.Symbol)(options);
      }
      /** `[JavaScript]` Creates a Undefined type */
      Undefined(options = {}) {
        return (0, index_16.Undefined)(options);
      }
      /** `[JavaScript]` Creates a Uint8Array type */
      Uint8Array(options = {}) {
        return (0, index_15.Uint8Array)(options);
      }
      /** `[JavaScript]` Creates a Void type */
      Void(options = {}) {
        return (0, index_17.Void)(options);
      }
    };
    exports.JavaScriptTypeBuilder = JavaScriptTypeBuilder;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/type/index.js
var require_type5 = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/type/type/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Type = exports.JavaScriptTypeBuilder = exports.JsonTypeBuilder = void 0;
    var json_1 = require_json();
    Object.defineProperty(exports, "JsonTypeBuilder", { enumerable: true, get: function() {
      return json_1.JsonTypeBuilder;
    } });
    var TypeBuilder = require_type4();
    var javascript_1 = require_javascript();
    Object.defineProperty(exports, "JavaScriptTypeBuilder", { enumerable: true, get: function() {
      return javascript_1.JavaScriptTypeBuilder;
    } });
    var Type = TypeBuilder;
    exports.Type = Type;
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/index.js
var require_require = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.IndexFromPropertyKeys = exports.IndexPropertyKeys = exports.Index = exports.Function = exports.Extract = exports.ExtendsUndefinedCheck = exports.ExtendsResult = exports.ExtendsCheck = exports.Extends = exports.Exclude = exports.Enum = exports.Deref = exports.Date = exports.ConstructorParameters = exports.Constructor = exports.Const = exports.Composite = exports.Boolean = exports.BigInt = exports.Awaited = exports.AsyncIterator = exports.Array = exports.Any = exports.Increment = exports.SetUnionMany = exports.SetUnion = exports.SetIsSubset = exports.SetIntersectMany = exports.SetIntersect = exports.SetIncludes = exports.SetDistinct = exports.SetComplement = exports.TypeBoxError = exports.CloneRest = exports.CloneType = exports.ValueGuard = exports.TypeGuard = exports.FormatRegistry = exports.TypeRegistry = exports.PatternStringExact = exports.PatternString = exports.PatternNumberExact = exports.PatternNumber = exports.PatternBooleanExact = exports.PatternBoolean = exports.TransformKind = exports.OptionalKind = exports.ReadonlyKind = exports.Hint = exports.Kind = void 0;
    exports.Symbol = exports.String = exports.Strict = exports.ReturnType = exports.Rest = exports.Required = exports.RegExp = exports.Ref = exports.Recursive = exports.Record = exports.ReadonlyOptional = exports.ReadonlyFromMappedResult = exports.Readonly = exports.Promise = exports.Pick = exports.PartialFromMappedResult = exports.Partial = exports.Parameters = exports.OptionalFromMappedResult = exports.Optional = exports.Omit = exports.Object = exports.Number = exports.Null = exports.Not = exports.Never = exports.MappedFunctionReturnType = exports.MappedResult = exports.MappedKey = exports.Mapped = exports.Literal = exports.KeyOfPattern = exports.KeyOfFromMappedResult = exports.KeyOfPropertyKeysToRest = exports.KeyOfPropertyKeys = exports.KeyOf = exports.Uppercase = exports.Uncapitalize = exports.Lowercase = exports.Capitalize = exports.IntrinsicFromMappedKey = exports.Intrinsic = exports.Iterator = exports.IntersectEvaluated = exports.Intersect = exports.Integer = exports.InstanceType = exports.IndexFromMappedResult = exports.IndexFromMappedKey = exports.IndexFromPropertyKey = void 0;
    exports.JavaScriptTypeBuilder = exports.JsonTypeBuilder = exports.Type = exports.Void = exports.Unsafe = exports.Unknown = exports.UnionEvaluated = exports.Union = exports.Undefined = exports.Uint8Array = exports.Tuple = exports.TransformEncodeBuilder = exports.TransformDecodeBuilder = exports.Transform = exports.IsTemplateLiteralExpressionFinite = exports.TemplateLiteralExpressionGenerate = exports.IsTemplateLiteralFinite = exports.TemplateLiteralParseExact = exports.TemplateLiteralParse = exports.TemplateLiteralGenerate = exports.TemplateLiteralSyntax = exports.TemplateLiteral = void 0;
    var index_1 = require_symbols2();
    Object.defineProperty(exports, "Kind", { enumerable: true, get: function() {
      return index_1.Kind;
    } });
    Object.defineProperty(exports, "Hint", { enumerable: true, get: function() {
      return index_1.Hint;
    } });
    Object.defineProperty(exports, "ReadonlyKind", { enumerable: true, get: function() {
      return index_1.ReadonlyKind;
    } });
    Object.defineProperty(exports, "OptionalKind", { enumerable: true, get: function() {
      return index_1.OptionalKind;
    } });
    Object.defineProperty(exports, "TransformKind", { enumerable: true, get: function() {
      return index_1.TransformKind;
    } });
    var index_2 = require_patterns2();
    Object.defineProperty(exports, "PatternBoolean", { enumerable: true, get: function() {
      return index_2.PatternBoolean;
    } });
    Object.defineProperty(exports, "PatternBooleanExact", { enumerable: true, get: function() {
      return index_2.PatternBooleanExact;
    } });
    Object.defineProperty(exports, "PatternNumber", { enumerable: true, get: function() {
      return index_2.PatternNumber;
    } });
    Object.defineProperty(exports, "PatternNumberExact", { enumerable: true, get: function() {
      return index_2.PatternNumberExact;
    } });
    Object.defineProperty(exports, "PatternString", { enumerable: true, get: function() {
      return index_2.PatternString;
    } });
    Object.defineProperty(exports, "PatternStringExact", { enumerable: true, get: function() {
      return index_2.PatternStringExact;
    } });
    var index_3 = require_registry();
    Object.defineProperty(exports, "TypeRegistry", { enumerable: true, get: function() {
      return index_3.TypeRegistry;
    } });
    Object.defineProperty(exports, "FormatRegistry", { enumerable: true, get: function() {
      return index_3.FormatRegistry;
    } });
    var index_4 = require_guard3();
    Object.defineProperty(exports, "TypeGuard", { enumerable: true, get: function() {
      return index_4.TypeGuard;
    } });
    Object.defineProperty(exports, "ValueGuard", { enumerable: true, get: function() {
      return index_4.ValueGuard;
    } });
    var type_1 = require_type2();
    Object.defineProperty(exports, "CloneType", { enumerable: true, get: function() {
      return type_1.CloneType;
    } });
    Object.defineProperty(exports, "CloneRest", { enumerable: true, get: function() {
      return type_1.CloneRest;
    } });
    var index_5 = require_error2();
    Object.defineProperty(exports, "TypeBoxError", { enumerable: true, get: function() {
      return index_5.TypeBoxError;
    } });
    var index_6 = require_sets();
    Object.defineProperty(exports, "SetComplement", { enumerable: true, get: function() {
      return index_6.SetComplement;
    } });
    Object.defineProperty(exports, "SetDistinct", { enumerable: true, get: function() {
      return index_6.SetDistinct;
    } });
    Object.defineProperty(exports, "SetIncludes", { enumerable: true, get: function() {
      return index_6.SetIncludes;
    } });
    Object.defineProperty(exports, "SetIntersect", { enumerable: true, get: function() {
      return index_6.SetIntersect;
    } });
    Object.defineProperty(exports, "SetIntersectMany", { enumerable: true, get: function() {
      return index_6.SetIntersectMany;
    } });
    Object.defineProperty(exports, "SetIsSubset", { enumerable: true, get: function() {
      return index_6.SetIsSubset;
    } });
    Object.defineProperty(exports, "SetUnion", { enumerable: true, get: function() {
      return index_6.SetUnion;
    } });
    Object.defineProperty(exports, "SetUnionMany", { enumerable: true, get: function() {
      return index_6.SetUnionMany;
    } });
    var index_7 = require_helpers2();
    Object.defineProperty(exports, "Increment", { enumerable: true, get: function() {
      return index_7.Increment;
    } });
    var index_8 = require_any2();
    Object.defineProperty(exports, "Any", { enumerable: true, get: function() {
      return index_8.Any;
    } });
    var index_9 = require_array2();
    Object.defineProperty(exports, "Array", { enumerable: true, get: function() {
      return index_9.Array;
    } });
    var index_10 = require_async_iterator2();
    Object.defineProperty(exports, "AsyncIterator", { enumerable: true, get: function() {
      return index_10.AsyncIterator;
    } });
    var index_11 = require_awaited2();
    Object.defineProperty(exports, "Awaited", { enumerable: true, get: function() {
      return index_11.Awaited;
    } });
    var index_12 = require_bigint2();
    Object.defineProperty(exports, "BigInt", { enumerable: true, get: function() {
      return index_12.BigInt;
    } });
    var index_13 = require_boolean2();
    Object.defineProperty(exports, "Boolean", { enumerable: true, get: function() {
      return index_13.Boolean;
    } });
    var index_14 = require_composite2();
    Object.defineProperty(exports, "Composite", { enumerable: true, get: function() {
      return index_14.Composite;
    } });
    var index_15 = require_const2();
    Object.defineProperty(exports, "Const", { enumerable: true, get: function() {
      return index_15.Const;
    } });
    var index_16 = require_constructor2();
    Object.defineProperty(exports, "Constructor", { enumerable: true, get: function() {
      return index_16.Constructor;
    } });
    var index_17 = require_constructor_parameters2();
    Object.defineProperty(exports, "ConstructorParameters", { enumerable: true, get: function() {
      return index_17.ConstructorParameters;
    } });
    var index_18 = require_date2();
    Object.defineProperty(exports, "Date", { enumerable: true, get: function() {
      return index_18.Date;
    } });
    var index_19 = require_deref4();
    Object.defineProperty(exports, "Deref", { enumerable: true, get: function() {
      return index_19.Deref;
    } });
    var index_20 = require_enum2();
    Object.defineProperty(exports, "Enum", { enumerable: true, get: function() {
      return index_20.Enum;
    } });
    var index_21 = require_exclude2();
    Object.defineProperty(exports, "Exclude", { enumerable: true, get: function() {
      return index_21.Exclude;
    } });
    var index_22 = require_extends2();
    Object.defineProperty(exports, "Extends", { enumerable: true, get: function() {
      return index_22.Extends;
    } });
    Object.defineProperty(exports, "ExtendsCheck", { enumerable: true, get: function() {
      return index_22.ExtendsCheck;
    } });
    Object.defineProperty(exports, "ExtendsResult", { enumerable: true, get: function() {
      return index_22.ExtendsResult;
    } });
    Object.defineProperty(exports, "ExtendsUndefinedCheck", { enumerable: true, get: function() {
      return index_22.ExtendsUndefinedCheck;
    } });
    var index_23 = require_extract2();
    Object.defineProperty(exports, "Extract", { enumerable: true, get: function() {
      return index_23.Extract;
    } });
    var index_24 = require_function2();
    Object.defineProperty(exports, "Function", { enumerable: true, get: function() {
      return index_24.Function;
    } });
    var index_25 = require_indexed2();
    Object.defineProperty(exports, "Index", { enumerable: true, get: function() {
      return index_25.Index;
    } });
    Object.defineProperty(exports, "IndexPropertyKeys", { enumerable: true, get: function() {
      return index_25.IndexPropertyKeys;
    } });
    Object.defineProperty(exports, "IndexFromPropertyKeys", { enumerable: true, get: function() {
      return index_25.IndexFromPropertyKeys;
    } });
    Object.defineProperty(exports, "IndexFromPropertyKey", { enumerable: true, get: function() {
      return index_25.IndexFromPropertyKey;
    } });
    Object.defineProperty(exports, "IndexFromMappedKey", { enumerable: true, get: function() {
      return index_25.IndexFromMappedKey;
    } });
    Object.defineProperty(exports, "IndexFromMappedResult", { enumerable: true, get: function() {
      return index_25.IndexFromMappedResult;
    } });
    var index_26 = require_instance_type2();
    Object.defineProperty(exports, "InstanceType", { enumerable: true, get: function() {
      return index_26.InstanceType;
    } });
    var index_27 = require_integer2();
    Object.defineProperty(exports, "Integer", { enumerable: true, get: function() {
      return index_27.Integer;
    } });
    var index_28 = require_intersect2();
    Object.defineProperty(exports, "Intersect", { enumerable: true, get: function() {
      return index_28.Intersect;
    } });
    Object.defineProperty(exports, "IntersectEvaluated", { enumerable: true, get: function() {
      return index_28.IntersectEvaluated;
    } });
    var index_29 = require_iterator2();
    Object.defineProperty(exports, "Iterator", { enumerable: true, get: function() {
      return index_29.Iterator;
    } });
    var index_30 = require_intrinsic2();
    Object.defineProperty(exports, "Intrinsic", { enumerable: true, get: function() {
      return index_30.Intrinsic;
    } });
    Object.defineProperty(exports, "IntrinsicFromMappedKey", { enumerable: true, get: function() {
      return index_30.IntrinsicFromMappedKey;
    } });
    Object.defineProperty(exports, "Capitalize", { enumerable: true, get: function() {
      return index_30.Capitalize;
    } });
    Object.defineProperty(exports, "Lowercase", { enumerable: true, get: function() {
      return index_30.Lowercase;
    } });
    Object.defineProperty(exports, "Uncapitalize", { enumerable: true, get: function() {
      return index_30.Uncapitalize;
    } });
    Object.defineProperty(exports, "Uppercase", { enumerable: true, get: function() {
      return index_30.Uppercase;
    } });
    var index_31 = require_keyof2();
    Object.defineProperty(exports, "KeyOf", { enumerable: true, get: function() {
      return index_31.KeyOf;
    } });
    Object.defineProperty(exports, "KeyOfPropertyKeys", { enumerable: true, get: function() {
      return index_31.KeyOfPropertyKeys;
    } });
    Object.defineProperty(exports, "KeyOfPropertyKeysToRest", { enumerable: true, get: function() {
      return index_31.KeyOfPropertyKeysToRest;
    } });
    Object.defineProperty(exports, "KeyOfFromMappedResult", { enumerable: true, get: function() {
      return index_31.KeyOfFromMappedResult;
    } });
    Object.defineProperty(exports, "KeyOfPattern", { enumerable: true, get: function() {
      return index_31.KeyOfPattern;
    } });
    var index_32 = require_literal2();
    Object.defineProperty(exports, "Literal", { enumerable: true, get: function() {
      return index_32.Literal;
    } });
    var index_33 = require_mapped2();
    Object.defineProperty(exports, "Mapped", { enumerable: true, get: function() {
      return index_33.Mapped;
    } });
    Object.defineProperty(exports, "MappedKey", { enumerable: true, get: function() {
      return index_33.MappedKey;
    } });
    Object.defineProperty(exports, "MappedResult", { enumerable: true, get: function() {
      return index_33.MappedResult;
    } });
    Object.defineProperty(exports, "MappedFunctionReturnType", { enumerable: true, get: function() {
      return index_33.MappedFunctionReturnType;
    } });
    var index_34 = require_never2();
    Object.defineProperty(exports, "Never", { enumerable: true, get: function() {
      return index_34.Never;
    } });
    var index_35 = require_not2();
    Object.defineProperty(exports, "Not", { enumerable: true, get: function() {
      return index_35.Not;
    } });
    var index_36 = require_null2();
    Object.defineProperty(exports, "Null", { enumerable: true, get: function() {
      return index_36.Null;
    } });
    var index_37 = require_number2();
    Object.defineProperty(exports, "Number", { enumerable: true, get: function() {
      return index_37.Number;
    } });
    var index_38 = require_object2();
    Object.defineProperty(exports, "Object", { enumerable: true, get: function() {
      return index_38.Object;
    } });
    var index_39 = require_omit2();
    Object.defineProperty(exports, "Omit", { enumerable: true, get: function() {
      return index_39.Omit;
    } });
    var index_40 = require_optional2();
    Object.defineProperty(exports, "Optional", { enumerable: true, get: function() {
      return index_40.Optional;
    } });
    Object.defineProperty(exports, "OptionalFromMappedResult", { enumerable: true, get: function() {
      return index_40.OptionalFromMappedResult;
    } });
    var index_41 = require_parameters2();
    Object.defineProperty(exports, "Parameters", { enumerable: true, get: function() {
      return index_41.Parameters;
    } });
    var index_42 = require_partial2();
    Object.defineProperty(exports, "Partial", { enumerable: true, get: function() {
      return index_42.Partial;
    } });
    Object.defineProperty(exports, "PartialFromMappedResult", { enumerable: true, get: function() {
      return index_42.PartialFromMappedResult;
    } });
    var index_43 = require_pick2();
    Object.defineProperty(exports, "Pick", { enumerable: true, get: function() {
      return index_43.Pick;
    } });
    var index_44 = require_promise2();
    Object.defineProperty(exports, "Promise", { enumerable: true, get: function() {
      return index_44.Promise;
    } });
    var index_45 = require_readonly2();
    Object.defineProperty(exports, "Readonly", { enumerable: true, get: function() {
      return index_45.Readonly;
    } });
    Object.defineProperty(exports, "ReadonlyFromMappedResult", { enumerable: true, get: function() {
      return index_45.ReadonlyFromMappedResult;
    } });
    var index_46 = require_readonly_optional2();
    Object.defineProperty(exports, "ReadonlyOptional", { enumerable: true, get: function() {
      return index_46.ReadonlyOptional;
    } });
    var index_47 = require_record2();
    Object.defineProperty(exports, "Record", { enumerable: true, get: function() {
      return index_47.Record;
    } });
    var index_48 = require_recursive2();
    Object.defineProperty(exports, "Recursive", { enumerable: true, get: function() {
      return index_48.Recursive;
    } });
    var index_49 = require_ref2();
    Object.defineProperty(exports, "Ref", { enumerable: true, get: function() {
      return index_49.Ref;
    } });
    var index_50 = require_regexp2();
    Object.defineProperty(exports, "RegExp", { enumerable: true, get: function() {
      return index_50.RegExp;
    } });
    var index_51 = require_required2();
    Object.defineProperty(exports, "Required", { enumerable: true, get: function() {
      return index_51.Required;
    } });
    var index_52 = require_rest2();
    Object.defineProperty(exports, "Rest", { enumerable: true, get: function() {
      return index_52.Rest;
    } });
    var index_53 = require_return_type2();
    Object.defineProperty(exports, "ReturnType", { enumerable: true, get: function() {
      return index_53.ReturnType;
    } });
    var index_54 = require_strict2();
    Object.defineProperty(exports, "Strict", { enumerable: true, get: function() {
      return index_54.Strict;
    } });
    var index_55 = require_string2();
    Object.defineProperty(exports, "String", { enumerable: true, get: function() {
      return index_55.String;
    } });
    var index_56 = require_symbol2();
    Object.defineProperty(exports, "Symbol", { enumerable: true, get: function() {
      return index_56.Symbol;
    } });
    var index_57 = require_template_literal2();
    Object.defineProperty(exports, "TemplateLiteral", { enumerable: true, get: function() {
      return index_57.TemplateLiteral;
    } });
    Object.defineProperty(exports, "TemplateLiteralSyntax", { enumerable: true, get: function() {
      return index_57.TemplateLiteralSyntax;
    } });
    Object.defineProperty(exports, "TemplateLiteralGenerate", { enumerable: true, get: function() {
      return index_57.TemplateLiteralGenerate;
    } });
    Object.defineProperty(exports, "TemplateLiteralParse", { enumerable: true, get: function() {
      return index_57.TemplateLiteralParse;
    } });
    Object.defineProperty(exports, "TemplateLiteralParseExact", { enumerable: true, get: function() {
      return index_57.TemplateLiteralParseExact;
    } });
    Object.defineProperty(exports, "IsTemplateLiteralFinite", { enumerable: true, get: function() {
      return index_57.IsTemplateLiteralFinite;
    } });
    Object.defineProperty(exports, "TemplateLiteralExpressionGenerate", { enumerable: true, get: function() {
      return index_57.TemplateLiteralExpressionGenerate;
    } });
    Object.defineProperty(exports, "IsTemplateLiteralExpressionFinite", { enumerable: true, get: function() {
      return index_57.IsTemplateLiteralExpressionFinite;
    } });
    var index_58 = require_transform3();
    Object.defineProperty(exports, "Transform", { enumerable: true, get: function() {
      return index_58.Transform;
    } });
    Object.defineProperty(exports, "TransformDecodeBuilder", { enumerable: true, get: function() {
      return index_58.TransformDecodeBuilder;
    } });
    Object.defineProperty(exports, "TransformEncodeBuilder", { enumerable: true, get: function() {
      return index_58.TransformEncodeBuilder;
    } });
    var index_59 = require_tuple2();
    Object.defineProperty(exports, "Tuple", { enumerable: true, get: function() {
      return index_59.Tuple;
    } });
    var index_60 = require_uint8array2();
    Object.defineProperty(exports, "Uint8Array", { enumerable: true, get: function() {
      return index_60.Uint8Array;
    } });
    var index_61 = require_undefined2();
    Object.defineProperty(exports, "Undefined", { enumerable: true, get: function() {
      return index_61.Undefined;
    } });
    var index_62 = require_union2();
    Object.defineProperty(exports, "Union", { enumerable: true, get: function() {
      return index_62.Union;
    } });
    Object.defineProperty(exports, "UnionEvaluated", { enumerable: true, get: function() {
      return index_62.UnionEvaluated;
    } });
    var index_63 = require_unknown2();
    Object.defineProperty(exports, "Unknown", { enumerable: true, get: function() {
      return index_63.Unknown;
    } });
    var index_64 = require_unsafe2();
    Object.defineProperty(exports, "Unsafe", { enumerable: true, get: function() {
      return index_64.Unsafe;
    } });
    var index_65 = require_void2();
    Object.defineProperty(exports, "Void", { enumerable: true, get: function() {
      return index_65.Void;
    } });
    var index_66 = require_type5();
    Object.defineProperty(exports, "Type", { enumerable: true, get: function() {
      return index_66.Type;
    } });
    Object.defineProperty(exports, "JsonTypeBuilder", { enumerable: true, get: function() {
      return index_66.JsonTypeBuilder;
    } });
    Object.defineProperty(exports, "JavaScriptTypeBuilder", { enumerable: true, get: function() {
      return index_66.JavaScriptTypeBuilder;
    } });
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/compiler/compiler.js
var require_compiler = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/compiler/compiler.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TypeCompiler = exports.Policy = exports.TypeCompilerTypeGuardError = exports.TypeCompilerUnknownTypeError = exports.TypeCheck = void 0;
    var index_1 = require_transform();
    var index_2 = require_errors2();
    var index_3 = require_system2();
    var index_4 = require_error2();
    var index_5 = require_deref2();
    var index_6 = require_hash2();
    var index_7 = require_symbols2();
    var index_8 = require_registry();
    var index_9 = require_keyof2();
    var extends_undefined_1 = require_extends_undefined();
    var index_10 = require_never2();
    var index_11 = require_guard2();
    var type_1 = require_type3();
    var TypeCheck = class {
      constructor(schema, references, checkFunc, code) {
        this.schema = schema;
        this.references = references;
        this.checkFunc = checkFunc;
        this.code = code;
        this.hasTransform = (0, index_1.HasTransform)(schema, references);
      }
      /** Returns the generated assertion code used to validate this type. */
      Code() {
        return this.code;
      }
      /** Returns an iterator for each error in this value. */
      Errors(value) {
        return (0, index_2.Errors)(this.schema, this.references, value);
      }
      /** Returns true if the value matches the compiled type. */
      Check(value) {
        return this.checkFunc(value);
      }
      /** Decodes a value or throws if error */
      Decode(value) {
        if (!this.checkFunc(value))
          throw new index_1.TransformDecodeCheckError(this.schema, value, this.Errors(value).First());
        return this.hasTransform ? (0, index_1.TransformDecode)(this.schema, this.references, value) : value;
      }
      /** Encodes a value or throws if error */
      Encode(value) {
        const encoded = this.hasTransform ? (0, index_1.TransformEncode)(this.schema, this.references, value) : value;
        if (!this.checkFunc(encoded))
          throw new index_1.TransformEncodeCheckError(this.schema, value, this.Errors(value).First());
        return encoded;
      }
    };
    exports.TypeCheck = TypeCheck;
    var Character;
    (function(Character2) {
      function DollarSign(code) {
        return code === 36;
      }
      Character2.DollarSign = DollarSign;
      function IsUnderscore(code) {
        return code === 95;
      }
      Character2.IsUnderscore = IsUnderscore;
      function IsAlpha(code) {
        return code >= 65 && code <= 90 || code >= 97 && code <= 122;
      }
      Character2.IsAlpha = IsAlpha;
      function IsNumeric(code) {
        return code >= 48 && code <= 57;
      }
      Character2.IsNumeric = IsNumeric;
    })(Character || (Character = {}));
    var MemberExpression;
    (function(MemberExpression2) {
      function IsFirstCharacterNumeric(value) {
        if (value.length === 0)
          return false;
        return Character.IsNumeric(value.charCodeAt(0));
      }
      function IsAccessor(value) {
        if (IsFirstCharacterNumeric(value))
          return false;
        for (let i = 0; i < value.length; i++) {
          const code = value.charCodeAt(i);
          const check = Character.IsAlpha(code) || Character.IsNumeric(code) || Character.DollarSign(code) || Character.IsUnderscore(code);
          if (!check)
            return false;
        }
        return true;
      }
      function EscapeHyphen(key) {
        return key.replace(/'/g, "\\'");
      }
      function Encode(object, key) {
        return IsAccessor(key) ? `${object}.${key}` : `${object}['${EscapeHyphen(key)}']`;
      }
      MemberExpression2.Encode = Encode;
    })(MemberExpression || (MemberExpression = {}));
    var Identifier;
    (function(Identifier2) {
      function Encode($id) {
        const buffer = [];
        for (let i = 0; i < $id.length; i++) {
          const code = $id.charCodeAt(i);
          if (Character.IsNumeric(code) || Character.IsAlpha(code)) {
            buffer.push($id.charAt(i));
          } else {
            buffer.push(`_${code}_`);
          }
        }
        return buffer.join("").replace(/__/g, "_");
      }
      Identifier2.Encode = Encode;
    })(Identifier || (Identifier = {}));
    var LiteralString;
    (function(LiteralString2) {
      function Escape(content) {
        return content.replace(/'/g, "\\'");
      }
      LiteralString2.Escape = Escape;
    })(LiteralString || (LiteralString = {}));
    var TypeCompilerUnknownTypeError = class extends index_4.TypeBoxError {
      constructor(schema) {
        super("Unknown type");
        this.schema = schema;
      }
    };
    exports.TypeCompilerUnknownTypeError = TypeCompilerUnknownTypeError;
    var TypeCompilerTypeGuardError = class extends index_4.TypeBoxError {
      constructor(schema) {
        super("Preflight validation check failed to guard for the given schema");
        this.schema = schema;
      }
    };
    exports.TypeCompilerTypeGuardError = TypeCompilerTypeGuardError;
    var Policy;
    (function(Policy2) {
      function IsExactOptionalProperty(value, key, expression) {
        return index_3.TypeSystemPolicy.ExactOptionalPropertyTypes ? `('${key}' in ${value} ? ${expression} : true)` : `(${MemberExpression.Encode(value, key)} !== undefined ? ${expression} : true)`;
      }
      Policy2.IsExactOptionalProperty = IsExactOptionalProperty;
      function IsObjectLike(value) {
        return !index_3.TypeSystemPolicy.AllowArrayObject ? `(typeof ${value} === 'object' && ${value} !== null && !Array.isArray(${value}))` : `(typeof ${value} === 'object' && ${value} !== null)`;
      }
      Policy2.IsObjectLike = IsObjectLike;
      function IsRecordLike(value) {
        return !index_3.TypeSystemPolicy.AllowArrayObject ? `(typeof ${value} === 'object' && ${value} !== null && !Array.isArray(${value}) && !(${value} instanceof Date) && !(${value} instanceof Uint8Array))` : `(typeof ${value} === 'object' && ${value} !== null && !(${value} instanceof Date) && !(${value} instanceof Uint8Array))`;
      }
      Policy2.IsRecordLike = IsRecordLike;
      function IsNumberLike(value) {
        return !index_3.TypeSystemPolicy.AllowNaN ? `(typeof ${value} === 'number' && Number.isFinite(${value}))` : `typeof ${value} === 'number'`;
      }
      Policy2.IsNumberLike = IsNumberLike;
      function IsVoidLike(value) {
        return index_3.TypeSystemPolicy.AllowNullVoid ? `(${value} === undefined || ${value} === null)` : `${value} === undefined`;
      }
      Policy2.IsVoidLike = IsVoidLike;
    })(Policy || (exports.Policy = Policy = {}));
    var TypeCompiler;
    (function(TypeCompiler2) {
      function IsAnyOrUnknown(schema) {
        return schema[index_7.Kind] === "Any" || schema[index_7.Kind] === "Unknown";
      }
      function* FromAny(schema, references, value) {
        yield "true";
      }
      function* FromArray(schema, references, value) {
        yield `Array.isArray(${value})`;
        const [parameter, accumulator] = [CreateParameter("value", "any"), CreateParameter("acc", "number")];
        if ((0, index_11.IsNumber)(schema.maxItems))
          yield `${value}.length <= ${schema.maxItems}`;
        if ((0, index_11.IsNumber)(schema.minItems))
          yield `${value}.length >= ${schema.minItems}`;
        const elementExpression = CreateExpression(schema.items, references, "value");
        yield `${value}.every((${parameter}) => ${elementExpression})`;
        if ((0, type_1.IsSchema)(schema.contains) || (0, index_11.IsNumber)(schema.minContains) || (0, index_11.IsNumber)(schema.maxContains)) {
          const containsSchema = (0, type_1.IsSchema)(schema.contains) ? schema.contains : (0, index_10.Never)();
          const checkExpression = CreateExpression(containsSchema, references, "value");
          const checkMinContains = (0, index_11.IsNumber)(schema.minContains) ? [`(count >= ${schema.minContains})`] : [];
          const checkMaxContains = (0, index_11.IsNumber)(schema.maxContains) ? [`(count <= ${schema.maxContains})`] : [];
          const checkCount = `const count = value.reduce((${accumulator}, ${parameter}) => ${checkExpression} ? acc + 1 : acc, 0)`;
          const check = [`(count > 0)`, ...checkMinContains, ...checkMaxContains].join(" && ");
          yield `((${parameter}) => { ${checkCount}; return ${check}})(${value})`;
        }
        if (schema.uniqueItems === true) {
          const check = `const hashed = hash(element); if(set.has(hashed)) { return false } else { set.add(hashed) } } return true`;
          const block = `const set = new Set(); for(const element of value) { ${check} }`;
          yield `((${parameter}) => { ${block} )(${value})`;
        }
      }
      function* FromAsyncIterator(schema, references, value) {
        yield `(typeof value === 'object' && Symbol.asyncIterator in ${value})`;
      }
      function* FromBigInt(schema, references, value) {
        yield `(typeof ${value} === 'bigint')`;
        if ((0, index_11.IsBigInt)(schema.exclusiveMaximum))
          yield `${value} < BigInt(${schema.exclusiveMaximum})`;
        if ((0, index_11.IsBigInt)(schema.exclusiveMinimum))
          yield `${value} > BigInt(${schema.exclusiveMinimum})`;
        if ((0, index_11.IsBigInt)(schema.maximum))
          yield `${value} <= BigInt(${schema.maximum})`;
        if ((0, index_11.IsBigInt)(schema.minimum))
          yield `${value} >= BigInt(${schema.minimum})`;
        if ((0, index_11.IsBigInt)(schema.multipleOf))
          yield `(${value} % BigInt(${schema.multipleOf})) === 0`;
      }
      function* FromBoolean(schema, references, value) {
        yield `(typeof ${value} === 'boolean')`;
      }
      function* FromConstructor(schema, references, value) {
        yield* Visit(schema.returns, references, `${value}.prototype`);
      }
      function* FromDate(schema, references, value) {
        yield `(${value} instanceof Date) && Number.isFinite(${value}.getTime())`;
        if ((0, index_11.IsNumber)(schema.exclusiveMaximumTimestamp))
          yield `${value}.getTime() < ${schema.exclusiveMaximumTimestamp}`;
        if ((0, index_11.IsNumber)(schema.exclusiveMinimumTimestamp))
          yield `${value}.getTime() > ${schema.exclusiveMinimumTimestamp}`;
        if ((0, index_11.IsNumber)(schema.maximumTimestamp))
          yield `${value}.getTime() <= ${schema.maximumTimestamp}`;
        if ((0, index_11.IsNumber)(schema.minimumTimestamp))
          yield `${value}.getTime() >= ${schema.minimumTimestamp}`;
        if ((0, index_11.IsNumber)(schema.multipleOfTimestamp))
          yield `(${value}.getTime() % ${schema.multipleOfTimestamp}) === 0`;
      }
      function* FromFunction(schema, references, value) {
        yield `(typeof ${value} === 'function')`;
      }
      function* FromInteger(schema, references, value) {
        yield `(typeof ${value} === 'number' && Number.isInteger(${value}))`;
        if ((0, index_11.IsNumber)(schema.exclusiveMaximum))
          yield `${value} < ${schema.exclusiveMaximum}`;
        if ((0, index_11.IsNumber)(schema.exclusiveMinimum))
          yield `${value} > ${schema.exclusiveMinimum}`;
        if ((0, index_11.IsNumber)(schema.maximum))
          yield `${value} <= ${schema.maximum}`;
        if ((0, index_11.IsNumber)(schema.minimum))
          yield `${value} >= ${schema.minimum}`;
        if ((0, index_11.IsNumber)(schema.multipleOf))
          yield `(${value} % ${schema.multipleOf}) === 0`;
      }
      function* FromIntersect(schema, references, value) {
        const check1 = schema.allOf.map((schema2) => CreateExpression(schema2, references, value)).join(" && ");
        if (schema.unevaluatedProperties === false) {
          const keyCheck = CreateVariable(`${new RegExp((0, index_9.KeyOfPattern)(schema))};`);
          const check2 = `Object.getOwnPropertyNames(${value}).every(key => ${keyCheck}.test(key))`;
          yield `(${check1} && ${check2})`;
        } else if ((0, type_1.IsSchema)(schema.unevaluatedProperties)) {
          const keyCheck = CreateVariable(`${new RegExp((0, index_9.KeyOfPattern)(schema))};`);
          const check2 = `Object.getOwnPropertyNames(${value}).every(key => ${keyCheck}.test(key) || ${CreateExpression(schema.unevaluatedProperties, references, `${value}[key]`)})`;
          yield `(${check1} && ${check2})`;
        } else {
          yield `(${check1})`;
        }
      }
      function* FromIterator(schema, references, value) {
        yield `(typeof value === 'object' && Symbol.iterator in ${value})`;
      }
      function* FromLiteral(schema, references, value) {
        if (typeof schema.const === "number" || typeof schema.const === "boolean") {
          yield `(${value} === ${schema.const})`;
        } else {
          yield `(${value} === '${LiteralString.Escape(schema.const)}')`;
        }
      }
      function* FromNever(schema, references, value) {
        yield `false`;
      }
      function* FromNot(schema, references, value) {
        const expression = CreateExpression(schema.not, references, value);
        yield `(!${expression})`;
      }
      function* FromNull(schema, references, value) {
        yield `(${value} === null)`;
      }
      function* FromNumber(schema, references, value) {
        yield Policy.IsNumberLike(value);
        if ((0, index_11.IsNumber)(schema.exclusiveMaximum))
          yield `${value} < ${schema.exclusiveMaximum}`;
        if ((0, index_11.IsNumber)(schema.exclusiveMinimum))
          yield `${value} > ${schema.exclusiveMinimum}`;
        if ((0, index_11.IsNumber)(schema.maximum))
          yield `${value} <= ${schema.maximum}`;
        if ((0, index_11.IsNumber)(schema.minimum))
          yield `${value} >= ${schema.minimum}`;
        if ((0, index_11.IsNumber)(schema.multipleOf))
          yield `(${value} % ${schema.multipleOf}) === 0`;
      }
      function* FromObject(schema, references, value) {
        yield Policy.IsObjectLike(value);
        if ((0, index_11.IsNumber)(schema.minProperties))
          yield `Object.getOwnPropertyNames(${value}).length >= ${schema.minProperties}`;
        if ((0, index_11.IsNumber)(schema.maxProperties))
          yield `Object.getOwnPropertyNames(${value}).length <= ${schema.maxProperties}`;
        const knownKeys = Object.getOwnPropertyNames(schema.properties);
        for (const knownKey of knownKeys) {
          const memberExpression = MemberExpression.Encode(value, knownKey);
          const property = schema.properties[knownKey];
          if (schema.required && schema.required.includes(knownKey)) {
            yield* Visit(property, references, memberExpression);
            if ((0, extends_undefined_1.ExtendsUndefinedCheck)(property) || IsAnyOrUnknown(property))
              yield `('${knownKey}' in ${value})`;
          } else {
            const expression = CreateExpression(property, references, memberExpression);
            yield Policy.IsExactOptionalProperty(value, knownKey, expression);
          }
        }
        if (schema.additionalProperties === false) {
          if (schema.required && schema.required.length === knownKeys.length) {
            yield `Object.getOwnPropertyNames(${value}).length === ${knownKeys.length}`;
          } else {
            const keys = `[${knownKeys.map((key) => `'${key}'`).join(", ")}]`;
            yield `Object.getOwnPropertyNames(${value}).every(key => ${keys}.includes(key))`;
          }
        }
        if (typeof schema.additionalProperties === "object") {
          const expression = CreateExpression(schema.additionalProperties, references, `${value}[key]`);
          const keys = `[${knownKeys.map((key) => `'${key}'`).join(", ")}]`;
          yield `(Object.getOwnPropertyNames(${value}).every(key => ${keys}.includes(key) || ${expression}))`;
        }
      }
      function* FromPromise(schema, references, value) {
        yield `(typeof value === 'object' && typeof ${value}.then === 'function')`;
      }
      function* FromRecord(schema, references, value) {
        yield Policy.IsRecordLike(value);
        if ((0, index_11.IsNumber)(schema.minProperties))
          yield `Object.getOwnPropertyNames(${value}).length >= ${schema.minProperties}`;
        if ((0, index_11.IsNumber)(schema.maxProperties))
          yield `Object.getOwnPropertyNames(${value}).length <= ${schema.maxProperties}`;
        const [patternKey, patternSchema] = Object.entries(schema.patternProperties)[0];
        const variable = CreateVariable(`${new RegExp(patternKey)}`);
        const check1 = CreateExpression(patternSchema, references, "value");
        const check2 = (0, type_1.IsSchema)(schema.additionalProperties) ? CreateExpression(schema.additionalProperties, references, value) : schema.additionalProperties === false ? "false" : "true";
        const expression = `(${variable}.test(key) ? ${check1} : ${check2})`;
        yield `(Object.entries(${value}).every(([key, value]) => ${expression}))`;
      }
      function* FromRef(schema, references, value) {
        const target = (0, index_5.Deref)(schema, references);
        if (state.functions.has(schema.$ref))
          return yield `${CreateFunctionName(schema.$ref)}(${value})`;
        yield* Visit(target, references, value);
      }
      function* FromRegExp(schema, references, value) {
        const variable = CreateVariable(`${new RegExp(schema.source, schema.flags)};`);
        yield `(typeof ${value} === 'string')`;
        yield `${variable}.test(${value})`;
      }
      function* FromString(schema, references, value) {
        yield `(typeof ${value} === 'string')`;
        if ((0, index_11.IsNumber)(schema.maxLength))
          yield `${value}.length <= ${schema.maxLength}`;
        if ((0, index_11.IsNumber)(schema.minLength))
          yield `${value}.length >= ${schema.minLength}`;
        if (schema.pattern !== void 0) {
          const variable = CreateVariable(`${new RegExp(schema.pattern)};`);
          yield `${variable}.test(${value})`;
        }
        if (schema.format !== void 0) {
          yield `format('${schema.format}', ${value})`;
        }
      }
      function* FromSymbol(schema, references, value) {
        yield `(typeof ${value} === 'symbol')`;
      }
      function* FromTemplateLiteral(schema, references, value) {
        yield `(typeof ${value} === 'string')`;
        const variable = CreateVariable(`${new RegExp(schema.pattern)};`);
        yield `${variable}.test(${value})`;
      }
      function* FromThis(schema, references, value) {
        yield `${CreateFunctionName(schema.$ref)}(${value})`;
      }
      function* FromTuple(schema, references, value) {
        yield `Array.isArray(${value})`;
        if (schema.items === void 0)
          return yield `${value}.length === 0`;
        yield `(${value}.length === ${schema.maxItems})`;
        for (let i = 0; i < schema.items.length; i++) {
          const expression = CreateExpression(schema.items[i], references, `${value}[${i}]`);
          yield `${expression}`;
        }
      }
      function* FromUndefined(schema, references, value) {
        yield `${value} === undefined`;
      }
      function* FromUnion(schema, references, value) {
        const expressions = schema.anyOf.map((schema2) => CreateExpression(schema2, references, value));
        yield `(${expressions.join(" || ")})`;
      }
      function* FromUint8Array(schema, references, value) {
        yield `${value} instanceof Uint8Array`;
        if ((0, index_11.IsNumber)(schema.maxByteLength))
          yield `(${value}.length <= ${schema.maxByteLength})`;
        if ((0, index_11.IsNumber)(schema.minByteLength))
          yield `(${value}.length >= ${schema.minByteLength})`;
      }
      function* FromUnknown(schema, references, value) {
        yield "true";
      }
      function* FromVoid(schema, references, value) {
        yield Policy.IsVoidLike(value);
      }
      function* FromKind(schema, references, value) {
        const instance = state.instances.size;
        state.instances.set(instance, schema);
        yield `kind('${schema[index_7.Kind]}', ${instance}, ${value})`;
      }
      function* Visit(schema, references, value, useHoisting = true) {
        const references_ = (0, index_11.IsString)(schema.$id) ? [...references, schema] : references;
        const schema_ = schema;
        if (useHoisting && (0, index_11.IsString)(schema.$id)) {
          const functionName = CreateFunctionName(schema.$id);
          if (state.functions.has(functionName)) {
            return yield `${functionName}(${value})`;
          } else {
            const functionCode = CreateFunction(functionName, schema, references, "value", false);
            state.functions.set(functionName, functionCode);
            return yield `${functionName}(${value})`;
          }
        }
        switch (schema_[index_7.Kind]) {
          case "Any":
            return yield* FromAny(schema_, references_, value);
          case "Array":
            return yield* FromArray(schema_, references_, value);
          case "AsyncIterator":
            return yield* FromAsyncIterator(schema_, references_, value);
          case "BigInt":
            return yield* FromBigInt(schema_, references_, value);
          case "Boolean":
            return yield* FromBoolean(schema_, references_, value);
          case "Constructor":
            return yield* FromConstructor(schema_, references_, value);
          case "Date":
            return yield* FromDate(schema_, references_, value);
          case "Function":
            return yield* FromFunction(schema_, references_, value);
          case "Integer":
            return yield* FromInteger(schema_, references_, value);
          case "Intersect":
            return yield* FromIntersect(schema_, references_, value);
          case "Iterator":
            return yield* FromIterator(schema_, references_, value);
          case "Literal":
            return yield* FromLiteral(schema_, references_, value);
          case "Never":
            return yield* FromNever(schema_, references_, value);
          case "Not":
            return yield* FromNot(schema_, references_, value);
          case "Null":
            return yield* FromNull(schema_, references_, value);
          case "Number":
            return yield* FromNumber(schema_, references_, value);
          case "Object":
            return yield* FromObject(schema_, references_, value);
          case "Promise":
            return yield* FromPromise(schema_, references_, value);
          case "Record":
            return yield* FromRecord(schema_, references_, value);
          case "Ref":
            return yield* FromRef(schema_, references_, value);
          case "RegExp":
            return yield* FromRegExp(schema_, references_, value);
          case "String":
            return yield* FromString(schema_, references_, value);
          case "Symbol":
            return yield* FromSymbol(schema_, references_, value);
          case "TemplateLiteral":
            return yield* FromTemplateLiteral(schema_, references_, value);
          case "This":
            return yield* FromThis(schema_, references_, value);
          case "Tuple":
            return yield* FromTuple(schema_, references_, value);
          case "Undefined":
            return yield* FromUndefined(schema_, references_, value);
          case "Union":
            return yield* FromUnion(schema_, references_, value);
          case "Uint8Array":
            return yield* FromUint8Array(schema_, references_, value);
          case "Unknown":
            return yield* FromUnknown(schema_, references_, value);
          case "Void":
            return yield* FromVoid(schema_, references_, value);
          default:
            if (!index_8.TypeRegistry.Has(schema_[index_7.Kind]))
              throw new TypeCompilerUnknownTypeError(schema);
            return yield* FromKind(schema_, references_, value);
        }
      }
      const state = {
        language: "javascript",
        // target language
        functions: /* @__PURE__ */ new Map(),
        // local functions
        variables: /* @__PURE__ */ new Map(),
        // local variables
        instances: /* @__PURE__ */ new Map()
        // exterior kind instances
      };
      function CreateExpression(schema, references, value, useHoisting = true) {
        return `(${[...Visit(schema, references, value, useHoisting)].join(" && ")})`;
      }
      function CreateFunctionName($id) {
        return `check_${Identifier.Encode($id)}`;
      }
      function CreateVariable(expression) {
        const variableName = `local_${state.variables.size}`;
        state.variables.set(variableName, `const ${variableName} = ${expression}`);
        return variableName;
      }
      function CreateFunction(name, schema, references, value, useHoisting = true) {
        const [newline, pad] = ["\n", (length) => "".padStart(length, " ")];
        const parameter = CreateParameter("value", "any");
        const returns = CreateReturns("boolean");
        const expression = [...Visit(schema, references, value, useHoisting)].map((expression2) => `${pad(4)}${expression2}`).join(` &&${newline}`);
        return `function ${name}(${parameter})${returns} {${newline}${pad(2)}return (${newline}${expression}${newline}${pad(2)})
}`;
      }
      function CreateParameter(name, type) {
        const annotation = state.language === "typescript" ? `: ${type}` : "";
        return `${name}${annotation}`;
      }
      function CreateReturns(type) {
        return state.language === "typescript" ? `: ${type}` : "";
      }
      function Build(schema, references, options) {
        const functionCode = CreateFunction("check", schema, references, "value");
        const parameter = CreateParameter("value", "any");
        const returns = CreateReturns("boolean");
        const functions = [...state.functions.values()];
        const variables = [...state.variables.values()];
        const checkFunction = (0, index_11.IsString)(schema.$id) ? `return function check(${parameter})${returns} {
  return ${CreateFunctionName(schema.$id)}(value)
}` : `return ${functionCode}`;
        return [...variables, ...functions, checkFunction].join("\n");
      }
      function Code(...args) {
        const defaults = { language: "javascript" };
        const [schema, references, options] = args.length === 2 && (0, index_11.IsArray)(args[1]) ? [args[0], args[1], defaults] : args.length === 2 && !(0, index_11.IsArray)(args[1]) ? [args[0], [], args[1]] : args.length === 3 ? [args[0], args[1], args[2]] : args.length === 1 ? [args[0], [], defaults] : [null, [], defaults];
        state.language = options.language;
        state.variables.clear();
        state.functions.clear();
        state.instances.clear();
        if (!(0, type_1.IsSchema)(schema))
          throw new TypeCompilerTypeGuardError(schema);
        for (const schema2 of references)
          if (!(0, type_1.IsSchema)(schema2))
            throw new TypeCompilerTypeGuardError(schema2);
        return Build(schema, references, options);
      }
      TypeCompiler2.Code = Code;
      function Compile(schema, references = []) {
        const generatedCode = Code(schema, references, { language: "javascript" });
        const compiledFunction = globalThis.Function("kind", "format", "hash", generatedCode);
        const instances = new Map(state.instances);
        function typeRegistryFunction(kind, instance, value) {
          if (!index_8.TypeRegistry.Has(kind) || !instances.has(instance))
            return false;
          const checkFunc = index_8.TypeRegistry.Get(kind);
          const schema2 = instances.get(instance);
          return checkFunc(schema2, value);
        }
        function formatRegistryFunction(format, value) {
          if (!index_8.FormatRegistry.Has(format))
            return false;
          const checkFunc = index_8.FormatRegistry.Get(format);
          return checkFunc(value);
        }
        function hashFunction(value) {
          return (0, index_6.Hash)(value);
        }
        const checkFunction = compiledFunction(typeRegistryFunction, formatRegistryFunction, hashFunction);
        return new TypeCheck(schema, references, checkFunction, generatedCode);
      }
      TypeCompiler2.Compile = Compile;
    })(TypeCompiler || (exports.TypeCompiler = TypeCompiler = {}));
  }
});

// ../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/compiler/index.js
var require_compiler2 = __commonJS({
  "../../../node_modules/.pnpm/@sinclair+typebox@0.32.9/node_modules/@sinclair/typebox/build/require/compiler/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TypeCompilerUnknownTypeError = exports.TypeCompilerTypeGuardError = exports.TypeCheck = exports.TypeCompiler = exports.ValueErrorIterator = exports.ValueErrorType = void 0;
    var index_1 = require_errors2();
    Object.defineProperty(exports, "ValueErrorType", { enumerable: true, get: function() {
      return index_1.ValueErrorType;
    } });
    Object.defineProperty(exports, "ValueErrorIterator", { enumerable: true, get: function() {
      return index_1.ValueErrorIterator;
    } });
    var compiler_1 = require_compiler();
    Object.defineProperty(exports, "TypeCompiler", { enumerable: true, get: function() {
      return compiler_1.TypeCompiler;
    } });
    Object.defineProperty(exports, "TypeCheck", { enumerable: true, get: function() {
      return compiler_1.TypeCheck;
    } });
    Object.defineProperty(exports, "TypeCompilerTypeGuardError", { enumerable: true, get: function() {
      return compiler_1.TypeCompilerTypeGuardError;
    } });
    Object.defineProperty(exports, "TypeCompilerUnknownTypeError", { enumerable: true, get: function() {
      return compiler_1.TypeCompilerUnknownTypeError;
    } });
  }
});

// ../../../node_modules/.pnpm/cookie@0.6.0/node_modules/cookie/index.js
var require_cookie = __commonJS({
  "../../../node_modules/.pnpm/cookie@0.6.0/node_modules/cookie/index.js"(exports) {
    "use strict";
    exports.parse = parse;
    exports.serialize = serialize;
    var __toString = Object.prototype.toString;
    var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
    function parse(str, options) {
      if (typeof str !== "string") {
        throw new TypeError("argument str must be a string");
      }
      var obj = {};
      var opt = options || {};
      var dec = opt.decode || decode;
      var index = 0;
      while (index < str.length) {
        var eqIdx = str.indexOf("=", index);
        if (eqIdx === -1) {
          break;
        }
        var endIdx = str.indexOf(";", index);
        if (endIdx === -1) {
          endIdx = str.length;
        } else if (endIdx < eqIdx) {
          index = str.lastIndexOf(";", eqIdx - 1) + 1;
          continue;
        }
        var key = str.slice(index, eqIdx).trim();
        if (void 0 === obj[key]) {
          var val = str.slice(eqIdx + 1, endIdx).trim();
          if (val.charCodeAt(0) === 34) {
            val = val.slice(1, -1);
          }
          obj[key] = tryDecode(val, dec);
        }
        index = endIdx + 1;
      }
      return obj;
    }
    function serialize(name, val, options) {
      var opt = options || {};
      var enc = opt.encode || encode;
      if (typeof enc !== "function") {
        throw new TypeError("option encode is invalid");
      }
      if (!fieldContentRegExp.test(name)) {
        throw new TypeError("argument name is invalid");
      }
      var value = enc(val);
      if (value && !fieldContentRegExp.test(value)) {
        throw new TypeError("argument val is invalid");
      }
      var str = name + "=" + value;
      if (null != opt.maxAge) {
        var maxAge = opt.maxAge - 0;
        if (isNaN(maxAge) || !isFinite(maxAge)) {
          throw new TypeError("option maxAge is invalid");
        }
        str += "; Max-Age=" + Math.floor(maxAge);
      }
      if (opt.domain) {
        if (!fieldContentRegExp.test(opt.domain)) {
          throw new TypeError("option domain is invalid");
        }
        str += "; Domain=" + opt.domain;
      }
      if (opt.path) {
        if (!fieldContentRegExp.test(opt.path)) {
          throw new TypeError("option path is invalid");
        }
        str += "; Path=" + opt.path;
      }
      if (opt.expires) {
        var expires = opt.expires;
        if (!isDate(expires) || isNaN(expires.valueOf())) {
          throw new TypeError("option expires is invalid");
        }
        str += "; Expires=" + expires.toUTCString();
      }
      if (opt.httpOnly) {
        str += "; HttpOnly";
      }
      if (opt.secure) {
        str += "; Secure";
      }
      if (opt.partitioned) {
        str += "; Partitioned";
      }
      if (opt.priority) {
        var priority = typeof opt.priority === "string" ? opt.priority.toLowerCase() : opt.priority;
        switch (priority) {
          case "low":
            str += "; Priority=Low";
            break;
          case "medium":
            str += "; Priority=Medium";
            break;
          case "high":
            str += "; Priority=High";
            break;
          default:
            throw new TypeError("option priority is invalid");
        }
      }
      if (opt.sameSite) {
        var sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
        switch (sameSite) {
          case true:
            str += "; SameSite=Strict";
            break;
          case "lax":
            str += "; SameSite=Lax";
            break;
          case "strict":
            str += "; SameSite=Strict";
            break;
          case "none":
            str += "; SameSite=None";
            break;
          default:
            throw new TypeError("option sameSite is invalid");
        }
      }
      return str;
    }
    function decode(str) {
      return str.indexOf("%") !== -1 ? decodeURIComponent(str) : str;
    }
    function encode(val) {
      return encodeURIComponent(val);
    }
    function isDate(val) {
      return __toString.call(val) === "[object Date]" || val instanceof Date;
    }
    function tryDecode(str, decode2) {
      try {
        return decode2(str);
      } catch (e) {
        return str;
      }
    }
  }
});

// ../../../node_modules/.pnpm/elysia@0.8.9_@sinclair+typebox@0.32.9_typescript@5.4.0-dev.20231224/node_modules/elysia/dist/cjs/cookie.js
var require_cookie2 = __commonJS({
  "../../../node_modules/.pnpm/elysia@0.8.9_@sinclair+typebox@0.32.9_typescript@5.4.0-dev.20231224/node_modules/elysia/dist/cjs/cookie.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.parseCookie = exports.createCookieJar = exports.Cookie = void 0;
    var cookie_1 = require_cookie();
    var utils_1 = require_utils();
    var error_1 = require_error3();
    var Cookie = class {
      constructor(_value, property = {}) {
        this._value = _value;
        this.property = property;
      }
      get() {
        return this._value;
      }
      get value() {
        return this._value;
      }
      set value(value) {
        if (typeof value === "object") {
          if (JSON.stringify(this.value) === JSON.stringify(value))
            return;
        } else if (this.value === value)
          return;
        this._value = value;
        this.sync();
      }
      add(config) {
        const updated = Object.assign(this.property, typeof config === "function" ? config(Object.assign(this.property, this.value)) : config);
        if ("value" in updated) {
          this._value = updated.value;
          delete updated.value;
        }
        this.property = updated;
        return this.sync();
      }
      set(config) {
        const updated = typeof config === "function" ? config(Object.assign(this.property, this.value)) : config;
        if ("value" in updated) {
          this._value = updated.value;
          delete updated.value;
        }
        this.property = updated;
        return this.sync();
      }
      remove(options) {
        if (this.value === void 0)
          return;
        this.set({
          domain: options?.domain,
          expires: /* @__PURE__ */ new Date(0),
          maxAge: 0,
          path: options?.path,
          sameSite: options?.sameSite,
          secure: options?.secure,
          value: ""
        });
      }
      get domain() {
        return this.property.domain;
      }
      set domain(value) {
        if (this.property.domain === value)
          return;
        this.property.domain = value;
        this.sync();
      }
      get expires() {
        return this.property.expires;
      }
      set expires(value) {
        if (this.property.expires?.getTime() === value?.getTime())
          return;
        this.property.expires = value;
        this.sync();
      }
      get httpOnly() {
        return this.property.httpOnly;
      }
      set httpOnly(value) {
        if (this.property.domain === value)
          return;
        this.property.httpOnly = value;
        this.sync();
      }
      get maxAge() {
        return this.property.maxAge;
      }
      set maxAge(value) {
        if (this.property.maxAge === value)
          return;
        this.property.maxAge = value;
        this.sync();
      }
      get path() {
        return this.property.path;
      }
      set path(value) {
        if (this.property.path === value)
          return;
        this.property.path = value;
        this.sync();
      }
      get priority() {
        return this.property.priority;
      }
      set priority(value) {
        if (this.property.priority === value)
          return;
        this.property.priority = value;
        this.sync();
      }
      get sameSite() {
        return this.property.sameSite;
      }
      set sameSite(value) {
        if (this.property.sameSite === value)
          return;
        this.property.sameSite = value;
        this.sync();
      }
      get secure() {
        return this.property.secure;
      }
      set secure(value) {
        if (this.property.secure === value)
          return;
        this.property.secure = value;
        this.sync();
      }
      toString() {
        return typeof this.value === "object" ? JSON.stringify(this.value) : this.value?.toString() ?? "";
      }
      sync() {
        if (!this.name || !this.setter)
          return this;
        if (!this.setter.cookie)
          this.setter.cookie = {
            [this.name]: Object.assign(this.property, {
              value: this.toString()
            })
          };
        else
          this.setter.cookie[this.name] = Object.assign(this.property, {
            value: this.toString()
          });
        return this;
      }
    };
    exports.Cookie = Cookie;
    var createCookieJar = (initial, set, properties) => new Proxy(initial, {
      get(target, key) {
        if (key in target)
          return target[key];
        const cookie = new Cookie(void 0, properties ? { ...properties } : void 0);
        cookie.setter = set;
        cookie.name = key;
        return cookie;
      },
      set(target, key, value) {
        if (!(value instanceof Cookie))
          return false;
        if (!set.cookie)
          set.cookie = {};
        value.setter = set;
        value.name = key;
        value.sync();
        target[key] = value;
        return true;
      }
    });
    exports.createCookieJar = createCookieJar;
    var parseCookie = async (set, cookieString, { secret, sign, ...properties } = {}) => {
      if (!cookieString)
        return (0, exports.createCookieJar)({}, set, properties);
      const jar = {};
      const isStringKey = typeof secret === "string";
      if (sign && sign !== true && !Array.isArray(sign))
        sign = [sign];
      const cookieKeys = Object.keys((0, cookie_1.parse)(cookieString));
      for (let i = 0; i < cookieKeys.length; i++) {
        const key = cookieKeys[i];
        let value = (0, cookie_1.parse)(cookieString)[key];
        if (sign === true || sign?.includes(key)) {
          if (!secret)
            throw new Error("No secret is provided to cookie plugin");
          if (isStringKey) {
            value = await (0, utils_1.unsignCookie)(value, secret);
            if (value === false)
              throw new error_1.InvalidCookieSignature(key);
          } else {
            let fail = true;
            for (let i2 = 0; i2 < secret.length; i2++) {
              const temp = await (0, utils_1.unsignCookie)(value, secret[i2]);
              if (temp !== false) {
                value = temp;
                fail = false;
                break;
              }
            }
            if (fail)
              throw new error_1.InvalidCookieSignature(key);
          }
        }
        if (value === void 0)
          continue;
        const start = value.charCodeAt(0);
        if (start === 123 || start === 91)
          try {
            const cookie2 = new Cookie(JSON.parse(value));
            cookie2.setter = set;
            cookie2.name = key;
            jar[key] = cookie2;
            continue;
          } catch {
          }
        if ((0, utils_1.isNumericString)(value))
          value = +value;
        else if (value === "true")
          value = true;
        else if (value === "false")
          value = false;
        const cookie = new Cookie(value, properties);
        cookie.setter = set;
        cookie.name = key;
        jar[key] = cookie;
      }
      return (0, exports.createCookieJar)(jar, set);
    };
    exports.parseCookie = parseCookie;
  }
});

// ../../../node_modules/.pnpm/elysia@0.8.9_@sinclair+typebox@0.32.9_typescript@5.4.0-dev.20231224/node_modules/elysia/dist/cjs/handler.js
var require_handler = __commonJS({
  "../../../node_modules/.pnpm/elysia@0.8.9_@sinclair+typebox@0.32.9_typescript@5.4.0-dev.20231224/node_modules/elysia/dist/cjs/handler.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.errorToResponse = exports.mapCompactResponse = exports.mapEarlyResponse = exports.mapResponse = exports.cookieToHeader = exports.parseSetCookies = exports.isNotEmpty = void 0;
    var cookie_1 = require_cookie();
    var utils_1 = require_utils();
    var cookie_2 = require_cookie2();
    var error_1 = require_error3();
    var hasHeaderShorthand = "toJSON" in new Headers();
    var isNotEmpty = (obj) => {
      for (const x in obj)
        return true;
      return false;
    };
    exports.isNotEmpty = isNotEmpty;
    var handleFile = (response, set) => {
      const size = response.size;
      if (size && set && set.status !== 206 && set.status !== 304 && set.status !== 412 && set.status !== 416 || !set && size) {
        if (set) {
          if (set.headers instanceof Headers) {
            if (hasHeaderShorthand)
              set.headers = set.headers.toJSON();
            else
              for (const [key, value] of set.headers.entries())
                if (key in set.headers)
                  set.headers[key] = value;
          }
          return new Response(response, {
            status: set.status,
            headers: Object.assign({
              "accept-ranges": "bytes",
              "content-range": `bytes 0-${size - 1}/${size}`
            }, set.headers)
          });
        }
        return new Response(response, {
          headers: {
            "accept-ranges": "bytes",
            "content-range": `bytes 0-${size - 1}/${size}`
          }
        });
      }
      return new Response(response);
    };
    var parseSetCookies = (headers, setCookie) => {
      if (!headers || !Array.isArray(setCookie))
        return headers;
      headers.delete("Set-Cookie");
      for (let i = 0; i < setCookie.length; i++) {
        const index = setCookie[i].indexOf("=");
        headers.append("Set-Cookie", `${setCookie[i].slice(0, index)}=${setCookie[i].slice(index + 1)}`);
      }
      return headers;
    };
    exports.parseSetCookies = parseSetCookies;
    var cookieToHeader = (cookies) => {
      if (!cookies || typeof cookies !== "object" || !(0, exports.isNotEmpty)(cookies))
        return void 0;
      const set = [];
      for (const [key, property] of Object.entries(cookies)) {
        if (!key || !property)
          continue;
        if (Array.isArray(property.value)) {
          for (let i = 0; i < property.value.length; i++) {
            let value = property.value[i];
            if (value === void 0 || value === null)
              continue;
            if (typeof value === "object")
              value = JSON.stringify(value);
            set.push((0, cookie_1.serialize)(key, value, property));
          }
        } else {
          let value = property.value;
          if (value === void 0 || value === null)
            continue;
          if (typeof value === "object")
            value = JSON.stringify(value);
          set.push((0, cookie_1.serialize)(key, property.value, property));
        }
      }
      if (set.length === 0)
        return void 0;
      if (set.length === 1)
        return set[0];
      return set;
    };
    exports.cookieToHeader = cookieToHeader;
    var mapResponse = (response, set) => {
      if (response?.[response.$passthrough])
        response = response[response.$passthrough];
      if (response?.[error_1.ELYSIA_RESPONSE]) {
        set.status = response[error_1.ELYSIA_RESPONSE];
        response = response.response;
      }
      if ((0, exports.isNotEmpty)(set.headers) || set.status !== 200 || set.redirect || set.cookie) {
        if (typeof set.status === "string")
          set.status = utils_1.StatusMap[set.status];
        if (set.redirect) {
          set.headers.Location = set.redirect;
          if (!set.status || set.status < 300 || set.status >= 400)
            set.status = 302;
        }
        if (set.cookie && (0, exports.isNotEmpty)(set.cookie))
          set.headers["Set-Cookie"] = (0, exports.cookieToHeader)(set.cookie);
        if (set.headers["Set-Cookie"] && Array.isArray(set.headers["Set-Cookie"]))
          set.headers = (0, exports.parseSetCookies)(new Headers(set.headers), set.headers["Set-Cookie"]);
        switch (response?.constructor?.name) {
          case "String":
            return new Response(response, set);
          case "Blob":
            return handleFile(response, set);
          case "Object":
          case "Array":
            return Response.json(response, set);
          case "ReadableStream":
            if (!set.headers["content-type"]?.startsWith("text/event-stream"))
              set.headers["content-type"] = "text/event-stream; charset=utf-8";
            return new Response(response, set);
          case void 0:
            if (!response)
              return new Response("", set);
            return Response.json(response, set);
          case "Response":
            const inherits = { ...set.headers };
            if (hasHeaderShorthand)
              set.headers = response.headers.toJSON();
            else
              for (const [key, value] of response.headers.entries())
                if (key in set.headers)
                  set.headers[key] = value;
            for (const key in inherits)
              response.headers.append(key, inherits[key]);
            return response;
          case "Error":
            return (0, exports.errorToResponse)(response, set);
          case "Promise":
            return response.then((x) => (0, exports.mapResponse)(x, set));
          case "Function":
            return (0, exports.mapResponse)(response(), set);
          case "Number":
          case "Boolean":
            return new Response(response.toString(), set);
          case "Cookie":
            if (response instanceof cookie_2.Cookie)
              return new Response(response.value, set);
            return new Response(response?.toString(), set);
          default:
            const r = JSON.stringify(response);
            if (r.charCodeAt(0) === 123) {
              if (!set.headers["Content-Type"])
                set.headers["Content-Type"] = "application/json";
              return new Response(JSON.stringify(response), set);
            }
            return new Response(r, set);
        }
      } else
        switch (response?.constructor?.name) {
          case "String":
            return new Response(response);
          case "Blob":
            return handleFile(response, set);
          case "Object":
          case "Array":
            return new Response(JSON.stringify(response), {
              headers: {
                "content-type": "application/json"
              }
            });
          case "ReadableStream":
            return new Response(response, {
              headers: {
                "Content-Type": "text/event-stream; charset=utf-8"
              }
            });
          case void 0:
            if (!response)
              return new Response("");
            return new Response(JSON.stringify(response), {
              headers: {
                "content-type": "application/json"
              }
            });
          case "Response":
            return response;
          case "Error":
            return (0, exports.errorToResponse)(response, set);
          case "Promise":
            return response.then((x) => {
              const r2 = (0, exports.mapCompactResponse)(x);
              if (r2 !== void 0)
                return r2;
              return new Response("");
            });
          case "Function":
            return (0, exports.mapCompactResponse)(response());
          case "Number":
          case "Boolean":
            return new Response(response.toString());
          case "Cookie":
            if (response instanceof cookie_2.Cookie)
              return new Response(response.value, set);
            return new Response(response?.toString(), set);
          default:
            const r = JSON.stringify(response);
            if (r.charCodeAt(0) === 123)
              return new Response(JSON.stringify(response), {
                headers: {
                  "Content-Type": "application/json"
                }
              });
            return new Response(r);
        }
    };
    exports.mapResponse = mapResponse;
    var mapEarlyResponse = (response, set) => {
      if (response === void 0 || response === null)
        return;
      if (
        // @ts-ignore
        response?.$passthrough
      )
        response = response[response.$passthrough];
      if (response?.[error_1.ELYSIA_RESPONSE]) {
        set.status = response[error_1.ELYSIA_RESPONSE];
        response = response.response;
      }
      if ((0, exports.isNotEmpty)(set.headers) || set.status !== 200 || set.redirect || set.cookie) {
        if (typeof set.status === "string")
          set.status = utils_1.StatusMap[set.status];
        if (set.redirect) {
          set.headers.Location = set.redirect;
          if (!set.status || set.status < 300 || set.status >= 400)
            set.status = 302;
        }
        if (set.cookie && (0, exports.isNotEmpty)(set.cookie))
          set.headers["Set-Cookie"] = (0, exports.cookieToHeader)(set.cookie);
        if (set.headers["Set-Cookie"] && Array.isArray(set.headers["Set-Cookie"]))
          set.headers = (0, exports.parseSetCookies)(new Headers(set.headers), set.headers["Set-Cookie"]);
        switch (response?.constructor?.name) {
          case "String":
            return new Response(response, set);
          case "Blob":
            return handleFile(response, set);
          case "Object":
          case "Array":
            return Response.json(response, set);
          case "ReadableStream":
            if (!set.headers["content-type"]?.startsWith("text/event-stream"))
              set.headers["content-type"] = "text/event-stream; charset=utf-8";
            return new Response(response, set);
          case void 0:
            if (!response)
              return;
            return Response.json(response, set);
          case "Response":
            const inherits = Object.assign({}, set.headers);
            if (hasHeaderShorthand)
              set.headers = response.headers.toJSON();
            else
              for (const [key, value] of response.headers.entries())
                if (!(key in set.headers))
                  set.headers[key] = value;
            for (const key in inherits)
              response.headers.append(key, inherits[key]);
            if (response.status !== set.status)
              set.status = response.status;
            return response;
          case "Promise":
            return response.then((x) => {
              const r2 = (0, exports.mapEarlyResponse)(x, set);
              if (r2 !== void 0)
                return r2;
              return;
            });
          case "Error":
            return (0, exports.errorToResponse)(response, set);
          case "Function":
            return (0, exports.mapEarlyResponse)(response(), set);
          case "Number":
          case "Boolean":
            return new Response(response.toString(), set);
          case "Cookie":
            if (response instanceof cookie_2.Cookie)
              return new Response(response.value, set);
            return new Response(response?.toString(), set);
          default:
            const r = JSON.stringify(response);
            if (r.charCodeAt(0) === 123) {
              if (!set.headers["Content-Type"])
                set.headers["Content-Type"] = "application/json";
              return new Response(JSON.stringify(response), set);
            }
            return new Response(r, set);
        }
      } else
        switch (response?.constructor?.name) {
          case "String":
            return new Response(response);
          case "Blob":
            return handleFile(response, set);
          case "Object":
          case "Array":
            return new Response(JSON.stringify(response), {
              headers: {
                "content-type": "application/json"
              }
            });
          case "ReadableStream":
            return new Response(response, {
              headers: {
                "Content-Type": "text/event-stream; charset=utf-8"
              }
            });
          case void 0:
            if (!response)
              return new Response("");
            return new Response(JSON.stringify(response), {
              headers: {
                "content-type": "application/json"
              }
            });
          case "Response":
            return response;
          case "Promise":
            return response.then((x) => {
              const r2 = (0, exports.mapEarlyResponse)(x, set);
              if (r2 !== void 0)
                return r2;
              return;
            });
          case "Error":
            return (0, exports.errorToResponse)(response, set);
          case "Function":
            return (0, exports.mapCompactResponse)(response());
          case "Number":
          case "Boolean":
            return new Response(response.toString());
          case "Cookie":
            if (response instanceof cookie_2.Cookie)
              return new Response(response.value, set);
            return new Response(response?.toString(), set);
          default:
            const r = JSON.stringify(response);
            if (r.charCodeAt(0) === 123)
              return new Response(JSON.stringify(response), {
                headers: {
                  "Content-Type": "application/json"
                }
              });
            return new Response(r);
        }
    };
    exports.mapEarlyResponse = mapEarlyResponse;
    var mapCompactResponse = (response) => {
      if (
        // @ts-ignore
        response?.$passthrough
      )
        response = response[response.$passthrough];
      if (response?.[error_1.ELYSIA_RESPONSE])
        return (0, exports.mapResponse)(response.response, {
          // @ts-ignore
          status: response[error_1.ELYSIA_RESPONSE],
          headers: {}
        });
      switch (response?.constructor?.name) {
        case "String":
          return new Response(response);
        case "Blob":
          return handleFile(response);
        case "Object":
        case "Array":
          return new Response(JSON.stringify(response), {
            headers: {
              "content-type": "application/json"
            }
          });
        case "ReadableStream":
          return new Response(response, {
            headers: {
              "Content-Type": "text/event-stream; charset=utf-8"
            }
          });
        case void 0:
          if (!response)
            return new Response("");
          return new Response(JSON.stringify(response), {
            headers: {
              "content-type": "application/json"
            }
          });
        case "Response":
          return response;
        case "Error":
          return (0, exports.errorToResponse)(response);
        case "Promise":
          return response.then((x) => {
            const r2 = (0, exports.mapCompactResponse)(x);
            if (r2 !== void 0)
              return r2;
            return new Response("");
          });
        case "Function":
          return (0, exports.mapCompactResponse)(response());
        case "Number":
        case "Boolean":
          return new Response(response.toString());
        default:
          const r = JSON.stringify(response);
          if (r.charCodeAt(0) === 123)
            return new Response(JSON.stringify(response), {
              headers: {
                "Content-Type": "application/json"
              }
            });
          return new Response(r);
      }
    };
    exports.mapCompactResponse = mapCompactResponse;
    var errorToResponse = (error, set) => new Response(JSON.stringify({
      name: error?.name,
      message: error?.message,
      cause: error?.cause
    }), {
      status: set?.status !== 200 ? set?.status ?? 500 : 500,
      headers: set?.headers
    });
    exports.errorToResponse = errorToResponse;
  }
});

// ../../../node_modules/.pnpm/elysia@0.8.9_@sinclair+typebox@0.32.9_typescript@5.4.0-dev.20231224/node_modules/elysia/dist/cjs/utils.js
var require_utils = __commonJS({
  "../../../node_modules/.pnpm/elysia@0.8.9_@sinclair+typebox@0.32.9_typescript@5.4.0-dev.20231224/node_modules/elysia/dist/cjs/utils.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isNumericString = exports.traceBackMacro = exports.unsignCookie = exports.signCookie = exports.StatusMap = exports.filterGlobalHook = exports.asGlobal = exports.asGlobalHook = exports.mergeLifeCycle = exports.checksum = exports.getResponseSchemaValidator = exports.getSchemaValidator = exports.mergeHook = exports.primitiveHooks = exports.mergeObjectArray = exports.mergeCookie = exports.mergeDeep = exports.replaceUrlPath = void 0;
    var typebox_1 = require_require();
    var value_1 = require_value5();
    var compiler_1 = require_compiler2();
    var handler_1 = require_handler();
    var isObject = (item) => item && typeof item === "object" && !Array.isArray(item);
    var replaceUrlPath = (url, pathname) => {
      const urlObject = new URL(url);
      urlObject.pathname = pathname;
      return urlObject.toString();
    };
    exports.replaceUrlPath = replaceUrlPath;
    var isClass = (v) => typeof v === "function" && /^\s*class\s+/.test(v.toString()) || // Handle import * as Sentry from '@sentry/bun'
    // This also handle [object Date], [object Array]
    // and FFI value like [object Prisma]
    v.toString().startsWith("[object ") || // If object prototype is not pure, then probably a class-like object
    (0, handler_1.isNotEmpty)(Object.getPrototypeOf(v));
    var mergeDeep = (target, source, { skipKeys } = {}) => {
      if (isObject(target) && isObject(source))
        for (const [key, value] of Object.entries(source)) {
          if (skipKeys?.includes(key))
            continue;
          if (!isObject(value)) {
            target[key] = value;
            continue;
          }
          if (!(key in target)) {
            target[key] = value;
            continue;
          }
          if (isClass(value)) {
            target[key] = value;
            continue;
          }
          target[key] = (0, exports.mergeDeep)(target[key], value);
        }
      return target;
    };
    exports.mergeDeep = mergeDeep;
    var mergeCookie = (target, source) => (0, exports.mergeDeep)(target, source, {
      skipKeys: ["properties"]
    });
    exports.mergeCookie = mergeCookie;
    var mergeObjectArray = (a, b) => {
      if (!a)
        return [];
      const array = [...Array.isArray(a) ? a : [a]];
      const checksums = [];
      for (const item of array) {
        if (item.$elysiaChecksum)
          checksums.push(item.$elysiaChecksum);
      }
      for (const item of Array.isArray(b) ? b : [b]) {
        if (!checksums.includes(item?.$elysiaChecksum)) {
          array.push(item);
        }
      }
      return array;
    };
    exports.mergeObjectArray = mergeObjectArray;
    exports.primitiveHooks = [
      "start",
      "request",
      "parse",
      "transform",
      "resolve",
      "beforeHandle",
      "afterHandle",
      "onResponse",
      "mapResponse",
      "trace",
      "error",
      "stop",
      "body",
      "headers",
      "params",
      "query",
      "response",
      "type",
      "detail"
    ];
    var mergeHook = (a, b) => {
      return {
        ...a,
        ...b,
        // Merge local hook first
        // @ts-ignore
        body: b?.body ?? a?.body,
        // @ts-ignore
        headers: b?.headers ?? a?.headers,
        // @ts-ignore
        params: b?.params ?? a?.params,
        // @ts-ignore
        query: b?.query ?? a?.query,
        // @ts-ignore
        response: b?.response ?? a?.response,
        type: a?.type || b?.type,
        detail: (0, exports.mergeDeep)(
          // @ts-ignore
          b?.detail ?? {},
          // @ts-ignore
          a?.detail ?? {}
        ),
        parse: (0, exports.mergeObjectArray)(a?.parse ?? [], b?.parse ?? []),
        transform: (0, exports.mergeObjectArray)(a?.transform ?? [], b?.transform ?? []),
        beforeHandle: (0, exports.mergeObjectArray)(a?.beforeHandle ?? [], b?.beforeHandle ?? []),
        afterHandle: (0, exports.mergeObjectArray)(a?.afterHandle ?? [], b?.afterHandle ?? []),
        onResponse: (0, exports.mergeObjectArray)(a?.onResponse ?? [], b?.onResponse ?? []),
        mapResponse: (0, exports.mergeObjectArray)(a?.mapResponse ?? [], b?.mapResponse ?? []),
        trace: (0, exports.mergeObjectArray)(a?.trace ?? [], b?.trace ?? []),
        error: (0, exports.mergeObjectArray)(a?.error ?? [], b?.error ?? [])
      };
    };
    exports.mergeHook = mergeHook;
    var getSchemaValidator = (s, { models = {}, additionalProperties = false, dynamic = false }) => {
      if (!s)
        return;
      if (typeof s === "string" && !(s in models))
        return;
      const schema = typeof s === "string" ? models[s] : s;
      if (schema.type === "object" && "additionalProperties" in schema === false)
        schema.additionalProperties = additionalProperties;
      if (dynamic)
        return {
          schema,
          references: "",
          checkFunc: () => {
          },
          code: "",
          Check: (value) => value_1.Value.Check(schema, value),
          Errors: (value) => value_1.Value.Errors(schema, value),
          Code: () => ""
        };
      return compiler_1.TypeCompiler.Compile(schema, Object.values(models));
    };
    exports.getSchemaValidator = getSchemaValidator;
    var getResponseSchemaValidator = (s, { models = {}, additionalProperties = false, dynamic = false }) => {
      if (!s)
        return;
      if (typeof s === "string" && !(s in models))
        return;
      const maybeSchemaOrRecord = typeof s === "string" ? models[s] : s;
      const compile = (schema, references) => {
        if (dynamic)
          return {
            schema,
            references: "",
            checkFunc: () => {
            },
            code: "",
            Check: (value) => value_1.Value.Check(schema, value),
            Errors: (value) => value_1.Value.Errors(schema, value),
            Code: () => ""
          };
        return compiler_1.TypeCompiler.Compile(schema, references);
      };
      if (typebox_1.Kind in maybeSchemaOrRecord) {
        if ("additionalProperties" in maybeSchemaOrRecord === false)
          maybeSchemaOrRecord.additionalProperties = additionalProperties;
        return {
          200: compile(maybeSchemaOrRecord, Object.values(models))
        };
      }
      const record = {};
      Object.keys(maybeSchemaOrRecord).forEach((status) => {
        const maybeNameOrSchema = maybeSchemaOrRecord[+status];
        if (typeof maybeNameOrSchema === "string") {
          if (maybeNameOrSchema in models) {
            const schema = models[maybeNameOrSchema];
            schema.type === "object" && "additionalProperties" in schema === false;
            record[+status] = typebox_1.Kind in schema ? compile(schema, Object.values(models)) : schema;
          }
          return void 0;
        }
        if (maybeNameOrSchema.type === "object" && "additionalProperties" in maybeNameOrSchema === false)
          maybeNameOrSchema.additionalProperties = additionalProperties;
        record[+status] = typebox_1.Kind in maybeNameOrSchema ? compile(maybeNameOrSchema, Object.values(models)) : maybeNameOrSchema;
      });
      return record;
    };
    exports.getResponseSchemaValidator = getResponseSchemaValidator;
    var isBun = typeof Bun !== "undefined";
    var hasHash = isBun && typeof Bun.hash === "function";
    var checksum = (s) => {
      if (hasHash)
        return Bun.hash(s);
      let h = 9;
      for (let i = 0; i < s.length; )
        h = Math.imul(h ^ s.charCodeAt(i++), 9 ** 9);
      return h = h ^ h >>> 9;
    };
    exports.checksum = checksum;
    var mergeLifeCycle = (a, b, checksum2) => {
      const injectChecksum = (x) => {
        if (checksum2 && !x.$elysiaChecksum)
          x.$elysiaChecksum = checksum2;
        return x;
      };
      return {
        ...a,
        ...b,
        start: (0, exports.mergeObjectArray)(a.start, ("start" in b ? b.start ?? [] : []).map(injectChecksum)),
        request: (0, exports.mergeObjectArray)(a.request, ("request" in b ? b.request ?? [] : []).map(injectChecksum)),
        parse: (0, exports.mergeObjectArray)(a.parse, "parse" in b ? b?.parse ?? [] : []).map(injectChecksum),
        transform: (0, exports.mergeObjectArray)(a.transform, (b?.transform ?? []).map(injectChecksum)),
        beforeHandle: (0, exports.mergeObjectArray)(a.beforeHandle, (b?.beforeHandle ?? []).map(injectChecksum)),
        afterHandle: (0, exports.mergeObjectArray)(a.afterHandle, (b?.afterHandle ?? []).map(injectChecksum)),
        mapResponse: (0, exports.mergeObjectArray)(a.mapResponse, (b?.mapResponse ?? []).map(injectChecksum)),
        onResponse: (0, exports.mergeObjectArray)(a.onResponse, (b?.onResponse ?? []).map(injectChecksum)),
        trace: a.trace,
        error: (0, exports.mergeObjectArray)(a.error, (b?.error ?? []).map(injectChecksum)),
        stop: (0, exports.mergeObjectArray)(a.stop, ("stop" in b ? b.stop ?? [] : []).map(injectChecksum))
      };
    };
    exports.mergeLifeCycle = mergeLifeCycle;
    var asGlobalHook = (hook, inject = true) => {
      return {
        // rest is validator
        ...hook,
        type: hook?.type,
        detail: hook?.detail,
        parse: (0, exports.asGlobal)(hook?.parse, inject),
        transform: (0, exports.asGlobal)(hook?.transform, inject),
        beforeHandle: (0, exports.asGlobal)(hook?.beforeHandle, inject),
        afterHandle: (0, exports.asGlobal)(hook?.afterHandle, inject),
        onResponse: (0, exports.asGlobal)(hook?.onResponse, inject),
        error: (0, exports.asGlobal)(hook?.error, inject)
      };
    };
    exports.asGlobalHook = asGlobalHook;
    var asGlobal = (fn, inject = true) => {
      if (!fn)
        return fn;
      if (typeof fn === "function") {
        if (inject)
          fn.$elysiaHookType = "global";
        else
          fn.$elysiaHookType = void 0;
        return fn;
      }
      return fn.map((x) => {
        if (inject)
          x.$elysiaHookType = "global";
        else
          x.$elysiaHookType = void 0;
        return x;
      });
    };
    exports.asGlobal = asGlobal;
    var filterGlobal = (fn) => {
      if (!fn)
        return fn;
      if (typeof fn === "function") {
        return fn.$elysiaHookType === "global" ? fn : void 0;
      }
      return fn.filter((x) => x.$elysiaHookType === "global");
    };
    var filterGlobalHook = (hook) => {
      return {
        // rest is validator
        ...hook,
        type: hook?.type,
        detail: hook?.detail,
        parse: filterGlobal(hook?.parse),
        transform: filterGlobal(hook?.transform),
        beforeHandle: filterGlobal(hook?.beforeHandle),
        afterHandle: filterGlobal(hook?.afterHandle),
        onResponse: filterGlobal(hook?.onResponse),
        error: filterGlobal(hook?.error)
      };
    };
    exports.filterGlobalHook = filterGlobalHook;
    exports.StatusMap = {
      Continue: 100,
      "Switching Protocols": 101,
      Processing: 102,
      "Early Hints": 103,
      OK: 200,
      Created: 201,
      Accepted: 202,
      "Non-Authoritative Information": 203,
      "No Content": 204,
      "Reset Content": 205,
      "Partial Content": 206,
      "Multi-Status": 207,
      "Already Reported": 208,
      "Multiple Choices": 300,
      "Moved Permanently": 301,
      Found: 302,
      "See Other": 303,
      "Not Modified": 304,
      "Temporary Redirect": 307,
      "Permanent Redirect": 308,
      "Bad Request": 400,
      Unauthorized: 401,
      "Payment Required": 402,
      Forbidden: 403,
      "Not Found": 404,
      "Method Not Allowed": 405,
      "Not Acceptable": 406,
      "Proxy Authentication Required": 407,
      "Request Timeout": 408,
      Conflict: 409,
      Gone: 410,
      "Length Required": 411,
      "Precondition Failed": 412,
      "Payload Too Large": 413,
      "URI Too Long": 414,
      "Unsupported Media Type": 415,
      "Range Not Satisfiable": 416,
      "Expectation Failed": 417,
      "I'm a teapot": 418,
      "Misdirected Request": 421,
      "Unprocessable Content": 422,
      Locked: 423,
      "Failed Dependency": 424,
      "Too Early": 425,
      "Upgrade Required": 426,
      "Precondition Required": 428,
      "Too Many Requests": 429,
      "Request Header Fields Too Large": 431,
      "Unavailable For Legal Reasons": 451,
      "Internal Server Error": 500,
      "Not Implemented": 501,
      "Bad Gateway": 502,
      "Service Unavailable": 503,
      "Gateway Timeout": 504,
      "HTTP Version Not Supported": 505,
      "Variant Also Negotiates": 506,
      "Insufficient Storage": 507,
      "Loop Detected": 508,
      "Not Extended": 510,
      "Network Authentication Required": 511
    };
    var signCookie = async (val, secret) => {
      if (typeof val !== "string")
        throw new TypeError("Cookie value must be provided as a string.");
      if (secret === null)
        throw new TypeError("Secret key must be provided.");
      const encoder = new TextEncoder();
      const secretKey = await crypto.subtle.importKey("raw", encoder.encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
      const hmacBuffer = await crypto.subtle.sign("HMAC", secretKey, encoder.encode(val));
      const hmacArray = Array.from(new Uint8Array(hmacBuffer));
      const digest = btoa(String.fromCharCode(...hmacArray));
      return `${val}.${digest.replace(/=+$/, "")}`;
    };
    exports.signCookie = signCookie;
    var unsignCookie = async (input, secret) => {
      if (typeof input !== "string")
        throw new TypeError("Signed cookie string must be provided.");
      if (null === secret)
        throw new TypeError("Secret key must be provided.");
      const tentativeValue = input.slice(0, input.lastIndexOf("."));
      const expectedInput = await (0, exports.signCookie)(tentativeValue, secret);
      return expectedInput === input ? tentativeValue : false;
    };
    exports.unsignCookie = unsignCookie;
    var traceBackMacro = (extension, property, hooks = property) => {
      for (const [key, value] of Object.entries(property ?? {})) {
        if (exports.primitiveHooks.includes(key) || !(key in extension))
          continue;
        if (typeof extension[key] === "function") {
          extension[key](value);
        } else if (typeof extension[key] === "object")
          (0, exports.traceBackMacro)(extension[key], value, hooks);
      }
    };
    exports.traceBackMacro = traceBackMacro;
    var isNumericString = (message) => !Number.isNaN(parseInt(message));
    exports.isNumericString = isNumericString;
  }
});

// ../../../node_modules/.pnpm/elysia@0.8.9_@sinclair+typebox@0.32.9_typescript@5.4.0-dev.20231224/node_modules/elysia/dist/cjs/error.js
var require_error3 = __commonJS({
  "../../../node_modules/.pnpm/elysia@0.8.9_@sinclair+typebox@0.32.9_typescript@5.4.0-dev.20231224/node_modules/elysia/dist/cjs/error.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ValidationError = exports.InvalidCookieSignature = exports.ParseError = exports.NotFoundError = exports.InternalServerError = exports.error = exports.isProduction = exports.ELYSIA_RESPONSE = exports.ERROR_CODE = void 0;
    var value_1 = require_value5();
    var utils_1 = require_utils();
    var env = typeof Bun !== "undefined" ? Bun.env : typeof process !== "undefined" ? process?.env : void 0;
    exports.ERROR_CODE = Symbol("ElysiaErrorCode");
    exports.ELYSIA_RESPONSE = Symbol("ElysiaResponse");
    exports.isProduction = (env?.NODE_ENV ?? env?.ENV) === "production";
    var error = (code, response) => ({
      // @ts-ignore
      [exports.ELYSIA_RESPONSE]: utils_1.StatusMap[code] ?? code,
      response
    });
    exports.error = error;
    var InternalServerError = class extends Error {
      constructor(message) {
        super(message ?? "INTERNAL_SERVER_ERROR");
        this.code = "INTERNAL_SERVER_ERROR";
        this.status = 500;
      }
    };
    exports.InternalServerError = InternalServerError;
    var NotFoundError = class extends Error {
      constructor(message) {
        super(message ?? "NOT_FOUND");
        this.code = "NOT_FOUND";
        this.status = 404;
      }
    };
    exports.NotFoundError = NotFoundError;
    var ParseError = class extends Error {
      constructor(message) {
        super(message ?? "PARSE");
        this.code = "PARSE";
        this.status = 400;
      }
    };
    exports.ParseError = ParseError;
    var InvalidCookieSignature = class extends Error {
      constructor(key, message) {
        super(message ?? `"${key}" has invalid cookie signature`);
        this.key = key;
        this.code = "INVALID_COOKIE_SIGNATURE";
        this.status = 400;
      }
    };
    exports.InvalidCookieSignature = InvalidCookieSignature;
    var ValidationError = class _ValidationError extends Error {
      constructor(type, validator, value) {
        const error2 = exports.isProduction ? void 0 : "Errors" in validator ? validator.Errors(value).First() : value_1.Value.Errors(validator, value).First();
        const customError = error2?.schema.error ? typeof error2.schema.error === "function" ? error2.schema.error(type, validator, value) : error2.schema.error : void 0;
        const accessor = error2?.path?.slice(1) || "root";
        let message = "";
        if (customError) {
          message = typeof customError === "object" ? JSON.stringify(customError) : customError + "";
        } else if (exports.isProduction) {
          message = JSON.stringify({
            type,
            message: error2?.message
          });
        } else {
          message = JSON.stringify({
            type,
            at: accessor,
            message: error2?.message,
            expected: value_1.Value.Create(
              // @ts-ignore private field
              validator.schema
            ),
            found: value,
            errors: [...validator.Errors(value)]
          }, null, 2);
        }
        super(message);
        this.type = type;
        this.validator = validator;
        this.value = value;
        this.code = "VALIDATION";
        this.status = 400;
        Object.setPrototypeOf(this, _ValidationError.prototype);
      }
      get all() {
        return [...this.validator.Errors(this.value)];
      }
      static simplifyModel(validator) {
        const model = "schema" in validator ? validator.schema : validator;
        try {
          return value_1.Value.Create(model);
        } catch {
          return model;
        }
      }
      get model() {
        return _ValidationError.simplifyModel(this.validator);
      }
      toResponse(headers) {
        return new Response(this.message, {
          status: 400,
          headers
        });
      }
    };
    exports.ValidationError = ValidationError;
  }
});

// ../../../node_modules/.pnpm/elysia@0.8.9_@sinclair+typebox@0.32.9_typescript@5.4.0-dev.20231224/node_modules/elysia/dist/cjs/ws/index.js
var require_ws = __commonJS({
  "../../../node_modules/.pnpm/elysia@0.8.9_@sinclair+typebox@0.32.9_typescript@5.4.0-dev.20231224/node_modules/elysia/dist/cjs/ws/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ElysiaWS = exports.websocket = void 0;
    var error_1 = require_error3();
    var crypto_1 = __require("crypto");
    exports.websocket = {
      open(ws) {
        ws.data.open?.(ws);
      },
      message(ws, message) {
        ws.data.message?.(ws, message);
      },
      drain(ws) {
        ws.data.drain?.(ws);
      },
      close(ws, code, reason) {
        ws.data.close?.(ws, code, reason);
      }
    };
    var ElysiaWS = class {
      get id() {
        return this.raw.data.id;
      }
      set id(newID) {
        this.raw.data.id = newID;
      }
      constructor(raw, data) {
        this.raw = raw;
        this.data = data;
        this.validator = raw.data.validator;
        this.id = raw.data.id ?? (0, crypto_1.randomInt)(Number.MAX_SAFE_INTEGER);
      }
      get publish() {
        return (topic, data = void 0, compress) => {
          if (this.validator?.Check(data) === false)
            throw new error_1.ValidationError("message", this.validator, data);
          if (typeof data === "object")
            data = JSON.stringify(data);
          this.raw.publish(topic, data, compress);
          return this;
        };
      }
      get send() {
        return (data) => {
          if (this.validator?.Check(data) === false)
            throw new error_1.ValidationError("message", this.validator, data);
          if (Buffer.isBuffer(data)) {
            this.raw.send(data);
            return this;
          }
          if (typeof data === "object")
            data = JSON.stringify(data);
          this.raw.send(data);
          return this;
        };
      }
      get subscribe() {
        return (room) => {
          this.raw.subscribe(room);
          return this;
        };
      }
      get unsubscribe() {
        return (room) => {
          this.raw.unsubscribe(room);
          return this;
        };
      }
      get cork() {
        return (callback) => {
          this.raw.cork(callback);
          return this;
        };
      }
      get close() {
        return () => {
          this.raw.close();
          return this;
        };
      }
      get terminate() {
        return this.raw.terminate.bind(this.raw);
      }
      get isSubscribed() {
        return this.raw.isSubscribed.bind(this.raw);
      }
      get remoteAddress() {
        return this.raw.remoteAddress;
      }
    };
    exports.ElysiaWS = ElysiaWS;
  }
});

// ../../../node_modules/.pnpm/fast-decode-uri-component@1.0.1/node_modules/fast-decode-uri-component/index.js
var require_fast_decode_uri_component = __commonJS({
  "../../../node_modules/.pnpm/fast-decode-uri-component@1.0.1/node_modules/fast-decode-uri-component/index.js"(exports, module) {
    "use strict";
    var UTF8_ACCEPT = 12;
    var UTF8_REJECT = 0;
    var UTF8_DATA = [
      // The first part of the table maps bytes to character to a transition.
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      4,
      4,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      6,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      8,
      7,
      7,
      10,
      9,
      9,
      9,
      11,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      // The second part of the table maps a state to a new state when adding a
      // transition.
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      12,
      0,
      0,
      0,
      0,
      24,
      36,
      48,
      60,
      72,
      84,
      96,
      0,
      12,
      12,
      12,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      24,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      24,
      24,
      24,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      24,
      24,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      48,
      48,
      48,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      48,
      48,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      48,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      // The third part maps the current transition to a mask that needs to apply
      // to the byte.
      127,
      63,
      63,
      63,
      0,
      31,
      15,
      15,
      15,
      7,
      7,
      7
    ];
    function decodeURIComponent2(uri) {
      var percentPosition = uri.indexOf("%");
      if (percentPosition === -1)
        return uri;
      var length = uri.length;
      var decoded = "";
      var last = 0;
      var codepoint = 0;
      var startOfOctets = percentPosition;
      var state = UTF8_ACCEPT;
      while (percentPosition > -1 && percentPosition < length) {
        var high = hexCodeToInt(uri[percentPosition + 1], 4);
        var low = hexCodeToInt(uri[percentPosition + 2], 0);
        var byte = high | low;
        var type = UTF8_DATA[byte];
        state = UTF8_DATA[256 + state + type];
        codepoint = codepoint << 6 | byte & UTF8_DATA[364 + type];
        if (state === UTF8_ACCEPT) {
          decoded += uri.slice(last, startOfOctets);
          decoded += codepoint <= 65535 ? String.fromCharCode(codepoint) : String.fromCharCode(
            55232 + (codepoint >> 10),
            56320 + (codepoint & 1023)
          );
          codepoint = 0;
          last = percentPosition + 3;
          percentPosition = startOfOctets = uri.indexOf("%", last);
        } else if (state === UTF8_REJECT) {
          return null;
        } else {
          percentPosition += 3;
          if (percentPosition < length && uri.charCodeAt(percentPosition) === 37)
            continue;
          return null;
        }
      }
      return decoded + uri.slice(last);
    }
    var HEX = {
      "0": 0,
      "1": 1,
      "2": 2,
      "3": 3,
      "4": 4,
      "5": 5,
      "6": 6,
      "7": 7,
      "8": 8,
      "9": 9,
      "a": 10,
      "A": 10,
      "b": 11,
      "B": 11,
      "c": 12,
      "C": 12,
      "d": 13,
      "D": 13,
      "e": 14,
      "E": 14,
      "f": 15,
      "F": 15
    };
    function hexCodeToInt(c, shift) {
      var i = HEX[c];
      return i === void 0 ? 255 : i << shift;
    }
    module.exports = decodeURIComponent2;
  }
});

// ../../../node_modules/.pnpm/fast-querystring@1.1.2/node_modules/fast-querystring/lib/parse.js
var require_parse2 = __commonJS({
  "../../../node_modules/.pnpm/fast-querystring@1.1.2/node_modules/fast-querystring/lib/parse.js"(exports, module) {
    "use strict";
    var fastDecode = require_fast_decode_uri_component();
    var plusRegex = /\+/g;
    var Empty = function() {
    };
    Empty.prototype = /* @__PURE__ */ Object.create(null);
    function parse(input) {
      const result = new Empty();
      if (typeof input !== "string") {
        return result;
      }
      let inputLength = input.length;
      let key = "";
      let value = "";
      let startingIndex = -1;
      let equalityIndex = -1;
      let shouldDecodeKey = false;
      let shouldDecodeValue = false;
      let keyHasPlus = false;
      let valueHasPlus = false;
      let hasBothKeyValuePair = false;
      let c = 0;
      for (let i = 0; i < inputLength + 1; i++) {
        c = i !== inputLength ? input.charCodeAt(i) : 38;
        if (c === 38) {
          hasBothKeyValuePair = equalityIndex > startingIndex;
          if (!hasBothKeyValuePair) {
            equalityIndex = i;
          }
          key = input.slice(startingIndex + 1, equalityIndex);
          if (hasBothKeyValuePair || key.length > 0) {
            if (keyHasPlus) {
              key = key.replace(plusRegex, " ");
            }
            if (shouldDecodeKey) {
              key = fastDecode(key) || key;
            }
            if (hasBothKeyValuePair) {
              value = input.slice(equalityIndex + 1, i);
              if (valueHasPlus) {
                value = value.replace(plusRegex, " ");
              }
              if (shouldDecodeValue) {
                value = fastDecode(value) || value;
              }
            }
            const currentValue = result[key];
            if (currentValue === void 0) {
              result[key] = value;
            } else {
              if (currentValue.pop) {
                currentValue.push(value);
              } else {
                result[key] = [currentValue, value];
              }
            }
          }
          value = "";
          startingIndex = i;
          equalityIndex = i;
          shouldDecodeKey = false;
          shouldDecodeValue = false;
          keyHasPlus = false;
          valueHasPlus = false;
        } else if (c === 61) {
          if (equalityIndex <= startingIndex) {
            equalityIndex = i;
          } else {
            shouldDecodeValue = true;
          }
        } else if (c === 43) {
          if (equalityIndex > startingIndex) {
            valueHasPlus = true;
          } else {
            keyHasPlus = true;
          }
        } else if (c === 37) {
          if (equalityIndex > startingIndex) {
            shouldDecodeValue = true;
          } else {
            shouldDecodeKey = true;
          }
        }
      }
      return result;
    }
    module.exports = parse;
  }
});

// ../../../node_modules/.pnpm/fast-querystring@1.1.2/node_modules/fast-querystring/lib/internals/querystring.js
var require_querystring = __commonJS({
  "../../../node_modules/.pnpm/fast-querystring@1.1.2/node_modules/fast-querystring/lib/internals/querystring.js"(exports, module) {
    var hexTable = Array.from(
      { length: 256 },
      (_, i) => "%" + ((i < 16 ? "0" : "") + i.toString(16)).toUpperCase()
    );
    var noEscape = new Int8Array([
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      // 0 - 15
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      // 16 - 31
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      0,
      0,
      1,
      1,
      0,
      // 32 - 47
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      // 48 - 63
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      // 64 - 79
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      1,
      // 80 - 95
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      // 96 - 111
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      1,
      0
      // 112 - 127
    ]);
    function encodeString(str) {
      const len = str.length;
      if (len === 0)
        return "";
      let out = "";
      let lastPos = 0;
      let i = 0;
      outer:
        for (; i < len; i++) {
          let c = str.charCodeAt(i);
          while (c < 128) {
            if (noEscape[c] !== 1) {
              if (lastPos < i)
                out += str.slice(lastPos, i);
              lastPos = i + 1;
              out += hexTable[c];
            }
            if (++i === len)
              break outer;
            c = str.charCodeAt(i);
          }
          if (lastPos < i)
            out += str.slice(lastPos, i);
          if (c < 2048) {
            lastPos = i + 1;
            out += hexTable[192 | c >> 6] + hexTable[128 | c & 63];
            continue;
          }
          if (c < 55296 || c >= 57344) {
            lastPos = i + 1;
            out += hexTable[224 | c >> 12] + hexTable[128 | c >> 6 & 63] + hexTable[128 | c & 63];
            continue;
          }
          ++i;
          if (i >= len) {
            throw new Error("URI malformed");
          }
          const c2 = str.charCodeAt(i) & 1023;
          lastPos = i + 1;
          c = 65536 + ((c & 1023) << 10 | c2);
          out += hexTable[240 | c >> 18] + hexTable[128 | c >> 12 & 63] + hexTable[128 | c >> 6 & 63] + hexTable[128 | c & 63];
        }
      if (lastPos === 0)
        return str;
      if (lastPos < len)
        return out + str.slice(lastPos);
      return out;
    }
    module.exports = { encodeString };
  }
});

// ../../../node_modules/.pnpm/fast-querystring@1.1.2/node_modules/fast-querystring/lib/stringify.js
var require_stringify = __commonJS({
  "../../../node_modules/.pnpm/fast-querystring@1.1.2/node_modules/fast-querystring/lib/stringify.js"(exports, module) {
    "use strict";
    var { encodeString } = require_querystring();
    function getAsPrimitive(value) {
      const type = typeof value;
      if (type === "string") {
        return encodeString(value);
      } else if (type === "bigint") {
        return value.toString();
      } else if (type === "boolean") {
        return value ? "true" : "false";
      } else if (type === "number" && Number.isFinite(value)) {
        return value < 1e21 ? "" + value : encodeString("" + value);
      }
      return "";
    }
    function stringify(input) {
      let result = "";
      if (input === null || typeof input !== "object") {
        return result;
      }
      const separator = "&";
      const keys = Object.keys(input);
      const keyLength = keys.length;
      let valueLength = 0;
      for (let i = 0; i < keyLength; i++) {
        const key = keys[i];
        const value = input[key];
        const encodedKey = encodeString(key) + "=";
        if (i) {
          result += separator;
        }
        if (Array.isArray(value)) {
          valueLength = value.length;
          for (let j = 0; j < valueLength; j++) {
            if (j) {
              result += separator;
            }
            result += encodedKey;
            result += getAsPrimitive(value[j]);
          }
        } else {
          result += encodedKey;
          result += getAsPrimitive(value);
        }
      }
      return result;
    }
    module.exports = stringify;
  }
});

// ../../../node_modules/.pnpm/fast-querystring@1.1.2/node_modules/fast-querystring/lib/index.js
var require_lib = __commonJS({
  "../../../node_modules/.pnpm/fast-querystring@1.1.2/node_modules/fast-querystring/lib/index.js"(exports, module) {
    "use strict";
    var parse = require_parse2();
    var stringify = require_stringify();
    var fastQuerystring = {
      parse,
      stringify
    };
    module.exports = fastQuerystring;
    module.exports.default = fastQuerystring;
    module.exports.parse = parse;
    module.exports.stringify = stringify;
  }
});

// ../../../node_modules/.pnpm/elysia@0.8.9_@sinclair+typebox@0.32.9_typescript@5.4.0-dev.20231224/node_modules/elysia/dist/cjs/compose.js
var require_compose = __commonJS({
  "../../../node_modules/.pnpm/elysia@0.8.9_@sinclair+typebox@0.32.9_typescript@5.4.0-dev.20231224/node_modules/elysia/dist/cjs/compose.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.composeErrorHandler = exports.composeGeneralHandler = exports.composeHandler = exports.isAsync = exports.hasTransform = exports.hasProperty = exports.hasType = exports.isFnUse = exports.hasReturn = void 0;
    var value_1 = require_value5();
    var fast_querystring_1 = require_lib();
    var fast_decode_uri_component_1 = __importDefault(require_fast_decode_uri_component());
    var utils_1 = require_utils();
    var handler_1 = require_handler();
    var error_1 = require_error3();
    var cookie_1 = require_cookie2();
    var headersHasToJSON = new Headers().toJSON;
    var findAliases = new RegExp(` (\\w+) = context`, "g");
    var requestId = { value: 0 };
    var createReport = ({ hasTrace, hasTraceSet = false, addFn, condition = {} }) => {
      if (hasTrace) {
        addFn(`
const reporter = getReporter()
`);
        return (event, { name, attribute = "", unit = 0 } = {}) => {
          const dotIndex = event.indexOf(".");
          const isGroup = dotIndex === -1;
          if (event !== "request" && event !== "response" && !condition[isGroup ? event : event.slice(0, dotIndex)])
            return () => {
              if (hasTraceSet && event === "afterHandle")
                addFn(`
await traceDone
`);
            };
          if (isGroup)
            name ||= event;
          else
            name ||= "anonymous";
          addFn("\n" + `reporter.emit('event', {
					id,
					event: '${event}',
					type: 'begin',
					name: '${name}',
					time: performance.now(),
					${isGroup ? `unit: ${unit},` : ""}
					${attribute}
				})`.replace(/(\t| |\n)/g, "") + "\n");
          let handled = false;
          return () => {
            if (handled)
              return;
            handled = true;
            addFn("\n" + `reporter.emit('event', {
							id,
							event: '${event}',
							type: 'end',
							time: performance.now()
						})`.replace(/(\t| |\n)/g, "") + "\n");
            if (hasTraceSet && event === "afterHandle")
              addFn(`
await traceDone
`);
          };
        };
      } else {
        return () => () => {
        };
      }
    };
    var hasReturn = (fnLiteral) => {
      const parenthesisEnd = fnLiteral.indexOf(")");
      if (fnLiteral.charCodeAt(parenthesisEnd + 2) === 61 && fnLiteral.charCodeAt(parenthesisEnd + 5) !== 123) {
        return true;
      }
      return fnLiteral.includes("return");
    };
    exports.hasReturn = hasReturn;
    var composeValidationFactory = (hasErrorHandler, { injectResponse = "" } = {}) => ({
      composeValidation: (type, value = `c.${type}`) => hasErrorHandler ? `c.set.status = 400; throw new ValidationError(
'${type}',
${type},
${value}
)` : `c.set.status = 400; return new ValidationError(
	'${type}',
	${type},
	${value}
).toResponse(c.set.headers)`,
      composeResponseValidation: (name = "r") => {
        const returnError = hasErrorHandler ? `throw new ValidationError(
'response',
response[c.set.status],
${name}
)` : `return new ValidationError(
'response',
response[c.set.status],
${name}
).toResponse(c.set.headers)`;
        return `
${injectResponse}
		if(!(${name} instanceof Response) && response[c.set.status]?.Check(${name}) === false) {
	if(!(response instanceof Error))
		${returnError}
}
`;
      }
    });
    var isFnUse = (keyword, fnLiteral) => {
      if (fnLiteral.startsWith("[object "))
        return false;
      fnLiteral = fnLiteral.trimStart();
      fnLiteral = fnLiteral.replaceAll(/^async /g, "");
      if (/^(\w+)\(/g.test(fnLiteral))
        fnLiteral = fnLiteral.slice(fnLiteral.indexOf("("));
      const argument = (
        // CharCode 40 is '('
        fnLiteral.charCodeAt(0) === 40 || fnLiteral.startsWith("function") ? (
          // Bun: (context) => {}
          fnLiteral.slice(fnLiteral.indexOf("(") + 1, fnLiteral.indexOf(")"))
        ) : (
          // Node: context => {}
          fnLiteral.slice(0, fnLiteral.indexOf("=") - 1)
        )
      );
      if (argument === "")
        return false;
      const restIndex = argument.charCodeAt(0) === 123 ? argument.indexOf("...") : -1;
      if (argument.charCodeAt(0) === 123) {
        if (argument.includes(keyword))
          return true;
        if (restIndex === -1)
          return false;
      }
      if (fnLiteral.match(new RegExp(`${argument}(.${keyword}|\\["${keyword}"\\])`))) {
        return true;
      }
      const restAlias = restIndex !== -1 ? argument.slice(restIndex + 3, argument.indexOf(" ", restIndex + 3)) : void 0;
      if (fnLiteral.match(new RegExp(`${restAlias}(.${keyword}|\\["${keyword}"\\])`)))
        return true;
      const aliases = [argument];
      if (restAlias)
        aliases.push(restAlias);
      for (const found of fnLiteral.matchAll(findAliases))
        aliases.push(found[1]);
      const destructuringRegex = new RegExp(`{.*?} = (${aliases.join("|")})`, "g");
      for (const [params] of fnLiteral.matchAll(destructuringRegex))
        if (params.includes(`{ ${keyword}`) || params.includes(`, ${keyword}`))
          return true;
      return false;
    };
    exports.isFnUse = isFnUse;
    var isContextPassToFunction = (fnLiteral) => {
      fnLiteral = fnLiteral.trimStart();
      if (fnLiteral.startsWith("[object"))
        return false;
      fnLiteral = fnLiteral.replaceAll(/^async /g, "");
      if (/^(\w+)\(/g.test(fnLiteral))
        fnLiteral = fnLiteral.slice(fnLiteral.indexOf("("));
      const argument = (
        // CharCode 40 is '('
        fnLiteral.charCodeAt(0) === 40 || fnLiteral.startsWith("function") ? (
          // Bun: (context) => {}
          fnLiteral.slice(fnLiteral.indexOf("(") + 1, fnLiteral.indexOf(")"))
        ) : (
          // Node: context => {}
          fnLiteral.slice(0, fnLiteral.indexOf("=") - 1)
        )
      );
      if (argument === "")
        return false;
      const restIndex = argument.charCodeAt(0) === 123 ? argument.indexOf("...") : -1;
      const restAlias = restIndex !== -1 ? argument.slice(restIndex + 3, argument.indexOf(" ", restIndex + 3)) : void 0;
      const aliases = [argument];
      if (restAlias)
        aliases.push(restAlias);
      for (const found of fnLiteral.matchAll(findAliases))
        aliases.push(found[1]);
      for (const alias of aliases)
        if (new RegExp(`\\b\\w+\\([^)]*\\b${alias}\\b[^)]*\\)`).test(fnLiteral))
          return true;
      const destructuringRegex = new RegExp(`{.*?} = (${aliases.join("|")})`, "g");
      for (const [renamed] of fnLiteral.matchAll(destructuringRegex))
        if (new RegExp(`\\b\\w+\\([^)]*\\b${renamed}\\b[^)]*\\)`).test(fnLiteral))
          return true;
      return false;
    };
    var KindSymbol = Symbol.for("TypeBox.Kind");
    var hasType = (type, schema) => {
      if (!schema)
        return;
      if (KindSymbol in schema && schema[KindSymbol] === type)
        return true;
      if (schema.type === "object") {
        const properties = schema.properties;
        for (const key of Object.keys(properties)) {
          const property = properties[key];
          if (property.type === "object") {
            if ((0, exports.hasType)(type, property))
              return true;
          } else if (property.anyOf) {
            for (let i = 0; i < property.anyOf.length; i++)
              if ((0, exports.hasType)(type, property.anyOf[i]))
                return true;
          }
          if (KindSymbol in property && property[KindSymbol] === type)
            return true;
        }
        return false;
      }
      return schema.properties && KindSymbol in schema.properties && schema.properties[KindSymbol] === type;
    };
    exports.hasType = hasType;
    var hasProperty = (expectedProperty, schema) => {
      if (!schema)
        return;
      if (schema.type === "object") {
        const properties = schema.properties;
        if (!properties)
          return false;
        for (const key of Object.keys(properties)) {
          const property = properties[key];
          if (expectedProperty in property)
            return true;
          if (property.type === "object") {
            if ((0, exports.hasProperty)(expectedProperty, property))
              return true;
          } else if (property.anyOf) {
            for (let i = 0; i < property.anyOf.length; i++) {
              if ((0, exports.hasProperty)(expectedProperty, property.anyOf[i]))
                return true;
            }
          }
        }
        return false;
      }
      return expectedProperty in schema;
    };
    exports.hasProperty = hasProperty;
    var TransformSymbol = Symbol.for("TypeBox.Transform");
    var hasTransform = (schema) => {
      if (!schema)
        return;
      if (schema.type === "object" && schema.properties) {
        const properties = schema.properties;
        for (const key of Object.keys(properties)) {
          const property = properties[key];
          if (property.type === "object") {
            if ((0, exports.hasTransform)(property))
              return true;
          } else if (property.anyOf) {
            for (let i = 0; i < property.anyOf.length; i++)
              if ((0, exports.hasTransform)(property.anyOf[i]))
                return true;
          }
          const hasTransformSymbol = TransformSymbol in property;
          if (hasTransformSymbol)
            return true;
        }
        return false;
      }
      return TransformSymbol in schema || schema.properties && TransformSymbol in schema.properties;
    };
    exports.hasTransform = hasTransform;
    var getUnionedType = (validator) => {
      if (!validator)
        return;
      const schema = validator?.schema;
      if (schema && "anyOf" in schema) {
        let foundDifference = false;
        const type = schema.anyOf[0].type;
        for (const validator2 of schema.anyOf) {
          if (validator2.type !== type) {
            foundDifference = true;
            break;
          }
        }
        if (!foundDifference)
          return type;
      }
      return validator.schema?.type;
    };
    var matchFnReturn = /(?:return|=>) \S+\(/g;
    var isAsync = (fn) => {
      if (fn.constructor.name === "AsyncFunction")
        return true;
      const literal = fn.toString();
      if (literal.includes("=> response.clone("))
        return false;
      return !!literal.match(matchFnReturn);
    };
    exports.isAsync = isAsync;
    var getDestructureQuery = (fn) => {
      if (!fn.includes("query: {") || fn.includes("query,") || fn.includes("query }"))
        return false;
      const start = fn.indexOf("query: {");
      fn = fn.slice(start + 9);
      fn = fn.slice(0, fn.indexOf("}"));
      return fn.split(",").map((x) => {
        const indexOf = x.indexOf(":");
        if (indexOf === -1)
          return x.trim();
        return x.slice(0, indexOf).trim();
      });
    };
    var composeHandler = ({ path, method, hooks, validator, handler, handleError, definitions, schema, onRequest, config, getReporter, setHeader }) => {
      const hasErrorHandler = config.forceErrorEncapsulation || hooks.error.length > 0 || typeof Bun === "undefined" || hooks.onResponse.length > 0 || !!hooks.trace.length;
      const isHandleFn = typeof handler === "function";
      const handle = isHandleFn ? `handler(c)` : `handler`;
      const handleResponse = hooks.onResponse.length ? `
;(async () => {${hooks.onResponse.map((_, i) => `await res${i}(c)`).join(";")}})();
` : "";
      const traceLiteral = hooks.trace.map((x) => x.toString());
      let hasUnknownContext = false;
      if (isHandleFn && isContextPassToFunction(handler.toString()))
        hasUnknownContext = true;
      if (!hasUnknownContext)
        for (const [key, value] of Object.entries(hooks)) {
          if (!Array.isArray(value) || !value.length || ![
            "parse",
            "transform",
            "beforeHandle",
            "afterHandle",
            "onResponse"
          ].includes(key))
            continue;
          for (const handle2 of value) {
            if (typeof handle2 !== "function")
              continue;
            if (isContextPassToFunction(handle2.toString())) {
              hasUnknownContext = true;
              break;
            }
          }
          if (hasUnknownContext)
            break;
        }
      const traceConditions = {
        parse: traceLiteral.some((x) => (0, exports.isFnUse)("parse", x)),
        transform: traceLiteral.some((x) => (0, exports.isFnUse)("transform", x)),
        handle: traceLiteral.some((x) => (0, exports.isFnUse)("handle", x)),
        beforeHandle: traceLiteral.some((x) => (0, exports.isFnUse)("beforeHandle", x)),
        afterHandle: traceLiteral.some((x) => (0, exports.isFnUse)("afterHandle", x)),
        error: hasErrorHandler || traceLiteral.some((x) => (0, exports.isFnUse)("error", x))
      };
      const hasTrace = hooks.trace.length > 0;
      let fnLiteral = "";
      const lifeCycleLiteral = validator || method !== "GET" && method !== "HEAD" ? [
        handler,
        ...hooks.transform,
        ...hooks.beforeHandle,
        ...hooks.afterHandle,
        ...hooks.mapResponse
      ].map((x) => typeof x === "function" ? x.toString() : `${x}`) : [];
      const hasBody = method !== "GET" && method !== "HEAD" && (hasUnknownContext || hooks.type !== "none" && (!!validator.body || !!hooks.type || lifeCycleLiteral.some((fn) => (0, exports.isFnUse)("body", fn))));
      const hasHeaders = hasUnknownContext || validator.headers || lifeCycleLiteral.some((fn) => (0, exports.isFnUse)("headers", fn)) || setHeader && Object.keys(setHeader).length;
      const hasCookie = hasUnknownContext || !!validator.cookie || lifeCycleLiteral.some((fn) => (0, exports.isFnUse)("cookie", fn));
      const cookieMeta = validator?.cookie?.schema;
      let encodeCookie = "";
      if (cookieMeta?.sign) {
        if (!cookieMeta.secrets)
          throw new Error(`t.Cookie required secret which is not set in (${method}) ${path}.`);
        const secret = !cookieMeta.secrets ? void 0 : typeof cookieMeta.secrets === "string" ? cookieMeta.secrets : cookieMeta.secrets[0];
        encodeCookie += `const _setCookie = c.set.cookie
		if(_setCookie) {`;
        if (cookieMeta.sign === true) {
          encodeCookie += `for(const [key, cookie] of Object.entries(_setCookie)) {
				c.set.cookie[key].value = await signCookie(cookie.value, '${secret}')
			}`;
        } else
          for (const name of cookieMeta.sign) {
            encodeCookie += `if(_setCookie['${name}']?.value) { c.set.cookie['${name}'].value = await signCookie(_setCookie['${name}'].value, '${secret}') }
`;
          }
        encodeCookie += "}\n";
      }
      const { composeValidation, composeResponseValidation } = composeValidationFactory(hasErrorHandler);
      if (hasHeaders) {
        fnLiteral += headersHasToJSON ? `c.headers = c.request.headers.toJSON()
` : `c.headers = {}
                for (const [key, value] of c.request.headers.entries())
					c.headers[key] = value
				`;
      }
      if (hasCookie) {
        const get = (name, defaultValue) => {
          const value = cookieMeta?.[name] ?? defaultValue;
          if (!value)
            return typeof defaultValue === "string" ? `${name}: "${defaultValue}",` : `${name}: ${defaultValue},`;
          if (typeof value === "string")
            return `${name}: '${value}',`;
          if (value instanceof Date)
            return `${name}: new Date(${value.getTime()}),`;
          return `${name}: ${value},`;
        };
        const options = cookieMeta ? `{
			secret: ${cookieMeta.secrets !== void 0 ? typeof cookieMeta.secrets === "string" ? `'${cookieMeta.secrets}'` : "[" + cookieMeta.secrets.reduce((a, b) => a + `'${b}',`, "") + "]" : "undefined"},
			sign: ${cookieMeta.sign === true ? true : cookieMeta.sign !== void 0 ? "[" + cookieMeta.sign.reduce((a, b) => a + `'${b}',`, "") + "]" : "undefined"},
			${get("domain")}
			${get("expires")}
			${get("httpOnly")}
			${get("maxAge")}
			${get("path", "/")}
			${get("priority")}
			${get("sameSite")}
			${get("secure")}
		}` : "undefined";
        if (hasHeaders)
          fnLiteral += `
c.cookie = await parseCookie(c.set, c.headers.cookie, ${options})
`;
        else
          fnLiteral += `
c.cookie = await parseCookie(c.set, c.request.headers.get('cookie'), ${options})
`;
      }
      const hasQuery = hasUnknownContext || validator.query || lifeCycleLiteral.some((fn) => (0, exports.isFnUse)("query", fn));
      if (hasQuery) {
        let destructured = [];
        let referenceFullQuery = false;
        if (validator.query && validator.query.schema.type === "object") {
          destructured = Object.keys(validator.query.schema.properties);
        } else
          for (const event of lifeCycleLiteral) {
            const queries = getDestructureQuery(event);
            if (!queries) {
              referenceFullQuery = true;
              continue;
            }
            for (const query of queries)
              if (destructured.indexOf(query) === -1)
                destructured.push(query);
          }
        if (!referenceFullQuery && destructured.length) {
          fnLiteral += `if(c.qi !== -1) {
				const url = decodeURIComponent(c.request.url.slice(c.qi + 1))
				let memory = 0

				${destructured.map((name, index) => `
						memory = url.indexOf('${name}=')

						const a${index} = memory === -1 ? undefined : url.slice(memory = memory + ${name.length + 1}, (memory = url.indexOf('&', memory)) === -1 ? undefined : memory)`).join("\n")}

				c.query = {
					${destructured.map((name, index) => `${name}: a${index}`).join(", ")}
				}
			} else {
				c.query = {}
			}`;
        } else {
          fnLiteral += `c.query = c.qi !== -1 ? parseQuery(decodeURIComponent(c.request.url.slice(c.qi + 1))) : {}`;
        }
      }
      const traceLiterals = hooks.trace.map((x) => x.toString());
      const hasTraceSet = traceLiterals.some((fn) => (0, exports.isFnUse)("set", fn) || isContextPassToFunction(fn));
      hasUnknownContext || hooks.trace.some((fn) => (0, exports.isFnUse)("set", fn.toString()));
      const hasSet = setHeader && Object.keys(setHeader).length || hasTraceSet || hasCookie || lifeCycleLiteral.some((fn) => (0, exports.isFnUse)("set", fn)) || onRequest.some((fn) => (0, exports.isFnUse)("set", fn.toString()));
      if (hasTrace)
        fnLiteral += "\nconst id = c.$$requestId\n";
      const report = createReport({
        hasTrace,
        hasTraceSet,
        condition: traceConditions,
        addFn: (word) => {
          fnLiteral += word;
        }
      });
      fnLiteral += hasErrorHandler ? "\n try {\n" : "";
      if (hasTraceSet) {
        fnLiteral += `
const traceDone = Promise.all([`;
        for (let i = 0; i < hooks.trace.length; i++) {
          fnLiteral += `new Promise(r => { reporter.once(\`res\${id}.${i}\`, r) }),`;
        }
        fnLiteral += `])
`;
      }
      const isAsyncHandler = typeof handler === "function" && (0, exports.isAsync)(handler);
      const maybeAsync = hasCookie || hasBody || hasTraceSet || isAsyncHandler || !!hooks.mapResponse.length || hooks.parse.length > 0 || hooks.afterHandle.some(exports.isAsync) || hooks.beforeHandle.some(exports.isAsync) || hooks.transform.some(exports.isAsync);
      const endParse = report("parse", {
        unit: hooks.parse.length
      });
      if (hasBody) {
        const type = getUnionedType(validator?.body);
        if (hooks.type && !Array.isArray(hooks.type)) {
          if (hooks.type) {
            switch (hooks.type) {
              case "json":
              case "application/json":
                fnLiteral += `c.body = await c.request.json()
`;
                break;
              case "text":
              case "text/plain":
                fnLiteral += `c.body = await c.request.text()
`;
                break;
              case "urlencoded":
              case "application/x-www-form-urlencoded":
                fnLiteral += `c.body = parseQuery(await c.request.text())
`;
                break;
              case "arrayBuffer":
              case "application/octet-stream":
                fnLiteral += `c.body = await c.request.arrayBuffer()
`;
                break;
              case "formdata":
              case "multipart/form-data":
                fnLiteral += `c.body = {}

						const form = await c.request.formData()
						for (const key of form.keys()) {
							if (c.body[key])
								continue

							const value = form.getAll(key)
							if (value.length === 1)
								c.body[key] = value[0]
							else c.body[key] = value
						}
`;
                break;
            }
          }
          if (hooks.parse.length)
            fnLiteral += "}}";
        } else {
          const getAotParser = () => {
            if (hooks.parse.length && type && !Array.isArray(hooks.type)) {
              const schema2 = validator?.body?.schema;
              switch (type) {
                case "object":
                  if ((0, exports.hasType)("File", schema2) || (0, exports.hasType)("Files", schema2))
                    return `c.body = {}

								const form = await c.request.formData()
								for (const key of form.keys()) {
									if (c.body[key])
										continue

									const value = form.getAll(key)
									if (value.length === 1)
										c.body[key] = value[0]
									else c.body[key] = value
								}`;
                  break;
                default:
                  break;
              }
            }
          };
          const aotParse = getAotParser();
          if (aotParse)
            fnLiteral += aotParse;
          else {
            fnLiteral += "\n";
            fnLiteral += hasHeaders ? `let contentType = c.headers['content-type']` : `let contentType = c.request.headers.get('content-type')`;
            fnLiteral += `
				if (contentType) {
					const index = contentType.indexOf(';')
					if (index !== -1) contentType = contentType.substring(0, index)
`;
            if (hooks.parse.length) {
              fnLiteral += `let used = false
`;
              const endReport = report("parse", {
                unit: hooks.parse.length
              });
              for (let i = 0; i < hooks.parse.length; i++) {
                const endUnit = report("parse.unit", {
                  name: hooks.parse[i].name
                });
                const name = `bo${i}`;
                if (i !== 0)
                  fnLiteral += `if(!used) {
`;
                fnLiteral += `let ${name} = parse[${i}](c, contentType)
`;
                fnLiteral += `if(${name} instanceof Promise) ${name} = await ${name}
`;
                fnLiteral += `if(${name} !== undefined) { c.body = ${name}; used = true }
`;
                endUnit();
                if (i !== 0)
                  fnLiteral += `}`;
              }
              endReport();
            }
            if (hooks.parse.length)
              fnLiteral += `if (!used)`;
            fnLiteral += `
				switch (contentType) {
					case 'application/json':
						c.body = await c.request.json()
						break

					case 'text/plain':
						c.body = await c.request.text()
						break

					case 'application/x-www-form-urlencoded':
						c.body = parseQuery(await c.request.text())
						break

					case 'application/octet-stream':
						c.body = await c.request.arrayBuffer();
						break

					case 'multipart/form-data':
						c.body = {}

						const form = await c.request.formData()
						for (const key of form.keys()) {
							if (c.body[key])
								continue

							const value = form.getAll(key)
							if (value.length === 1)
								c.body[key] = value[0]
							else c.body[key] = value
						}

						break
					}
`;
            fnLiteral += "}\n";
          }
        }
        fnLiteral += "\n";
      }
      endParse();
      if (hooks?.transform) {
        const endTransform = report("transform", {
          unit: hooks.transform.length
        });
        for (let i = 0; i < hooks.transform.length; i++) {
          const transform = hooks.transform[i];
          const endUnit = report("transform.unit", {
            name: transform.name
          });
          if (transform.$elysia === "derive")
            fnLiteral += (0, exports.isAsync)(transform) ? `Object.assign(c, await transform[${i}](c));` : `Object.assign(c, transform[${i}](c));`;
          else
            fnLiteral += (0, exports.isAsync)(transform) ? `await transform[${i}](c);` : `transform[${i}](c);`;
          endUnit();
        }
        endTransform();
      }
      if (validator) {
        fnLiteral += "\n";
        if (validator.headers) {
          if ((0, exports.hasProperty)("default", validator.headers.params))
            for (const [key, value] of Object.entries(value_1.Value.Default(
              // @ts-ignore
              validator.headers.schema,
              {}
            ))) {
              const parsed = typeof value === "object" ? JSON.stringify(value) : `'${value}'`;
              if (parsed)
                fnLiteral += `c.headers['${key}'] ??= ${parsed}
`;
            }
          fnLiteral += `if(headers.Check(c.headers) === false) {
				${composeValidation("headers")}
			}`;
          if ((0, exports.hasTransform)(validator.headers.schema))
            fnLiteral += `
c.headers = headers.Decode(c.headers)
`;
        }
        if (validator.params) {
          if ((0, exports.hasProperty)("default", validator.params.schema))
            for (const [key, value] of Object.entries(value_1.Value.Default(
              // @ts-ignore
              validator.params.schema,
              {}
            ))) {
              const parsed = typeof value === "object" ? JSON.stringify(value) : `'${value}'`;
              if (parsed)
                fnLiteral += `c.params['${key}'] ??= ${parsed}
`;
            }
          fnLiteral += `if(params.Check(c.params) === false) {
				${composeValidation("params")}
			}`;
          if ((0, exports.hasTransform)(validator.params.schema))
            fnLiteral += `
c.params = params.Decode(c.params)
`;
        }
        if (validator.query) {
          if ((0, exports.hasProperty)("default", validator.query.schema))
            for (const [key, value] of Object.entries(value_1.Value.Default(
              // @ts-ignore
              validator.query.schema,
              {}
            ))) {
              const parsed = typeof value === "object" ? JSON.stringify(value) : `'${value}'`;
              if (parsed)
                fnLiteral += `c.query['${key}'] ??= ${parsed}
`;
            }
          fnLiteral += `if(query.Check(c.query) === false) {
				${composeValidation("query")}
			}`;
          if ((0, exports.hasTransform)(validator.query.schema))
            fnLiteral += `
c.query = query.Decode(Object.assign({}, c.query))
`;
        }
        if (validator.body) {
          if ((0, exports.hasProperty)("default", validator.body.schema))
            fnLiteral += `if(body.Check(c.body) === false) {
    				c.body = Object.assign(${JSON.stringify(value_1.Value.Default(
              // @ts-ignore
              validator.body.schema,
              null
            ) ?? {})}, c.body)

    				if(body.Check(c.query) === false) {
        				${composeValidation("body")}
     			}
            }`;
          else
            fnLiteral += `if(body.Check(c.body) === false) {
			${composeValidation("body")}
		}`;
          if ((0, exports.hasTransform)(validator.body.schema))
            fnLiteral += `
c.body = body.Decode(c.body)
`;
        }
        if ((0, handler_1.isNotEmpty)(validator.cookie?.schema.properties ?? {})) {
          fnLiteral += `const cookieValue = {}
    			for(const [key, value] of Object.entries(c.cookie))
    				cookieValue[key] = value.value
`;
          if ((0, exports.hasProperty)("default", validator.cookie.schema))
            for (const [key, value] of Object.entries(value_1.Value.Default(
              // @ts-ignore
              validator.cookie.schema,
              {}
            ))) {
              fnLiteral += `cookieValue['${key}'] = ${typeof value === "object" ? JSON.stringify(value) : value}
`;
            }
          fnLiteral += `if(cookie.Check(cookieValue) === false) {
				${composeValidation("cookie", "cookieValue")}
			}`;
          if ((0, exports.hasTransform)(validator.cookie.schema))
            fnLiteral += `
c.cookie = params.Decode(c.cookie)
`;
        }
      }
      if (hooks?.beforeHandle) {
        const endBeforeHandle = report("beforeHandle", {
          unit: hooks.beforeHandle.length
        });
        for (let i = 0; i < hooks.beforeHandle.length; i++) {
          const beforeHandle = hooks.beforeHandle[i];
          const endUnit = report("beforeHandle.unit", {
            name: beforeHandle.name
          });
          const returning = (0, exports.hasReturn)(beforeHandle.toString());
          if (beforeHandle.$elysia === "resolve") {
            fnLiteral += (0, exports.isAsync)(beforeHandle) ? `Object.assign(c, await beforeHandle[${i}](c));` : `Object.assign(c, beforeHandle[${i}](c));`;
          } else if (!returning) {
            fnLiteral += (0, exports.isAsync)(beforeHandle) ? `await beforeHandle[${i}](c);
` : `beforeHandle[${i}](c);
`;
            endUnit();
          } else {
            fnLiteral += (0, exports.isAsync)(beforeHandle) ? `be = await beforeHandle[${i}](c);
` : `be = beforeHandle[${i}](c);
`;
            endUnit();
            fnLiteral += `if(be !== undefined) {
`;
            const endAfterHandle = report("afterHandle", {
              unit: hooks.transform.length
            });
            if (hooks.afterHandle) {
              report("handle", {
                name: isHandleFn ? handler.name : void 0
              })();
              for (let i2 = 0; i2 < hooks.afterHandle.length; i2++) {
                const returning2 = (0, exports.hasReturn)(hooks.afterHandle[i2].toString());
                const endUnit2 = report("afterHandle.unit", {
                  name: hooks.afterHandle[i2].name
                });
                fnLiteral += `c.response = be
`;
                if (!returning2) {
                  fnLiteral += (0, exports.isAsync)(hooks.afterHandle[i2]) ? `await afterHandle[${i2}](c, be)
` : `afterHandle[${i2}](c, be)
`;
                } else {
                  fnLiteral += (0, exports.isAsync)(hooks.afterHandle[i2]) ? `af = await afterHandle[${i2}](c)
` : `af = afterHandle[${i2}](c)
`;
                  fnLiteral += `if(af !== undefined) { c.response = be = af }
`;
                }
                endUnit2();
              }
            }
            endAfterHandle();
            if (validator.response)
              fnLiteral += composeResponseValidation("be");
            if (hooks.mapResponse.length) {
              fnLiteral += `c.response = be`;
              for (let i2 = 0; i2 < hooks.mapResponse.length; i2++) {
                fnLiteral += `
if(mr === undefined) {
							mr = onMapResponse[${i2}](c)
							if(mr instanceof Promise) mr = await mr
							if(mr !== undefined) c.response = mr
						}
`;
              }
            }
            fnLiteral += encodeCookie;
            fnLiteral += `return mapEarlyResponse(be, c.set)}
`;
          }
        }
        endBeforeHandle();
      }
      if (hooks?.afterHandle.length) {
        const endHandle = report("handle", {
          name: isHandleFn ? handler.name : void 0
        });
        if (hooks.afterHandle.length)
          fnLiteral += isAsyncHandler ? `let r = c.response = await ${handle};
` : `let r = c.response = ${handle};
`;
        else
          fnLiteral += isAsyncHandler ? `let r = await ${handle};
` : `let r = ${handle};
`;
        endHandle();
        const endAfterHandle = report("afterHandle", {
          unit: hooks.afterHandle.length
        });
        for (let i = 0; i < hooks.afterHandle.length; i++) {
          const returning = (0, exports.hasReturn)(hooks.afterHandle[i].toString());
          const endUnit = report("afterHandle.unit", {
            name: hooks.afterHandle[i].name
          });
          if (!returning) {
            fnLiteral += (0, exports.isAsync)(hooks.afterHandle[i]) ? `await afterHandle[${i}](c)
` : `afterHandle[${i}](c)
`;
            endUnit();
          } else {
            fnLiteral += (0, exports.isAsync)(hooks.afterHandle[i]) ? `af = await afterHandle[${i}](c)
` : `af = afterHandle[${i}](c)
`;
            endUnit();
            if (validator.response) {
              fnLiteral += `if(af !== undefined) {`;
              endAfterHandle();
              fnLiteral += composeResponseValidation("af");
              fnLiteral += `c.response = af }`;
            } else {
              fnLiteral += `if(af !== undefined) {`;
              endAfterHandle();
              fnLiteral += `c.response = af}
`;
            }
          }
        }
        endAfterHandle();
        fnLiteral += `r = c.response
`;
        if (validator.response)
          fnLiteral += composeResponseValidation();
        fnLiteral += encodeCookie;
        if (hooks.mapResponse.length) {
          for (let i = 0; i < hooks.mapResponse.length; i++) {
            fnLiteral += `
mr = onMapResponse[${i}](c)
				if(mr instanceof Promise) mr = await mr
				if(mr !== undefined) c.response = mr
`;
          }
        }
        if (hasSet)
          fnLiteral += `return mapResponse(r, c.set)
`;
        else
          fnLiteral += `return mapCompactResponse(r)
`;
      } else {
        const endHandle = report("handle", {
          name: isHandleFn ? handler.name : void 0
        });
        if (validator.response || hooks.mapResponse.length) {
          fnLiteral += isAsyncHandler ? `let r = await ${handle};
` : `let r = ${handle};
`;
          endHandle();
          if (validator.response)
            fnLiteral += composeResponseValidation();
          report("afterHandle")();
          if (hooks.mapResponse.length) {
            fnLiteral += "c.response = r";
            for (let i = 0; i < hooks.mapResponse.length; i++) {
              fnLiteral += `
if(mr === undefined) { 
						mr = onMapResponse[${i}](c)
						if(mr instanceof Promise) mr = await mr
    					if(mr !== undefined) r = c.response = mr
					}
`;
            }
          }
          fnLiteral += encodeCookie;
          if (handler instanceof Response)
            fnLiteral += `return ${handle}.clone()
`;
          else if (hasSet)
            fnLiteral += `return mapResponse(r, c.set)
`;
          else
            fnLiteral += `return mapCompactResponse(r)
`;
        } else {
          if (traceConditions.handle || hasCookie) {
            fnLiteral += isAsyncHandler ? `let r = await ${handle};
` : `let r = ${handle};
`;
            endHandle();
            report("afterHandle")();
            if (hooks.mapResponse.length) {
              fnLiteral += "c.response = r";
              for (let i = 0; i < hooks.mapResponse.length; i++) {
                fnLiteral += `
if(mr === undefined) {
							mr = onMapResponse[${i}](c)
							if(mr instanceof Promise) mr = await mr
    						if(mr !== undefined) r = c.response = mr
						}
`;
              }
            }
            fnLiteral += encodeCookie;
            if (hasSet)
              fnLiteral += `return mapResponse(r, c.set)
`;
            else
              fnLiteral += `return mapCompactResponse(r)
`;
          } else {
            endHandle();
            const handled = isAsyncHandler ? `await ${handle}` : handle;
            report("afterHandle")();
            if (handler instanceof Response)
              fnLiteral += `return ${handle}.clone()
`;
            else if (hasSet)
              fnLiteral += `return mapResponse(${handled}, c.set)
`;
            else
              fnLiteral += `return mapCompactResponse(${handled})
`;
          }
        }
      }
      if (hasErrorHandler || handleResponse) {
        fnLiteral += `
} catch(error) {`;
        if (!maybeAsync)
          fnLiteral += `return (async () => {`;
        fnLiteral += `const set = c.set

		if (!set.status || set.status < 300) set.status = error?.status || 500
	`;
        const endError = report("error", {
          unit: hooks.error.length
        });
        if (hooks.error.length) {
          fnLiteral += `
				c.error = error
				c.code = error.code ?? error[ERROR_CODE] ?? "UNKNOWN"
			`;
          for (let i = 0; i < hooks.error.length; i++) {
            const name = `er${i}`;
            const endUnit = report("error.unit", {
              name: hooks.error[i].name
            });
            fnLiteral += `
let ${name} = handleErrors[${i}](c)
`;
            if ((0, exports.isAsync)(hooks.error[i]))
              fnLiteral += `if (${name} instanceof Promise) ${name} = await ${name}
`;
            endUnit();
            fnLiteral += `${name} = mapEarlyResponse(${name}, set)
`;
            fnLiteral += `if (${name}) {`;
            fnLiteral += `return ${name} }
`;
          }
        }
        endError();
        fnLiteral += `return handleError(c, error)

`;
        if (!maybeAsync)
          fnLiteral += "})()";
        fnLiteral += "}";
        if (handleResponse || hasTrace) {
          fnLiteral += ` finally { `;
          const endResponse = report("response", {
            unit: hooks.onResponse.length
          });
          fnLiteral += handleResponse;
          endResponse();
          fnLiteral += `}`;
        }
      }
      fnLiteral = `const {
		handler,
		handleError,
		hooks: {
			transform,
			resolve,
			beforeHandle,
			afterHandle,
			mapResponse: onMapResponse,
			parse,
			error: handleErrors,
			onResponse
		},
		validator: {
			body,
			headers,
			params,
			query,
			response,
			cookie
		},
		utils: {
			mapResponse,
			mapCompactResponse,
			mapEarlyResponse,
			parseQuery
		},
		error: {
			NotFoundError,
			ValidationError,
			InternalServerError
		},
		schema,
		definitions,
		ERROR_CODE,
		getReporter,
		requestId,
		parseCookie,
		signCookie,
		decodeURIComponent
	} = hooks

	${hooks.onResponse.length ? `const ${hooks.onResponse.map((x, i) => `res${i} = onResponse[${i}]`).join(",")}` : ""}

	return ${maybeAsync ? "async" : ""} function handle(c) {
		${hooks.beforeHandle.length ? "let be" : ""}
		${hooks.afterHandle.length ? "let af" : ""}
		${hooks.mapResponse.length ? "let mr" : ""}

		${schema && definitions ? "c.schema = schema; c.defs = definitions;" : ""}
		${fnLiteral}
	}`;
      const createHandler = Function("hooks", fnLiteral);
      return createHandler({
        handler,
        hooks,
        validator,
        handleError,
        utils: {
          mapResponse: handler_1.mapResponse,
          mapCompactResponse: handler_1.mapCompactResponse,
          mapEarlyResponse: handler_1.mapEarlyResponse,
          parseQuery: fast_querystring_1.parse
        },
        error: {
          NotFoundError: error_1.NotFoundError,
          ValidationError: error_1.ValidationError,
          InternalServerError: error_1.InternalServerError
        },
        schema,
        definitions,
        ERROR_CODE: error_1.ERROR_CODE,
        getReporter,
        requestId,
        parseCookie: cookie_1.parseCookie,
        signCookie: utils_1.signCookie,
        decodeURIComponent: fast_decode_uri_component_1.default
      });
    };
    exports.composeHandler = composeHandler;
    var composeGeneralHandler = (app) => {
      let decoratorsLiteral = "";
      let fnLiteral = "";
      for (const key of Object.keys(app.decorators))
        decoratorsLiteral += `,${key}: app.decorators.${key}`;
      const { router, staticRouter } = app;
      const hasTrace = app.event.trace.length > 0;
      const findDynamicRoute = `
	const route = router.find(request.method, path) ${router.root.ALL ? '?? router.find("ALL", path)' : ""}
	if (route === null)
		return ${app.event.error.length ? `app.handleError(ctx, notFound)` : app.event.request.length ? `new Response(error404Message, {
					status: ctx.set.status === 200 ? 404 : ctx.set.status,
					headers: ctx.set.headers
				})` : `error404.clone()`}

	ctx.params = route.params

	return route.store(ctx)`;
      let switchMap = ``;
      for (const [path, { code, all }] of Object.entries(staticRouter.map))
        switchMap += `case '${path}':
switch(request.method) {
${code}
${all ?? `default: break map`}}

`;
      const maybeAsync = app.event.request.some(exports.isAsync);
      fnLiteral += `const {
		app,
		app: { store, router, staticRouter, wsRouter },
		mapEarlyResponse,
		NotFoundError,
		requestId,
		getReporter,
		handleError
	} = data

	const notFound = new NotFoundError()

	${app.event.request.length ? `const onRequest = app.event.request` : ""}
	${staticRouter.variables}
	${app.event.error.length ? "" : `
	const error404Message = notFound.message.toString()
	const error404 = new Response(error404Message, { status: 404 });
	`}

	return ${maybeAsync ? "async" : ""} function map(request) {
`;
      if (app.event.request.length)
        fnLiteral += `let re`;
      const traceLiteral = app.event.trace.map((x) => x.toString());
      const report = createReport({
        hasTrace,
        hasTraceSet: app.event.trace.some((fn) => {
          const literal = fn.toString();
          return (0, exports.isFnUse)("set", literal) || isContextPassToFunction(literal);
        }),
        condition: {
          request: traceLiteral.some((x) => (0, exports.isFnUse)("request", x) || isContextPassToFunction(x))
        },
        addFn: (word) => {
          fnLiteral += word;
        }
      });
      if (app.event.request.length) {
        fnLiteral += `
			${hasTrace ? "const id = +requestId.value++" : ""}

			const ctx = {
				request,
				store,
				set: {
					headers: ${// @ts-ignore
        Object.keys(app.setHeaders ?? {}).length ? "Object.assign({}, app.setHeaders)" : "{}"},
					status: 200
				}
				${hasTrace ? ",$$requestId: +id" : ""}
				${decoratorsLiteral}
			}
		`;
        const endReport = report("request", {
          attribute: "ctx",
          unit: app.event.request.length
        });
        fnLiteral += `
 try {
`;
        for (let i = 0; i < app.event.request.length; i++) {
          const fn = app.event.request[i];
          const withReturn = (0, exports.hasReturn)(fn.toString());
          const maybeAsync2 = (0, exports.isAsync)(fn);
          const endUnit = report("request.unit", {
            name: app.event.request[i].name
          });
          if (withReturn) {
            fnLiteral += `re = mapEarlyResponse(
					${maybeAsync2 ? "await" : ""} onRequest[${i}](ctx),
					ctx.set
				)
`;
            endUnit();
            if (withReturn)
              fnLiteral += `if(re !== undefined) return re
`;
          } else {
            fnLiteral += `${maybeAsync2 ? "await" : ""} onRequest[${i}](ctx)
`;
            endUnit();
          }
        }
        fnLiteral += `} catch (error) {
			return app.handleError(ctx, error)
		}`;
        endReport();
        fnLiteral += `
		const url = request.url
		const s = url.indexOf('/', 11)
		const qi = ctx.qi = url.indexOf('?', s + 1)
		const path = ctx.path = url.substring(s, qi === -1 ? undefined : qi)`;
      } else {
        fnLiteral += `
		const url = request.url
		const s = url.indexOf('/', 11)
		const qi = url.indexOf('?', s + 1)
		const path = url.substring(s, qi === -1 ? undefined : qi)
		${hasTrace ? "const id = +requestId.value++" : ""}
		const ctx = {
			request,
			store,
			qi,
			path,
			set: {
				headers: ${// @ts-ignore
        Object.keys(app.setHeaders ?? {}).length ? "Object.assign({}, app.setHeaders)" : "{}"},
				status: 200
			}
			${hasTrace ? ",$$requestId: id" : ""}
			${decoratorsLiteral}
		}`;
        report("request", {
          unit: app.event.request.length,
          attribute: traceLiteral.some((x) => (0, exports.isFnUse)("context", x)) || traceLiteral.some((x) => (0, exports.isFnUse)("store", x)) || traceLiteral.some((x) => (0, exports.isFnUse)("set", x)) ? "ctx" : ""
        })();
      }
      const wsPaths = app.wsPaths;
      const wsRouter = app.wsRouter;
      if (Object.keys(wsPaths).length || wsRouter.history.length) {
        fnLiteral += `
			if(request.method === 'GET') {
				switch(path) {`;
        for (const [path, index] of Object.entries(wsPaths)) {
          fnLiteral += `
					case '${path}':
						if(request.headers.get('upgrade') === 'websocket')
							return st${index}(ctx)

						break`;
        }
        fnLiteral += `
				default:
					if(request.headers.get('upgrade') === 'websocket') {
						const route = wsRouter.find('ws', path)

						if(route) {
							ctx.params = route.params

							return route.store(ctx)
						}
					}

					break
			}
		}
`;
      }
      fnLiteral += `
		map: switch(path) {
			${switchMap}

			default:
				break
		}

		${findDynamicRoute}
	}`;
      const handleError = (0, exports.composeErrorHandler)(app);
      app.handleError = handleError;
      return Function("data", fnLiteral)({
        app,
        mapEarlyResponse: handler_1.mapEarlyResponse,
        NotFoundError: error_1.NotFoundError,
        // @ts-ignore
        getReporter: () => app.reporter,
        requestId,
        handleError
      });
    };
    exports.composeGeneralHandler = composeGeneralHandler;
    var composeErrorHandler = (app) => {
      let fnLiteral = `const {
		app: { event: { error: onError, onResponse: res } },
		mapResponse,
		ERROR_CODE,
		ELYSIA_RESPONSE
	} = inject

	return ${app.event.error.find(exports.isAsync) ? "async" : ""} function(context, error) {
		let r

		const { set } = context

		context.code = error.code
		context.error = error

		if(error[ELYSIA_RESPONSE]) {
			error.status = error[ELYSIA_RESPONSE]
			error.message = error.response
		}
`;
      for (let i = 0; i < app.event.error.length; i++) {
        const handler = app.event.error[i];
        const response = `${(0, exports.isAsync)(handler) ? "await " : ""}onError[${i}](context)`;
        if ((0, exports.hasReturn)(handler.toString()))
          fnLiteral += `r = ${response}; if(r !== undefined) {
				if(r instanceof Response) return r

				if(r[ELYSIA_RESPONSE]) {
					error.status = error[ELYSIA_RESPONSE]
					error.message = error.response
				}
		
				if(set.status === 200) set.status = error.status
				return mapResponse(r, set)
			}
`;
        else
          fnLiteral += response + "\n";
      }
      fnLiteral += `if(error.constructor.name === "ValidationError" || error.constructor.name === "TransformDecodeError") {
		set.status = error.status ?? 400
		return new Response(
			error.message,
			{ headers: set.headers, status: set.status }
		)
	} else {
		if(error.code && typeof error.status === "number")
			return new Response(
				error.message,
				{ headers: set.headers, status: error.status }
			)

		return mapResponse(error, set)
	}
}`;
      return Function("inject", fnLiteral)({
        app,
        mapResponse: handler_1.mapResponse,
        ERROR_CODE: error_1.ERROR_CODE,
        ELYSIA_RESPONSE: error_1.ELYSIA_RESPONSE
      });
    };
    exports.composeErrorHandler = composeErrorHandler;
  }
});

// ../../../node_modules/.pnpm/elysia@0.8.9_@sinclair+typebox@0.32.9_typescript@5.4.0-dev.20231224/node_modules/elysia/dist/cjs/dynamic-handle.js
var require_dynamic_handle = __commonJS({
  "../../../node_modules/.pnpm/elysia@0.8.9_@sinclair+typebox@0.32.9_typescript@5.4.0-dev.20231224/node_modules/elysia/dist/cjs/dynamic-handle.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createDynamicErrorHandler = exports.createDynamicHandler = void 0;
    var handler_1 = require_handler();
    var error_1 = require_error3();
    var fast_querystring_1 = require_lib();
    var utils_1 = require_utils();
    var cookie_1 = require_cookie2();
    var createDynamicHandler = (app) => async (request) => {
      const set = {
        cookie: {},
        status: 200,
        headers: {}
      };
      let context;
      if (app.decorators) {
        context = app.decorators;
        context.request = request;
        context.set = set;
        context.store = app.store;
      } else {
        context = {
          set,
          store: app.store,
          request
        };
      }
      const url = request.url, s = url.indexOf("/", 11), q = url.indexOf("?", s + 1), path = q === -1 ? url.substring(s) : url.substring(s, q);
      try {
        for (let i = 0; i < app.event.request.length; i++) {
          const onRequest = app.event.request[i];
          let response2 = onRequest(context);
          if (response2 instanceof Promise)
            response2 = await response2;
          response2 = (0, handler_1.mapEarlyResponse)(response2, set);
          if (response2)
            return response2;
        }
        const handler = (
          // @ts-ignore
          app.dynamicRouter.find(request.method, path) ?? // @ts-ignore
          app.dynamicRouter.find("ALL", path)
        );
        if (!handler)
          throw new error_1.NotFoundError();
        const { handle, hooks, validator, content } = handler.store;
        let body;
        if (request.method !== "GET" && request.method !== "HEAD") {
          if (content) {
            switch (content) {
              case "application/json":
                body = await request.json();
                break;
              case "text/plain":
                body = await request.text();
                break;
              case "application/x-www-form-urlencoded":
                body = (0, fast_querystring_1.parse)(await request.text());
                break;
              case "application/octet-stream":
                body = await request.arrayBuffer();
                break;
              case "multipart/form-data":
                body = {};
                const form = await request.formData();
                for (const key of form.keys()) {
                  if (body[key])
                    continue;
                  const value = form.getAll(key);
                  if (value.length === 1)
                    body[key] = value[0];
                  else
                    body[key] = value;
                }
                break;
            }
          } else {
            let contentType = request.headers.get("content-type");
            if (contentType) {
              const index = contentType.indexOf(";");
              if (index !== -1)
                contentType = contentType.slice(0, index);
              for (let i = 0; i < app.event.parse.length; i++) {
                let temp = app.event.parse[i](context, contentType);
                if (temp instanceof Promise)
                  temp = await temp;
                if (temp) {
                  body = temp;
                  break;
                }
              }
              if (body === void 0) {
                switch (contentType) {
                  case "application/json":
                    body = await request.json();
                    break;
                  case "text/plain":
                    body = await request.text();
                    break;
                  case "application/x-www-form-urlencoded":
                    body = (0, fast_querystring_1.parse)(await request.text());
                    break;
                  case "application/octet-stream":
                    body = await request.arrayBuffer();
                    break;
                  case "multipart/form-data":
                    body = {};
                    const form = await request.formData();
                    for (const key of form.keys()) {
                      if (body[key])
                        continue;
                      const value = form.getAll(key);
                      if (value.length === 1)
                        body[key] = value[0];
                      else
                        body[key] = value;
                    }
                    break;
                }
              }
            }
          }
        }
        context.body = body;
        context.params = handler?.params || void 0;
        context.query = q === -1 ? {} : (0, fast_querystring_1.parse)(url.substring(q + 1));
        context.headers = {};
        for (const [key, value] of request.headers.entries())
          context.headers[key] = value;
        const cookieMeta = validator?.cookie?.schema;
        context.cookie = await (0, cookie_1.parseCookie)(context.set, context.headers.cookie, cookieMeta ? {
          secret: cookieMeta.secrets !== void 0 ? typeof cookieMeta.secrets === "string" ? cookieMeta.secrets : cookieMeta.secrets.join(",") : void 0,
          sign: cookieMeta.sign === true ? true : cookieMeta.sign !== void 0 ? typeof cookieMeta.sign === "string" ? cookieMeta.sign : cookieMeta.sign.join(",") : void 0
        } : void 0);
        for (let i = 0; i < hooks.transform.length; i++) {
          const operation = hooks.transform[i](context);
          if (hooks.transform[i].$elysia === "derive") {
            if (operation instanceof Promise)
              Object.assign(context, await operation);
            else
              Object.assign(context, operation);
          } else if (operation instanceof Promise)
            await operation;
        }
        if (validator) {
          if (validator.headers) {
            const _header = {};
            for (const key in request.headers)
              _header[key] = request.headers.get(key);
            if (validator.headers.Check(_header) === false)
              throw new error_1.ValidationError("header", validator.headers, _header);
          }
          if (validator.params?.Check(context.params) === false)
            throw new error_1.ValidationError("params", validator.params, context.params);
          if (validator.query?.Check(context.query) === false)
            throw new error_1.ValidationError("query", validator.query, context.query);
          if (validator.cookie) {
            const cookieValue = {};
            for (const [key, value] of Object.entries(context.cookie))
              cookieValue[key] = value.value;
            if (validator.cookie?.Check(cookieValue) === false)
              throw new error_1.ValidationError("cookie", validator.cookie, cookieValue);
          }
          if (validator.body?.Check(body) === false)
            throw new error_1.ValidationError("body", validator.body, body);
        }
        for (let i = 0; i < hooks.beforeHandle.length; i++) {
          let response2 = hooks.beforeHandle[i](context);
          if (response2 instanceof Promise)
            response2 = await response2;
          if (response2 !== void 0) {
            ;
            context.response = response2;
            for (let i2 = 0; i2 < hooks.afterHandle.length; i2++) {
              let newResponse = hooks.afterHandle[i2](context);
              if (newResponse instanceof Promise)
                newResponse = await newResponse;
              if (newResponse)
                response2 = newResponse;
            }
            const result = (0, handler_1.mapEarlyResponse)(response2, context.set);
            if (result)
              return result;
          }
        }
        let response = handle(context);
        if (response instanceof Promise)
          response = await response;
        if (!hooks.afterHandle.length) {
          const responseValidator = validator?.response?.[response.status];
          if (responseValidator?.Check(response) === false)
            throw new error_1.ValidationError("response", responseValidator, response);
        } else {
          ;
          context.response = response;
          for (let i = 0; i < hooks.afterHandle.length; i++) {
            let newResponse = hooks.afterHandle[i](context);
            if (newResponse instanceof Promise)
              newResponse = await newResponse;
            const result = (0, handler_1.mapEarlyResponse)(newResponse, context.set);
            if (result !== void 0) {
              const responseValidator = validator?.response?.[response.status];
              if (responseValidator?.Check(result) === false)
                throw new error_1.ValidationError("response", responseValidator, result);
              return result;
            }
          }
        }
        if (context.set.cookie && cookieMeta?.sign) {
          const secret = !cookieMeta.secrets ? void 0 : typeof cookieMeta.secrets === "string" ? cookieMeta.secrets : cookieMeta.secrets[0];
          if (cookieMeta.sign === true)
            for (const [key, cookie] of Object.entries(context.set.cookie))
              context.set.cookie[key].value = await (0, utils_1.signCookie)(cookie.value, "${secret}");
          else
            for (const name of cookieMeta.sign) {
              if (!(name in cookieMeta.properties))
                continue;
              if (context.set.cookie[name]?.value) {
                context.set.cookie[name].value = await (0, utils_1.signCookie)(context.set.cookie[name].value, secret);
              }
            }
        }
        return (0, handler_1.mapResponse)(response, context.set);
      } catch (error) {
        if (error.status)
          set.status = error.status;
        return app.handleError(context, error);
      } finally {
        for (const onResponse of app.event.onResponse)
          await onResponse(context);
      }
    };
    exports.createDynamicHandler = createDynamicHandler;
    var createDynamicErrorHandler = (app) => async (context, error) => {
      const errorContext = Object.assign(context, { error, code: error.code });
      errorContext.set = context.set;
      for (let i = 0; i < app.event.error.length; i++) {
        let response = app.event.error[i](errorContext);
        if (response instanceof Promise)
          response = await response;
        if (response !== void 0 && response !== null)
          return (0, handler_1.mapResponse)(response, context.set);
      }
      return new Response(typeof error.cause === "string" ? error.cause : error.message, {
        headers: context.set.headers,
        status: error.status ?? 500
      });
    };
    exports.createDynamicErrorHandler = createDynamicErrorHandler;
  }
});

// ../../../node_modules/.pnpm/elysia@0.8.9_@sinclair+typebox@0.32.9_typescript@5.4.0-dev.20231224/node_modules/elysia/dist/cjs/type-system.js
var require_type_system = __commonJS({
  "../../../node_modules/.pnpm/elysia@0.8.9_@sinclair+typebox@0.32.9_typescript@5.4.0-dev.20231224/node_modules/elysia/dist/cjs/type-system.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.t = exports.ElysiaType = void 0;
    var system_1 = require_system2();
    var typebox_1 = require_require();
    var value_1 = require_value5();
    var error_1 = require_error3();
    var t = Object.assign({}, typebox_1.Type);
    exports.t = t;
    try {
      system_1.TypeSystem.Format("email", (value) => /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i.test(value));
      system_1.TypeSystem.Format("uuid", (value) => /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(value));
      system_1.TypeSystem.Format("date", (value) => !Number.isNaN(new Date(value).getTime()));
      system_1.TypeSystem.Format("date-time", (value) => !Number.isNaN(new Date(value).getTime()));
    } catch (error) {
    }
    var parseFileUnit = (size) => {
      if (typeof size === "string")
        switch (size.slice(-1)) {
          case "k":
            return +size.slice(0, size.length - 1) * 1024;
          case "m":
            return +size.slice(0, size.length - 1) * 1048576;
          default:
            return +size;
        }
      return size;
    };
    var validateFile = (options, value) => {
      if (!(value instanceof Blob))
        return false;
      if (options.minSize && value.size < parseFileUnit(options.minSize))
        return false;
      if (options.maxSize && value.size > parseFileUnit(options.maxSize))
        return false;
      if (options.extension)
        if (typeof options.extension === "string") {
          if (!value.type.startsWith(options.extension))
            return false;
        } else {
          for (let i = 0; i < options.extension.length; i++)
            if (value.type.startsWith(options.extension[i]))
              return true;
          return false;
        }
      return true;
    };
    var Files = system_1.TypeSystem.Type("Files", (options, value) => {
      if (!Array.isArray(value))
        return validateFile(options, value);
      if (options.minItems && value.length < options.minItems)
        return false;
      if (options.maxItems && value.length > options.maxItems)
        return false;
      for (let i = 0; i < value.length; i++)
        if (!validateFile(options, value[i]))
          return false;
      return true;
    });
    typebox_1.FormatRegistry.Set("numeric", (value) => !!value && !isNaN(+value));
    typebox_1.FormatRegistry.Set("ObjectString", (value) => {
      let start = value.charCodeAt(0);
      if (start === 9 || start === 10 || start === 32)
        start = value.trimStart().charCodeAt(0);
      if (start !== 123 && start !== 91)
        return false;
      try {
        JSON.parse(value);
        return true;
      } catch {
        return false;
      }
    });
    exports.ElysiaType = {
      Numeric: (property) => {
        const schema = typebox_1.Type.Number(property);
        return t.Transform(t.Union([
          t.String({
            format: "numeric",
            default: 0
          }),
          t.Number(property)
        ], property)).Decode((value) => {
          const number = +value;
          if (isNaN(number))
            return value;
          if (property && !value_1.Value.Check(schema, number))
            throw new error_1.ValidationError("property", schema, number);
          return number;
        }).Encode((value) => value);
      },
      ObjectString: (properties, options) => t.Transform(t.Union([
        t.String({
          format: "ObjectString",
          default: ""
        }),
        t.Object(properties, options)
      ], options)).Decode((value) => {
        if (typeof value === "string")
          try {
            return JSON.parse(value);
          } catch {
            return value;
          }
        return value;
      }).Encode((value) => JSON.stringify(value)),
      File: system_1.TypeSystem.Type("File", validateFile),
      Files: (options = {}) => t.Transform(t.Union([Files(options)])).Decode((value) => {
        if (Array.isArray(value))
          return value;
        return [value];
      }).Encode((value) => value),
      Nullable: (schema) => t.Union([t.Null(), schema]),
      /**
       * Allow Optional, Nullable and Undefined
       */
      MaybeEmpty: (schema) => t.Union([t.Null(), t.Undefined(), schema]),
      Cookie: (properties, options) => t.Object(properties, options)
    };
    t.ObjectString = exports.ElysiaType.ObjectString;
    t.Numeric = exports.ElysiaType.Numeric;
    t.File = (arg = {}) => exports.ElysiaType.File({
      default: "File",
      ...arg,
      extension: arg?.type,
      type: "string",
      format: "binary"
    });
    t.Files = (arg = {}) => exports.ElysiaType.Files({
      ...arg,
      elysiaMeta: "Files",
      default: "Files",
      extension: arg?.type,
      type: "array",
      items: {
        ...arg,
        default: "Files",
        type: "string",
        format: "binary"
      }
    });
    t.Nullable = (schema) => exports.ElysiaType.Nullable(schema);
    t.MaybeEmpty = exports.ElysiaType.MaybeEmpty;
    t.Cookie = exports.ElysiaType.Cookie;
    __exportStar(require_system2(), exports);
    __exportStar(require_compiler2(), exports);
  }
});

// ../../../node_modules/.pnpm/elysia@0.8.9_@sinclair+typebox@0.32.9_typescript@5.4.0-dev.20231224/node_modules/elysia/dist/cjs/index.js
var require_cjs2 = __commonJS({
  "../../../node_modules/.pnpm/elysia@0.8.9_@sinclair+typebox@0.32.9_typescript@5.4.0-dev.20231224/node_modules/elysia/dist/cjs/index.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.InvalidCookieSignature = exports.InternalServerError = exports.ValidationError = exports.NotFoundError = exports.ParseError = exports.error = exports.getResponseSchemaValidator = exports.mergeObjectArray = exports.mergeHook = exports.mergeDeep = exports.getSchemaValidator = exports.Cookie = exports.t = exports.mapEarlyResponse = exports.mapCompactResponse = exports.mapResponse = exports.Elysia = void 0;
    var memoirist_1 = require_cjs();
    var eventemitter3_1 = __importDefault(require_eventemitter3());
    var trace_1 = require_trace();
    var ws_1 = require_ws();
    var handler_1 = require_handler();
    var compose_1 = require_compose();
    var utils_1 = require_utils();
    var dynamic_handle_1 = require_dynamic_handle();
    var error_1 = require_error3();
    var type_system_1 = require_type_system();
    var Elysia2 = class _Elysia {
      getServer() {
        return this.server;
      }
      constructor(config) {
        this.dependencies = {};
        this.store = {};
        this.decorators = {};
        this.definitions = {
          type: {},
          error: {}
        };
        this.schema = {};
        this.macros = [];
        this.event = {
          start: [],
          request: [],
          parse: [],
          transform: [],
          beforeHandle: [],
          afterHandle: [],
          mapResponse: [],
          onResponse: [],
          trace: [],
          error: [],
          stop: []
        };
        this.reporter = new eventemitter3_1.default();
        this.server = null;
        this.validator = null;
        this.router = new memoirist_1.Memoirist();
        this.wsRouter = new memoirist_1.Memoirist();
        this.routes = [];
        this.staticRouter = {
          handlers: [],
          variables: "",
          map: {},
          all: ""
        };
        this.wsPaths = {};
        this.dynamicRouter = new memoirist_1.Memoirist();
        this.lazyLoadModules = [];
        this.path = "";
        this.stack = void 0;
        this.handle = async (request) => this.fetch(request);
        this.fetch = (request) => {
          if (process.env.NODE_ENV === "production")
            console.warn("Performance degradation found. Please call Elysia.compile() before using 'fetch'");
          return (this.fetch = this.config.aot ? (0, compose_1.composeGeneralHandler)(this) : (0, dynamic_handle_1.createDynamicHandler)(this))(request);
        };
        this.handleError = async (context, error) => (this.handleError = this.config.aot ? (0, compose_1.composeErrorHandler)(this) : (0, dynamic_handle_1.createDynamicErrorHandler)(this))(context, error);
        this.outerErrorHandler = (error) => new Response(error.message || error.name || "Error", {
          // @ts-ignore
          status: error?.status ?? 500
        });
        this.listen = (options, callback) => {
          if (typeof Bun === "undefined")
            throw new Error(".listen() is designed to run on Bun only. If you are running Elysia in other environment please use a dedicated plugin or export the handler via Elysia.fetch");
          this.compile();
          if (typeof options === "string") {
            options = +options.trim();
            if (Number.isNaN(options))
              throw new Error("Port must be a numeric value");
          }
          const fetch = this.fetch;
          const serve = typeof options === "object" ? {
            development: !error_1.isProduction,
            reusePort: true,
            ...this.config.serve,
            ...options,
            websocket: {
              ...this.config.websocket,
              ...ws_1.websocket
            },
            fetch,
            error: this.outerErrorHandler
          } : {
            development: !error_1.isProduction,
            reusePort: true,
            ...this.config.serve,
            websocket: {
              ...this.config.websocket,
              ...ws_1.websocket
            },
            port: options,
            fetch,
            error: this.outerErrorHandler
          };
          this.server = Bun?.serve(serve);
          if (this.event.start.length)
            for (let i = 0; i < this.event.start.length; i++)
              this.event.start[i](this);
          if (callback)
            callback(this.server);
          process.on("beforeExit", () => {
            for (let i = 0; i < this.event.stop.length; i++)
              this.event.stop[i](this);
          });
          Promise.all(this.lazyLoadModules).then(() => {
            Bun?.gc(false);
          });
          return this;
        };
        this.stop = async () => {
          if (!this.server)
            throw new Error("Elysia isn't running. Call `app.listen` to start the server.");
          this.server.stop();
          if (this.event.stop.length)
            for (let i = 0; i < this.event.stop.length; i++)
              this.event.stop[i](this);
        };
        this.config = {
          forceErrorEncapsulation: true,
          prefix: "",
          aot: true,
          strictPath: false,
          scoped: false,
          cookie: {},
          analytic: false,
          ...config,
          seed: config?.seed === void 0 ? "" : config?.seed
        };
        if (config?.analytic && (config?.name || config?.seed !== void 0))
          this.stack = new Error().stack;
      }
      add(method, paths, handle, localHook, { allowMeta = false, skipPrefix = false } = {
        allowMeta: false,
        skipPrefix: false
      }) {
        if (typeof paths === "string")
          paths = [paths];
        for (let path of paths) {
          path = path === "" ? path : path.charCodeAt(0) === 47 ? path : `/${path}`;
          if (this.config.prefix && !skipPrefix)
            path = this.config.prefix + path;
          if (localHook?.type)
            switch (localHook.type) {
              case "text":
                localHook.type = "text/plain";
                break;
              case "json":
                localHook.type = "application/json";
                break;
              case "formdata":
                localHook.type = "multipart/form-data";
                break;
              case "urlencoded":
                localHook.type = "application/x-www-form-urlencoded";
                break;
              case "arrayBuffer":
                localHook.type = "application/octet-stream";
                break;
              default:
                break;
            }
          const models = this.definitions.type;
          let cookieValidator = (0, utils_1.getSchemaValidator)(localHook?.cookie ?? this.validator?.cookie, {
            dynamic: !this.config.aot,
            models,
            additionalProperties: true
          });
          if ((0, handler_1.isNotEmpty)(this.config.cookie ?? {})) {
            if (cookieValidator) {
              cookieValidator.schema = (0, utils_1.mergeCookie)(
                // @ts-ignore
                cookieValidator.schema,
                this.config.cookie ?? {}
              );
            } else {
              cookieValidator = (0, utils_1.getSchemaValidator)(
                // @ts-ignore
                type_system_1.t.Cookie({}, this.config.cookie),
                {
                  dynamic: !this.config.aot,
                  models,
                  additionalProperties: true
                }
              );
            }
          }
          const validator = {
            body: (0, utils_1.getSchemaValidator)(localHook?.body ?? this.validator?.body, {
              dynamic: !this.config.aot,
              models
            }),
            headers: (0, utils_1.getSchemaValidator)(localHook?.headers ?? this.validator?.headers, {
              dynamic: !this.config.aot,
              models,
              additionalProperties: true
            }),
            params: (0, utils_1.getSchemaValidator)(localHook?.params ?? this.validator?.params, {
              dynamic: !this.config.aot,
              models
            }),
            query: (0, utils_1.getSchemaValidator)(localHook?.query ?? this.validator?.query, {
              dynamic: !this.config.aot,
              models
            }),
            cookie: cookieValidator,
            response: (0, utils_1.getResponseSchemaValidator)(localHook?.response ?? this.validator?.response, {
              dynamic: !this.config.aot,
              models
            })
          };
          const globalHook = this.event;
          const loosePath = path.endsWith("/") ? path.slice(0, path.length - 1) : path + "/";
          if (this.macros.length) {
            const createManager = (stackName) => (type, fn) => {
              if (typeof type === "function" || Array.isArray(type)) {
                if (!localHook[stackName])
                  localHook[stackName] = [];
                if (typeof localHook[stackName] === "function")
                  localHook[stackName] = [localHook[stackName]];
                if (Array.isArray(type))
                  localHook[stackName] = localHook[stackName].concat(type);
                else
                  localHook[stackName].push(type);
                return;
              }
              const { insert = "after", stack = "local" } = type;
              if (stack === "global") {
                if (!Array.isArray(fn)) {
                  if (insert === "before") {
                    ;
                    globalHook[stackName].unshift(fn);
                  } else {
                    ;
                    globalHook[stackName].push(fn);
                  }
                } else {
                  if (insert === "before") {
                    globalHook[stackName] = fn.concat(globalHook[stackName]);
                  } else {
                    globalHook[stackName] = globalHook[stackName].concat(fn);
                  }
                }
                return;
              } else {
                if (!localHook[stackName])
                  localHook[stackName] = [];
                if (typeof localHook[stackName] === "function")
                  localHook[stackName] = [localHook[stackName]];
                if (!Array.isArray(fn)) {
                  if (insert === "before") {
                    ;
                    localHook[stackName].unshift(fn);
                  } else {
                    ;
                    localHook[stackName].push(fn);
                  }
                } else {
                  if (insert === "before") {
                    localHook[stackName] = fn.concat(localHook[stackName]);
                  } else {
                    localHook[stackName] = localHook[stackName].concat(fn);
                  }
                }
                return;
              }
            };
            const manager = {
              events: {
                global: globalHook,
                local: localHook
              },
              onParse: createManager("parse"),
              onTransform: createManager("transform"),
              onBeforeHandle: createManager("beforeHandle"),
              onAfterHandle: createManager("afterHandle"),
              onResponse: createManager("onResponse"),
              onError: createManager("error")
            };
            for (const macro of this.macros) {
              const customHookValues = {};
              for (const [key, value] of Object.entries(localHook ?? {})) {
                if (utils_1.primitiveHooks.includes(key))
                  continue;
                customHookValues[key] = value;
              }
              if (!macro.$elysiaChecksum)
                macro.$elysiaChecksum = [];
              const hash = (0, utils_1.checksum)(JSON.stringify(customHookValues));
              if (macro.$elysiaChecksum.includes(hash))
                continue;
              macro.$elysiaChecksum.push((0, utils_1.checksum)(JSON.stringify(customHookValues)));
              (0, utils_1.traceBackMacro)(macro(manager), localHook);
            }
          }
          const hooks = (0, utils_1.mergeHook)(globalHook, localHook);
          const isFn = typeof handle === "function";
          if (this.config.aot === false) {
            this.dynamicRouter.add(method, path, {
              validator,
              hooks,
              content: localHook?.type,
              handle
            });
            if (this.config.strictPath === false) {
              this.dynamicRouter.add(method, loosePath, {
                validator,
                hooks,
                content: localHook?.type,
                handle
              });
            }
            this.routes.push({
              method,
              path,
              composed: null,
              handler: handle,
              hooks
            });
            return;
          }
          const mainHandler = (0, compose_1.composeHandler)({
            path,
            method,
            hooks,
            validator,
            handler: handle,
            handleError: this.handleError,
            onRequest: this.event.request,
            config: this.config,
            definitions: allowMeta ? this.definitions.type : void 0,
            schema: allowMeta ? this.schema : void 0,
            getReporter: () => this.reporter,
            setHeader: this.setHeaders
          });
          if (!isFn) {
            const context = Object.assign({
              headers: {},
              query: {},
              params: {},
              body: void 0,
              request: new Request(`http://localhost${path}`),
              store: this.store,
              path,
              set: {
                headers: this.setHeaders ?? {},
                status: 200
              }
            }, this.decorators);
            let response;
            for (const onRequest of Object.values(hooks.request)) {
              try {
                const inner = (0, handler_1.mapEarlyResponse)(onRequest(context), context.set);
                if (inner !== void 0) {
                  response = inner;
                  break;
                }
              } catch (error) {
                response = this.handleError(context, error);
                break;
              }
            }
            if (response)
              mainHandler.response = response;
            else {
              try {
                mainHandler.response = mainHandler(context);
              } catch (error) {
                mainHandler.response = this.handleError(context, error);
              }
            }
          }
          const existingRouteIndex = this.routes.findIndex((route) => route.path === path && route.method === method);
          if (existingRouteIndex !== -1) {
            this.routes.splice(existingRouteIndex, 1);
          }
          this.routes.push({
            method,
            path,
            composed: mainHandler,
            handler: handle,
            hooks
          });
          if (method === "$INTERNALWS") {
            const loose = this.config.strictPath ? void 0 : path.endsWith("/") ? path.slice(0, path.length - 1) : path + "/";
            if (path.indexOf(":") === -1 && path.indexOf("*") === -1) {
              const index = this.staticRouter.handlers.length;
              this.staticRouter.handlers.push(mainHandler);
              if (mainHandler.response instanceof Response)
                this.staticRouter.variables += `const st${index} = staticRouter.handlers[${index}].response
`;
              else
                this.staticRouter.variables += `const st${index} = staticRouter.handlers[${index}]
`;
              this.wsPaths[path] = index;
              if (loose)
                this.wsPaths[loose] = index;
            } else {
              this.wsRouter.add("ws", path, mainHandler);
              if (loose)
                this.wsRouter.add("ws", loose, mainHandler);
            }
            return;
          }
          if (path.indexOf(":") === -1 && path.indexOf("*") === -1) {
            const index = this.staticRouter.handlers.length;
            this.staticRouter.handlers.push(mainHandler);
            if (mainHandler.response instanceof Response)
              this.staticRouter.variables += `const st${index} = staticRouter.handlers[${index}].response
`;
            else
              this.staticRouter.variables += `const st${index} = staticRouter.handlers[${index}]
`;
            if (!this.staticRouter.map[path])
              this.staticRouter.map[path] = {
                code: ""
              };
            if (method === "ALL")
              this.staticRouter.map[path].all = `default: return st${index}(ctx)
`;
            else {
              if (mainHandler.response instanceof Response)
                this.staticRouter.map[path].code = `case '${method}': return st${index}.clone()
${this.staticRouter.map[path].code}`;
              else
                this.staticRouter.map[path].code = `case '${method}': return st${index}(ctx)
${this.staticRouter.map[path].code}`;
            }
            if (!this.config.strictPath) {
              if (!this.staticRouter.map[loosePath])
                this.staticRouter.map[loosePath] = {
                  code: ""
                };
              if (method === "ALL")
                this.staticRouter.map[loosePath].all = `default: return st${index}(ctx)
`;
              else {
                if (mainHandler.response instanceof Response)
                  this.staticRouter.map[loosePath].code = `case '${method}': return st${index}.clone()
${this.staticRouter.map[loosePath].code}`;
                else
                  this.staticRouter.map[loosePath].code = `case '${method}': return st${index}(ctx)
${this.staticRouter.map[loosePath].code}`;
              }
            }
          } else {
            this.router.add(method, path, mainHandler);
            if (!this.config.strictPath)
              this.router.add(method, path.endsWith("/") ? path.slice(0, path.length - 1) : path + "/", mainHandler);
          }
        }
      }
      headers(header) {
        if (!header)
          return this;
        if (!this.setHeaders)
          this.setHeaders = {};
        this.setHeaders = (0, utils_1.mergeDeep)(this.setHeaders, header);
        return this;
      }
      /**
       * ### start | Life cycle event
       * Called after server is ready for serving
       *
       * ---
       * @example
       * ```typescript
       * new Elysia()
       *     .onStart(({ url, port }) => {
       *         console.log("Running at ${url}:${port}")
       *     })
       *     .listen(8080)
       * ```
       */
      onStart(handler) {
        this.on("start", handler);
        return this;
      }
      /**
       * ### request | Life cycle event
       * Called on every new request is accepted
       *
       * ---
       * @example
       * ```typescript
       * new Elysia()
       *     .onRequest(({ method, url }) => {
       *         saveToAnalytic({ method, url })
       *     })
       * ```
       */
      onRequest(handler) {
        this.on("request", handler);
        return this;
      }
      /**
       * ### parse | Life cycle event
       * Callback function to handle body parsing
       *
       * If truthy value is returned, will be assigned to `context.body`
       * Otherwise will skip the callback and look for the next one.
       *
       * Equivalent to Express's body parser
       *
       * ---
       * @example
       * ```typescript
       * new Elysia()
       *     .onParse((request, contentType) => {
       *         if(contentType === "application/json")
       *             return request.json()
       *     })
       * ```
       */
      onParse(parser) {
        this.on("parse", parser);
        return this;
      }
      /**
       * ### transform | Life cycle event
       * Assign or transform anything related to context before validation.
       *
       * ---
       * @example
       * ```typescript
       * new Elysia()
       *     .onTransform(({ params }) => {
       *         if(params.id)
       *             params.id = +params.id
       *     })
       * ```
       */
      onTransform(handler) {
        this.on("transform", handler);
        return this;
      }
      /**
       * ### After Handle | Life cycle event
       * Intercept request **after** main handler is called.
       *
       * If truthy value is returned, will be assigned as `Response`
       *
       * ---
       * @example
       * ```typescript
       * new Elysia()
       *     .onAfterHandle((context, response) => {
       *         if(typeof response === "object")
       *             return JSON.stringify(response)
       *     })
       * ```
       */
      /**
       * Derive new property for each request with access to `Context`.
       *
       * If error is thrown, the scope will skip to handling error instead.
       *
       * ---
       * @example
       * new Elysia()
       *     .state('counter', 1)
       *     .derive(({ store }) => ({
       *         increase() {
       *             store.counter++
       *         }
       *     }))
       */
      resolve(resolver) {
        resolver.$elysia = "resolve";
        return this.onBeforeHandle(resolver);
      }
      /**
       * ### Before Handle | Life cycle event
       * Intercept request **before(()) main handler is called.
       *
       * If truthy value is returned, will be assigned as `Response` and skip the main handler
       *
       * ---
       * @example
       * ```typescript
       * new Elysia()
       *     .onBeforeHandle(({ params: { id }, status }) => {
       *         if(id && !isExisted(id)) {
       * 	           status(401)
       *
       *             return "Unauthorized"
       * 	       }
       *     })
       * ```
       */
      onBeforeHandle(handler) {
        this.on("beforeHandle", handler);
        return this;
      }
      /**
       * ### After Handle | Life cycle event
       * Intercept request **after** main handler is called.
       *
       * If truthy value is returned, will be assigned as `Response`
       *
       * ---
       * @example
       * ```typescript
       * new Elysia()
       *     .onAfterHandle((context, response) => {
       *         if(typeof response === "object")
       *             return JSON.stringify(response)
       *     })
       * ```
       */
      onAfterHandle(handler) {
        this.on("afterHandle", handler);
        return this;
      }
      /**
       * ### After Handle | Life cycle event
       * Intercept request **after** main handler is called.
       *
       * If truthy value is returned, will be assigned as `Response`
       *
       * ---
       * @example
       * ```typescript
       * new Elysia()
       *     .mapResponse((context, response) => {
       *         if(typeof response === "object")
       *             return JSON.stringify(response)
       *     })
       * ```
       */
      mapResponse(handler) {
        this.on("mapResponse", handler);
        return this;
      }
      /**
       * ### response | Life cycle event
       * Called when handler is executed
       * Good for analytic metrics
       *
       * ---
       * @example
       * ```typescript
       * new Elysia()
       *     .onError(({ code }) => {
       *         if(code === "NOT_FOUND")
       *             return "Path not found :("
       *     })
       * ```
       */
      onResponse(handler) {
        this.on("response", handler);
        return this;
      }
      /**
       * ### After Handle | Life cycle event
       * Intercept request **after** main handler is called.
       *
       * If truthy value is returned, will be assigned as `Response`
       *
       * ---
       * @example
       * ```typescript
       * new Elysia()
       *     .onAfterHandle((context, response) => {
       *         if(typeof response === "object")
       *             return JSON.stringify(response)
       *     })
       * ```
       */
      trace(handler) {
        this.reporter.on("event", (0, trace_1.createTraceListener)(() => this.reporter, this.event.trace.length, handler));
        this.on("trace", handler);
        return this;
      }
      error(name, error) {
        switch (typeof name) {
          case "string":
            error.prototype[error_1.ERROR_CODE] = name;
            this.definitions.error[name] = error;
            return this;
          case "function":
            this.definitions.error = name(this.definitions.error);
            return this;
        }
        for (const [code, error2] of Object.entries(name)) {
          error2.prototype[error_1.ERROR_CODE] = code;
          this.definitions.error[code] = error2;
        }
        return this;
      }
      /**
       * ### Error | Life cycle event
       * Called when error is thrown during processing request
       *
       * ---
       * @example
       * ```typescript
       * new Elysia()
       *     .onError(({ code }) => {
       *         if(code === "NOT_FOUND")
       *             return "Path not found :("
       *     })
       * ```
       */
      onError(handler) {
        this.on("error", handler);
        return this;
      }
      /**
       * ### stop | Life cycle event
       * Called after server stop serving request
       *
       * ---
       * @example
       * ```typescript
       * new Elysia()
       *     .onStop((app) => {
       *         cleanup()
       *     })
       * ```
       */
      onStop(handler) {
        this.on("stop", handler);
        return this;
      }
      /**
       * ### on
       * Syntax sugar for attaching life cycle event by name
       *
       * Does the exact same thing as `.on[Event]()`
       *
       * ---
       * @example
       * ```typescript
       * new Elysia()
       *     .on('error', ({ code }) => {
       *         if(code === "NOT_FOUND")
       *             return "Path not found :("
       *     })
       * ```
       */
      on(type, handlers) {
        for (let handler of Array.isArray(handlers) ? handlers : [handlers]) {
          handler = (0, utils_1.asGlobal)(handler);
          switch (type) {
            case "start":
              this.event.start.push(handler);
              break;
            case "request":
              this.event.request.push(handler);
              break;
            case "parse":
              this.event.parse.splice(this.event.parse.length - 1, 0, handler);
              break;
            case "transform":
              this.event.transform.push(handler);
              break;
            case "beforeHandle":
              this.event.beforeHandle.push(handler);
              break;
            case "afterHandle":
              this.event.afterHandle.push(handler);
              break;
            case "mapResponse":
              this.event.mapResponse.push(handler);
              break;
            case "response":
              this.event.onResponse.push(handler);
              break;
            case "trace":
              this.event.trace.push(handler);
              break;
            case "error":
              this.event.error.push(handler);
              break;
            case "stop":
              this.event.stop.push(handler);
              break;
          }
        }
        return this;
      }
      /**
       * ### group
       * Encapsulate and group path with prefix
       *
       * ---
       * @example
       * ```typescript
       * new Elysia()
       *     .group('/v1', app => app
       *         .get('/', () => 'Hi')
       *         .get('/name', () => 'Elysia')
       *     })
       * ```
       */
      group(prefix, schemaOrRun, run) {
        const instance = new _Elysia({
          ...this.config,
          prefix: ""
        });
        instance.store = this.store;
        instance.definitions = this.definitions;
        instance.getServer = () => this.server;
        const isSchema = typeof schemaOrRun === "object";
        const sandbox = (isSchema ? run : schemaOrRun)(instance);
        this.decorators = (0, utils_1.mergeDeep)(this.decorators, instance.decorators);
        if (sandbox.event.request.length)
          this.event.request = [
            ...this.event.request,
            ...sandbox.event.request
          ];
        if (sandbox.event.onResponse.length)
          this.event.onResponse = [
            ...this.event.onResponse,
            ...sandbox.event.onResponse
          ];
        this.model(sandbox.definitions.type);
        Object.values(instance.routes).forEach(({ method, path, handler, hooks }) => {
          path = (isSchema ? "" : this.config.prefix) + prefix + path;
          if (isSchema) {
            const hook = schemaOrRun;
            const localHook = hooks;
            this.add(method, path, handler, (0, utils_1.mergeHook)(hook, {
              ...localHook,
              error: !localHook.error ? sandbox.event.error : Array.isArray(localHook.error) ? [...localHook.error, ...sandbox.event.error] : [localHook.error, ...sandbox.event.error]
            }));
          } else {
            this.add(method, path, handler, (0, utils_1.mergeHook)(hooks, {
              error: sandbox.event.error
            }), {
              skipPrefix: true
            });
          }
        });
        return this;
      }
      /**
       * ### guard
       * Encapsulate and pass hook into all child handler
       *
       * ---
       * @example
       * ```typescript
       * import { t } from 'elysia'
       *
       * new Elysia()
       *     .guard({
       *          schema: {
       *              body: t.Object({
       *                  username: t.String(),
       *                  password: t.String()
       *              })
       *          }
       *     }, app => app
       *         .get("/", () => 'Hi')
       *         .get("/name", () => 'Elysia')
       *     })
       * ```
       */
      guard(hook, run) {
        if (!run) {
          this.event = (0, utils_1.mergeLifeCycle)(this.event, hook);
          this.validator = {
            body: hook.body,
            headers: hook.headers,
            params: hook.params,
            query: hook.query,
            response: hook.response
          };
          return this;
        }
        const instance = new _Elysia({
          ...this.config,
          prefix: ""
        });
        instance.store = this.store;
        instance.definitions = this.definitions;
        const sandbox = run(instance);
        this.decorators = (0, utils_1.mergeDeep)(this.decorators, instance.decorators);
        if (sandbox.event.request.length)
          this.event.request = [
            ...this.event.request,
            ...sandbox.event.request
          ];
        if (sandbox.event.onResponse.length)
          this.event.onResponse = [
            ...this.event.onResponse,
            ...sandbox.event.onResponse
          ];
        this.model(sandbox.definitions.type);
        Object.values(instance.routes).forEach(({ method, path, handler, hooks: localHook }) => {
          this.add(method, path, handler, (0, utils_1.mergeHook)(hook, {
            ...localHook,
            error: !localHook.error ? sandbox.event.error : Array.isArray(localHook.error) ? [...localHook.error, ...sandbox.event.error] : [localHook.error, ...sandbox.event.error]
          }));
        });
        return this;
      }
      /**
       * ### use
       * Merge separate logic of Elysia with current
       *
       * ---
       * @example
       * ```typescript
       * const plugin = (app: Elysia) => app
       *     .get('/plugin', () => 'hi')
       *
       * new Elysia()
       *     .use(plugin)
       * ```
       */
      use(plugin) {
        if (plugin instanceof Promise) {
          this.lazyLoadModules.push(plugin.then((plugin2) => {
            if (typeof plugin2 === "function") {
              return plugin2(this);
            }
            if (typeof plugin2.default === "function")
              return plugin2.default(this);
            return this._use(plugin2);
          }).then((x) => x.compile()));
          return this;
        } else
          return this._use(plugin);
        return this;
      }
      _use(plugin) {
        if (typeof plugin === "function") {
          const instance = plugin(this);
          if (instance instanceof Promise) {
            this.lazyLoadModules.push(instance.then((plugin2) => {
              if (plugin2 instanceof _Elysia) {
                this.compile();
                for (const { method, path, handler, hooks } of Object.values(plugin2.routes)) {
                  this.add(method, path, handler, (0, utils_1.mergeHook)(hooks, {
                    error: plugin2.event.error
                  }));
                }
                return plugin2;
              }
              if (typeof plugin2 === "function")
                return plugin2(this);
              if (typeof plugin2.default === "function")
                return plugin2.default(this);
              return this._use(plugin2);
            }).then((x) => x.compile()));
            return this;
          }
          return instance;
        }
        const { name, seed } = plugin.config;
        plugin.getServer = () => this.getServer();
        this.headers(plugin.setHeaders);
        const isScoped = plugin.config.scoped;
        if (isScoped) {
          if (name) {
            if (!(name in this.dependencies))
              this.dependencies[name] = [];
            const current = seed !== void 0 ? (0, utils_1.checksum)(name + JSON.stringify(seed)) : 0;
            if (this.dependencies[name].some(({ checksum }) => current === checksum))
              return this;
            this.dependencies[name].push(!this.config?.analytic ? {
              name: plugin.config.name,
              seed: plugin.config.seed,
              checksum: current,
              dependencies: plugin.dependencies
            } : {
              name: plugin.config.name,
              seed: plugin.config.seed,
              checksum: current,
              dependencies: plugin.dependencies,
              stack: plugin.stack,
              routes: plugin.routes,
              decorators: plugin.decorators,
              store: plugin.store,
              type: plugin.definitions.type,
              error: plugin.definitions.error,
              derive: plugin.event.transform.filter((x) => x.$elysia === "derive").map((x) => ({
                fn: x.toString(),
                stack: new Error().stack ?? ""
              })),
              resolve: plugin.event.transform.filter((x) => x.$elysia === "derive").map((x) => ({
                fn: x.toString(),
                stack: new Error().stack ?? ""
              }))
            });
          }
          plugin.model(this.definitions.type);
          plugin.error(this.definitions.error);
          plugin.macros = [...this.macros, ...plugin.macros];
          plugin.onRequest((context) => {
            Object.assign(context, this.decorators);
            Object.assign(context.store, this.store);
          });
          plugin.event.trace = [...this.event.trace, ...plugin.event.trace];
          if (plugin.config.aot)
            plugin.compile();
          const instance = this.mount(plugin.fetch);
          this.routes = this.routes.concat(instance.routes);
          return this;
        } else {
          plugin.reporter = this.reporter;
          for (const trace of plugin.event.trace)
            this.trace(trace);
          if (name) {
            if (!(name in this.dependencies))
              this.dependencies[name] = [];
            const current = seed !== void 0 ? (0, utils_1.checksum)(name + JSON.stringify(seed)) : 0;
            if (!this.dependencies[name].some(({ checksum }) => current === checksum))
              this.macros.push(...plugin.macros);
          }
        }
        this.decorate(plugin.decorators);
        this.state(plugin.store);
        this.model(plugin.definitions.type);
        this.error(plugin.definitions.error);
        for (const { method, path, handler, hooks } of Object.values(plugin.routes)) {
          this.add(method, path, handler, (0, utils_1.mergeHook)(hooks, {
            error: plugin.event.error
          }));
        }
        if (!isScoped)
          if (name) {
            if (!(name in this.dependencies))
              this.dependencies[name] = [];
            const current = seed !== void 0 ? (0, utils_1.checksum)(name + JSON.stringify(seed)) : 0;
            if (this.dependencies[name].some(({ checksum }) => current === checksum))
              return this;
            this.dependencies[name].push(!this.config?.analytic ? {
              name: plugin.config.name,
              seed: plugin.config.seed,
              checksum: current,
              dependencies: plugin.dependencies
            } : {
              name: plugin.config.name,
              seed: plugin.config.seed,
              checksum: current,
              dependencies: plugin.dependencies,
              stack: plugin.stack,
              routes: plugin.routes,
              decorators: plugin.decorators,
              store: plugin.store,
              type: plugin.definitions.type,
              error: plugin.definitions.error,
              derive: plugin.event.transform.filter((x) => x?.$elysia === "derive").map((x) => ({
                fn: x.toString(),
                stack: new Error().stack ?? ""
              })),
              resolve: plugin.event.transform.filter((x) => x?.$elysia === "resolve").map((x) => ({
                fn: x.toString(),
                stack: new Error().stack ?? ""
              }))
            });
            this.event = (0, utils_1.mergeLifeCycle)(this.event, (0, utils_1.filterGlobalHook)(plugin.event), current);
          } else {
            this.event = (0, utils_1.mergeLifeCycle)(this.event, (0, utils_1.filterGlobalHook)(plugin.event));
          }
        return this;
      }
      macro(macro) {
        this.macros.push(macro);
        return this;
      }
      mount(path, handle) {
        if (path instanceof _Elysia || typeof path === "function" || path.length === 0 || path === "/") {
          const run = typeof path === "function" ? path : path instanceof _Elysia ? path.compile().fetch : handle instanceof _Elysia ? handle.compile().fetch : handle;
          const handler2 = async ({ request, path: path2 }) => run(new Request((0, utils_1.replaceUrlPath)(request.url, path2 || "/"), request));
          this.all("/", handler2, {
            type: "none"
          });
          this.all("/*", handler2, {
            type: "none"
          });
          return this;
        }
        const length = path.length;
        if (handle instanceof _Elysia)
          handle = handle.compile().fetch;
        const handler = async ({ request, path: path2 }) => handle(new Request((0, utils_1.replaceUrlPath)(request.url, path2.slice(length) || "/"), request));
        this.all(path, handler, {
          type: "none"
        });
        this.all(path + (path.endsWith("/") ? "*" : "/*"), handler, {
          type: "none"
        });
        return this;
      }
      /**
       * ### get
       * Register handler for path with method [GET]
       *
       * ---
       * @example
       * ```typescript
       * import { Elysia, t } from 'elysia'
       *
       * new Elysia()
       *     .get('/', () => 'hi')
       *     .get('/with-hook', () => 'hi', {
       *         schema: {
       *             response: t.String()
       *         }
       *     })
       * ```
       */
      get(path, handler, hook) {
        this.add("GET", path, handler, hook);
        return this;
      }
      /**
       * ### post
       * Register handler for path with method [POST]
       *
       * ---
       * @example
       * ```typescript
       * import { Elysia, t } from 'elysia'
       *
       * new Elysia()
       *     .post('/', () => 'hi')
       *     .post('/with-hook', () => 'hi', {
       *         schema: {
       *             response: t.String()
       *         }
       *     })
       * ```
       */
      post(path, handler, hook) {
        this.add("POST", path, handler, hook);
        return this;
      }
      /**
       * ### put
       * Register handler for path with method [PUT]
       *
       * ---
       * @example
       * ```typescript
       * import { Elysia, t } from 'elysia'
       *
       * new Elysia()
       *     .put('/', () => 'hi')
       *     .put('/with-hook', () => 'hi', {
       *         schema: {
       *             response: t.String()
       *         }
       *     })
       * ```
       */
      put(path, handler, hook) {
        this.add("PUT", path, handler, hook);
        return this;
      }
      /**
       * ### patch
       * Register handler for path with method [PATCH]
       *
       * ---
       * @example
       * ```typescript
       * import { Elysia, t } from 'elysia'
       *
       * new Elysia()
       *     .patch('/', () => 'hi')
       *     .patch('/with-hook', () => 'hi', {
       *         schema: {
       *             response: t.String()
       *         }
       *     })
       * ```
       */
      patch(path, handler, hook) {
        this.add("PATCH", path, handler, hook);
        return this;
      }
      /**
       * ### delete
       * Register handler for path with method [DELETE]
       *
       * ---
       * @example
       * ```typescript
       * import { Elysia, t } from 'elysia'
       *
       * new Elysia()
       *     .delete('/', () => 'hi')
       *     .delete('/with-hook', () => 'hi', {
       *         schema: {
       *             response: t.String()
       *         }
       *     })
       * ```
       */
      delete(path, handler, hook) {
        this.add("DELETE", path, handler, hook);
        return this;
      }
      /**
       * ### options
       * Register handler for path with method [OPTIONS]
       *
       * ---
       * @example
       * ```typescript
       * import { Elysia, t } from 'elysia'
       *
       * new Elysia()
       *     .options('/', () => 'hi')
       *     .options('/with-hook', () => 'hi', {
       *         schema: {
       *             response: t.String()
       *         }
       *     })
       * ```
       */
      options(path, handler, hook) {
        this.add("OPTIONS", path, handler, hook);
        return this;
      }
      /**
       * ### all
       * Register handler for path with any method
       *
       * ---
       * @example
       * ```typescript
       * import { Elysia, t } from 'elysia'
       *
       * new Elysia()
       *     .all('/', () => 'hi')
       * ```
       */
      all(path, handler, hook) {
        this.add("ALL", path, handler, hook);
        return this;
      }
      /**
       * ### head
       * Register handler for path with method [HEAD]
       *
       * ---
       * @example
       * ```typescript
       * import { Elysia, t } from 'elysia'
       *
       * new Elysia()
       *     .head('/', () => 'hi')
       *     .head('/with-hook', () => 'hi', {
       *         schema: {
       *             response: t.String()
       *         }
       *     })
       * ```
       */
      head(path, handler, hook) {
        this.add("HEAD", path, handler, hook);
        return this;
      }
      /**
       * ### connect
       * Register handler for path with method [CONNECT]
       *
       * ---
       * @example
       * ```typescript
       * import { Elysia, t } from 'elysia'
       *
       * new Elysia()
       *     .connect('/', () => 'hi')
       *     .connect('/with-hook', () => 'hi', {
       *         schema: {
       *             response: t.String()
       *         }
       *     })
       * ```
       */
      connect(path, handler, hook) {
        this.add("CONNECT", path, handler, hook);
        return this;
      }
      /**
       * ### ws
       * Register handler for path with method [ws]
       *
       * ---
       * @example
       * ```typescript
       * import { Elysia, t } from 'elysia'
       *
       * new Elysia()
       *     .ws('/', {
       *         message(ws, message) {
       *             ws.send(message)
       *         }
       *     })
       * ```
       */
      ws(path, options) {
        const transform = options.transformMessage ? Array.isArray(options.transformMessage) ? options.transformMessage : [options.transformMessage] : void 0;
        let server = null;
        const validateMessage = (0, utils_1.getSchemaValidator)(options?.body, {
          models: this.definitions.type
        });
        const validateResponse = (0, utils_1.getSchemaValidator)(options?.response, {
          models: this.definitions.type
        });
        const parseMessage = (message) => {
          if (typeof message === "string") {
            const start = message?.charCodeAt(0);
            if (start === 47 || start === 123)
              try {
                message = JSON.parse(message);
              } catch {
              }
            else if ((0, utils_1.isNumericString)(message))
              message = +message;
          }
          if (transform?.length)
            for (let i = 0; i < transform.length; i++) {
              const temp = transform[i](message);
              if (temp !== void 0)
                message = temp;
            }
          return message;
        };
        this.route(
          "$INTERNALWS",
          path,
          // @ts-ignore
          (context) => {
            const { set, path: path2, qi, headers, query, params } = context;
            if (server === null)
              server = this.getServer();
            if (server?.upgrade(context.request, {
              headers: typeof options.upgrade === "function" ? options.upgrade(context) : options.upgrade,
              data: {
                validator: validateResponse,
                open(ws) {
                  options.open?.(new ws_1.ElysiaWS(ws, context));
                },
                message: (ws, msg) => {
                  const message = parseMessage(msg);
                  if (validateMessage?.Check(message) === false)
                    return void ws.send(new error_1.ValidationError("message", validateMessage, message).message);
                  options.message?.(new ws_1.ElysiaWS(ws, context), message);
                },
                drain(ws) {
                  options.drain?.(new ws_1.ElysiaWS(ws, context));
                },
                close(ws, code, reason) {
                  options.close?.(new ws_1.ElysiaWS(ws, context), code, reason);
                }
              }
            }))
              return;
            set.status = 400;
            return "Expected a websocket connection";
          },
          {
            beforeHandle: options.beforeHandle,
            transform: options.transform,
            headers: options.headers,
            params: options.params,
            query: options.query
          }
        );
        return this;
      }
      /**
       * ### route
       * Register handler for path with custom method
       *
       * ---
       * @example
       * ```typescript
       * import { Elysia, t } from 'elysia'
       *
       * new Elysia()
       *     .route('CUSTOM', '/', () => 'hi')
       *     .route('CUSTOM', '/with-hook', () => 'hi', {
       *         schema: {
       *             response: t.String()
       *         }
       *     })
       * ```
       */
      route(method, path, handler, { config, ...hook } = {
        config: {
          allowMeta: false
        }
      }) {
        this.add(method, path, handler, hook, config);
        return this;
      }
      /**
       * ### state
       * Assign global mutatable state accessible for all handler
       *
       * ---
       * @example
       * ```typescript
       * new Elysia()
       *     .state('counter', 0)
       *     .get('/', (({ counter }) => ++counter)
       * ```
       */
      state(name, value) {
        switch (typeof name) {
          case "object":
            this.store = (0, utils_1.mergeDeep)(this.store, name);
            return this;
          case "function":
            this.store = name(this.store);
            return this;
        }
        if (!(name in this.store)) {
          ;
          this.store[name] = value;
        }
        return this;
      }
      /**
       * ### decorate
       * Define custom method to `Context` accessible for all handler
       *
       * ---
       * @example
       * ```typescript
       * new Elysia()
       *     .decorate('getDate', () => Date.now())
       *     .get('/', (({ getDate }) => getDate())
       * ```
       */
      decorate(name, value) {
        switch (typeof name) {
          case "object":
            this.decorators = (0, utils_1.mergeDeep)(this.decorators, name);
            return this;
          case "function":
            this.decorators = name(this.decorators);
            return this;
        }
        if (!(name in this.decorators))
          this.decorators[name] = value;
        return this;
      }
      /**
       * Derive new property for each request with access to `Context`.
       *
       * If error is thrown, the scope will skip to handling error instead.
       *
       * ---
       * @example
       * new Elysia()
       *     .state('counter', 1)
       *     .derive(({ store }) => ({
       *         increase() {
       *             store.counter++
       *         }
       *     }))
       */
      derive(transform) {
        transform.$elysia = "derive";
        return this.onTransform(transform);
      }
      model(name, model) {
        switch (typeof name) {
          case "object":
            Object.entries(name).forEach(([key, value]) => {
              if (!(key in this.definitions.type))
                this.definitions.type[key] = value;
            });
            return this;
          case "function":
            this.definitions.type = name(this.definitions.type);
            return this;
        }
        ;
        this.definitions.type[name] = model;
        return this;
      }
      mapDerive(mapper) {
        mapper.$elysia = "derive";
        return this.onTransform(mapper);
      }
      affix(base, type, word) {
        if (word === "")
          return this;
        const delimieter = ["_", "-", " "];
        const capitalize = (word2) => word2[0].toUpperCase() + word2.slice(1);
        const joinKey = base === "prefix" ? (prefix, word2) => delimieter.includes(prefix.at(-1) ?? "") ? prefix + word2 : prefix + capitalize(word2) : delimieter.includes(word.at(-1) ?? "") ? (suffix, word2) => word2 + suffix : (suffix, word2) => word2 + capitalize(suffix);
        const remap = (type2) => {
          const store = {};
          switch (type2) {
            case "decorator":
              for (const key in this.decorators)
                store[joinKey(word, key)] = this.decorators[key];
              this.decorators = store;
              break;
            case "state":
              for (const key in this.store)
                store[joinKey(word, key)] = this.store[key];
              this.store = store;
              break;
            case "model":
              for (const key in this.definitions.type)
                store[joinKey(word, key)] = this.definitions.type[key];
              this.definitions.type = store;
              break;
            case "error":
              for (const key in this.definitions.error)
                store[joinKey(word, key)] = this.definitions.error[key];
              this.definitions.error = store;
              break;
          }
        };
        const types = Array.isArray(type) ? type : [type];
        for (const type2 of types.some((x) => x === "all") ? ["decorator", "state", "model", "error"] : types)
          remap(type2);
        return this;
      }
      prefix(type, word) {
        return this.affix("prefix", type, word);
      }
      suffix(type, word) {
        return this.affix("suffix", type, word);
      }
      compile() {
        this.fetch = this.config.aot ? (0, compose_1.composeGeneralHandler)(this) : (0, dynamic_handle_1.createDynamicHandler)(this);
        if (typeof this.server?.reload === "function")
          this.server.reload({
            ...this.server,
            fetch: this.fetch
          });
        return this;
      }
      /**
       * Wait until all lazy loaded modules all load is fully
       */
      get modules() {
        return Promise.all(this.lazyLoadModules);
      }
    };
    exports.default = Elysia2;
    exports.Elysia = Elysia2;
    var handler_2 = require_handler();
    Object.defineProperty(exports, "mapResponse", { enumerable: true, get: function() {
      return handler_2.mapResponse;
    } });
    Object.defineProperty(exports, "mapCompactResponse", { enumerable: true, get: function() {
      return handler_2.mapCompactResponse;
    } });
    Object.defineProperty(exports, "mapEarlyResponse", { enumerable: true, get: function() {
      return handler_2.mapEarlyResponse;
    } });
    var type_system_2 = require_type_system();
    Object.defineProperty(exports, "t", { enumerable: true, get: function() {
      return type_system_2.t;
    } });
    var cookie_1 = require_cookie2();
    Object.defineProperty(exports, "Cookie", { enumerable: true, get: function() {
      return cookie_1.Cookie;
    } });
    var utils_2 = require_utils();
    Object.defineProperty(exports, "getSchemaValidator", { enumerable: true, get: function() {
      return utils_2.getSchemaValidator;
    } });
    Object.defineProperty(exports, "mergeDeep", { enumerable: true, get: function() {
      return utils_2.mergeDeep;
    } });
    Object.defineProperty(exports, "mergeHook", { enumerable: true, get: function() {
      return utils_2.mergeHook;
    } });
    Object.defineProperty(exports, "mergeObjectArray", { enumerable: true, get: function() {
      return utils_2.mergeObjectArray;
    } });
    Object.defineProperty(exports, "getResponseSchemaValidator", { enumerable: true, get: function() {
      return utils_2.getResponseSchemaValidator;
    } });
    var error_2 = require_error3();
    Object.defineProperty(exports, "error", { enumerable: true, get: function() {
      return error_2.error;
    } });
    Object.defineProperty(exports, "ParseError", { enumerable: true, get: function() {
      return error_2.ParseError;
    } });
    Object.defineProperty(exports, "NotFoundError", { enumerable: true, get: function() {
      return error_2.NotFoundError;
    } });
    Object.defineProperty(exports, "ValidationError", { enumerable: true, get: function() {
      return error_2.ValidationError;
    } });
    Object.defineProperty(exports, "InternalServerError", { enumerable: true, get: function() {
      return error_2.InternalServerError;
    } });
    Object.defineProperty(exports, "InvalidCookieSignature", { enumerable: true, get: function() {
      return error_2.InvalidCookieSignature;
    } });
  }
});

// src/app/index.server.ts
var import_elysia = __toESM(require_cjs2(), 1);

// ../../ctx-core/all/be_/index.js
function be_(val__new, config) {
  let be = (ctx) => {
    let be_map = ctx.s[be.ns];
    config = be_map.get(be.id);
    if (config)
      return config[0];
    config = [val__new(ctx, be), ctx, be];
    be_map.set(be.id, config);
    return config[0];
  };
  be.id = config?.id ?? be;
  be.ns = config?.ns ?? "";
  be.is_be = true;
  return be;
}

// ../../ctx-core/all/ctx/index.js
function ns_ctx__new(...ns_a) {
  let ctx = { is_ctx: true, s: {} };
  for (let ns of ns_a) {
    for (let _ns in ns.s) {
      ctx.s[_ns] ??= ns.s[_ns];
    }
    if (!ns.s)
      ctx.s[ns] ??= /* @__PURE__ */ new Map();
  }
  return ctx;
}

// ../../ctx-core/all/rmemo/index.js
var cur_memo;
var queue = /* @__PURE__ */ new Set();
function memo_(memo_def, ...add_def_a) {
  let memo = () => {
    if (!("val" in memo)) {
      memo.f();
    }
    if (cur_memo) {
      if (!memo.t.includes(
        cur_memo.s ||= new WeakRef(cur_memo.f)
      )) {
        memo.t.push(cur_memo.s);
      }
      if (cur_memo.f.l < memo.f.l + 1)
        cur_memo.f.l = memo.f.l + 1;
      cur_memo.f.s.push(memo);
      if (!cur_memo.f.t.includes(memo))
        cur_memo.f.t.push(memo);
    }
    return memo.val;
  };
  Object.defineProperty(memo, "_", {
    get: memo,
    set: (val) => {
      if (memo.val !== val) {
        memo.t = memo.t.filter((r) => {
          r = r.deref();
          if (r && r.s.includes(memo)) {
            queue.add(r);
          }
          return r;
        });
      }
      memo.val = val;
      if (!memo.a) {
        memo.a = [];
        add_def_a.map(memo.add);
      }
      cur_refresh_loop:
        for (let cur_refresh of queue) {
          queue.delete(cur_refresh);
          for (let queue_refresh of queue) {
            if (cur_refresh.l > queue_refresh.l) {
              queue.add(cur_refresh);
              continue cur_refresh_loop;
            }
          }
          cur_refresh();
        }
    }
  });
  memo.add = (add_def) => {
    if (memo.a) {
      let v = add_def(memo);
      if (v instanceof Object) {
        memo.a.push(v);
        if (v.memo_)
          v();
      }
    } else {
      add_def_a.push(add_def);
    }
    return memo;
  };
  memo.memo_ = memo_;
  memo.f = () => {
    let prev_memo = cur_memo;
    cur_memo = memo;
    memo.f.s = [];
    try {
      memo._ = memo_def(memo);
    } catch (err) {
      console.error(err);
    }
    cur_memo = prev_memo;
  };
  memo.f.l = 0;
  memo.f.s = [];
  memo.f.t = [];
  memo.t = [];
  return memo;
}
function lock_memosig_(memo_def, ...add_def_a) {
  let lock_memosig = new Proxy(
    /** @type {sig_T} */
    memo_(
      (memo) => memo.lock ? memo() : memo_def(memo),
      ...add_def_a
    ),
    {
      get(memo, prop) {
        if (prop === "add") {
          return (...arg_a) => {
            memo[prop](...arg_a);
            return lock_memosig;
          };
        }
        return memo[prop];
      },
      set(memo, prop, val) {
        if (prop === "_") {
          memo.lock = 1;
          memo._ = val;
        }
        return 1;
      }
    }
  );
  return lock_memosig;
}
function sig_(init_val, ...add_def_a) {
  return memo_(
    (sig) => "val" in sig ? sig.val : init_val,
    ...add_def_a
  );
}

// ../../ctx-core/all/be_lock_memosig_triple/index.js
function be_lock_memosig_triple_(be_OR_val__new, config) {
  let add_def_a = [];
  let be = be_OR_val__new.is_be ? be_OR_val__new : be_(
    (ctx) => add_def_a.reduce(
      (memosig, add_def) => memosig.add((...arg_a) => add_def(ctx, ...arg_a)),
      lock_memosig_((memo) => be_OR_val__new(ctx, memo))
    ),
    config
  );
  let be_lock_memosig_triple = [
    be,
    (ctx) => be(ctx)(),
    (ctx, val) => {
      be(ctx)._ = val;
    }
  ];
  be_lock_memosig_triple.add = (add_def) => {
    add_def_a.push(add_def);
    return be_lock_memosig_triple;
  };
  return be_lock_memosig_triple;
}

// ../../ctx-core/all/be_memo_pair/index.js
function be_memo_pair_(be_OR_val__new, config) {
  let add_def_a = [];
  let be = be_OR_val__new.is_be ? be_OR_val__new : be_(
    (ctx) => add_def_a.reduce(
      (memo, add_def) => memo.add((...arg_a) => add_def(ctx, ...arg_a)),
      memo_((memo) => be_OR_val__new(ctx, memo))
    ),
    config
  );
  let be_memo_pair = [
    be,
    (ctx) => be(ctx)._,
    (ctx, val) => {
      be(ctx)._ = val;
    }
  ];
  be_memo_pair.add = (add_def) => {
    add_def_a.push(add_def);
    return be_memo_pair;
  };
  return be_memo_pair;
}

// ../../ctx-core/all/be_sig_triple/index.js
function be_sig_triple_(be_OR_val__new, config) {
  let add_def_a = [];
  let be = be_OR_val__new.is_be ? be_OR_val__new : be_(
    (ctx) => add_def_a.reduce(
      (sig, add_def) => sig.add((...arg_a) => add_def(ctx, ...arg_a)),
      sig_(be_OR_val__new(ctx))
    ),
    config
  );
  let be_sig_triple = [
    be,
    (ctx) => be(ctx)(),
    (ctx, val) => {
      be(ctx)._ = val;
    }
  ];
  be_sig_triple.add = (add_def) => {
    add_def_a.push(add_def);
    return be_sig_triple;
  };
  return be_sig_triple;
}

// ../../ctx-core/all/cancel/index.js
var Cancel = class extends Error {
  constructor(config) {
    super(config?.message ?? "Cancel");
    this.returns = config?.returns;
  }
};

// ../../ctx-core/all/nullish__none/index.js
function nullish__none_(a, _, onnullish) {
  for (const v of a) {
    if (v === void 0) {
      if (onnullish)
        onnullish(void 0);
      return void 0;
    }
  }
  for (const v of a) {
    if (v === null) {
      if (onnullish)
        onnullish(null);
      return null;
    }
  }
  return _(...a);
}

// ../../ctx-core/all/timeout/index.js
var Timeout = class extends Error {
  constructor(ms_OR_message) {
    super(
      typeof ms_OR_message === "number" ? "Timeout " + ms_OR_message + "ms" : ms_OR_message
    );
  }
};

// ../../ctx-core/all/timeout_promise/index.js
function timeout_promise(promise, ms, error) {
  error ??= new Timeout(ms);
  let id;
  let timeout = new Promise((_resolve, reject) => {
    id = setTimeout(() => reject(error), ms);
  });
  let cancel_promise__resolve;
  let cancel_promise = new Promise((resolve2) => cancel_promise__resolve = resolve2);
  let ret_promise = Promise.race([
    typeof promise === "function" ? promise() : promise,
    timeout,
    cancel_promise
  ]).then((result) => {
    clearTimeout(id);
    return result;
  });
  ret_promise.cancel = cancel_promise__resolve;
  return ret_promise;
}

// ../../ctx-core/all/sleep/index.js
function sleep(ms) {
  return new Promise((resolve2) => setTimeout(resolve2, ms));
}

// ../../ctx-core/all/tup/index.js
function tup(...data) {
  return data;
}

// ../../ctx-core/all/waitfor/index.js
function waitfor(fn, timeout, period) {
  let rv;
  let cancel_arg_a;
  let promise = new Promise((resolve2, reject) => timeout_promise(async () => {
    for (; !cancel_arg_a; ) {
      let _rv = await fn();
      rv = cancel_arg_a?.length ? cancel_arg_a[0] : _rv;
      if (rv || cancel_arg_a)
        return rv;
      if (typeof period === "function") {
        await period(promise);
      } else {
        await sleep(period ?? 0);
      }
    }
    return rv;
  }, timeout).then(resolve2).catch((err) => {
    cancel_arg_a = [];
    reject(err);
  }));
  promise.cancel = (...arg_a) => {
    cancel_arg_a = arg_a;
    return promise;
  };
  return promise;
}

// ../../rebuildjs/app/index.js
import { join, relative, resolve } from "path";
var [
  port$_,
  port_,
  port__set
] = be_sig_triple_(
  () => process.env.PORT ? parseInt(process.env.PORT) : 3e3,
  { ns: "app", id: "port" }
);
var [
  cwd$_,
  cwd_,
  cwd__set
] = be_sig_triple_(
  () => resolve("."),
  { ns: "app", id: "cwd" }
);
var [
  is_prod$_,
  is_prod_,
  is_prod__set
] = be_lock_memosig_triple_(
  () => process.env.NODE_ENV === "production",
  { ns: "app", id: "is_prod" }
);
var [
  public_path$_,
  public_path_,
  public_path__set
] = be_lock_memosig_triple_(
  (ctx) => join(cwd_(ctx), "public"),
  { ns: "app", id: "public_path" }
);
var [
  dist_path$_,
  dist_path_,
  dist_path__set
] = be_lock_memosig_triple_(
  (ctx) => join(cwd_(ctx), "dist"),
  { ns: "app", id: "dist_path" }
);
var [
  dist__relative_path$_,
  dist__relative_path_
] = be_memo_pair_(
  (ctx) => relative(cwd_(ctx), dist_path_(ctx)),
  { ns: "app", id: "dist__relative_path" }
);
var [
  src_path$_,
  src_path_,
  src_path__set
] = be_lock_memosig_triple_(
  (ctx) => join(cwd_(ctx), "src"),
  { ns: "app", id: "src_path" }
);
var [
  src__relative_path$_,
  src__relative_path_
] = be_memo_pair_(
  (ctx) => relative(cwd_(ctx), src_path_(ctx)),
  { ns: "app", id: "src__relative_path" }
);
var [
  app_path$_,
  app_path_,
  app_path__set
] = be_lock_memosig_triple_(
  (ctx) => join(src_path_(ctx), "app"),
  { ns: "app", id: "app_path" }
);
var [
  app__relative_path$_,
  app__relative_path_
] = be_memo_pair_(
  (ctx) => relative(cwd_(ctx), app_path_(ctx)),
  { ns: "app", id: "app__relative_path" }
);
var [
  browser__relative_path$_,
  browser__relative_path_
] = be_memo_pair_(
  (ctx) => join(dist__relative_path_(ctx), is_prod_(ctx) ? "browser" : "browser--dev"),
  { ns: "app", is: "browser_relative_path" }
);
var [
  browser_path$_,
  browser_path_
] = be_memo_pair_(
  (ctx) => join(cwd_(ctx), browser__relative_path_(ctx)),
  { ns: "app", id: "browser_path" }
);
var [
  server__relative_path$_,
  server__relative_path_
] = be_memo_pair_(
  (ctx) => join(dist__relative_path_(ctx), is_prod_(ctx) ? "server" : "server--dev"),
  { ns: "app", id: "server__relative_path" }
);
var [
  server_path$_,
  server_path_
] = be_memo_pair_(
  (ctx) => join(cwd_(ctx), server__relative_path_(ctx)),
  { ns: "app", id: "server_path" }
);

// ../../ctx-core/all/compact/index.js
function compact(a) {
  const out_a = [];
  for (const val of a) {
    if (val) {
      out_a.push(val);
    }
  }
  return out_a;
}

// ../../ctx-core/all/process_release_name/index.js
var process_release_name = globalThis.process?.release?.name;

// ../../ctx-core/all/file_exists/index.js
var node_fs_promises = "node:fs/promises";
async function file_exists_(path) {
  return (process_release_name ?? false) && import(node_fs_promises).then(({ access, constants }) => access(path, constants.F_OK).then(() => true).catch(() => false));
}
function file_exists__waitfor(path, timeout, period) {
  return waitfor(
    () => file_exists_(path),
    timeout ?? 5e3,
    period ?? 0
  );
}

// ../../rebuildjs/browser/index.js
import { mkdir as mkdir2, readFile as readFile2, writeFile as writeFile2 } from "fs/promises";
import { join as join3, relative as relative3 } from "path";

// ../../rebuildjs/ctx/index.js
var app_ctx = globalThis.rebuildjs__app_ctx ??= app_ctx__new();
function app_ctx__new() {
  return ns_ctx__new("app");
}
function middleware_ctx__new() {
  return ns_ctx__new("middleware", app_ctx);
}
function route_ctx__new(middleware_ctx) {
  return ns_ctx__new("", "route", middleware_ctx);
}

// ../../rebuildjs/server/index.js
import { mkdir, readFile, writeFile } from "fs/promises";
import { join as join2, relative as relative2 } from "path";
var [
  server__metafile_path$_,
  server__metafile_path_
] = be_memo_pair_(
  (ctx) => join2(server_path_(ctx), "metafile.json"),
  { ns: "app", id: "server__metafile_path" }
);
var [
  server__metafile$_,
  server__metafile_,
  server__metafile__set
] = (
  /** @type {be_lock_memosig_triple_T<rebuildjs_metafile_T>} */
  be_lock_memosig_triple_(
    () => void 0,
    { ns: "app", id: "server__metafile" }
  ).add((ctx, server__metafile$) => memo_((server__metafile__waitfor_promise$) => {
    server__metafile__waitfor_promise$.val?.cancel?.();
    if (server__metafile$.lock)
      return;
    return nullish__none_(
      [server__metafile_path_(ctx)],
      (server__metafile_path) => {
        const server__metafile__waitfor_promise = file_exists__waitfor(
          server__metafile_path,
          1e3,
          () => cmd(sleep(0))
        );
        cmd(server__metafile__waitfor_promise).then(async (success) => {
          if (success) {
            server__metafile$._ = await cmd(
              waitfor(async () => {
                const buf = await cmd(readFile(server__metafile_path));
                const json = buf + "";
                try {
                  return JSON.parse(json);
                } catch {
                  return void 0;
                }
              }, 1e3)
            );
          }
        }).catch((err) => {
          if (err instanceof Cancel)
            return;
          throw err;
        });
        return server__metafile__waitfor_promise;
        async function cmd(promise) {
          if (cancel_())
            throw new Cancel();
          const rv = await promise;
          if (cancel_()) {
            promise.cancel?.();
            throw new Cancel();
          }
          return rv;
        }
        function cancel_() {
          return server__metafile$.lock || server__metafile_path !== server__metafile_path_(ctx);
        }
      }
    );
  }))
);
var [
  server__output__relative_path_M_middleware_ctx$_,
  server__output__relative_path_M_middleware_ctx_
] = be_memo_pair_(
  (ctx) => nullish__none_(
    [server__metafile_(ctx)],
    (server__metafile) => new Map(
      Object.keys(server__metafile.outputs).filter((server__output__relative_path) => server__metafile.outputs[server__output__relative_path].entryPoint).map((server__output__relative_path) => {
        const middleware_ctx = middleware_ctx__new();
        server__output__relative_path__set(middleware_ctx, server__output__relative_path);
        return [server__output__relative_path, middleware_ctx];
      })
    )
  ),
  {
    id: "server__output__relative_path_M_middleware_ctx",
    ns: "app"
  }
);
var [
  server__output__relative_path$_,
  server__output__relative_path_,
  server__output__relative_path__set
] = be_sig_triple_(
  () => void 0,
  { ns: "middleware", id: "server__output__relative_path" }
);
var [
  server__output$_,
  server__output_
] = be_memo_pair_(
  (ctx) => nullish__none_(
    tup(server__metafile_(ctx), server__output__relative_path_(ctx)),
    (server__metafile, server__output__relative_path) => server__metafile.outputs[server__output__relative_path]
  ),
  { ns: "middleware", id: "server__output" }
);
var [
  server__cssBundle__relative_path$_,
  server__cssBundle__relative_path_
] = be_memo_pair_(
  (ctx) => server__output_(ctx)?.cssBundle,
  { ns: "middleware", id: "server__cssBundle__relative_path" }
);
var [
  server__cssBundle$_,
  server__cssBundle_
] = be_memo_pair_(
  (ctx) => nullish__none_(
    [server__output_(ctx)?.cssBundle],
    (cssBundle) => join2(cwd_(ctx), cssBundle)
  ),
  { ns: "middleware", id: "server__cssBundle" }
);
var [
  server__css$_,
  server__css_
] = be_memo_pair_(
  (ctx) => nullish__none_(
    [server__relative_path_(ctx), server__cssBundle__relative_path_(ctx)],
    (server__relative_path, server__cssBundle__relative_path) => join2("/", relative2(server__relative_path, server__cssBundle__relative_path))
  ),
  { ns: "middleware", id: "server__css" }
);

// ../../rebuildjs/browser/index.js
var [
  browser__metafile_path$_,
  browser__metafile_path_
] = be_memo_pair_(
  (ctx) => join3(browser_path_(ctx), "metafile.json"),
  { ns: "app", id: "browser__metafile_path" }
);
var [
  browser__metafile$_,
  browser__metafile_,
  browser__metafile__set
] = (
  /** @type {be_lock_memosig_triple_T<rebuildjs_metafile_T>} */
  be_lock_memosig_triple_(
    () => void 0,
    { ns: "app", id: "browser__metafile" }
  ).add(
    (ctx, browser__metafile$) => memo_((browser__metafile__waitfor_promise$) => {
      browser__metafile__waitfor_promise$.val?.cancel?.();
      if (browser__metafile$.lock)
        return;
      return nullish__none_(
        [browser__metafile_path_(ctx)],
        (browser__metafile_path) => {
          const browser__metafile__waitfor_promise = file_exists__waitfor(
            browser__metafile_path,
            1e3,
            () => cmd(sleep(0))
          );
          cmd(browser__metafile__waitfor_promise).then(async (success) => {
            if (success) {
              browser__metafile$._ = await cmd(
                waitfor(async () => {
                  const buf = await cmd(readFile2(browser__metafile_path));
                  const json = buf + "";
                  try {
                    return JSON.parse(json);
                  } catch {
                    return void 0;
                  }
                }, 1e3)
              );
            }
          }).catch((err) => {
            if (err instanceof Cancel)
              return;
            throw err;
          });
          return browser__metafile__waitfor_promise;
          async function cmd(promise) {
            if (cancel_())
              throw new Cancel();
            const rv = await promise;
            if (cancel_()) {
              promise.cancel?.();
              throw new Cancel();
            }
            return rv;
          }
          function cancel_() {
            return browser__metafile$.lock || browser__metafile_path !== browser__metafile_path_(ctx);
          }
        }
      );
    })
  )
);
var [
  browser__output__relative_path$_,
  browser__output__relative_path_
] = be_memo_pair_((ctx) => nullish__none_(
  [browser__metafile_(ctx), server__output_(ctx)],
  (browser__metafile, server__output) => {
    const { outputs } = browser__metafile;
    for (const browser__output__relative_path in outputs) {
      const browser__output = outputs[browser__output__relative_path];
      if (browser__output.entryPoint && browser__output.entryPoint === server__output.entryPoint.replace(/\.server\.(ts|js|tsx|jsx)/, ".browser.$1")) {
        return browser__output__relative_path;
      }
    }
  }
), { ns: "middleware", id: "browser__output__relative_path" });
var [
  browser__output$_,
  browser__output_
] = be_memo_pair_(
  (ctx) => nullish__none_(
    tup(browser__metafile_(ctx), browser__output__relative_path_(ctx)),
    (browser__metafile, browser__output__relative_path) => browser__metafile.outputs[browser__output__relative_path]
  ),
  { ns: "middleware", id: "browser__output" }
);
var [
  browser__cssBundle__relative_path$_,
  browser__cssBundle__relative_path_
] = be_memo_pair_(
  (ctx) => browser__output_(ctx)?.cssBundle,
  { ns: "middleware", id: "browser__cssBundle__relative_path" }
);
var [
  browser__cssBundle$_,
  browser__cssBundle_
] = be_memo_pair_(
  (ctx) => nullish__none_(
    [browser__output_(ctx)?.cssBundle],
    (cssBundle) => join3(cwd_(ctx), cssBundle)
  ),
  { ns: "middleware", id: "browser__cssBundle" }
);
var [
  browser__css$_,
  browser__css_
] = be_memo_pair_(
  (ctx) => nullish__none_(
    [browser__relative_path_(ctx), browser__cssBundle__relative_path_(ctx)],
    (browser__relative_path, browser__cssBundle__relative_path) => join3("/", relative3(browser__relative_path, browser__cssBundle__relative_path))
  ),
  { ns: "middleware", id: "browser__css" }
);
var [
  browser__script$_,
  browser__script_
] = be_memo_pair_(
  (ctx) => nullish__none_(
    [browser__output__relative_path_(ctx), browser__relative_path_(ctx)],
    (browser__output__relative_path, browser__relative_path) => join3("/", relative3(browser__relative_path, browser__output__relative_path))
  ),
  { ns: "middleware", id: "browser__script" }
);

// ../../rebuildjs/asset/index.js
var [
  assets$_,
  assets_,
  assets__set
] = be_lock_memosig_triple_(
  (ctx) => assets__new({
    css_a: compact([server__css_(ctx), browser__css_(ctx)]),
    script_a: compact([browser__script_(ctx)])
  }),
  { ns: "route", id: "assets" }
);
function assets__new(..._assets_a) {
  const assets = { css_a: [], script_a: [] };
  for (const _assets of _assets_a) {
    for (const css of _assets?.css_a || []) {
      if (!~assets.css_a.indexOf(css))
        assets.css_a.push(css);
    }
    for (const script of _assets?.script_a || []) {
      if (!~assets.script_a.indexOf(script))
        assets.script_a.push(script);
    }
  }
  return assets;
}

// src/app/index.server.ts
var index_server_default = (middleware_ctx) => {
  return new import_elysia.Elysia().get("/", ({ request }) => {
    const route_ctx = route_ctx__new(middleware_ctx);
    throw Error("test error");
    return new Response(
      "<!DOCTYPE html><html><head>" + assets_(route_ctx).css_a.map(
        (css) => '<link rel="stylesheet" type="text/css" href="' + css + '"></link>'
      ).join("") + assets_(route_ctx).script_a.map(
        (script) => '<script type="module" src="' + script + '"></script>'
      ).join("") + "</head><body><div>" + request.url + "</div></body></html>",
      {
        headers: {
          "Content-Type": "text/html;charset=UTF-8"
        }
      }
    );
  });
};
export {
  index_server_default as default
};
/*! Bundled license information:

cookie/index.js:
  (*!
   * cookie
   * Copyright(c) 2012-2014 Roman Shtylman
   * Copyright(c) 2015 Douglas Christopher Wilson
   * MIT Licensed
   *)
*/
