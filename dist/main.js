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
    slider.value = 0; // slider.max = 16;

    combinedDataMap();
  });
  pfizerButton.addEventListener("click", function () {
    removeActive(allButton, pfizerButton, modernaButton, janssenButton);
    addActive(pfizerButton);
    slider.value = 0;
    slider.max = 19;
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
  combinedDataMap();
});

function newMap(apiData, week) {
  var mapParent = document.querySelector(".usa-map");
  var map = document.querySelector("#map");
  var newMap = document.createElement("div");
  newMap.id = "map";
  newMap.className = "map";
  map.parentNode.removeChild(map);
  mapParent.appendChild(newMap); // debugger;

  Object(_js_draw_map__WEBPACK_IMPORTED_MODULE_2__["drawMap"])(apiData, week);
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
            formattedData = Object(_js_format_data__WEBPACK_IMPORTED_MODULE_4__["formatData"])(manufacturerData, week); // debugger;

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
    var pfizerData, modernaData, janssenData, maxLength, total, formattedData;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            pfizerData = [];
            modernaData = [];
            janssenData = [];
            maxLength = pfizerData.length;
            _context2.prev = 4;
            _context2.next = 7;
            return Object(_js_api_util__WEBPACK_IMPORTED_MODULE_3__["pfizerAPI"])();

          case 7:
            pfizerData = _context2.sent;
            _context2.next = 10;
            return Object(_js_api_util__WEBPACK_IMPORTED_MODULE_3__["modernaAPI"])();

          case 10:
            modernaData = _context2.sent;
            _context2.next = 13;
            return Object(_js_api_util__WEBPACK_IMPORTED_MODULE_3__["janssenAPI"])();

          case 13:
            janssenData = _context2.sent;
            _context2.next = 20;
            break;

          case 16:
            _context2.prev = 16;
            _context2.t0 = _context2["catch"](4);
            console.log("Error");
            console.log(_context2.t0);

          case 20:
            total = pfizerData.concat(modernaData).concat(janssenData); // if week call formatDataWeekly else call formatData
            // formatDataWeekly should return an array with max length of pfizer data
            // each ele will be an obj
            // each obj will have they key of that week
            // value will be all states with allocations

            formattedData = Object(_js_format_data__WEBPACK_IMPORTED_MODULE_4__["formatData"])(total, week); // debugger;

            newMap(formattedData);

          case 23:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[4, 16]]);
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
var _require = __webpack_require__(/*! ./format_data */ "./src/js/format_data.js"),
    formatData = _require.formatData;

var _require2 = __webpack_require__(/*! ./format_num */ "./src/js/format_num.js"),
    formatNumber = _require2.formatNumber;

var _require3 = __webpack_require__(/*! ./colors */ "./src/js/colors.js"),
    colors = _require3.colors;

var drawMap = function drawMap(apiData) {
  var stateTotal = apiData; // debugger;

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

var formatData = function formatData(apiData, week) {
  debugger;
  var data;
  var start = 0;
  var end = 63;

  if (week > 0) {
    start = week * 63;
    end = start + 63;
  }

  if (!week) {
    data = apiData;
  } else {
    data = apiData.slice(start, end);
  }

  var stateTotal = {};
  data.forEach(function (state) {
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
        week_of_allocations: state.week_of_allocations
      };
      stateTotal[stateName].fillKey = calculateFill(stateTotal[stateName]._1st_dose_allocations);
    } else {
      stateTotal[stateName]._1st_dose_allocations += Number(state._1st_dose_allocations);
      stateTotal[stateName]._2nd_dose_allocations += Number(state._2nd_dose_allocations || 0); // debugger;

      stateTotal[stateName].fillKey = calculateFill(stateTotal[stateName]._1st_dose_allocations);
    } // if (Object.values(stateTotal).length !== 63) {
    //   stateTotal[stateName] = {
    //     _1st_dose_allocations: Number(state._1st_dose_allocations),
    //     _2nd_dose_allocations: Number(state._2nd_dose_allocations) || 0,
    //     week_of_allocations: state.week_of_allocations,
    //   };
    //   stateTotal[stateName].fillKey = calculateFill(
    //     stateTotal[stateName]._1st_dose_allocations
    //   );
    // } else {
    //   stateTotal[stateName]._1st_dose_allocations += Number(
    //     state._1st_dose_allocations
    //   );
    //   stateTotal[stateName]._2nd_dose_allocations += Number(
    //     state._2nd_dose_allocations || 0
    //   );
    //   // debugger;
    //   stateTotal[stateName].fillKey = calculateFill(
    //     stateTotal[stateName]._1st_dose_allocations
    //   );
    // }

  });
  addBigCitiesToStates(stateTotal); // debugger;

  return stateTotal;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FkZF9iaWdfY2l0aWVzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9hcGlfdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY2FsY3VsYXRlX2ZpbGwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZHJhd19tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2Zvcm1hdF9kYXRhLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9mb3JtYXRfbnVtLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9zZWNyZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3N0YXRlX0luaXRpYWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJtb2RhbEJ1dHRvbiIsInF1ZXJ5U2VsZWN0b3IiLCJhbGxCdXR0b24iLCJwZml6ZXJCdXR0b24iLCJtb2Rlcm5hQnV0dG9uIiwiamFuc3NlbkJ1dHRvbiIsInNsaWRlciIsIm1vZGFsIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlQWN0aXZlIiwiYWRkQWN0aXZlIiwidmFsdWUiLCJjb21iaW5lZERhdGFNYXAiLCJtYXgiLCJzaW5nbGVNYXAiLCJwZml6ZXJBUEkiLCJtb2Rlcm5hQVBJIiwiamFuc3NlbkFQSSIsInNlbGVjdGVkTWFudWZhY3R1cmVyIiwibmV3TWFwIiwiYXBpRGF0YSIsIndlZWsiLCJtYXBQYXJlbnQiLCJtYXAiLCJjcmVhdGVFbGVtZW50IiwiaWQiLCJjbGFzc05hbWUiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJhcHBlbmRDaGlsZCIsImRyYXdNYXAiLCJtYW51ZmFjdHVyZXJEYXRhIiwiY29uc29sZSIsImxvZyIsImZvcm1hdHRlZERhdGEiLCJmb3JtYXREYXRhIiwicGZpemVyRGF0YSIsIm1vZGVybmFEYXRhIiwiamFuc3NlbkRhdGEiLCJtYXhMZW5ndGgiLCJsZW5ndGgiLCJ0b3RhbCIsImNvbmNhdCIsImJ1dHRvbiIsInJlbW92ZSIsImlucHV0VmFsdWUiLCJhZGRCaWdDaXRpZXNUb1N0YXRlcyIsInN0YXRlVG90YWwiLCJQaGlsbHkiLCJQQSIsIl8xc3RfZG9zZV9hbGxvY2F0aW9ucyIsIl8ybmRfZG9zZV9hbGxvY2F0aW9ucyIsIk5ZQyIsIk5ZIiwiQ2hpY2FnbyIsIklMIiwiQXBwVG9rZW4iLCJyZXF1aXJlIiwiZmV0Y2giLCJqc29uIiwibW9kdWxlIiwiZXhwb3J0cyIsImNhbGN1bGF0ZUZpbGwiLCJudW1Eb3NlcyIsImNvbG9ycyIsImRlZmF1bHRGaWxsIiwiZm9ybWF0TnVtYmVyIiwiRGF0YW1hcCIsInNjb3BlIiwiZWxlbWVudCIsImdldEVsZW1lbnRCeUlkIiwicmVzcG9uc2l2ZSIsImdlb2dyYXBoeUNvbmZpZyIsImhpZ2hsaWdodEJvcmRlckNvbG9yIiwicG9wdXBUZW1wbGF0ZSIsImdlbyIsInByb3BlcnRpZXMiLCJuYW1lIiwiam9pbiIsImhpZ2hsaWdodEJvcmRlcldpZHRoIiwiZmlsbHMiLCJkYXRhIiwibGFiZWxzIiwibGFiZWxDb2xvciIsImZvbnRGYW1pbHkiLCJmb250U2l6ZSIsInN0YXRlSW5pdGlhbHMiLCJzdGFydCIsImVuZCIsInNsaWNlIiwiZm9yRWFjaCIsInN0YXRlIiwic3RhdGVOYW1lIiwianVyaXNkaWN0aW9uIiwiT2JqZWN0IiwidmFsdWVzIiwiTnVtYmVyIiwid2Vla19vZl9hbGxvY2F0aW9ucyIsImZpbGxLZXkiLCJudW0iLCJjb252ZXJ0IiwiZGVjaW1hbCIsIk1hdGgiLCJhYnMiLCJ0b0ZpeGVkIiwibnVtcyIsInRvU3RyaW5nIiwic3BsaXQiLCJyZXBsYWNlIiwiY29udmVydGVkIiwiQWxhYmFtYSIsIkFsYXNrYSIsIkFyaXpvbmEiLCJBcmthbnNhcyIsIkNhbGlmb3JuaWEiLCJDb2xvcmFkbyIsIkNvbm5lY3RpY3V0IiwiRGVsYXdhcmUiLCJGbG9yaWRhIiwiR2VvcmdpYSIsIkd1YW0iLCJIYXdhaWkiLCJJZGFobyIsIklsbGlub2lzIiwiSW5kaWFuYSIsIklvd2EiLCJLYW5zYXMiLCJLZW50dWNreSIsIkxvdWlzaWFuYSIsIk1haW5lIiwiTWFyeWxhbmQiLCJNYXNzYWNodXNldHRzIiwiTWljaGlnYW4iLCJNaW5uZXNvdGEiLCJNaXNzaXNzaXBwaSIsIk1pc3NvdXJpIiwiTW9udGFuYSIsIk5lYnJhc2thIiwiTmV2YWRhIiwiT2hpbyIsIk9rbGFob21hIiwiT3JlZ29uIiwiUGFsYXUiLCJQZW5uc3lsdmFuaWEiLCJUZW5uZXNzZWUiLCJUZXhhcyIsIlV0YWgiLCJWZXJtb250IiwiVmlyZ2luaWEiLCJXYXNoaW5ndG9uIiwiV2lzY29uc2luIiwiV3lvbWluZyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQjs7QUFFaEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7QUFDYixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQ7QUFDakQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEM7O0FBRUEsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSwwQ0FBMEM7QUFDMUM7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw2R0FBNkc7QUFDN0c7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7QUFHQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx3Q0FBd0M7QUFDeEMsMkJBQTJCO0FBQzNCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxvQ0FBb0M7QUFDcEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxvQ0FBb0MsY0FBYztBQUNsRDtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFD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SUFBSSxPQUF0QyxFQUErQztBQUNwRCxXQUFPLFNBQVA7QUFDRCxHQUZNLE1BRUEsSUFBSUEsUUFBUSxHQUFHLE9BQVgsSUFBc0JBLFFBQVEsSUFBSSxPQUF0QyxFQUErQztBQUNwRCxXQUFPLFNBQVA7QUFDRCxHQUZNLE1BRUEsSUFBSUEsUUFBUSxHQUFHLE9BQVgsSUFBc0JBLFFBQVEsSUFBSSxPQUF0QyxFQUErQztBQUNwRCxXQUFPLFNBQVA7QUFDRCxHQUZNLE1BRUEsSUFBSUEsUUFBUSxHQUFHLE9BQVgsSUFBc0JBLFFBQVEsSUFBSSxPQUF0QyxFQUErQztBQUNwRCxXQUFPLFNBQVA7QUFDRCxHQUZNLE1BRUEsSUFBSUEsUUFBUSxHQUFHLE9BQVgsSUFBc0JBLFFBQVEsSUFBSSxPQUF0QyxFQUErQztBQUNwRCxXQUFPLFNBQVA7QUFDRCxHQUZNLE1BRUEsSUFBSUEsUUFBUSxHQUFHLE9BQVgsSUFBc0JBLFFBQVEsSUFBSSxPQUF0QyxFQUErQztBQUNwRCxXQUFPLFNBQVA7QUFDRCxHQUZNLE1BRUEsSUFBSUEsUUFBUSxHQUFHLE9BQVgsSUFBc0JBLFFBQVEsSUFBSSxPQUF0QyxFQUErQztBQUNwRCxXQUFPLFNBQVA7QUFDRCxHQUZNLE1BRUEsSUFBSUEsUUFBUSxHQUFHLE9BQVgsSUFBc0JBLFFBQVEsSUFBSSxPQUF0QyxFQUErQztBQUNwRCxXQUFPLFNBQVA7QUFDRCxHQUZNLE1BRUEsSUFBSUEsUUFBUSxHQUFHLE9BQVgsSUFBc0JBLFFBQVEsSUFBSSxPQUF0QyxFQUErQztBQUNwRCxXQUFPLFNBQVA7QUFDRCxHQUZNLE1BRUEsSUFBSUEsUUFBUSxHQUFHLE9BQVgsSUFBc0JBLFFBQVEsSUFBSSxPQUF0QyxFQUErQztBQUNwRCxXQUFPLFNBQVA7QUFDRCxHQUZNLE1BRUEsSUFBSUEsUUFBUSxHQUFHLE9BQVgsSUFBc0JBLFFBQVEsSUFBSSxPQUF0QyxFQUErQztBQUNwRCxXQUFPLFNBQVA7QUFDRCxHQUZNLE1BRUEsSUFBSUEsUUFBUSxHQUFHLE9BQVgsSUFBc0JBLFFBQVEsSUFBSSxNQUF0QyxFQUE4QztBQUNuRCxXQUFPLFFBQVA7QUFDRCxHQUZNLE1BRUEsSUFBSUEsUUFBUSxHQUFHLE1BQVgsSUFBcUJBLFFBQVEsSUFBSSxNQUFyQyxFQUE2QztBQUNsRCxXQUFPLFFBQVA7QUFDRCxHQUZNLE1BRUEsSUFBSUEsUUFBUSxHQUFHLE1BQVgsSUFBcUJBLFFBQVEsSUFBSSxNQUFyQyxFQUE2QztBQUNsRCxXQUFPLFFBQVA7QUFDRCxHQUZNLE1BRUEsSUFBSUEsUUFBUSxHQUFHLE1BQVgsSUFBcUJBLFFBQVEsSUFBSSxNQUFyQyxFQUE2QztBQUNsRCxXQUFPLFFBQVA7QUFDRCxHQUZNLE1BRUEsSUFBSUEsUUFBUSxHQUFHLE1BQVgsSUFBcUJBLFFBQVEsSUFBSSxNQUFyQyxFQUE2QztBQUNsRCxXQUFPLFFBQVA7QUFDRCxHQUZNLE1BRUEsSUFBSUEsUUFBUSxHQUFHLE1BQVgsSUFBcUJBLFFBQVEsSUFBSSxNQUFyQyxFQUE2QztBQUNsRCxXQUFPLFFBQVA7QUFDRCxHQUZNLE1BRUEsSUFBSUEsUUFBUSxHQUFHLE1BQVgsSUFBcUJBLFFBQVEsSUFBSSxNQUFyQyxFQUE2QztBQUNsRCxXQUFPLFFBQVA7QUFDRCxHQUZNLE1BRUEsSUFBSUEsUUFBUSxHQUFHLE1BQVgsSUFBcUJBLFFBQVEsSUFBSSxNQUFyQyxFQUE2QztBQUNsRCxXQUFPLFFBQVA7QUFDRCxHQUZNLE1BRUEsSUFBSUEsUUFBUSxHQUFHLE1BQVgsSUFBcUJBLFFBQVEsSUFBSSxNQUFyQyxFQUE2QztBQUNsRCxXQUFPLFFBQVA7QUFDRCxHQUZNLE1BRUEsSUFBSUEsUUFBUSxHQUFHLE1BQVgsSUFBcUJBLFFBQVEsSUFBSSxNQUFyQyxFQUE2QztBQUNsRCxXQUFPLFFBQVA7QUFDRCxHQUZNLE1BRUEsSUFBSUEsUUFBUSxHQUFHLE1BQVgsSUFBcUJBLFFBQVEsSUFBSSxNQUFyQyxFQUE2QztBQUNsRCxXQUFPLFFBQVA7QUFDRCxHQUZNLE1BRUEsSUFBSUEsUUFBUSxHQUFHLE1BQVgsSUFBcUJBLFFBQVEsSUFBSSxNQUFyQyxFQUE2QztBQUNsRCxXQUFPLFFBQVA7QUFDRCxHQUZNLE1BRUEsSUFBSUEsUUFBUSxHQUFHLE1BQVgsSUFBcUJBLFFBQVEsSUFBSSxNQUFyQyxFQUE2QztBQUNsRCxXQUFPLFFBQVA7QUFDRCxHQUZNLE1BRUEsSUFBSUEsUUFBUSxHQUFHLE1BQVgsSUFBcUJBLFFBQVEsSUFBSSxNQUFyQyxFQUE2QztBQUNsRCxXQUFPLFFBQVA7QUFDRCxHQUZNLE1BRUEsSUFBSUEsUUFBUSxHQUFHLE1BQVgsSUFBcUJBLFFBQVEsSUFBSSxNQUFyQyxFQUE2QztBQUNsRCxXQUFPLFFBQVA7QUFDRCxHQUZNLE1BRUEsSUFBSUEsUUFBUSxHQUFHLE1BQVgsSUFBcUJBLFFBQVEsSUFBSSxNQUFyQyxFQUE2QztBQUNsRCxXQUFPLFFBQVA7QUFDRCxHQUZNLE1BRUEsSUFBSUEsUUFBUSxHQUFHLE1BQVgsSUFBcUJBLFFBQVEsSUFBSSxNQUFyQyxFQUE2QztBQUNsRCxXQUFPLFFBQVA7QUFDRCxHQUZNLE1BRUEsSUFBSUEsUUFBUSxHQUFHLE1BQVgsSUFBcUJBLFFBQVEsSUFBSSxNQUFyQyxFQUE2QztBQUNsRCxXQUFPLFFBQVA7QUFDRCxHQUZNLE1BRUEsSUFBSUEsUUFBUSxHQUFHLE1BQVgsSUFBcUJBLFFBQVEsSUFBSSxNQUFyQyxFQUE2QztBQUNsRCxXQUFPLFFBQVA7QUFDRCxHQUZNLE1BRUEsSUFBSUEsUUFBUSxHQUFHLE1BQVgsSUFBcUJBLFFBQVEsSUFBSSxNQUFyQyxFQUE2QztBQUNsRCxXQUFPLFFBQVA7QUFDRCxHQUZNLE1BRUEsSUFBSUEsUUFBUSxHQUFHLE1BQVgsSUFBcUJBLFFBQVEsSUFBSSxNQUFyQyxFQUE2QztBQUNsRCxXQUFPLFFBQVA7QUFDRCxHQUZNLE1BRUEsSUFBSUEsUUFBUSxHQUFHLE1BQVgsSUFBcUJBLFFBQVEsSUFBSSxNQUFyQyxFQUE2QztBQUNsRCxXQUFPLFFBQVA7QUFDRCxHQUZNLE1BRUEsSUFBSUEsUUFBUSxHQUFHLE1BQVgsSUFBcUJBLFFBQVEsSUFBSSxNQUFyQyxFQUE2QztBQUNsRCxXQUFP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QXNDM0I7QUFDQSxjQUFZLElBdkNlO0FBd0MzQixvQkFBa0IsSUF4Q1M7QUF5QzNCLGtCQUFnQixJQXpDVztBQTBDM0IsOEJBQTRCLElBMUNEO0FBMkMzQkMsTUFBSSxFQUFFLElBM0NxQjtBQTRDM0JDLFVBQVEsRUFBRSxJQTVDaUI7QUE2QzNCQyxRQUFNLEVBQUUsSUE3Q21CO0FBOEMzQkMsT0FBSyxFQUFFLElBOUNvQjtBQStDM0JDLGNBQVksRUFBRSxJQS9DYTtBQWdEM0I7QUFDQSxpQkFBZSxJQWpEWTtBQWtEM0Isa0JBQWdCLElBbERXO0FBbUQzQixvQkFBa0IsSUFuRFM7QUFvRDNCLGtCQUFnQixJQXBEVztBQXFEM0JDLFdBQVMsRUFBRSxJQXJEZ0I7QUFzRDNCQyxPQUFLLEVBQUUsSUF0RG9CO0FBdUQzQkMsTUFBSSxFQUFFLElBdkRxQjtBQXdEM0JDLFNBQU8sRUFBRSxJQXhEa0I7QUF5RDNCLG9CQUFrQixJQXpEUztBQTBEM0JDLFVBQVEsRUFBRSxJQTFEaUI7QUEyRDNCQyxZQUFVLEVBQUUsSUEzRGU7QUE0RDNCLG1CQUFpQixJQTVEVTtBQTZEM0JDLFdBQVMsRUFBRSxJQTdEZ0I7QUE4RDNCQyxTQUFPLEVBQUU7QUE5RGtCLENBQXRCLEM7Ozs7Ozs7Ozs7OztBQ0FQO0FBQUEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xudmFyIHJ1bnRpbWUgPSBmdW5jdGlvbiAoZXhwb3J0cykge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgZnVuY3Rpb24gZGVmaW5lKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIG9ialtrZXldO1xuICB9XG5cbiAgdHJ5IHtcbiAgICAvLyBJRSA4IGhhcyBhIGJyb2tlbiBPYmplY3QuZGVmaW5lUHJvcGVydHkgdGhhdCBvbmx5IHdvcmtzIG9uIERPTSBvYmplY3RzLlxuICAgIGRlZmluZSh7fSwgXCJcIik7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGRlZmluZSA9IGZ1bmN0aW9uIChvYmosIGtleSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiBvYmpba2V5XSA9IHZhbHVlO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTsgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cblxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG5cbiAgZXhwb3J0cy53cmFwID0gd3JhcDsgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBcIm5vcm1hbFwiLFxuICAgICAgICBhcmc6IGZuLmNhbGwob2JqLCBhcmcpXG4gICAgICB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogXCJ0aHJvd1wiLFxuICAgICAgICBhcmc6IGVyclxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7IC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307IC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cblxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cblxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9IC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cblxuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuXG4gIEl0ZXJhdG9yUHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcblxuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiYgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID0gR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IGRlZmluZShHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yRnVuY3Rpb25cIik7IC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uIChtZXRob2QpIHtcbiAgICAgIGRlZmluZShwcm90b3R5cGUsIG1ldGhvZCwgZnVuY3Rpb24gKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24gKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvciA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8IC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiIDogZmFsc2U7XG4gIH07XG5cbiAgZXhwb3J0cy5tYXJrID0gZnVuY3Rpb24gKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgZGVmaW5lKGdlbkZ1biwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yRnVuY3Rpb25cIik7XG4gICAgfVxuXG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07IC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG5cblxuICBleHBvcnRzLmF3cmFwID0gZnVuY3Rpb24gKGFyZykge1xuICAgIHJldHVybiB7XG4gICAgICBfX2F3YWl0OiBhcmdcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yLCBQcm9taXNlSW1wbCkge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcblxuICAgICAgICBpZiAodmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbiAodW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAvLyBJZiBhIHJlamVjdGVkIFByb21pc2Ugd2FzIHlpZWxkZWQsIHRocm93IHRoZSByZWplY3Rpb24gYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgaGFuZGxlZCB0aGVyZS5cbiAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgZXJyb3IsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlSW1wbChmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9IC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZywgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfSAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuXG5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcblxuICBBc3luY0l0ZXJhdG9yLnByb3RvdHlwZVthc3luY0l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBleHBvcnRzLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yOyAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cblxuICBleHBvcnRzLmFzeW5jID0gZnVuY3Rpb24gKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0LCBQcm9taXNlSW1wbCkge1xuICAgIGlmIChQcm9taXNlSW1wbCA9PT0gdm9pZCAwKSBQcm9taXNlSW1wbCA9IFByb21pc2U7XG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcih3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSwgUHJvbWlzZUltcGwpO1xuICAgIHJldHVybiBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbikgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9IC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcblxuXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG5cbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lID8gR2VuU3RhdGVDb21wbGV0ZWQgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7IC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfSAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG5cblxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcblxuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIC8vIE5vdGU6IFtcInJldHVyblwiXSBtdXN0IGJlIHVzZWQgZm9yIEVTMyBwYXJzaW5nIGNvbXBhdGliaWxpdHkuXG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXSkge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoIWluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7IC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cblxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYzsgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH0gLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuXG5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfSAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG5cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuICBkZWZpbmUoR3AsIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvclwiKTsgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcbiAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxuXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBHcC50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHtcbiAgICAgIHRyeUxvYzogbG9jc1swXVxuICAgIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3tcbiAgICAgIHRyeUxvYzogXCJyb290XCJcbiAgICB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIGV4cG9ydHMua2V5cyA9IGZ1bmN0aW9uIChvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuXG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuXG4gICAga2V5cy5yZXZlcnNlKCk7IC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cblxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuXG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfSAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cblxuXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcblxuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSxcbiAgICAgICAgICAgIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH0gLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuXG5cbiAgICByZXR1cm4ge1xuICAgICAgbmV4dDogZG9uZVJlc3VsdFxuICAgIH07XG4gIH1cblxuICBleHBvcnRzLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogdW5kZWZpbmVkLFxuICAgICAgZG9uZTogdHJ1ZVxuICAgIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcbiAgICByZXNldDogZnVuY3Rpb24gKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwOyAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cblxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJiBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJiAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgc3RvcDogZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24gKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcblxuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG5cbiAgICAgICAgaWYgKGNhdWdodCkge1xuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgYWJydXB0OiBmdW5jdGlvbiAodHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJiBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJiAodHlwZSA9PT0gXCJicmVha1wiIHx8IHR5cGUgPT09IFwiY29udGludWVcIikgJiYgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiYgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uIChyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fCByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcbiAgICBmaW5pc2g6IGZ1bmN0aW9uIChmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcblxuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uICh0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfSAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cblxuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbiAoaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTsgLy8gUmVnYXJkbGVzcyBvZiB3aGV0aGVyIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZVxuICAvLyBvciBub3QsIHJldHVybiB0aGUgcnVudGltZSBvYmplY3Qgc28gdGhhdCB3ZSBjYW4gZGVjbGFyZSB0aGUgdmFyaWFibGVcbiAgLy8gcmVnZW5lcmF0b3JSdW50aW1lIGluIHRoZSBvdXRlciBzY29wZSwgd2hpY2ggYWxsb3dzIHRoaXMgbW9kdWxlIHRvIGJlXG4gIC8vIGluamVjdGVkIGVhc2lseSBieSBgYmluL3JlZ2VuZXJhdG9yIC0taW5jbHVkZS1ydW50aW1lIHNjcmlwdC5qc2AuXG5cbiAgcmV0dXJuIGV4cG9ydHM7XG59KCAvLyBJZiB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGUsIHVzZSBtb2R1bGUuZXhwb3J0c1xuLy8gYXMgdGhlIHJlZ2VuZXJhdG9yUnVudGltZSBuYW1lc3BhY2UuIE90aGVyd2lzZSBjcmVhdGUgYSBuZXcgZW1wdHlcbi8vIG9iamVjdC4gRWl0aGVyIHdheSwgdGhlIHJlc3VsdGluZyBvYmplY3Qgd2lsbCBiZSB1c2VkIHRvIGluaXRpYWxpemVcbi8vIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgdmFyaWFibGUgYXQgdGhlIHRvcCBvZiB0aGlzIGZpbGUuXG50eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiID8gbW9kdWxlLmV4cG9ydHMgOiB7fSk7XG5cbnRyeSB7XG4gIHJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG59IGNhdGNoIChhY2NpZGVudGFsU3RyaWN0TW9kZSkge1xuICAvLyBUaGlzIG1vZHVsZSBzaG91bGQgbm90IGJlIHJ1bm5pbmcgaW4gc3RyaWN0IG1vZGUsIHNvIHRoZSBhYm92ZVxuICAvLyBhc3NpZ25tZW50IHNob3VsZCBhbHdheXMgd29yayB1bmxlc3Mgc29tZXRoaW5nIGlzIG1pc2NvbmZpZ3VyZWQuIEp1c3RcbiAgLy8gaW4gY2FzZSBydW50aW1lLmpzIGFjY2lkZW50YWxseSBydW5zIGluIHN0cmljdCBtb2RlLCB3ZSBjYW4gZXNjYXBlXG4gIC8vIHN0cmljdCBtb2RlIHVzaW5nIGEgZ2xvYmFsIEZ1bmN0aW9uIGNhbGwuIFRoaXMgY291bGQgY29uY2VpdmFibHkgZmFpbFxuICAvLyBpZiBhIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5IGZvcmJpZHMgdXNpbmcgRnVuY3Rpb24sIGJ1dCBpbiB0aGF0IGNhc2VcbiAgLy8gdGhlIHByb3BlciBzb2x1dGlvbiBpcyB0byBmaXggdGhlIGFjY2lkZW50YWwgc3RyaWN0IG1vZGUgcHJvYmxlbS4gSWZcbiAgLy8geW91J3ZlIG1pc2NvbmZpZ3VyZWQgeW91ciBidW5kbGVyIHRvIGZvcmNlIHN0cmljdCBtb2RlIGFuZCBhcHBsaWVkIGFcbiAgLy8gQ1NQIHRvIGZvcmJpZCBGdW5jdGlvbiwgYW5kIHlvdSdyZSBub3Qgd2lsbGluZyB0byBmaXggZWl0aGVyIG9mIHRob3NlXG4gIC8vIHByb2JsZW1zLCBwbGVhc2UgZGV0YWlsIHlvdXIgdW5pcXVlIHByZWRpY2FtZW50IGluIGEgR2l0SHViIGlzc3VlLlxuICBGdW5jdGlvbihcInJcIiwgXCJyZWdlbmVyYXRvclJ1bnRpbWUgPSByXCIpKHJ1bnRpbWUpO1xufSIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcbmltcG9ydCBcInJlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qc1wiO1xuaW1wb3J0IHsgZHJhd01hcCB9IGZyb20gXCIuL2pzL2RyYXdfbWFwXCI7XG5pbXBvcnQgeyBwZml6ZXJBUEksIG1vZGVybmFBUEksIGphbnNzZW5BUEkgfSBmcm9tIFwiLi9qcy9hcGlfdXRpbFwiO1xuaW1wb3J0IHsgZm9ybWF0RGF0YSB9IGZyb20gXCIuL2pzL2Zvcm1hdF9kYXRhXCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgY29uc3QgbW9kYWxCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLW1hcC1idXR0b25cIik7XG4gIGNvbnN0IGFsbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWxsLWJ1dHRvblwiKTtcbiAgY29uc3QgcGZpemVyQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwZml6ZXJcIik7XG4gIGNvbnN0IG1vZGVybmFCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21vZGVybmFcIik7XG4gIGNvbnN0IGphbnNzZW5CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2phbnNzZW5cIik7XG4gIGNvbnN0IHNsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2Nyb2xsZXJcIik7XG5cbiAgbW9kYWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxcIik7XG4gICAgbW9kYWwuY2xhc3NMaXN0LmFkZChcInJlbW92ZS1tb2RhbFwiKTtcbiAgfSk7XG5cbiAgYWxsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgcmVtb3ZlQWN0aXZlKGFsbEJ1dHRvbiwgcGZpemVyQnV0dG9uLCBtb2Rlcm5hQnV0dG9uLCBqYW5zc2VuQnV0dG9uKTtcbiAgICBhZGRBY3RpdmUoYWxsQnV0dG9uKTtcbiAgICBzbGlkZXIudmFsdWUgPSAwO1xuICAgIC8vIHNsaWRlci5tYXggPSAxNjtcbiAgICBjb21iaW5lZERhdGFNYXAoKTtcbiAgfSk7XG5cbiAgcGZpemVyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgcmVtb3ZlQWN0aXZlKGFsbEJ1dHRvbiwgcGZpemVyQnV0dG9uLCBtb2Rlcm5hQnV0dG9uLCBqYW5zc2VuQnV0dG9uKTtcbiAgICBhZGRBY3RpdmUocGZpemVyQnV0dG9uKTtcbiAgICBzbGlkZXIudmFsdWUgPSAwO1xuICAgIHNsaWRlci5tYXggPSAxOTtcbiAgICBzaW5nbGVNYXAocGZpemVyQVBJKTtcbiAgfSk7XG5cbiAgbW9kZXJuYUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHJlbW92ZUFjdGl2ZShhbGxCdXR0b24sIHBmaXplckJ1dHRvbiwgbW9kZXJuYUJ1dHRvbiwgamFuc3NlbkJ1dHRvbik7XG4gICAgYWRkQWN0aXZlKG1vZGVybmFCdXR0b24pO1xuICAgIHNsaWRlci52YWx1ZSA9IDA7XG4gICAgc2xpZGVyLm1heCA9IDE4O1xuICAgIHNpbmdsZU1hcChtb2Rlcm5hQVBJKTtcbiAgfSk7XG5cbiAgamFuc3NlbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHJlbW92ZUFjdGl2ZShhbGxCdXR0b24sIHBmaXplckJ1dHRvbiwgbW9kZXJuYUJ1dHRvbiwgamFuc3NlbkJ1dHRvbik7XG4gICAgYWRkQWN0aXZlKGphbnNzZW5CdXR0b24pO1xuICAgIHNsaWRlci52YWx1ZSA9IDA7XG4gICAgc2xpZGVyLm1heCA9IDU7XG4gICAgc2luZ2xlTWFwKGphbnNzZW5BUEkpO1xuICB9KTtcblxuICBzbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XG4gICAgaWYgKGFsbEJ1dHRvbi5jbGFzc0xpc3RbMV0pIHtcbiAgICAgIGNvbWJpbmVkRGF0YU1hcChzbGlkZXIudmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzaW5nbGVNYXAoXG4gICAgICAgIHNlbGVjdGVkTWFudWZhY3R1cmVyKFxuICAgICAgICAgIHBmaXplckJ1dHRvbixcbiAgICAgICAgICBwZml6ZXJBUEksXG4gICAgICAgICAgbW9kZXJuYUJ1dHRvbixcbiAgICAgICAgICBtb2Rlcm5hQVBJLFxuICAgICAgICAgIGphbnNzZW5CdXR0b24sXG4gICAgICAgICAgamFuc3NlbkFQSVxuICAgICAgICApLFxuICAgICAgICBzbGlkZXIudmFsdWVcbiAgICAgICk7XG4gICAgfVxuICB9KTtcblxuICBjb21iaW5lZERhdGFNYXAoKTtcbn0pO1xuXG5mdW5jdGlvbiBuZXdNYXAoYXBpRGF0YSwgd2Vlaykge1xuICBjb25zdCBtYXBQYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVzYS1tYXBcIik7XG4gIGNvbnN0IG1hcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFwXCIpO1xuXG4gIGxldCBuZXdNYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBuZXdNYXAuaWQgPSBcIm1hcFwiO1xuICBuZXdNYXAuY2xhc3NOYW1lID0gXCJtYXBcIjtcblxuICBtYXAucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChtYXApO1xuICBtYXBQYXJlbnQuYXBwZW5kQ2hpbGQobmV3TWFwKTtcbiAgLy8gZGVidWdnZXI7XG4gIGRyYXdNYXAoYXBpRGF0YSwgd2Vlayk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHNpbmdsZU1hcChhcGlEYXRhLCB3ZWVrKSB7XG4gIGxldCBtYW51ZmFjdHVyZXJEYXRhID0gW107XG5cbiAgdHJ5IHtcbiAgICBtYW51ZmFjdHVyZXJEYXRhID0gYXdhaXQgYXBpRGF0YSgpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5sb2coXCJFcnJvclwiKTtcbiAgICBjb25zb2xlLmxvZyhlKTtcbiAgfVxuXG4gIGxldCBmb3JtYXR0ZWREYXRhID0gZm9ybWF0RGF0YShtYW51ZmFjdHVyZXJEYXRhLCB3ZWVrKTtcbiAgLy8gZGVidWdnZXI7XG4gIG5ld01hcChmb3JtYXR0ZWREYXRhKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gY29tYmluZWREYXRhTWFwKHdlZWspIHtcbiAgbGV0IHBmaXplckRhdGEgPSBbXTtcbiAgbGV0IG1vZGVybmFEYXRhID0gW107XG4gIGxldCBqYW5zc2VuRGF0YSA9IFtdO1xuXG4gIGxldCBtYXhMZW5ndGggPSBwZml6ZXJEYXRhLmxlbmd0aDtcbiAgdHJ5IHtcbiAgICBwZml6ZXJEYXRhID0gYXdhaXQgcGZpemVyQVBJKCk7XG4gICAgbW9kZXJuYURhdGEgPSBhd2FpdCBtb2Rlcm5hQVBJKCk7XG4gICAgamFuc3NlbkRhdGEgPSBhd2FpdCBqYW5zc2VuQVBJKCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmxvZyhcIkVycm9yXCIpO1xuICAgIGNvbnNvbGUubG9nKGUpO1xuICB9XG5cbiAgY29uc3QgdG90YWwgPSBwZml6ZXJEYXRhLmNvbmNhdChtb2Rlcm5hRGF0YSkuY29uY2F0KGphbnNzZW5EYXRhKTtcbiAgLy8gaWYgd2VlayBjYWxsIGZvcm1hdERhdGFXZWVrbHkgZWxzZSBjYWxsIGZvcm1hdERhdGFcbiAgLy8gZm9ybWF0RGF0YVdlZWtseSBzaG91bGQgcmV0dXJuIGFuIGFycmF5IHdpdGggbWF4IGxlbmd0aCBvZiBwZml6ZXIgZGF0YVxuICAvLyBlYWNoIGVsZSB3aWxsIGJlIGFuIG9ialxuICAvLyBlYWNoIG9iaiB3aWxsIGhhdmUgdGhleSBrZXkgb2YgdGhhdCB3ZWVrXG4gIC8vIHZhbHVlIHdpbGwgYmUgYWxsIHN0YXRlcyB3aXRoIGFsbG9jYXRpb25zXG4gIGxldCBmb3JtYXR0ZWREYXRhID0gZm9ybWF0RGF0YSh0b3RhbCwgd2Vlayk7XG4gIC8vIGRlYnVnZ2VyO1xuICBuZXdNYXAoZm9ybWF0dGVkRGF0YSk7XG59XG5cbmZ1bmN0aW9uIGFkZEFjdGl2ZShidXR0b24pIHtcbiAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUFjdGl2ZShhbGxCdXR0b24sIHBmaXplckJ1dHRvbiwgbW9kZXJuYUJ1dHRvbiwgamFuc3NlbkJ1dHRvbikge1xuICBpZiAoYWxsQnV0dG9uLmNsYXNzTGlzdFsxXSkge1xuICAgIGFsbEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICB9IGVsc2UgaWYgKHBmaXplckJ1dHRvbi5jbGFzc0xpc3RbMV0pIHtcbiAgICBwZml6ZXJCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgfSBlbHNlIGlmIChtb2Rlcm5hQnV0dG9uLmNsYXNzTGlzdFsxXSkge1xuICAgIG1vZGVybmFCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgfSBlbHNlIGlmIChqYW5zc2VuQnV0dG9uLmNsYXNzTGlzdFsxXSkge1xuICAgIGphbnNzZW5CdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzZWxlY3RlZE1hbnVmYWN0dXJlcihcbiAgcGZpemVyQnV0dG9uLFxuICBwZml6ZXJBUEksXG4gIG1vZGVybmFCdXR0b24sXG4gIG1vZGVybmFBUEksXG4gIGphbnNzZW5CdXR0b24sXG4gIGphbnNzZW5BUElcbikge1xuICBpZiAocGZpemVyQnV0dG9uLmNsYXNzTGlzdFsxXSkge1xuICAgIHJldHVybiBwZml6ZXJBUEk7XG4gIH0gZWxzZSBpZiAobW9kZXJuYUJ1dHRvbi5jbGFzc0xpc3RbMV0pIHtcbiAgICByZXR1cm4gbW9kZXJuYUFQSTtcbiAgfSBlbHNlIGlmIChqYW5zc2VuQnV0dG9uLmNsYXNzTGlzdFsxXSkge1xuICAgIHJldHVybiBqYW5zc2VuQVBJO1xuICB9XG59XG5cbi8vIFNjcm9sbGVyL1NsaWRlciB2YXJpYWJsZXNcblxubGV0IGlucHV0VmFsdWUgPSBudWxsO1xuY29uc3Qgd2VlayA9IFtcbiAgXCIwNC8xMi8yMDIxXCIsXG4gIFwiMDQvMDUvMjAyMVwiLFxuICBcIjAzLzI5LzIwMjFcIixcbiAgXCIwMy8yMi8yMDIxXCIsXG4gIFwiMDMvMTUvMjAyMVwiLFxuICBcIjAzLzA4LzIwMjFcIixcbiAgXCIwMy8wMS8yMDIxXCIsXG4gIFwiMDIvMjIvMjAyMVwiLFxuICBcIjAyLzE1LzIwMjFcIixcbiAgXCIwMi8wOC8yMDIxXCIsXG4gIFwiMDIvMDEvMjAyMVwiLFxuICBcIjAxLzI1LzIwMjFcIixcbiAgXCIwMS8xOC8yMDIxXCIsXG4gIFwiMDEvMTEvMjAyMVwiLFxuICBcIjAxLzA0LzIwMjFcIixcbiAgXCIxMi8yOC8yMDIwXCIsXG5dO1xuIiwiZXhwb3J0IGNvbnN0IGFkZEJpZ0NpdGllc1RvU3RhdGVzID0gKHN0YXRlVG90YWwpID0+IHtcbiAgY29uc3QgUGhpbGx5ID0gc3RhdGVUb3RhbFtcIlBoaWxhZGVscGhpYVwiXTtcbiAgY29uc3QgUEEgPSBzdGF0ZVRvdGFsW1wiUEFcIl07XG4gIFBBLl8xc3RfZG9zZV9hbGxvY2F0aW9ucyArPSBQaGlsbHkuXzFzdF9kb3NlX2FsbG9jYXRpb25zO1xuICBQQS5fMm5kX2Rvc2VfYWxsb2NhdGlvbnMgKz0gUGhpbGx5Ll8ybmRfZG9zZV9hbGxvY2F0aW9ucztcblxuICBjb25zdCBOWUMgPSBzdGF0ZVRvdGFsW1wiTmV3IFlvcmsgQ2l0eVwiXTtcbiAgY29uc3QgTlkgPSBzdGF0ZVRvdGFsW1wiTllcIl07XG4gIE5ZLl8xc3RfZG9zZV9hbGxvY2F0aW9ucyArPSBOWUMuXzFzdF9kb3NlX2FsbG9jYXRpb25zO1xuICBOWS5fMm5kX2Rvc2VfYWxsb2NhdGlvbnMgKz0gTllDLl8ybmRfZG9zZV9hbGxvY2F0aW9ucztcblxuICBjb25zdCBDaGljYWdvID0gc3RhdGVUb3RhbFtcIkNoaWNhZ29cIl07XG4gIGNvbnN0IElMID0gc3RhdGVUb3RhbFtcIklMXCJdO1xuICBJTC5fMXN0X2Rvc2VfYWxsb2NhdGlvbnMgKz0gQ2hpY2Fnby5fMXN0X2Rvc2VfYWxsb2NhdGlvbnM7XG4gIElMLl8ybmRfZG9zZV9hbGxvY2F0aW9ucyArPSBDaGljYWdvLl8ybmRfZG9zZV9hbGxvY2F0aW9ucztcbn07XG4iLCJjb25zdCBBcHBUb2tlbiA9IHJlcXVpcmUoXCIuL3NlY3JldFwiKTtcblxuLy8gY29uc3QgcGZpemVyQVBJID0gZmV0Y2goXG4vLyAgIGBodHRwczovL2RhdGEuY2RjLmdvdi9yZXNvdXJjZS9zYXo1LTloZ2cuanNvbj8kJGFwcF90b2tlbj0ke0FwcFRva2VufSYkbGltaXQ9NTAwMGBcbi8vICkudGhlbigocmVzKSA9PiB7XG4vLyAgIGlmICghcmVzLm9rKSB7XG4vLyAgICAgdGhyb3cgRXJyb3IoXCJBcGkgY2FsbCB1bnN1Y2Nlc3NmdWxcIik7XG4vLyAgIH0gZWxzZSB7XG4vLyAgICAgLy8gYWxlcnQoXCJSZWNlaXZlZCBQZml6ZXJcIik7XG4vLyAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4vLyAgIH1cbi8vIH0pO1xuXG5hc3luYyBmdW5jdGlvbiBwZml6ZXJBUEkoKSB7XG4gIHJldHVybiAoXG4gICAgYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly9kYXRhLmNkYy5nb3YvcmVzb3VyY2Uvc2F6NS05aGdnLmpzb24/JCRhcHBfdG9rZW49JHtBcHBUb2tlbn0mJGxpbWl0PTUwMDBgXG4gICAgKVxuICApLmpzb24oKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gbW9kZXJuYUFQSSgpIHtcbiAgcmV0dXJuIChcbiAgICBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwczovL2RhdGEuY2RjLmdvdi9yZXNvdXJjZS9iN3BlLTVud3MuanNvbj8kJGFwcF90b2tlbj0ke0FwcFRva2VufSYkbGltaXQ9NTAwMGBcbiAgICApXG4gICkuanNvbigpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBqYW5zc2VuQVBJKCkge1xuICByZXR1cm4gKFxuICAgIGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHBzOi8vZGF0YS5jZGMuZ292L3Jlc291cmNlL3c5enUtZnl3aC5qc29uPyQkYXBwX3Rva2VuPSR7QXBwVG9rZW59JiRsaW1pdD01MDAwYFxuICAgIClcbiAgKS5qc29uKCk7XG59XG5cbi8vIGNvbnN0IG1vZGVybmFBUEkgPSBmZXRjaChcbi8vICAgYGh0dHBzOi8vZGF0YS5jZGMuZ292L3Jlc291cmNlL2I3cGUtNW53cy5qc29uPyQkYXBwX3Rva2VuPSR7QXBwVG9rZW59JiRsaW1pdD01MDAwYFxuLy8gKS50aGVuKChyZXMpID0+IHtcbi8vICAgaWYgKCFyZXMub2spIHtcbi8vICAgICB0aHJvdyBFcnJvcihcIkFwaSBjYWxsIHVuc3VjY2Vzc2Z1bFwiKTtcbi8vICAgfSBlbHNlIHtcbi8vICAgICAvLyBhbGVydChcIlJlY2VpdmVkIE1vZGVybmFcIik7XG4vLyAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4vLyAgIH1cbi8vIH0pO1xuXG4vLyBjb25zdCBqYW5zc2VuQVBJID0gZmV0Y2goXG4vLyAgIGBodHRwczovL2RhdGEuY2RjLmdvdi9yZXNvdXJjZS93OXp1LWZ5d2guanNvbj8kJGFwcF90b2tlbj0ke0FwcFRva2VufSYkbGltaXQ9NTAwMGBcbi8vICkudGhlbigocmVzKSA9PiB7XG4vLyAgIGlmICghcmVzLm9rKSB7XG4vLyAgICAgdGhyb3cgRXJyb3IoXCJBcGkgY2FsbCB1bnN1Y2Nlc3NmdWxcIik7XG4vLyAgIH0gZWxzZSB7XG4vLyAgICAgLy8gYWxlcnQoXCJSZWNlaXZlZCBKYW5zc2VuXCIpO1xuLy8gICAgIHJldHVybiByZXMuanNvbigpO1xuLy8gICB9XG4vLyB9KTtcblxubW9kdWxlLmV4cG9ydHMgPSB7IHBmaXplckFQSSwgbW9kZXJuYUFQSSwgamFuc3NlbkFQSSB9O1xuXG4vLyBtb2R1bGUuZXhwb3J0cyA9IHsgcGZpemVyQVBJIH07XG4iLCJleHBvcnQgY29uc3QgY2FsY3VsYXRlRmlsbCA9IChudW1Eb3NlcykgPT4ge1xuICBpZiAobnVtRG9zZXMgPj0gNjAwMDAwMCkge1xuICAgIHJldHVybiBcIjYwMDAwMDBcIjtcbiAgfSBlbHNlIGlmIChudW1Eb3NlcyA8IDYwMDAwMDAgJiYgbnVtRG9zZXMgPj0gNTAwMDAwMCkge1xuICAgIHJldHVybiBcIjUwMDAwMDBcIjtcbiAgfSBlbHNlIGlmIChudW1Eb3NlcyA8IDUwMDAwMDAgJiYgbnVtRG9zZXMgPj0gNDAwMDAwMCkge1xuICAgIHJldHVybiBcIjQwMDAwMDBcIjtcbiAgfSBlbHNlIGlmIChudW1Eb3NlcyA8IDQwMDAwMDAgJiYgbnVtRG9zZXMgPj0gMzUwMDAwMCkge1xuICAgIHJldHVybiBcIjM1MDAwMDBcIjtcbiAgfSBlbHNlIGlmIChudW1Eb3NlcyA8IDM1MDAwMDAgJiYgbnVtRG9zZXMgPj0gMzAwMDAwMCkge1xuICAgIHJldHVybiBcIjMwMDAwMDBcIjtcbiAgfSBlbHNlIGlmIChudW1Eb3NlcyA8IDMwMDAwMDAgJiYgbnVtRG9zZXMgPj0gMjUwMDAwMCkge1xuICAgIHJldHVybiBcIjI1MDAwMDBcIjtcbiAgfSBlbHNlIGlmIChudW1Eb3NlcyA8IDI1MDAwMDAgJiYgbnVtRG9zZXMgPj0gMjAwMDAwMCkge1xuICAgIHJldHVybiBcIjIwMDAwMDBcIjtcbiAgfSBlbHNlIGlmIChudW1Eb3NlcyA8IDIwMDAwMDAgJiYgbnVtRG9zZXMgPj0gMTgwMDAwMCkge1xuICAgIHJldHVybiBcIjE4MDAwMDBcIjtcbiAgfSBlbHNlIGlmIChudW1Eb3NlcyA8IDE4MDAwMDAgJiYgbnVtRG9zZXMgPj0gMTYwMDAwMCkge1xuICAgIHJldHVybiBcIjE2MDAwMDBcIjtcbiAgfSBlbHNlIGlmIChudW1Eb3NlcyA8IDE2MDAwMDAgJiYgbnVtRG9zZXMgPj0gMTUwMDAwMCkge1xuICAgIHJldHVybiBcIjE1MDAwMDBcIjtcbiAgfSBlbHNlIGlmIChudW1Eb3NlcyA8IDE1MDAwMDAgJiYgbnVtRG9zZXMgPj0gMTQwMDAwMCkge1xuICAgIHJldHVybiBcIjE0MDAwMDBcIjtcbiAgfSBlbHNlIGlmIChudW1Eb3NlcyA8IDE0MDAwMDAgJiYgbnVtRG9zZXMgPj0gMTMwMDAwMCkge1xuICAgIHJldHVybiBcIjEzMDAwMDBcIjtcbiAgfSBlbHNlIGlmIChudW1Eb3NlcyA8IDEzMDAwMDAgJiYgbnVtRG9zZXMgPj0gMTIwMDAwMCkge1xuICAgIHJldHVybiBcIjEyMDAwMDBcIjtcbiAgfSBlbHNlIGlmIChudW1Eb3NlcyA8IDEyMDAwMDAgJiYgbnVtRG9zZXMgPj0gMTEwMDAwMCkge1xuICAgIHJldHVybiBcIjExMDAwMDBcIjtcbiAgfSBlbHNlIGlmIChudW1Eb3NlcyA8IDExMDAwMDAgJiYgbnVtRG9zZXMgPj0gMTAwMDAwMCkge1xuICAgIHJldHVybiBcIjEwMDAwMDBcIjtcbiAgfSBlbHNlIGlmIChudW1Eb3NlcyA8IDEwMDAwMDAgJiYgbnVtRG9zZXMgPj0gOTUwMDAwKSB7XG4gICAgcmV0dXJuIFwiOTUwMDAwXCI7XG4gIH0gZWxzZSBpZiAobnVtRG9zZXMgPCA5NTAwMDAgJiYgbnVtRG9zZXMgPj0gOTAwMDAwKSB7XG4gICAgcmV0dXJuIFwiOTAwMDAwXCI7XG4gIH0gZWxzZSBpZiAobnVtRG9zZXMgPCA5MDAwMDAgJiYgbnVtRG9zZXMgPj0gODUwMDAwKSB7XG4gICAgcmV0dXJuIFwiODUwMDAwXCI7XG4gIH0gZWxzZSBpZiAobnVtRG9zZXMgPCA4NTAwMDAgJiYgbnVtRG9zZXMgPj0gODAwMDAwKSB7XG4gICAgcmV0dXJuIFwiODAwMDAwXCI7XG4gIH0gZWxzZSBpZiAobnVtRG9zZXMgPCA4MDAwMDAgJiYgbnVtRG9zZXMgPj0gNzUwMDAwKSB7XG4gICAgcmV0dXJuIFwiNzUwMDAwXCI7XG4gIH0gZWxzZSBpZiAobnVtRG9zZXMgPCA3NTAwMDAgJiYgbnVtRG9zZXMgPj0gNzAwMDAwKSB7XG4gICAgcmV0dXJuIFwiNzAwMDAwXCI7XG4gIH0gZWxzZSBpZiAobnVtRG9zZXMgPCA3MDAwMDAgJiYgbnVtRG9zZXMgPj0gNjUwMDAwKSB7XG4gICAgcmV0dXJuIFwiNjUwMDAwXCI7XG4gIH0gZWxzZSBpZiAobnVtRG9zZXMgPCA2NTAwMDAgJiYgbnVtRG9zZXMgPj0gNjAwMDAwKSB7XG4gICAgcmV0dXJuIFwiNjAwMDAwXCI7XG4gIH0gZWxzZSBpZiAobnVtRG9zZXMgPCA2MDAwMDAgJiYgbnVtRG9zZXMgPj0gNTUwMDAwKSB7XG4gICAgcmV0dXJuIFwiNTUwMDAwXCI7XG4gIH0gZWxzZSBpZiAobnVtRG9zZXMgPCA1NTAwMDAgJiYgbnVtRG9zZXMgPj0gNTAwMDAwKSB7XG4gICAgcmV0dXJuIFwiNTAwMDAwXCI7XG4gIH0gZWxzZSBpZiAobnVtRG9zZXMgPCA1MDAwMDAgJiYgbnVtRG9zZXMgPj0gNDUwMDAwKSB7XG4gICAgcmV0dXJuIFwiNDUwMDAwXCI7XG4gIH0gZWxzZSBpZiAobnVtRG9zZXMgPCA0NTAwMDAgJiYgbnVtRG9zZXMgPj0gNDAwMDAwKSB7XG4gICAgcmV0dXJuIFwiNDAwMDAwXCI7XG4gIH0gZWxzZSBpZiAobnVtRG9zZXMgPCA0MDAwMDAgJiYgbnVtRG9zZXMgPj0gMzUwMDAwKSB7XG4gICAgcmV0dXJuIFwiMzUwMDAwXCI7XG4gIH0gZWxzZSBpZiAobnVtRG9zZXMgPCAzNTAwMDAgJiYgbnVtRG9zZXMgPj0gMzAwMDAwKSB7XG4gICAgcmV0dXJuIFwiMzAwMDAwXCI7XG4gIH0gZWxzZSBpZiAobnVtRG9zZXMgPCAzMDAwMDAgJiYgbnVtRG9zZXMgPj0gMjUwMDAwKSB7XG4gICAgcmV0dXJuIFwiMjUwMDAwXCI7XG4gIH0gZWxzZSBpZiAobnVtRG9zZXMgPCAyNTAwMDAgJiYgbnVtRG9zZXMgPj0gMjAwMDAwKSB7XG4gICAgcmV0dXJuIFwiMjAwMDAwXCI7XG4gIH0gZWxzZSBpZiAobnVtRG9zZXMgPCAyMDAwMDAgJiYgbnVtRG9zZXMgPj0gMTgwMDAwKSB7XG4gICAgcmV0dXJuIFwiMTgwMDAwXCI7XG4gIH0gZWxzZSBpZiAobnVtRG9zZXMgPCAxODAwMDAgJiYgbnVtRG9zZXMgPj0gMTYwMDAwKSB7XG4gICAgcmV0dXJuIFwiMTYwMDAwXCI7XG4gIH0gZWxzZSBpZiAobnVtRG9zZXMgPCAxNjAwMDAgJiYgbnVtRG9zZXMgPj0gMTUwMDAwKSB7XG4gICAgcmV0dXJuIFwiMTUwMDAwXCI7XG4gIH0gZWxzZSBpZiAobnVtRG9zZXMgPCAxNTAwMDAgJiYgbnVtRG9zZXMgPj0gMTQwMDAwKSB7XG4gICAgcmV0dXJuIFwiMTQwMDAwXCI7XG4gIH0gZWxzZSBpZiAobnVtRG9zZXMgPCAxNDAwMDAgJiYgbnVtRG9zZXMgPj0gMTMwMDAwKSB7XG4gICAgcmV0dXJuIFwiMTMwMDAwXCI7XG4gIH0gZWxzZSBpZiAobnVtRG9zZXMgPCAxMzAwMDAgJiYgbnVtRG9zZXMgPj0gMTIwMDAwKSB7XG4gICAgcmV0dXJuIFwiMTIwMDAwXCI7XG4gIH0gZWxzZSBpZiAobnVtRG9zZXMgPCAxMjAwMDAgJiYgbnVtRG9zZXMgPj0gMTEwMDAwKSB7XG4gICAgcmV0dXJuIFwiMTEwMDAwXCI7XG4gIH0gZWxzZSBpZiAobnVtRG9zZXMgPCAxMTAwMDAgJiYgbnVtRG9zZXMgPj0gMTAwMDAwKSB7XG4gICAgcmV0dXJuIFwiMTAwMDAwXCI7XG4gIH0gZWxzZSBpZiAobnVtRG9zZXMgPCAxMDAwMDAgJiYgbnVtRG9zZXMgPj0gOTAwMDApIHtcbiAgICByZXR1cm4gXCI5MDAwMFwiO1xuICB9IGVsc2UgaWYgKG51bURvc2VzIDwgOTAwMDAgJiYgbnVtRG9zZXMgPj0gODAwMDApIHtcbiAgICByZXR1cm4gXCI4MDAwMFwiO1xuICB9IGVsc2UgaWYgKG51bURvc2VzIDwgODAwMDAgJiYgbnVtRG9zZXMgPj0gNzAwMDApIHtcbiAgICByZXR1cm4gXCI3MDAwMFwiO1xuICB9IGVsc2UgaWYgKG51bURvc2VzIDwgNzAwMDAgJiYgbnVtRG9zZXMgPj0gNjAwMDApIHtcbiAgICByZXR1cm4gXCI2MDAwMFwiO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBcImRlZmF1bHRGaWxsXCI7XG4gIH1cbn07XG4iLCJleHBvcnQgY29uc3QgY29sb3JzID0ge1xuICA2MDAwMDAwOiBcInJnYigwLDUwLDApXCIsXG4gIDUwMDAwMDA6IFwicmdiKDAsNTUsMClcIixcbiAgNDAwMDAwMDogXCJyZ2IoMCw2MCwwKVwiLFxuICAzNTAwMDAwOiBcInJnYigwLDcwLDApXCIsXG4gIDMwMDAwMDA6IFwicmdiKDAsODAsMClcIixcbiAgMjUwMDAwMDogXCJyZ2IoMCw5MCwwKVwiLFxuICAyMDAwMDAwOiBcInJnYigwLDEwMCwwKVwiLFxuICAxODAwMDAwOiBcInJnYigwLDExMCwwKVwiLFxuICAxNjAwMDAwOiBcInJnYigwLDEyMCwwKVwiLFxuICAxNTAwMDAwOiBcInJnYigwLDEzMCwwKVwiLFxuICAxNDAwMDAwOiBcInJnYigwLDE0MCwwKVwiLFxuICAxMzAwMDAwOiBcInJnYigwLDE1MCwwKVwiLFxuICAxMjAwMDAwOiBcInJnYigwLDE1NSwwKVwiLFxuICAxMTAwMDAwOiBcInJnYigwLDE2MCwwKVwiLFxuICAxMDAwMDAwOiBcInJnYigwLDE2NSwwKVwiLFxuICA5NTAwMDA6IFwicmdiKDAsMTcwLDApXCIsXG4gIDkwMDAwMDogXCJyZ2IoMCwxNzUsMClcIixcbiAgODUwMDAwOiBcInJnYigwLDE4MCwwKVwiLFxuICA4MDAwMDA6IFwicmdiKDAsMTg1LDApXCIsXG4gIDc1MDAwMDogXCJyZ2IoMCwxOTAsMClcIixcbiAgNzAwMDAwOiBcInJnYigwLDE5NSwwKVwiLFxuICA2NTAwMDA6IFwicmdiKDAsMjAwLDApXCIsXG4gIDYwMDAwMDogXCJyZ2IoMCwyMDUsMClcIixcbiAgNTUwMDAwOiBcInJnYigwLDIxMCwwKVwiLFxuICA1MDAwMDA6IFwicmdiKDAsMjE1LDApXCIsXG4gIDQ1MDAwMDogXCJyZ2IoMCwyMjAsMClcIixcbiAgNDAwMDAwOiBcInJnYigwLDIyNSwwKVwiLFxuICAzNTAwMDA6IFwicmdiKDAsMjMwLDApXCIsXG4gIDMwMDAwMDogXCJyZ2IoMCwyMzUsMClcIixcbiAgMjUwMDAwOiBcInJnYigwLDI0MCwwKVwiLFxuICAyMDAwMDA6IFwicmdiKDAsMjQyLDApXCIsXG4gIDE4MDAwMDogXCJyZ2IoMCwyNDQsMClcIixcbiAgMTYwMDAwOiBcInJnYigwLDI0NSwwKVwiLFxuICAxNTAwMDA6IFwicmdiKDAsMjQ2LDApXCIsXG4gIDE0MDAwMDogXCJyZ2IoMCwyNDcsMClcIixcbiAgMTMwMDAwOiBcInJnYigwLDI0OCwwKVwiLFxuICAxMjAwMDA6IFwicmdiKDAsMjQ5LDApXCIsXG4gIDExMDAwMDogXCJyZ2IoMCwyNTAsMClcIixcbiAgMTAwMDAwOiBcInJnYigwLDI1MSwwKVwiLFxuICA5MDAwMDogXCJyZ2IoMCwyNTIsMClcIixcbiAgODAwMDA6IFwicmdiKDAsMjUzLDApXCIsXG4gIDcwMDAwOiBcInJnYigwLDI1NCwwKVwiLFxuICA2MDAwMDogXCJyZ2IoMCwyNTUsMClcIixcbiAgZGVmYXVsdEZpbGw6IFwiZ3JheVwiLFxufTtcbiIsImNvbnN0IHsgZm9ybWF0RGF0YSB9ID0gcmVxdWlyZShcIi4vZm9ybWF0X2RhdGFcIik7XG5jb25zdCB7IGZvcm1hdE51bWJlciB9ID0gcmVxdWlyZShcIi4vZm9ybWF0X251bVwiKTtcbmNvbnN0IHsgY29sb3JzIH0gPSByZXF1aXJlKFwiLi9jb2xvcnNcIik7XG5cbmV4cG9ydCBjb25zdCBkcmF3TWFwID0gKGFwaURhdGEpID0+IHtcbiAgY29uc3Qgc3RhdGVUb3RhbCA9IGFwaURhdGE7XG4gIC8vIGRlYnVnZ2VyO1xuXG4gIGNvbnN0IG1hcCA9IG5ldyBEYXRhbWFwKHtcbiAgICBzY29wZTogXCJ1c2FcIixcbiAgICBlbGVtZW50OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1hcFwiKSxcbiAgICByZXNwb25zaXZlOiB0cnVlLFxuICAgIGdlb2dyYXBoeUNvbmZpZzoge1xuICAgICAgaGlnaGxpZ2h0Qm9yZGVyQ29sb3I6IFwicmdiKDU5LCAxNzcsIDI1NSlcIixcbiAgICAgIHBvcHVwVGVtcGxhdGU6IChnZW8pID0+IHtcbiAgICAgICAgLy8gaWYgKCFzdGF0ZVRvdGFsW1tnZW8uaWRdXS5fMm5kX2Rvc2VfYWxsb2NhdGlvbnMpIHtcbiAgICAgICAgLy8gICByZXR1cm4gW1xuICAgICAgICAvLyAgICAgJzxkaXYgY2xhc3M9XCJob3ZlcmluZm9cIj48c3Ryb25nPicsXG4gICAgICAgIC8vICAgICAnPHAgY2xhc3M9XCJzdGF0ZS1uYW1lXCI+PHN0cm9uZz4nLFxuICAgICAgICAvLyAgICAgZ2VvLnByb3BlcnRpZXMubmFtZSxcbiAgICAgICAgLy8gICAgIFwiPC9zdHJvbmc+PC9wPlwiLFxuICAgICAgICAvLyAgICAgJzxwIGNsYXNzPVwiZ3JlZW4tdGV4dFwiPjxzdHJvbmc+JyxcbiAgICAgICAgLy8gICAgIFwiIDFzdCBEb3NlIFwiICtcbiAgICAgICAgLy8gICAgICAgZm9ybWF0TnVtYmVyKHN0YXRlVG90YWxbZ2VvLmlkXS5fMXN0X2Rvc2VfYWxsb2NhdGlvbnMpLFxuICAgICAgICAvLyAgICAgXCI8L3N0cm9uZz48L3A+XCIsXG4gICAgICAgIC8vICAgICBcIjwvc3Ryb25nPjwvZGl2PlwiLFxuICAgICAgICAvLyAgIF0uam9pbihcIlwiKTtcbiAgICAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAnPGRpdiBjbGFzcz1cImhvdmVyaW5mb1wiPjxzdHJvbmc+JyxcbiAgICAgICAgICAnPHAgY2xhc3M9XCJzdGF0ZS1uYW1lXCI+PHN0cm9uZz4nLFxuICAgICAgICAgIGdlby5wcm9wZXJ0aWVzLm5hbWUsXG4gICAgICAgICAgXCI8L3N0cm9uZz48L3A+XCIsXG4gICAgICAgICAgJzxwIGNsYXNzPVwiZ3JlZW4tdGV4dFwiPjxzdHJvbmc+JyxcbiAgICAgICAgICBcIiAxc3QgRG9zZSBcIiArIGZvcm1hdE51bWJlcihzdGF0ZVRvdGFsW2dlby5pZF0uXzFzdF9kb3NlX2FsbG9jYXRpb25zKSxcbiAgICAgICAgICBcIjwvc3Ryb25nPjwvcD5cIixcbiAgICAgICAgICAnPHAgY2xhc3M9XCJibHVlLXRleHRcIj48c3Ryb25nPicsXG4gICAgICAgICAgXCIgMm5kIERvc2UgXCIgKyBmb3JtYXROdW1iZXIoc3RhdGVUb3RhbFtnZW8uaWRdLl8ybmRfZG9zZV9hbGxvY2F0aW9ucyksXG4gICAgICAgICAgXCI8L3N0cm9uZz48L2Rpdj5cIixcbiAgICAgICAgXS5qb2luKFwiXCIpO1xuICAgICAgICAvLyB9XG4gICAgICB9LFxuICAgICAgaGlnaGxpZ2h0Qm9yZGVyV2lkdGg6IDIsXG4gICAgfSxcbiAgICBmaWxsczogY29sb3JzLFxuICAgIGRhdGE6IHN0YXRlVG90YWwsXG4gIH0pO1xuICBtYXAubGFiZWxzKHtcbiAgICBsYWJlbENvbG9yOiBcIndoaXRlXCIsXG4gICAgZm9udEZhbWlseTogXCJSb2JvdG9cIixcbiAgICBmb250U2l6ZTogMTIsXG4gIH0pO1xufTtcbiIsImNvbnN0IHsgc3RhdGVJbml0aWFscyB9ID0gcmVxdWlyZShcIi4vc3RhdGVfSW5pdGlhbHNcIik7XG5jb25zdCB7IGNhbGN1bGF0ZUZpbGwgfSA9IHJlcXVpcmUoXCIuL2NhbGN1bGF0ZV9maWxsXCIpO1xuY29uc3QgeyBhZGRCaWdDaXRpZXNUb1N0YXRlcyB9ID0gcmVxdWlyZShcIi4vYWRkX2JpZ19jaXRpZXNcIik7XG5cbmV4cG9ydCBjb25zdCBmb3JtYXREYXRhID0gKGFwaURhdGEsIHdlZWspID0+IHtcbiAgZGVidWdnZXI7XG4gIGxldCBkYXRhO1xuICBsZXQgc3RhcnQgPSAwO1xuICBsZXQgZW5kID0gNjM7XG5cbiAgaWYgKHdlZWsgPiAwKSB7XG4gICAgc3RhcnQgPSB3ZWVrICogNjM7XG4gICAgZW5kID0gc3RhcnQgKyA2MztcbiAgfVxuXG4gIGlmICghd2Vlaykge1xuICAgIGRhdGEgPSBhcGlEYXRhO1xuICB9IGVsc2Uge1xuICAgIGRhdGEgPSBhcGlEYXRhLnNsaWNlKHN0YXJ0LCBlbmQpO1xuICB9XG5cbiAgbGV0IHN0YXRlVG90YWwgPSB7fTtcbiAgZGF0YS5mb3JFYWNoKChzdGF0ZSkgPT4ge1xuICAgIGxldCBzdGF0ZU5hbWU7XG4gICAgaWYgKHN0YXRlSW5pdGlhbHNbc3RhdGUuanVyaXNkaWN0aW9uXSkge1xuICAgICAgc3RhdGVOYW1lID0gc3RhdGVJbml0aWFsc1tzdGF0ZS5qdXJpc2RpY3Rpb25dO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdGF0ZU5hbWUgPSBzdGF0ZS5qdXJpc2RpY3Rpb247XG4gICAgfVxuXG4gICAgaWYgKE9iamVjdC52YWx1ZXMoc3RhdGVUb3RhbCkubGVuZ3RoICE9PSA2Mykge1xuICAgICAgc3RhdGVUb3RhbFtzdGF0ZU5hbWVdID0ge1xuICAgICAgICBfMXN0X2Rvc2VfYWxsb2NhdGlvbnM6IE51bWJlcihzdGF0ZS5fMXN0X2Rvc2VfYWxsb2NhdGlvbnMpLFxuICAgICAgICBfMm5kX2Rvc2VfYWxsb2NhdGlvbnM6IE51bWJlcihzdGF0ZS5fMm5kX2Rvc2VfYWxsb2NhdGlvbnMpIHx8IDAsXG4gICAgICAgIHdlZWtfb2ZfYWxsb2NhdGlvbnM6IHN0YXRlLndlZWtfb2ZfYWxsb2NhdGlvbnMsXG4gICAgICB9O1xuICAgICAgc3RhdGVUb3RhbFtzdGF0ZU5hbWVdLmZpbGxLZXkgPSBjYWxjdWxhdGVGaWxsKFxuICAgICAgICBzdGF0ZVRvdGFsW3N0YXRlTmFtZV0uXzFzdF9kb3NlX2FsbG9jYXRpb25zXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdGF0ZVRvdGFsW3N0YXRlTmFtZV0uXzFzdF9kb3NlX2FsbG9jYXRpb25zICs9IE51bWJlcihcbiAgICAgICAgc3RhdGUuXzFzdF9kb3NlX2FsbG9jYXRpb25zXG4gICAgICApO1xuICAgICAgc3RhdGVUb3RhbFtzdGF0ZU5hbWVdLl8ybmRfZG9zZV9hbGxvY2F0aW9ucyArPSBOdW1iZXIoXG4gICAgICAgIHN0YXRlLl8ybmRfZG9zZV9hbGxvY2F0aW9ucyB8fCAwXG4gICAgICApO1xuICAgICAgLy8gZGVidWdnZXI7XG4gICAgICBzdGF0ZVRvdGFsW3N0YXRlTmFtZV0uZmlsbEtleSA9IGNhbGN1bGF0ZUZpbGwoXG4gICAgICAgIHN0YXRlVG90YWxbc3RhdGVOYW1lXS5fMXN0X2Rvc2VfYWxsb2NhdGlvbnNcbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gaWYgKE9iamVjdC52YWx1ZXMoc3RhdGVUb3RhbCkubGVuZ3RoICE9PSA2Mykge1xuICAgIC8vICAgc3RhdGVUb3RhbFtzdGF0ZU5hbWVdID0ge1xuICAgIC8vICAgICBfMXN0X2Rvc2VfYWxsb2NhdGlvbnM6IE51bWJlcihzdGF0ZS5fMXN0X2Rvc2VfYWxsb2NhdGlvbnMpLFxuICAgIC8vICAgICBfMm5kX2Rvc2VfYWxsb2NhdGlvbnM6IE51bWJlcihzdGF0ZS5fMm5kX2Rvc2VfYWxsb2NhdGlvbnMpIHx8IDAsXG4gICAgLy8gICAgIHdlZWtfb2ZfYWxsb2NhdGlvbnM6IHN0YXRlLndlZWtfb2ZfYWxsb2NhdGlvbnMsXG4gICAgLy8gICB9O1xuICAgIC8vICAgc3RhdGVUb3RhbFtzdGF0ZU5hbWVdLmZpbGxLZXkgPSBjYWxjdWxhdGVGaWxsKFxuICAgIC8vICAgICBzdGF0ZVRvdGFsW3N0YXRlTmFtZV0uXzFzdF9kb3NlX2FsbG9jYXRpb25zXG4gICAgLy8gICApO1xuICAgIC8vIH0gZWxzZSB7XG4gICAgLy8gICBzdGF0ZVRvdGFsW3N0YXRlTmFtZV0uXzFzdF9kb3NlX2FsbG9jYXRpb25zICs9IE51bWJlcihcbiAgICAvLyAgICAgc3RhdGUuXzFzdF9kb3NlX2FsbG9jYXRpb25zXG4gICAgLy8gICApO1xuICAgIC8vICAgc3RhdGVUb3RhbFtzdGF0ZU5hbWVdLl8ybmRfZG9zZV9hbGxvY2F0aW9ucyArPSBOdW1iZXIoXG4gICAgLy8gICAgIHN0YXRlLl8ybmRfZG9zZV9hbGxvY2F0aW9ucyB8fCAwXG4gICAgLy8gICApO1xuICAgIC8vICAgLy8gZGVidWdnZXI7XG4gICAgLy8gICBzdGF0ZVRvdGFsW3N0YXRlTmFtZV0uZmlsbEtleSA9IGNhbGN1bGF0ZUZpbGwoXG4gICAgLy8gICAgIHN0YXRlVG90YWxbc3RhdGVOYW1lXS5fMXN0X2Rvc2VfYWxsb2NhdGlvbnNcbiAgICAvLyAgICk7XG4gICAgLy8gfVxuICB9KTtcbiAgYWRkQmlnQ2l0aWVzVG9TdGF0ZXMoc3RhdGVUb3RhbCk7XG4gIC8vIGRlYnVnZ2VyO1xuICByZXR1cm4gc3RhdGVUb3RhbDtcbn07XG4iLCJleHBvcnQgY29uc3QgZm9ybWF0TnVtYmVyID0gKG51bSkgPT4ge1xuICBsZXQgY29udmVydCA9IG51bTtcbiAgY29uc3QgZGVjaW1hbCA9IE1hdGguYWJzKGNvbnZlcnQpLnRvRml4ZWQoMCk7XG4gIGxldCBudW1zID0gZGVjaW1hbC50b1N0cmluZygpO1xuICBudW1zID0gZGVjaW1hbC50b1N0cmluZygpLnNwbGl0KFwiLlwiKTtcbiAgbnVtc1swXSA9IG51bXNbMF0ucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgXCIsXCIpO1xuICBjb25zdCBjb252ZXJ0ZWQgPSBgJHtudW1zLmpvaW4oXCIuXCIpfWA7XG4gIHJldHVybiBjb252ZXJ0ZWQ7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBcIlJwYnJKTHRyQ1l6bzg4aGZKQkxlZzJmeUJcIjtcbiIsImV4cG9ydCBjb25zdCBzdGF0ZUluaXRpYWxzID0ge1xuICBBbGFiYW1hOiBcIkFMXCIsXG4gIEFsYXNrYTogXCJBS1wiLFxuICBcIkFtZXJpY2FuIFNhbW9hXCI6IFwiQVNcIixcbiAgQXJpem9uYTogXCJBWlwiLFxuICBBcmthbnNhczogXCJBUlwiLFxuICBDYWxpZm9ybmlhOiBcIkNBXCIsXG4gIC8vIENoaWNhZ286IFwiSUxcIixcbiAgQ29sb3JhZG86IFwiQ09cIixcbiAgQ29ubmVjdGljdXQ6IFwiQ1RcIixcbiAgRGVsYXdhcmU6IFwiREVcIixcbiAgXCJEaXN0cmljdCBvZiBDb2x1bWJpYVwiOiBcIkRDXCIsXG4gIFwiRmVkZXJhdGVkIFN0YXRlcyBPZiBNaWNyb25lc2lhXCI6IFwiRk1cIixcbiAgRmxvcmlkYTogXCJGTFwiLFxuICBHZW9yZ2lhOiBcIkdBXCIsXG4gIEd1YW06IFwiR1VcIixcbiAgSGF3YWlpOiBcIkhJXCIsXG4gIElkYWhvOiBcIklEXCIsXG4gIElsbGlub2lzOiBcIklMXCIsXG4gIEluZGlhbmE6IFwiSU5cIixcbiAgSW93YTogXCJJQVwiLFxuICBLYW5zYXM6IFwiS1NcIixcbiAgS2VudHVja3k6IFwiS1lcIixcbiAgTG91aXNpYW5hOiBcIkxBXCIsXG4gIE1haW5lOiBcIk1FXCIsXG4gIFwiTWFyc2hhbGwgSXNsYW5kc1wiOiBcIk1IXCIsXG4gIE1hcnlsYW5kOiBcIk1EXCIsXG4gIE1hc3NhY2h1c2V0dHM6IFwiTUFcIixcbiAgTWljaGlnYW46IFwiTUlcIixcbiAgTWlubmVzb3RhOiBcIk1OXCIsXG4gIE1pc3Npc3NpcHBpOiBcIk1TXCIsXG4gIE1pc3NvdXJpOiBcIk1PXCIsXG4gIE1vbnRhbmE6IFwiTVRcIixcbiAgTmVicmFza2E6IFwiTkVcIixcbiAgTmV2YWRhOiBcIk5WXCIsXG4gIFwiTmV3IEhhbXBzaGlyZVwiOiBcIk5IXCIsXG4gIFwiTmV3IEplcnNleVwiOiBcIk5KXCIsXG4gIFwiTmV3IE1leGljb1wiOiBcIk5NXCIsXG4gIC8vIFwiTmV3IFlvcmsgQ2l0eVwiOiBcIk5ZXCIsXG4gIFwiTmV3IFlvcmtcIjogXCJOWVwiLFxuICBcIk5vcnRoIENhcm9saW5hXCI6IFwiTkNcIixcbiAgXCJOb3J0aCBEYWtvdGFcIjogXCJORFwiLFxuICBcIk5vcnRoZXJuIE1hcmlhbmEgSXNsYW5kc1wiOiBcIk1QXCIsXG4gIE9oaW86IFwiT0hcIixcbiAgT2tsYWhvbWE6IFwiT0tcIixcbiAgT3JlZ29uOiBcIk9SXCIsXG4gIFBhbGF1OiBcIlBXXCIsXG4gIFBlbm5zeWx2YW5pYTogXCJQQVwiLFxuICAvLyBQaGlsYWRlbHBoaWE6IFwiUEFcIixcbiAgXCJQdWVydG8gUmljb1wiOiBcIlBSXCIsXG4gIFwiUmhvZGUgSXNsYW5kXCI6IFwiUklcIixcbiAgXCJTb3V0aCBDYXJvbGluYVwiOiBcIlNDXCIsXG4gIFwiU291dGggRGFrb3RhXCI6IFwiU0RcIixcbiAgVGVubmVzc2VlOiBcIlROXCIsXG4gIFRleGFzOiBcIlRYXCIsXG4gIFV0YWg6IFwiVVRcIixcbiAgVmVybW9udDogXCJWVFwiLFxuICBcIlZpcmdpbiBJc2xhbmRzXCI6IFwiVklcIixcbiAgVmlyZ2luaWE6IFwiVkFcIixcbiAgV2FzaGluZ3RvbjogXCJXQVwiLFxuICBcIldlc3QgVmlyZ2luaWFcIjogXCJXVlwiLFxuICBXaXNjb25zaW46IFwiV0lcIixcbiAgV3lvbWluZzogXCJXWVwiLFxufTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=