var ⵂⴰⵀⵎ = ⵂⴰⵀⵎ || {};
ⵂⴰⵀⵎ.scope = {};
ⵂⴰⵀⵎ.createTemplateTagFirstArg = function (ⵂⵐⵊⵊ) {
  return ⵂⵐⵊⵊ.raw = ⵂⵐⵊⵊ;
};
ⵂⴰⵀⵎ.createTemplateTagFirstArgWithRaw = function (ⴲⴻⵎⵊ, ⴲⵋⵃⵊ) {
  ⴲⴻⵎⵊ.raw = ⴲⵋⵃⵊ;
  return ⴲⴻⵎⵊ;
};
ⵂⴰⵀⵎ.owns = function (ⵒⴵⵇⵊ, ⵒⵅⴼⵊ) {
  return Object.prototype.hasOwnProperty.call(ⵒⴵⵇⵊ, ⵒⵅⴼⵊ);
};
ⵂⴰⵀⵎ.ASSUME_ES5 = false;
ⵂⴰⵀⵎ.ASSUME_NO_NATIVE_MAP = false;
ⵂⴰⵀⵎ.ASSUME_NO_NATIVE_SET = false;
ⵂⴰⵀⵎ.SIMPLE_FROUND_POLYFILL = false;
ⵂⴰⵀⵎ.ISOLATE_POLYFILLS = false;
ⵂⴰⵀⵎ.FORCE_POLYFILL_PROMISE = false;
ⵂⴰⵀⵎ.FORCE_POLYFILL_PROMISE_WHEN_NO_UNHANDLED_REJECTION = false;
ⵂⴰⵀⵎ.defineProperty = ⵂⴰⵀⵎ.ASSUME_ES5 || typeof Object.defineProperties == "function" ? Object.defineProperty : function (ⵂⴰⵀⵊ, ⵂⵀⴵⵊ, ⴲⵛⴸⵊ) {
  var ⵒⴵⴷⵋ = 15;
  while (ⵒⴵⴷⵋ < 35) {
    switch (ⵒⴵⴷⵋ) {
      case 15:
        ⵒⴵⴷⵋ = ⵂⴰⵀⵊ == Array.prototype || ⵂⴰⵀⵊ == Object.prototype ? 13 : 35;
        break;
      case 13:
        ⵒⴵⴷⵋ = 35;
        return ⵂⴰⵀⵊ;
    }
  }
  ⵂⴰⵀⵊ[ⵂⵀⴵⵊ] = ⴲⵛⴸⵊ.value;
  return ⵂⴰⵀⵊ;
};
ⵂⴰⵀⵎ.getGlobal = function (ⵂⵐⴺⵋ) {
  ⵂⵐⴺⵋ = [typeof globalThis == "object" && globalThis, ⵂⵐⴺⵋ, typeof window == "object" && window, typeof self == "object" && self, typeof global == "object" && global];
  var ⵂⴰⴰⵋ = 21;
  while (ⵂⴰⴰⵋ < 31) {
    switch (ⵂⴰⴰⵋ) {
      case 13:
        ⵂⴰⴰⵋ = 30;
        ++ⴲⵋⴳⵋ;
        break;
      case 21:
        ⵂⴰⴰⵋ = 30;
        var ⴲⵋⴳⵋ = 0;
        break;
      case 15:
        ⵂⴰⴰⵋ = 13;
        {
          var ⴲⵛⵘⵊ = ⵂⵐⴺⵋ[ⴲⵋⴳⵋ];
          var ⵒⵅⵜⵊ = 7;
          while (ⵒⵅⵜⵊ < 37) {
            switch (ⵒⵅⵜⵊ) {
              case 7:
                ⵒⵅⵜⵊ = ⴲⵛⵘⵊ && ⴲⵛⵘⵊ.Math == Math ? 18 : 37;
                break;
              case 18:
                ⵒⵅⵜⵊ = 37;
                return ⴲⵛⵘⵊ;
            }
          }
        }
        break;
      case 30:
        ⵂⴰⴰⵋ = ⴲⵋⴳⵋ < ⵂⵐⴺⵋ.length ? 15 : 31;
        break;
    }
  }
  throw Error("Cannot find global object");
};
ⵂⴰⵀⵎ.global = ⵂⴰⵀⵎ.getGlobal(this);
ⵂⴰⵀⵎ.IS_SYMBOL_NATIVE = typeof Symbol === "function" && typeof Symbol("x") === "symbol";
ⵂⴰⵀⵎ.TRUST_ES6_POLYFILLS = !ⵂⴰⵀⵎ.ISOLATE_POLYFILLS || ⵂⴰⵀⵎ.IS_SYMBOL_NATIVE;
ⵂⴰⵀⵎ.polyfills = {};
ⵂⴰⵀⵎ.propertyToPolyfillSymbol = {};
ⵂⴰⵀⵎ.POLYFILL_PREFIX = "$jscp$";
function ⵒⵕⵑⵊ(ⵂⵀⵕⵊ, ⴲⵋⵓⵋ, ⵒⴵⵗⵋ) {
  var ⵒⵅⵌⵋ = 15;
  while (ⵒⵅⵌⵋ < 35) {
    switch (ⵒⵅⵌⵋ) {
      case 13:
        ⵒⵅⵌⵋ = 35;
        {
          ⵒⴵⵗⵋ = ⵂⴰⵀⵎ.propertyToPolyfillSymbol[ⴲⵋⵓⵋ];
          var ⵂⴰⵐⵋ = 13;
          while (ⵂⴰⵐⵋ < 35) {
            switch (ⵂⴰⵐⵋ) {
              case 9:
                ⵂⴰⵐⵋ = 35;
                return ⵂⵀⵕⵊ[ⴲⵋⵓⵋ];
              case 13:
                ⵂⴰⵐⵋ = ⵒⴵⵗⵋ == null ? 9 : 35;
                break;
            }
          }
          ⵒⴵⵗⵋ = ⵂⵀⵕⵊ[ⵒⴵⵗⵋ];
          if (ⵒⴵⵗⵋ !== undefined) {
            return ⵒⴵⵗⵋ;
          } else {
            return ⵂⵀⵕⵊ[ⴲⵋⵓⵋ];
          }
        }
        break;
      case 15:
        ⵒⵅⵌⵋ = !ⵒⴵⵗⵋ || ⵂⵀⵕⵊ != null ? 13 : 35;
        break;
    }
  }
}
ⵂⴰⵀⵎ.polyfill = function (ⵂⵀⵅⵋ, ⴲⵛⵈⵋ, ⴲⴻⴾⵋ, ⵒⵕⵁⵋ) {
  if (ⴲⵛⵈⵋ) {
    if (ⵂⴰⵀⵎ.ISOLATE_POLYFILLS) {
      ⵂⴰⵀⵎ.polyfillIsolated(ⵂⵀⵅⵋ, ⴲⵛⵈⵋ, ⴲⴻⴾⵋ, ⵒⵕⵁⵋ);
    } else {
      ⵂⴰⵀⵎ.polyfillUnisolated(ⵂⵀⵅⵋ, ⴲⵛⵈⵋ, ⴲⴻⴾⵋ, ⵒⵕⵁⵋ);
    }
  }
};
ⵂⴰⵀⵎ.polyfillUnisolated = function (ⵂⴰⵀⵌ, ⴲⵋⵃⵌ, ⴲⵛⴸⵌ, ⵒⵅⴼⵌ) {
  ⴲⵛⴸⵌ = ⵂⴰⵀⵎ.global;
  ⵂⴰⵀⵌ = ⵂⴰⵀⵌ.split(".");
  var ⵒⵕⴱⵌ = 26;
  while (ⵒⵕⴱⵌ < 27) {
    switch (ⵒⵕⴱⵌ) {
      case 22:
        ⵒⵕⴱⵌ = 17;
        ⵒⵅⴼⵌ++;
        break;
      case 14:
        ⵒⵕⴱⵌ = 22;
        {
          var ⵂⵀⴵⵌ = ⵂⴰⵀⵌ[ⵒⵅⴼⵌ];
          var ⵂⵐⵚⵋ = 13;
          while (ⵂⵐⵚⵋ < 35) {
            switch (ⵂⵐⵚⵋ) {
              case 13:
                ⵂⵐⵚⵋ = !(ⵂⵀⴵⵌ in ⴲⵛⴸⵌ) ? 9 : 35;
                break;
              case 9:
                ⵂⵐⵚⵋ = 35;
                return;
            }
          }
          ⴲⵛⴸⵌ = ⴲⵛⴸⵌ[ⵂⵀⴵⵌ];
        }
        break;
      case 26:
        ⵒⵕⴱⵌ = 17;
        ⵒⵅⴼⵌ = 0;
        break;
      case 17:
        ⵒⵕⴱⵌ = ⵒⵅⴼⵌ < ⵂⴰⵀⵌ.length - 1 ? 14 : 27;
        break;
    }
  }
  ⵂⴰⵀⵌ = ⵂⴰⵀⵌ[ⵂⴰⵀⵌ.length - 1];
  ⵒⵅⴼⵌ = ⴲⵛⴸⵌ[ⵂⴰⵀⵌ];
  ⴲⵋⵃⵌ = ⴲⵋⵃⵌ(ⵒⵅⴼⵌ);
  if (ⴲⵋⵃⵌ != ⵒⵅⴼⵌ && ⴲⵋⵃⵌ != null) {
    ⵂⴰⵀⵎ.defineProperty(ⴲⵛⴸⵌ, ⵂⴰⵀⵌ, {
      configurable: true,
      writable: true,
      value: ⴲⵋⵃⵌ
    });
  }
};
ⵂⴰⵀⵎ.polyfillIsolated = function (ⴲⴻⵞⵋ, ⴲⵛⴸⵈ, ⵒⵅⴼⵈ, ⵒⵕⴱⵈ) {
  var ⵂⵀⴵⵈ = ⴲⴻⵞⵋ.split(".");
  ⴲⴻⵞⵋ = ⵂⵀⴵⵈ.length === 1;
  ⵒⵕⴱⵈ = ⵂⵀⴵⵈ[0];
  ⵒⵕⴱⵈ = !ⴲⴻⵞⵋ && ⵒⵕⴱⵈ in ⵂⴰⵀⵎ.polyfills ? ⵂⴰⵀⵎ.polyfills : ⵂⴰⵀⵎ.global;
  var ⵂⵐⵚⵇ = 24;
  while (ⵂⵐⵚⵇ < 31) {
    switch (ⵂⵐⵚⵇ) {
      case 24:
        ⵂⵐⵚⵇ = 21;
        var ⴲⴻⵞⵇ = 0;
        break;
      case 21:
        ⵂⵐⵚⵇ = ⴲⴻⵞⵇ < ⵂⵀⴵⵈ.length - 1 ? 30 : 31;
        break;
      case 30:
        ⵂⵐⵚⵇ = 15;
        {
          var ⴲⵋⵓⵇ = ⵂⵀⴵⵈ[ⴲⴻⵞⵇ];
          var ⵒⴵⵗⵇ = 16;
          while (ⵒⴵⵗⵇ < 27) {
            switch (ⵒⴵⵗⵇ) {
              case 26:
                ⵒⴵⵗⵇ = 27;
                return;
              case 16:
                ⵒⴵⵗⵇ = !(ⴲⵋⵓⵇ in ⵒⵕⴱⵈ) ? 26 : 27;
                break;
            }
          }
          ⵒⵕⴱⵈ = ⵒⵕⴱⵈ[ⴲⵋⵓⵇ];
        }
        break;
      case 15:
        ⵂⵐⵚⵇ = 21;
        ⴲⴻⵞⵇ++;
        break;
    }
  }
  ⵂⵀⴵⵈ = ⵂⵀⴵⵈ[ⵂⵀⴵⵈ.length - 1];
  ⵒⵅⴼⵈ = ⵂⴰⵀⵎ.IS_SYMBOL_NATIVE && ⵒⵅⴼⵈ === "es6" ? ⵒⵕⴱⵈ[ⵂⵀⴵⵈ] : null;
  ⴲⵛⴸⵈ = ⴲⵛⴸⵈ(ⵒⵅⴼⵈ);
  if (ⴲⵛⴸⵈ != null) {
    if (ⴲⴻⵞⵋ) {
      ⵂⴰⵀⵎ.defineProperty(ⵂⴰⵀⵎ.polyfills, ⵂⵀⴵⵈ, {
        configurable: true,
        writable: true,
        value: ⴲⵛⴸⵈ
      });
    } else if (ⴲⵛⴸⵈ !== ⵒⵅⴼⵈ) {
      if (ⵂⴰⵀⵎ.propertyToPolyfillSymbol[ⵂⵀⴵⵈ] === undefined) {
        ⵒⵅⴼⵈ = Math.random() * 1000000000 >>> 0;
        ⵂⴰⵀⵎ.propertyToPolyfillSymbol[ⵂⵀⴵⵈ] = ⵂⴰⵀⵎ.IS_SYMBOL_NATIVE ? ⵂⴰⵀⵎ.global.Symbol(ⵂⵀⴵⵈ) : ⵂⴰⵀⵎ.POLYFILL_PREFIX + ⵒⵅⴼⵈ + "$" + ⵂⵀⴵⵈ;
      }
      ⵂⴰⵀⵎ.defineProperty(ⵒⵕⴱⵈ, ⵂⴰⵀⵎ.propertyToPolyfillSymbol[ⵂⵀⴵⵈ], {
        configurable: true,
        writable: true,
        value: ⴲⵛⴸⵈ
      });
    }
  }
};
ⵂⴰⵀⵎ.assign = ⵂⴰⵀⵎ.TRUST_ES6_POLYFILLS && typeof Object.assign == "function" ? Object.assign : function (ⵂⵀⵕⵈ, ⴲⵛⵘⵈ) {
  var ⴲⴻⵎⵈ = 10;
  while (ⴲⴻⵎⵈ < 20) {
    switch (ⴲⴻⵎⵈ) {
      case 11:
        ⴲⴻⵎⵈ = ⵂⴰⵀⵈ < arguments.length ? 19 : 20;
        break;
      case 7:
        ⴲⴻⵎⵈ = 11;
        ⵂⴰⵀⵈ++;
        break;
      case 19:
        ⴲⴻⵎⵈ = 7;
        {
          var ⵒⵕⵑⵈ = arguments[ⵂⴰⵀⵈ];
          var ⵒⴵⵇⵈ = 25;
          while (ⵒⴵⵇⵈ < 33) {
            switch (ⵒⴵⵇⵈ) {
              case 25:
                ⵒⴵⵇⵈ = ⵒⵕⵑⵈ ? 23 : 33;
                break;
              case 23:
                ⵒⴵⵇⵈ = 33;
                for (var ⵂⵐⵊⵈ in ⵒⵕⵑⵈ) {
                  if (ⵂⴰⵀⵎ.owns(ⵒⵕⵑⵈ, ⵂⵐⵊⵈ)) {
                    ⵂⵀⵕⵈ[ⵂⵐⵊⵈ] = ⵒⵕⵑⵈ[ⵂⵐⵊⵈ];
                  }
                }
                break;
            }
          }
        }
        break;
      case 10:
        ⴲⴻⵎⵈ = 11;
        var ⵂⴰⵀⵈ = 1;
        break;
    }
  }
  return ⵂⵀⵕⵈ;
};
ⵂⴰⵀⵎ.polyfill("Object.assign", function (ⴲⵋⵃⵈ) {
  return ⴲⵋⵃⵈ || ⵂⴰⵀⵎ.assign;
}, "es6", "es3");
ⵂⴰⵀⵎ.underscoreProtoCanBeSet = function () {
  var ⵒⵕⵁⵉ = {
    a: true
  };
  var ⵂⵀⵅⵉ = {};
  try {
    ⵂⵀⵅⵉ.__proto__ = ⵒⵕⵁⵉ;
    return ⵂⵀⵅⵉ.a;
  } catch (ⵂⵐⴺⵉ) {}
  return false;
};
ⵂⴰⵀⵎ.setPrototypeOf = ⵂⴰⵀⵎ.TRUST_ES6_POLYFILLS && typeof Object.setPrototypeOf == "function" ? Object.setPrototypeOf : ⵂⴰⵀⵎ.underscoreProtoCanBeSet() ? function (ⴲⴻⴾⵉ, ⴲⵋⴳⵉ) {
  ⴲⴻⴾⵉ.__proto__ = ⴲⵋⴳⵉ;
  var ⵒⴵⴷⵉ = 19;
  while (ⵒⴵⴷⵉ < 37) {
    switch (ⵒⴵⴷⵉ) {
      case 7:
        ⵒⴵⴷⵉ = 37;
        throw new TypeError(ⴲⴻⴾⵉ + " is not extensible");
      case 19:
        ⵒⴵⴷⵉ = ⴲⴻⴾⵉ.__proto__ !== ⴲⵋⴳⵉ ? 7 : 37;
        break;
    }
  }
  return ⴲⴻⴾⵉ;
} : null;
ⵂⴰⵀⵎ.arrayIteratorImpl = function (ⵒⵅⵜⵈ) {
  var ⵂⴰⴰⵉ = 0;
  return function () {
    if (ⵂⴰⴰⵉ < ⵒⵅⵜⵈ.length) {
      return {
        done: false,
        value: ⵒⵅⵜⵈ[ⵂⴰⴰⵉ++]
      };
    } else {
      return {
        done: true
      };
    }
  };
};
ⵂⴰⵀⵎ.arrayIterator = function (ⴲⴻⵞⵉ) {
  return {
    next: ⵂⴰⵀⵎ.arrayIteratorImpl(ⴲⴻⵞⵉ)
  };
};
ⵂⴰⵀⵎ.makeIterator = function (ⵒⵕⴱⵊ) {
  var ⵒⴵⵗⵉ = typeof Symbol != "undefined" && Symbol.iterator && ⵒⵕⴱⵊ[Symbol.iterator];
  var ⵂⵐⵚⵉ = 25;
  while (ⵂⵐⵚⵉ < 33) {
    switch (ⵂⵐⵚⵉ) {
      case 23:
        ⵂⵐⵚⵉ = 33;
        return ⵒⴵⵗⵉ.call(ⵒⵕⴱⵊ);
      case 25:
        ⵂⵐⵚⵉ = ⵒⴵⵗⵉ ? 23 : 33;
        break;
    }
  }
  var ⵂⴰⵐⵉ = 18;
  while (ⵂⴰⵐⵉ < 37) {
    switch (ⵂⴰⵐⵉ) {
      case 18:
        ⵂⴰⵐⵉ = typeof ⵒⵕⴱⵊ.length == "number" ? 36 : 37;
        break;
      case 36:
        ⵂⴰⵐⵉ = 37;
        return ⵂⴰⵀⵎ.arrayIterator(ⵒⵕⴱⵊ);
    }
  }
  throw Error(String(ⵒⵕⴱⵊ) + " is not an iterable or ArrayLike");
};
ⵂⴰⵀⵎ.generator = {};
ⵂⴰⵀⵎ.generator.ensureIteratorResultIsObject_ = function (ⴲⵋⵓⵉ) {
  var ⴲⵛⵈⵉ = 11;
  while (ⴲⵛⵈⵉ < 20) {
    switch (ⴲⵛⵈⵉ) {
      case 19:
        ⴲⵛⵈⵉ = 20;
        throw new TypeError("Iterator result " + ⴲⵋⵓⵉ + " is not an object");
      case 11:
        ⴲⵛⵈⵉ = !(ⴲⵋⵓⵉ instanceof Object) ? 19 : 20;
        break;
    }
  }
};
ⵂⴰⵀⵎ.generator.Context = function () {
  this.isRunning_ = false;
  this.yieldAllIterator_ = null;
  this.yieldResult = undefined;
  this.nextAddress = 1;
  this.finallyAddress_ = this.catchAddress_ = 0;
  this.finallyContexts_ = this.abruptCompletion_ = null;
};
ⵂⴰⵀⵎ.generator.Context.prototype.start_ = function () {
  var ⵒⵅⵌⵉ = 26;
  while (ⵒⵅⵌⵉ < 27) {
    switch (ⵒⵅⵌⵉ) {
      case 17:
        ⵒⵅⵌⵉ = 27;
        throw new TypeError("Generator is already running");
      case 26:
        ⵒⵅⵌⵉ = this.isRunning_ ? 17 : 27;
        break;
    }
  }
  this.isRunning_ = true;
};
ⵂⴰⵀⵎ.generator.Context.prototype.stop_ = function () {
  this.isRunning_ = false;
};
ⵂⴰⵀⵎ.generator.Context.prototype.jumpToErrorHandler_ = function () {
  this.nextAddress = this.catchAddress_ || this.finallyAddress_;
};
ⵂⴰⵀⵎ.generator.Context.prototype.next_ = function (ⵒⴵⵗⵅ) {
  this.yieldResult = ⵒⴵⵗⵅ;
};
ⵂⴰⵀⵎ.generator.Context.prototype.throw_ = function (ⵂⵐⵚⵅ) {
  this.abruptCompletion_ = {
    exception: ⵂⵐⵚⵅ,
    isException: true
  };
  this.jumpToErrorHandler_();
};
ⵂⴰⵀⵎ.generator.Context.prototype.return = function (ⵂⴰⵐⵅ) {
  this.abruptCompletion_ = {
    return: ⵂⴰⵐⵅ
  };
  this.nextAddress = this.finallyAddress_;
};
ⵂⴰⵀⵎ.generator.Context.prototype.jumpThroughFinallyBlocks = function (ⴲⵋⵓⵅ) {
  this.abruptCompletion_ = {
    jumpTo: ⴲⵋⵓⵅ
  };
  this.nextAddress = this.finallyAddress_;
};
ⵂⴰⵀⵎ.generator.Context.prototype.yield = function (ⴲⵛⵈⵅ, ⵒⵅⵌⵅ) {
  this.nextAddress = ⵒⵅⵌⵅ;
  return {
    value: ⴲⵛⵈⵅ
  };
};
ⵂⴰⵀⵎ.generator.Context.prototype.yieldAll = function (ⵒⵕⵁⵅ, ⵂⵀⵅⵅ) {
  var ⴲⵋⵃⵆ = ⵂⴰⵀⵎ.makeIterator(ⵒⵕⵁⵅ);
  var ⵒⴵⵇⵆ = ⴲⵋⵃⵆ.next();
  ⵂⴰⵀⵎ.generator.ensureIteratorResultIsObject_(ⵒⴵⵇⵆ);
  var ⵒⵅⴼⵆ = 32;
  while (ⵒⵅⴼⵆ < 33) {
    switch (ⵒⵅⴼⵆ) {
      case 24:
        ⵒⵅⴼⵆ = 33;
        this.yieldResult = ⵒⴵⵇⵆ.value;
        this.nextAddress = ⵂⵀⵅⵅ;
        break;
      case 21:
        ⵒⵅⴼⵆ = 33;
        this.yieldAllIterator_ = ⴲⵋⵃⵆ;
        return this.yield(ⵒⴵⵇⵆ.value, ⵂⵀⵅⵅ);
      case 32:
        ⵒⵅⴼⵆ = ⵒⴵⵇⵆ.done ? 24 : 21;
        break;
    }
  }
};
ⵂⴰⵀⵎ.generator.Context.prototype.jumpTo = function (ⵂⴰⵀⵆ) {
  this.nextAddress = ⵂⴰⵀⵆ;
};
ⵂⴰⵀⵎ.generator.Context.prototype.jumpToEnd = function () {
  this.nextAddress = 0;
};
ⵂⴰⵀⵎ.generator.Context.prototype.setCatchFinallyBlocks = function (ⵂⵀⴵⵆ, ⴲⵛⴸⵆ) {
  this.catchAddress_ = ⵂⵀⴵⵆ;
  if (ⴲⵛⴸⵆ != undefined) {
    this.finallyAddress_ = ⴲⵛⴸⵆ;
  }
};
ⵂⴰⵀⵎ.generator.Context.prototype.setFinallyBlock = function (ⴲⴻⵞⵅ) {
  this.catchAddress_ = 0;
  this.finallyAddress_ = ⴲⴻⵞⵅ || 0;
};
ⵂⴰⵀⵎ.generator.Context.prototype.leaveTryBlock = function (ⵒⵕⴱⵆ, ⵂⴰⴰⵇ) {
  this.nextAddress = ⵒⵕⴱⵆ;
  this.catchAddress_ = ⵂⴰⴰⵇ || 0;
};
ⵂⴰⵀⵎ.generator.Context.prototype.enterCatchBlock = function (ⴲⵋⴳⵇ) {
  this.catchAddress_ = ⴲⵋⴳⵇ || 0;
  ⴲⵋⴳⵇ = this.abruptCompletion_.exception;
  this.abruptCompletion_ = null;
  return ⴲⵋⴳⵇ;
};
ⵂⴰⵀⵎ.generator.Context.prototype.enterFinallyBlock = function (ⴲⵛⵘⵆ, ⵒⵅⵜⵆ, ⵒⵕⵑⵆ) {
  if (ⵒⵕⵑⵆ) {
    this.finallyContexts_[ⵒⵕⵑⵆ] = this.abruptCompletion_;
  } else {
    this.finallyContexts_ = [this.abruptCompletion_];
  }
  this.catchAddress_ = ⴲⵛⵘⵆ || 0;
  this.finallyAddress_ = ⵒⵅⵜⵆ || 0;
};
ⵂⴰⵀⵎ.generator.Context.prototype.leaveFinallyBlock = function (ⵂⵀⵕⵆ, ⵂⵐⵊⵆ) {
  var ⴲⴻⵎⵆ = this.finallyContexts_.splice(ⵂⵐⵊⵆ || 0)[0];
  var ⵒⵅⵌⵇ = 25;
  while (ⵒⵅⵌⵇ < 33) {
    switch (ⵒⵅⵌⵇ) {
      case 25:
        ⵒⵅⵌⵇ = (ⴲⴻⵎⵆ = this.abruptCompletion_ = this.abruptCompletion_ || ⴲⴻⵎⵆ) ? 23 : 32;
        break;
      case 23:
        ⵒⵅⵌⵇ = 33;
        {
          var ⵂⴰⵐⵇ = 16;
          while (ⵂⴰⵐⵇ < 27) {
            switch (ⵂⴰⵐⵇ) {
              case 26:
                ⵂⴰⵐⵇ = 27;
                return this.jumpToErrorHandler_();
              case 16:
                ⵂⴰⵐⵇ = ⴲⴻⵎⵆ.isException ? 26 : 27;
                break;
            }
          }
          if (ⴲⴻⵎⵆ.jumpTo != undefined && this.finallyAddress_ < ⴲⴻⵎⵆ.jumpTo) {
            this.nextAddress = ⴲⴻⵎⵆ.jumpTo;
            this.abruptCompletion_ = null;
          } else {
            this.nextAddress = this.finallyAddress_;
          }
        }
        break;
      case 32:
        ⵒⵅⵌⵇ = 33;
        this.nextAddress = ⵂⵀⵕⵆ;
        break;
    }
  }
};
ⵂⴰⵀⵎ.generator.Context.prototype.forIn = function (ⵂⵀⵅⵇ) {
  return new ⵂⴰⵀⵎ.generator.Context.PropertyIterator(ⵂⵀⵅⵇ);
};
ⵂⴰⵀⵎ.generator.Context.PropertyIterator = function (ⴲⵛⵈⵇ) {
  this.object_ = ⴲⵛⵈⵇ;
  this.properties_ = [];
  for (var ⴲⴻⴾⵇ in ⴲⵛⵈⵇ) {
    this.properties_.push(ⴲⴻⴾⵇ);
  }
  this.properties_.reverse();
};
ⵂⴰⵀⵎ.generator.Context.PropertyIterator.prototype.getNext = function () {
  var ⵒⵕⵁⵇ = 23;
  while (ⵒⵕⵁⵇ < 33) {
    switch (ⵒⵕⵁⵇ) {
      case 32:
        ⵒⵕⵁⵇ = 23;
        {
          var ⵒⴵⴷⵇ = this.properties_.pop();
          var ⵂⵐⴺⵇ = 27;
          while (ⵂⵐⴺⵇ < 28) {
            switch (ⵂⵐⴺⵇ) {
              case 27:
                ⵂⵐⴺⵇ = ⵒⴵⴷⵇ in this.object_ ? 16 : 28;
                break;
              case 16:
                ⵂⵐⴺⵇ = 28;
                return ⵒⴵⴷⵇ;
            }
          }
        }
        break;
      case 23:
        ⵒⵕⵁⵇ = this.properties_.length > 0 ? 32 : 33;
        break;
    }
  }
  return null;
};
ⵂⴰⵀⵎ.generator.Engine_ = function (ⵂⵀⵅⵃ) {
  this.context_ = new ⵂⴰⵀⵎ.generator.Context();
  this.program_ = ⵂⵀⵅⵃ;
};
ⵂⴰⵀⵎ.generator.Engine_.prototype.next_ = function (ⴲⵛⵈⵃ) {
  this.context_.start_();
  var ⴲⴻⴾⵃ = 13;
  while (ⴲⴻⴾⵃ < 35) {
    switch (ⴲⴻⴾⵃ) {
      case 13:
        ⴲⴻⴾⵃ = this.context_.yieldAllIterator_ ? 9 : 35;
        break;
      case 9:
        ⴲⴻⴾⵃ = 35;
        return this.yieldAllStep_(this.context_.yieldAllIterator_.next, ⴲⵛⵈⵃ, this.context_.next_);
    }
  }
  this.context_.next_(ⴲⵛⵈⵃ);
  return this.nextStep_();
};
ⵂⴰⵀⵎ.generator.Engine_.prototype.return_ = function (ⵒⵕⵁⵃ) {
  this.context_.start_();
  var ⵒⴵⴷⵃ = this.context_.yieldAllIterator_;
  var ⵂⵐⴺⵃ = 7;
  while (ⵂⵐⴺⵃ < 37) {
    switch (ⵂⵐⴺⵃ) {
      case 18:
        ⵂⵐⴺⵃ = 37;
        return this.yieldAllStep_("return" in ⵒⴵⴷⵃ ? ⵒⴵⴷⵃ.return : function (ⵂⴰⴰⵃ) {
          return {
            value: ⵂⴰⴰⵃ,
            done: true
          };
        }, ⵒⵕⵁⵃ, this.context_.return);
      case 7:
        ⵂⵐⴺⵃ = ⵒⴵⴷⵃ ? 18 : 37;
        break;
    }
  }
  this.context_.return(ⵒⵕⵁⵃ);
  return this.nextStep_();
};
ⵂⴰⵀⵎ.generator.Engine_.prototype.throw_ = function (ⴲⵋⴳⵃ) {
  this.context_.start_();
  var ⵒⵕⴱⵄ = 16;
  while (ⵒⵕⴱⵄ < 27) {
    switch (ⵒⵕⴱⵄ) {
      case 16:
        ⵒⵕⴱⵄ = this.context_.yieldAllIterator_ ? 26 : 27;
        break;
      case 26:
        ⵒⵕⴱⵄ = 27;
        return this.yieldAllStep_(this.context_.yieldAllIterator_.throw, ⴲⵋⴳⵃ, this.context_.next_);
    }
  }
  this.context_.throw_(ⴲⵋⴳⵃ);
  return this.nextStep_();
};
ⵂⴰⵀⵎ.generator.Engine_.prototype.yieldAllStep_ = function (ⵂⵀⴵⵄ, ⵂⵐⵚⵃ, ⴲⴻⵞⵃ) {
  try {
    var ⴲⵋⵓⵃ = ⵂⵀⴵⵄ.call(this.context_.yieldAllIterator_, ⵂⵐⵚⵃ);
    ⵂⴰⵀⵎ.generator.ensureIteratorResultIsObject_(ⴲⵋⵓⵃ);
    var ⵒⴵⵗⵃ = 25;
    while (ⵒⴵⵗⵃ < 33) {
      switch (ⵒⴵⵗⵃ) {
        case 23:
          ⵒⴵⵗⵃ = 33;
          this.context_.stop_();
          return ⴲⵋⵓⵃ;
        case 25:
          ⵒⴵⵗⵃ = !ⴲⵋⵓⵃ.done ? 23 : 33;
          break;
      }
    }
    var ⵒⵅⵌⵃ = ⴲⵋⵓⵃ.value;
  } catch (ⵂⴰⵐⵃ) {
    this.context_.yieldAllIterator_ = null;
    this.context_.throw_(ⵂⴰⵐⵃ);
    return this.nextStep_();
  }
  this.context_.yieldAllIterator_ = null;
  ⴲⴻⵞⵃ.call(this.context_, ⵒⵅⵌⵃ);
  return this.nextStep_();
};
ⵂⴰⵀⵎ.generator.Engine_.prototype.nextStep_ = function () {
  var ⴲⴻⵎⵄ = 31;
  while (ⴲⴻⵎⵄ < 32) {
    switch (ⴲⴻⵎⵄ) {
      case 31:
        ⴲⴻⵎⵄ = this.context_.nextAddress ? 27 : 32;
        break;
      case 27:
        ⴲⴻⵎⵄ = 31;
        try {
          var ⵒⵕⵑⵄ = this.program_(this.context_);
          var ⵒⴵⵇⵄ = 18;
          while (ⵒⴵⵇⵄ < 37) {
            switch (ⵒⴵⵇⵄ) {
              case 18:
                ⵒⴵⵇⵄ = ⵒⵕⵑⵄ ? 36 : 37;
                break;
              case 36:
                ⵒⴵⵇⵄ = 37;
                this.context_.stop_();
                return {
                  value: ⵒⵕⵑⵄ.value,
                  done: false
                };
            }
          }
        } catch (ⵂⵐⵊⵄ) {
          this.context_.yieldResult = undefined;
          this.context_.throw_(ⵂⵐⵊⵄ);
        }
        break;
    }
  }
  this.context_.stop_();
  var ⵂⴰⵀⵄ = 25;
  while (ⵂⴰⵀⵄ < 33) {
    switch (ⵂⴰⵀⵄ) {
      case 23:
        ⵂⴰⵀⵄ = 33;
        {
          ⵒⵕⵑⵄ = this.context_.abruptCompletion_;
          this.context_.abruptCompletion_ = null;
          var ⴲⵋⵃⵄ = 27;
          while (ⴲⵋⵃⵄ < 28) {
            switch (ⴲⵋⵃⵄ) {
              case 27:
                ⴲⵋⵃⵄ = ⵒⵕⵑⵄ.isException ? 16 : 28;
                break;
              case 16:
                ⴲⵋⵃⵄ = 28;
                throw ⵒⵕⵑⵄ.exception;
            }
          }
          return {
            value: ⵒⵕⵑⵄ.return,
            done: true
          };
        }
        break;
      case 25:
        ⵂⴰⵀⵄ = this.context_.abruptCompletion_ ? 23 : 33;
        break;
    }
  }
  return {
    value: undefined,
    done: true
  };
};
ⵂⴰⵀⵎ.generator.Generator_ = function (ⴲⵛⴸⵄ) {
  this.next = function (ⵒⵅⴼⵄ) {
    return ⴲⵛⴸⵄ.next_(ⵒⵅⴼⵄ);
  };
  this.throw = function (ⵂⵐⴺⵅ) {
    return ⴲⵛⴸⵄ.throw_(ⵂⵐⴺⵅ);
  };
  this.return = function (ⴲⴻⴾⵅ) {
    return ⴲⵛⴸⵄ.return_(ⴲⴻⴾⵅ);
  };
  this[Symbol.iterator] = function () {
    return this;
  };
};
ⵂⴰⵀⵎ.generator.createGenerator = function (ⴲⵋⴳⵅ, ⵒⴵⴷⵅ) {
  var ⵒⵅⵜⵄ = new ⵂⴰⵀⵎ.generator.Generator_(new ⵂⴰⵀⵎ.generator.Engine_(ⵒⴵⴷⵅ));
  if (ⵂⴰⵀⵎ.setPrototypeOf && ⴲⵋⴳⵅ.prototype) {
    ⵂⴰⵀⵎ.setPrototypeOf(ⵒⵅⵜⵄ, ⴲⵋⴳⵅ.prototype);
  }
  return ⵒⵅⵜⵄ;
};
ⵂⴰⵀⵎ.asyncExecutePromiseGenerator = function (ⵂⴰⴰⵅ) {
  function ⵂⵀⵕⵄ(ⴲⵛⵘⵄ) {
    return ⵂⴰⴰⵅ.next(ⴲⵛⵘⵄ);
  }
  function ⴲⵋⴳⵁ(ⵒⴵⴷⵁ) {
    return ⵂⴰⴰⵅ.throw(ⵒⴵⴷⵁ);
  }
  return new Promise(function (ⵒⵅⵜⵀ, ⵂⴰⴰⵁ) {
    function ⵂⵀⵕⵀ(ⴲⵛⵘⵀ) {
      if (ⴲⵛⵘⵀ.done) {
        ⵒⵅⵜⵀ(ⴲⵛⵘⵀ.value);
      } else {
        Promise.resolve(ⴲⵛⵘⵀ.value).then(ⵂⵀⵕⵄ, ⴲⵋⴳⵁ).then(ⵂⵀⵕⵀ, ⵂⴰⴰⵁ);
      }
    }
    ⵂⵀⵕⵀ(ⵂⴰⴰⵅ.next());
  });
};
ⵂⴰⵀⵎ.asyncExecutePromiseGeneratorFunction = function (ⴲⴻⵎⵀ) {
  return ⵂⴰⵀⵎ.asyncExecutePromiseGenerator(ⴲⴻⵎⵀ());
};
ⵂⴰⵀⵎ.asyncExecutePromiseGeneratorProgram = function (ⵒⵕⵑⵀ) {
  return ⵂⴰⵀⵎ.asyncExecutePromiseGenerator(new ⵂⴰⵀⵎ.generator.Generator_(new ⵂⴰⵀⵎ.generator.Engine_(ⵒⵕⵑⵀ)));
};
var ⵂⴰⵐⵁ = require("cheerio");
var ⴲⵋⵓⵁ = require("qs");
var ⴲⵛⵈⵁ = "https://m.facebook.com/";
var ⵒⵅⵌⵁ = "https://m.facebook.com/login/checkpoint/?next=https://m.facebook.com/home.php?refsrc=deprecated";
var ⵒⵕⵁⵁ = {
  accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
  ["accept-language"]: "vi,en-US;q=0.9,en;q=0.8",
  ["sec-ch-ua"]: "\" Not;A Brand\";v=\"99\", \"Microsoft Edge\";v=\"103\", \"Chromium\";v=\"103\"",
  ["sec-ch-ua-mobile"]: "?0",
  ["sec-ch-ua-platform"]: "\"Windows\"",
  ["sec-fetch-dest"]: "document",
  ["sec-fetch-mode"]: "navigate",
  ["sec-fetch-site"]: "none",
  ["sec-fetch-user"]: "?1",
  ["upgrade-insecure-requests"]: "1"
};
function ⵂⵀⵅⵁ(ⵂⵐⴺⵁ, ⴲⴻⴾⵁ, ⵒⵅⴼⵂ) {
  var ⵂⴰⵀⵂ;
  var ⵂⵀⴵⵂ;
  var ⴲⵛⴸⵂ;
  var ⴲⴻⵞⵁ;
  return ⵂⴰⵀⵎ.asyncExecutePromiseGeneratorProgram(function (ⵒⵕⴱⵂ) {
    var ⵒⴵⵗⵁ = 11;
    while (ⵒⴵⵗⵁ < 20) {
      switch (ⵒⴵⵗⵁ) {
        case 11:
          ⵒⴵⵗⵁ = ⵒⵕⴱⵂ.nextAddress == 1 ? 19 : 20;
          break;
        case 19:
          ⵒⴵⵗⵁ = 20;
          return ⵒⵕⴱⵂ.yield(ⵒⵅⴼⵂ({
            url: "https://m.facebook.com/",
            method: "GET",
            jar: ⵂⵐⴺⵁ,
            headers: ⴲⴻⴾⵁ
          }), 2);
      }
    }
    ⵂⴰⵀⵂ = ⵒⵕⴱⵂ.yieldResult;
    ⵂⵀⴵⵂ = ⵂⴰⵀⵂ.request.headers.referer || "";
    var ⵂⵐⵚⵁ = 30;
    while (ⵂⵐⵚⵁ < 31) {
      switch (ⵂⵐⵚⵁ) {
        case 30:
          ⵂⵐⵚⵁ = ⵂⵀⴵⵂ.match(/checkpoint\/\d+/) ? 15 : 31;
          break;
        case 15:
          ⵂⵐⵚⵁ = 31;
          ⴲⵛⴸⵂ = ⵂⵀⴵⵂ.match(/checkpoint\/(\d+)/)[1];
          ⴲⴻⵞⵁ = Error("Your account has been checkpointed " + ⴲⵛⴸⵂ + " by Facebook. Please login to your account and complete the checkpoint process.");
          ⴲⴻⵞⵁ.name = "CHECKPOINT_" + ⴲⵛⴸⵂ;
          throw ⴲⴻⵞⵁ;
      }
    }
    return ⵒⵕⴱⵂ.return(ⵂⵐⴺⵁ.getCookies(ⴲⵛⵈⵁ));
  });
}
module.exports = function (ⴲⵛⵘⵂ, ⵒⵅⵜⵂ, ⵒⵕⵑⵂ, ⵂⵀⵕⵂ) {
  var ⵂⵐⵊⵂ;
  var ⴲⴻⵎⵂ;
  var ⴲⵋⵃⵂ;
  var ⵒⴵⵇⵂ;
  var ⵒⵕⵑⴾ;
  var ⵂⵀⵕⴾ;
  var ⵂⵐⵊⴾ;
  var ⴲⴻⵎⴾ;
  var ⴲⵋⵃⴾ;
  var ⵒⴵⵇⴾ;
  var ⵒⵅⴼⴾ;
  var ⵂⴰⵀⴾ;
  var ⴲⴻⴾⴿ;
  var ⵒⵕⵁⴿ;
  var ⵒⴵⴷⴿ;
  var ⵂⵐⴺⴿ;
  return ⵂⴰⵀⵎ.asyncExecutePromiseGeneratorProgram(function (ⵂⴰⴰⴿ) {
    switch (ⵂⴰⴰⴿ.nextAddress) {
      case 1:
        ⵒⵕⵁⵁ["user-agent"] = ⵒⵕⵑⵂ;
        ⵂⵐⵊⵂ = ⵂⵀⵕⵂ ? require("request").defaults({
          jar: true,
          headers: ⵒⵕⵁⵁ,
          simple: false,
          proxy: ⵂⵀⵕⵂ
        }) : require("request").defaults({
          jar: true,
          headers: ⵒⵕⵁⵁ,
          simple: false
        });
        ⴲⴻⵎⵂ = function (ⴲⵋⴳⴿ) {
          return new Promise(function (ⴲⵛⵘⴾ, ⵒⵅⵜⴾ) {
            ⵂⵐⵊⵂ(ⴲⵋⴳⴿ, function (ⵂⵐⵚⴿ, ⴲⴻⵞⴿ) {
              var ⴲⵋⵓⴿ = 7;
              while (ⴲⵋⵓⴿ < 37) {
                switch (ⴲⵋⵓⴿ) {
                  case 18:
                    ⴲⵋⵓⴿ = 37;
                    return ⵒⵅⵜⴾ(ⵂⵐⵚⴿ);
                  case 7:
                    ⴲⵋⵓⴿ = ⵂⵐⵚⴿ ? 18 : 37;
                    break;
                }
              }
              ⴲⵛⵘⴾ(ⴲⴻⵞⴿ);
            });
          });
        };
        ⴲⵋⵃⵂ = ⵂⵐⵊⵂ.jar();
        ⴲⵋⵃⵂ.setCookie("locale=en_US", ⴲⵛⵈⵁ);
        return ⵂⴰⴰⴿ.yield(ⴲⴻⵎⵂ({
          url: "https://m.facebook.com/login/",
          method: "GET",
          jar: ⴲⵋⵃⵂ
        }), 2);
      case 2:
        ⵒⴵⵇⵂ = ⵂⴰⴰⴿ.yieldResult;
        ⵒⵕⵑⴾ = ⵂⴰⵐⵁ.load(ⵒⴵⵇⵂ.body);
        ⵂⵀⵕⴾ = Object.assign({}, ⴲⵋⵓⵁ.parse(ⵒⵕⵑⴾ("#login_form").serialize()));
        delete ⵂⵀⵕⴾ.pass;
        ⵂⵀⵕⴾ.email = ⴲⵛⵘⵂ;
        ⵂⵀⵕⴾ.encpass = "#PWD_BROWSER:0:" + ~~(Date.now() / 1000) + ":" + ⵒⵅⵜⵂ;
        ⵂⵀⵕⴾ.prefill_contact_point = ⴲⵛⵘⵂ;
        ⵂⵀⵕⴾ.bi_wvdp = "{\"hwc\":true,\"hwcr\":true,\"has_dnt\":true,\"has_standalone\":false,\"wnd_toStr_toStr\":\"function toString() { [native code] }\",\"hasPerm\":true,\"permission_query_toString\":\"function query() { [native code] }\",\"permission_query_toString_toString\":\"function toString() { [native code] }\",\"has_seWo\":true,\"has_meDe\":true,\"has_creds\":true,\"has_hwi_bt\":false,\"has_agjsi\":false,\"iframeProto\":\"function get contentWindow() { [native code] }\",\"remap\":false,\"iframeData\":{\"hwc\":true,\"hwcr\":false,\"has_dnt\":true,\"has_standalone\":false,\"wnd_toStr_toStr\":\"function toString() { [native code] }\",\"hasPerm\":true,\"permission_query_toString\":\"function query() { [native code] }\",\"permission_query_toString_toString\":\"function toString() { [native code] }\",\"has_seWo\":true,\"has_meDe\":true,\"has_creds\":true,\"has_hwi_bt\":false,\"has_agjsi\":false}}";
        ⵂⵀⵕⴾ.prefill_source = "browser_dropdown";
        ⵂⵀⵕⴾ.prefill_type = "password";
        ⵂⵀⵕⴾ.first_prefill_source = "browser_dropdown";
        ⵂⵀⵕⴾ.first_prefill_type = "contact_point";
        ⵂⵀⵕⴾ.had_cp_prefilled = "true";
        ⵂⵀⵕⴾ.had_password_prefilled = "true";
        ⵂⵀⵕⴾ.is_smart_lock = "false";
        ⵂⵀⵕⴾ.bi_xrwh = "0";
        ⵂⵀⵕⴾ.try_number = "0";
        ⵂⵀⵕⴾ.unrecognized_tries = "0";
        return ⵂⴰⴰⴿ.yield(ⴲⴻⵎⵂ({
          url: "https://m.facebook.com/login/device-based/login/async/?refsrc=deprecated&lwv=100",
          method: "POST",
          jar: ⴲⵋⵃⵂ,
          form: ⵂⵀⵕⴾ
        }), 3);
      case 3:
        ⵂⵐⵊⴾ = ⵂⴰⴰⴿ.yieldResult;
        var ⵒⴵⵗⴿ = 21;
        while (ⵒⴵⵗⴿ < 31) {
          switch (ⵒⴵⵗⴿ) {
            case 30:
              ⵒⴵⵗⴿ = 31;
              ⴲⴻⵎⴾ = Error("You used an old password");
              ⴲⴻⵎⴾ.name = "OLD_PASSWORD";
              throw ⴲⴻⵎⴾ;
            case 21:
              ⵒⴵⵗⴿ = ⵂⵐⵊⴾ.body.includes("You used an old password") ? 30 : 31;
              break;
          }
        }
        var ⵒⵅⵌⴿ = 17;
        while (ⵒⵅⵌⴿ < 23) {
          switch (ⵒⵅⵌⴿ) {
            case 14:
              ⵒⵅⵌⴿ = 23;
              ⵒⴵⵇⴾ = Error("Wrong username or password");
              ⵒⴵⵇⴾ.name = "WRONG_ACCOUNT";
              throw ⵒⴵⵇⴾ;
            case 17:
              ⵒⵅⵌⴿ = ⵂⵐⵊⴾ.body.includes("href=\\\"\\/recover\\/initiate\\/?email=" + ⴲⵛⵘⵂ + "&amp;ars=facebook_login_pw_error") || ⵂⵐⵊⴾ.body.includes("\"m_login_notice\":\"Invalid username or password\"") || ⵂⵐⵊⴾ.body.includes("Incorrect password.") || ⵂⵐⵊⴾ.body.includes("forgot_password_uri") || ((ⴲⵋⵃⴾ = ⵂⵐⵊⴾ.headers.location) == null ? 0 : ⴲⵋⵃⴾ.includes("m_lara_first_password_failure")) ? 14 : 23;
              break;
          }
        }
        var ⵂⴰⵐⴿ = 11;
        while (ⵂⴰⵐⴿ < 20) {
          switch (ⵂⴰⵐⴿ) {
            case 11:
              ⵂⴰⵐⴿ = !ⴲⵋⵃⵂ.getCookieString(ⴲⵛⵈⵁ).includes("c_user") ? 19 : 20;
              break;
            case 19:
              ⵂⴰⵐⴿ = 20;
              {
                ⵂⴰⴰⴿ.jumpTo(4);
                ⵂⴰⵐⴿ = 21;
              }
              break;
          }
        }
        if (ⵂⴰⵐⴿ === 21) {
          break;
        }
        return ⵂⴰⴰⴿ.yield(ⵂⵀⵅⵁ(ⴲⵋⵃⵂ, ⵒⵕⵁⵁ, ⴲⴻⵎⵂ), 5);
      case 5:
        return ⵂⴰⴰⴿ.return(ⵂⴰⴰⴿ.yieldResult);
      case 4:
        return ⵂⴰⴰⴿ.yield(ⴲⴻⵎⵂ({
          url: "https://m.facebook.com/checkpoint/?next=https://m.facebook.com/home.php?refsrc=deprecated&__req=6",
          jar: ⴲⵋⵃⵂ,
          method: "GET"
        }), 6);
      case 6:
        ⵒⵅⴼⴾ = ⵂⴰⴰⴿ.yieldResult;
        var ⵂⵀⵅⴿ = 32;
        while (ⵂⵀⵅⴿ < 33) {
          switch (ⵂⵀⵅⴿ) {
            case 32:
              ⵂⵀⵅⴿ = !ⴲⵋⵃⵂ.getCookieString(ⴲⵛⵈⵁ).includes("c_user") ? 24 : 33;
              break;
            case 24:
              ⵂⵀⵅⴿ = 33;
              {
                ⵂⴰⴰⴿ.jumpTo(7);
                ⵂⵀⵅⴿ = 34;
              }
              break;
          }
        }
        if (ⵂⵀⵅⴿ === 34) {
          break;
        }
        return ⵂⴰⴰⴿ.yield(ⵂⵀⵅⵁ(ⴲⵋⵃⵂ, ⵒⵕⵁⵁ, ⴲⴻⵎⵂ), 8);
      case 8:
        return ⵂⴰⴰⴿ.return(ⵂⴰⴰⴿ.yieldResult);
      case 7:
        ⵒⵕⵑⴾ = ⵂⴰⵐⵁ.load(ⵒⵅⴼⴾ.body);
        var ⴲⵛⵈⴿ = 16;
        while (ⴲⵛⵈⴿ < 27) {
          switch (ⴲⵛⵈⴿ) {
            case 26:
              ⴲⵛⵈⴿ = 27;
              ⵂⴰⵀⴾ = Error("Cannot login to facebook account, please login to your account to check and fix this problem");
              ⵂⴰⵀⴾ.name = "CANNOT_LOGIN";
              throw ⵂⴰⵀⴾ;
            case 16:
              ⴲⵛⵈⴿ = !ⵂⵐⵊⴾ.body && ⵒⵅⴼⴾ.body.includes("<form method=\"post\" action=\"/login/device-based") && ⵒⵕⵑⴾ("button[name=\"login\"]").length ? 26 : 27;
              break;
          }
        }
        ⴲⴻⴾⴿ = Object.assign({}, ⴲⵋⵓⵁ.parse(ⵒⵕⵑⴾ("form[method=\"post\"][class=\"checkpoint\"]").serialize()));
        ⴲⴻⴾⴿ["submit[Submit Code]"] = ⵒⵕⵑⴾ("button[name=\"submit[Submit Code]\"]").text();
        var ⵒⴵⵇⵀ = 27;
        while (ⵒⴵⵇⵀ < 28) {
          switch (ⵒⴵⵇⵀ) {
            case 27:
              ⵒⴵⵇⵀ = (ⵒⵕⵑⴾ("title").text() || "").includes("Login approval needed") ? 16 : 28;
              break;
            case 16:
              ⵒⴵⵇⵀ = 28;
              throw {
                name: "LOGIN_APPROVED_REQUIRE",
                message: "You need to verify login for this device, please login to your account with the device you normally use to verify your login"
              };
          }
        }
        var ⵂⵐⵊⵀ = 15;
        while (ⵂⵐⵊⵀ < 35) {
          switch (ⵂⵐⵊⵀ) {
            case 15:
              ⵂⵐⵊⵀ = ((ⵒⵕⵁⴿ = ⵒⵕⵑⴾ("#checkpoint_title")) == null ? 0 : (ⵒⴵⴷⴿ = ⵒⵕⵁⴿ.text()) == null ? 0 : ⵒⴵⴷⴿ.includes("Enter login code to continue")) ? 13 : 35;
              break;
            case 13:
              ⵂⵐⵊⵀ = 35;
              throw {
                name: "2FA_CODE_REQUIRED",
                message: "2FA code is required, call function continue to submit 2FA code",
                continue: function ⵂⴰⵀⵀ(ⴲⵋⵃⵀ) {
                  var ⴲⵛⴸⵀ;
                  var ⵒⵅⴼⵀ;
                  var ⵒⵕⴱⵀ;
                  var ⵂⵀⴵⵀ;
                  var ⵂⴰⵀⴼ;
                  var ⴲⵋⵃⴼ;
                  var ⴲⵛⴸⴼ;
                  var ⵒⵅⴼⴼ;
                  var ⵒⵕⴱⴼ;
                  return ⵂⴰⵀⵎ.asyncExecutePromiseGeneratorProgram(function (ⵂⵀⴵⴼ) {
                    switch (ⵂⵀⴵⴼ.nextAddress) {
                      case 1:
                        ⴲⴻⴾⴿ.approvals_code = ⴲⵋⵃⵀ;
                        return ⵂⵀⴵⴼ.yield(ⴲⴻⵎⵂ({
                          url: ⵒⵅⵌⵁ,
                          method: "POST",
                          form: ⴲⴻⴾⴿ,
                          jar: ⴲⵋⵃⵂ
                        }), 2);
                      case 2:
                        ⴲⵛⴸⵀ = ⵂⵀⴵⴼ.yieldResult;
                        var ⵂⵐⵚⴻ = 29;
                        while (ⵂⵐⵚⴻ < 38) {
                          switch (ⵂⵐⵚⴻ) {
                            case 29:
                              ⵂⵐⵚⴻ = !ⴲⵋⵃⵂ.getCookieString(ⴲⵛⵈⵁ).includes("c_user") ? 37 : 38;
                              break;
                            case 37:
                              ⵂⵐⵚⴻ = 38;
                              {
                                ⵂⵀⴵⴼ.jumpTo(3);
                                ⵂⵐⵚⴻ = 39;
                              }
                              break;
                          }
                        }
                        if (ⵂⵐⵚⴻ === 39) {
                          break;
                        }
                        return ⵂⵀⴵⴼ.yield(ⵂⵀⵅⵁ(ⴲⵋⵃⵂ, ⵒⵕⵁⵁ, ⴲⴻⵎⵂ), 4);
                      case 4:
                        return ⵂⵀⴵⴼ.return(ⵂⵀⴵⴼ.yieldResult);
                      case 3:
                        ⵒⵕⵑⴾ = ⵂⴰⵐⵁ.load(ⴲⵛⴸⵀ.body);
                        var ⴲⴻⵞⴻ = 29;
                        while (ⴲⴻⵞⴻ < 38) {
                          switch (ⴲⴻⵞⴻ) {
                            case 37:
                              ⴲⴻⵞⴻ = 38;
                              throw {
                                name: "2FA_CODE_INVALID",
                                message: "2FA code is invalid",
                                continue: ⵂⴰⵀⵀ
                              };
                            case 29:
                              ⴲⴻⵞⴻ = ⵒⵕⵑⴾ("button[name=\"submit[Submit Code]\"]").text() == ⴲⴻⴾⴿ["submit[Submit Code]"] ? 37 : 38;
                              break;
                          }
                        }
                        ⵒⵅⴼⵀ = Object.assign({}, ⴲⵋⵓⵁ.parse(ⵒⵕⵑⴾ("form[method=\"post\"][class=\"checkpoint\"]").serialize()));
                        delete ⵒⵅⴼⵀ.approvals_code;
                        ⵒⵅⴼⵀ.name_action_selected = "save_device";
                        ⵒⵅⴼⵀ["submit[Continue]"] = ⵒⵕⵑⴾ("#checkpointSubmitButton").text();
                        return ⵂⵀⴵⴼ.yield(ⴲⴻⵎⵂ({
                          url: ⵒⵅⵌⵁ,
                          method: "POST",
                          form: ⵒⵅⴼⵀ,
                          jar: ⴲⵋⵃⵂ
                        }), 5);
                      case 5:
                        ⵒⵕⴱⵀ = ⵂⵀⴵⴼ.yieldResult;
                        var ⵒⵅⵜⴼ = 19;
                        while (ⵒⵅⵜⴼ < 37) {
                          switch (ⵒⵅⵜⴼ) {
                            case 7:
                              ⵒⵅⵜⴼ = 37;
                              {
                                ⵂⵀⴵⴼ.jumpTo(6);
                                ⵒⵅⵜⴼ = 38;
                              }
                              break;
                            case 19:
                              ⵒⵅⵜⴼ = !ⴲⵋⵃⵂ.getCookieString(ⴲⵛⵈⵁ).includes("c_user") ? 7 : 37;
                              break;
                          }
                        }
                        if (ⵒⵅⵜⴼ === 38) {
                          break;
                        }
                        return ⵂⵀⴵⴼ.yield(ⵂⵀⵅⵁ(ⴲⵋⵃⵂ, ⵒⵕⵁⵁ, ⴲⴻⵎⵂ), 7);
                      case 7:
                        return ⵂⵀⴵⴼ.return(ⵂⵀⴵⴼ.yieldResult);
                      case 6:
                        ⵒⵕⵑⴾ = ⵂⴰⵐⵁ.load(ⵒⵕⴱⵀ.body);
                        ⵂⵀⴵⵀ = Object.assign({}, ⴲⵋⵓⵁ.parse(ⵒⵕⵑⴾ("form[method=\"post\"][class=\"checkpoint\"]").serialize()));
                        delete ⵂⵀⴵⵀ.approvals_code;
                        ⵂⵀⴵⵀ["submit[Continue]"] = ⵒⵕⵑⴾ("button[name=\"submit[Continue]\"]").text();
                        return ⵂⵀⴵⴼ.yield(ⴲⴻⵎⵂ({
                          url: ⵒⵅⵌⵁ,
                          method: "POST",
                          form: ⵂⵀⴵⵀ,
                          jar: ⴲⵋⵃⵂ
                        }), 8);
                      case 8:
                        ⵂⴰⵀⴼ = ⵂⵀⴵⴼ.yieldResult;
                        var ⵂⴰⴰⴽ = 32;
                        while (ⵂⴰⴰⴽ < 33) {
                          switch (ⵂⴰⴰⴽ) {
                            case 32:
                              ⵂⴰⴰⴽ = !ⴲⵋⵃⵂ.getCookieString(ⴲⵛⵈⵁ).includes("c_user") ? 24 : 33;
                              break;
                            case 24:
                              ⵂⴰⴰⴽ = 33;
                              {
                                ⵂⵀⴵⴼ.jumpTo(9);
                                ⵂⴰⴰⴽ = 34;
                              }
                              break;
                          }
                        }
                        if (ⵂⴰⴰⴽ === 34) {
                          break;
                        }
                        return ⵂⵀⴵⴼ.yield(ⵂⵀⵅⵁ(ⴲⵋⵃⵂ, ⵒⵕⵁⵁ, ⴲⴻⵎⵂ), 10);
                      case 10:
                        return ⵂⵀⴵⴼ.return(ⵂⵀⴵⴼ.yieldResult);
                      case 9:
                        ⵒⵕⵑⴾ = ⵂⴰⵐⵁ.load(ⵂⴰⵀⴼ.body);
                        ⴲⵋⵃⴼ = Object.assign({}, ⴲⵋⵓⵁ.parse(ⵒⵕⵑⴾ("form[method=\"post\"][class=\"checkpoint\"]").serialize()));
                        delete ⴲⵋⵃⴼ.approvals_code;
                        ⴲⵋⵃⴼ["submit[This was me]"] = ⵒⵕⵑⴾ("button[name=\"submit[This was me]\"]").text();
                        return ⵂⵀⴵⴼ.yield(ⴲⴻⵎⵂ({
                          url: ⵒⵅⵌⵁ,
                          method: "POST",
                          form: ⴲⵋⵃⴼ,
                          jar: ⴲⵋⵃⵂ
                        }), 11);
                      case 11:
                        ⴲⵛⴸⴼ = ⵂⵀⴵⴼ.yieldResult;
                        var ⵂⵀⵕⴼ = 11;
                        while (ⵂⵀⵕⴼ < 20) {
                          switch (ⵂⵀⵕⴼ) {
                            case 11:
                              ⵂⵀⵕⴼ = !ⴲⵋⵃⵂ.getCookieString(ⴲⵛⵈⵁ).includes("c_user") ? 19 : 20;
                              break;
                            case 19:
                              ⵂⵀⵕⴼ = 20;
                              {
                                ⵂⵀⴵⴼ.jumpTo(12);
                                ⵂⵀⵕⴼ = 21;
                              }
                              break;
                          }
                        }
                        if (ⵂⵀⵕⴼ === 21) {
                          break;
                        }
                        return ⵂⵀⴵⴼ.yield(ⵂⵀⵅⵁ(ⴲⵋⵃⵂ, ⵒⵕⵁⵁ, ⴲⴻⵎⵂ), 13);
                      case 13:
                        return ⵂⵀⴵⴼ.return(ⵂⵀⴵⴼ.yieldResult);
                      case 12:
                        ⵒⵕⵑⴾ = ⵂⴰⵐⵁ.load(ⴲⵛⴸⴼ.body);
                        ⵒⵅⴼⴼ = Object.assign({}, ⴲⵋⵓⵁ.parse(ⵒⵕⵑⴾ("form[method=\"post\"][class=\"checkpoint\"]").serialize()));
                        delete ⵒⵅⴼⴼ.approvals_code;
                        ⵒⵅⴼⴼ.name_action_selected = "save_device";
                        ⵒⵅⴼⴼ["submit[Continue]"] = ⵒⵕⵑⴾ("#checkpointSubmitButton").text();
                        return ⵂⵀⴵⴼ.yield(ⴲⴻⵎⵂ({
                          url: ⵒⵅⵌⵁ,
                          method: "POST",
                          form: ⵒⵅⴼⴼ,
                          jar: ⴲⵋⵃⵂ
                        }), 14);
                      case 14:
                        var ⴲⵛⵘⴼ = 17;
                        while (ⴲⵛⵘⴼ < 23) {
                          switch (ⴲⵛⵘⴼ) {
                            case 14:
                              ⴲⵛⵘⴼ = 23;
                              {
                                ⵂⵀⴵⴼ.jumpTo(15);
                                ⴲⵛⵘⴼ = 24;
                              }
                              break;
                            case 17:
                              ⴲⵛⵘⴼ = !ⴲⵋⵃⵂ.getCookieString(ⴲⵛⵈⵁ).includes("c_user") ? 14 : 23;
                              break;
                          }
                        }
                        if (ⴲⵛⵘⴼ === 24) {
                          break;
                        }
                        return ⵂⵀⴵⴼ.yield(ⵂⵀⵅⵁ(ⴲⵋⵃⵂ, ⵒⵕⵁⵁ, ⴲⴻⵎⵂ), 16);
                      case 16:
                        return ⵂⵀⴵⴼ.return(ⵂⵀⴵⴼ.yieldResult);
                      case 15:
                        ⵒⵕⴱⴼ = Error("Can't login to Facebook, please login to your account to check and fix this problem");
                        ⵒⵕⴱⴼ.name = "LOGIN_FAILED";
                        throw ⵒⵕⴱⴼ;
                    }
                  });
                }
              };
          }
        }
        ⵂⵐⴺⴿ = Error("Can't login to Facebook, please login to your account to check and fix this problem");
        ⵂⵐⴺⴿ.name = "LOGIN_FAILED";
        throw ⵂⵐⴺⴿ;
    }
  });
};
