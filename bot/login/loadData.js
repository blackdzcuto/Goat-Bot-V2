var ⴲⴻⵎⴺ = ⴲⴻⵎⴺ || {};
ⴲⴻⵎⴺ.scope = {};
ⴲⴻⵎⴺ.arrayIteratorImpl = function (ⴲⵋⵃⴺ) {
  var ⵒⴵⵇⴺ = 0;
  return function () {
    if (ⵒⴵⵇⴺ < ⴲⵋⵃⴺ.length) {
      return {
        done: false,
        value: ⴲⵋⵃⴺ[ⵒⴵⵇⴺ++]
      };
    } else {
      return {
        done: true
      };
    }
  };
};
ⴲⴻⵎⴺ.arrayIterator = function (ⵒⵅⴼⴺ) {
  return {
    next: ⴲⴻⵎⴺ.arrayIteratorImpl(ⵒⵅⴼⴺ)
  };
};
ⴲⴻⵎⴺ.makeIterator = function (ⵂⴰⵀⴺ) {
  var ⵂⵀⴵⴺ = typeof Symbol != "undefined" && Symbol.iterator && ⵂⴰⵀⴺ[Symbol.iterator];
  var ⴲⵛⴸⴺ = 11;
  while (ⴲⵛⴸⴺ < 32) {
    switch (ⴲⵛⴸⴺ) {
      case 11:
        ⴲⵛⴸⴺ = ⵂⵀⴵⴺ ? 31 : 32;
        break;
      case 31:
        ⴲⵛⴸⴺ = 32;
        return ⵂⵀⴵⴺ.call(ⵂⴰⵀⴺ);
    }
  }
  var ⵒⴵⴷⴻ = 32;
  while (ⵒⴵⴷⴻ < 33) {
    switch (ⵒⴵⴷⴻ) {
      case 32:
        ⵒⴵⴷⴻ = typeof ⵂⴰⵀⴺ.length == "number" ? 26 : 33;
        break;
      case 26:
        ⵒⴵⴷⴻ = 33;
        return ⴲⴻⵎⴺ.arrayIterator(ⵂⴰⵀⴺ);
    }
  }
  throw Error(String(ⵂⴰⵀⴺ) + " is not an iterable or ArrayLike");
};
ⴲⴻⵎⴺ.arrayFromIterator = function (ⵂⵐⴺⴻ) {
  var ⵂⴰⴰⴻ = 34;
  while (ⵂⴰⴰⴻ < 38) {
    switch (ⵂⴰⴰⴻ) {
      case 15:
        ⵂⴰⴰⴻ = 25;
        ⴲⵛⵘⴺ.push(ⴲⵋⴳⴻ.value);
        break;
      case 34:
        ⵂⴰⴰⴻ = 25;
        var ⴲⵋⴳⴻ;
        var ⴲⵛⵘⴺ = [];
        break;
      case 25:
        ⵂⴰⴰⴻ = !(ⴲⵋⴳⴻ = ⵂⵐⴺⴻ.next()).done ? 15 : 38;
        break;
    }
  }
  return ⴲⵛⵘⴺ;
};
ⴲⴻⵎⴺ.arrayFromIterable = function (ⵒⵅⵜⴺ) {
  if (ⵒⵅⵜⴺ instanceof Array) {
    return ⵒⵅⵜⴺ;
  } else {
    return ⴲⴻⵎⴺ.arrayFromIterator(ⴲⴻⵎⴺ.makeIterator(ⵒⵅⵜⴺ));
  }
};
ⴲⴻⵎⴺ.ASSUME_ES5 = false;
ⴲⴻⵎⴺ.ASSUME_NO_NATIVE_MAP = false;
ⴲⴻⵎⴺ.ASSUME_NO_NATIVE_SET = false;
ⴲⴻⵎⴺ.SIMPLE_FROUND_POLYFILL = false;
ⴲⴻⵎⴺ.ISOLATE_POLYFILLS = false;
ⴲⴻⵎⴺ.FORCE_POLYFILL_PROMISE = false;
ⴲⴻⵎⴺ.FORCE_POLYFILL_PROMISE_WHEN_NO_UNHANDLED_REJECTION = false;
ⴲⴻⵎⴺ.defineProperty = ⴲⴻⵎⴺ.ASSUME_ES5 || typeof Object.defineProperties == "function" ? Object.defineProperty : function (ⵒⵕⵑⴺ, ⵂⵀⵕⴺ, ⴲⵋⵓⴻ) {
  var ⵒⴵⵗⴻ = 29;
  while (ⵒⴵⵗⴻ < 35) {
    switch (ⵒⴵⵗⴻ) {
      case 29:
        ⵒⴵⵗⴻ = ⵒⵕⵑⴺ == Array.prototype || ⵒⵕⵑⴺ == Object.prototype ? 20 : 35;
        break;
      case 20:
        ⵒⴵⵗⴻ = 35;
        return ⵒⵕⵑⴺ;
    }
  }
  ⵒⵕⵑⴺ[ⵂⵀⵕⴺ] = ⴲⵋⵓⴻ.value;
  return ⵒⵕⵑⴺ;
};
ⴲⴻⵎⴺ.getGlobal = function (ⵒⵅⵌⴻ) {
  ⵒⵅⵌⴻ = [typeof globalThis == "object" && globalThis, ⵒⵅⵌⴻ, typeof window == "object" && window, typeof self == "object" && self, typeof global == "object" && global];
  var ⵂⴰⵐⴻ = 35;
  while (ⵂⴰⵐⴻ < 36) {
    switch (ⵂⴰⵐⴻ) {
      case 19:
        ⵂⴰⵐⴻ = 21;
        ++ⵂⵀⵅⴻ;
        break;
      case 35:
        ⵂⴰⵐⴻ = 21;
        var ⵂⵀⵅⴻ = 0;
        break;
      case 21:
        ⵂⴰⵐⴻ = ⵂⵀⵅⴻ < ⵒⵅⵌⴻ.length ? 23 : 36;
        break;
      case 23:
        ⵂⴰⵐⴻ = 19;
        {
          var ⴲⵛⵈⴻ = ⵒⵅⵌⴻ[ⵂⵀⵅⴻ];
          var ⴲⴻⴾⴻ = 31;
          while (ⴲⴻⴾⴻ < 32) {
            switch (ⴲⴻⴾⴻ) {
              case 14:
                ⴲⴻⴾⴻ = 32;
                return ⴲⵛⵈⴻ;
              case 31:
                ⴲⴻⴾⴻ = ⴲⵛⵈⴻ && ⴲⵛⵈⴻ.Math == Math ? 14 : 32;
                break;
            }
          }
        }
        break;
    }
  }
  throw Error("Cannot find global object");
};
ⴲⴻⵎⴺ.global = ⴲⴻⵎⴺ.getGlobal(this);
ⴲⴻⵎⴺ.IS_SYMBOL_NATIVE = typeof Symbol === "function" && typeof Symbol("x") === "symbol";
ⴲⴻⵎⴺ.TRUST_ES6_POLYFILLS = !ⴲⴻⵎⴺ.ISOLATE_POLYFILLS || ⴲⴻⵎⴺ.IS_SYMBOL_NATIVE;
ⴲⴻⵎⴺ.polyfills = {};
ⴲⴻⵎⴺ.propertyToPolyfillSymbol = {};
ⴲⴻⵎⴺ.POLYFILL_PREFIX = "$jscp$";
function ⵒⵕⵁⴻ(ⵒⵅⵌⴷ, ⵂⴰⵐⴷ, ⵂⵀⵅⴷ) {
  var ⴲⵛⵈⴷ = 35;
  while (ⴲⵛⵈⴷ < 36) {
    switch (ⴲⵛⵈⴷ) {
      case 21:
        ⴲⵛⵈⴷ = 36;
        {
          ⵂⵀⵅⴷ = ⴲⴻⵎⴺ.propertyToPolyfillSymbol[ⵂⴰⵐⴷ];
          var ⴲⴻⴾⴷ = 20;
          while (ⴲⴻⴾⴷ < 35) {
            switch (ⴲⴻⴾⴷ) {
              case 20:
                ⴲⴻⴾⴷ = ⵂⵀⵅⴷ == null ? 34 : 35;
                break;
              case 34:
                ⴲⴻⴾⴷ = 35;
                return ⵒⵅⵌⴷ[ⵂⴰⵐⴷ];
            }
          }
          ⵂⵀⵅⴷ = ⵒⵅⵌⴷ[ⵂⵀⵅⴷ];
          if (ⵂⵀⵅⴷ !== undefined) {
            return ⵂⵀⵅⴷ;
          } else {
            return ⵒⵅⵌⴷ[ⵂⴰⵐⴷ];
          }
        }
        break;
      case 35:
        ⴲⵛⵈⴷ = !ⵂⵀⵅⴷ || ⵒⵅⵌⴷ != null ? 21 : 36;
        break;
    }
  }
}
ⴲⴻⵎⴺ.polyfill = function (ⵒⵕⵁⴷ, ⵒⴵⴷⴷ, ⵂⵐⴺⴷ, ⴲⵛⴸⴸ) {
  if (ⵒⴵⴷⴷ) {
    if (ⴲⴻⵎⴺ.ISOLATE_POLYFILLS) {
      ⴲⴻⵎⴺ.polyfillIsolated(ⵒⵕⵁⴷ, ⵒⴵⴷⴷ, ⵂⵐⴺⴷ, ⴲⵛⴸⴸ);
    } else {
      ⴲⴻⵎⴺ.polyfillUnisolated(ⵒⵕⵁⴷ, ⵒⴵⴷⴷ, ⵂⵐⴺⴷ, ⴲⵛⴸⴸ);
    }
  }
};
ⴲⴻⵎⴺ.polyfillUnisolated = function (ⵒⵅⴼⴸ, ⵒⵕⴱⴸ, ⵂⵀⴵⴸ, ⵂⵐⵚⴷ) {
  ⵂⵀⴵⴸ = ⴲⴻⵎⴺ.global;
  ⵒⵅⴼⴸ = ⵒⵅⴼⴸ.split(".");
  var ⴲⴻⵞⴷ = 24;
  while (ⴲⴻⵞⴷ < 35) {
    switch (ⴲⴻⵞⴷ) {
      case 29:
        ⴲⴻⵞⴷ = ⵂⵐⵚⴷ < ⵒⵅⴼⴸ.length - 1 ? 20 : 35;
        break;
      case 20:
        ⴲⴻⵞⴷ = 34;
        {
          var ⴲⵋⵓⴷ = ⵒⵅⴼⴸ[ⵂⵐⵚⴷ];
          var ⵒⴵⵗⴷ = 8;
          while (ⵒⴵⵗⴷ < 39) {
            switch (ⵒⴵⵗⴷ) {
              case 18:
                ⵒⴵⵗⴷ = 39;
                return;
              case 8:
                ⵒⴵⵗⴷ = !(ⴲⵋⵓⴷ in ⵂⵀⴵⴸ) ? 18 : 39;
                break;
            }
          }
          ⵂⵀⴵⴸ = ⵂⵀⴵⴸ[ⴲⵋⵓⴷ];
        }
        break;
      case 34:
        ⴲⴻⵞⴷ = 29;
        ⵂⵐⵚⴷ++;
        break;
      case 24:
        ⴲⴻⵞⴷ = 29;
        ⵂⵐⵚⴷ = 0;
        break;
    }
  }
  ⵒⵅⴼⴸ = ⵒⵅⴼⴸ[ⵒⵅⴼⴸ.length - 1];
  ⵂⵐⵚⴷ = ⵂⵀⴵⴸ[ⵒⵅⴼⴸ];
  ⵒⵕⴱⴸ = ⵒⵕⴱⴸ(ⵂⵐⵚⴷ);
  if (ⵒⵕⴱⴸ != ⵂⵐⵚⴷ && ⵒⵕⴱⴸ != null) {
    ⴲⴻⵎⴺ.defineProperty(ⵂⵀⴵⴸ, ⵒⵅⴼⴸ, {
      configurable: true,
      writable: true,
      value: ⵒⵕⴱⴸ
    });
  }
};
ⴲⴻⵎⴺ.polyfillIsolated = function (ⵂⵀⵕⴸ, ⴲⵛⵘⴸ, ⴲⴻⵎⴸ, ⵒⵕⵑⴸ) {
  var ⵒⴵⵇⴸ = ⵂⵀⵕⴸ.split(".");
  ⵂⵀⵕⴸ = ⵒⴵⵇⴸ.length === 1;
  ⵒⵕⵑⴸ = ⵒⴵⵇⴸ[0];
  ⵒⵕⵑⴸ = !ⵂⵀⵕⴸ && ⵒⵕⵑⴸ in ⴲⴻⵎⴺ.polyfills ? ⴲⴻⵎⴺ.polyfills : ⴲⴻⵎⴺ.global;
  var ⵂⵐⵊⴸ = 7;
  while (ⵂⵐⵊⴸ < 33) {
    switch (ⵂⵐⵊⴸ) {
      case 26:
        ⵂⵐⵊⴸ = 10;
        ⵒⵕⵁⴹ++;
        break;
      case 10:
        ⵂⵐⵊⴸ = ⵒⵕⵁⴹ < ⵒⴵⵇⴸ.length - 1 ? 32 : 33;
        break;
      case 32:
        ⵂⵐⵊⴸ = 26;
        {
          var ⵂⴰⵀⴸ = ⵒⴵⵇⴸ[ⵒⵕⵁⴹ];
          var ⴲⵋⵃⴸ = 35;
          while (ⴲⵋⵃⴸ < 36) {
            switch (ⴲⵋⵃⴸ) {
              case 35:
                ⴲⵋⵃⴸ = !(ⵂⴰⵀⴸ in ⵒⵕⵑⴸ) ? 21 : 36;
                break;
              case 21:
                ⴲⵋⵃⴸ = 36;
                return;
            }
          }
          ⵒⵕⵑⴸ = ⵒⵕⵑⴸ[ⵂⴰⵀⴸ];
        }
        break;
      case 7:
        ⵂⵐⵊⴸ = 10;
        var ⵒⵕⵁⴹ = 0;
        break;
    }
  }
  ⵒⴵⵇⴸ = ⵒⴵⵇⴸ[ⵒⴵⵇⴸ.length - 1];
  ⴲⴻⵎⴸ = ⴲⴻⵎⴺ.IS_SYMBOL_NATIVE && ⴲⴻⵎⴸ === "es6" ? ⵒⵕⵑⴸ[ⵒⴵⵇⴸ] : null;
  ⴲⵛⵘⴸ = ⴲⵛⵘⴸ(ⴲⴻⵎⴸ);
  if (ⴲⵛⵘⴸ != null) {
    if (ⵂⵀⵕⴸ) {
      ⴲⴻⵎⴺ.defineProperty(ⴲⴻⵎⴺ.polyfills, ⵒⴵⵇⴸ, {
        configurable: true,
        writable: true,
        value: ⴲⵛⵘⴸ
      });
    } else if (ⴲⵛⵘⴸ !== ⴲⴻⵎⴸ) {
      if (ⴲⴻⵎⴺ.propertyToPolyfillSymbol[ⵒⴵⵇⴸ] === undefined) {
        ⴲⴻⵎⴸ = Math.random() * 1000000000 >>> 0;
        ⴲⴻⵎⴺ.propertyToPolyfillSymbol[ⵒⴵⵇⴸ] = ⴲⴻⵎⴺ.IS_SYMBOL_NATIVE ? ⴲⴻⵎⴺ.global.Symbol(ⵒⴵⵇⴸ) : ⴲⴻⵎⴺ.POLYFILL_PREFIX + ⴲⴻⵎⴸ + "$" + ⵒⴵⵇⴸ;
      }
      ⴲⴻⵎⴺ.defineProperty(ⵒⵕⵑⴸ, ⴲⴻⵎⴺ.propertyToPolyfillSymbol[ⵒⴵⵇⴸ], {
        configurable: true,
        writable: true,
        value: ⴲⵛⵘⴸ
      });
    }
  }
};
ⴲⴻⵎⴺ.underscoreProtoCanBeSet = function () {
  var ⵂⵀⵅⴹ = {
    a: true
  };
  var ⵂⵐⴺⴹ = {};
  try {
    ⵂⵐⴺⴹ.__proto__ = ⵂⵀⵅⴹ;
    return ⵂⵐⴺⴹ.a;
  } catch (ⴲⴻⴾⴹ) {}
  return false;
};
ⴲⴻⵎⴺ.setPrototypeOf = ⴲⴻⵎⴺ.TRUST_ES6_POLYFILLS && typeof Object.setPrototypeOf == "function" ? Object.setPrototypeOf : ⴲⴻⵎⴺ.underscoreProtoCanBeSet() ? function (ⴲⵋⴳⴹ, ⵒⴵⴷⴹ) {
  ⴲⵋⴳⴹ.__proto__ = ⵒⴵⴷⴹ;
  var ⵒⵅⵜⴸ = 10;
  while (ⵒⵅⵜⴸ < 33) {
    switch (ⵒⵅⵜⴸ) {
      case 10:
        ⵒⵅⵜⴸ = ⴲⵋⴳⴹ.__proto__ !== ⵒⴵⴷⴹ ? 32 : 33;
        break;
      case 32:
        ⵒⵅⵜⴸ = 33;
        throw new TypeError(ⴲⵋⴳⴹ + " is not extensible");
    }
  }
  return ⴲⵋⴳⴹ;
} : null;
ⴲⴻⵎⴺ.generator = {};
ⴲⴻⵎⴺ.generator.ensureIteratorResultIsObject_ = function (ⵂⴰⴰⴹ) {
  var ⵂⵐⴺⴵ = 21;
  while (ⵂⵐⴺⴵ < 24) {
    switch (ⵂⵐⴺⴵ) {
      case 23:
        ⵂⵐⴺⴵ = 24;
        throw new TypeError("Iterator result " + ⵂⴰⴰⴹ + " is not an object");
      case 21:
        ⵂⵐⴺⴵ = !(ⵂⴰⴰⴹ instanceof Object) ? 23 : 24;
        break;
    }
  }
};
ⴲⴻⵎⴺ.generator.Context = function () {
  this.isRunning_ = false;
  this.yieldAllIterator_ = null;
  this.yieldResult = undefined;
  this.nextAddress = 1;
  this.finallyAddress_ = this.catchAddress_ = 0;
  this.finallyContexts_ = this.abruptCompletion_ = null;
};
ⴲⴻⵎⴺ.generator.Context.prototype.start_ = function () {
  var ⴲⴻⴾⴵ = 15;
  while (ⴲⴻⴾⴵ < 38) {
    switch (ⴲⴻⴾⴵ) {
      case 37:
        ⴲⴻⴾⴵ = 38;
        throw new TypeError("Generator is already running");
      case 15:
        ⴲⴻⴾⴵ = this.isRunning_ ? 37 : 38;
        break;
    }
  }
  this.isRunning_ = true;
};
ⴲⴻⵎⴺ.generator.Context.prototype.stop_ = function () {
  this.isRunning_ = false;
};
ⴲⴻⵎⴺ.generator.Context.prototype.jumpToErrorHandler_ = function () {
  this.nextAddress = this.catchAddress_ || this.finallyAddress_;
};
ⴲⴻⵎⴺ.generator.Context.prototype.next_ = function (ⴲⵋⴳⴵ) {
  this.yieldResult = ⴲⵋⴳⴵ;
};
ⴲⴻⵎⴺ.generator.Context.prototype.throw_ = function (ⵒⴵⴷⴵ) {
  this.abruptCompletion_ = {
    exception: ⵒⴵⴷⴵ,
    isException: true
  };
  this.jumpToErrorHandler_();
};
ⴲⴻⵎⴺ.generator.Context.prototype.return = function (ⵒⵅⵜⴴ) {
  this.abruptCompletion_ = {
    return: ⵒⵅⵜⴴ
  };
  this.nextAddress = this.finallyAddress_;
};
ⴲⴻⵎⴺ.generator.Context.prototype.jumpThroughFinallyBlocks = function (ⵂⴰⴰⴵ) {
  this.abruptCompletion_ = {
    jumpTo: ⵂⴰⴰⴵ
  };
  this.nextAddress = this.finallyAddress_;
};
ⴲⴻⵎⴺ.generator.Context.prototype.yield = function (ⵂⵀⵕⴴ, ⴲⵛⵘⴴ) {
  this.nextAddress = ⴲⵛⵘⴴ;
  return {
    value: ⵂⵀⵕⴴ
  };
};
ⴲⴻⵎⴺ.generator.Context.prototype.yieldAll = function (ⵒⴵⵗⴵ, ⵂⵐⵚⴵ) {
  var ⵂⴰⵐⴵ = ⴲⴻⵎⴺ.makeIterator(ⵒⴵⵗⴵ);
  var ⴲⵋⵓⴵ = ⵂⴰⵐⴵ.next();
  ⴲⴻⵎⴺ.generator.ensureIteratorResultIsObject_(ⴲⵋⵓⴵ);
  var ⴲⵛⵈⴵ = 8;
  while (ⴲⵛⵈⴵ < 39) {
    switch (ⴲⵛⵈⴵ) {
      case 18:
        ⴲⵛⵈⴵ = 39;
        this.yieldResult = ⴲⵋⵓⴵ.value;
        this.nextAddress = ⵂⵐⵚⴵ;
        break;
      case 8:
        ⴲⵛⵈⴵ = ⴲⵋⵓⴵ.done ? 18 : 13;
        break;
      case 13:
        ⴲⵛⵈⴵ = 39;
        this.yieldAllIterator_ = ⵂⴰⵐⴵ;
        return this.yield(ⴲⵋⵓⴵ.value, ⵂⵐⵚⴵ);
    }
  }
};
ⴲⴻⵎⴺ.generator.Context.prototype.jumpTo = function (ⵒⵅⵌⴵ) {
  this.nextAddress = ⵒⵅⵌⴵ;
};
ⴲⴻⵎⴺ.generator.Context.prototype.jumpToEnd = function () {
  this.nextAddress = 0;
};
ⴲⴻⵎⴺ.generator.Context.prototype.setCatchFinallyBlocks = function (ⵒⵕⵁⴵ, ⵂⵀⵅⴵ) {
  this.catchAddress_ = ⵒⵕⵁⴵ;
  if (ⵂⵀⵅⴵ != undefined) {
    this.finallyAddress_ = ⵂⵀⵅⴵ;
  }
};
ⴲⴻⵎⴺ.generator.Context.prototype.setFinallyBlock = function (ⴲⵋⵃⴶ) {
  this.catchAddress_ = 0;
  this.finallyAddress_ = ⴲⵋⵃⴶ || 0;
};
ⴲⴻⵎⴺ.generator.Context.prototype.leaveTryBlock = function (ⵒⴵⵇⴶ, ⵒⵅⴼⴶ) {
  this.nextAddress = ⵒⴵⵇⴶ;
  this.catchAddress_ = ⵒⵅⴼⴶ || 0;
};
ⴲⴻⵎⴺ.generator.Context.prototype.enterCatchBlock = function (ⵂⴰⵀⴶ) {
  this.catchAddress_ = ⵂⴰⵀⴶ || 0;
  ⵂⴰⵀⴶ = this.abruptCompletion_.exception;
  this.abruptCompletion_ = null;
  return ⵂⴰⵀⴶ;
};
ⴲⴻⵎⴺ.generator.Context.prototype.enterFinallyBlock = function (ⵂⵀⴵⴶ, ⴲⵛⴸⴶ, ⴲⴻⵞⴵ) {
  if (ⴲⴻⵞⴵ) {
    this.finallyContexts_[ⴲⴻⵞⴵ] = this.abruptCompletion_;
  } else {
    this.finallyContexts_ = [this.abruptCompletion_];
  }
  this.catchAddress_ = ⵂⵀⴵⴶ || 0;
  this.finallyAddress_ = ⴲⵛⴸⴶ || 0;
};
ⴲⴻⵎⴺ.generator.Context.prototype.leaveFinallyBlock = function (ⵒⵕⴱⴶ, ⵂⴰⴰⴷ) {
  var ⴲⵋⴳⴷ = this.finallyContexts_.splice(ⵂⴰⴰⴷ || 0)[0];
  var ⴲⵛⵘⴶ = 12;
  while (ⴲⵛⵘⴶ < 19) {
    switch (ⴲⵛⵘⴶ) {
      case 12:
        ⴲⵛⵘⴶ = (ⴲⵋⴳⴷ = this.abruptCompletion_ = this.abruptCompletion_ || ⴲⵋⴳⴷ) ? 8 : 18;
        break;
      case 8:
        ⴲⵛⵘⴶ = 19;
        {
          var ⵒⵅⵜⴶ = 14;
          while (ⵒⵅⵜⴶ < 33) {
            switch (ⵒⵅⵜⴶ) {
              case 14:
                ⵒⵅⵜⴶ = ⴲⵋⴳⴷ.isException ? 7 : 33;
                break;
              case 7:
                ⵒⵅⵜⴶ = 33;
                return this.jumpToErrorHandler_();
            }
          }
          if (ⴲⵋⴳⴷ.jumpTo != undefined && this.finallyAddress_ < ⴲⵋⴳⴷ.jumpTo) {
            this.nextAddress = ⴲⵋⴳⴷ.jumpTo;
            this.abruptCompletion_ = null;
          } else {
            this.nextAddress = this.finallyAddress_;
          }
        }
        break;
      case 18:
        ⴲⵛⵘⴶ = 19;
        this.nextAddress = ⵒⵕⴱⴶ;
        break;
    }
  }
};
ⴲⴻⵎⴺ.generator.Context.prototype.forIn = function (ⵒⵕⵑⴶ) {
  return new ⴲⴻⵎⴺ.generator.Context.PropertyIterator(ⵒⵕⵑⴶ);
};
ⴲⴻⵎⴺ.generator.Context.PropertyIterator = function (ⵂⵀⵕⴶ) {
  this.object_ = ⵂⵀⵕⴶ;
  this.properties_ = [];
  for (var ⵂⵐⵊⴶ in ⵂⵀⵕⴶ) {
    this.properties_.push(ⵂⵐⵊⴶ);
  }
  this.properties_.reverse();
};
ⴲⴻⵎⴺ.generator.Context.PropertyIterator.prototype.getNext = function () {
  var ⴲⴻⵎⴶ = 25;
  while (ⴲⴻⵎⴶ < 38) {
    switch (ⴲⴻⵎⴶ) {
      case 15:
        ⴲⴻⵎⴶ = 25;
        {
          var ⴲⵛⵘⴲ = this.properties_.pop();
          var ⵒⵅⵜⴲ = 18;
          while (ⵒⵅⵜⴲ < 39) {
            switch (ⵒⵅⵜⴲ) {
              case 18:
                ⵒⵅⵜⴲ = ⴲⵛⵘⴲ in this.object_ ? 13 : 39;
                break;
              case 13:
                ⵒⵅⵜⴲ = 39;
                return ⴲⵛⵘⴲ;
            }
          }
        }
        break;
      case 25:
        ⴲⴻⵎⴶ = this.properties_.length > 0 ? 15 : 38;
        break;
    }
  }
  return null;
};
ⴲⴻⵎⴺ.generator.Engine_ = function (ⵒⵕⵑⴲ) {
  this.context_ = new ⴲⴻⵎⴺ.generator.Context();
  this.program_ = ⵒⵕⵑⴲ;
};
ⴲⴻⵎⴺ.generator.Engine_.prototype.next_ = function (ⵂⵀⵕⴲ) {
  this.context_.start_();
  var ⵂⵐⵊⴲ = 12;
  while (ⵂⵐⵊⴲ < 19) {
    switch (ⵂⵐⵊⴲ) {
      case 8:
        ⵂⵐⵊⴲ = 19;
        return this.yieldAllStep_(this.context_.yieldAllIterator_.next, ⵂⵀⵕⴲ, this.context_.next_);
      case 12:
        ⵂⵐⵊⴲ = this.context_.yieldAllIterator_ ? 8 : 19;
        break;
    }
  }
  this.context_.next_(ⵂⵀⵕⴲ);
  return this.nextStep_();
};
ⴲⴻⵎⴺ.generator.Engine_.prototype.return_ = function (ⴲⴻⵎⴲ) {
  this.context_.start_();
  var ⴲⵋⵃⴲ = this.context_.yieldAllIterator_;
  var ⵒⴵⵇⴲ = 11;
  while (ⵒⴵⵇⴲ < 32) {
    switch (ⵒⴵⵇⴲ) {
      case 11:
        ⵒⴵⵇⴲ = ⴲⵋⵃⴲ ? 31 : 32;
        break;
      case 31:
        ⵒⴵⵇⴲ = 32;
        return this.yieldAllStep_("return" in ⴲⵋⵃⴲ ? ⴲⵋⵃⴲ.return : function (ⵂⵀⵅⴳ) {
          return {
            value: ⵂⵀⵅⴳ,
            done: true
          };
        }, ⴲⴻⵎⴲ, this.context_.return);
    }
  }
  this.context_.return(ⴲⴻⵎⴲ);
  return this.nextStep_();
};
ⴲⴻⵎⴺ.generator.Engine_.prototype.throw_ = function (ⴲⵛⵈⴳ) {
  this.context_.start_();
  var ⴲⴻⴾⴳ = 35;
  while (ⴲⴻⴾⴳ < 36) {
    switch (ⴲⴻⴾⴳ) {
      case 35:
        ⴲⴻⴾⴳ = this.context_.yieldAllIterator_ ? 21 : 36;
        break;
      case 21:
        ⴲⴻⴾⴳ = 36;
        return this.yieldAllStep_(this.context_.yieldAllIterator_.throw, ⴲⵛⵈⴳ, this.context_.next_);
    }
  }
  this.context_.throw_(ⴲⵛⵈⴳ);
  return this.nextStep_();
};
ⴲⴻⵎⴺ.generator.Engine_.prototype.yieldAllStep_ = function (ⵒⵕⵁⴳ, ⵒⴵⴷⴳ, ⵂⵐⴺⴳ) {
  try {
    var ⵂⴰⴰⴳ = ⵒⵕⵁⴳ.call(this.context_.yieldAllIterator_, ⵒⴵⴷⴳ);
    ⴲⴻⵎⴺ.generator.ensureIteratorResultIsObject_(ⵂⴰⴰⴳ);
    var ⴲⵋⴳⴳ = 11;
    while (ⴲⵋⴳⴳ < 32) {
      switch (ⴲⵋⴳⴳ) {
        case 11:
          ⴲⵋⴳⴳ = !ⵂⴰⴰⴳ.done ? 31 : 32;
          break;
        case 31:
          ⴲⵋⴳⴳ = 32;
          this.context_.stop_();
          return ⵂⴰⴰⴳ;
      }
    }
    var ⵒⵕⴱⴴ = ⵂⴰⴰⴳ.value;
  } catch (ⵂⵀⴵⴴ) {
    this.context_.yieldAllIterator_ = null;
    this.context_.throw_(ⵂⵀⴵⴴ);
    return this.nextStep_();
  }
  this.context_.yieldAllIterator_ = null;
  ⵂⵐⴺⴳ.call(this.context_, ⵒⵕⴱⴴ);
  return this.nextStep_();
};
ⴲⴻⵎⴺ.generator.Engine_.prototype.nextStep_ = function () {
  var ⵂⵐⵚⴳ = 18;
  while (ⵂⵐⵚⴳ < 39) {
    switch (ⵂⵐⵚⴳ) {
      case 18:
        ⵂⵐⵚⴳ = this.context_.nextAddress ? 13 : 39;
        break;
      case 13:
        ⵂⵐⵚⴳ = 18;
        try {
          var ⴲⴻⵞⴳ = this.program_(this.context_);
          var ⴲⵋⵓⴳ = 14;
          while (ⴲⵋⵓⴳ < 33) {
            switch (ⴲⵋⵓⴳ) {
              case 14:
                ⴲⵋⵓⴳ = ⴲⴻⵞⴳ ? 7 : 33;
                break;
              case 7:
                ⴲⵋⵓⴳ = 33;
                this.context_.stop_();
                return {
                  value: ⴲⴻⵞⴳ.value,
                  done: false
                };
            }
          }
        } catch (ⵒⴵⵗⴳ) {
          this.context_.yieldResult = undefined;
          this.context_.throw_(ⵒⴵⵗⴳ);
        }
        break;
    }
  }
  this.context_.stop_();
  var ⵒⵅⵌⴳ = 7;
  while (ⵒⵅⵌⴳ < 33) {
    switch (ⵒⵅⵌⴳ) {
      case 10:
        ⵒⵅⵌⴳ = 33;
        {
          ⴲⴻⵞⴳ = this.context_.abruptCompletion_;
          this.context_.abruptCompletion_ = null;
          var ⵂⴰⵐⴳ = 14;
          while (ⵂⴰⵐⴳ < 33) {
            switch (ⵂⴰⵐⴳ) {
              case 7:
                ⵂⴰⵐⴳ = 33;
                throw ⴲⴻⵞⴳ.exception;
              case 14:
                ⵂⴰⵐⴳ = ⴲⴻⵞⴳ.isException ? 7 : 33;
                break;
            }
          }
          return {
            value: ⴲⴻⵞⴳ.return,
            done: true
          };
        }
        break;
      case 7:
        ⵒⵅⵌⴳ = this.context_.abruptCompletion_ ? 10 : 33;
        break;
    }
  }
  return {
    value: undefined,
    done: true
  };
};
ⴲⴻⵎⴺ.generator.Generator_ = function (ⴲⴻⵎⴴ) {
  this.next = function (ⵒⵕⵑⴴ) {
    return ⴲⴻⵎⴴ.next_(ⵒⵕⵑⴴ);
  };
  this.throw = function (ⵒⴵⵇⴴ) {
    return ⴲⴻⵎⴴ.throw_(ⵒⴵⵇⴴ);
  };
  this.return = function (ⵂⵐⵊⴴ) {
    return ⴲⴻⵎⴴ.return_(ⵂⵐⵊⴴ);
  };
  this[Symbol.iterator] = function () {
    return this;
  };
};
ⴲⴻⵎⴺ.generator.createGenerator = function (ⵂⴰⵀⴴ, ⴲⵋⵃⴴ) {
  var ⴲⵛⴸⴴ = new ⴲⴻⵎⴺ.generator.Generator_(new ⴲⴻⵎⴺ.generator.Engine_(ⴲⵋⵃⴴ));
  if (ⴲⴻⵎⴺ.setPrototypeOf && ⵂⴰⵀⴴ.prototype) {
    ⴲⴻⵎⴺ.setPrototypeOf(ⴲⵛⴸⴴ, ⵂⴰⵀⴴ.prototype);
  }
  return ⴲⵛⴸⴴ;
};
ⴲⴻⵎⴺ.asyncExecutePromiseGenerator = function (ⵒⵅⴼⴴ) {
  function ⵒⴵⵇ(ⵂⵐⵊ) {
    return ⵒⵅⴼⴴ.next(ⵂⵐⵊ);
  }
  function ⵂⴰⵀ(ⴲⵋⵃ) {
    return ⵒⵅⴼⴴ.throw(ⴲⵋⵃ);
  }
  return new Promise(function (ⴲⵛⴸ, ⵒⵅⴼ) {
    function ⵒⵕⴱ(ⵂⵀⴵ) {
      if (ⵂⵀⴵ.done) {
        ⴲⵛⴸ(ⵂⵀⴵ.value);
      } else {
        Promise.resolve(ⵂⵀⴵ.value).then(ⵒⴵⵇ, ⵂⴰⵀ).then(ⵒⵕⴱ, ⵒⵅⴼ);
      }
    }
    ⵒⵕⴱ(ⵒⵅⴼⴴ.next());
  });
};
ⴲⴻⵎⴺ.asyncExecutePromiseGeneratorFunction = function (ⴲⵋⴳⴱ) {
  return ⴲⴻⵎⴺ.asyncExecutePromiseGenerator(ⴲⵋⴳⴱ());
};
ⴲⴻⵎⴺ.asyncExecutePromiseGeneratorProgram = function (ⵒⴵⴷⴱ) {
  return ⴲⴻⵎⴺ.asyncExecutePromiseGenerator(new ⴲⴻⵎⴺ.generator.Generator_(new ⴲⴻⵎⴺ.generator.Engine_(ⵒⴵⴷⴱ)));
};
var ⵒⵅⵜ = require("chalk");
var ⵂⴰⴰⴱ = require("path");
var ⵂⵀⵕ = global.utils;
var ⴲⵛⵘ = ⵂⵀⵕ.log;
var ⴲⴻⵎ = ⵂⵀⵕ.createOraDots;
var ⵒⵕⵑ = ⵂⵀⵕ.getText;
module.exports = function (ⵂⴰⵐⴱ, ⴲⵋⵓⴱ) {
  var ⴲⵛⵈⴱ;
  var ⵒⵅⵌⴱ;
  var ⵒⵕⵁⴱ;
  var ⵂⵀⵅⴱ;
  var ⵂⵐⴺⴱ;
  var ⴲⴻⴾⴱ;
  var ⵒⵅⴼⴲ;
  var ⵂⴰⵀⴲ;
  var ⵂⵀⴵⴲ;
  var ⴲⵛⴸⴲ;
  var ⴲⴻⵞⴱ;
  var ⵒⵕⴱⴲ;
  var ⵒⴵⵗⴱ;
  var ⵂⵐⵚⴱ;
  var ⵒⴵⵗⴵⴳ;
  var ⵂⵐⵚⴵⴳ;
  var ⵂⴰⵐⴵⴳ;
  var ⴲⵋⵓⴵⴳ;
  var ⴲⵛⵈⴵⴳ;
  var ⵒⵅⵌⴵⴳ;
  var ⵒⵕⵁⴵⴳ;
  var ⵂⵀⵅⴵⴳ;
  var ⴲⵋⵃⴶⴳ;
  var ⵒⴵⵇⴶⴳ;
  var ⵒⵅⴼⴶⴳ;
  var ⵂⴰⵀⴶⴳ;
  var ⵂⵀⴵⴶⴳ;
  var ⴲⵛⴸⴶⴳ;
  return ⴲⴻⵎⴺ.asyncExecutePromiseGeneratorProgram(function (ⴲⴻⵞⴵⴳ) {
    switch (ⴲⴻⵞⴵⴳ.nextAddress) {
      case 1:
        console.log(ⵒⵅⵜ.hex("#f5ab00")(ⴲⵋⵓⴱ("DATABASE")));
        return ⴲⴻⵞⴵⴳ.yield(require(ⵂⴰⴰⴱ.join(__dirname, "..", "..", "database/controller/index.js"))(ⵂⴰⵐⴱ), 2);
      case 2:
        ⵒⵅⵌⴱ = ⴲⵛⵈⴱ = ⴲⴻⵞⴵⴳ.yieldResult;
        ⵒⵕⵁⴱ = ⵒⵅⵌⴱ.threadModel;
        ⵂⵀⵅⴱ = ⵒⵅⵌⴱ.userModel;
        ⵂⵐⴺⴱ = ⵒⵅⵌⴱ.dashBoardModel;
        ⴲⴻⴾⴱ = ⵒⵅⵌⴱ.globalModel;
        ⵒⵅⴼⴲ = ⵒⵅⵌⴱ.threadsData;
        ⵂⴰⵀⴲ = ⵒⵅⵌⴱ.usersData;
        ⵂⵀⴵⴲ = ⵒⵅⵌⴱ.dashBoardData;
        ⴲⵛⴸⴲ = ⵒⵅⵌⴱ.globalData;
        ⴲⴻⵞⴱ = ⵒⵅⵌⴱ.sequelize;
        ⴲⵛⵘ.info("DATABASE", ⵒⵕⵑ("loadData", "loadThreadDataSuccess", global.db.allThreadData.filter(function (ⵒⵕⴱⴶⴳ) {
          return ⵒⵕⴱⴶⴳ.threadID.toString().length > 15;
        }).length));
        ⴲⵛⵘ.info("DATABASE", ⵒⵕⵑ("loadData", "loadUserDataSuccess", global.db.allUserData.length));
        var ⵂⴰⴰⴷⴳ = 7;
        while (ⵂⴰⴰⴷⴳ < 33) {
          switch (ⵂⴰⴰⴷⴳ) {
            case 7:
              ⵂⴰⴰⴷⴳ = !ⵂⴰⵐⴱ || global.GoatBot.config.database.autoSyncWhenStart != 1 ? 10 : 33;
              break;
            case 10:
              ⵂⴰⴰⴷⴳ = 33;
              {
                ⴲⴻⵞⴵⴳ.jumpTo(3);
                ⵂⴰⴰⴷⴳ = 34;
              }
              break;
          }
        }
        if (ⵂⴰⴰⴷⴳ === 34) {
          break;
        }
        console.log(ⵒⵅⵜ.hex("#f5ab00")(ⴲⵋⵓⴱ("AUTO SYNC")));
        ⵒⵕⴱⴲ = ⴲⴻⵎ(ⵒⵕⵑ("loadData", "refreshingThreadData"));
        ⴲⴻⵞⴵⴳ.setCatchFinallyBlocks(4, 5);
        ⵂⴰⵐⴱ.setOptions({
          logLevel: "silent"
        });
        ⵒⵕⴱⴲ._start();
        ⵒⴵⵗⴱ = [];
        ⵂⵐⵚⴱ = [].concat(ⴲⴻⵎⴺ.arrayFromIterable(global.db.allThreadData));
        return ⴲⴻⵞⴵⴳ.yield(ⵂⴰⵐⴱ.getThreadList(9999999, null, "INBOX"), 7);
      case 7:
        ⵒⴵⵗⴵⴳ = ⴲⴻⵞⴵⴳ.yieldResult;
        ⵂⵐⵚⴵⴳ = {};
        ⵂⴰⵐⴵⴳ = ⴲⴻⵎⴺ.makeIterator(ⵒⴵⵗⴵⴳ);
        ⴲⵋⵓⴵⴳ = ⵂⴰⵐⴵⴳ.next();
      case 8:
        var ⴲⵋⴳⴷⴳ = 8;
        while (ⴲⵋⴳⴷⴳ < 39) {
          switch (ⴲⵋⴳⴷⴳ) {
            case 8:
              ⴲⵋⴳⴷⴳ = ⴲⵋⵓⴵⴳ.done ? 18 : 39;
              break;
            case 18:
              ⴲⵋⴳⴷⴳ = 39;
              {
                ⴲⴻⵞⴵⴳ.jumpTo(10);
                ⴲⵋⴳⴷⴳ = 40;
              }
              break;
          }
        }
        if (ⴲⵋⴳⴷⴳ === 40) {
          break;
        }
        ⵂⵐⵚⴵⴳ.$jscomp$loop$prop$threadInfo$4 = ⴲⵋⵓⴵⴳ.value;
        if (ⵂⵐⵚⴵⴳ.$jscomp$loop$prop$threadInfo$4.isGroup && !ⵂⵐⵚⴱ.some(function (ⴲⵛⵘⴶⴳ) {
          return function (ⵒⵅⵜⴶⴳ) {
            return ⵒⵅⵜⴶⴳ.threadID === ⴲⵛⵘⴶⴳ.$jscomp$loop$prop$threadInfo$4.threadID;
          };
        }(ⵂⵐⵚⴵⴳ))) {
          ⵒⵅⵌⴵⴳ = ⵒⴵⵗⴱ;
          ⵒⵕⵁⴵⴳ = ⵒⵅⵌⴵⴳ.push;
          return ⴲⴻⵞⴵⴳ.yield(ⵒⵅⴼⴲ.create(ⵂⵐⵚⴵⴳ.$jscomp$loop$prop$threadInfo$4.threadID, ⵂⵐⵚⴵⴳ.$jscomp$loop$prop$threadInfo$4), 14);
        } else {
          return ⴲⴻⵞⴵⴳ.yield(ⵒⵅⴼⴲ.refreshInfo(ⵂⵐⵚⴵⴳ.$jscomp$loop$prop$threadInfo$4.threadID, ⵂⵐⵚⴵⴳ.$jscomp$loop$prop$threadInfo$4), 13);
        }
      case 13:
        ⴲⵛⵈⴵⴳ = ⴲⴻⵞⴵⴳ.yieldResult;
        ⵂⵐⵚⴱ.splice(ⵂⵐⵚⴱ.findIndex(function (ⵒⵕⵑⴶⴳ) {
          return function (ⵂⵀⵕⴶⴳ) {
            return ⵂⵀⵕⴶⴳ.threadID === ⵒⵕⵑⴶⴳ.$jscomp$loop$prop$threadInfo$4.threadID;
          };
        }(ⵂⵐⵚⴵⴳ)), 1);
        ⵒⴵⵗⴱ.push(ⴲⵛⵈⴵⴳ);
        ⴲⴻⵞⴵⴳ.jumpTo(12);
        break;
      case 14:
        ⵒⵕⵁⴵⴳ.call(ⵒⵅⵌⴵⴳ, ⴲⴻⵞⴵⴳ.yieldResult);
      case 12:
        global.db.receivedTheFirstMessage[ⵂⵐⵚⴵⴳ.$jscomp$loop$prop$threadInfo$4.threadID] = true;
        ⵂⵐⵚⴵⴳ = {
          $jscomp$loop$prop$threadInfo$4: ⵂⵐⵚⴵⴳ.$jscomp$loop$prop$threadInfo$4
        };
        ⴲⵋⵓⴵⴳ = ⵂⴰⵐⴵⴳ.next();
        ⴲⴻⵞⴵⴳ.jumpTo(8);
        break;
      case 10:
        ⵂⵀⵅⴵⴳ = ⵂⵐⵚⴱ.filter(function (ⵂⵐⵊⴶⴳ) {
          return !ⵒⴵⵗⴵⴳ.some(function (ⴲⴻⵎⴶⴳ) {
            return ⵂⵐⵊⴶⴳ.threadID === ⴲⴻⵎⴶⴳ.threadID;
          });
        });
        ⴲⵋⵃⴶⴳ = ⵂⴰⵐⴱ.getCurrentUserID();
        ⵒⴵⵇⴶⴳ = ⴲⴻⵎⴺ.makeIterator(ⵂⵀⵅⴵⴳ);
        ⵒⵅⴼⴶⴳ = ⵒⴵⵇⴶⴳ.next();
      case 15:
        var ⵒⵅⵌⴷⴳ = 24;
        while (ⵒⵅⵌⴷⴳ < 35) {
          switch (ⵒⵅⵌⴷⴳ) {
            case 24:
              ⵒⵅⵌⴷⴳ = ⵒⵅⴼⴶⴳ.done ? 29 : 35;
              break;
            case 29:
              ⵒⵅⵌⴷⴳ = 35;
              {
                ⴲⴻⵞⴵⴳ.jumpTo(17);
                ⵒⵅⵌⴷⴳ = 36;
              }
              break;
          }
        }
        if (ⵒⵅⵌⴷⴳ === 36) {
          break;
        }
        ⵂⴰⵀⴶⴳ = ⵒⵅⴼⴶⴳ.value;
        ⵂⵀⴵⴶⴳ = ⵂⴰⵀⴶⴳ.members.find(function (ⵂⴰⵐⴷⴳ) {
          return ⵂⴰⵐⴷⴳ.userID == ⴲⵋⵃⴶⴳ;
        });
        var ⵂⵀⵅⴷⴳ = 34;
        while (ⵂⵀⵅⴷⴳ < 38) {
          switch (ⵂⵀⵅⴷⴳ) {
            case 34:
              ⵂⵀⵅⴷⴳ = !ⵂⵀⴵⴶⴳ ? 25 : 38;
              break;
            case 25:
              ⵂⵀⵅⴷⴳ = 38;
              {
                ⴲⴻⵞⴵⴳ.jumpTo(16);
                ⵂⵀⵅⴷⴳ = 39;
              }
              break;
          }
        }
        if (ⵂⵀⵅⴷⴳ === 39) {
          break;
        }
        ⵂⵀⴵⴶⴳ.inGroup = false;
        return ⴲⴻⵞⴵⴳ.yield(ⵒⵅⴼⴲ.set(ⵂⴰⵀⴶⴳ.threadID, {
          members: ⵂⴰⵀⴶⴳ.members
        }), 16);
      case 16:
        ⵒⵅⴼⴶⴳ = ⵒⴵⵇⴶⴳ.next();
        ⴲⴻⵞⴵⴳ.jumpTo(15);
        break;
      case 17:
        global.db.allThreadData = [].concat(ⴲⴻⵎⴺ.arrayFromIterable(ⵒⴵⵗⴱ), ⴲⴻⵎⴺ.arrayFromIterable(ⵂⵀⵅⴵⴳ));
        ⵒⵕⴱⴲ._stop();
        ⴲⵛⵘ.info("DATABASE", ⵒⵕⵑ("loadData", "refreshThreadDataSuccess", global.db.allThreadData.length));
      case 5:
        ⴲⴻⵞⴵⴳ.enterFinallyBlock();
        ⵂⴰⵐⴱ.setOptions({
          logLevel: global.GoatBot.config.optionsFca.logLevel
        });
        ⴲⴻⵞⴵⴳ.leaveFinallyBlock(3);
        break;
      case 4:
        ⴲⵛⴸⴶⴳ = ⴲⴻⵞⴵⴳ.enterCatchBlock();
        ⵒⵕⴱⴲ._stop();
        ⴲⵛⵘ.error("DATABASE", ⵒⵕⵑ("loadData", "refreshThreadDataError"), ⴲⵛⴸⴶⴳ);
        ⴲⴻⵞⴵⴳ.jumpTo(5);
        break;
      case 3:
        return ⴲⴻⵞⴵⴳ.return({
          threadModel: ⵒⵕⵁⴱ || null,
          userModel: ⵂⵀⵅⴱ || null,
          dashBoardModel: ⵂⵐⴺⴱ || null,
          globalModel: ⴲⴻⴾⴱ || null,
          threadsData: ⵒⵅⴼⴲ,
          usersData: ⵂⴰⵀⴲ,
          dashBoardData: ⵂⵀⴵⴲ,
          globalData: ⴲⵛⴸⴲ,
          sequelize: ⴲⴻⵞⴱ
        });
    }
  });
};
