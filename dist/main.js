/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var runtime = function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.

  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }

  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function (obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.

    generator._invoke = makeInvokeMethod(innerFn, self, context);
    return generator;
  }

  exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.

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

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.

  var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.


  var IteratorPrototype = {};

  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

  if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"); // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };

  exports.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }

    genFun.prototype = Object.create(Gp);
    return genFun;
  }; // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.


  exports.awrap = function (arg) {
    return {
      __await: arg
    };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;

        if (value && typeof value === "object" && hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function (error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    } // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).


    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);

  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };

  exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.

  exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;
    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        } // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;

        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);

          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;
        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);
        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;
        var record = tryCatch(innerFn, self, context);

        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };
        } else if (record.type === "throw") {
          state = GenStateCompleted; // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.

          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  } // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.


  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

      context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.

      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }
    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    } // The delegate iterator is finished, so forget it and continue with
    // the outer generator.


    context.delegate = null;
    return ContinueSentinel;
  } // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.


  defineIteratorMethods(Gp);
  define(Gp, toStringTagSymbol, "Generator"); // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.

  Gp[iteratorSymbol] = function () {
    return this;
  };

  Gp.toString = function () {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{
      tryLoc: "root"
    }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function (object) {
    var keys = [];

    for (var key in object) {
      keys.push(key);
    }

    keys.reverse(); // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.

    return function next() {
      while (keys.length) {
        var key = keys.pop();

        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      } // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.


      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];

      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;
          return next;
        };

        return next.next = next;
      }
    } // Return an iterator with no values.


    return {
      next: doneResult
    };
  }

  exports.values = values;

  function doneResult() {
    return {
      value: undefined,
      done: true
    };
  }

  Context.prototype = {
    constructor: Context,
    reset: function (skipTempReset) {
      this.prev = 0;
      this.next = 0; // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.

      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;
      this.method = "next";
      this.arg = undefined;
      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },
    stop: function () {
      this.done = true;
      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;

      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },
    dispatchException: function (exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;

      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }
          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else {
            throw new Error("try statement without catch or finally");
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

      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },
    complete: function (record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" || record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },
    finish: function (finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },
    "catch": function (tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      } // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.


      throw new Error("illegal catch attempt");
    },
    delegateYield: function (iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  }; // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.

  return exports;
}( // If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
 true ? module.exports : undefined);

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _js_draw_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/draw_map */ "./src/js/draw_map.js");
/* harmony import */ var _js_api_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/api_util */ "./src/js/api_util.js");
/* harmony import */ var _js_api_util__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_api_util__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _js_format_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/format_data */ "./src/js/format_data.js");
/* harmony import */ var _js_format_data_weekly__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/format_data_weekly */ "./src/js/format_data_weekly.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }







document.addEventListener("DOMContentLoaded", function () {
  var modalButton = document.querySelector(".modal-map-button");
  var allButton = document.querySelector(".all-button");
  var pfizerButton = document.querySelector("#pfizer");
  var modernaButton = document.querySelector("#moderna");
  var janssenButton = document.querySelector("#janssen");
  var slider = document.querySelector("#scroller");
  modalButton.addEventListener("click", function () {
    var modal = document.querySelector(".modal");
    modal.classList.add("remove-modal");
  });
  allButton.addEventListener("click", function () {
    removeActive(allButton, pfizerButton, modernaButton, janssenButton);
    addActive(allButton);
    slider.value = 0;
    slider.max = 20;
    combinedDataMap();
  });
  pfizerButton.addEventListener("click", function () {
    removeActive(allButton, pfizerButton, modernaButton, janssenButton);
    addActive(pfizerButton);
    slider.value = 0;
    slider.max = 20;
    singleMap(_js_api_util__WEBPACK_IMPORTED_MODULE_3__["pfizerAPI"]);
  });
  modernaButton.addEventListener("click", function () {
    removeActive(allButton, pfizerButton, modernaButton, janssenButton);
    addActive(modernaButton);
    slider.value = 0;
    slider.max = 18;
    singleMap(_js_api_util__WEBPACK_IMPORTED_MODULE_3__["modernaAPI"]);
  });
  janssenButton.addEventListener("click", function () {
    removeActive(allButton, pfizerButton, modernaButton, janssenButton);
    addActive(janssenButton);
    slider.value = 0;
    slider.max = 5;
    singleMap(_js_api_util__WEBPACK_IMPORTED_MODULE_3__["janssenAPI"]);
  });
  slider.addEventListener("change", function () {
    if (allButton.classList[1]) {
      combinedDataMap(slider.value);
    } else {
      singleMap(selectedManufacturer(pfizerButton, _js_api_util__WEBPACK_IMPORTED_MODULE_3__["pfizerAPI"], modernaButton, _js_api_util__WEBPACK_IMPORTED_MODULE_3__["modernaAPI"], janssenButton, _js_api_util__WEBPACK_IMPORTED_MODULE_3__["janssenAPI"]), slider.value);
    }
  });
  slider.value = 0;
  slider.max = 19;
  combinedDataMap();
});

function newMap(apiData) {
  var mapParent = document.querySelector(".usa-map");
  var map = document.querySelector("#map");
  var newMap = document.createElement("div");
  newMap.id = "map";
  newMap.className = "map";
  map.parentNode.removeChild(map);
  mapParent.appendChild(newMap); // debugger;

  Object(_js_draw_map__WEBPACK_IMPORTED_MODULE_2__["drawMap"])(apiData);
}

function singleMap(_x, _x2) {
  return _singleMap.apply(this, arguments);
}

function _singleMap() {
  _singleMap = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(apiData, week) {
    var manufacturerData, formattedData;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            manufacturerData = [];
            _context.prev = 1;
            _context.next = 4;
            return apiData();

          case 4:
            manufacturerData = _context.sent;
            _context.next = 11;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](1);
            console.log("Error");
            console.log(_context.t0);

          case 11:
            if (week) {
              formattedData = Object(_js_format_data_weekly__WEBPACK_IMPORTED_MODULE_5__["formatDataWeekly"])(manufacturerData, week);
            } else {
              formattedData = Object(_js_format_data__WEBPACK_IMPORTED_MODULE_4__["formatData"])(manufacturerData);
            }

            newMap(formattedData);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 7]]);
  }));
  return _singleMap.apply(this, arguments);
}

function combinedDataMap(_x3) {
  return _combinedDataMap.apply(this, arguments);
}

function _combinedDataMap() {
  _combinedDataMap = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(week) {
    var pfizerData, modernaData, janssenData, total, formattedData;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            pfizerData = [];
            modernaData = [];
            janssenData = [];
            _context2.prev = 3;
            _context2.next = 6;
            return Object(_js_api_util__WEBPACK_IMPORTED_MODULE_3__["pfizerAPI"])();

          case 6:
            pfizerData = _context2.sent;
            _context2.next = 9;
            return Object(_js_api_util__WEBPACK_IMPORTED_MODULE_3__["modernaAPI"])();

          case 9:
            modernaData = _context2.sent;
            _context2.next = 12;
            return Object(_js_api_util__WEBPACK_IMPORTED_MODULE_3__["janssenAPI"])();

          case 12:
            janssenData = _context2.sent;
            _context2.next = 19;
            break;

          case 15:
            _context2.prev = 15;
            _context2.t0 = _context2["catch"](3);
            console.log("Error");
            console.log(_context2.t0);

          case 19:
            total = pfizerData.concat(modernaData).concat(janssenData);

            if (week) {
              formattedData = Object(_js_format_data_weekly__WEBPACK_IMPORTED_MODULE_5__["formatDataWeekly"])(total, week);
            } else {
              formattedData = Object(_js_format_data__WEBPACK_IMPORTED_MODULE_4__["formatData"])(total);
            }

            newMap(formattedData);

          case 22:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[3, 15]]);
  }));
  return _combinedDataMap.apply(this, arguments);
}

function addActive(button) {
  button.classList.add("active");
}

function removeActive(allButton, pfizerButton, modernaButton, janssenButton) {
  if (allButton.classList[1]) {
    allButton.classList.remove("active");
  } else if (pfizerButton.classList[1]) {
    pfizerButton.classList.remove("active");
  } else if (modernaButton.classList[1]) {
    modernaButton.classList.remove("active");
  } else if (janssenButton.classList[1]) {
    janssenButton.classList.remove("active");
  }
}

function selectedManufacturer(pfizerButton, pfizerAPI, modernaButton, modernaAPI, janssenButton, janssenAPI) {
  if (pfizerButton.classList[1]) {
    return pfizerAPI;
  } else if (modernaButton.classList[1]) {
    return modernaAPI;
  } else if (janssenButton.classList[1]) {
    return janssenAPI;
  }
} // Scroller/Slider variables


var inputValue = null;
var week = ["04/12/2021", "04/05/2021", "03/29/2021", "03/22/2021", "03/15/2021", "03/08/2021", "03/01/2021", "02/22/2021", "02/15/2021", "02/08/2021", "02/01/2021", "01/25/2021", "01/18/2021", "01/11/2021", "01/04/2021", "12/28/2020"];

/***/ }),

/***/ "./src/js/add_big_cities.js":
/*!**********************************!*\
  !*** ./src/js/add_big_cities.js ***!
  \**********************************/
/*! exports provided: addBigCitiesToStates */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addBigCitiesToStates", function() { return addBigCitiesToStates; });
var addBigCitiesToStates = function addBigCitiesToStates(stateTotal) {
  var Philly = stateTotal["Philadelphia"];
  var PA = stateTotal["PA"];
  PA._1st_dose_allocations += Philly._1st_dose_allocations;
  PA._2nd_dose_allocations += Philly._2nd_dose_allocations;
  var NYC = stateTotal["New York City"];
  var NY = stateTotal["NY"];
  NY._1st_dose_allocations += NYC._1st_dose_allocations;
  NY._2nd_dose_allocations += NYC._2nd_dose_allocations;
  var Chicago = stateTotal["Chicago"];
  var IL = stateTotal["IL"];
  IL._1st_dose_allocations += Chicago._1st_dose_allocations;
  IL._2nd_dose_allocations += Chicago._2nd_dose_allocations;
};

/***/ }),

/***/ "./src/js/api_util.js":
/*!****************************!*\
  !*** ./src/js/api_util.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var AppToken = __webpack_require__(/*! ./secret */ "./src/js/secret.js"); // const pfizerAPI = fetch(
//   `https://data.cdc.gov/resource/saz5-9hgg.json?$$app_token=${AppToken}&$limit=5000`
// ).then((res) => {
//   if (!res.ok) {
//     throw Error("Api call unsuccessful");
//   } else {
//     // alert("Received Pfizer");
//     return res.json();
//   }
// });


function pfizerAPI() {
  return _pfizerAPI.apply(this, arguments);
}

function _pfizerAPI() {
  _pfizerAPI = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch("https://data.cdc.gov/resource/saz5-9hgg.json?$$app_token=".concat(AppToken, "&$limit=5000"));

          case 2:
            return _context.abrupt("return", _context.sent.json());

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _pfizerAPI.apply(this, arguments);
}

function modernaAPI() {
  return _modernaAPI.apply(this, arguments);
}

function _modernaAPI() {
  _modernaAPI = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return fetch("https://data.cdc.gov/resource/b7pe-5nws.json?$$app_token=".concat(AppToken, "&$limit=5000"));

          case 2:
            return _context2.abrupt("return", _context2.sent.json());

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _modernaAPI.apply(this, arguments);
}

function janssenAPI() {
  return _janssenAPI.apply(this, arguments);
} // const modernaAPI = fetch(
//   `https://data.cdc.gov/resource/b7pe-5nws.json?$$app_token=${AppToken}&$limit=5000`
// ).then((res) => {
//   if (!res.ok) {
//     throw Error("Api call unsuccessful");
//   } else {
//     // alert("Received Moderna");
//     return res.json();
//   }
// });
// const janssenAPI = fetch(
//   `https://data.cdc.gov/resource/w9zu-fywh.json?$$app_token=${AppToken}&$limit=5000`
// ).then((res) => {
//   if (!res.ok) {
//     throw Error("Api call unsuccessful");
//   } else {
//     // alert("Received Janssen");
//     return res.json();
//   }
// });


function _janssenAPI() {
  _janssenAPI = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return fetch("https://data.cdc.gov/resource/w9zu-fywh.json?$$app_token=".concat(AppToken, "&$limit=5000"));

          case 2:
            return _context3.abrupt("return", _context3.sent.json());

          case 3:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _janssenAPI.apply(this, arguments);
}

module.exports = {
  pfizerAPI: pfizerAPI,
  modernaAPI: modernaAPI,
  janssenAPI: janssenAPI
}; // module.exports = { pfizerAPI };

/***/ }),

/***/ "./src/js/calculate_fill.js":
/*!**********************************!*\
  !*** ./src/js/calculate_fill.js ***!
  \**********************************/
/*! exports provided: calculateFill */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateFill", function() { return calculateFill; });
var calculateFill = function calculateFill(numDoses) {
  if (numDoses >= 6000000) {
    return "6000000";
  } else if (numDoses < 6000000 && numDoses >= 5000000) {
    return "5000000";
  } else if (numDoses < 5000000 && numDoses >= 4000000) {
    return "4000000";
  } else if (numDoses < 4000000 && numDoses >= 3500000) {
    return "3500000";
  } else if (numDoses < 3500000 && numDoses >= 3000000) {
    return "3000000";
  } else if (numDoses < 3000000 && numDoses >= 2500000) {
    return "2500000";
  } else if (numDoses < 2500000 && numDoses >= 2000000) {
    return "2000000";
  } else if (numDoses < 2000000 && numDoses >= 1800000) {
    return "1800000";
  } else if (numDoses < 1800000 && numDoses >= 1600000) {
    return "1600000";
  } else if (numDoses < 1600000 && numDoses >= 1500000) {
    return "1500000";
  } else if (numDoses < 1500000 && numDoses >= 1400000) {
    return "1400000";
  } else if (numDoses < 1400000 && numDoses >= 1300000) {
    return "1300000";
  } else if (numDoses < 1300000 && numDoses >= 1200000) {
    return "1200000";
  } else if (numDoses < 1200000 && numDoses >= 1100000) {
    return "1100000";
  } else if (numDoses < 1100000 && numDoses >= 1000000) {
    return "1000000";
  } else if (numDoses < 1000000 && numDoses >= 950000) {
    return "950000";
  } else if (numDoses < 950000 && numDoses >= 900000) {
    return "900000";
  } else if (numDoses < 900000 && numDoses >= 850000) {
    return "850000";
  } else if (numDoses < 850000 && numDoses >= 800000) {
    return "800000";
  } else if (numDoses < 800000 && numDoses >= 750000) {
    return "750000";
  } else if (numDoses < 750000 && numDoses >= 700000) {
    return "700000";
  } else if (numDoses < 700000 && numDoses >= 650000) {
    return "650000";
  } else if (numDoses < 650000 && numDoses >= 600000) {
    return "600000";
  } else if (numDoses < 600000 && numDoses >= 550000) {
    return "550000";
  } else if (numDoses < 550000 && numDoses >= 500000) {
    return "500000";
  } else if (numDoses < 500000 && numDoses >= 450000) {
    return "450000";
  } else if (numDoses < 450000 && numDoses >= 400000) {
    return "400000";
  } else if (numDoses < 400000 && numDoses >= 350000) {
    return "350000";
  } else if (numDoses < 350000 && numDoses >= 300000) {
    return "300000";
  } else if (numDoses < 300000 && numDoses >= 250000) {
    return "250000";
  } else if (numDoses < 250000 && numDoses >= 200000) {
    return "200000";
  } else if (numDoses < 200000 && numDoses >= 180000) {
    return "180000";
  } else if (numDoses < 180000 && numDoses >= 160000) {
    return "160000";
  } else if (numDoses < 160000 && numDoses >= 150000) {
    return "150000";
  } else if (numDoses < 150000 && numDoses >= 140000) {
    return "140000";
  } else if (numDoses < 140000 && numDoses >= 130000) {
    return "130000";
  } else if (numDoses < 130000 && numDoses >= 120000) {
    return "120000";
  } else if (numDoses < 120000 && numDoses >= 110000) {
    return "110000";
  } else if (numDoses < 110000 && numDoses >= 100000) {
    return "100000";
  } else if (numDoses < 100000 && numDoses >= 90000) {
    return "90000";
  } else if (numDoses < 90000 && numDoses >= 80000) {
    return "80000";
  } else if (numDoses < 80000 && numDoses >= 70000) {
    return "70000";
  } else if (numDoses < 70000 && numDoses >= 60000) {
    return "60000";
  } else {
    return "defaultFill";
  }
};

/***/ }),

/***/ "./src/js/colors.js":
/*!**************************!*\
  !*** ./src/js/colors.js ***!
  \**************************/
/*! exports provided: colors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colors", function() { return colors; });
var colors = {
  6000000: "rgb(0,50,0)",
  5000000: "rgb(0,55,0)",
  4000000: "rgb(0,60,0)",
  3500000: "rgb(0,70,0)",
  3000000: "rgb(0,80,0)",
  2500000: "rgb(0,90,0)",
  2000000: "rgb(0,100,0)",
  1800000: "rgb(0,110,0)",
  1600000: "rgb(0,120,0)",
  1500000: "rgb(0,130,0)",
  1400000: "rgb(0,140,0)",
  1300000: "rgb(0,150,0)",
  1200000: "rgb(0,155,0)",
  1100000: "rgb(0,160,0)",
  1000000: "rgb(0,165,0)",
  950000: "rgb(0,170,0)",
  900000: "rgb(0,175,0)",
  850000: "rgb(0,180,0)",
  800000: "rgb(0,185,0)",
  750000: "rgb(0,190,0)",
  700000: "rgb(0,195,0)",
  650000: "rgb(0,200,0)",
  600000: "rgb(0,205,0)",
  550000: "rgb(0,210,0)",
  500000: "rgb(0,215,0)",
  450000: "rgb(0,220,0)",
  400000: "rgb(0,225,0)",
  350000: "rgb(0,230,0)",
  300000: "rgb(0,235,0)",
  250000: "rgb(0,240,0)",
  200000: "rgb(0,242,0)",
  180000: "rgb(0,244,0)",
  160000: "rgb(0,245,0)",
  150000: "rgb(0,246,0)",
  140000: "rgb(0,247,0)",
  130000: "rgb(0,248,0)",
  120000: "rgb(0,249,0)",
  110000: "rgb(0,250,0)",
  100000: "rgb(0,251,0)",
  90000: "rgb(0,252,0)",
  80000: "rgb(0,253,0)",
  70000: "rgb(0,254,0)",
  60000: "rgb(0,255,0)",
  defaultFill: "gray"
};

/***/ }),

/***/ "./src/js/draw_map.js":
/*!****************************!*\
  !*** ./src/js/draw_map.js ***!
  \****************************/
/*! exports provided: drawMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawMap", function() { return drawMap; });
var _require = __webpack_require__(/*! ./format_num */ "./src/js/format_num.js"),
    formatNumber = _require.formatNumber;

var _require2 = __webpack_require__(/*! ./colors */ "./src/js/colors.js"),
    colors = _require2.colors;

var drawMap = function drawMap(apiData) {
  var stateTotal = apiData;
  var weekElement = document.getElementById("week");
  var dateObj = new Date(apiData.week);
  var fullDate = dateObj.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  if (apiData.allData) {
    weekElement.innerText = "Uptil week of ".concat(fullDate);
  } else {
    weekElement.innerText = "Week of ".concat(fullDate);
  }

  var map = new Datamap({
    scope: "usa",
    element: document.getElementById("map"),
    responsive: true,
    geographyConfig: {
      highlightBorderColor: "rgb(59, 177, 255)",
      popupTemplate: function popupTemplate(geo) {
        // if (!stateTotal[[geo.id]]._2nd_dose_allocations) {
        //   return [
        //     '<div class="hoverinfo"><strong>',
        //     '<p class="state-name"><strong>',
        //     geo.properties.name,
        //     "</strong></p>",
        //     '<p class="green-text"><strong>',
        //     " 1st Dose " +
        //       formatNumber(stateTotal[geo.id]._1st_dose_allocations),
        //     "</strong></p>",
        //     "</strong></div>",
        //   ].join("");
        // } else {
        return ['<div class="hoverinfo"><strong>', '<p class="state-name"><strong>', geo.properties.name, "</strong></p>", '<p class="green-text"><strong>', " 1st Dose " + formatNumber(stateTotal[geo.id]._1st_dose_allocations), "</strong></p>", '<p class="blue-text"><strong>', " 2nd Dose " + formatNumber(stateTotal[geo.id]._2nd_dose_allocations), "</strong></div>"].join(""); // }
      },
      highlightBorderWidth: 2
    },
    fills: colors,
    data: stateTotal
  });
  map.labels({
    labelColor: "white",
    fontFamily: "Roboto",
    fontSize: 12
  });
};

/***/ }),

/***/ "./src/js/format_data.js":
/*!*******************************!*\
  !*** ./src/js/format_data.js ***!
  \*******************************/
/*! exports provided: formatData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatData", function() { return formatData; });
var _require = __webpack_require__(/*! ./state_Initials */ "./src/js/state_Initials.js"),
    stateInitials = _require.stateInitials;

var _require2 = __webpack_require__(/*! ./calculate_fill */ "./src/js/calculate_fill.js"),
    calculateFill = _require2.calculateFill;

var _require3 = __webpack_require__(/*! ./add_big_cities */ "./src/js/add_big_cities.js"),
    addBigCitiesToStates = _require3.addBigCitiesToStates;

var formatData = function formatData(apiData) {
  var stateTotal = {};
  apiData.forEach(function (state) {
    var stateName;

    if (stateInitials[state.jurisdiction]) {
      stateName = stateInitials[state.jurisdiction];
    } else {
      stateName = state.jurisdiction;
    }

    if (Object.values(stateTotal).length !== 63) {
      stateTotal[stateName] = {
        _1st_dose_allocations: Number(state._1st_dose_allocations),
        _2nd_dose_allocations: Number(state._2nd_dose_allocations) || 0,
        week_of_allocations: state.week_of_allocations,
        jurisdiction: state.jurisdiction
      };
      stateTotal[stateName].fillKey = calculateFill(stateTotal[stateName]._1st_dose_allocations);
    } else {
      stateTotal[stateName]._1st_dose_allocations += Number(state._1st_dose_allocations);
      stateTotal[stateName]._2nd_dose_allocations += Number(state._2nd_dose_allocations || 0);
      stateTotal[stateName].fillKey = calculateFill(stateTotal[stateName]._1st_dose_allocations);
    }
  });
  addBigCitiesToStates(stateTotal);
  stateTotal["week"] = apiData[0].week_of_allocations;
  stateTotal["allData"] = false;

  if (apiData.length >= 190) {
    stateTotal.allData = true;
  }

  return stateTotal;
};

/***/ }),

/***/ "./src/js/format_data_weekly.js":
/*!**************************************!*\
  !*** ./src/js/format_data_weekly.js ***!
  \**************************************/
/*! exports provided: formatDataWeekly */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDataWeekly", function() { return formatDataWeekly; });
var _require = __webpack_require__(/*! ./format_data */ "./src/js/format_data.js"),
    formatData = _require.formatData;

var formatDataWeekly = function formatDataWeekly(total, week) {
  var stateTotalWeekly = {};
  var combined = [];
  var start = 0;

  if (week > 0) {
    start = week * 63;
  }

  var currentWeek = total.slice(start, start + 1)[0].week_of_allocations;
  total.forEach(function (state) {
    if (state.week_of_allocations === currentWeek) {
      combined.push(state);
    }
  });
  stateTotalWeekly = formatData(combined);
  return stateTotalWeekly;
};

/***/ }),

/***/ "./src/js/format_num.js":
/*!******************************!*\
  !*** ./src/js/format_num.js ***!
  \******************************/
/*! exports provided: formatNumber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatNumber", function() { return formatNumber; });
var formatNumber = function formatNumber(num) {
  var convert = num;
  var decimal = Math.abs(convert).toFixed(0);
  var nums = decimal.toString();
  nums = decimal.toString().split(".");
  nums[0] = nums[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  var converted = "".concat(nums.join("."));
  return converted;
};

/***/ }),

/***/ "./src/js/secret.js":
/*!**************************!*\
  !*** ./src/js/secret.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "RpbrJLtrCYzo88hfJBLeg2fyB";

/***/ }),

/***/ "./src/js/state_Initials.js":
/*!**********************************!*\
  !*** ./src/js/state_Initials.js ***!
  \**********************************/
/*! exports provided: stateInitials */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stateInitials", function() { return stateInitials; });
var stateInitials = {
  Alabama: "AL",
  Alaska: "AK",
  "American Samoa": "AS",
  Arizona: "AZ",
  Arkansas: "AR",
  California: "CA",
  // Chicago: "IL",
  Colorado: "CO",
  Connecticut: "CT",
  Delaware: "DE",
  "District of Columbia": "DC",
  "Federated States Of Micronesia": "FM",
  Florida: "FL",
  Georgia: "GA",
  Guam: "GU",
  Hawaii: "HI",
  Idaho: "ID",
  Illinois: "IL",
  Indiana: "IN",
  Iowa: "IA",
  Kansas: "KS",
  Kentucky: "KY",
  Louisiana: "LA",
  Maine: "ME",
  "Marshall Islands": "MH",
  Maryland: "MD",
  Massachusetts: "MA",
  Michigan: "MI",
  Minnesota: "MN",
  Mississippi: "MS",
  Missouri: "MO",
  Montana: "MT",
  Nebraska: "NE",
  Nevada: "NV",
  "New Hampshire": "NH",
  "New Jersey": "NJ",
  "New Mexico": "NM",
  // "New York City": "NY",
  "New York": "NY",
  "North Carolina": "NC",
  "North Dakota": "ND",
  "Northern Mariana Islands": "MP",
  Ohio: "OH",
  Oklahoma: "OK",
  Oregon: "OR",
  Palau: "PW",
  Pennsylvania: "PA",
  // Philadelphia: "PA",
  "Puerto Rico": "PR",
  "Rhode Island": "RI",
  "South Carolina": "SC",
  "South Dakota": "SD",
  Tennessee: "TN",
  Texas: "TX",
  Utah: "UT",
  Vermont: "VT",
  "Virgin Islands": "VI",
  Virginia: "VA",
  Washington: "WA",
  "West Virginia": "WV",
  Wisconsin: "WI",
  Wyoming: "WY"
};

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FkZF9iaWdfY2l0aWVzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9hcGlfdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY2FsY3VsYXRlX2ZpbGwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZHJhd19tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2Zvcm1hdF9kYXRhLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9mb3JtYXRfZGF0YV93ZWVrbHkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2Zvcm1hdF9udW0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3NlY3JldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc3RhdGVfSW5pdGlhbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1vZGFsQnV0dG9uIiwicXVlcnlTZWxlY3RvciIsImFsbEJ1dHRvbiIsInBmaXplckJ1dHRvbiIsIm1vZGVybmFCdXR0b24iLCJqYW5zc2VuQnV0dG9uIiwic2xpZGVyIiwibW9kYWwiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmVBY3RpdmUiLCJhZGRBY3RpdmUiLCJ2YWx1ZSIsIm1heCIsImNvbWJpbmVkRGF0YU1hcCIsInNpbmdsZU1hcCIsInBmaXplckFQSSIsIm1vZGVybmFBUEkiLCJqYW5zc2VuQVBJIiwic2VsZWN0ZWRNYW51ZmFjdHVyZXIiLCJuZXdNYXAiLCJhcGlEYXRhIiwibWFwUGFyZW50IiwibWFwIiwiY3JlYXRlRWxlbWVudCIsImlkIiwiY2xhc3NOYW1lIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiYXBwZW5kQ2hpbGQiLCJkcmF3TWFwIiwid2VlayIsIm1hbnVmYWN0dXJlckRhdGEiLCJjb25zb2xlIiwibG9nIiwiZm9ybWF0dGVkRGF0YSIsImZvcm1hdERhdGFXZWVrbHkiLCJmb3JtYXREYXRhIiwicGZpemVyRGF0YSIsIm1vZGVybmFEYXRhIiwiamFuc3NlbkRhdGEiLCJ0b3RhbCIsImNvbmNhdCIsImJ1dHRvbiIsInJlbW92ZSIsImlucHV0VmFsdWUiLCJhZGRCaWdDaXRpZXNUb1N0YXRlcyIsInN0YXRlVG90YWwiLCJQaGlsbHkiLCJQQSIsIl8xc3RfZG9zZV9hbGxvY2F0aW9ucyIsIl8ybmRfZG9zZV9hbGxvY2F0aW9ucyIsIk5ZQyIsIk5ZIiwiQ2hpY2FnbyIsIklMIiwiQXBwVG9rZW4iLCJyZXF1aXJlIiwiZmV0Y2giLCJqc29uIiwibW9kdWxlIiwiZXhwb3J0cyIsImNhbGN1bGF0ZUZpbGwiLCJudW1Eb3NlcyIsImNvbG9ycyIsImRlZmF1bHRGaWxsIiwiZm9ybWF0TnVtYmVyIiwid2Vla0VsZW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImRhdGVPYmoiLCJEYXRlIiwiZnVsbERhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJ1bmRlZmluZWQiLCJ5ZWFyIiwibW9udGgiLCJkYXkiLCJhbGxEYXRhIiwiaW5uZXJUZXh0IiwiRGF0YW1hcCIsInNjb3BlIiwiZWxlbWVudCIsInJlc3BvbnNpdmUiLCJnZW9ncmFwaHlDb25maWciLCJoaWdobGlnaHRCb3JkZXJDb2xvciIsInBvcHVwVGVtcGxhdGUiLCJnZW8iLCJwcm9wZXJ0aWVzIiwibmFtZSIsImpvaW4iLCJoaWdobGlnaHRCb3JkZXJXaWR0aCIsImZpbGxzIiwiZGF0YSIsImxhYmVscyIsImxhYmVsQ29sb3IiLCJmb250RmFtaWx5IiwiZm9udFNpemUiLCJzdGF0ZUluaXRpYWxzIiwiZm9yRWFjaCIsInN0YXRlIiwic3RhdGVOYW1lIiwianVyaXNkaWN0aW9uIiwiT2JqZWN0IiwidmFsdWVzIiwibGVuZ3RoIiwiTnVtYmVyIiwid2Vla19vZl9hbGxvY2F0aW9ucyIsImZpbGxLZXkiLCJzdGF0ZVRvdGFsV2Vla2x5IiwiY29tYmluZWQiLCJzdGFydCIsImN1cnJlbnRXZWVrIiwic2xpY2UiLCJwdXNoIiwibnVtIiwiY29udmVydCIsImRlY2ltYWwiLCJNYXRoIiwiYWJzIiwidG9GaXhlZCIsIm51bXMiLCJ0b1N0cmluZyIsInNwbGl0IiwicmVwbGFjZSIsImNvbnZlcnRlZCIsIkFsYWJhbWEiLCJBbGFza2EiLCJBcml6b25hIiwiQXJrYW5zYXMiLCJDYWxpZm9ybmlhIiwiQ29sb3JhZG8iLCJDb25uZWN0aWN1dCIsIkRlbGF3YXJlIiwiRmxvcmlkYSIsIkdlb3JnaWEiLCJHdWFtIiwiSGF3YWlpIiwiSWRhaG8iLCJJbGxpbm9pcyIsIkluZGlhbmEiLCJJb3dhIiwiS2Fuc2FzIiwiS2VudHVja3kiLCJMb3Vpc2lhbmEiLCJNYWluZSIsIk1hcnlsYW5kIiwiTWFzc2FjaHVzZXR0cyIsIk1pY2hpZ2FuIiwiTWlubmVzb3RhIiwiTWlzc2lzc2lwcGkiLCJNaXNzb3VyaSIsIk1vbnRhbmEiLCJOZWJyYXNrYSIsIk5ldmFkYSIsIk9oaW8iLCJPa2xhaG9tYSIsIk9yZWdvbiIsIlBhbGF1IiwiUGVubnN5bHZhbmlhIiwiVGVubmVzc2VlIiwiVGV4YXMiLCJVdGFoIiwiVmVybW9udCIsIlZpcmdpbmlhIiwiV2FzaGluZ3RvbiIsIldpc2NvbnNpbiIsIld5b21pbmciXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0I7O0FBRWhCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlEO0FBQ2pEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDO0FBQ3RDOztBQUVBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsMENBQTBDO0FBQzFDOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNkdBQTZHO0FBQzdHOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVc7QUFDbkQ7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7O0FBR0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsd0NBQXdDO0FBQ3hDLDJCQUEyQjtBQUMzQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Qsb0NBQW9DO0FBQ3BDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsb0NB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LE1BRUEsSUFBSUEsUUFBUSxHQUFHLE9BQVgsSUFBc0JBLFFBQVEsSUFBSSxPQUF0QyxFQUErQztBQUNwRCxXQUFPLFNBQVA7QUFDRCxHQUZNLE1BRUEsSUFBSUEsUUFBUSxHQUFHLE9BQVgsSUFBc0JBLFFBQVEsSUFBSSxPQUF0QyxFQUErQztBQUNwRCxXQUFPLFNBQVA7QUFDRCxHQUZNLE1BRUEsSUFBSUEsUUFBUSxHQUFHLE9BQVgsSUFBc0JBLFFBQVEsSUFBSSxPQUF0QyxFQUErQztBQUNwRCxXQUFPLFNBQVA7QUFDRCxHQUZNLE1BRUEsSUFBSUEsUUFBUSxHQUFHLE9BQVgsSUFBc0JBLFFBQVEsSUFBSSxPQUF0QyxFQUErQztBQUNwRCxXQUFPLFNBQVA7QUFDRCxHQUZNLE1BRUEsSUFBSUEsUUFBUSxHQUFHLE9BQVgsSUFBc0JBLFFBQVEsSUFBSSxNQUF0QyxFQUE4QztBQUNuRCxXQUFPLFFBQVA7QUFDRCxHQUZNLE1BRUEsSUFBSUEsUUFBUSxHQUFHLE1BQVgsSUFBcUJBLFFBQVEsSUFBSSxNQUFyQyxFQUE2QztBQUNsRCxXQUFPLFFBQVA7QUFDRCxHQUZNLE1BRUEsSUFBSUEsUUFBUSxHQUFHLE1BQVgsSUFBcUJBLFFBQVEsSUFBSSxNQUFyQyxFQUE2QztBQUNsRCxXQUFPLFFBQVA7QUFDRCxHQUZNLE1BRUEsSUFBSUEsUUFBUSxHQUFHLE1BQVgsSUFBcUJBLFFBQVEsSUFBSSxNQUFyQyxFQUE2QztBQUNsRCxXQUFPLFFBQVA7QUFDRCxHQUZNLE1BRUEsSUFBSUEsUUFBUSxHQUFHLE1BQVgsSUFBcUJBLFFBQVEsSUFBSSxNQUFyQyxFQUE2QztBQUNsRCxXQUFPLFFBQVA7QUFDRCxHQUZNLE1BRUEsSUFBSUEsUUFBUSxHQUFHLE1BQVgsSUFBcUJBLFFBQVEsSUFBSSxNQUFyQyxFQUE2QztBQUNsRCxXQUFPLFFBQVA7QUFDRCxHQUZNLE1BRUEsSUFBSUEsUUFBUSxHQUFHLE1BQVgsSUFBcUJBLFFBQVEsSUFBSSxNQUFyQyxFQUE2QztBQUNsRCxXQUFPLFFBQVA7QUFDRCxHQUZNLE1BRUEsSUFBSUEsUUFBUSxHQUFHLE1BQVgsSUFBcUJBLFFBQVEsSUFBSSxNQUFyQyxFQUE2QztBQUNsRCxXQUFPLFFBQVA7QUFDRCxHQUZNLE1BRUEsSUFBSUEsUUFBUSxHQUFHLE1BQVgsSUFBcUJBLFFBQVEsSUFBSSxNQUFyQyxFQUE2QztBQUNsRCxXQUFPLFFBQVA7QUFDRCxHQUZNLE1BRUEsSUFBSUEsUUFBUSxHQUFHLE1BQVgsSUFBcUJBLFFBQVEsSUFBSSxNQUFyQyxFQUE2QztBQUNsRCxXQUFPLFFBQVA7QUFDRCxHQUZNLE1BRUEsSUFBSUEsUUFBUSxHQUFHLE1BQVgsSUFBcUJBLFFBQVEsSUFBSSxNQUFyQyxFQUE2QztBQUNsRCxXQUFPLFFBQVA7QUFDRCxHQUZNLE1BRUEsSUFBSUEsUUFBUSxHQUFHLE1BQVgsSUFBcUJBLFFBQVEsSUFBSSxNQUFyQyxFQUE2QztBQUNsRCxXQUFPLFFBQVA7QUFDRCxHQUZNLE1BRUEsSUFBSUEsUUFBUSxHQUFHLE1BQVgsSUFBcUJBLFFBQVEsSUFBSSxNQUFyQyxFQUE2QztBQUNsRCxXQUFPLFFBQVA7QUFDRCxHQUZNLE1BRUEsSUFBSUEsUUFBUSxHQUFHLE1BQVgsSUFBcUJBLFFBQVEsSUFBSSxNQUFyQyxFQUE2QztBQUNsRCxXQUFPLFFBQVA7QUFDRCxHQUZNLE1BRUEsSUFBSUEsUUFBUSxHQUFHLE1BQVgsSUFBcUJBLFFBQVEsSUFBSSxNQUFyQyxFQUE2QztBQUNsRCxXQUFPLFFBQVA7QUFDRCxHQUZNLE1BRUEsSUFBSUEsUUFBUSxHQUFHLE1BQVgsSUFBcUJBLFFBQVEsSUFBSSxNQUFyQyxFQUE2QztBQUNsRCxXQUFPLFFBQVA7QUFDRCxHQUZNLE1BRUEsSUFBSUEsUUFBUSxHQUFHLE1BQVgsSUFBcUJBLFFBQVEsSUFBSSxNQUFyQyxFQUE2QztBQUNsRCxXQUFPLFFBQVA7QUFDRCxHQUZNLE1BRUEsSUFBSUEsUUFBUSxHQUFHLE1BQVgsSUFBcUJBLFFBQVEsSUFBSSxNQUFyQyxFQUE2QztBQUNsRCxXQUFPLFFBQVA7QUFDRCxHQUZNLE1BRUEsSUFBSUEsUUFBUSxH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RUFBRSxJQTlCYztBQStCM0JDLFVBQVEsRUFBRSxJQS9CaUI7QUFnQzNCQyxTQUFPLEVBQUUsSUFoQ2tCO0FBaUMzQkMsVUFBUSxFQUFFLElBakNpQjtBQWtDM0JDLFFBQU0sRUFBRSxJQWxDbUI7QUFtQzNCLG1CQUFpQixJQW5DVTtBQW9DM0IsZ0JBQWMsSUFwQ2E7QUFxQzNCLGdCQUFjLElBckNhO0FBc0MzQjtBQUNBLGNBQVksSUF2Q2U7QUF3QzNCLG9CQUFrQixJQXhDUztBQXlDM0Isa0JBQWdCLElBekNXO0FBMEMzQiw4QkFBNEIsSUExQ0Q7QUEyQzNCQyxNQUFJLEVBQUUsSUEzQ3FCO0FBNEMzQkMsVUFBUSxFQUFFLElBNUNpQjtBQTZDM0JDLFFBQU0sRUFBRSxJQTdDbUI7QUE4QzNCQyxPQUFLLEVBQUUsSUE5Q29CO0FBK0MzQkMsY0FBWSxFQUFFLElBL0NhO0FBZ0QzQjtBQUNBLGlCQUFlLElBakRZO0FBa0QzQixrQkFBZ0IsSUFsRFc7QUFtRDNCLG9CQUFrQixJQW5EUztBQW9EM0Isa0JBQWdCLElBcERXO0FBcUQzQkMsV0FBUyxFQUFFLElBckRnQjtBQXNEM0JDLE9BQUssRUFBRSxJQXREb0I7QUF1RDNCQyxNQUFJLEVBQUUsSUF2RHFCO0FBd0QzQkMsU0FBTyxFQUFFLElBeERrQjtBQXlEM0Isb0JBQWtCLElBekRTO0FBMEQzQkMsVUFBUSxFQUFFLElBMURpQjtBQTJEM0JDLFlBQVUsRUFBRSxJQTNEZTtBQTREM0IsbUJBQWlCLElBNURVO0FBNkQzQkMsV0FBUyxFQUFFLElBN0RnQjtBQThEM0JDLFNBQU8sRUFBRTtBQTlEa0IsQ0FBdEIsQzs7Ozs7Ozs7Ozs7O0FDQVA7QUFBQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG52YXIgcnVudGltZSA9IGZ1bmN0aW9uIChleHBvcnRzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICBmdW5jdGlvbiBkZWZpbmUob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gb2JqW2tleV07XG4gIH1cblxuICB0cnkge1xuICAgIC8vIElFIDggaGFzIGEgYnJva2VuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSB0aGF0IG9ubHkgd29ya3Mgb24gRE9NIG9iamVjdHMuXG4gICAgZGVmaW5lKHt9LCBcIlwiKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgZGVmaW5lID0gZnVuY3Rpb24gKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIG9ialtrZXldID0gdmFsdWU7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pOyAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cblxuICBleHBvcnRzLndyYXAgPSB3cmFwOyAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFwibm9ybWFsXCIsXG4gICAgICAgIGFyZzogZm4uY2FsbChvYmosIGFyZylcbiAgICAgIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBcInRocm93XCIsXG4gICAgICAgIGFyZzogZXJyXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjsgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTsgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge30gLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxuXG5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG5cbiAgSXRlcmF0b3JQcm90b3R5cGVbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuXG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJiBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiYgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPSBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdwLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XG4gIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gZGVmaW5lKEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JGdW5jdGlvblwiKTsgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cblxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24gKG1ldGhvZCkge1xuICAgICAgZGVmaW5lKHByb3RvdHlwZSwgbWV0aG9kLCBmdW5jdGlvbiAoYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbiAoZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHwgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCIgOiBmYWxzZTtcbiAgfTtcblxuICBleHBvcnRzLm1hcmsgPSBmdW5jdGlvbiAoZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBkZWZpbmUoZ2VuRnVuLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JGdW5jdGlvblwiKTtcbiAgICB9XG5cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTsgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cblxuXG4gIGV4cG9ydHMuYXdyYXAgPSBmdW5jdGlvbiAoYXJnKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIF9fYXdhaXQ6IGFyZ1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IsIFByb21pc2VJbXBsKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuXG4gICAgICAgIGlmICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiYgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uICh1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgIC8vIElmIGEgcmVqZWN0ZWQgUHJvbWlzZSB3YXMgeWllbGRlZCwgdGhyb3cgdGhlIHJlamVjdGlvbiBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBoYW5kbGVkIHRoZXJlLlxuICAgICAgICAgIHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCBlcnJvciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2VJbXBsKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID0gLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLCAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcpIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9IC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG5cblxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuXG4gIEFzeW5jSXRlcmF0b3IucHJvdG90eXBlW2FzeW5jSXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIGV4cG9ydHMuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7IC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuXG4gIGV4cG9ydHMuYXN5bmMgPSBmdW5jdGlvbiAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QsIFByb21pc2VJbXBsKSB7XG4gICAgaWYgKFByb21pc2VJbXBsID09PSB2b2lkIDApIFByb21pc2VJbXBsID0gUHJvbWlzZTtcbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpLCBQcm9taXNlSW1wbCk7XG4gICAgcmV0dXJuIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKSA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH0gLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuXG5cbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XG4gICAgICBjb250ZXh0LmFyZyA9IGFyZztcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcblxuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmUgPyBHZW5TdGF0ZUNvbXBsZXRlZCA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDsgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXG5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9IC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxuICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxuICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cblxuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuXG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcbiAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgLy8gTm90ZTogW1wicmV0dXJuXCJdIG11c3QgYmUgdXNlZCBmb3IgRVMzIHBhcnNpbmcgY29tcGF0aWJpbGl0eS5cbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yW1wicmV0dXJuXCJdKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTsgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jOyAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfSAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG5cblxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9IC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cblxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG4gIGRlZmluZShHcCwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yXCIpOyAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG5cbiAgR3BbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0ge1xuICAgICAgdHJ5TG9jOiBsb2NzWzBdXG4gICAgfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbe1xuICAgICAgdHJ5TG9jOiBcInJvb3RcIlxuICAgIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgZXhwb3J0cy5rZXlzID0gZnVuY3Rpb24gKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG5cbiAgICBrZXlzLnJldmVyc2UoKTsgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG5cbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9IC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuXG5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuXG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLFxuICAgICAgICAgICAgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfSAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG5cblxuICAgIHJldHVybiB7XG4gICAgICBuZXh0OiBkb25lUmVzdWx0XG4gICAgfTtcbiAgfVxuXG4gIGV4cG9ydHMudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB1bmRlZmluZWQsXG4gICAgICBkb25lOiB0cnVlXG4gICAgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuICAgIHJlc2V0OiBmdW5jdGlvbiAoc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7IC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBzdG9wOiBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbiAoZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuXG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISFjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uICh0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiYgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmICh0eXBlID09PSBcImJyZWFrXCIgfHwgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJiBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJiBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcbiAgICBjb21wbGV0ZTogZnVuY3Rpb24gKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8IHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuICAgIGZpbmlzaDogZnVuY3Rpb24gKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuXG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24gKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9IC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuXG5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uIChpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9OyAvLyBSZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlXG4gIC8vIG9yIG5vdCwgcmV0dXJuIHRoZSBydW50aW1lIG9iamVjdCBzbyB0aGF0IHdlIGNhbiBkZWNsYXJlIHRoZSB2YXJpYWJsZVxuICAvLyByZWdlbmVyYXRvclJ1bnRpbWUgaW4gdGhlIG91dGVyIHNjb3BlLCB3aGljaCBhbGxvd3MgdGhpcyBtb2R1bGUgdG8gYmVcbiAgLy8gaW5qZWN0ZWQgZWFzaWx5IGJ5IGBiaW4vcmVnZW5lcmF0b3IgLS1pbmNsdWRlLXJ1bnRpbWUgc2NyaXB0LmpzYC5cblxuICByZXR1cm4gZXhwb3J0cztcbn0oIC8vIElmIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZSwgdXNlIG1vZHVsZS5leHBvcnRzXG4vLyBhcyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIG5hbWVzcGFjZS4gT3RoZXJ3aXNlIGNyZWF0ZSBhIG5ldyBlbXB0eVxuLy8gb2JqZWN0LiBFaXRoZXIgd2F5LCB0aGUgcmVzdWx0aW5nIG9iamVjdCB3aWxsIGJlIHVzZWQgdG8gaW5pdGlhbGl6ZVxuLy8gdGhlIHJlZ2VuZXJhdG9yUnVudGltZSB2YXJpYWJsZSBhdCB0aGUgdG9wIG9mIHRoaXMgZmlsZS5cbnR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgPyBtb2R1bGUuZXhwb3J0cyA6IHt9KTtcblxudHJ5IHtcbiAgcmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbn0gY2F0Y2ggKGFjY2lkZW50YWxTdHJpY3RNb2RlKSB7XG4gIC8vIFRoaXMgbW9kdWxlIHNob3VsZCBub3QgYmUgcnVubmluZyBpbiBzdHJpY3QgbW9kZSwgc28gdGhlIGFib3ZlXG4gIC8vIGFzc2lnbm1lbnQgc2hvdWxkIGFsd2F5cyB3b3JrIHVubGVzcyBzb21ldGhpbmcgaXMgbWlzY29uZmlndXJlZC4gSnVzdFxuICAvLyBpbiBjYXNlIHJ1bnRpbWUuanMgYWNjaWRlbnRhbGx5IHJ1bnMgaW4gc3RyaWN0IG1vZGUsIHdlIGNhbiBlc2NhcGVcbiAgLy8gc3RyaWN0IG1vZGUgdXNpbmcgYSBnbG9iYWwgRnVuY3Rpb24gY2FsbC4gVGhpcyBjb3VsZCBjb25jZWl2YWJseSBmYWlsXG4gIC8vIGlmIGEgQ29udGVudCBTZWN1cml0eSBQb2xpY3kgZm9yYmlkcyB1c2luZyBGdW5jdGlvbiwgYnV0IGluIHRoYXQgY2FzZVxuICAvLyB0aGUgcHJvcGVyIHNvbHV0aW9uIGlzIHRvIGZpeCB0aGUgYWNjaWRlbnRhbCBzdHJpY3QgbW9kZSBwcm9ibGVtLiBJZlxuICAvLyB5b3UndmUgbWlzY29uZmlndXJlZCB5b3VyIGJ1bmRsZXIgdG8gZm9yY2Ugc3RyaWN0IG1vZGUgYW5kIGFwcGxpZWQgYVxuICAvLyBDU1AgdG8gZm9yYmlkIEZ1bmN0aW9uLCBhbmQgeW91J3JlIG5vdCB3aWxsaW5nIHRvIGZpeCBlaXRoZXIgb2YgdGhvc2VcbiAgLy8gcHJvYmxlbXMsIHBsZWFzZSBkZXRhaWwgeW91ciB1bmlxdWUgcHJlZGljYW1lbnQgaW4gYSBHaXRIdWIgaXNzdWUuXG4gIEZ1bmN0aW9uKFwiclwiLCBcInJlZ2VuZXJhdG9yUnVudGltZSA9IHJcIikocnVudGltZSk7XG59IiwiaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuaW1wb3J0IFwicmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzXCI7XG5pbXBvcnQgeyBkcmF3TWFwIH0gZnJvbSBcIi4vanMvZHJhd19tYXBcIjtcbmltcG9ydCB7IHBmaXplckFQSSwgbW9kZXJuYUFQSSwgamFuc3NlbkFQSSB9IGZyb20gXCIuL2pzL2FwaV91dGlsXCI7XG5pbXBvcnQgeyBmb3JtYXREYXRhIH0gZnJvbSBcIi4vanMvZm9ybWF0X2RhdGFcIjtcbmltcG9ydCB7IGZvcm1hdERhdGFXZWVrbHkgfSBmcm9tIFwiLi9qcy9mb3JtYXRfZGF0YV93ZWVrbHlcIjtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICBjb25zdCBtb2RhbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwtbWFwLWJ1dHRvblwiKTtcbiAgY29uc3QgYWxsQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hbGwtYnV0dG9uXCIpO1xuICBjb25zdCBwZml6ZXJCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BmaXplclwiKTtcbiAgY29uc3QgbW9kZXJuYUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9kZXJuYVwiKTtcbiAgY29uc3QgamFuc3NlbkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjamFuc3NlblwiKTtcbiAgY29uc3Qgc2xpZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzY3JvbGxlclwiKTtcblxuICBtb2RhbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbFwiKTtcbiAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKFwicmVtb3ZlLW1vZGFsXCIpO1xuICB9KTtcblxuICBhbGxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICByZW1vdmVBY3RpdmUoYWxsQnV0dG9uLCBwZml6ZXJCdXR0b24sIG1vZGVybmFCdXR0b24sIGphbnNzZW5CdXR0b24pO1xuICAgIGFkZEFjdGl2ZShhbGxCdXR0b24pO1xuICAgIHNsaWRlci52YWx1ZSA9IDA7XG4gICAgc2xpZGVyLm1heCA9IDIwO1xuICAgIGNvbWJpbmVkRGF0YU1hcCgpO1xuICB9KTtcblxuICBwZml6ZXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICByZW1vdmVBY3RpdmUoYWxsQnV0dG9uLCBwZml6ZXJCdXR0b24sIG1vZGVybmFCdXR0b24sIGphbnNzZW5CdXR0b24pO1xuICAgIGFkZEFjdGl2ZShwZml6ZXJCdXR0b24pO1xuICAgIHNsaWRlci52YWx1ZSA9IDA7XG4gICAgc2xpZGVyLm1heCA9IDIwO1xuICAgIHNpbmdsZU1hcChwZml6ZXJBUEkpO1xuICB9KTtcblxuICBtb2Rlcm5hQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgcmVtb3ZlQWN0aXZlKGFsbEJ1dHRvbiwgcGZpemVyQnV0dG9uLCBtb2Rlcm5hQnV0dG9uLCBqYW5zc2VuQnV0dG9uKTtcbiAgICBhZGRBY3RpdmUobW9kZXJuYUJ1dHRvbik7XG4gICAgc2xpZGVyLnZhbHVlID0gMDtcbiAgICBzbGlkZXIubWF4ID0gMTg7XG4gICAgc2luZ2xlTWFwKG1vZGVybmFBUEkpO1xuICB9KTtcblxuICBqYW5zc2VuQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgcmVtb3ZlQWN0aXZlKGFsbEJ1dHRvbiwgcGZpemVyQnV0dG9uLCBtb2Rlcm5hQnV0dG9uLCBqYW5zc2VuQnV0dG9uKTtcbiAgICBhZGRBY3RpdmUoamFuc3NlbkJ1dHRvbik7XG4gICAgc2xpZGVyLnZhbHVlID0gMDtcbiAgICBzbGlkZXIubWF4ID0gNTtcbiAgICBzaW5nbGVNYXAoamFuc3NlbkFQSSk7XG4gIH0pO1xuXG4gIHNsaWRlci5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcbiAgICBpZiAoYWxsQnV0dG9uLmNsYXNzTGlzdFsxXSkge1xuICAgICAgY29tYmluZWREYXRhTWFwKHNsaWRlci52YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNpbmdsZU1hcChcbiAgICAgICAgc2VsZWN0ZWRNYW51ZmFjdHVyZXIoXG4gICAgICAgICAgcGZpemVyQnV0dG9uLFxuICAgICAgICAgIHBmaXplckFQSSxcbiAgICAgICAgICBtb2Rlcm5hQnV0dG9uLFxuICAgICAgICAgIG1vZGVybmFBUEksXG4gICAgICAgICAgamFuc3NlbkJ1dHRvbixcbiAgICAgICAgICBqYW5zc2VuQVBJXG4gICAgICAgICksXG4gICAgICAgIHNsaWRlci52YWx1ZVxuICAgICAgKTtcbiAgICB9XG4gIH0pO1xuXG4gIHNsaWRlci52YWx1ZSA9IDA7XG4gIHNsaWRlci5tYXggPSAxOTtcbiAgY29tYmluZWREYXRhTWFwKCk7XG59KTtcblxuZnVuY3Rpb24gbmV3TWFwKGFwaURhdGEpIHtcbiAgY29uc3QgbWFwUGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51c2EtbWFwXCIpO1xuICBjb25zdCBtYXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21hcFwiKTtcblxuICBsZXQgbmV3TWFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbmV3TWFwLmlkID0gXCJtYXBcIjtcbiAgbmV3TWFwLmNsYXNzTmFtZSA9IFwibWFwXCI7XG5cbiAgbWFwLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobWFwKTtcbiAgbWFwUGFyZW50LmFwcGVuZENoaWxkKG5ld01hcCk7XG4gIC8vIGRlYnVnZ2VyO1xuICBkcmF3TWFwKGFwaURhdGEpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBzaW5nbGVNYXAoYXBpRGF0YSwgd2Vlaykge1xuICBsZXQgbWFudWZhY3R1cmVyRGF0YSA9IFtdO1xuXG4gIHRyeSB7XG4gICAgbWFudWZhY3R1cmVyRGF0YSA9IGF3YWl0IGFwaURhdGEoKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUubG9nKFwiRXJyb3JcIik7XG4gICAgY29uc29sZS5sb2coZSk7XG4gIH1cblxuICBsZXQgZm9ybWF0dGVkRGF0YTtcbiAgaWYgKHdlZWspIHtcbiAgICBmb3JtYXR0ZWREYXRhID0gZm9ybWF0RGF0YVdlZWtseShtYW51ZmFjdHVyZXJEYXRhLCB3ZWVrKTtcbiAgfSBlbHNlIHtcbiAgICBmb3JtYXR0ZWREYXRhID0gZm9ybWF0RGF0YShtYW51ZmFjdHVyZXJEYXRhKTtcbiAgfVxuICBuZXdNYXAoZm9ybWF0dGVkRGF0YSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGNvbWJpbmVkRGF0YU1hcCh3ZWVrKSB7XG4gIGxldCBwZml6ZXJEYXRhID0gW107XG4gIGxldCBtb2Rlcm5hRGF0YSA9IFtdO1xuICBsZXQgamFuc3NlbkRhdGEgPSBbXTtcblxuICB0cnkge1xuICAgIHBmaXplckRhdGEgPSBhd2FpdCBwZml6ZXJBUEkoKTtcbiAgICBtb2Rlcm5hRGF0YSA9IGF3YWl0IG1vZGVybmFBUEkoKTtcbiAgICBqYW5zc2VuRGF0YSA9IGF3YWl0IGphbnNzZW5BUEkoKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUubG9nKFwiRXJyb3JcIik7XG4gICAgY29uc29sZS5sb2coZSk7XG4gIH1cbiAgY29uc3QgdG90YWwgPSBwZml6ZXJEYXRhLmNvbmNhdChtb2Rlcm5hRGF0YSkuY29uY2F0KGphbnNzZW5EYXRhKTtcbiAgbGV0IGZvcm1hdHRlZERhdGE7XG5cbiAgaWYgKHdlZWspIHtcbiAgICBmb3JtYXR0ZWREYXRhID0gZm9ybWF0RGF0YVdlZWtseSh0b3RhbCwgd2Vlayk7XG4gIH0gZWxzZSB7XG4gICAgZm9ybWF0dGVkRGF0YSA9IGZvcm1hdERhdGEodG90YWwpO1xuICB9XG5cbiAgbmV3TWFwKGZvcm1hdHRlZERhdGEpO1xufVxuXG5mdW5jdGlvbiBhZGRBY3RpdmUoYnV0dG9uKSB7XG4gIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVBY3RpdmUoYWxsQnV0dG9uLCBwZml6ZXJCdXR0b24sIG1vZGVybmFCdXR0b24sIGphbnNzZW5CdXR0b24pIHtcbiAgaWYgKGFsbEJ1dHRvbi5jbGFzc0xpc3RbMV0pIHtcbiAgICBhbGxCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgfSBlbHNlIGlmIChwZml6ZXJCdXR0b24uY2xhc3NMaXN0WzFdKSB7XG4gICAgcGZpemVyQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gIH0gZWxzZSBpZiAobW9kZXJuYUJ1dHRvbi5jbGFzc0xpc3RbMV0pIHtcbiAgICBtb2Rlcm5hQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gIH0gZWxzZSBpZiAoamFuc3NlbkJ1dHRvbi5jbGFzc0xpc3RbMV0pIHtcbiAgICBqYW5zc2VuQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2VsZWN0ZWRNYW51ZmFjdHVyZXIoXG4gIHBmaXplckJ1dHRvbixcbiAgcGZpemVyQVBJLFxuICBtb2Rlcm5hQnV0dG9uLFxuICBtb2Rlcm5hQVBJLFxuICBqYW5zc2VuQnV0dG9uLFxuICBqYW5zc2VuQVBJXG4pIHtcbiAgaWYgKHBmaXplckJ1dHRvbi5jbGFzc0xpc3RbMV0pIHtcbiAgICByZXR1cm4gcGZpemVyQVBJO1xuICB9IGVsc2UgaWYgKG1vZGVybmFCdXR0b24uY2xhc3NMaXN0WzFdKSB7XG4gICAgcmV0dXJuIG1vZGVybmFBUEk7XG4gIH0gZWxzZSBpZiAoamFuc3NlbkJ1dHRvbi5jbGFzc0xpc3RbMV0pIHtcbiAgICByZXR1cm4gamFuc3NlbkFQSTtcbiAgfVxufVxuXG4vLyBTY3JvbGxlci9TbGlkZXIgdmFyaWFibGVzXG5cbmxldCBpbnB1dFZhbHVlID0gbnVsbDtcbmNvbnN0IHdlZWsgPSBbXG4gIFwiMDQvMTIvMjAyMVwiLFxuICBcIjA0LzA1LzIwMjFcIixcbiAgXCIwMy8yOS8yMDIxXCIsXG4gIFwiMDMvMjIvMjAyMVwiLFxuICBcIjAzLzE1LzIwMjFcIixcbiAgXCIwMy8wOC8yMDIxXCIsXG4gIFwiMDMvMDEvMjAyMVwiLFxuICBcIjAyLzIyLzIwMjFcIixcbiAgXCIwMi8xNS8yMDIxXCIsXG4gIFwiMDIvMDgvMjAyMVwiLFxuICBcIjAyLzAxLzIwMjFcIixcbiAgXCIwMS8yNS8yMDIxXCIsXG4gIFwiMDEvMTgvMjAyMVwiLFxuICBcIjAxLzExLzIwMjFcIixcbiAgXCIwMS8wNC8yMDIxXCIsXG4gIFwiMTIvMjgvMjAyMFwiLFxuXTtcbiIsImV4cG9ydCBjb25zdCBhZGRCaWdDaXRpZXNUb1N0YXRlcyA9IChzdGF0ZVRvdGFsKSA9PiB7XG4gIGNvbnN0IFBoaWxseSA9IHN0YXRlVG90YWxbXCJQaGlsYWRlbHBoaWFcIl07XG4gIGNvbnN0IFBBID0gc3RhdGVUb3RhbFtcIlBBXCJdO1xuICBQQS5fMXN0X2Rvc2VfYWxsb2NhdGlvbnMgKz0gUGhpbGx5Ll8xc3RfZG9zZV9hbGxvY2F0aW9ucztcbiAgUEEuXzJuZF9kb3NlX2FsbG9jYXRpb25zICs9IFBoaWxseS5fMm5kX2Rvc2VfYWxsb2NhdGlvbnM7XG5cbiAgY29uc3QgTllDID0gc3RhdGVUb3RhbFtcIk5ldyBZb3JrIENpdHlcIl07XG4gIGNvbnN0IE5ZID0gc3RhdGVUb3RhbFtcIk5ZXCJdO1xuICBOWS5fMXN0X2Rvc2VfYWxsb2NhdGlvbnMgKz0gTllDLl8xc3RfZG9zZV9hbGxvY2F0aW9ucztcbiAgTlkuXzJuZF9kb3NlX2FsbG9jYXRpb25zICs9IE5ZQy5fMm5kX2Rvc2VfYWxsb2NhdGlvbnM7XG5cbiAgY29uc3QgQ2hpY2FnbyA9IHN0YXRlVG90YWxbXCJDaGljYWdvXCJdO1xuICBjb25zdCBJTCA9IHN0YXRlVG90YWxbXCJJTFwiXTtcbiAgSUwuXzFzdF9kb3NlX2FsbG9jYXRpb25zICs9IENoaWNhZ28uXzFzdF9kb3NlX2FsbG9jYXRpb25zO1xuICBJTC5fMm5kX2Rvc2VfYWxsb2NhdGlvbnMgKz0gQ2hpY2Fnby5fMm5kX2Rvc2VfYWxsb2NhdGlvbnM7XG59O1xuIiwiY29uc3QgQXBwVG9rZW4gPSByZXF1aXJlKFwiLi9zZWNyZXRcIik7XG5cbi8vIGNvbnN0IHBmaXplckFQSSA9IGZldGNoKFxuLy8gICBgaHR0cHM6Ly9kYXRhLmNkYy5nb3YvcmVzb3VyY2Uvc2F6NS05aGdnLmpzb24/JCRhcHBfdG9rZW49JHtBcHBUb2tlbn0mJGxpbWl0PTUwMDBgXG4vLyApLnRoZW4oKHJlcykgPT4ge1xuLy8gICBpZiAoIXJlcy5vaykge1xuLy8gICAgIHRocm93IEVycm9yKFwiQXBpIGNhbGwgdW5zdWNjZXNzZnVsXCIpO1xuLy8gICB9IGVsc2Uge1xuLy8gICAgIC8vIGFsZXJ0KFwiUmVjZWl2ZWQgUGZpemVyXCIpO1xuLy8gICAgIHJldHVybiByZXMuanNvbigpO1xuLy8gICB9XG4vLyB9KTtcblxuYXN5bmMgZnVuY3Rpb24gcGZpemVyQVBJKCkge1xuICByZXR1cm4gKFxuICAgIGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHBzOi8vZGF0YS5jZGMuZ292L3Jlc291cmNlL3NhejUtOWhnZy5qc29uPyQkYXBwX3Rva2VuPSR7QXBwVG9rZW59JiRsaW1pdD01MDAwYFxuICAgIClcbiAgKS5qc29uKCk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIG1vZGVybmFBUEkoKSB7XG4gIHJldHVybiAoXG4gICAgYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly9kYXRhLmNkYy5nb3YvcmVzb3VyY2UvYjdwZS01bndzLmpzb24/JCRhcHBfdG9rZW49JHtBcHBUb2tlbn0mJGxpbWl0PTUwMDBgXG4gICAgKVxuICApLmpzb24oKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gamFuc3NlbkFQSSgpIHtcbiAgcmV0dXJuIChcbiAgICBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwczovL2RhdGEuY2RjLmdvdi9yZXNvdXJjZS93OXp1LWZ5d2guanNvbj8kJGFwcF90b2tlbj0ke0FwcFRva2VufSYkbGltaXQ9NTAwMGBcbiAgICApXG4gICkuanNvbigpO1xufVxuXG4vLyBjb25zdCBtb2Rlcm5hQVBJID0gZmV0Y2goXG4vLyAgIGBodHRwczovL2RhdGEuY2RjLmdvdi9yZXNvdXJjZS9iN3BlLTVud3MuanNvbj8kJGFwcF90b2tlbj0ke0FwcFRva2VufSYkbGltaXQ9NTAwMGBcbi8vICkudGhlbigocmVzKSA9PiB7XG4vLyAgIGlmICghcmVzLm9rKSB7XG4vLyAgICAgdGhyb3cgRXJyb3IoXCJBcGkgY2FsbCB1bnN1Y2Nlc3NmdWxcIik7XG4vLyAgIH0gZWxzZSB7XG4vLyAgICAgLy8gYWxlcnQoXCJSZWNlaXZlZCBNb2Rlcm5hXCIpO1xuLy8gICAgIHJldHVybiByZXMuanNvbigpO1xuLy8gICB9XG4vLyB9KTtcblxuLy8gY29uc3QgamFuc3NlbkFQSSA9IGZldGNoKFxuLy8gICBgaHR0cHM6Ly9kYXRhLmNkYy5nb3YvcmVzb3VyY2Uvdzl6dS1meXdoLmpzb24/JCRhcHBfdG9rZW49JHtBcHBUb2tlbn0mJGxpbWl0PTUwMDBgXG4vLyApLnRoZW4oKHJlcykgPT4ge1xuLy8gICBpZiAoIXJlcy5vaykge1xuLy8gICAgIHRocm93IEVycm9yKFwiQXBpIGNhbGwgdW5zdWNjZXNzZnVsXCIpO1xuLy8gICB9IGVsc2Uge1xuLy8gICAgIC8vIGFsZXJ0KFwiUmVjZWl2ZWQgSmFuc3NlblwiKTtcbi8vICAgICByZXR1cm4gcmVzLmpzb24oKTtcbi8vICAgfVxuLy8gfSk7XG5cbm1vZHVsZS5leHBvcnRzID0geyBwZml6ZXJBUEksIG1vZGVybmFBUEksIGphbnNzZW5BUEkgfTtcblxuLy8gbW9kdWxlLmV4cG9ydHMgPSB7IHBmaXplckFQSSB9O1xuIiwiZXhwb3J0IGNvbnN0IGNhbGN1bGF0ZUZpbGwgPSAobnVtRG9zZXMpID0+IHtcbiAgaWYgKG51bURvc2VzID49IDYwMDAwMDApIHtcbiAgICByZXR1cm4gXCI2MDAwMDAwXCI7XG4gIH0gZWxzZSBpZiAobnVtRG9zZXMgPCA2MDAwMDAwICYmIG51bURvc2VzID49IDUwMDAwMDApIHtcbiAgICByZXR1cm4gXCI1MDAwMDAwXCI7XG4gIH0gZWxzZSBpZiAobnVtRG9zZXMgPCA1MDAwMDAwICYmIG51bURvc2VzID49IDQwMDAwMDApIHtcbiAgICByZXR1cm4gXCI0MDAwMDAwXCI7XG4gIH0gZWxzZSBpZiAobnVtRG9zZXMgPCA0MDAwMDAwICYmIG51bURvc2VzID49IDM1MDAwMDApIHtcbiAgICByZXR1cm4gXCIzNTAwMDAwXCI7XG4gIH0gZWxzZSBpZiAobnVtRG9zZXMgPCAzNTAwMDAwICYmIG51bURvc2VzID49IDMwMDAwMDApIHtcbiAgICByZXR1cm4gXCIzMDAwMDAwXCI7XG4gIH0gZWxzZSBpZiAobnVtRG9zZXMgPCAzMDAwMDAwICYmIG51bURvc2VzID49IDI1MDAwMDApIHtcbiAgICByZXR1cm4gXCIyNTAwMDAwXCI7XG4gIH0gZWxzZSBpZiAobnVtRG9zZXMgPCAyNTAwMDAwICYmIG51bURvc2VzID49IDIwMDAwMDApIHtcbiAgICByZXR1cm4gXCIyMDAwMDAwXCI7XG4gIH0gZWxzZSBpZiAobnVtRG9zZXMgPCAyMDAwMDAwICYmIG51bURvc2VzID49IDE4MDAwMDApIHtcbiAgICByZXR1cm4gXCIxODAwMDAwXCI7XG4gIH0gZWxzZSBpZiAobnVtRG9zZXMgPCAxODAwMDAwICYmIG51bURvc2VzID49IDE2MDAwMDApIHtcbiAgICByZXR1cm4gXCIxNjAwMDAwXCI7XG4gIH0gZWxzZSBpZiAobnVtRG9zZXMgPCAxNjAwMDAwICYmIG51bURvc2VzID49IDE1MDAwMDApIHtcbiAgICByZXR1cm4gXCIxNTAwMDAwXCI7XG4gIH0gZWxzZSBpZiAobnVtRG9zZXMgPCAxNTAwMDAwICYmIG51bURvc2VzID49IDE0MDAwMDApIHtcbiAgICByZXR1cm4gXCIxNDAwMDAwXCI7XG4gIH0gZWxzZSBpZiAobnVtRG9zZXMgPCAxNDAwMDAwICYmIG51bURvc2VzID49IDEzMDAwMDApIHtcbiAgICByZXR1cm4gXCIxMzAwMDAwXCI7XG4gIH0gZWxzZSBpZiAobnVtRG9zZXMgPCAxMzAwMDAwICYmIG51bURvc2VzID49IDEyMDAwMDApIHtcbiAgICByZXR1cm4gXCIxMjAwMDAwXCI7XG4gIH0gZWxzZSBpZiAobnVtRG9zZXMgPCAxMjAwMDAwICYmIG51bURvc2VzID49IDExMDAwMDApIHtcbiAgICByZXR1cm4gXCIxMTAwMDAwXCI7XG4gIH0gZWxzZSBpZiAobnVtRG9zZXMgPCAxMTAwMDAwICYmIG51bURvc2VzID49IDEwMDAwMDApIHtcbiAgICByZXR1cm4gXCIxMDAwMDAwXCI7XG4gIH0gZWxzZSBpZiAobnVtRG9zZXMgPCAxMDAwMDAwICYmIG51bURvc2VzID49IDk1MDAwMCkge1xuICAgIHJldHVybiBcIjk1MDAwMFwiO1xuICB9IGVsc2UgaWYgKG51bURvc2VzIDwgOTUwMDAwICYmIG51bURvc2VzID49IDkwMDAwMCkge1xuICAgIHJldHVybiBcIjkwMDAwMFwiO1xuICB9IGVsc2UgaWYgKG51bURvc2VzIDwgOTAwMDAwICYmIG51bURvc2VzID49IDg1MDAwMCkge1xuICAgIHJldHVybiBcIjg1MDAwMFwiO1xuICB9IGVsc2UgaWYgKG51bURvc2VzIDwgODUwMDAwICYmIG51bURvc2VzID49IDgwMDAwMCkge1xuICAgIHJldHVybiBcIjgwMDAwMFwiO1xuICB9IGVsc2UgaWYgKG51bURvc2VzIDwgODAwMDAwICYmIG51bURvc2VzID49IDc1MDAwMCkge1xuICAgIHJldHVybiBcIjc1MDAwMFwiO1xuICB9IGVsc2UgaWYgKG51bURvc2VzIDwgNzUwMDAwICYmIG51bURvc2VzID49IDcwMDAwMCkge1xuICAgIHJldHVybiBcIjcwMDAwMFwiO1xuICB9IGVsc2UgaWYgKG51bURvc2VzIDwgNzAwMDAwICYmIG51bURvc2VzID49IDY1MDAwMCkge1xuICAgIHJldHVybiBcIjY1MDAwMFwiO1xuICB9IGVsc2UgaWYgKG51bURvc2VzIDwgNjUwMDAwICYmIG51bURvc2VzID49IDYwMDAwMCkge1xuICAgIHJldHVybiBcIjYwMDAwMFwiO1xuICB9IGVsc2UgaWYgKG51bURvc2VzIDwgNjAwMDAwICYmIG51bURvc2VzID49IDU1MDAwMCkge1xuICAgIHJldHVybiBcIjU1MDAwMFwiO1xuICB9IGVsc2UgaWYgKG51bURvc2VzIDwgNTUwMDAwICYmIG51bURvc2VzID49IDUwMDAwMCkge1xuICAgIHJldHVybiBcIjUwMDAwMFwiO1xuICB9IGVsc2UgaWYgKG51bURvc2VzIDwgNTAwMDAwICYmIG51bURvc2VzID49IDQ1MDAwMCkge1xuICAgIHJldHVybiBcIjQ1MDAwMFwiO1xuICB9IGVsc2UgaWYgKG51bURvc2VzIDwgNDUwMDAwICYmIG51bURvc2VzID49IDQwMDAwMCkge1xuICAgIHJldHVybiBcIjQwMDAwMFwiO1xuICB9IGVsc2UgaWYgKG51bURvc2VzIDwgNDAwMDAwICYmIG51bURvc2VzID49IDM1MDAwMCkge1xuICAgIHJldHVybiBcIjM1MDAwMFwiO1xuICB9IGVsc2UgaWYgKG51bURvc2VzIDwgMzUwMDAwICYmIG51bURvc2VzID49IDMwMDAwMCkge1xuICAgIHJldHVybiBcIjMwMDAwMFwiO1xuICB9IGVsc2UgaWYgKG51bURvc2VzIDwgMzAwMDAwICYmIG51bURvc2VzID49IDI1MDAwMCkge1xuICAgIHJldHVybiBcIjI1MDAwMFwiO1xuICB9IGVsc2UgaWYgKG51bURvc2VzIDwgMjUwMDAwICYmIG51bURvc2VzID49IDIwMDAwMCkge1xuICAgIHJldHVybiBcIjIwMDAwMFwiO1xuICB9IGVsc2UgaWYgKG51bURvc2VzIDwgMjAwMDAwICYmIG51bURvc2VzID49IDE4MDAwMCkge1xuICAgIHJldHVybiBcIjE4MDAwMFwiO1xuICB9IGVsc2UgaWYgKG51bURvc2VzIDwgMTgwMDAwICYmIG51bURvc2VzID49IDE2MDAwMCkge1xuICAgIHJldHVybiBcIjE2MDAwMFwiO1xuICB9IGVsc2UgaWYgKG51bURvc2VzIDwgMTYwMDAwICYmIG51bURvc2VzID49IDE1MDAwMCkge1xuICAgIHJldHVybiBcIjE1MDAwMFwiO1xuICB9IGVsc2UgaWYgKG51bURvc2VzIDwgMTUwMDAwICYmIG51bURvc2VzID49IDE0MDAwMCkge1xuICAgIHJldHVybiBcIjE0MDAwMFwiO1xuICB9IGVsc2UgaWYgKG51bURvc2VzIDwgMTQwMDAwICYmIG51bURvc2VzID49IDEzMDAwMCkge1xuICAgIHJldHVybiBcIjEzMDAwMFwiO1xuICB9IGVsc2UgaWYgKG51bURvc2VzIDwgMTMwMDAwICYmIG51bURvc2VzID49IDEyMDAwMCkge1xuICAgIHJldHVybiBcIjEyMDAwMFwiO1xuICB9IGVsc2UgaWYgKG51bURvc2VzIDwgMTIwMDAwICYmIG51bURvc2VzID49IDExMDAwMCkge1xuICAgIHJldHVybiBcIjExMDAwMFwiO1xuICB9IGVsc2UgaWYgKG51bURvc2VzIDwgMTEwMDAwICYmIG51bURvc2VzID49IDEwMDAwMCkge1xuICAgIHJldHVybiBcIjEwMDAwMFwiO1xuICB9IGVsc2UgaWYgKG51bURvc2VzIDwgMTAwMDAwICYmIG51bURvc2VzID49IDkwMDAwKSB7XG4gICAgcmV0dXJuIFwiOTAwMDBcIjtcbiAgfSBlbHNlIGlmIChudW1Eb3NlcyA8IDkwMDAwICYmIG51bURvc2VzID49IDgwMDAwKSB7XG4gICAgcmV0dXJuIFwiODAwMDBcIjtcbiAgfSBlbHNlIGlmIChudW1Eb3NlcyA8IDgwMDAwICYmIG51bURvc2VzID49IDcwMDAwKSB7XG4gICAgcmV0dXJuIFwiNzAwMDBcIjtcbiAgfSBlbHNlIGlmIChudW1Eb3NlcyA8IDcwMDAwICYmIG51bURvc2VzID49IDYwMDAwKSB7XG4gICAgcmV0dXJuIFwiNjAwMDBcIjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gXCJkZWZhdWx0RmlsbFwiO1xuICB9XG59O1xuIiwiZXhwb3J0IGNvbnN0IGNvbG9ycyA9IHtcbiAgNjAwMDAwMDogXCJyZ2IoMCw1MCwwKVwiLFxuICA1MDAwMDAwOiBcInJnYigwLDU1LDApXCIsXG4gIDQwMDAwMDA6IFwicmdiKDAsNjAsMClcIixcbiAgMzUwMDAwMDogXCJyZ2IoMCw3MCwwKVwiLFxuICAzMDAwMDAwOiBcInJnYigwLDgwLDApXCIsXG4gIDI1MDAwMDA6IFwicmdiKDAsOTAsMClcIixcbiAgMjAwMDAwMDogXCJyZ2IoMCwxMDAsMClcIixcbiAgMTgwMDAwMDogXCJyZ2IoMCwxMTAsMClcIixcbiAgMTYwMDAwMDogXCJyZ2IoMCwxMjAsMClcIixcbiAgMTUwMDAwMDogXCJyZ2IoMCwxMzAsMClcIixcbiAgMTQwMDAwMDogXCJyZ2IoMCwxNDAsMClcIixcbiAgMTMwMDAwMDogXCJyZ2IoMCwxNTAsMClcIixcbiAgMTIwMDAwMDogXCJyZ2IoMCwxNTUsMClcIixcbiAgMTEwMDAwMDogXCJyZ2IoMCwxNjAsMClcIixcbiAgMTAwMDAwMDogXCJyZ2IoMCwxNjUsMClcIixcbiAgOTUwMDAwOiBcInJnYigwLDE3MCwwKVwiLFxuICA5MDAwMDA6IFwicmdiKDAsMTc1LDApXCIsXG4gIDg1MDAwMDogXCJyZ2IoMCwxODAsMClcIixcbiAgODAwMDAwOiBcInJnYigwLDE4NSwwKVwiLFxuICA3NTAwMDA6IFwicmdiKDAsMTkwLDApXCIsXG4gIDcwMDAwMDogXCJyZ2IoMCwxOTUsMClcIixcbiAgNjUwMDAwOiBcInJnYigwLDIwMCwwKVwiLFxuICA2MDAwMDA6IFwicmdiKDAsMjA1LDApXCIsXG4gIDU1MDAwMDogXCJyZ2IoMCwyMTAsMClcIixcbiAgNTAwMDAwOiBcInJnYigwLDIxNSwwKVwiLFxuICA0NTAwMDA6IFwicmdiKDAsMjIwLDApXCIsXG4gIDQwMDAwMDogXCJyZ2IoMCwyMjUsMClcIixcbiAgMzUwMDAwOiBcInJnYigwLDIzMCwwKVwiLFxuICAzMDAwMDA6IFwicmdiKDAsMjM1LDApXCIsXG4gIDI1MDAwMDogXCJyZ2IoMCwyNDAsMClcIixcbiAgMjAwMDAwOiBcInJnYigwLDI0MiwwKVwiLFxuICAxODAwMDA6IFwicmdiKDAsMjQ0LDApXCIsXG4gIDE2MDAwMDogXCJyZ2IoMCwyNDUsMClcIixcbiAgMTUwMDAwOiBcInJnYigwLDI0NiwwKVwiLFxuICAxNDAwMDA6IFwicmdiKDAsMjQ3LDApXCIsXG4gIDEzMDAwMDogXCJyZ2IoMCwyNDgsMClcIixcbiAgMTIwMDAwOiBcInJnYigwLDI0OSwwKVwiLFxuICAxMTAwMDA6IFwicmdiKDAsMjUwLDApXCIsXG4gIDEwMDAwMDogXCJyZ2IoMCwyNTEsMClcIixcbiAgOTAwMDA6IFwicmdiKDAsMjUyLDApXCIsXG4gIDgwMDAwOiBcInJnYigwLDI1MywwKVwiLFxuICA3MDAwMDogXCJyZ2IoMCwyNTQsMClcIixcbiAgNjAwMDA6IFwicmdiKDAsMjU1LDApXCIsXG4gIGRlZmF1bHRGaWxsOiBcImdyYXlcIixcbn07XG4iLCJjb25zdCB7IGZvcm1hdE51bWJlciB9ID0gcmVxdWlyZShcIi4vZm9ybWF0X251bVwiKTtcbmNvbnN0IHsgY29sb3JzIH0gPSByZXF1aXJlKFwiLi9jb2xvcnNcIik7XG5cbmV4cG9ydCBjb25zdCBkcmF3TWFwID0gKGFwaURhdGEpID0+IHtcbiAgY29uc3Qgc3RhdGVUb3RhbCA9IGFwaURhdGE7XG5cbiAgbGV0IHdlZWtFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3ZWVrXCIpO1xuXG4gIGNvbnN0IGRhdGVPYmogPSBuZXcgRGF0ZShhcGlEYXRhLndlZWspO1xuICBjb25zdCBmdWxsRGF0ZSA9IGRhdGVPYmoudG9Mb2NhbGVEYXRlU3RyaW5nKHVuZGVmaW5lZCwge1xuICAgIHllYXI6IFwibnVtZXJpY1wiLFxuICAgIG1vbnRoOiBcImxvbmdcIixcbiAgICBkYXk6IFwibnVtZXJpY1wiLFxuICB9KTtcblxuICBpZiAoYXBpRGF0YS5hbGxEYXRhKSB7XG4gICAgd2Vla0VsZW1lbnQuaW5uZXJUZXh0ID0gYFVwdGlsIHdlZWsgb2YgJHtmdWxsRGF0ZX1gO1xuICB9IGVsc2Uge1xuICAgIHdlZWtFbGVtZW50LmlubmVyVGV4dCA9IGBXZWVrIG9mICR7ZnVsbERhdGV9YDtcbiAgfVxuXG4gIGNvbnN0IG1hcCA9IG5ldyBEYXRhbWFwKHtcbiAgICBzY29wZTogXCJ1c2FcIixcbiAgICBlbGVtZW50OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1hcFwiKSxcbiAgICByZXNwb25zaXZlOiB0cnVlLFxuICAgIGdlb2dyYXBoeUNvbmZpZzoge1xuICAgICAgaGlnaGxpZ2h0Qm9yZGVyQ29sb3I6IFwicmdiKDU5LCAxNzcsIDI1NSlcIixcbiAgICAgIHBvcHVwVGVtcGxhdGU6IChnZW8pID0+IHtcbiAgICAgICAgLy8gaWYgKCFzdGF0ZVRvdGFsW1tnZW8uaWRdXS5fMm5kX2Rvc2VfYWxsb2NhdGlvbnMpIHtcbiAgICAgICAgLy8gICByZXR1cm4gW1xuICAgICAgICAvLyAgICAgJzxkaXYgY2xhc3M9XCJob3ZlcmluZm9cIj48c3Ryb25nPicsXG4gICAgICAgIC8vICAgICAnPHAgY2xhc3M9XCJzdGF0ZS1uYW1lXCI+PHN0cm9uZz4nLFxuICAgICAgICAvLyAgICAgZ2VvLnByb3BlcnRpZXMubmFtZSxcbiAgICAgICAgLy8gICAgIFwiPC9zdHJvbmc+PC9wPlwiLFxuICAgICAgICAvLyAgICAgJzxwIGNsYXNzPVwiZ3JlZW4tdGV4dFwiPjxzdHJvbmc+JyxcbiAgICAgICAgLy8gICAgIFwiIDFzdCBEb3NlIFwiICtcbiAgICAgICAgLy8gICAgICAgZm9ybWF0TnVtYmVyKHN0YXRlVG90YWxbZ2VvLmlkXS5fMXN0X2Rvc2VfYWxsb2NhdGlvbnMpLFxuICAgICAgICAvLyAgICAgXCI8L3N0cm9uZz48L3A+XCIsXG4gICAgICAgIC8vICAgICBcIjwvc3Ryb25nPjwvZGl2PlwiLFxuICAgICAgICAvLyAgIF0uam9pbihcIlwiKTtcbiAgICAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAnPGRpdiBjbGFzcz1cImhvdmVyaW5mb1wiPjxzdHJvbmc+JyxcbiAgICAgICAgICAnPHAgY2xhc3M9XCJzdGF0ZS1uYW1lXCI+PHN0cm9uZz4nLFxuICAgICAgICAgIGdlby5wcm9wZXJ0aWVzLm5hbWUsXG4gICAgICAgICAgXCI8L3N0cm9uZz48L3A+XCIsXG4gICAgICAgICAgJzxwIGNsYXNzPVwiZ3JlZW4tdGV4dFwiPjxzdHJvbmc+JyxcbiAgICAgICAgICBcIiAxc3QgRG9zZSBcIiArIGZvcm1hdE51bWJlcihzdGF0ZVRvdGFsW2dlby5pZF0uXzFzdF9kb3NlX2FsbG9jYXRpb25zKSxcbiAgICAgICAgICBcIjwvc3Ryb25nPjwvcD5cIixcbiAgICAgICAgICAnPHAgY2xhc3M9XCJibHVlLXRleHRcIj48c3Ryb25nPicsXG4gICAgICAgICAgXCIgMm5kIERvc2UgXCIgKyBmb3JtYXROdW1iZXIoc3RhdGVUb3RhbFtnZW8uaWRdLl8ybmRfZG9zZV9hbGxvY2F0aW9ucyksXG4gICAgICAgICAgXCI8L3N0cm9uZz48L2Rpdj5cIixcbiAgICAgICAgXS5qb2luKFwiXCIpO1xuICAgICAgICAvLyB9XG4gICAgICB9LFxuICAgICAgaGlnaGxpZ2h0Qm9yZGVyV2lkdGg6IDIsXG4gICAgfSxcbiAgICBmaWxsczogY29sb3JzLFxuICAgIGRhdGE6IHN0YXRlVG90YWwsXG4gIH0pO1xuICBtYXAubGFiZWxzKHtcbiAgICBsYWJlbENvbG9yOiBcIndoaXRlXCIsXG4gICAgZm9udEZhbWlseTogXCJSb2JvdG9cIixcbiAgICBmb250U2l6ZTogMTIsXG4gIH0pO1xufTtcbiIsImNvbnN0IHsgc3RhdGVJbml0aWFscyB9ID0gcmVxdWlyZShcIi4vc3RhdGVfSW5pdGlhbHNcIik7XG5jb25zdCB7IGNhbGN1bGF0ZUZpbGwgfSA9IHJlcXVpcmUoXCIuL2NhbGN1bGF0ZV9maWxsXCIpO1xuY29uc3QgeyBhZGRCaWdDaXRpZXNUb1N0YXRlcyB9ID0gcmVxdWlyZShcIi4vYWRkX2JpZ19jaXRpZXNcIik7XG5cbmV4cG9ydCBjb25zdCBmb3JtYXREYXRhID0gKGFwaURhdGEpID0+IHtcbiAgbGV0IHN0YXRlVG90YWwgPSB7fTtcblxuICBhcGlEYXRhLmZvckVhY2goKHN0YXRlKSA9PiB7XG4gICAgbGV0IHN0YXRlTmFtZTtcbiAgICBpZiAoc3RhdGVJbml0aWFsc1tzdGF0ZS5qdXJpc2RpY3Rpb25dKSB7XG4gICAgICBzdGF0ZU5hbWUgPSBzdGF0ZUluaXRpYWxzW3N0YXRlLmp1cmlzZGljdGlvbl07XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0YXRlTmFtZSA9IHN0YXRlLmp1cmlzZGljdGlvbjtcbiAgICB9XG5cbiAgICBpZiAoT2JqZWN0LnZhbHVlcyhzdGF0ZVRvdGFsKS5sZW5ndGggIT09IDYzKSB7XG4gICAgICBzdGF0ZVRvdGFsW3N0YXRlTmFtZV0gPSB7XG4gICAgICAgIF8xc3RfZG9zZV9hbGxvY2F0aW9uczogTnVtYmVyKHN0YXRlLl8xc3RfZG9zZV9hbGxvY2F0aW9ucyksXG4gICAgICAgIF8ybmRfZG9zZV9hbGxvY2F0aW9uczogTnVtYmVyKHN0YXRlLl8ybmRfZG9zZV9hbGxvY2F0aW9ucykgfHwgMCxcbiAgICAgICAgd2Vla19vZl9hbGxvY2F0aW9uczogc3RhdGUud2Vla19vZl9hbGxvY2F0aW9ucyxcbiAgICAgICAganVyaXNkaWN0aW9uOiBzdGF0ZS5qdXJpc2RpY3Rpb24sXG4gICAgICB9O1xuICAgICAgc3RhdGVUb3RhbFtzdGF0ZU5hbWVdLmZpbGxLZXkgPSBjYWxjdWxhdGVGaWxsKFxuICAgICAgICBzdGF0ZVRvdGFsW3N0YXRlTmFtZV0uXzFzdF9kb3NlX2FsbG9jYXRpb25zXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdGF0ZVRvdGFsW3N0YXRlTmFtZV0uXzFzdF9kb3NlX2FsbG9jYXRpb25zICs9IE51bWJlcihcbiAgICAgICAgc3RhdGUuXzFzdF9kb3NlX2FsbG9jYXRpb25zXG4gICAgICApO1xuICAgICAgc3RhdGVUb3RhbFtzdGF0ZU5hbWVdLl8ybmRfZG9zZV9hbGxvY2F0aW9ucyArPSBOdW1iZXIoXG4gICAgICAgIHN0YXRlLl8ybmRfZG9zZV9hbGxvY2F0aW9ucyB8fCAwXG4gICAgICApO1xuICAgICAgc3RhdGVUb3RhbFtzdGF0ZU5hbWVdLmZpbGxLZXkgPSBjYWxjdWxhdGVGaWxsKFxuICAgICAgICBzdGF0ZVRvdGFsW3N0YXRlTmFtZV0uXzFzdF9kb3NlX2FsbG9jYXRpb25zXG4gICAgICApO1xuICAgIH1cbiAgfSk7XG4gIGFkZEJpZ0NpdGllc1RvU3RhdGVzKHN0YXRlVG90YWwpO1xuXG4gIHN0YXRlVG90YWxbXCJ3ZWVrXCJdID0gYXBpRGF0YVswXS53ZWVrX29mX2FsbG9jYXRpb25zO1xuICBzdGF0ZVRvdGFsW1wiYWxsRGF0YVwiXSA9IGZhbHNlO1xuXG4gIGlmIChhcGlEYXRhLmxlbmd0aCA+PSAxOTApIHtcbiAgICBzdGF0ZVRvdGFsLmFsbERhdGEgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlVG90YWw7XG59O1xuIiwiY29uc3QgeyBmb3JtYXREYXRhIH0gPSByZXF1aXJlKFwiLi9mb3JtYXRfZGF0YVwiKTtcblxuZXhwb3J0IGNvbnN0IGZvcm1hdERhdGFXZWVrbHkgPSAodG90YWwsIHdlZWspID0+IHtcbiAgbGV0IHN0YXRlVG90YWxXZWVrbHkgPSB7fTtcbiAgbGV0IGNvbWJpbmVkID0gW107XG5cbiAgbGV0IHN0YXJ0ID0gMDtcblxuICBpZiAod2VlayA+IDApIHtcbiAgICBzdGFydCA9IHdlZWsgKiA2MztcbiAgfVxuXG4gIGxldCBjdXJyZW50V2VlayA9IHRvdGFsLnNsaWNlKHN0YXJ0LCBzdGFydCArIDEpWzBdLndlZWtfb2ZfYWxsb2NhdGlvbnM7XG4gIHRvdGFsLmZvckVhY2goKHN0YXRlKSA9PiB7XG4gICAgaWYgKHN0YXRlLndlZWtfb2ZfYWxsb2NhdGlvbnMgPT09IGN1cnJlbnRXZWVrKSB7XG4gICAgICBjb21iaW5lZC5wdXNoKHN0YXRlKTtcbiAgICB9XG4gIH0pO1xuXG4gIHN0YXRlVG90YWxXZWVrbHkgPSBmb3JtYXREYXRhKGNvbWJpbmVkKTtcblxuICByZXR1cm4gc3RhdGVUb3RhbFdlZWtseTtcbn07XG4iLCJleHBvcnQgY29uc3QgZm9ybWF0TnVtYmVyID0gKG51bSkgPT4ge1xuICBsZXQgY29udmVydCA9IG51bTtcbiAgY29uc3QgZGVjaW1hbCA9IE1hdGguYWJzKGNvbnZlcnQpLnRvRml4ZWQoMCk7XG4gIGxldCBudW1zID0gZGVjaW1hbC50b1N0cmluZygpO1xuICBudW1zID0gZGVjaW1hbC50b1N0cmluZygpLnNwbGl0KFwiLlwiKTtcbiAgbnVtc1swXSA9IG51bXNbMF0ucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgXCIsXCIpO1xuICBjb25zdCBjb252ZXJ0ZWQgPSBgJHtudW1zLmpvaW4oXCIuXCIpfWA7XG4gIHJldHVybiBjb252ZXJ0ZWQ7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBcIlJwYnJKTHRyQ1l6bzg4aGZKQkxlZzJmeUJcIjtcbiIsImV4cG9ydCBjb25zdCBzdGF0ZUluaXRpYWxzID0ge1xuICBBbGFiYW1hOiBcIkFMXCIsXG4gIEFsYXNrYTogXCJBS1wiLFxuICBcIkFtZXJpY2FuIFNhbW9hXCI6IFwiQVNcIixcbiAgQXJpem9uYTogXCJBWlwiLFxuICBBcmthbnNhczogXCJBUlwiLFxuICBDYWxpZm9ybmlhOiBcIkNBXCIsXG4gIC8vIENoaWNhZ286IFwiSUxcIixcbiAgQ29sb3JhZG86IFwiQ09cIixcbiAgQ29ubmVjdGljdXQ6IFwiQ1RcIixcbiAgRGVsYXdhcmU6IFwiREVcIixcbiAgXCJEaXN0cmljdCBvZiBDb2x1bWJpYVwiOiBcIkRDXCIsXG4gIFwiRmVkZXJhdGVkIFN0YXRlcyBPZiBNaWNyb25lc2lhXCI6IFwiRk1cIixcbiAgRmxvcmlkYTogXCJGTFwiLFxuICBHZW9yZ2lhOiBcIkdBXCIsXG4gIEd1YW06IFwiR1VcIixcbiAgSGF3YWlpOiBcIkhJXCIsXG4gIElkYWhvOiBcIklEXCIsXG4gIElsbGlub2lzOiBcIklMXCIsXG4gIEluZGlhbmE6IFwiSU5cIixcbiAgSW93YTogXCJJQVwiLFxuICBLYW5zYXM6IFwiS1NcIixcbiAgS2VudHVja3k6IFwiS1lcIixcbiAgTG91aXNpYW5hOiBcIkxBXCIsXG4gIE1haW5lOiBcIk1FXCIsXG4gIFwiTWFyc2hhbGwgSXNsYW5kc1wiOiBcIk1IXCIsXG4gIE1hcnlsYW5kOiBcIk1EXCIsXG4gIE1hc3NhY2h1c2V0dHM6IFwiTUFcIixcbiAgTWljaGlnYW46IFwiTUlcIixcbiAgTWlubmVzb3RhOiBcIk1OXCIsXG4gIE1pc3Npc3NpcHBpOiBcIk1TXCIsXG4gIE1pc3NvdXJpOiBcIk1PXCIsXG4gIE1vbnRhbmE6IFwiTVRcIixcbiAgTmVicmFza2E6IFwiTkVcIixcbiAgTmV2YWRhOiBcIk5WXCIsXG4gIFwiTmV3IEhhbXBzaGlyZVwiOiBcIk5IXCIsXG4gIFwiTmV3IEplcnNleVwiOiBcIk5KXCIsXG4gIFwiTmV3IE1leGljb1wiOiBcIk5NXCIsXG4gIC8vIFwiTmV3IFlvcmsgQ2l0eVwiOiBcIk5ZXCIsXG4gIFwiTmV3IFlvcmtcIjogXCJOWVwiLFxuICBcIk5vcnRoIENhcm9saW5hXCI6IFwiTkNcIixcbiAgXCJOb3J0aCBEYWtvdGFcIjogXCJORFwiLFxuICBcIk5vcnRoZXJuIE1hcmlhbmEgSXNsYW5kc1wiOiBcIk1QXCIsXG4gIE9oaW86IFwiT0hcIixcbiAgT2tsYWhvbWE6IFwiT0tcIixcbiAgT3JlZ29uOiBcIk9SXCIsXG4gIFBhbGF1OiBcIlBXXCIsXG4gIFBlbm5zeWx2YW5pYTogXCJQQVwiLFxuICAvLyBQaGlsYWRlbHBoaWE6IFwiUEFcIixcbiAgXCJQdWVydG8gUmljb1wiOiBcIlBSXCIsXG4gIFwiUmhvZGUgSXNsYW5kXCI6IFwiUklcIixcbiAgXCJTb3V0aCBDYXJvbGluYVwiOiBcIlNDXCIsXG4gIFwiU291dGggRGFrb3RhXCI6IFwiU0RcIixcbiAgVGVubmVzc2VlOiBcIlROXCIsXG4gIFRleGFzOiBcIlRYXCIsXG4gIFV0YWg6IFwiVVRcIixcbiAgVmVybW9udDogXCJWVFwiLFxuICBcIlZpcmdpbiBJc2xhbmRzXCI6IFwiVklcIixcbiAgVmlyZ2luaWE6IFwiVkFcIixcbiAgV2FzaGluZ3RvbjogXCJXQVwiLFxuICBcIldlc3QgVmlyZ2luaWFcIjogXCJXVlwiLFxuICBXaXNjb25zaW46IFwiV0lcIixcbiAgV3lvbWluZzogXCJXWVwiLFxufTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=