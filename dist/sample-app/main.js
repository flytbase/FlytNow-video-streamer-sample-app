(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../../video-stream-sdk/dist/index.js":
/*!**************************************************************************!*\
  !*** /home/flytbase/Desktop/work/FlytNow/video-stream-sdk/dist/index.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



if (false) {} else {
  module.exports = __webpack_require__(/*! ./video-client-staging.cjs.development.js */ "../../../video-stream-sdk/dist/video-client-staging.cjs.development.js")
}


/***/ }),

/***/ "../../../video-stream-sdk/dist/video-client-staging.cjs.development.js":
/*!*********************************************************************************************************!*\
  !*** /home/flytbase/Desktop/work/FlytNow/video-stream-sdk/dist/video-client-staging.cjs.development.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var rxjs = __webpack_require__(/*! rxjs */ "../../../video-stream-sdk/node_modules/rxjs/_esm2015/index.js");
var axios = _interopDefault(__webpack_require__(/*! axios */ "../../../video-stream-sdk/node_modules/axios/index.js"));

function _regeneratorRuntime() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */

  _regeneratorRuntime = function () {
    return exports;
  };

  var exports = {},
      Op = Object.prototype,
      hasOwn = Op.hasOwnProperty,
      $Symbol = "function" == typeof Symbol ? Symbol : {},
      iteratorSymbol = $Symbol.iterator || "@@iterator",
      asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
      toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }

  try {
    define({}, "");
  } catch (err) {
    define = function (obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
        generator = Object.create(protoGenerator.prototype),
        context = new Context(tryLocsList || []);
    return generator._invoke = function (innerFn, self, context) {
      var state = "suspendedStart";
      return function (method, arg) {
        if ("executing" === state) throw new Error("Generator is already running");

        if ("completed" === state) {
          if ("throw" === method) throw arg;
          return doneResult();
        }

        for (context.method = method, context.arg = arg;;) {
          var delegate = context.delegate;

          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);

            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }

          if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
            if ("suspendedStart" === state) throw state = "completed", context.arg;
            context.dispatchException(context.arg);
          } else "return" === context.method && context.abrupt("return", context.arg);
          state = "executing";
          var record = tryCatch(innerFn, self, context);

          if ("normal" === record.type) {
            if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
            return {
              value: record.arg,
              done: context.done
            };
          }

          "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
        }
      };
    }(innerFn, self, context), generator;
  }

  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }

  exports.wrap = wrap;
  var ContinueSentinel = {};

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {}

  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
      NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if ("throw" !== record.type) {
        var result = record.arg,
            value = result.value;
        return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }

      reject(record.arg);
    }

    var previousPromise;

    this._invoke = function (method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    };
  }

  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (undefined === method) {
      if (context.delegate = null, "throw" === context.method) {
        if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel;
        context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }

  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;

          return next.value = undefined, next.done = !0, next;
        };

        return next.next = next;
      }
    }

    return {
      next: doneResult
    };
  }

  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }

  return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (object) {
    var keys = [];

    for (var key in object) keys.push(key);

    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }

      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function (skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
    },
    stop: function () {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function (exception) {
      if (this.done) throw exception;
      var context = this;

      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
            record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
              hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function (type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function (record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function (finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    catch: function (tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      }

      throw new Error("illegal catch attempt");
    },
    delegateYield: function (iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

var _STREAM_TYPE;

var STREAM_TYPE_ENUM;

(function (STREAM_TYPE_ENUM) {
  STREAM_TYPE_ENUM[STREAM_TYPE_ENUM["OPENTOK"] = 0] = "OPENTOK";
  STREAM_TYPE_ENUM[STREAM_TYPE_ENUM["MILLICAST"] = 1] = "MILLICAST";
})(STREAM_TYPE_ENUM || (STREAM_TYPE_ENUM = {}));

var STREAM_TYPE = (_STREAM_TYPE = {}, _STREAM_TYPE[STREAM_TYPE_ENUM.OPENTOK] = 'opentok', _STREAM_TYPE[STREAM_TYPE_ENUM.MILLICAST] = 'millicast', _STREAM_TYPE);

var _require = /*#__PURE__*/__webpack_require__(/*! @millicast/sdk */ "../../../video-stream-sdk/node_modules/@millicast/sdk/dist/millicast.umd.js"),
    Director = _require.Director,
    View = _require.View,
    Logger = _require.Logger;

var MillicastStreamer = /*#__PURE__*/function () {
  function MillicastStreamer(vehicle_id, source_id, element, tokenData) {
    this._subs = new rxjs.Subscription();
    this.millicastInstance = null;
    this.autoReconnect = true;
    this.statsSubscription = null;
    this.statsSubject = new rxjs.BehaviorSubject(null);
    this.vehicle_id = vehicle_id;
    this.source_id = source_id;
    this.htmlElement = element;
    this.videoElement = document.createElement('video');
    this.videoElement.style.width = '100%';
    this.videoElement.style.height = '100%';
    this.videoElement.style.position = 'relative';
    this.videoElement.style.overflow = 'hidden';
    this.htmlElement.innerHTML = '';
    this.htmlElement.appendChild(this.videoElement);
    this.videoElement.setAttribute('autoplay', 'autoplay');
    this.videoElement.setAttribute('playinline', ''); // this.videoElement.setAttribute('controls', '');

    this.videoElement.setAttribute('muted', '');
    this.tokenResponse = tokenData;
    Logger.setLevel(Logger.DEBUG);

    this._subscribeVideoStream();
  }

  var _proto = MillicastStreamer.prototype;

  _proto.streamType = function streamType() {
    return STREAM_TYPE[STREAM_TYPE_ENUM.MILLICAST];
  };

  _proto._subscribeVideoStream = /*#__PURE__*/function () {
    var _subscribeVideoStream2 = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var _this = this;

      var tokenGenerator;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              tokenGenerator = function tokenGenerator() {
                return Director.getSubscriber({
                  streamName: _this.tokenResponse.subscribeToken.data.streams[0].streamName,
                  subscriberToken: _this.tokenResponse.subscribeToken.data.token
                });
              };

              this.millicastInstance = new View(this.tokenResponse.subscribeToken.data.streams[0].streamName, tokenGenerator, this.videoElement, this.autoReconnect);
              _context.next = 4;
              return this.millicastInstance.connect({
                disableAudio: true
              });

            case 4:
              this.setStats();

              this._subs.add(this.trackStream().subscribe(function (response) {
                _this.addStream(response.stream);
              }));

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function _subscribeVideoStream() {
      return _subscribeVideoStream2.apply(this, arguments);
    }

    return _subscribeVideoStream;
  }();

  _proto.trackStream = function trackStream() {
    var _this2 = this;

    return new rxjs.Observable(function (observer) {
      _this2.millicastInstance.on('track', function (event) {
        observer.next({
          stream: event.streams[0]
        });
      });
    });
  };

  _proto.addStream = /*#__PURE__*/function () {
    var _addStream = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(stream) {
      var _this3 = this;

      var tmp;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              //Set same id
              this.videoElement.id = stream.id; // this.videoElement.srcObject = stream;
              // If we already had a a stream

              if (this.videoElement.srcObject) {
                tmp = this.videoElement.cloneNode(true);
                tmp.style.width = '100%';
                tmp.style.height = '100%';
                tmp.style.position = 'relative';
                tmp.style.overflow = 'hidden';
                tmp.setAttribute('autoplay', 'autoplay');
                tmp.setAttribute('playinline', ''); // tmp.setAttribute('controls', '');

                tmp.setAttribute('muted', ''); //Override the muted attribute with current muted state

                tmp.muted = this.videoElement.muted; //Set same volume

                tmp.volume = this.videoElement.volume; //Set new stream

                tmp.srcObject = stream; //Replicate playback state

                tmp.play(); //Replace the video when media has started playing

                tmp.addEventListener('loadedmetadata', function (event) {
                  console.log('millicast event', event);

                  _this3.htmlElement.replaceChild(tmp, _this3.videoElement); //Pause previous video to avoid duplicated audio until the old PC is closed


                  try {
                    _this3.videoElement.pause();
                  } catch (e) {}

                  _this3.videoElement = tmp;
                });
              } else {
                this.videoElement.srcObject = stream;
                this.videoElement.play();
              }

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function addStream(_x) {
      return _addStream.apply(this, arguments);
    }

    return addStream;
  }();

  _proto.connectSession = /*#__PURE__*/function () {
    var _connectSession = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(token) {
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              console.log('trying to connect session', token);
              throw new Error(' connectSession() is not implemented');

            case 2:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    function connectSession(_x2) {
      return _connectSession.apply(this, arguments);
    }

    return connectSession;
  }();

  _proto.getImageData = function getImageData() {
    throw new Error(' getImageData() is not implemented');
  };

  _proto.setStats = function setStats() {
    var _this$statsSubscripti,
        _this4 = this;

    (_this$statsSubscripti = this.statsSubscription) == null ? void 0 : _this$statsSubscripti.unsubscribe();
    this.statsSubscription = this.setTracker().subscribe(function (res) {
      _this4.statsSubject.next(res);
    });
  };

  _proto.setTracker = function setTracker() {
    var _this5 = this;

    return new rxjs.Observable(function (observer) {
      _this5.millicastInstance.webRTCPeer.on('stats', function (stats) {
        observer.next({
          stats: stats
        });
      });
    });
  };

  _proto.getStats = function getStats() {
    return this.statsSubject.asObservable();
  };

  _proto.disconnect = function disconnect() {
    var _this$statsSubscripti2;

    this.htmlElement.removeChild(this.videoElement); // delete this.millicastInstance;

    this._subs.unsubscribe();

    (_this$statsSubscripti2 = this.statsSubscription) == null ? void 0 : _this$statsSubscripti2.unsubscribe();
    return true;
  };

  _proto.reconnect = /*#__PURE__*/function () {
    var _reconnect = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return this.millicastInstance.reconnect();

            case 3:
              return _context4.abrupt("return", {
                status: true,
                code: 'suc-str-908',
                message: 'Stream subscribed.',
                data: null
              });

            case 6:
              _context4.prev = 6;
              _context4.t0 = _context4["catch"](0);
              throw _context4.t0;

            case 9:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this, [[0, 6]]);
    }));

    function reconnect() {
      return _reconnect.apply(this, arguments);
    }

    return reconnect;
  }();

  _proto.startArchiving = function startArchiving() {
    throw new Error(' startArchiving() is not implemented');
  };

  _proto.stopArchiving = function stopArchiving() {
    throw new Error(' stopArchiving() is not implemented');
  };

  _proto.captureImageAndArchive = function captureImageAndArchive() {
    throw new Error(' captureImageAndArchive() is not implemented');
  };

  return MillicastStreamer;
}();

var OT = /*#__PURE__*/__webpack_require__(/*! @opentok/client */ "../../../video-stream-sdk/node_modules/@opentok/client/dist/js/opentok.js");

var OpentokStreamer = /*#__PURE__*/function () {
  function OpentokStreamer(vehicle_id, source_id, element, tokenData) {
    var _this = this;

    this._subs = new rxjs.Subscription();
    this.statsSubscription = null;
    this.statsSubject = new rxjs.BehaviorSubject(null);
    this.vehicle_id = vehicle_id;
    this.source_id = source_id;
    this.htmlElement = element;
    this.videoElement = document.createElement('div');
    this.session_id = '';
    this.tokenResponse = tokenData;
    this.session = OT.initSession(this.tokenResponse.apiKey, this.tokenResponse.sessionId);
    this.streamSubscription = null;

    this._subscribeVideoStream();

    this._subs.add(this.getstreamCreatedSubscription(this.session).subscribe(function (res) {
      _this.streamSubscription = res.subscription;
    }));
  }

  var _proto = OpentokStreamer.prototype;

  _proto.streamType = function streamType() {
    return STREAM_TYPE[STREAM_TYPE_ENUM.OPENTOK];
  };

  _proto.getSession = function getSession() {
    return this.session;
  };

  _proto._subscribeVideoStream = /*#__PURE__*/function () {
    var _subscribeVideoStream2 = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var _this$session;

      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (this.session) {
                _context.next = 4;
                break;
              }

              _context.next = 3;
              return OT.initSession(this.tokenResponse.apiKey, this.tokenResponse.sessionId);

            case 3:
              this.session = _context.sent;

            case 4:
              (_this$session = this.session) == null ? void 0 : _this$session.disconnect();

              if (!this.tokenResponse) {
                _context.next = 11;
                break;
              }

              _context.next = 8;
              return this.connectSession(this.tokenResponse.token);

            case 8:
              return _context.abrupt("return");

            case 11:
              throw new Error('No Token to connect to session');

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function _subscribeVideoStream() {
      return _subscribeVideoStream2.apply(this, arguments);
    }

    return _subscribeVideoStream;
  }();

  _proto.getstreamCreatedSubscription = function getstreamCreatedSubscription(session) {
    var _this2 = this;

    return new rxjs.Observable(function (observer) {
      session.on('streamCreated', function (event) {
        _this2.htmlElement.childNodes.forEach(function (node) {
          _this2.htmlElement.removeChild(node);
        });

        _this2.videoElement = document.createElement('div');
        _this2.videoElement.style.width = 'auto';
        _this2.videoElement.style.height = 'auto';
        _this2.videoElement.style.position = 'relative';
        _this2.videoElement.style.overflow = 'hidden';

        _this2.htmlElement.appendChild(_this2.videoElement);

        var subscription = session.subscribe(event.stream, _this2.videoElement, {
          subscribeToAudio: false,
          showControls: false,
          fitMode: 'contain',
          width: '100%',
          height: '100%',
          testNetwork: true
        }, function (err) {
          if (err) {
            observer.error({
              err: err
            });
          } else {
            _this2.setStats();

            observer.next({
              session: session,
              subscription: subscription
            });
          }
        });
      });
    });
  };

  _proto.connectSession = /*#__PURE__*/function () {
    var _connectSession = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(token) {
      var _this$session2;

      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              (_this$session2 = this.session) == null ? void 0 : _this$session2.connect(token, function (err) {
                if (err) {
                  console.log(err);
                  throw new Error('Error connecting session');
                }

                return;
              });

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function connectSession(_x) {
      return _connectSession.apply(this, arguments);
    }

    return connectSession;
  }();

  _proto.getImageData = function getImageData() {
    var _this$streamSubscript;

    return (_this$streamSubscript = this.streamSubscription) == null ? void 0 : _this$streamSubscript.getImgData();
  };

  _proto.setStats = function setStats() {
    var _this$statsSubscripti,
        _this3 = this;

    (_this$statsSubscripti = this.statsSubscription) == null ? void 0 : _this$statsSubscripti.unsubscribe();
    this.statsSubscription = rxjs.interval(1000).subscribe(function () {
      var _this3$streamSubscrip;

      (_this3$streamSubscrip = _this3.streamSubscription) == null ? void 0 : _this3$streamSubscrip.getStats(function (err, stats) {
        if (!err && stats) {
          _this3.statsSubject.next(stats);
        }
      });
    });
  };

  _proto.getStats = function getStats() {
    return this.statsSubject.asObservable();
  };

  _proto.disconnect = function disconnect() {
    var _this$session3, _this$statsSubscripti2;

    (_this$session3 = this.session) == null ? void 0 : _this$session3.disconnect();

    this._subs.unsubscribe();

    (_this$statsSubscripti2 = this.statsSubscription) == null ? void 0 : _this$statsSubscripti2.unsubscribe();
    return true;
  };

  _proto.reconnect = /*#__PURE__*/function () {
    var _reconnect = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var _this$statsSubscripti3;

      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              (_this$statsSubscripti3 = this.statsSubscription) == null ? void 0 : _this$statsSubscripti3.unsubscribe();
              _context3.next = 3;
              return this._subscribeVideoStream();

            case 3:
              if (!(this.session === null)) {
                _context3.next = 7;
                break;
              }

              return _context3.abrupt("return", {
                status: false,
                code: 'err-str-907',
                message: 'Stream is already subscribed.',
                data: null
              });

            case 7:
              return _context3.abrupt("return", {
                status: true,
                code: 'suc-str-908',
                message: 'Stream subscribed.',
                data: null
              });

            case 8:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function reconnect() {
      return _reconnect.apply(this, arguments);
    }

    return reconnect;
  }();

  _proto.startArchiving = function startArchiving() {
    throw new Error('startArchiving() is not implemented');
  };

  _proto.stopArchiving = function stopArchiving() {
    throw new Error('stopArchiving() is not implemented');
  };

  _proto.captureImageAndArchive = function captureImageAndArchive() {
    throw new Error('captureImageAndArchive() is not implemented');
  };

  return OpentokStreamer;
}();

var REQUEST_TYPE_ENUM;

(function (REQUEST_TYPE_ENUM) {
  REQUEST_TYPE_ENUM[REQUEST_TYPE_ENUM["API_KEY"] = 0] = "API_KEY";
  REQUEST_TYPE_ENUM[REQUEST_TYPE_ENUM["AUTHORIZATION_TOKEN"] = 1] = "AUTHORIZATION_TOKEN";
})(REQUEST_TYPE_ENUM || (REQUEST_TYPE_ENUM = {}));

var routes = {
  apiKeyTokenRoute: '/video_stream/v2/external/get_stream',
  apiKeyChangeStreamRoute: '/video_stream/v2/external/set_stream',
  authTokenTokenRoute: '/video_stream/v2/get_stream',
  authTokenChangeStreamRoute: '/video_stream/v2/set_stream'
};

var environment = {
  development: false,
  cloudUrl: 'http://localhost:1234'
};

var API_METHODS = /*#__PURE__*/Object.freeze({
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
  PURGE: 'PURGE',
  PATCH: 'PATCH',
  COPY: 'COPY',
  HEAD: 'HEAD',
  OPTIONS: 'OPTIONS',
  LINK: 'LINK',
  UNLINK: 'UNLINK',
  LOCK: 'LOCK',
  UNLOCK: 'UNLOCK',
  PROPFIND: 'PROPFIND',
  VIEW: 'VIEW'
});

var apiKeyGetStreamToken = /*#__PURE__*/function () {
  var _ref = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(api_key, vehicle_id, token, source_id) {
    var url, data, apiOptions, tokenData;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            url = environment.cloudUrl + routes.apiKeyTokenRoute;
            data = {
              api_key: api_key,
              vehicle_id: vehicle_id,
              token: token,
              source_id: source_id
            };
            apiOptions = {
              method: API_METHODS.POST,
              url: url,
              headers: {
                'Content-Type': 'application/json'
              },
              data: JSON.stringify(data)
            };
            _context.next = 5;
            return axios.request(apiOptions);

          case 5:
            tokenData = _context.sent;
            return _context.abrupt("return", tokenData.data);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function apiKeyGetStreamToken(_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();
var apiKeyChangeVideoStream = /*#__PURE__*/function () {
  var _ref2 = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(api_key, vehicle_id, token, source_id, stream_type) {
    var url, data, apiOptions, tokenData;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            url = environment.cloudUrl + routes.apiKeyChangeStreamRoute;
            data = {
              api_key: api_key,
              vehicle_id: vehicle_id,
              token: token,
              source_id: source_id,
              platform: STREAM_TYPE[stream_type]
            };
            apiOptions = {
              method: API_METHODS.POST,
              url: url,
              headers: {
                'Content-Type': 'application/json'
              },
              data: JSON.stringify(data)
            };
            _context2.next = 5;
            return axios.request(apiOptions);

          case 5:
            tokenData = _context2.sent;
            return _context2.abrupt("return", tokenData.data);

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function apiKeyChangeVideoStream(_x5, _x6, _x7, _x8, _x9) {
    return _ref2.apply(this, arguments);
  };
}();
var authorizationTokenGetStreamToken = /*#__PURE__*/function () {
  var _ref3 = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(auth_token, vehicle_id, token, source_id) {
    var url, data, apiOptions, tokenData;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            url = environment.cloudUrl + routes.authTokenTokenRoute;
            data = {
              vehicle_id: vehicle_id,
              token: token,
              source_id: source_id
            };
            apiOptions = {
              method: API_METHODS.POST,
              url: url,
              headers: {
                'Content-Type': 'application/json',
                Authorization: JSON.stringify(auth_token)
              },
              data: JSON.stringify(data)
            };
            _context3.next = 5;
            return axios.request(apiOptions);

          case 5:
            tokenData = _context3.sent;
            return _context3.abrupt("return", tokenData.data);

          case 7:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function authorizationTokenGetStreamToken(_x10, _x11, _x12, _x13) {
    return _ref3.apply(this, arguments);
  };
}();
var authorizationTokenChangeVideoStream = /*#__PURE__*/function () {
  var _ref4 = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(auth_token, vehicle_id, token, stream_type) {
    var url, data, apiOptions, tokenData;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            url = environment.cloudUrl + routes.authTokenChangeStreamRoute;
            data = {
              vehicle_id: vehicle_id,
              token: token,
              platform: STREAM_TYPE[stream_type]
            };
            apiOptions = {
              method: API_METHODS.POST,
              url: url,
              headers: {
                'Content-Type': 'application/json',
                Authorization: JSON.stringify(auth_token)
              },
              data: JSON.stringify(data)
            };
            _context4.next = 5;
            return axios.request(apiOptions);

          case 5:
            tokenData = _context4.sent;
            return _context4.abrupt("return", tokenData.data);

          case 7:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function authorizationTokenChangeVideoStream(_x14, _x15, _x16, _x17) {
    return _ref4.apply(this, arguments);
  };
}();

var getStreamer = /*#__PURE__*/function () {
  var _ref = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(authorization, vehicle_id, token, source_id, element, auth_type) {
    var _streamTokens$data, _streamTokens$data$op, streamTokens;

    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (auth_type === void 0) {
              auth_type = REQUEST_TYPE_ENUM.API_KEY;
            }

            _context.prev = 1;

            if (!(auth_type === REQUEST_TYPE_ENUM.API_KEY)) {
              _context.next = 8;
              break;
            }

            _context.next = 5;
            return apiKeyGetStreamToken(authorization, vehicle_id, token, source_id);

          case 5:
            streamTokens = _context.sent;
            _context.next = 11;
            break;

          case 8:
            _context.next = 10;
            return authorizationTokenGetStreamToken(authorization, vehicle_id, token, source_id);

          case 10:
            streamTokens = _context.sent;

          case 11:
            console.log(streamTokens);

            if (!((_streamTokens$data = streamTokens.data) != null && (_streamTokens$data$op = _streamTokens$data.opentok) != null && _streamTokens$data$op.apiKey)) {
              _context.next = 16;
              break;
            }

            return _context.abrupt("return", new OpentokStreamer(vehicle_id, source_id, element, streamTokens.data.opentok));

          case 16:
            return _context.abrupt("return", new MillicastStreamer(vehicle_id, source_id, element, streamTokens.data.millicast));

          case 17:
            _context.next = 23;
            break;

          case 19:
            _context.prev = 19;
            _context.t0 = _context["catch"](1);
            console.log(_context.t0);
            throw _context.t0;

          case 23:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 19]]);
  }));

  return function getStreamer(_x, _x2, _x3, _x4, _x5, _x6) {
    return _ref.apply(this, arguments);
  };
}();
var changeStream = /*#__PURE__*/function () {
  var _ref2 = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(authorization, vehicle_id, token, source_id, element, stream_type, auth_type) {
    var streamer;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (auth_type === void 0) {
              auth_type = REQUEST_TYPE_ENUM.API_KEY;
            }

            _context2.prev = 1;

            if (!(auth_type === REQUEST_TYPE_ENUM.API_KEY)) {
              _context2.next = 7;
              break;
            }

            _context2.next = 5;
            return apiKeyChangeVideoStream(authorization, vehicle_id, token, source_id, stream_type);

          case 5:
            _context2.next = 9;
            break;

          case 7:
            _context2.next = 9;
            return authorizationTokenChangeVideoStream(authorization, vehicle_id, token, stream_type);

          case 9:
            _context2.next = 11;
            return getStreamer(authorization, vehicle_id, token, source_id, element, auth_type);

          case 11:
            streamer = _context2.sent;
            return _context2.abrupt("return", streamer);

          case 15:
            _context2.prev = 15;
            _context2.t0 = _context2["catch"](1);
            console.log(_context2.t0);
            throw _context2.t0;

          case 19:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 15]]);
  }));

  return function changeStream(_x7, _x8, _x9, _x10, _x11, _x12, _x13) {
    return _ref2.apply(this, arguments);
  };
}();

exports.changeStream = changeStream;
exports.getStreamer = getStreamer;
//# sourceMappingURL=video-client-staging.cjs.development.js.map


/***/ }),

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add-stream-modal/add-stream-modal.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/add-stream-modal/add-stream-modal.component.ts ***!
  \****************************************************************/
/*! exports provided: AddStreamModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddStreamModalComponent", function() { return AddStreamModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../state.service */ "./src/app/state.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






const _c0 = function (a0) { return { "disabled-btn": a0 }; };
class AddStreamModalComponent {
    constructor(State) {
        this.State = State;
    }
    ngOnInit() {
        //form
        this.addStreamForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            // api_key: new FormControl(
            //   'NWU0MDAwMmU5NTA2YTcxM2ExMGRkMjUzNDA4M2Y2NGY0MDNmNDkwYmQ1OWRkMWNhMWFlYTQ4ZDk=',
            //   [Validators.required]
            // ),
            // vehicle_id: new FormControl('wVQv1qs6', [Validators.required]),
            // token: new FormControl('6e9560880e87b7ff1d633c852ac6d5a31881505f', [
            //   Validators.required,
            // ]),
            api_key: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('NjE1YzY2NmE5ZjE5MTgyNDhlMmMwM2NiNGM4YTY5OWNhYTA5MGZiMzkxYjRjZTMwMDExMmY3ZTA=', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            // QKSTWB2f 1zbY6EjJ
            vehicle_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('QKSTWB2f', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            token: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('bb84c840eaff94e84e11255d23aedfbeafd57aa1', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            ]),
            source_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
        });
    }
    addVideoStream() {
        // add stream details to an array
        this.State.videoStreamDetails.push(this.addStreamForm.value);
        this.State.showAddStreamModal = false;
    }
}
AddStreamModalComponent.ɵfac = function AddStreamModalComponent_Factory(t) { return new (t || AddStreamModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_state_service__WEBPACK_IMPORTED_MODULE_2__["StateService"])); };
AddStreamModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddStreamModalComponent, selectors: [["app-add-stream-modal"]], decls: 17, vars: 4, consts: [[1, "back-drop", 3, "click"], [1, "add-streammodal-container"], [3, "formGroup", "submit"], ["type", "password", "formControlName", "api_key", "placeholder", "API-KEY", "required", ""], ["type", "text", "formControlName", "vehicle_id", "placeholder", "Vehicle-ID", "required", ""], ["type", "text", "formControlName", "token", "placeholder", "Personal-Access-Token", "required", ""], ["type", "number", "formControlName", "source_id", "placeholder", "Source-ID", "required", ""], ["type", "submit", 1, "add-stream", "add-streammodal-submit", 3, "ngClass"], [1, "add-stream-help"], ["href", "https://flytbase.com/"], ["href", "https://wa.me/15513586065?text=Hello!%20I%20would%20like%20to%20set%20up%20a%20call%20with%20you"]], template: function AddStreamModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddStreamModalComponent_Template_div_click_0_listener() { return ctx.State.showAddStreamModal = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Add FlytNow Video Feed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function AddStreamModalComponent_Template_form_submit_5_listener() { return ctx.addVideoStream(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u00A9 FlytBase, Inc. - All Rights Reserved. | WhatsApp: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "+1(551) 358-6065");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.addStreamForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx.addStreamForm.invalid));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], styles: ["@import url(https://fonts.googleapis.com/css?family=Roboto);\n\n.back-drop[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  z-index: -1;\n  top: 0;\n  left: 0;\n  background-color: #000000cc;\n}\n\n\n\n.add-streammodal-container[_ngcontent-%COMP%] {\n  z-index: 1;\n  padding: 30px;\n  max-width: 350px;\n  background-color: #F7F7F7;\n  margin: 0;\n  border-radius: 2px;\n  box-shadow: 0px 2px 2px rgb(0 0 0 / 30%);\n  overflow: hidden;\n  font-family: roboto;\n  position: absolute;\n  margin: 0;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.disabled-btn[_ngcontent-%COMP%] {\n  background-color: #666 !important;\n  color: #a0a0a0 !important;\n  cursor: not-allowed;\n}\n\n.add-streammodal-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 1.8em;\n  font-family: roboto;\n}\n\n.add-streammodal-container[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%] {\n  width: 100%;\n  display: block;\n  margin-bottom: 10px;\n  position: relative;\n}\n\n.add-streammodal-container[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%] {\n  height: 44px;\n  font-size: 16px;\n  width: 100%;\n  margin-bottom: 10px;\n  -webkit-appearance: none;\n  background: #fff;\n  border: 1px solid #d9d9d9;\n  border-top: 1px solid #c0c0c0;\n  \n  padding: 0 8px;\n  box-sizing: border-box;\n  -moz-box-sizing: border-box;\n}\n\n.add-streammodal-container[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]:hover, input[type=password][_ngcontent-%COMP%]:hover, input[type=number][_ngcontent-%COMP%]:hover {\n  border: 1px solid #b9b9b9;\n  border-top: 1px solid #a0a0a0;\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);\n}\n\n.add-streammodal[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 14px;\n  font-family: 'Arial', sans-serif;\n  font-weight: 700;\n  height: 36px;\n  padding: 0 8px;\n  \n  \n}\n\n.add-streammodal-submit[_ngcontent-%COMP%] {\n  \n  border: 0px;\n  color: #fff;\n  text-shadow: 0 1px rgba(0, 0, 0, 0.1);\n  background-color: #4d90fe;\n  padding: 17px 0px;\n  font-family: roboto;\n  font-size: 14px;\n  width: 100%;\n  margin: 10px 0px;\n  \n}\n\n.add-streammodal-submit[_ngcontent-%COMP%]:hover {\n  \n  border: 0px;\n  text-shadow: 0 1px rgba(0, 0, 0, 0.3);\n  background-color: #357ae8;\n  \n}\n\n.add-streammodal-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #666;\n  font-weight: 400;\n  text-align: center;\n  display: inline-block;\n  opacity: 0.6;\n  transition: opacity ease 0.5s;\n}\n\n.add-stream-help[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.add-stream-btn[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 50px;\n}\n\n.button[_ngcontent-%COMP%] {\n  line-height: 55px;\n  padding: 0 30px;\n  background: #004a80;\n  color: #fff;\n  display: inline-block;\n  font-family: roboto;\n  text-decoration: none;\n  font-size: 18px;\n}\n\n.button[_ngcontent-%COMP%]:hover, .button[_ngcontent-%COMP%]:visited {\n  background: #006cba;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLXN0cmVhbS1tb2RhbC9hZGQtc3RyZWFtLW1vZGFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkRBQTJEOztBQUUzRDtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxNQUFNO0VBQ04sT0FBTztFQUNQLDJCQUEyQjtBQUM3Qjs7QUFFQSwrQkFBK0I7O0FBQy9CO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsd0NBQXdDO0VBQ3hDLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxRQUFRO0VBQ1IsU0FBUztFQUVULGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyx5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7OztFQUdFLFlBQVk7RUFDWixlQUFlO0VBQ2YsV0FBVztFQUNYLG1CQUFtQjtFQUNuQix3QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6Qiw2QkFBNkI7RUFDN0Isd0JBQXdCO0VBQ3hCLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsMkJBQTJCO0FBQzdCOztBQUVBOzs7RUFHRSx5QkFBeUI7RUFDekIsNkJBQTZCO0VBRzdCLDhDQUE4QztBQUNoRDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZ0NBQWdDO0VBQ2hDLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osY0FBYztFQUNkLHdCQUF3QjtFQUN4QjtzQkFDb0I7QUFDdEI7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsV0FBVztFQUNYLFdBQVc7RUFDWCxxQ0FBcUM7RUFDckMseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsMkZBQTJGO0FBQzdGOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLFdBQVc7RUFDWCxxQ0FBcUM7RUFDckMseUJBQXlCO0VBQ3pCLDJGQUEyRjtBQUM3Rjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2FkZC1zdHJlYW0tbW9kYWwvYWRkLXN0cmVhbS1tb2RhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90byk7XG5cbi5iYWNrLWRyb3Age1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IC0xO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDBjYztcbn1cblxuLyoqKioqKiBhZGQtc3RyZWFtIE1PREFMICoqKioqKi9cbi5hZGQtc3RyZWFtbW9kYWwtY29udGFpbmVyIHtcbiAgei1pbmRleDogMTtcbiAgcGFkZGluZzogMzBweDtcbiAgbWF4LXdpZHRoOiAzNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y3RjdGNztcbiAgbWFyZ2luOiAwO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJveC1zaGFkb3c6IDBweCAycHggMnB4IHJnYigwIDAgMCAvIDMwJSk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGZvbnQtZmFtaWx5OiByb2JvdG87XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luOiAwO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4uZGlzYWJsZWQtYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY2NiAhaW1wb3J0YW50O1xuICBjb2xvcjogI2EwYTBhMCAhaW1wb3J0YW50O1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuXG4uYWRkLXN0cmVhbW1vZGFsLWNvbnRhaW5lciBoMSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxLjhlbTtcbiAgZm9udC1mYW1pbHk6IHJvYm90bztcbn1cblxuLmFkZC1zdHJlYW1tb2RhbC1jb250YWluZXIgaW5wdXRbdHlwZT1zdWJtaXRdIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5hZGQtc3RyZWFtbW9kYWwtY29udGFpbmVyIGlucHV0W3R5cGU9dGV4dF0sXG5pbnB1dFt0eXBlPXBhc3N3b3JkXSxcbmlucHV0W3R5cGU9bnVtYmVyXSB7XG4gIGhlaWdodDogNDRweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDlkOWQ5O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2MwYzBjMDtcbiAgLyogYm9yZGVyLXJhZGl1czogMnB4OyAqL1xuICBwYWRkaW5nOiAwIDhweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uYWRkLXN0cmVhbW1vZGFsLWNvbnRhaW5lciBpbnB1dFt0eXBlPXRleHRdOmhvdmVyLFxuaW5wdXRbdHlwZT1wYXNzd29yZF06aG92ZXIsXG5pbnB1dFt0eXBlPW51bWJlcl06aG92ZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjYjliOWI5O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2EwYTBhMDtcbiAgLW1vei1ib3gtc2hhZG93OiBpbnNldCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5hZGQtc3RyZWFtbW9kYWwge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6ICdBcmlhbCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGhlaWdodDogMzZweDtcbiAgcGFkZGluZzogMCA4cHg7XG4gIC8qIGJvcmRlci1yYWRpdXM6IDNweDsgKi9cbiAgLyogLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7ICovXG59XG5cbi5hZGQtc3RyZWFtbW9kYWwtc3VibWl0IHtcbiAgLyogYm9yZGVyOiAxcHggc29saWQgIzMwNzllZDsgKi9cbiAgYm9yZGVyOiAwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LXNoYWRvdzogMCAxcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGQ5MGZlO1xuICBwYWRkaW5nOiAxN3B4IDBweDtcbiAgZm9udC1mYW1pbHk6IHJvYm90bztcbiAgZm9udC1zaXplOiAxNHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAxMHB4IDBweDtcbiAgLyogYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIDAgMCwgMCAxMDAlLCAgIGZyb20oIzRkOTBmZSksIHRvKCM0Nzg3ZWQpKTsgKi9cbn1cblxuLmFkZC1zdHJlYW1tb2RhbC1zdWJtaXQ6aG92ZXIge1xuICAvKiBib3JkZXI6IDFweCBzb2xpZCAjMmY1YmI3OyAqL1xuICBib3JkZXI6IDBweDtcbiAgdGV4dC1zaGFkb3c6IDAgMXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM1N2FlODtcbiAgLyogYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIDAgMCwgMCAxMDAlLCAgIGZyb20oIzRkOTBmZSksIHRvKCMzNTdhZTgpKTsgKi9cbn1cblxuLmFkZC1zdHJlYW1tb2RhbC1jb250YWluZXIgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICM2NjY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBvcGFjaXR5OiAwLjY7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgZWFzZSAwLjVzO1xufVxuXG4uYWRkLXN0cmVhbS1oZWxwIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uYWRkLXN0cmVhbS1idG4ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG5cbi5idXR0b24ge1xuICBsaW5lLWhlaWdodDogNTVweDtcbiAgcGFkZGluZzogMCAzMHB4O1xuICBiYWNrZ3JvdW5kOiAjMDA0YTgwO1xuICBjb2xvcjogI2ZmZjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LWZhbWlseTogcm9ib3RvO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmJ1dHRvbjpob3Zlcixcbi5idXR0b246dmlzaXRlZCB7XG4gIGJhY2tncm91bmQ6ICMwMDZjYmE7XG4gIGNvbG9yOiAjZmZmO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddStreamModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-stream-modal',
                templateUrl: './add-stream-modal.component.html',
                styleUrls: ['./add-stream-modal.component.css'],
            }]
    }], function () { return [{ type: _state_service__WEBPACK_IMPORTED_MODULE_2__["StateService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state.service */ "./src/app/state.service.ts");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _video_stream_video_stream_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./video-stream/video-stream.component */ "./src/app/video-stream/video-stream.component.ts");
/* harmony import */ var _add_stream_modal_add_stream_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-stream-modal/add-stream-modal.component */ "./src/app/add-stream-modal/add-stream-modal.component.ts");







function AppComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-video-stream", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const videoStreamDetail_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("videoStreamDetail", videoStreamDetail_r2);
} }
function AppComponent_app_add_stream_modal_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-add-stream-modal");
} }
class AppComponent {
    constructor(State) {
        this.State = State;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_state_service__WEBPACK_IMPORTED_MODULE_1__["StateService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 2, consts: [[4, "ngFor", "ngForOf"], [4, "ngIf"], [3, "videoStreamDetail"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_ng_container_1_Template, 2, 1, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_app_add_stream_modal_2_Template, 1, 0, "app-add-stream-modal", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.State.videoStreamDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.State.showAddStreamModal);
    } }, directives: [_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_2__["NavBarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _video_stream_video_stream_component__WEBPACK_IMPORTED_MODULE_4__["VideoStreamComponent"], _add_stream_modal_add_stream_modal_component__WEBPACK_IMPORTED_MODULE_5__["AddStreamModalComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _state_service__WEBPACK_IMPORTED_MODULE_1__["StateService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var _video_stream_video_stream_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./video-stream/video-stream.component */ "./src/app/video-stream/video-stream.component.ts");
/* harmony import */ var _add_stream_modal_add_stream_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-stream-modal/add-stream-modal.component */ "./src/app/add-stream-modal/add-stream-modal.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"]], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_3__["NavBarComponent"],
        _video_stream_video_stream_component__WEBPACK_IMPORTED_MODULE_4__["VideoStreamComponent"],
        _add_stream_modal_add_stream_modal_component__WEBPACK_IMPORTED_MODULE_5__["AddStreamModalComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_3__["NavBarComponent"],
                    _video_stream_video_stream_component__WEBPACK_IMPORTED_MODULE_4__["VideoStreamComponent"],
                    _add_stream_modal_add_stream_modal_component__WEBPACK_IMPORTED_MODULE_5__["AddStreamModalComponent"],
                ],
                imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"]],
                providers: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.ts ***!
  \**********************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state.service */ "./src/app/state.service.ts");



class NavBarComponent {
    constructor(State) {
        this.State = State;
    }
    ngOnInit() {
        const menu = document.querySelector('#mobile-menu');
        const menuLinks = document.querySelector('.nav-menu');
        menu.addEventListener('click', function () {
            menu.classList.toggle('is-active');
            menuLinks.classList.toggle('active');
        });
    }
    showAddStreamModal() {
        this.State.showAddStreamModal = true;
    }
}
NavBarComponent.ɵfac = function NavBarComponent_Factory(t) { return new (t || NavBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_state_service__WEBPACK_IMPORTED_MODULE_1__["StateService"])); };
NavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavBarComponent, selectors: [["app-nav-bar"]], decls: 12, vars: 0, consts: [[1, "nav-container"], [1, "navbar"], ["id", "navbar-logo"], ["id", "mobile-menu", 1, "menu-toggle"], [1, "bar"], [1, "nav-menu"], [1, "nav-links", "nav-links-btn", 3, "click"]], template: function NavBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "SampleApp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_Template_a_click_10_listener() { return ctx.showAddStreamModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');\n\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: 'Nunito', sans-serif;\n}\n\nbody[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100vh;\n}\n\n.nav-container[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: #212329;\n}\n\n.navbar[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 0.2fr auto 1fr;\n  align-items: center;\n  height: 80px;\n  width: 90%;\n  max-width: 1720px;\n  margin: 0 auto;\n}\n\n#navbar-logo[_ngcontent-%COMP%] {\n  color: #FFF;\n  justify-self: start;\n  margin-left: 20px;\n  cursor: pointer;\n}\n\n.nav-menu[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(1, auto);\n  list-style: none;\n  text-align: center;\n  width: 10%;\n  justify-self: end;\n}\n\n.nav-links[_ngcontent-%COMP%] {\n  color: white;\n  text-decoration: none;\n}\n\n.nav-links[_ngcontent-%COMP%]:hover {\n  color: #F9423D;\n  transition: all 0.2s ease-out;\n}\n\n.nav-links-btn[_ngcontent-%COMP%] {\n  background-color: #F9423D;\n  padding: 6px 16px;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\n.nav-links-btn[_ngcontent-%COMP%]:hover {\n  background-color: transparent;\n  color: #FFF;\n  padding: 5px 15px;\n  border-radius: 4px;\n  border: 1px solid #F9423D;\n  transition: all 0.3s ease-out;\n}\n\n.menu-toggle[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.menu-toggle[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%] {\n  width: 25px;\n  height: 3px;\n  margin: 5px auto;\n  transition: all 0.3s ease-in-out;\n  background-color: #FFF;\n}\n\n@media screen and (max-width: 768px) {\n  .nav-container[_ngcontent-%COMP%] {\n    position: relative;\n  }\n\n  .nav-menu[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: auto;\n    background: #F9423D;\n    margin: 0;\n    position: absolute;\n    width: 100%;\n    top: 80px;\n    left: -100%;\n    opacity: 0;\n    transition: all 0.5s ease;\n  }\n\n  #navbar-logo[_ngcontent-%COMP%] {\n    margin-left: 20px;\n  }\n\n  .nav-menu.active[_ngcontent-%COMP%] {\n    background-color: #212329;\n    left: 0;\n    opacity: 1;\n    transition: all 0.5s ease;\n  }\n\n  .nav-links[_ngcontent-%COMP%] {\n    text-align: center;\n    line-height: 60px;\n    width: 100%;\n    display: table;\n  }\n\n  .nav-links[_ngcontent-%COMP%]:hover {\n    background-color: #F9423D;\n    color: #FFF;\n    transition: all 0.4s ease-out;\n  }\n\n  .navbar[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .nav-links-btn[_ngcontent-%COMP%] {\n    border: none;\n    padding: 0;\n    border-radius: 0;\n    background-color: #212329;\n    color: #FFF;\n    transition: all 0.4s ease-out;\n  }\n\n  .nav-links-btn[_ngcontent-%COMP%]:hover {\n    background-color: #F9423D;\n  }\n\n  #mobile-menu[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 20%;\n    right: 5%;\n    transform: translate(5%, 20%);\n  }\n\n  .menu-toggle[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  #mobile-menu.is-active[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]:nth-child(2) {\n    opacity: 0;\n  }\n\n  #mobile-menu.is-active[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]:nth-child(1) {\n    transform: translateY(8px) rotate(45deg);\n  }\n\n  #mobile-menu.is-active[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]:nth-child(3) {\n    transform: translateY(-8px) rotate(-45deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkVBQTJFOztBQUUzRTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFDQUFxQztFQUNyQyxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGdDQUFnQztFQUNoQyxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFNBQVM7SUFDVCxXQUFXO0lBQ1gsVUFBVTtJQUNWLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6QixPQUFPO0lBQ1AsVUFBVTtJQUNWLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsV0FBVztJQUNYLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSx5QkFBeUI7SUFDekIsV0FBVztJQUNYLDZCQUE2QjtFQUMvQjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFlBQVk7SUFDWixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsNkJBQTZCO0VBQy9COztFQUVBO0lBQ0UseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsNkJBQTZCO0VBQy9COztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLHdDQUF3QztFQUMxQzs7RUFFQTtJQUNFLDBDQUEwQztFQUM1QztBQUNGIiwiZmlsZSI6InNyYy9hcHAvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1OdW5pdG8mZGlzcGxheT1zd2FwJyk7XG5cbioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtZmFtaWx5OiAnTnVuaXRvJywgc2Fucy1zZXJpZjtcbn1cblxuYm9keSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG4ubmF2LWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyMzI5O1xufVxuXG4ubmF2YmFyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjJmciBhdXRvIDFmcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiA4MHB4O1xuICB3aWR0aDogOTAlO1xuICBtYXgtd2lkdGg6IDE3MjBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbiNuYXZiYXItbG9nbyB7XG4gIGNvbG9yOiAjRkZGO1xuICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubmF2LW1lbnUge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCBhdXRvKTtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAlO1xuICBqdXN0aWZ5LXNlbGY6IGVuZDtcbn1cblxuLm5hdi1saW5rcyB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4ubmF2LWxpbmtzOmhvdmVyIHtcbiAgY29sb3I6ICNGOTQyM0Q7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0O1xufVxuXG4ubmF2LWxpbmtzLWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGOTQyM0Q7XG4gIHBhZGRpbmc6IDZweCAxNnB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm5hdi1saW5rcy1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICNGRkY7XG4gIHBhZGRpbmc6IDVweCAxNXB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNGOTQyM0Q7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xufVxuXG4ubWVudS10b2dnbGUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5tZW51LXRvZ2dsZSAuYmFyIHtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogM3B4O1xuICBtYXJnaW46IDVweCBhdXRvO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLm5hdi1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuXG4gIC5uYXYtbWVudSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG87XG4gICAgYmFja2dyb3VuZDogI0Y5NDIzRDtcbiAgICBtYXJnaW46IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRvcDogODBweDtcbiAgICBsZWZ0OiAtMTAwJTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XG4gIH1cblxuICAjbmF2YmFyLWxvZ28ge1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICB9XG5cbiAgLm5hdi1tZW51LmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjMyOTtcbiAgICBsZWZ0OiAwO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcbiAgfVxuXG4gIC5uYXYtbGlua3Mge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsaW5lLWhlaWdodDogNjBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgfVxuXG4gIC5uYXYtbGlua3M6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGOTQyM0Q7XG4gICAgY29sb3I6ICNGRkY7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1vdXQ7XG4gIH1cblxuICAubmF2YmFyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5uYXYtbGlua3MtYnRuIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTIzMjk7XG4gICAgY29sb3I6ICNGRkY7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1vdXQ7XG4gIH1cblxuICAubmF2LWxpbmtzLWJ0bjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y5NDIzRDtcbiAgfVxuXG4gICNtb2JpbGUtbWVudSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMjAlO1xuICAgIHJpZ2h0OiA1JTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1JSwgMjAlKTtcbiAgfVxuXG4gIC5tZW51LXRvZ2dsZSAuYmFyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gICNtb2JpbGUtbWVudS5pcy1hY3RpdmUgLmJhcjpudGgtY2hpbGQoMikge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cblxuICAjbW9iaWxlLW1lbnUuaXMtYWN0aXZlIC5iYXI6bnRoLWNoaWxkKDEpIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoOHB4KSByb3RhdGUoNDVkZWcpO1xuICB9XG5cbiAgI21vYmlsZS1tZW51LmlzLWFjdGl2ZSAuYmFyOm50aC1jaGlsZCgzKSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC04cHgpIHJvdGF0ZSgtNDVkZWcpO1xuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nav-bar',
                templateUrl: './nav-bar.component.html',
                styleUrls: ['./nav-bar.component.css']
            }]
    }], function () { return [{ type: _state_service__WEBPACK_IMPORTED_MODULE_1__["StateService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/state.service.ts":
/*!**********************************!*\
  !*** ./src/app/state.service.ts ***!
  \**********************************/
/*! exports provided: StateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateService", function() { return StateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class StateService {
    constructor() {
        this.showAddStreamModal = false;
        this.videoStreamDetails = [];
    }
}
StateService.ɵfac = function StateService_Factory(t) { return new (t || StateService)(); };
StateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StateService, factory: StateService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/video-stream/video-stream.component.ts":
/*!********************************************************!*\
  !*** ./src/app/video-stream/video-stream.component.ts ***!
  \********************************************************/
/*! exports provided: VideoStreamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoStreamComponent", function() { return VideoStreamComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _flytnow_video_client_staging__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @flytnow/video-client-staging */ "../../../video-stream-sdk/dist/index.js");
/* harmony import */ var _flytnow_video_client_staging__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_flytnow_video_client_staging__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





const _c0 = ["video_element"];
function VideoStreamComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VideoStreamComponent_div_9_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.getSnapShot(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Take RAW Snapshot");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VideoStreamComponent_div_9_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.getStats(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Statistics");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VideoStreamComponent_div_9_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.startRecording(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Start Archiving");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VideoStreamComponent_div_9_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.stopRecording(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Stop Archiving");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VideoStreamComponent_div_9_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.capture(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Capture and Archive");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VideoStreamComponent_div_9_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.refresh(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "refresh");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VideoStreamComponent_div_9_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.disconnect(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Disconnect");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VideoStreamComponent_div_9_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.changeStream(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "change stream");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c1 = function (a0) { return { "background-color": a0 }; };
class VideoStreamComponent {
    constructor() {
        this.feedType = '';
    }
    ngAfterViewInit() {
        // Drafting an element_id
        this.element_id =
            this.videoStreamDetail.vehicle_id +
                '-' +
                this.videoStreamDetail.source_id;
        this.failedFeed = false;
        this.archivingActive = false;
        //Initializing Feed
        this.init();
    }
    init() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                console.log(this.htmlELement);
                this.videoFeed = yield Object(_flytnow_video_client_staging__WEBPACK_IMPORTED_MODULE_2__["getStreamer"])(this.videoStreamDetail.api_key, this.videoStreamDetail.vehicle_id, this.videoStreamDetail.token, this.videoStreamDetail.source_id, this.htmlELement.nativeElement, 0);
                this.feedType = this.videoFeed.streamType();
            }
            catch (err) {
                this.msg =
                    'Error while initializing video feed, check console for more info';
            }
        });
    }
    initFeed() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Instantiating VideoStreamer Object
            // which will expose all the API methods once connection is established
            let element = document.getElementById(this.element_id);
            console.log(element, this.element_id);
            if (this.videoFeed['status'] === false) {
                console.log('Something went wrong.');
                this.msg = ` Failed
      ErrorCode: ${this.videoFeed['code']}
      Message:${this.videoFeed['message']}`;
                this.failedFeed = true;
            }
            else {
                //Connection Successful
                console.log('Feed Active for ', this.videoStreamDetail.vehicle_id, ' with source-id ', this.videoStreamDetail.source_id);
            }
        });
    }
    getSnapShot() {
        //Method to get raw image snapshot in Base64
        if (this.videoFeed) {
            console.log('Image Raw Data=>', this.videoFeed.getImageData());
            this.msg = 'Image Raw Data Logged to Console.';
        }
    }
    startRecording() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //Method to start video recording on S3
            if (this.videoFeed) {
                let response = yield this.videoFeed.startArchiving();
                if (response['status']) {
                    this.archivingActive = true;
                    this.msg = 'Recording Started Successfully';
                }
                else {
                    this.msg = `Start Archiving - Failed
        ErrorCode: ${response['code']}
        Message:${response['message']}`;
                }
            }
        });
    }
    stopRecording() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //Method to stop video recording on S3
            if (this.videoFeed) {
                let response = yield this.videoFeed.stopArchiving();
                if (response['status']) {
                    this.archivingActive = false;
                    this.msg = 'Recording Stopped Successfully';
                }
                else {
                    this.msg = `Stop Archiving - Failed
        ErrorCode: ${response['code']}
        Message:${response['message']}`;
                }
            }
        });
    }
    capture() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //Method to capture a snapshot and upload it to S3
            if (this.videoFeed) {
                let response = yield this.videoFeed.captureImageAndArchive();
                if (response['status']) {
                    this.msg = 'Image Captured and archived';
                }
                else {
                    this.msg = `Capture and Archive - Failed
        ErrorCode: ${response['code']}
        Message:${response['message']}`;
                }
            }
        });
    }
    getStats() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Method to get stats of the connection
            // if (this.videoFeed) {
            //   let response = await this.videoFeed.getStats();
            //   if (response) {
            //     this.msg = 'Statistics Logged to Console.';
            //     console.log('Statistics->', response);
            //   } else {
            //     this.msg = "Couldn't find Feed Statistics.";
            //   }
            // }
            this.videoFeed.getStats().subscribe((stats) => {
                console.log(stats);
            });
        });
    }
    disconnect() {
        try {
            if (this.videoFeed) {
                this.videoFeed.disconnect();
            }
            return;
        }
        catch (err) {
            return;
        }
    }
    refresh() {
        if (this.videoFeed) {
            this.videoFeed.reconnect();
        }
    }
    toggleStream() {
        if (this.videoFeed) {
            return this.videoFeed.streamType() == 'opentok' ? 1 : 0;
        }
        else {
            return 0;
        }
    }
    changeStream() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.disconnect();
            this.videoFeed = yield Object(_flytnow_video_client_staging__WEBPACK_IMPORTED_MODULE_2__["changeStream"])(this.videoStreamDetail.api_key, this.videoStreamDetail.vehicle_id, this.videoStreamDetail.token, this.videoStreamDetail.source_id, this.htmlELement.nativeElement, this.toggleStream());
            this.feedType = this.videoFeed.streamType();
        });
    }
}
VideoStreamComponent.ɵfac = function VideoStreamComponent_Factory(t) { return new (t || VideoStreamComponent)(); };
VideoStreamComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: VideoStreamComponent, selectors: [["app-video-stream"]], viewQuery: function VideoStreamComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.htmlELement = _t.first);
    } }, inputs: { videoStreamDetail: "videoStreamDetail" }, decls: 10, vars: 7, consts: [[1, "feed-container"], ["video_element", ""], [1, "footer"], [1, "recording-container"], [1, "recording-indicator", 3, "ngStyle"], [1, "msg-container", 2, "white-space", "pre"], ["class", "btn-container", 4, "ngIf"], [1, "btn-container"], [3, "click"]], template: function VideoStreamComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", null, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, VideoStreamComponent_div_9_Template, 17, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.failedFeed ? "Something Went Wrong..." : "Loading...", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c1, ctx.archivingActive ? "red" : ctx.failedFeed ? "yellow" : "black"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", "Feed Type: " + ctx.feedType, "", ctx.msg, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.videoFeed && !ctx.failedFeed);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Nunito&display=swap\");\n\n*[_ngcontent-%COMP%] {\n  font-family: \"Nunito\", sans-serif;\n}\n\n.feed-container[_ngcontent-%COMP%] {\n  width: calc(100% - 2px);\n  height: 50vh;\n  background-color: #363636;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid seashell;\n  border-bottom: 0px;\n}\n\n.feed-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  text-align: center;\n  color: aliceblue;\n  height: 100%;\n  width: 100%;\n}\n\n.footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  background-color: #212329;\n  height: 70px;\n  align-items: center;\n  border: 1px solid seashell;\n  border-top: 0px;\n}\n\n.footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #f9423d;\n  padding: 6px 15px;\n  border-radius: 4px;\n  cursor: pointer;\n  color: aliceblue;\n  margin-left: 10px;\n}\n\n.footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: transparent;\n  color: #fff;\n  padding: 6px 16px;\n  border-radius: 4px;\n  border: 1px solid #f9423d;\n  transition: all 0.3s ease-out;\n}\n\n.footer[_ngcontent-%COMP%]   .btn-container[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n\n.msg-container[_ngcontent-%COMP%] {\n  color: #fff;\n  overflow-y: scroll;\n  height: 100%;\n  padding: 5px;\n  flex-grow: 1;\n}\n\n.recording-container[_ngcontent-%COMP%] {\n  width: 70px;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.recording-indicator[_ngcontent-%COMP%] {\n  width: 25px;\n  height: 25px;\n  border-radius: 20px;\n  background-color: #000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlkZW8tc3RyZWFtL3ZpZGVvLXN0cmVhbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJFQUEyRTs7QUFFM0U7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QiwwQkFBMEI7RUFDMUIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsMEJBQTBCO0VBQzFCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsc0JBQXNCO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvdmlkZW8tc3RyZWFtL3ZpZGVvLXN0cmVhbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU51bml0byZkaXNwbGF5PXN3YXBcIik7XG5cbioge1xuICBmb250LWZhbWlseTogXCJOdW5pdG9cIiwgc2Fucy1zZXJpZjtcbn1cblxuLmZlZWQtY29udGFpbmVyIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDJweCk7XG4gIGhlaWdodDogNTB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM2MzYzNjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHNlYXNoZWxsO1xuICBib3JkZXItYm90dG9tOiAwcHg7XG59XG5cbi5mZWVkLWNvbnRhaW5lciBkaXYge1xuICBmb250LXNpemU6IDJyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IGFsaWNlYmx1ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjMyOTtcbiAgaGVpZ2h0OiA3MHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCBzZWFzaGVsbDtcbiAgYm9yZGVyLXRvcDogMHB4O1xufVxuXG4uZm9vdGVyIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOTQyM2Q7XG4gIHBhZGRpbmc6IDZweCAxNXB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6IGFsaWNlYmx1ZTtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5mb290ZXIgYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiA2cHggMTZweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjk0MjNkO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcbn1cblxuLmZvb3RlciAuYnRuLWNvbnRhaW5lciB7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuXG4ubXNnLWNvbnRhaW5lciB7XG4gIGNvbG9yOiAjZmZmO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogNXB4O1xuICBmbGV4LWdyb3c6IDE7XG59XG5cbi5yZWNvcmRpbmctY29udGFpbmVyIHtcbiAgd2lkdGg6IDcwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5yZWNvcmRpbmctaW5kaWNhdG9yIHtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](VideoStreamComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-video-stream',
                templateUrl: './video-stream.component.html',
                styleUrls: ['./video-stream.component.css'],
            }]
    }], function () { return []; }, { videoStreamDetail: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], htmlELement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['video_element']
        }] }); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/flytbase/Desktop/work/FlytNow/video-streamer/FlytNow-video-streamer-sample-app/angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map