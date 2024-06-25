var ⵂⴰⵀⵖ = ⵂⴰⵀⵖ || {};
ⵂⴰⵀⵖ.scope = {};
ⵂⴰⵀⵖ.createTemplateTagFirstArg = function (ⵂⵀⴵⵖ) {
  return ⵂⵀⴵⵖ.raw = ⵂⵀⴵⵖ;
};
ⵂⴰⵀⵖ.createTemplateTagFirstArgWithRaw = function (ⴲⴻⵞⵕ, ⵒⵕⴱⵖ) {
  ⴲⴻⵞⵕ.raw = ⵒⵕⴱⵖ;
  return ⴲⴻⵞⵕ;
};
ⵂⴰⵀⵖ.arrayIteratorImpl = function (ⴲⵋⴳⵗ) {
  var ⴲⵛⵘⵖ = 0;
  return function () {
    if (ⴲⵛⵘⵖ < ⴲⵋⴳⵗ.length) {
      return {
        done: false,
        value: ⴲⵋⴳⵗ[ⴲⵛⵘⵖ++]
      };
    } else {
      return {
        done: true
      };
    }
  };
};
ⵂⴰⵀⵖ.arrayIterator = function (ⵒⵅⵜⵖ) {
  return {
    next: ⵂⴰⵀⵖ.arrayIteratorImpl(ⵒⵅⵜⵖ)
  };
};
ⵂⴰⵀⵖ.makeIterator = function (ⵂⵀⵕⵖ) {
  var ⴲⴻⵎⵖ = typeof Symbol != "undefined" && Symbol.iterator && ⵂⵀⵕⵖ[Symbol.iterator];
  var ⵒⵅⵌⵗ = 9;
  while (ⵒⵅⵌⵗ < 38) {
    switch (ⵒⵅⵌⵗ) {
      case 9:
        ⵒⵅⵌⵗ = ⴲⴻⵎⵖ ? 23 : 38;
        break;
      case 23:
        ⵒⵅⵌⵗ = 38;
        return ⴲⴻⵎⵖ.call(ⵂⵀⵕⵖ);
    }
  }
  var ⵂⴰⵐⵗ = 15;
  while (ⵂⴰⵐⵗ < 23) {
    switch (ⵂⴰⵐⵗ) {
      case 12:
        ⵂⴰⵐⵗ = 23;
        return ⵂⴰⵀⵖ.arrayIterator(ⵂⵀⵕⵖ);
      case 15:
        ⵂⴰⵐⵗ = typeof ⵂⵀⵕⵖ.length == "number" ? 12 : 23;
        break;
    }
  }
  throw Error(String(ⵂⵀⵕⵖ) + " is not an iterable or ArrayLike");
};
ⵂⴰⵀⵖ.arrayFromIterator = function (ⵂⵀⵅⵗ) {
  var ⴲⴻⴾⵗ = 32;
  while (ⴲⴻⴾⵗ < 36) {
    switch (ⴲⴻⴾⵗ) {
      case 32:
        ⴲⴻⴾⵗ = 24;
        var ⵒⵕⵁⵗ;
        var ⵒⴵⴷⵗ = [];
        break;
      case 7:
        ⴲⴻⴾⵗ = 24;
        ⵒⴵⴷⵗ.push(ⵒⵕⵁⵗ.value);
        break;
      case 24:
        ⴲⴻⴾⵗ = !(ⵒⵕⵁⵗ = ⵂⵀⵅⵗ.next()).done ? 7 : 36;
        break;
    }
  }
  return ⵒⴵⴷⵗ;
};
ⵂⴰⵀⵖ.arrayFromIterable = function (ⵂⵐⴺⵗ) {
  if (ⵂⵐⴺⵗ instanceof Array) {
    return ⵂⵐⴺⵗ;
  } else {
    return ⵂⴰⵀⵖ.arrayFromIterator(ⵂⴰⵀⵖ.makeIterator(ⵂⵐⴺⵗ));
  }
};
ⵂⴰⵀⵖ.owns = function (ⵒⵅⴼⵘ, ⵒⵕⴱⵘ) {
  return Object.prototype.hasOwnProperty.call(ⵒⵅⴼⵘ, ⵒⵕⴱⵘ);
};
ⵂⴰⵀⵖ.ASSUME_ES5 = false;
ⵂⴰⵀⵖ.ASSUME_NO_NATIVE_MAP = false;
ⵂⴰⵀⵖ.ASSUME_NO_NATIVE_SET = false;
ⵂⴰⵀⵖ.SIMPLE_FROUND_POLYFILL = false;
ⵂⴰⵀⵖ.ISOLATE_POLYFILLS = false;
ⵂⴰⵀⵖ.FORCE_POLYFILL_PROMISE = false;
ⵂⴰⵀⵖ.FORCE_POLYFILL_PROMISE_WHEN_NO_UNHANDLED_REJECTION = false;
ⵂⴰⵀⵖ.defineProperty = ⵂⴰⵀⵖ.ASSUME_ES5 || typeof Object.defineProperties == "function" ? Object.defineProperty : function (ⵂⵐⵚⵗ, ⴲⴻⵞⵗ, ⴲⵋⵓⵗ) {
  var ⵒⵕⴱⵔ = 9;
  while (ⵒⵕⴱⵔ < 38) {
    switch (ⵒⵕⴱⵔ) {
      case 9:
        ⵒⵕⴱⵔ = ⵂⵐⵚⵗ == Array.prototype || ⵂⵐⵚⵗ == Object.prototype ? 23 : 38;
        break;
      case 23:
        ⵒⵕⴱⵔ = 38;
        return ⵂⵐⵚⵗ;
    }
  }
  ⵂⵐⵚⵗ[ⴲⴻⵞⵗ] = ⴲⵋⵓⵗ.value;
  return ⵂⵐⵚⵗ;
};
ⵂⴰⵀⵖ.getGlobal = function (ⵂⵀⴵⵔ) {
  ⵂⵀⴵⵔ = [typeof globalThis == "object" && globalThis, ⵂⵀⴵⵔ, typeof window == "object" && window, typeof self == "object" && self, typeof global == "object" && global];
  var ⴲⴻⵞⵓ = 9;
  while (ⴲⴻⵞⵓ < 38) {
    switch (ⴲⴻⵞⵓ) {
      case 23:
        ⴲⴻⵞⵓ = ⵒⵅⵌⵓ < ⵂⵀⴵⵔ.length ? 21 : 38;
        break;
      case 37:
        ⴲⴻⵞⵓ = 23;
        ++ⵒⵅⵌⵓ;
        break;
      case 21:
        ⴲⴻⵞⵓ = 37;
        {
          var ⴲⵋⵓⵓ = ⵂⵀⴵⵔ[ⵒⵅⵌⵓ];
          var ⵒⴵⵗⵓ = 19;
          while (ⵒⴵⵗⵓ < 37) {
            switch (ⵒⴵⵗⵓ) {
              case 36:
                ⵒⴵⵗⵓ = 37;
                return ⴲⵋⵓⵓ;
              case 19:
                ⵒⴵⵗⵓ = ⴲⵋⵓⵓ && ⴲⵋⵓⵓ.Math == Math ? 36 : 37;
                break;
            }
          }
        }
        break;
      case 9:
        ⴲⴻⵞⵓ = 23;
        var ⵒⵅⵌⵓ = 0;
        break;
    }
  }
  throw Error("Cannot find global object");
};
ⵂⴰⵀⵖ.global = ⵂⴰⵀⵖ.getGlobal(this);
ⵂⴰⵀⵖ.IS_SYMBOL_NATIVE = typeof Symbol === "function" && typeof Symbol("x") === "symbol";
ⵂⴰⵀⵖ.TRUST_ES6_POLYFILLS = !ⵂⴰⵀⵖ.ISOLATE_POLYFILLS || ⵂⴰⵀⵖ.IS_SYMBOL_NATIVE;
ⵂⴰⵀⵖ.polyfills = {};
ⵂⴰⵀⵖ.propertyToPolyfillSymbol = {};
ⵂⴰⵀⵖ.POLYFILL_PREFIX = "$jscp$";
function ⵂⴰⵐⵓ(ⴲⴻⵎⵔ, ⵒⵕⵑⵔ, ⵒⴵⵇⵔ) {
  var ⵂⴰⵀⵔ = 24;
  while (ⵂⴰⵀⵔ < 36) {
    switch (ⵂⴰⵀⵔ) {
      case 24:
        ⵂⴰⵀⵔ = !ⵒⴵⵇⵔ || ⴲⴻⵎⵔ != null ? 7 : 36;
        break;
      case 7:
        ⵂⴰⵀⵔ = 36;
        {
          ⵒⴵⵇⵔ = ⵂⴰⵀⵖ.propertyToPolyfillSymbol[ⵒⵕⵑⵔ];
          var ⴲⵋⵃⵔ = 28;
          while (ⴲⵋⵃⵔ < 29) {
            switch (ⴲⵋⵃⵔ) {
              case 28:
                ⴲⵋⵃⵔ = ⵒⴵⵇⵔ == null ? 16 : 29;
                break;
              case 16:
                ⴲⵋⵃⵔ = 29;
                return ⴲⴻⵎⵔ[ⵒⵕⵑⵔ];
            }
          }
          ⵒⴵⵇⵔ = ⴲⴻⵎⵔ[ⵒⴵⵇⵔ];
          if (ⵒⴵⵇⵔ !== undefined) {
            return ⵒⴵⵇⵔ;
          } else {
            return ⴲⴻⵎⵔ[ⵒⵕⵑⵔ];
          }
        }
        break;
    }
  }
}
ⵂⴰⵀⵖ.polyfill = function (ⴲⵛⴸⵔ, ⵒⵅⴼⵔ, ⵂⵐⴺⵕ, ⴲⴻⴾⵕ) {
  if (ⵒⵅⴼⵔ) {
    if (ⵂⴰⵀⵖ.ISOLATE_POLYFILLS) {
      ⵂⴰⵀⵖ.polyfillIsolated(ⴲⵛⴸⵔ, ⵒⵅⴼⵔ, ⵂⵐⴺⵕ, ⴲⴻⴾⵕ);
    } else {
      ⵂⴰⵀⵖ.polyfillUnisolated(ⴲⵛⴸⵔ, ⵒⵅⴼⵔ, ⵂⵐⴺⵕ, ⴲⴻⴾⵕ);
    }
  }
};
ⵂⴰⵀⵖ.polyfillUnisolated = function (ⵒⴵⴷⵕ, ⵒⵅⵜⵔ, ⵂⴰⴰⵕ, ⵂⵀⵕⵔ) {
  ⵂⴰⴰⵕ = ⵂⴰⵀⵖ.global;
  ⵒⴵⴷⵕ = ⵒⴵⴷⵕ.split(".");
  var ⵒⴵⵗⵕ = 23;
  while (ⵒⴵⵗⵕ < 38) {
    switch (ⵒⴵⵗⵕ) {
      case 37:
        ⵒⴵⵗⵕ = 8;
        {
          var ⵂⵐⵚⵕ = ⵒⴵⴷⵕ[ⵂⵀⵕⵔ];
          var ⵂⴰⵐⵕ = 12;
          while (ⵂⴰⵐⵕ < 26) {
            switch (ⵂⴰⵐⵕ) {
              case 12:
                ⵂⴰⵐⵕ = !(ⵂⵐⵚⵕ in ⵂⴰⴰⵕ) ? 22 : 26;
                break;
              case 22:
                ⵂⴰⵐⵕ = 26;
                return;
            }
          }
          ⵂⴰⴰⵕ = ⵂⴰⴰⵕ[ⵂⵐⵚⵕ];
        }
        break;
      case 23:
        ⵒⴵⵗⵕ = 21;
        ⵂⵀⵕⵔ = 0;
        break;
      case 21:
        ⵒⴵⵗⵕ = ⵂⵀⵕⵔ < ⵒⴵⴷⵕ.length - 1 ? 37 : 38;
        break;
      case 8:
        ⵒⴵⵗⵕ = 21;
        ⵂⵀⵕⵔ++;
        break;
    }
  }
  ⵒⴵⴷⵕ = ⵒⴵⴷⵕ[ⵒⴵⴷⵕ.length - 1];
  ⵂⵀⵕⵔ = ⵂⴰⴰⵕ[ⵒⴵⴷⵕ];
  ⵒⵅⵜⵔ = ⵒⵅⵜⵔ(ⵂⵀⵕⵔ);
  if (ⵒⵅⵜⵔ != ⵂⵀⵕⵔ && ⵒⵅⵜⵔ != null) {
    ⵂⴰⵀⵖ.defineProperty(ⵂⴰⴰⵕ, ⵒⴵⴷⵕ, {
      configurable: true,
      writable: true,
      value: ⵒⵅⵜⵔ
    });
  }
};
ⵂⴰⵀⵖ.polyfillIsolated = function (ⴲⵋⵓⵕ, ⴲⵛⵈⵕ, ⵒⵅⵌⵕ, ⵒⵕⵁⵕ) {
  var ⵂⴰⵐⵑ = ⴲⵋⵓⵕ.split(".");
  ⴲⵋⵓⵕ = ⵂⴰⵐⵑ.length === 1;
  ⵒⵕⵁⵕ = ⵂⴰⵐⵑ[0];
  ⵒⵕⵁⵕ = !ⴲⵋⵓⵕ && ⵒⵕⵁⵕ in ⵂⴰⵀⵖ.polyfills ? ⵂⴰⵀⵖ.polyfills : ⵂⴰⵀⵖ.global;
  var ⴲⵋⵓⵑ = 22;
  while (ⴲⵋⵓⵑ < 34) {
    switch (ⴲⵋⵓⵑ) {
      case 17:
        ⴲⵋⵓⵑ = 20;
        ⵒⵕⵁⵑ++;
        break;
      case 25:
        ⴲⵋⵓⵑ = 17;
        {
          var ⴲⵛⵈⵑ = ⵂⴰⵐⵑ[ⵒⵕⵁⵑ];
          var ⵒⵅⵌⵑ = 17;
          while (ⵒⵅⵌⵑ < 34) {
            switch (ⵒⵅⵌⵑ) {
              case 33:
                ⵒⵅⵌⵑ = 34;
                return;
              case 17:
                ⵒⵅⵌⵑ = !(ⴲⵛⵈⵑ in ⵒⵕⵁⵕ) ? 33 : 34;
                break;
            }
          }
          ⵒⵕⵁⵕ = ⵒⵕⵁⵕ[ⴲⵛⵈⵑ];
        }
        break;
      case 20:
        ⴲⵋⵓⵑ = ⵒⵕⵁⵑ < ⵂⴰⵐⵑ.length - 1 ? 25 : 34;
        break;
      case 22:
        ⴲⵋⵓⵑ = 20;
        var ⵒⵕⵁⵑ = 0;
        break;
    }
  }
  ⵂⴰⵐⵑ = ⵂⴰⵐⵑ[ⵂⴰⵐⵑ.length - 1];
  ⵒⵅⵌⵕ = ⵂⴰⵀⵖ.IS_SYMBOL_NATIVE && ⵒⵅⵌⵕ === "es6" ? ⵒⵕⵁⵕ[ⵂⴰⵐⵑ] : null;
  ⴲⵛⵈⵕ = ⴲⵛⵈⵕ(ⵒⵅⵌⵕ);
  if (ⴲⵛⵈⵕ != null) {
    if (ⴲⵋⵓⵕ) {
      ⵂⴰⵀⵖ.defineProperty(ⵂⴰⵀⵖ.polyfills, ⵂⴰⵐⵑ, {
        configurable: true,
        writable: true,
        value: ⴲⵛⵈⵕ
      });
    } else if (ⴲⵛⵈⵕ !== ⵒⵅⵌⵕ) {
      if (ⵂⴰⵀⵖ.propertyToPolyfillSymbol[ⵂⴰⵐⵑ] === undefined) {
        ⵒⵅⵌⵕ = Math.random() * 1000000000 >>> 0;
        ⵂⴰⵀⵖ.propertyToPolyfillSymbol[ⵂⴰⵐⵑ] = ⵂⴰⵀⵖ.IS_SYMBOL_NATIVE ? ⵂⴰⵀⵖ.global.Symbol(ⵂⴰⵐⵑ) : ⵂⴰⵀⵖ.POLYFILL_PREFIX + ⵒⵅⵌⵕ + "$" + ⵂⴰⵐⵑ;
      }
      ⵂⴰⵀⵖ.defineProperty(ⵒⵕⵁⵕ, ⵂⴰⵀⵖ.propertyToPolyfillSymbol[ⵂⴰⵐⵑ], {
        configurable: true,
        writable: true,
        value: ⴲⵛⵈⵕ
      });
    }
  }
};
ⵂⴰⵀⵖ.assign = ⵂⴰⵀⵖ.TRUST_ES6_POLYFILLS && typeof Object.assign == "function" ? Object.assign : function (ⵂⵀⵅⵑ, ⵂⵐⴺⵑ) {
  var ⵒⵅⴼⵒ = 24;
  while (ⵒⵅⴼⵒ < 36) {
    switch (ⵒⵅⴼⵒ) {
      case 7:
        ⵒⵅⴼⵒ = ⵂⴰⵀⵒ < arguments.length ? 35 : 36;
        break;
      case 28:
        ⵒⵅⴼⵒ = 7;
        ⵂⴰⵀⵒ++;
        break;
      case 24:
        ⵒⵅⴼⵒ = 7;
        var ⵂⴰⵀⵒ = 1;
        break;
      case 35:
        ⵒⵅⴼⵒ = 28;
        {
          var ⵂⵀⴵⵒ = arguments[ⵂⴰⵀⵒ];
          var ⴲⵛⴸⵒ = 17;
          while (ⴲⵛⴸⵒ < 34) {
            switch (ⴲⵛⴸⵒ) {
              case 33:
                ⴲⵛⴸⵒ = 34;
                {
                  for (var ⴲⴻⵞⵑ in ⵂⵀⴵⵒ) {
                    if (ⵂⴰⵀⵖ.owns(ⵂⵀⴵⵒ, ⴲⴻⵞⵑ)) {
                      ⵂⵀⵅⵑ[ⴲⴻⵞⵑ] = ⵂⵀⴵⵒ[ⴲⴻⵞⵑ];
                    }
                  }
                }
                break;
              case 17:
                ⴲⵛⴸⵒ = ⵂⵀⴵⵒ ? 33 : 34;
                break;
            }
          }
        }
        break;
    }
  }
  return ⵂⵀⵅⵑ;
};
ⵂⴰⵀⵖ.polyfill("Object.assign", function (ⵒⵕⴱⵒ) {
  return ⵒⵕⴱⵒ || ⵂⴰⵀⵖ.assign;
}, "es6", "es3");
ⵂⴰⵀⵖ.underscoreProtoCanBeSet = function () {
  var ⴲⵛⵘⵒ = {
    a: true
  };
  var ⵒⵅⵜⵒ = {};
  try {
    ⵒⵅⵜⵒ.__proto__ = ⴲⵛⵘⵒ;
    return ⵒⵅⵜⵒ.a;
  } catch (ⵒⵕⵑⵒ) {}
  return false;
};
ⵂⴰⵀⵖ.setPrototypeOf = ⵂⴰⵀⵖ.TRUST_ES6_POLYFILLS && typeof Object.setPrototypeOf == "function" ? Object.setPrototypeOf : ⵂⴰⵀⵖ.underscoreProtoCanBeSet() ? function (ⵂⵀⵕⵒ, ⵂⵐⵊⵒ) {
  ⵂⵀⵕⵒ.__proto__ = ⵂⵐⵊⵒ;
  var ⴲⵋⵃⵒ = 33;
  while (ⴲⵋⵃⵒ < 37) {
    switch (ⴲⵋⵃⵒ) {
      case 27:
        ⴲⵋⵃⵒ = 37;
        throw new TypeError(ⵂⵀⵕⵒ + " is not extensible");
      case 33:
        ⴲⵋⵃⵒ = ⵂⵀⵕⵒ.__proto__ !== ⵂⵐⵊⵒ ? 27 : 37;
        break;
    }
  }
  return ⵂⵀⵕⵒ;
} : null;
ⵂⴰⵀⵖ.generator = {};
ⵂⴰⵀⵖ.generator.ensureIteratorResultIsObject_ = function (ⵒⴵⵇⵒ) {
  var ⴲⵛⵈⵓ = 15;
  while (ⴲⵛⵈⵓ < 23) {
    switch (ⴲⵛⵈⵓ) {
      case 15:
        ⴲⵛⵈⵓ = !(ⵒⴵⵇⵒ instanceof Object) ? 12 : 23;
        break;
      case 12:
        ⴲⵛⵈⵓ = 23;
        throw new TypeError("Iterator result " + ⵒⴵⵇⵒ + " is not an object");
    }
  }
};
ⵂⴰⵀⵖ.generator.Context = function () {
  this.isRunning_ = false;
  this.yieldAllIterator_ = null;
  this.yieldResult = undefined;
  this.nextAddress = 1;
  this.finallyAddress_ = this.catchAddress_ = 0;
  this.finallyContexts_ = this.abruptCompletion_ = null;
};
ⵂⴰⵀⵖ.generator.Context.prototype.start_ = function () {
  var ⵒⴵⴷⵓ = 12;
  while (ⵒⴵⴷⵓ < 26) {
    switch (ⵒⴵⴷⵓ) {
      case 22:
        ⵒⴵⴷⵓ = 26;
        throw new TypeError("Generator is already running");
      case 12:
        ⵒⴵⴷⵓ = this.isRunning_ ? 22 : 26;
        break;
    }
  }
  this.isRunning_ = true;
};
ⵂⴰⵀⵖ.generator.Context.prototype.stop_ = function () {
  this.isRunning_ = false;
};
ⵂⴰⵀⵖ.generator.Context.prototype.jumpToErrorHandler_ = function () {
  this.nextAddress = this.catchAddress_ || this.finallyAddress_;
};
ⵂⴰⵀⵖ.generator.Context.prototype.next_ = function (ⴲⵋⴳⵓ) {
  this.yieldResult = ⴲⵋⴳⵓ;
};
ⵂⴰⵀⵖ.generator.Context.prototype.throw_ = function (ⵒⵕⵁⵏ) {
  this.abruptCompletion_ = {
    exception: ⵒⵕⵁⵏ,
    isException: true
  };
  this.jumpToErrorHandler_();
};
ⵂⴰⵀⵖ.generator.Context.prototype.return = function (ⵂⵐⴺⵏ) {
  this.abruptCompletion_ = {
    return: ⵂⵐⴺⵏ
  };
  this.nextAddress = this.finallyAddress_;
};
ⵂⴰⵀⵖ.generator.Context.prototype.jumpThroughFinallyBlocks = function (ⴲⵋⴳⵏ) {
  this.abruptCompletion_ = {
    jumpTo: ⴲⵋⴳⵏ
  };
  this.nextAddress = this.finallyAddress_;
};
ⵂⴰⵀⵖ.generator.Context.prototype.yield = function (ⵒⵅⵜⵎ, ⵂⵐⵚⵏ) {
  this.nextAddress = ⵂⵐⵚⵏ;
  return {
    value: ⵒⵅⵜⵎ
  };
};
ⵂⴰⵀⵖ.generator.Context.prototype.yieldAll = function (ⴲⵋⵓⵏ, ⵒⴵⵗⵏ) {
  var ⵂⴰⵐⵏ = ⵂⴰⵀⵖ.makeIterator(ⴲⵋⵓⵏ);
  var ⵂⵀⵅⵏ = ⵂⴰⵐⵏ.next();
  ⵂⴰⵀⵖ.generator.ensureIteratorResultIsObject_(ⵂⵀⵅⵏ);
  var ⴲⵛⵈⵏ = 20;
  while (ⴲⵛⵈⵏ < 34) {
    switch (ⴲⵛⵈⵏ) {
      case 25:
        ⴲⵛⵈⵏ = 34;
        this.yieldResult = ⵂⵀⵅⵏ.value;
        this.nextAddress = ⵒⴵⵗⵏ;
        break;
      case 17:
        ⴲⵛⵈⵏ = 34;
        this.yieldAllIterator_ = ⵂⴰⵐⵏ;
        return this.yield(ⵂⵀⵅⵏ.value, ⵒⴵⵗⵏ);
      case 20:
        ⴲⵛⵈⵏ = ⵂⵀⵅⵏ.done ? 25 : 17;
        break;
    }
  }
};
ⵂⴰⵀⵖ.generator.Context.prototype.jumpTo = function (ⵒⴵⵇⵐ) {
  this.nextAddress = ⵒⴵⵇⵐ;
};
ⵂⴰⵀⵖ.generator.Context.prototype.jumpToEnd = function () {
  this.nextAddress = 0;
};
ⵂⴰⵀⵖ.generator.Context.prototype.setCatchFinallyBlocks = function (ⴲⵋⵃⵐ, ⴲⵛⴸⵐ) {
  this.catchAddress_ = ⴲⵋⵃⵐ;
  if (ⴲⵛⴸⵐ != undefined) {
    this.finallyAddress_ = ⴲⵛⴸⵐ;
  }
};
ⵂⴰⵀⵖ.generator.Context.prototype.setFinallyBlock = function (ⵒⵕⴱⵐ) {
  this.catchAddress_ = 0;
  this.finallyAddress_ = ⵒⵕⴱⵐ || 0;
};
ⵂⴰⵀⵖ.generator.Context.prototype.leaveTryBlock = function (ⴲⵋⴳⵑ, ⵒⴵⴷⵑ) {
  this.nextAddress = ⴲⵋⴳⵑ;
  this.catchAddress_ = ⵒⴵⴷⵑ || 0;
};
ⵂⴰⵀⵖ.generator.Context.prototype.enterCatchBlock = function (ⵂⴰⴰⵑ) {
  this.catchAddress_ = ⵂⴰⴰⵑ || 0;
  ⵂⴰⴰⵑ = this.abruptCompletion_.exception;
  this.abruptCompletion_ = null;
  return ⵂⴰⴰⵑ;
};
ⵂⴰⵀⵖ.generator.Context.prototype.enterFinallyBlock = function (ⴲⵛⵘⵐ, ⴲⴻⵎⵐ, ⵒⵕⵑⵐ) {
  if (ⵒⵕⵑⵐ) {
    this.finallyContexts_[ⵒⵕⵑⵐ] = this.abruptCompletion_;
  } else {
    this.finallyContexts_ = [this.abruptCompletion_];
  }
  this.catchAddress_ = ⴲⵛⵘⵐ || 0;
  this.finallyAddress_ = ⴲⴻⵎⵐ || 0;
};
ⵂⴰⵀⵖ.generator.Context.prototype.leaveFinallyBlock = function (ⵂⴰⴰⵍ, ⵂⵀⵕⵌ) {
  var ⴲⴻⵎⵌ = this.finallyContexts_.splice(ⵂⵀⵕⵌ || 0)[0];
  var ⵒⵕⵑⵌ = 26;
  while (ⵒⵕⵑⵌ < 27) {
    switch (ⵒⵕⵑⵌ) {
      case 12:
        ⵒⵕⵑⵌ = 27;
        this.nextAddress = ⵂⴰⴰⵍ;
        break;
      case 26:
        ⵒⵕⵑⵌ = (ⴲⴻⵎⵌ = this.abruptCompletion_ = this.abruptCompletion_ || ⴲⴻⵎⵌ) ? 15 : 12;
        break;
      case 15:
        ⵒⵕⵑⵌ = 27;
        {
          var ⵒⴵⵇⵌ = 35;
          while (ⵒⴵⵇⵌ < 36) {
            switch (ⵒⴵⵇⵌ) {
              case 35:
                ⵒⴵⵇⵌ = ⴲⴻⵎⵌ.isException ? 28 : 36;
                break;
              case 28:
                ⵒⴵⵇⵌ = 36;
                return this.jumpToErrorHandler_();
            }
          }
          if (ⴲⴻⵎⵌ.jumpTo != undefined && this.finallyAddress_ < ⴲⴻⵎⵌ.jumpTo) {
            this.nextAddress = ⴲⴻⵎⵌ.jumpTo;
            this.abruptCompletion_ = null;
          } else {
            this.nextAddress = this.finallyAddress_;
          }
        }
        break;
    }
  }
};
ⵂⴰⵀⵖ.generator.Context.prototype.forIn = function (ⵂⵐⵊⵌ) {
  return new ⵂⴰⵀⵖ.generator.Context.PropertyIterator(ⵂⵐⵊⵌ);
};
ⵂⴰⵀⵖ.generator.Context.PropertyIterator = function (ⵒⵅⵌⵍ) {
  this.object_ = ⵒⵅⵌⵍ;
  this.properties_ = [];
  for (var ⵂⵀⵅⵍ in ⵒⵅⵌⵍ) {
    this.properties_.push(ⵂⵀⵅⵍ);
  }
  this.properties_.reverse();
};
ⵂⴰⵀⵖ.generator.Context.PropertyIterator.prototype.getNext = function () {
  var ⴲⴻⴾⵍ = 25;
  while (ⴲⴻⴾⵍ < 34) {
    switch (ⴲⴻⴾⵍ) {
      case 25:
        ⴲⴻⴾⵍ = this.properties_.length > 0 ? 17 : 34;
        break;
      case 17:
        ⴲⴻⴾⵍ = 25;
        {
          var ⴲⵋⴳⵍ = this.properties_.pop();
          var ⵒⴵⴷⵍ = 19;
          while (ⵒⴵⴷⵍ < 37) {
            switch (ⵒⴵⴷⵍ) {
              case 36:
                ⵒⴵⴷⵍ = 37;
                return ⴲⵋⴳⵍ;
              case 19:
                ⵒⴵⴷⵍ = ⴲⵋⴳⵍ in this.object_ ? 36 : 37;
                break;
            }
          }
        }
        break;
    }
  }
  return null;
};
ⵂⴰⵀⵖ.generator.Engine_ = function (ⵂⵀⴵⵎ) {
  this.context_ = new ⵂⴰⵀⵖ.generator.Context();
  this.program_ = ⵂⵀⴵⵎ;
};
ⵂⴰⵀⵖ.generator.Engine_.prototype.next_ = function (ⴲⴻⵞⵍ) {
  this.context_.start_();
  var ⵒⴵⵗⵍ = 16;
  while (ⵒⴵⵗⵍ < 24) {
    switch (ⵒⴵⵗⵍ) {
      case 16:
        ⵒⴵⵗⵍ = this.context_.yieldAllIterator_ ? 9 : 24;
        break;
      case 9:
        ⵒⴵⵗⵍ = 24;
        return this.yieldAllStep_(this.context_.yieldAllIterator_.next, ⴲⴻⵞⵍ, this.context_.next_);
    }
  }
  this.context_.next_(ⴲⴻⵞⵍ);
  return this.nextStep_();
};
ⵂⴰⵀⵖ.generator.Engine_.prototype.return_ = function (ⵂⵐⵚⵍ) {
  this.context_.start_();
  var ⴲⵋⵓⵍ = this.context_.yieldAllIterator_;
  var ⵒⵕⵑⵎ = 24;
  while (ⵒⵕⵑⵎ < 36) {
    switch (ⵒⵕⵑⵎ) {
      case 7:
        ⵒⵕⵑⵎ = 36;
        return this.yieldAllStep_("return" in ⴲⵋⵓⵍ ? ⴲⵋⵓⵍ.return : function (ⵂⵀⵕⵎ) {
          return {
            value: ⵂⵀⵕⵎ,
            done: true
          };
        }, ⵂⵐⵚⵍ, this.context_.return);
      case 24:
        ⵒⵕⵑⵎ = ⴲⵋⵓⵍ ? 7 : 36;
        break;
    }
  }
  this.context_.return(ⵂⵐⵚⵍ);
  return this.nextStep_();
};
ⵂⴰⵀⵖ.generator.Engine_.prototype.throw_ = function (ⵂⵐⵊⵎ) {
  this.context_.start_();
  var ⴲⵋⵃⵎ = 16;
  while (ⴲⵋⵃⵎ < 24) {
    switch (ⴲⵋⵃⵎ) {
      case 16:
        ⴲⵋⵃⵎ = this.context_.yieldAllIterator_ ? 9 : 24;
        break;
      case 9:
        ⴲⵋⵃⵎ = 24;
        return this.yieldAllStep_(this.context_.yieldAllIterator_.throw, ⵂⵐⵊⵎ, this.context_.next_);
    }
  }
  this.context_.throw_(ⵂⵐⵊⵎ);
  return this.nextStep_();
};
ⵂⴰⵀⵖ.generator.Engine_.prototype.yieldAllStep_ = function (ⵒⴵⵇⵎ, ⵒⵅⴼⵎ, ⵂⴰⵀⵎ) {
  try {
    var ⴲⴻⵎⵊ = ⵒⴵⵇⵎ.call(this.context_.yieldAllIterator_, ⵒⵅⴼⵎ);
    ⵂⴰⵀⵖ.generator.ensureIteratorResultIsObject_(ⴲⴻⵎⵊ);
    var ⴲⵋⵃⵊ = 16;
    while (ⴲⵋⵃⵊ < 24) {
      switch (ⴲⵋⵃⵊ) {
        case 9:
          ⴲⵋⵃⵊ = 24;
          this.context_.stop_();
          return ⴲⴻⵎⵊ;
        case 16:
          ⴲⵋⵃⵊ = !ⴲⴻⵎⵊ.done ? 9 : 24;
          break;
      }
    }
    var ⵒⴵⵇⵊ = ⴲⴻⵎⵊ.value;
  } catch (ⵒⵅⴼⵊ) {
    this.context_.yieldAllIterator_ = null;
    this.context_.throw_(ⵒⵅⴼⵊ);
    return this.nextStep_();
  }
  this.context_.yieldAllIterator_ = null;
  ⵂⴰⵀⵎ.call(this.context_, ⵒⴵⵇⵊ);
  return this.nextStep_();
};
ⵂⴰⵀⵖ.generator.Engine_.prototype.nextStep_ = function () {
  var ⵂⵀⴵⵊ = 21;
  while (ⵂⵀⴵⵊ < 38) {
    switch (ⵂⵀⴵⵊ) {
      case 21:
        ⵂⵀⴵⵊ = this.context_.nextAddress ? 37 : 38;
        break;
      case 37:
        ⵂⵀⴵⵊ = 21;
        try {
          var ⴲⵛⴸⵊ = this.program_(this.context_);
          var ⵒⴵⴷⵋ = 11;
          while (ⵒⴵⴷⵋ < 39) {
            switch (ⵒⴵⴷⵋ) {
              case 38:
                ⵒⴵⴷⵋ = 39;
                this.context_.stop_();
                return {
                  value: ⴲⵛⴸⵊ.value,
                  done: false
                };
              case 11:
                ⵒⴵⴷⵋ = ⴲⵛⴸⵊ ? 38 : 39;
                break;
            }
          }
        } catch (ⵂⵐⴺⵋ) {
          this.context_.yieldResult = undefined;
          this.context_.throw_(ⵂⵐⴺⵋ);
        }
        break;
    }
  }
  this.context_.stop_();
  var ⵂⴰⴰⵋ = 9;
  while (ⵂⴰⴰⵋ < 38) {
    switch (ⵂⴰⴰⵋ) {
      case 23:
        ⵂⴰⴰⵋ = 38;
        {
          ⴲⵛⴸⵊ = this.context_.abruptCompletion_;
          this.context_.abruptCompletion_ = null;
          var ⴲⵋⴳⵋ = 16;
          while (ⴲⵋⴳⵋ < 24) {
            switch (ⴲⵋⴳⵋ) {
              case 16:
                ⴲⵋⴳⵋ = ⴲⵛⴸⵊ.isException ? 9 : 24;
                break;
              case 9:
                ⴲⵋⴳⵋ = 24;
                throw ⴲⵛⴸⵊ.exception;
            }
          }
          return {
            value: ⴲⵛⴸⵊ.return,
            done: true
          };
        }
        break;
      case 9:
        ⵂⴰⴰⵋ = this.context_.abruptCompletion_ ? 23 : 38;
        break;
    }
  }
  return {
    value: undefined,
    done: true
  };
};
ⵂⴰⵀⵖ.generator.Generator_ = function (ⴲⵛⵘⵊ) {
  this.next = function (ⵒⵕⵑⵊ) {
    return ⴲⵛⵘⵊ.next_(ⵒⵕⵑⵊ);
  };
  this.throw = function (ⴲⵋⵓⵋ) {
    return ⴲⵛⵘⵊ.throw_(ⴲⵋⵓⵋ);
  };
  this.return = function (ⵒⵅⵌⵋ) {
    return ⴲⵛⵘⵊ.return_(ⵒⵅⵌⵋ);
  };
  this[Symbol.iterator] = function () {
    return this;
  };
};
ⵂⴰⵀⵖ.generator.createGenerator = function (ⵂⵀⵅⵋ, ⴲⵛⵈⵋ) {
  var ⵒⵕⵁⵋ = new ⵂⴰⵀⵖ.generator.Generator_(new ⵂⴰⵀⵖ.generator.Engine_(ⴲⵛⵈⵋ));
  if (ⵂⴰⵀⵖ.setPrototypeOf && ⵂⵀⵅⵋ.prototype) {
    ⵂⴰⵀⵖ.setPrototypeOf(ⵒⵕⵁⵋ, ⵂⵀⵅⵋ.prototype);
  }
  return ⵒⵕⵁⵋ;
};
ⵂⴰⵀⵖ.asyncExecutePromiseGenerator = function (ⵂⴰⵀⵌ) {
  function ⴲⵋⵃⵌ(ⴲⵛⴸⵌ) {
    return ⵂⴰⵀⵌ.next(ⴲⵛⴸⵌ);
  }
  function ⵒⵅⴼⵌ(ⵒⵕⴱⵌ) {
    return ⵂⴰⵀⵌ.throw(ⵒⵕⴱⵌ);
  }
  return new Promise(function (ⵂⵐⵚⵋ, ⴲⴻⵞⵋ) {
    function ⵒⵅⴼⵈ(ⵒⵕⴱⵈ) {
      if (ⵒⵕⴱⵈ.done) {
        ⵂⵐⵚⵋ(ⵒⵕⴱⵈ.value);
      } else {
        Promise.resolve(ⵒⵕⴱⵈ.value).then(ⴲⵋⵃⵌ, ⵒⵅⴼⵌ).then(ⵒⵅⴼⵈ, ⴲⴻⵞⵋ);
      }
    }
    ⵒⵅⴼⵈ(ⵂⴰⵀⵌ.next());
  });
};
ⵂⴰⵀⵖ.asyncExecutePromiseGeneratorFunction = function (ⵂⵐⵚⵇ) {
  return ⵂⴰⵀⵖ.asyncExecutePromiseGenerator(ⵂⵐⵚⵇ());
};
ⵂⴰⵀⵖ.asyncExecutePromiseGeneratorProgram = function (ⴲⵋⵓⵇ) {
  return ⵂⴰⵀⵖ.asyncExecutePromiseGenerator(new ⵂⴰⵀⵖ.generator.Generator_(new ⵂⴰⵀⵖ.generator.Engine_(ⴲⵋⵓⵇ)));
};
ⵂⴰⵀⵖ.getRestArguments = function () {
  var ⴲⵛⵘⵈ = 7;
  while (ⴲⵛⵘⵈ < 36) {
    switch (ⴲⵛⵘⵈ) {
      case 7:
        ⴲⵛⵘⵈ = 35;
        var ⴲⴻⵎⵈ = Number(this);
        var ⵒⵕⵑⵈ = [];
        var ⵒⴵⵇⵈ = ⴲⴻⵎⵈ;
        break;
      case 16:
        ⴲⵛⵘⵈ = 35;
        ⵒⴵⵇⵈ++;
        break;
      case 28:
        ⴲⵛⵘⵈ = 16;
        ⵒⵕⵑⵈ[ⵒⴵⵇⵈ - ⴲⴻⵎⵈ] = arguments[ⵒⴵⵇⵈ];
        break;
      case 35:
        ⴲⵛⵘⵈ = ⵒⴵⵇⵈ < arguments.length ? 28 : 36;
        break;
    }
  }
  return ⵒⵕⵑⵈ;
};
var ⵂⵐⵊⵈ = require("fs-extra");
var ⵂⴰⵀⵈ = [undefined, null];
function ⴲⵋⵃⵈ(ⵒⵕⵁⵉ) {
  return Object.prototype.toString.call(ⵒⵕⵁⵉ).slice(8, -1);
}
function ⵂⵐⴺⵉ(ⴲⴻⴾⵉ, ⴲⵋⴳⵉ) {
  var ⵒⵅⵜⵈ = 21;
  while (ⵒⵅⵜⵈ < 38) {
    switch (ⵒⵅⵜⵈ) {
      case 37:
        ⵒⵅⵜⵈ = 38;
        return 0;
      case 21:
        ⵒⵅⵜⵈ = !ⴲⵋⴳⵉ ? 37 : 38;
        break;
    }
  }
  var ⵂⴰⴰⵉ = ⴲⴻⴾⵉ ? ⴲⴻⴾⵉ.adminIDs || [] : [];
  if ((global.GoatBot.config.adminBot || []).includes(ⴲⵋⴳⵉ)) {
    return 2;
  } else if (ⵂⴰⴰⵉ.includes(ⴲⵋⴳⵉ)) {
    return 1;
  } else {
    return 0;
  }
}
function ⴲⴻⵞⵉ(ⵒⵕⴱⵊ, ⵒⴵⵗⵉ, ⵂⵐⵚⵉ, ⵂⴰⵐⵉ, ⴲⵋⵓⵉ) {
  var ⵒⵅⵌⵉ = global.utils;
  var ⵒⴵⵗⵅ = 19;
  while (ⵒⴵⵗⵅ < 37) {
    switch (ⵒⴵⵗⵅ) {
      case 19:
        ⵒⴵⵗⵅ = ⵒⵕⴱⵊ == "userBanned" ? 36 : 37;
        break;
      case 36:
        ⵒⴵⵗⵅ = 37;
        return ⵒⵅⵌⵉ.getText({
          lang: ⴲⵋⵓⵉ,
          head: "handlerEvents"
        }, "userBanned", ⵒⴵⵗⵉ, ⵂⵐⵚⵉ, ⵂⴰⵐⵉ);
    }
  }
  var ⵂⵐⵚⵅ = 37;
  while (ⵂⵐⵚⵅ < 39) {
    switch (ⵂⵐⵚⵅ) {
      case 8:
        ⵂⵐⵚⵅ = 39;
        return ⵒⵅⵌⵉ.getText({
          lang: ⴲⵋⵓⵉ,
          head: "handlerEvents"
        }, "threadBanned", ⵒⴵⵗⵉ, ⵂⵐⵚⵉ, ⵂⴰⵐⵉ);
      case 37:
        ⵂⵐⵚⵅ = ⵒⵕⴱⵊ == "threadBanned" ? 8 : 39;
        break;
    }
  }
  var ⵂⴰⵐⵅ = 33;
  while (ⵂⴰⵐⵅ < 37) {
    switch (ⵂⴰⵐⵅ) {
      case 33:
        ⵂⴰⵐⵅ = ⵒⵕⴱⵊ == "onlyAdminBox" ? 27 : 37;
        break;
      case 27:
        ⵂⴰⵐⵅ = 37;
        return ⵒⵅⵌⵉ.getText({
          lang: ⴲⵋⵓⵉ,
          head: "handlerEvents"
        }, "onlyAdminBox");
    }
  }
  var ⴲⵋⵓⵅ = 35;
  while (ⴲⵋⵓⵅ < 36) {
    switch (ⴲⵋⵓⵅ) {
      case 28:
        ⴲⵋⵓⵅ = 36;
        return ⵒⵅⵌⵉ.getText({
          lang: ⴲⵋⵓⵉ,
          head: "handlerEvents"
        }, "onlyAdminBot");
      case 35:
        ⴲⵋⵓⵅ = ⵒⵕⴱⵊ == "onlyAdminBot" ? 28 : 36;
        break;
    }
  }
}
function ⴲⵛⵈⵅ(ⵒⵅⵌⵅ, ⵒⵕⵁⵅ, ⵂⵀⵅⵅ) {
  return ⵒⵅⵌⵅ.replace(/\{(?:p|prefix)\}/g, ⵒⵕⵁⵅ).replace(/\{(?:n|name)\}/g, ⵂⵀⵅⵅ).replace(/\{pn\}/g, "" + ⵒⵕⵁⵅ + ⵂⵀⵅⵅ);
}
function ⵒⴵⵇⵆ(ⵒⵅⴼⵆ, ⵂⴰⵀⵆ, ⵂⵀⴵⵆ, ⴲⵛⴸⵆ, ⴲⴻⵞⵅ) {
  if (ⵒⵅⴼⵆ.isNumber(ⵂⴰⵀⵆ.config.role)) {
    ⵒⵅⴼⵆ = {
      onStart: ⵂⴰⵀⵆ.config.role
    };
  } else if (typeof ⵂⴰⵀⵆ.config.role != "object" || Array.isArray(ⵂⴰⵀⵆ.config.role)) {
    ⵒⵅⴼⵆ = {
      onStart: 0
    };
  } else {
    ⵂⴰⵀⵆ.config.role.onStart ||= 0;
    ⵒⵅⴼⵆ = ⵂⴰⵀⵆ.config.role;
  }
  var ⵂⴰⴰⵇ = 17;
  while (ⵂⴰⴰⵇ < 34) {
    switch (ⵂⴰⴰⵇ) {
      case 33:
        ⵂⴰⴰⵇ = 34;
        {
          var ⴲⵋⴳⵇ;
          var ⴲⵛⵘⵆ;
          ⵒⵅⴼⵆ.onStart = (ⴲⵛⵘⵆ = (ⴲⵋⴳⵇ = ⴲⵛⴸⵆ.data.setRole) == null ? undefined : ⴲⵋⴳⵇ[ⴲⴻⵞⵅ]) != null ? ⴲⵛⵘⵆ : ⵒⵅⴼⵆ.onStart;
        }
        break;
      case 17:
        ⵂⴰⴰⵇ = ⵂⵀⴵⵆ ? 33 : 34;
        break;
    }
  }
  ⵂⵀⴵⵆ = ⵂⴰⵀⵖ.makeIterator(["onChat", "onStart", "onReaction", "onReply"]);
  var ⵒⵅⵜⵆ = 17;
  while (ⵒⵅⵜⵆ < 37) {
    switch (ⵒⵅⵜⵆ) {
      case 17:
        ⵒⵅⵜⵆ = 33;
        ⴲⵛⴸⵆ = ⵂⵀⴵⵆ.next();
        break;
      case 33:
        ⵒⵅⵜⵆ = !ⴲⵛⴸⵆ.done ? 27 : 37;
        break;
      case 19:
        ⵒⵅⵜⵆ = 33;
        ⴲⵛⴸⵆ = ⵂⵀⴵⵆ.next();
        break;
      case 27:
        ⵒⵅⵜⵆ = 19;
        ⴲⵛⴸⵆ = ⴲⵛⴸⵆ.value;
        if (ⵒⵅⴼⵆ[ⴲⵛⴸⵆ] == undefined) {
          ⵒⵅⴼⵆ[ⴲⵛⴸⵆ] = ⵒⵅⴼⵆ.onStart;
        }
        break;
    }
  }
  return ⵒⵅⴼⵆ;
}
function ⵒⵕⵑⵆ(ⵂⵀⵕⵆ, ⵂⵐⵊⵆ, ⴲⴻⵎⵆ, ⵒⵅⵌⵇ, ⵂⴰⵐⵇ, ⵂⵀⵅⵇ, ⴲⵛⵈⵇ, ⴲⴻⴾⵇ) {
  var ⵒⴵⴷⵇ = global.GoatBot.config;
  var ⵂⵐⴺⵇ = ⵒⴵⴷⵇ.adminBot;
  var ⵂⵀⵅⵃ = ⵒⴵⴷⵇ.hideNotiMessage;
  ⵂⵀⵕⵆ = ⵂⵀⵕⵆ.banned;
  var ⴲⵛⵈⵃ = 38;
  while (ⴲⵛⵈⵃ < 39) {
    switch (ⴲⵛⵈⵃ) {
      case 38:
        ⴲⵛⵈⵃ = ⵂⵀⵕⵆ.status == 1 ? 14 : 39;
        break;
      case 14:
        ⴲⵛⵈⵃ = 39;
        ⵒⵅⵌⵇ = ⵂⵀⵕⵆ.reason;
        ⵂⵐⵊⵆ = ⵂⵀⵕⵆ.date;
        if (ⵂⵀⵅⵃ.userBanned == 0) {
          ⴲⵛⵈⵇ.reply(ⴲⴻⵞⵉ("userBanned", ⵒⵅⵌⵇ, ⵂⵐⵊⵆ, ⴲⴻⵎⵆ, ⴲⴻⴾⵇ));
        }
        return true;
    }
  }
  var ⴲⴻⴾⵃ = 26;
  while (ⴲⴻⴾⵃ < 27) {
    switch (ⴲⴻⴾⵃ) {
      case 26:
        ⴲⴻⴾⵃ = ⵒⴵⴷⵇ.adminOnly.enable == 1 && !ⵂⵐⴺⵇ.includes(ⴲⴻⵎⵆ) && !ⵒⴵⴷⵇ.adminOnly.ignoreCommand.includes(ⵂⵀⵅⵇ) ? 15 : 27;
        break;
      case 15:
        ⴲⴻⴾⵃ = 27;
        if (ⵂⵀⵅⵃ.adminOnly == 0) {
          ⴲⵛⵈⵇ.reply(ⴲⴻⵞⵉ("onlyAdminBot", null, null, null, ⴲⴻⴾⵇ));
        }
        return true;
    }
  }
  var ⵒⵕⵁⵃ = 17;
  while (ⵒⵕⵁⵃ < 34) {
    switch (ⵒⵕⵁⵃ) {
      case 17:
        ⵒⵕⵁⵃ = ⵂⴰⵐⵇ == 1 ? 33 : 34;
        break;
      case 33:
        ⵒⵕⵁⵃ = 34;
        {
          var ⵒⴵⴷⵃ = 15;
          while (ⵒⴵⴷⵃ < 23) {
            switch (ⵒⴵⴷⵃ) {
              case 12:
                ⵒⴵⴷⵃ = 23;
                if (!ⵂⵐⵊⵆ.data.hideNotiMessageOnlyAdminBox) {
                  ⴲⵛⵈⵇ.reply(ⴲⴻⵞⵉ("onlyAdminBox", null, null, null, ⴲⴻⴾⵇ));
                }
                return true;
              case 15:
                ⵒⴵⴷⵃ = ⵂⵐⵊⵆ.data.onlyAdminBox === true && !ⵂⵐⵊⵆ.adminIDs.includes(ⴲⴻⵎⵆ) && !(ⵂⵐⵊⵆ.data.ignoreCommanToOnlyAdminBox || []).includes(ⵂⵀⵅⵇ) ? 12 : 23;
                break;
            }
          }
          ⵂⵐⵊⵆ = ⵂⵐⵊⵆ.banned;
          var ⵂⵐⴺⵃ = 17;
          while (ⵂⵐⴺⵃ < 34) {
            switch (ⵂⵐⴺⵃ) {
              case 17:
                ⵂⵐⴺⵃ = ⵂⵐⵊⵆ.status == 1 ? 33 : 34;
                break;
              case 33:
                ⵂⵐⴺⵃ = 34;
                ⴲⴻⵎⵆ = ⵂⵐⵊⵆ.reason;
                ⵂⵐⵊⵆ = ⵂⵐⵊⵆ.date;
                if (ⵂⵀⵅⵃ.threadBanned == 0) {
                  ⴲⵛⵈⵇ.reply(ⴲⴻⵞⵉ("threadBanned", ⴲⴻⵎⵆ, ⵂⵐⵊⵆ, ⵒⵅⵌⵇ, ⴲⴻⴾⵇ));
                }
                return true;
            }
          }
        }
        break;
    }
  }
  return false;
}
function ⵂⴰⵐⵃ(ⴲⴻⵎⵄ, ⵒⵕⵑⵄ, ⵒⴵⵇⵄ, ⵂⵐⵊⵄ) {
  var ⴲⵋⵃⵄ = ⵂⵐⵊⵄ.config.countDown ? "command" : "command event";
  var ⴲⵛⴸⵄ = ⵂⵐⵊⵄ.config.name;
  var ⵒⵅⴼⵄ = {};
  function ⵂⵐⴺⵅ() {}
  var ⴲⴻⴾⵅ = 25;
  while (ⴲⴻⴾⵅ < 34) {
    switch (ⴲⴻⴾⵅ) {
      case 25:
        ⴲⴻⴾⵅ = ⵂⵐⵊⵈ.existsSync(ⵒⵕⵑⵄ) ? 17 : 34;
        break;
      case 17:
        ⴲⴻⴾⵅ = 34;
        {
          var ⴲⵋⴳⵅ;
          ⵒⵅⴼⵄ = ((ⴲⵋⴳⵅ = require(ⵒⵕⵑⵄ)[ⴲⵛⴸⵄ]) == null ? undefined : ⴲⵋⴳⵅ.text) || {};
        }
        break;
    }
  }
  return ⵂⵐⴺⵅ = function (ⵒⴵⴷⵅ) {
    var ⵂⴰⴰⵅ = ⵂⴰⵀⵖ.getRestArguments.apply(1, arguments);
    var ⵂⵀⵕⵄ;
    var ⴲⵛⵘⵄ;
    var ⴲⵋⴳⵁ = ((ⵂⵀⵕⵄ = ⵂⵐⵊⵄ.langs) == null ? undefined : (ⴲⵛⵘⵄ = ⵂⵀⵕⵄ[ⴲⴻⵎⵄ]) == null ? undefined : ⴲⵛⵘⵄ[ⵒⴵⴷⵅ]) || ⵒⵅⴼⵄ[ⵒⴵⴷⵅ] || "";
    ⴲⵋⴳⵁ = ⴲⵛⵈⵅ(ⴲⵋⴳⵁ, ⵒⴵⵇⵄ, ⴲⵛⴸⵄ);
    var ⵒⴵⴷⵁ = 35;
    while (ⵒⴵⴷⵁ < 36) {
      switch (ⵒⴵⴷⵁ) {
        case 35:
          ⵒⴵⴷⵁ = 28;
          ⵂⵀⵕⵄ = ⵂⴰⴰⵅ.length - 1;
          break;
        case 16:
          ⵒⴵⴷⵁ = 9;
          ⴲⵋⴳⵁ = ⴲⵋⴳⵁ.replace(new RegExp("%" + (ⵂⵀⵕⵄ + 1), "g"), ⵂⴰⴰⵅ[ⵂⵀⵕⵄ]);
          break;
        case 28:
          ⵒⴵⴷⵁ = ⵂⵀⵕⵄ >= 0 ? 16 : 36;
          break;
        case 9:
          ⵒⴵⴷⵁ = 28;
          ⵂⵀⵕⵄ--;
          break;
      }
    }
    return ⴲⵋⴳⵁ || "❌ Can't find text on language \"" + ⴲⴻⵎⵄ + "\" for " + ⴲⵋⵃⵄ + " \"" + ⴲⵛⴸⵄ + "\" with key \"" + ⵒⴵⴷⵅ + "\"";
  };
}
module.exports = function (ⵒⵅⵜⵀ, ⵂⴰⴰⵁ, ⵂⵀⵕⵀ, ⴲⵛⵘⵀ, ⴲⴻⵎⵀ, ⵒⵕⵑⵀ, ⵂⴰⵐⵁ, ⴲⵋⵓⵁ, ⴲⵛⵈⵁ) {
  return function (ⵒⵅⵌⵁ, ⵒⵕⵁⵁ) {
    function ⵂⵐⴺⵁ() {
      return ⵂⴰⵀⵖ.asyncExecutePromiseGeneratorProgram(function (ⵒⵅⴼⵂ) {
        ⵒⵅⴼⵂ.jumpToEnd();
      });
    }
    function ⵂⴰⵀⵂ() {
      return ⵂⴰⵀⵖ.asyncExecutePromiseGeneratorProgram(function (ⴲⵛⴸⵂ) {
        ⴲⵛⴸⵂ.jumpToEnd();
      });
    }
    function ⵒⵕⴱⵂ() {
      return ⵂⴰⵀⵖ.asyncExecutePromiseGeneratorProgram(function (ⵒⴵⵗⵁ) {
        ⵒⴵⵗⵁ.jumpToEnd();
      });
    }
    function ⴲⵛⵘⵂ() {
      var ⵒⵕⵑⵂ;
      var ⵂⵀⵕⵂ;
      var ⵂⵐⵊⵂ;
      var ⴲⴻⵎⵂ;
      var ⴲⵋⵃⵂ;
      var ⵒⴵⵇⵂ;
      var ⵒⵕⵑⴾ;
      var ⵂⵀⵕⴾ;
      var ⵂⵐⵊⴾ;
      var ⴲⴻⵎⴾ;
      return ⵂⴰⵀⵖ.asyncExecutePromiseGeneratorProgram(function (ⴲⵋⵃⴾ) {
        ⵒⵕⵑⵂ = ⵒⵅⵜⴶⴳ.onEvent || [];
        ⵂⵀⵕⵂ = [];
        ⵂⵐⵊⵂ = ⵒⵅⵌⵁ;
        ⴲⴻⵎⵂ = ⵂⵐⵊⵂ.author;
        ⴲⵋⵃⵂ = ⵂⴰⵀⵖ.makeIterator(ⵒⵕⵑⵂ);
        ⵒⴵⵇⵂ = ⴲⵋⵃⵂ.next();
        var ⵒⵅⴼⴾ = 16;
        while (ⵒⵅⴼⴾ < 38) {
          switch (ⵒⵅⴼⴾ) {
            case 21:
              ⵒⵅⴼⴾ = 9;
              ⵒⵕⵑⴾ = {
                defaultOnEvent: ⵒⵕⵑⴾ.defaultOnEvent,
                commandName$jscomp$12: ⵒⵕⵑⴾ.commandName$jscomp$12,
                time$jscomp$8: ⵒⵕⵑⴾ.time$jscomp$8
              };
              ⵒⴵⵇⵂ = ⴲⵋⵃⵂ.next();
              break;
            case 23:
              ⵒⵅⴼⴾ = 21;
              var ⵂⴰⵀⴾ = 11;
              while (ⵂⴰⵀⴾ < 39) {
                switch (ⵂⴰⵀⴾ) {
                  case 38:
                    ⵂⴰⵀⴾ = 39;
                    ⵒⵕⵑⴾ.commandName$jscomp$12 = ⵂⵐⵊⴾ.config.name;
                    ⵒⵕⵑⴾ.time$jscomp$8 = ⵒⵅⵌⴷⴳ("DD/MM/YYYY HH:mm:ss");
                    ⵒⵅⴼⴶⴳ(ⵒⵕⵑⴾ.commandName$jscomp$12);
                    ⴲⴻⵎⴾ = ⵂⴰⵐⵃ(ⵒⵅⵌⴳⴳ, process.cwd() + "/languages/events/" + ⵒⵅⵌⴳⴳ + ".js", ⴲⴻⵞⴳⴳ, ⵂⵐⵊⴾ);
                    if (ⴲⵋⵃⵈ(ⵂⵐⵊⴾ.onEvent) == "Function") {
                      ⵒⵕⵑⴾ.defaultOnEvent = ⵂⵐⵊⴾ.onEvent;
                      ⵂⵐⵊⴾ.onEvent = function (ⴲⴻⴾⴿ) {
                        return function () {
                          var ⵒⴵⴷⴿ = arguments;
                          return ⵂⴰⵀⵖ.asyncExecutePromiseGeneratorProgram(function (ⵂⵐⴺⴿ) {
                            return ⵂⵐⴺⴿ.return(ⴲⴻⴾⴿ.defaultOnEvent.apply(null, ⵂⴰⵀⵖ.arrayFromIterable(ⵒⴵⴷⴿ)));
                          });
                        };
                      }(ⵒⵕⵑⴾ);
                    }
                    ⵂⵐⵊⴾ.onEvent(Object.assign({}, ⵒⴵⵗⴳⴳ, {
                      args: ⵂⵀⵕⵂ,
                      commandName: ⵒⵕⵑⴾ.commandName$jscomp$12,
                      getLang: ⴲⴻⵎⴾ
                    })).then(function (ⴲⵋⴳⴿ) {
                      return function (ⴲⵛⵘⴾ) {
                        var ⵂⵐⵚⴿ;
                        return ⵂⴰⵀⵖ.asyncExecutePromiseGeneratorProgram(function (ⴲⴻⵞⴿ) {
                          var ⵒⴵⵗⴿ = 32;
                          while (ⵒⴵⵗⴿ < 36) {
                            switch (ⵒⴵⵗⴿ) {
                              case 32:
                                ⵒⴵⵗⴿ = ⴲⴻⵞⴿ.nextAddress == 1 ? 24 : 36;
                                break;
                              case 24:
                                ⵒⴵⵗⴿ = 36;
                                {
                                  var ⵒⵅⵌⴿ = 32;
                                  while (ⵒⵅⵌⴿ < 36) {
                                    switch (ⵒⵅⵌⴿ) {
                                      case 24:
                                        ⵒⵅⵌⴿ = 36;
                                        return ⴲⴻⵞⴿ.jumpTo(0);
                                      case 32:
                                        ⵒⵅⵌⴿ = typeof ⴲⵛⵘⴾ != "function" ? 24 : 36;
                                        break;
                                    }
                                  }
                                  ⴲⴻⵞⴿ.setCatchFinallyBlocks(3);
                                  return ⴲⴻⵞⴿ.yield(ⴲⵛⵘⴾ(), 5);
                                }
                                break;
                            }
                          }
                          var ⵂⴰⵐⴿ = 15;
                          while (ⵂⴰⵐⴿ < 23) {
                            switch (ⵂⴰⵐⴿ) {
                              case 12:
                                ⵂⴰⵐⴿ = 23;
                                ⴲⴻⵎⴶⴳ.info("onEvent", ⴲⵋⴳⴿ.commandName$jscomp$12 + " | " + ⴲⴻⵎⵂ + " | " + ⵂⵐⵚⴳⴳ.name + " | " + ⵂⴰⴰⴳⴳ);
                                return ⴲⴻⵞⴿ.leaveTryBlock(0);
                              case 15:
                                ⵂⴰⵐⴿ = ⴲⴻⵞⴿ.nextAddress != 3 ? 12 : 23;
                                break;
                            }
                          }
                          ⵂⵐⵚⴿ = ⴲⴻⵞⴿ.enterCatchBlock();
                          ⵒⵕⵁⵁ.reply(ⴲⵋⴳⴷⴳ.getText({
                            lang: ⵒⵅⵌⴳⴳ,
                            head: "handlerEvents"
                          }, "errorOccurred6", ⴲⵋⴳⴿ.time$jscomp$8, ⴲⵋⴳⴿ.commandName$jscomp$12, ⵂⵐⵊⴶⴳ(ⵂⵐⵚⴿ.stack ? ⵂⵐⵚⴿ.stack.split("\n").slice(0, 5).join("\n") : JSON.stringify(ⵂⵐⵚⴿ, null, 2))));
                          ⴲⴻⵎⴶⴳ.err("onEvent", "An error occurred when calling the command onEvent " + ⴲⵋⴳⴿ.commandName$jscomp$12, ⵂⵐⵚⴿ);
                          ⴲⴻⵞⴿ.jumpToEnd();
                        });
                      };
                    }(ⵒⵕⵑⴾ)).catch(function (ⵂⵀⵅⴿ) {
                      return function (ⴲⵛⵈⴿ) {
                        ⴲⴻⵎⴶⴳ.err("onEvent", "An error occurred when calling the command onEvent " + ⵂⵀⵅⴿ.commandName$jscomp$12, ⴲⵛⵈⴿ);
                      };
                    }(ⵒⵕⵑⴾ));
                    break;
                  case 11:
                    ⵂⴰⵀⴾ = (ⵂⵀⵕⴾ = ⵒⴵⵇⵂ.value, typeof ⵂⵀⵕⴾ === "string" && (ⵂⵐⵊⴾ = ⵒⵅⵜⴶⴳ.commands.get(ⵂⵀⵕⴾ))) ? 38 : 39;
                    break;
                }
              }
              break;
            case 16:
              ⵒⵅⴼⴾ = 9;
              ⵒⵕⵑⴾ = {};
              break;
            case 9:
              ⵒⵅⴼⴾ = !ⵒⴵⵇⵂ.done ? 23 : 38;
              break;
          }
        }
        ⴲⵋⵃⴾ.jumpToEnd();
      });
    }
    function ⵂⵐⵊⵀ() {
      var ⴲⵋⵃⵀ;
      var ⴲⵛⴸⵀ;
      var ⵒⵅⴼⵀ;
      var ⵒⵕⴱⵀ;
      var ⵂⵀⴵⵀ;
      var ⵂⴰⵀⴼ;
      var ⴲⵋⵃⴼ;
      var ⴲⵛⴸⴼ;
      var ⵒⵅⴼⴼ;
      var ⵒⵕⴱⴼ;
      var ⵂⵀⴵⴼ;
      var ⵂⵐⵚⴻ;
      var ⴲⴻⵞⴻ;
      var ⵒⵅⵜⴼ;
      return ⵂⴰⵀⵖ.asyncExecutePromiseGeneratorProgram(function (ⵂⴰⴰⴽ) {
        switch (ⵂⴰⴰⴽ.nextAddress) {
          case 1:
            ⴲⵋⵃⵀ = ⵒⵅⵌⵁ;
            ⴲⵛⴸⵀ = ⴲⵋⵃⵀ.author;
            ⵒⵅⴼⵀ = ⵒⵅⵜⴶⴳ.eventCommands.entries();
            ⵒⵕⴱⵀ = ⵂⴰⵀⵖ.makeIterator(ⵒⵅⴼⵀ);
            ⵂⵀⴵⵀ = ⵒⵕⴱⵀ.next();
          case 2:
            var ⴲⵛⵘⴼ = 23;
            while (ⴲⵛⵘⴼ < 38) {
              switch (ⴲⵛⵘⴼ) {
                case 23:
                  ⴲⵛⵘⴼ = ⵂⵀⴵⵀ.done ? 21 : 38;
                  break;
                case 21:
                  ⴲⵛⵘⴼ = 38;
                  {
                    ⵂⴰⴰⴽ.jumpTo(0);
                    ⴲⵛⵘⴼ = 39;
                  }
                  break;
              }
            }
            if (ⴲⵛⵘⴼ === 39) {
              break;
            }
            ⵂⴰⵀⴼ = ⵂⵀⴵⵀ.value;
            ⴲⵋⵃⴼ = ⵂⴰⵀⵖ.makeIterator(ⵂⴰⵀⴼ);
            ⴲⵛⴸⴼ = ⴲⵋⵃⴼ.next().value;
            ⵒⵅⴼⴼ = ⵒⵅⵜⴶⴳ.eventCommands.get(ⴲⵛⴸⴼ);
            var ⴲⴻⵎⴼ = 27;
            while (ⴲⴻⵎⴼ < 37) {
              switch (ⴲⴻⵎⴼ) {
                case 19:
                  ⴲⴻⵎⴼ = 37;
                  {
                    ⵂⴰⴰⴽ.jumpTo(3);
                    ⴲⴻⵎⴼ = 38;
                  }
                  break;
                case 27:
                  ⴲⴻⵎⴼ = !ⵒⵅⴼⴼ ? 19 : 37;
                  break;
              }
            }
            if (ⴲⴻⵎⴼ === 38) {
              break;
            }
            ⵒⵕⴱⴼ = ⵒⵅⴼⴼ.config.name;
            ⵂⵀⴵⴼ = ⵂⴰⵐⵃ(ⵒⵅⵌⴳⴳ, process.cwd() + "/languages/events/" + ⵒⵅⵌⴳⴳ + ".js", ⴲⴻⵞⴳⴳ, ⵒⵅⴼⴼ);
            ⵂⵐⵚⴻ = ⵒⵅⵌⴷⴳ("DD/MM/YYYY HH:mm:ss");
            ⵂⴰⴰⴽ.setCatchFinallyBlocks(5);
            return ⵂⴰⴰⴽ.yield(ⵒⵅⴼⴼ.onStart(Object.assign({}, ⵒⴵⵗⴳⴳ, {
              commandName: ⵒⵕⴱⴼ,
              getLang: ⵂⵀⴵⴼ
            })), 7);
          case 7:
            ⴲⴻⵞⴻ = ⵂⴰⴰⴽ.yieldResult;
            var ⵒⵕⵑⴼ = 16;
            while (ⵒⵕⵑⴼ < 24) {
              switch (ⵒⵕⵑⴼ) {
                case 9:
                  ⵒⵕⵑⴼ = 24;
                  {
                    ⵂⴰⴰⴽ.jumpTo(8);
                    ⵒⵕⵑⴼ = 25;
                  }
                  break;
                case 16:
                  ⵒⵕⵑⴼ = typeof ⴲⴻⵞⴻ != "function" ? 9 : 24;
                  break;
              }
            }
            if (ⵒⵕⵑⴼ === 25) {
              break;
            }
            return ⵂⴰⴰⴽ.yield(ⴲⴻⵞⴻ(), 9);
          case 9:
            ⴲⴻⵎⴶⴳ.info("EVENT COMMAND", "Event: " + ⵒⵕⴱⴼ + " | " + ⴲⵛⴸⵀ + " | " + ⵂⵐⵚⴳⴳ.name + " | " + ⵂⴰⴰⴳⴳ);
          case 8:
            ⵂⴰⴰⴽ.leaveTryBlock(3);
            break;
          case 5:
            ⵒⵅⵜⴼ = ⵂⴰⴰⴽ.enterCatchBlock();
            ⴲⴻⵎⴶⴳ.err("EVENT COMMAND", "An error occurred when calling the command event " + ⵒⵕⴱⴼ, ⵒⵅⵜⴼ);
            return ⵂⴰⴰⴽ.yield(ⵒⵕⵁⵁ.reply(ⴲⵋⴳⴷⴳ.getText({
              lang: ⵒⵅⵌⴳⴳ,
              head: "handlerEvents"
            }, "errorOccurred5", ⵂⵐⵚⴻ, ⵒⵕⴱⴼ, ⵂⵐⵊⴶⴳ(ⵒⵅⵜⴼ.stack ? ⵒⵅⵜⴼ.stack.split("\n").slice(0, 5).join("\n") : JSON.stringify(ⵒⵅⵜⴼ, null, 2)))), 3);
          case 3:
            ⵂⵀⴵⵀ = ⵒⵕⴱⵀ.next();
            ⵂⴰⴰⴽ.jumpTo(2);
        }
      });
    }
    function ⵒⴵⵇⴼ() {
      var ⴲⵛⵈⴽ;
      var ⵒⵅⵌⴽ;
      var ⵒⵕⵁⴽ;
      var ⵂⵀⵅⴽ;
      var ⵂⵐⴺⴽ;
      var ⴲⴻⴾⴽ;
      var ⴲⵋⴳⴽ;
      var ⵒⴵⴷⴽ;
      var ⵂⵀⴵⴾ;
      var ⴲⵛⴸⴾ;
      var ⴲⴻⵞⴽ;
      return ⵂⴰⵀⵖ.asyncExecutePromiseGeneratorProgram(function (ⵒⵕⴱⴾ) {
        switch (ⵒⵕⴱⴾ.nextAddress) {
          case 1:
            ⴲⵛⵈⴽ = ⵒⵅⵜⴶⴳ;
            ⵒⵅⵌⴽ = ⴲⵛⵈⴽ.onReaction;
            ⵒⵕⵁⴽ = ⵒⵅⵌⴽ.get(ⵂⵐⴺⴳⴳ);
            var ⵂⵐⵚⴽ = 23;
            while (ⵂⵐⵚⴽ < 38) {
              switch (ⵂⵐⵚⴽ) {
                case 23:
                  ⵂⵐⵚⴽ = !ⵒⵕⵁⴽ ? 21 : 38;
                  break;
                case 21:
                  ⵂⵐⵚⴽ = 38;
                  return ⵒⵕⴱⴾ.return();
              }
            }
            ⵒⵕⵁⴽ.delete = function () {
              return ⵒⵅⵌⴽ.delete(ⵂⵐⴺⴳⴳ);
            };
            ⵂⵀⵅⴽ = ⵒⵕⵁⴽ.commandName;
            var ⴲⵋⵓⴽ = 9;
            while (ⴲⵋⵓⴽ < 38) {
              switch (ⴲⵋⵓⴽ) {
                case 9:
                  ⴲⵋⵓⴽ = !ⵂⵀⵅⴽ ? 23 : 38;
                  break;
                case 23:
                  ⴲⵋⵓⴽ = 38;
                  ⵒⵕⵁⵁ.reply(ⴲⵋⴳⴷⴳ.getText({
                    lang: ⵒⵅⵌⴳⴳ,
                    head: "handlerEvents"
                  }, "cannotFindCommandName"));
                  return ⵒⵕⴱⴾ.return(ⴲⴻⵎⴶⴳ.err("onReaction", "Can't find command name to execute this reaction!", ⵒⵕⵁⴽ));
              }
            }
            ⵂⵐⴺⴽ = ⵒⵅⵜⴶⴳ.commands.get(ⵂⵀⵅⴽ);
            var ⴲⴻⵞⴹ = 9;
            while (ⴲⴻⵞⴹ < 38) {
              switch (ⴲⴻⵞⴹ) {
                case 23:
                  ⴲⴻⵞⴹ = 38;
                  ⵒⵕⵁⵁ.reply(ⴲⵋⴳⴷⴳ.getText({
                    lang: ⵒⵅⵌⴳⴳ,
                    head: "handlerEvents"
                  }, "cannotFindCommand", ⵂⵀⵅⴽ));
                  return ⵒⵕⴱⴾ.return(ⴲⴻⵎⴶⴳ.err("onReaction", "Command \"" + ⵂⵀⵅⴽ + "\" not found", ⵒⵕⵁⴽ));
                case 9:
                  ⴲⴻⵞⴹ = !ⵂⵐⴺⴽ ? 23 : 38;
                  break;
              }
            }
            ⴲⴻⴾⴽ = ⵒⴵⵇⵆ(ⴲⵋⴳⴷⴳ, ⵂⵐⴺⴽ, ⴲⵋⴳⴳⴳ, ⵂⵀⴵⴴⴳ, ⵂⵀⵅⴽ);
            ⴲⵋⴳⴽ = ⴲⴻⴾⴽ.onReaction;
            var ⵒⵕⴱⴺ = 37;
            while (ⵒⵕⴱⴺ < 39) {
              switch (ⵒⵕⴱⴺ) {
                case 37:
                  ⵒⵕⴱⴺ = !(ⴲⵋⴳⴽ > ⴲⵋⵓⴳⴳ) ? 8 : 39;
                  break;
                case 8:
                  ⵒⵕⴱⴺ = 39;
                  {
                    ⵒⵕⴱⴾ.jumpTo(2);
                    ⵒⵕⴱⴺ = 40;
                  }
                  break;
              }
            }
            if (ⵒⵕⴱⴺ === 40) {
              break;
            }
            var ⵒⴵⵗⴹ = 9;
            while (ⵒⴵⵗⴹ < 38) {
              switch (ⵒⴵⵗⴹ) {
                case 23:
                  ⵒⴵⵗⴹ = 38;
                  return ⵒⵕⴱⴾ.return(true);
                case 9:
                  ⵒⴵⵗⴹ = ⴲⴻⴾⴳⴳ.needRoleToUseCmdOnReaction ? 23 : 38;
                  break;
              }
            }
            var ⵂⵐⵚⴹ = 19;
            while (ⵂⵐⵚⴹ < 37) {
              switch (ⵂⵐⵚⴹ) {
                case 36:
                  ⵂⵐⵚⴹ = 37;
                  return ⵒⵕⴱⴾ.yield(ⵒⵕⵁⵁ.reply(ⴲⵋⴳⴷⴳ.getText({
                    lang: ⵒⵅⵌⴳⴳ,
                    head: "handlerEvents"
                  }, "onlyAdminToUseOnReaction", ⵂⵀⵅⴽ)), 8);
                case 19:
                  ⵂⵐⵚⴹ = ⴲⵋⴳⴽ == 1 ? 36 : 37;
                  break;
              }
            }
            var ⵂⴰⵐⴹ = 20;
            while (ⵂⴰⵐⴹ < 34) {
              switch (ⵂⴰⵐⴹ) {
                case 25:
                  ⵂⴰⵐⴹ = 34;
                  {
                    ⵒⵕⴱⴾ.jumpTo(2);
                    ⵂⴰⵐⴹ = 35;
                  }
                  break;
                case 20:
                  ⵂⴰⵐⴹ = ⴲⵋⴳⴽ != 2 ? 25 : 34;
                  break;
              }
            }
            if (ⵂⴰⵐⴹ === 35) {
              break;
            }
            return ⵒⵕⴱⴾ.yield(ⵒⵕⵁⵁ.reply(ⴲⵋⴳⴷⴳ.getText({
              lang: ⵒⵅⵌⴳⴳ,
              head: "handlerEvents"
            }, "onlyAdminBot2ToUseOnReaction", ⵂⵀⵅⴽ)), 7);
          case 7:
            return ⵒⵕⴱⴾ.return(ⵒⵕⴱⴾ.yieldResult);
          case 8:
            return ⵒⵕⴱⴾ.return(ⵒⵕⴱⴾ.yieldResult);
          case 2:
            ⵒⴵⴷⴽ = ⵒⵅⵌⴷⴳ("DD/MM/YYYY HH:mm:ss");
            ⵒⵕⴱⴾ.setCatchFinallyBlocks(9);
            var ⴲⵋⵓⴹ = 7;
            while (ⴲⵋⵓⴹ < 36) {
              switch (ⴲⵋⵓⴹ) {
                case 7:
                  ⴲⵋⵓⴹ = !ⵂⵐⴺⴽ ? 35 : 36;
                  break;
                case 35:
                  ⴲⵋⵓⴹ = 36;
                  throw Error("Cannot find command with commandName: " + ⵂⵀⵅⴽ);
              }
            }
            ⵂⵀⴵⴾ = ⵂⴰⵐⵃ(ⵒⵅⵌⴳⴳ, process.cwd() + "/languages/cmds/" + ⵒⵅⵌⴳⴳ + ".js", ⴲⴻⵞⴳⴳ, ⵂⵐⴺⴽ);
            ⴲⵛⴸⴾ = [];
            ⵒⵅⴼⴶⴳ(ⵂⵀⵅⴽ);
            if (ⵒⵕⵑⵆ(ⵂⵐⵚⴳⴳ, ⵂⵀⴵⴴⴳ, ⵒⵕⴱⴴⴳ, ⵂⴰⴰⴳⴳ, ⴲⵋⴳⴳⴳ, ⵂⵀⵅⴽ, ⵒⵕⵁⵁ, ⵒⵅⵌⴳⴳ)) {
              return ⵒⵕⴱⴾ.return();
            } else {
              return ⵒⵕⴱⴾ.yield(ⵂⵐⴺⴽ.onReaction(Object.assign({}, ⵒⴵⵗⴳⴳ, {
                Reaction: ⵒⵕⵁⴽ,
                args: ⴲⵛⴸⴾ,
                commandName: ⵂⵀⵅⴽ,
                getLang: ⵂⵀⴵⴾ
              })), 11);
            }
          case 11:
            ⴲⴻⵎⴶⴳ.info("onReaction", ⵂⵀⵅⴽ + " | " + ⵂⵐⵚⴳⴳ.name + " | " + ⵒⵕⴱⴴⴳ + " | " + ⵂⴰⴰⴳⴳ + " | " + ⵒⵅⵌⵁ.reaction);
            ⵒⵕⴱⴾ.leaveTryBlock(0);
            break;
          case 9:
            ⴲⴻⵞⴽ = ⵒⵕⴱⴾ.enterCatchBlock();
            ⴲⴻⵎⴶⴳ.err("onReaction", "An error occurred when calling the command onReaction " + ⵂⵀⵅⴽ, ⴲⴻⵞⴽ);
            return ⵒⵕⴱⴾ.yield(ⵒⵕⵁⵁ.reply(ⴲⵋⴳⴷⴳ.getText({
              lang: ⵒⵅⵌⴳⴳ,
              head: "handlerEvents"
            }, "errorOccurred4", ⵒⴵⴷⴽ, ⵂⵀⵅⴽ, ⵂⵐⵊⴶⴳ(ⴲⴻⵞⴽ.stack ? ⴲⴻⵞⴽ.stack.split("\n").slice(0, 5).join("\n") : JSON.stringify(ⴲⴻⵞⴽ, null, 2)))), 0);
        }
      });
    }
    function ⴲⵛⵈⴹ() {
      var ⵂⵐⵊⴺ;
      var ⴲⴻⵎⴺ;
      var ⴲⵋⵃⴺ;
      var ⵒⴵⵇⴺ;
      var ⵒⵅⴼⴺ;
      var ⵂⴰⵀⴺ;
      var ⵂⵀⴵⴺ;
      var ⴲⵛⴸⴺ;
      var ⵒⴵⴷⴻ;
      var ⵂⵐⴺⴻ;
      var ⵂⴰⴰⴻ;
      return ⵂⴰⵀⵖ.asyncExecutePromiseGeneratorProgram(function (ⴲⵋⴳⴻ) {
        switch (ⴲⵋⴳⴻ.nextAddress) {
          case 1:
            var ⵒⵅⵜⴺ = 22;
            while (ⵒⵅⵜⴺ < 26) {
              switch (ⵒⵅⵜⴺ) {
                case 22:
                  ⵒⵅⵜⴺ = !ⵒⵅⵌⵁ.messageReply ? 20 : 26;
                  break;
                case 20:
                  ⵒⵅⵜⴺ = 26;
                  return ⴲⵋⴳⴻ.return();
              }
            }
            ⵂⵐⵊⴺ = ⵒⵅⵜⴶⴳ;
            ⴲⴻⵎⴺ = ⵂⵐⵊⴺ.onReply;
            ⴲⵋⵃⴺ = ⴲⴻⵎⴺ.get(ⵒⵅⵌⵁ.messageReply.messageID);
            var ⵒⵕⵑⴺ = 7;
            while (ⵒⵕⵑⴺ < 36) {
              switch (ⵒⵕⵑⴺ) {
                case 35:
                  ⵒⵕⵑⴺ = 36;
                  return ⴲⵋⴳⴻ.return();
                case 7:
                  ⵒⵕⵑⴺ = !ⴲⵋⵃⴺ ? 35 : 36;
                  break;
              }
            }
            ⴲⵋⵃⴺ.delete = function () {
              return ⴲⴻⵎⴺ.delete(ⵂⵐⴺⴳⴳ);
            };
            ⵒⴵⵇⴺ = ⴲⵋⵃⴺ.commandName;
            var ⵂⵀⵕⴺ = 8;
            while (ⵂⵀⵕⴺ < 39) {
              switch (ⵂⵀⵕⴺ) {
                case 8:
                  ⵂⵀⵕⴺ = !ⵒⴵⵇⴺ ? 11 : 39;
                  break;
                case 11:
                  ⵂⵀⵕⴺ = 39;
                  ⵒⵕⵁⵁ.reply(ⴲⵋⴳⴷⴳ.getText({
                    lang: ⵒⵅⵌⴳⴳ,
                    head: "handlerEvents"
                  }, "cannotFindCommandName"));
                  return ⴲⵋⴳⴻ.return(ⴲⴻⵎⴶⴳ.err("onReply", "Can't find command name to execute this reply!", ⴲⵋⵃⴺ));
              }
            }
            ⵒⵅⴼⴺ = ⵒⵅⵜⴶⴳ.commands.get(ⵒⴵⵇⴺ);
            var ⴲⵋⵓⴻ = 23;
            while (ⴲⵋⵓⴻ < 38) {
              switch (ⴲⵋⵓⴻ) {
                case 23:
                  ⴲⵋⵓⴻ = !ⵒⵅⴼⴺ ? 21 : 38;
                  break;
                case 21:
                  ⴲⵋⵓⴻ = 38;
                  ⵒⵕⵁⵁ.reply(ⴲⵋⴳⴷⴳ.getText({
                    lang: ⵒⵅⵌⴳⴳ,
                    head: "handlerEvents"
                  }, "cannotFindCommand", ⵒⴵⵇⴺ));
                  return ⴲⵋⴳⴻ.return(ⴲⴻⵎⴶⴳ.err("onReply", "Command \"" + ⵒⴵⵇⴺ + "\" not found", ⴲⵋⵃⴺ));
              }
            }
            ⵂⴰⵀⴺ = ⵒⴵⵇⵆ(ⴲⵋⴳⴷⴳ, ⵒⵅⴼⴺ, ⴲⵋⴳⴳⴳ, ⵂⵀⴵⴴⴳ, ⵒⴵⵇⴺ);
            ⵂⵀⴵⴺ = ⵂⴰⵀⴺ.onReply;
            var ⵒⴵⵗⴻ = 37;
            while (ⵒⴵⵗⴻ < 39) {
              switch (ⵒⴵⵗⴻ) {
                case 8:
                  ⵒⴵⵗⴻ = 39;
                  {
                    ⴲⵋⴳⴻ.jumpTo(2);
                    ⵒⴵⵗⴻ = 40;
                  }
                  break;
                case 37:
                  ⵒⴵⵗⴻ = !(ⵂⵀⴵⴺ > ⴲⵋⵓⴳⴳ) ? 8 : 39;
                  break;
              }
            }
            if (ⵒⴵⵗⴻ === 40) {
              break;
            }
            var ⵒⵅⵌⴻ = 20;
            while (ⵒⵅⵌⴻ < 34) {
              switch (ⵒⵅⵌⴻ) {
                case 20:
                  ⵒⵅⵌⴻ = ⴲⴻⴾⴳⴳ.needRoleToUseCmdOnReply ? 25 : 34;
                  break;
                case 25:
                  ⵒⵅⵌⴻ = 34;
                  return ⴲⵋⴳⴻ.return(true);
              }
            }
            var ⵂⴰⵐⴻ = 22;
            while (ⵂⴰⵐⴻ < 26) {
              switch (ⵂⴰⵐⴻ) {
                case 20:
                  ⵂⴰⵐⴻ = 26;
                  return ⴲⵋⴳⴻ.yield(ⵒⵕⵁⵁ.reply(ⴲⵋⴳⴷⴳ.getText({
                    lang: ⵒⵅⵌⴳⴳ,
                    head: "handlerEvents"
                  }, "onlyAdminToUseOnReply", ⵒⴵⵇⴺ)), 8);
                case 22:
                  ⵂⴰⵐⴻ = ⵂⵀⴵⴺ == 1 ? 20 : 26;
                  break;
              }
            }
            var ⵂⵀⵅⴻ = 24;
            while (ⵂⵀⵅⴻ < 36) {
              switch (ⵂⵀⵅⴻ) {
                case 7:
                  ⵂⵀⵅⴻ = 36;
                  {
                    ⴲⵋⴳⴻ.jumpTo(2);
                    ⵂⵀⵅⴻ = 37;
                  }
                  break;
                case 24:
                  ⵂⵀⵅⴻ = ⵂⵀⴵⴺ != 2 ? 7 : 36;
                  break;
              }
            }
            if (ⵂⵀⵅⴻ === 37) {
              break;
            }
            return ⴲⵋⴳⴻ.yield(ⵒⵕⵁⵁ.reply(ⴲⵋⴳⴷⴳ.getText({
              lang: ⵒⵅⵌⴳⴳ,
              head: "handlerEvents"
            }, "onlyAdminBot2ToUseOnReply", ⵒⴵⵇⴺ)), 7);
          case 7:
            return ⴲⵋⴳⴻ.return(ⴲⵋⴳⴻ.yieldResult);
          case 8:
            return ⴲⵋⴳⴻ.return(ⴲⵋⴳⴻ.yieldResult);
          case 2:
            ⴲⵛⴸⴺ = ⵂⴰⵐⵃ(ⵒⵅⵌⴳⴳ, process.cwd() + "/languages/cmds/" + ⵒⵅⵌⴳⴳ + ".js", ⴲⴻⵞⴳⴳ, ⵒⵅⴼⴺ);
            ⵒⴵⴷⴻ = ⵒⵅⵌⴷⴳ("DD/MM/YYYY HH:mm:ss");
            ⴲⵋⴳⴻ.setCatchFinallyBlocks(9);
            var ⴲⵛⵈⴻ = 8;
            while (ⴲⵛⵈⴻ < 39) {
              switch (ⴲⵛⵈⴻ) {
                case 8:
                  ⴲⵛⵈⴻ = !ⵒⵅⴼⴺ ? 11 : 39;
                  break;
                case 11:
                  ⴲⵛⵈⴻ = 39;
                  throw Error("Cannot find command with commandName: " + ⵒⴵⵇⴺ);
              }
            }
            ⵂⵐⴺⴻ = ⵒⴵⴷⴳⴳ ? ⵒⴵⴷⴳⴳ.split(/ +/) : [];
            ⵒⵅⴼⴶⴳ(ⵒⴵⵇⴺ);
            if (ⵒⵕⵑⵆ(ⵂⵐⵚⴳⴳ, ⵂⵀⴵⴴⴳ, ⵒⵕⴱⴴⴳ, ⵂⴰⴰⴳⴳ, ⴲⵋⴳⴳⴳ, ⵒⴵⵇⴺ, ⵒⵕⵁⵁ, ⵒⵅⵌⴳⴳ)) {
              return ⴲⵋⴳⴻ.return();
            } else {
              return ⴲⵋⴳⴻ.yield(ⵒⵅⴼⴺ.onReply(Object.assign({}, ⵒⴵⵗⴳⴳ, {
                Reply: ⴲⵋⵃⴺ,
                args: ⵂⵐⴺⴻ,
                commandName: ⵒⴵⵇⴺ,
                getLang: ⴲⵛⴸⴺ
              })), 11);
            }
          case 11:
            ⴲⴻⵎⴶⴳ.info("onReply", ⵒⴵⵇⴺ + " | " + ⵂⵐⵚⴳⴳ.name + " | " + ⵒⵕⴱⴴⴳ + " | " + ⵂⴰⴰⴳⴳ + " | " + ⵂⵐⴺⴻ.join(" "));
            ⴲⵋⴳⴻ.leaveTryBlock(0);
            break;
          case 9:
            ⵂⴰⴰⴻ = ⴲⵋⴳⴻ.enterCatchBlock();
            ⴲⴻⵎⴶⴳ.err("onReply", "An error occurred when calling the command onReply " + ⵒⴵⵇⴺ, ⵂⴰⴰⴻ);
            return ⴲⵋⴳⴻ.yield(ⵒⵕⵁⵁ.reply(ⴲⵋⴳⴷⴳ.getText({
              lang: ⵒⵅⵌⴳⴳ,
              head: "handlerEvents"
            }, "errorOccurred3", ⵒⴵⴷⴻ, ⵒⴵⵇⴺ, ⵂⵐⵊⴶⴳ(ⵂⴰⴰⴻ.stack ? ⵂⴰⴰⴻ.stack.split("\n").slice(0, 5).join("\n") : JSON.stringify(ⵂⴰⴰⴻ, null, 2)))), 0);
        }
      });
    }
    function ⴲⴻⴾⴻ() {
      var ⵒⵅⵌⴷ;
      var ⵂⴰⵐⴷ;
      var ⵂⵀⵅⴷ;
      var ⴲⵛⵈⴷ;
      var ⴲⴻⴾⴷ;
      var ⵒⵕⵁⴷ;
      var ⵒⴵⴷⴷ;
      var ⵂⵐⴺⴷ;
      var ⴲⵛⴸⴸ;
      var ⵒⵅⴼⴸ;
      return ⵂⴰⵀⵖ.asyncExecutePromiseGeneratorProgram(function (ⵒⵕⴱⴸ) {
        ⵒⵅⵌⴷ = ⵒⵅⵜⴶⴳ.onFirstChat || [];
        ⵂⴰⵐⴷ = ⵒⴵⴷⴳⴳ ? ⵒⴵⴷⴳⴳ.split(/ +/) : [];
        ⵂⵀⵅⴷ = ⵂⴰⵀⵖ.makeIterator(ⵒⵅⵌⴷ);
        ⴲⵛⵈⴷ = ⵂⵀⵅⴷ.next();
        var ⵂⵐⵚⴷ = 15;
        while (ⵂⵐⵚⴷ < 26) {
          switch (ⵂⵐⵚⴷ) {
            case 15:
              ⵂⵐⵚⴷ = 12;
              ⴲⴻⴾⴷ = {};
              break;
            case 12:
              ⵂⵐⵚⴷ = !ⴲⵛⵈⴷ.done ? 22 : 26;
              break;
            case 22:
              ⵂⵐⵚⴷ = 20;
              var ⴲⴻⵞⴷ = 22;
              while (ⴲⴻⵞⴷ < 26) {
                switch (ⴲⴻⵞⴷ) {
                  case 22:
                    ⴲⴻⵞⴷ = (ⵒⴵⴷⴷ = ⵒⵕⵁⴷ = ⴲⵛⵈⴷ.value, ⴲⴻⴾⴷ.commandName$jscomp$8 = ⵒⴵⴷⴷ.commandName, ⵂⵐⴺⴷ = ⵒⴵⴷⴷ.threadIDsChattedFirstTime, !ⵂⵐⴺⴷ.includes(ⵂⴰⴰⴳⴳ) && (ⴲⵛⴸⴸ = ⵒⵅⵜⴶⴳ.commands.get(ⴲⴻⴾⴷ.commandName$jscomp$8))) ? 20 : 26;
                    break;
                  case 20:
                    ⴲⴻⵞⴷ = 26;
                    ⵒⵕⵁⴷ.threadIDsChattedFirstTime.push(ⵂⴰⴰⴳⴳ);
                    ⵒⵅⴼⴸ = ⵂⴰⵐⵃ(ⵒⵅⵌⴳⴳ, process.cwd() + "/languages/cmds/" + ⵒⵅⵌⴳⴳ + ".js", ⴲⴻⵞⴳⴳ, ⴲⵛⴸⴸ);
                    ⴲⴻⴾⴷ.time$jscomp$4 = ⵒⵅⵌⴷⴳ("DD/MM/YYYY HH:mm:ss");
                    ⵒⵅⴼⴶⴳ(ⴲⴻⴾⴷ.commandName$jscomp$8);
                    if (ⴲⵋⵃⵈ(ⴲⵛⴸⴸ.onFirstChat) == "Function") {
                      ⴲⴻⴾⴷ.defaultOnFirstChat = ⴲⵛⴸⴸ.onFirstChat;
                      ⴲⵛⴸⴸ.onFirstChat = function (ⴲⵋⵓⴷ) {
                        return function () {
                          var ⵒⴵⵗⴷ = arguments;
                          return ⵂⴰⵀⵖ.asyncExecutePromiseGeneratorProgram(function (ⵂⵀⵕⴸ) {
                            return ⵂⵀⵕⴸ.return(ⴲⵋⵓⴷ.defaultOnFirstChat.apply(null, ⵂⴰⵀⵖ.arrayFromIterable(ⵒⴵⵗⴷ)));
                          });
                        };
                      }(ⴲⴻⴾⴷ);
                    }
                    ⴲⵛⴸⴸ.onFirstChat(Object.assign({}, ⵒⴵⵗⴳⴳ, {
                      isUserCallCommand: ⵂⴰⵐⴳⴳ,
                      args: ⵂⴰⵐⴷ,
                      commandName: ⴲⴻⴾⴷ.commandName$jscomp$8,
                      getLang: ⵒⵅⴼⴸ
                    })).then(function (ⴲⴻⵎⴸ) {
                      return function (ⵒⵕⵑⴸ) {
                        var ⵂⵐⵊⴸ;
                        return ⵂⴰⵀⵖ.asyncExecutePromiseGeneratorProgram(function (ⵂⴰⵀⴸ) {
                          var ⵒⵕⵁⴹ = 7;
                          while (ⵒⵕⵁⴹ < 36) {
                            switch (ⵒⵕⵁⴹ) {
                              case 7:
                                ⵒⵕⵁⴹ = ⵂⴰⵀⴸ.nextAddress == 1 ? 35 : 36;
                                break;
                              case 35:
                                ⵒⵕⵁⴹ = 36;
                                {
                                  var ⵂⵀⵅⴹ = 28;
                                  while (ⵂⵀⵅⴹ < 29) {
                                    switch (ⵂⵀⵅⴹ) {
                                      case 28:
                                        ⵂⵀⵅⴹ = typeof ⵒⵕⵑⴸ != "function" ? 16 : 29;
                                        break;
                                      case 16:
                                        ⵂⵀⵅⴹ = 29;
                                        return ⵂⴰⵀⴸ.jumpTo(0);
                                    }
                                  }
                                  var ⵂⵐⴺⴹ = 8;
                                  while (ⵂⵐⴺⴹ < 39) {
                                    switch (ⵂⵐⴺⴹ) {
                                      case 11:
                                        ⵂⵐⴺⴹ = 39;
                                        return ⵂⴰⵀⴸ.return();
                                      case 8:
                                        ⵂⵐⴺⴹ = ⵒⵕⵑⵆ(ⵂⵐⵚⴳⴳ, ⵂⵀⴵⴴⴳ, ⵒⵕⴱⴴⴳ, ⵂⴰⴰⴳⴳ, ⴲⵋⴳⴳⴳ, ⴲⴻⵎⴸ.commandName$jscomp$8, ⵒⵕⵁⵁ, ⵒⵅⵌⴳⴳ) ? 11 : 39;
                                        break;
                                    }
                                  }
                                  ⵂⴰⵀⴸ.setCatchFinallyBlocks(3);
                                  return ⵂⴰⵀⴸ.yield(ⵒⵕⵑⴸ(), 5);
                                }
                                break;
                            }
                          }
                          var ⴲⴻⴾⴹ = 25;
                          while (ⴲⴻⴾⴹ < 34) {
                            switch (ⴲⴻⴾⴹ) {
                              case 25:
                                ⴲⴻⴾⴹ = ⵂⴰⵀⴸ.nextAddress != 3 ? 17 : 34;
                                break;
                              case 17:
                                ⴲⴻⴾⴹ = 34;
                                ⴲⴻⵎⴶⴳ.info("onFirstChat", ⴲⴻⵎⴸ.commandName$jscomp$8 + " | " + ⵂⵐⵚⴳⴳ.name + " | " + ⵒⵕⴱⴴⴳ + " | " + ⵂⴰⴰⴳⴳ + " | " + ⵂⴰⵐⴷ.join(" "));
                                return ⵂⴰⵀⴸ.leaveTryBlock(0);
                            }
                          }
                          ⵂⵐⵊⴸ = ⵂⴰⵀⴸ.enterCatchBlock();
                          return ⵂⴰⵀⴸ.yield(ⵒⵕⵁⵁ.reply(ⴲⵋⴳⴷⴳ.getText({
                            lang: ⵒⵅⵌⴳⴳ,
                            head: "handlerEvents"
                          }, "errorOccurred2", ⴲⴻⵎⴸ.time$jscomp$4, ⴲⴻⵎⴸ.commandName$jscomp$8, ⵂⵐⵊⴶⴳ(ⵂⵐⵊⴸ.stack ? ⵂⵐⵊⴸ.stack.split("\n").slice(0, 5).join("\n") : JSON.stringify(ⵂⵐⵊⴸ, null, 2)))), 0);
                        });
                      };
                    }(ⴲⴻⴾⴷ)).catch(function (ⴲⵋⴳⴹ) {
                      return function (ⵒⴵⴷⴹ) {
                        ⴲⴻⵎⴶⴳ.err("onFirstChat", "An error occurred when calling the command onFirstChat " + ⴲⵋⴳⴹ.commandName$jscomp$8, ⵒⴵⴷⴹ);
                      };
                    }(ⴲⴻⴾⴷ));
                    break;
                }
              }
              break;
            case 20:
              ⵂⵐⵚⴷ = 12;
              ⴲⴻⴾⴷ = {
                defaultOnFirstChat: ⴲⴻⴾⴷ.defaultOnFirstChat,
                commandName$jscomp$8: ⴲⴻⴾⴷ.commandName$jscomp$8,
                time$jscomp$4: ⴲⴻⴾⴷ.time$jscomp$4
              };
              ⴲⵛⵈⴷ = ⵂⵀⵅⴷ.next();
              break;
          }
        }
        ⵒⵕⴱⴸ.jumpToEnd();
      });
    }
    function ⵂⴰⴰⴹ() {
      var ⴲⴻⴾⴵ;
      var ⴲⵋⴳⴵ;
      var ⵒⴵⴷⴵ;
      var ⵒⵅⵜⴴ;
      var ⵂⴰⴰⴵ;
      var ⵂⵀⵕⴴ;
      var ⴲⵛⵘⴴ;
      var ⵒⴵⵗⴵ;
      return ⵂⴰⵀⵖ.asyncExecutePromiseGeneratorProgram(function (ⵂⵐⵚⴵ) {
        ⴲⴻⴾⴵ = ⵒⵅⵜⴶⴳ.onAnyEvent || [];
        ⴲⵋⴳⴵ = [];
        if (typeof ⵒⵅⵌⵁ.body == "string" && ⵒⵅⵌⵁ.body.startsWith(ⴲⴻⵞⴳⴳ)) {
          ⴲⵋⴳⴵ = ⵒⵅⵌⵁ.body.split(/ +/);
        }
        ⵒⴵⴷⴵ = ⵂⴰⵀⵖ.makeIterator(ⴲⴻⴾⴵ);
        ⵒⵅⵜⴴ = ⵒⴵⴷⴵ.next();
        var ⴲⵋⵓⴵ = 35;
        while (ⴲⵋⵓⴵ < 36) {
          switch (ⴲⵋⵓⴵ) {
            case 35:
              ⴲⵋⵓⴵ = 28;
              ⵂⴰⴰⴵ = {};
              break;
            case 16:
              ⴲⵋⵓⴵ = 9;
              var ⴲⵛⵈⴵ = 16;
              while (ⴲⵛⵈⴵ < 24) {
                switch (ⴲⵛⵈⴵ) {
                  case 9:
                    ⴲⵛⵈⴵ = 24;
                    ⵂⴰⴰⴵ.commandName$jscomp$7 = ⴲⵛⵘⴴ.config.name;
                    ⵂⴰⴰⴵ.time$jscomp$3 = ⵒⵅⵌⴷⴳ("DD/MM/YYYY HH:mm:ss");
                    ⵒⵅⴼⴶⴳ(ⵂⴰⴰⴵ.commandName$jscomp$7);
                    ⵒⴵⵗⴵ = ⵂⴰⵐⵃ(ⵒⵅⵌⴳⴳ, process.cwd() + "/languages/events/" + ⵒⵅⵌⴳⴳ + ".js", ⴲⴻⵞⴳⴳ, ⴲⵛⵘⴴ);
                    if (ⴲⵋⵃⵈ(ⴲⵛⵘⴴ.onAnyEvent) == "Function") {
                      ⵂⴰⴰⴵ.defaultOnAnyEvent = ⴲⵛⵘⴴ.onAnyEvent;
                      ⴲⵛⵘⴴ.onAnyEvent = function (ⵒⵅⵌⴵ) {
                        return function () {
                          var ⵂⵀⵅⴵ = arguments;
                          return ⵂⴰⵀⵖ.asyncExecutePromiseGeneratorProgram(function (ⴲⵋⵃⴶ) {
                            return ⴲⵋⵃⴶ.return(ⵒⵅⵌⴵ.defaultOnAnyEvent.apply(null, ⵂⴰⵀⵖ.arrayFromIterable(ⵂⵀⵅⴵ)));
                          });
                        };
                      }(ⵂⴰⴰⴵ);
                    }
                    ⴲⵛⵘⴴ.onAnyEvent(Object.assign({}, ⵒⴵⵗⴳⴳ, {
                      args: ⴲⵋⴳⴵ,
                      commandName: ⵂⴰⴰⴵ.commandName$jscomp$7,
                      getLang: ⵒⴵⵗⴵ
                    })).then(function (ⵒⵅⴼⴶ) {
                      return function (ⵂⴰⵀⴶ) {
                        var ⵂⵀⴵⴶ;
                        return ⵂⴰⵀⵖ.asyncExecutePromiseGeneratorProgram(function (ⴲⵛⴸⴶ) {
                          var ⵒⵕⴱⴶ = 21;
                          while (ⵒⵕⴱⴶ < 38) {
                            switch (ⵒⵕⴱⴶ) {
                              case 21:
                                ⵒⵕⴱⴶ = ⴲⵛⴸⴶ.nextAddress == 1 ? 37 : 38;
                                break;
                              case 37:
                                ⵒⵕⴱⴶ = 38;
                                {
                                  var ⵂⴰⴰⴷ = 37;
                                  while (ⵂⴰⴰⴷ < 39) {
                                    switch (ⵂⴰⴰⴷ) {
                                      case 37:
                                        ⵂⴰⴰⴷ = typeof ⵂⴰⵀⴶ != "function" ? 8 : 39;
                                        break;
                                      case 8:
                                        ⵂⴰⴰⴷ = 39;
                                        return ⴲⵛⴸⴶ.jumpTo(0);
                                    }
                                  }
                                  ⴲⵛⴸⴶ.setCatchFinallyBlocks(3);
                                  return ⴲⵛⴸⴶ.yield(ⵂⴰⵀⴶ(), 5);
                                }
                                break;
                            }
                          }
                          var ⴲⵋⴳⴷ = 23;
                          while (ⴲⵋⴳⴷ < 38) {
                            switch (ⴲⵋⴳⴷ) {
                              case 21:
                                ⴲⵋⴳⴷ = 38;
                                ⴲⴻⵎⴶⴳ.info("onAnyEvent", ⵒⵅⴼⴶ.commandName$jscomp$7 + " | " + ⵒⵕⴱⴴⴳ + " | " + ⵂⵐⵚⴳⴳ.name + " | " + ⵂⴰⴰⴳⴳ);
                                return ⴲⵛⴸⴶ.leaveTryBlock(0);
                              case 23:
                                ⴲⵋⴳⴷ = ⴲⵛⴸⴶ.nextAddress != 3 ? 21 : 38;
                                break;
                            }
                          }
                          ⵂⵀⴵⴶ = ⴲⵛⴸⴶ.enterCatchBlock();
                          ⵒⵕⵁⵁ.reply(ⴲⵋⴳⴷⴳ.getText({
                            lang: ⵒⵅⵌⴳⴳ,
                            head: "handlerEvents"
                          }, "errorOccurred7", ⵒⵅⴼⴶ.time$jscomp$3, ⵒⵅⴼⴶ.commandName$jscomp$7, ⵂⵐⵊⴶⴳ(ⵂⵀⴵⴶ.stack ? ⵂⵀⴵⴶ.stack.split("\n").slice(0, 5).join("\n") : JSON.stringify(ⵂⵀⴵⴶ, null, 2))));
                          ⴲⴻⵎⴶⴳ.err("onAnyEvent", "An error occurred when calling the command onAnyEvent " + ⵒⵅⴼⴶ.commandName$jscomp$7, ⵂⵀⴵⴶ);
                          ⴲⵛⴸⴶ.jumpToEnd();
                        });
                      };
                    }(ⵂⴰⴰⴵ)).catch(function (ⴲⵛⵘⴶ) {
                      return function (ⵒⵅⵜⴶ) {
                        ⴲⴻⵎⴶⴳ.err("onAnyEvent", "An error occurred when calling the command onAnyEvent " + ⴲⵛⵘⴶ.commandName$jscomp$7, ⵒⵅⵜⴶ);
                      };
                    }(ⵂⴰⴰⴵ));
                    break;
                  case 16:
                    ⴲⵛⵈⴵ = (ⵂⵀⵕⴴ = ⵒⵅⵜⴴ.value, typeof ⵂⵀⵕⴴ === "string" && (ⴲⵛⵘⴴ = ⵒⵅⵜⴶⴳ.commands.get(ⵂⵀⵕⴴ))) ? 9 : 24;
                    break;
                }
              }
              break;
            case 28:
              ⴲⵋⵓⴵ = !ⵒⵅⵜⴴ.done ? 16 : 36;
              break;
            case 9:
              ⴲⵋⵓⴵ = 28;
              ⵂⴰⴰⴵ = {
                defaultOnAnyEvent: ⵂⴰⴰⴵ.defaultOnAnyEvent,
                commandName$jscomp$7: ⵂⴰⴰⴵ.commandName$jscomp$7,
                time$jscomp$3: ⵂⴰⴰⴵ.time$jscomp$3
              };
              ⵒⵅⵜⴴ = ⵒⴵⴷⴵ.next();
              break;
          }
        }
        ⵂⵐⵚⴵ.jumpToEnd();
      });
    }
    function ⵂⵀⵕⴶ() {
      var ⵂⵐⵊⴶ;
      var ⴲⴻⵎⴶ;
      var ⴲⵛⵘⴲ;
      var ⵒⵅⵜⴲ;
      var ⵒⵕⵑⴲ;
      var ⵂⵀⵕⴲ;
      var ⵂⵐⵊⴲ;
      var ⴲⴻⵎⴲ;
      var ⴲⵋⵃⴲ;
      var ⵒⴵⵇⴲ;
      return ⵂⴰⵀⵖ.asyncExecutePromiseGeneratorProgram(function (ⵂⵀⵅⴳ) {
        ⵂⵐⵊⴶ = ⵒⵅⵜⴶⴳ.onChat || [];
        ⴲⴻⵎⴶ = ⵒⴵⴷⴳⴳ ? ⵒⴵⴷⴳⴳ.split(/ +/) : [];
        ⴲⵛⵘⴲ = ⵂⴰⵀⵖ.makeIterator(ⵂⵐⵊⴶ);
        ⵒⵅⵜⴲ = ⴲⵛⵘⴲ.next();
        var ⴲⴻⴾⴳ = 12;
        while (ⴲⴻⴾⴳ < 26) {
          switch (ⴲⴻⴾⴳ) {
            case 12:
              ⴲⴻⴾⴳ = 22;
              ⵒⵕⵑⴲ = {};
              break;
            case 25:
              ⴲⴻⴾⴳ = 22;
              ⵒⵕⵑⴲ = {
                defaultOnChat: ⵒⵕⵑⴲ.defaultOnChat,
                commandName$jscomp$6: ⵒⵕⵑⴲ.commandName$jscomp$6,
                time$jscomp$2: ⵒⵕⵑⴲ.time$jscomp$2
              };
              ⵒⵅⵜⴲ = ⴲⵛⵘⴲ.next();
              break;
            case 20:
              ⴲⴻⴾⴳ = 25;
              var ⵒⵕⵁⴳ = 22;
              while (ⵒⵕⵁⴳ < 26) {
                switch (ⵒⵕⵁⴳ) {
                  case 20:
                    ⵒⵕⵁⴳ = 26;
                    ⵒⵕⵑⴲ.commandName$jscomp$6 = ⵂⵐⵊⴲ.config.name;
                    ⴲⴻⵎⴲ = ⵒⴵⵇⵆ(ⴲⵋⴳⴷⴳ, ⵂⵐⵊⴲ, ⴲⵋⴳⴳⴳ, ⵂⵀⴵⴴⴳ, ⵒⵕⵑⴲ.commandName$jscomp$6);
                    ⴲⵋⵃⴲ = ⴲⴻⵎⴲ.onChat;
                    if (!(ⴲⵋⵃⴲ > ⴲⵋⵓⴳⴳ)) {
                      ⵒⴵⵇⴲ = ⵂⴰⵐⵃ(ⵒⵅⵌⴳⴳ, process.cwd() + "/languages/cmds/" + ⵒⵅⵌⴳⴳ + ".js", ⴲⴻⵞⴳⴳ, ⵂⵐⵊⴲ);
                      ⵒⵕⵑⴲ.time$jscomp$2 = ⵒⵅⵌⴷⴳ("DD/MM/YYYY HH:mm:ss");
                      ⵒⵅⴼⴶⴳ(ⵒⵕⵑⴲ.commandName$jscomp$6);
                      if (ⴲⵋⵃⵈ(ⵂⵐⵊⴲ.onChat) == "Function") {
                        ⵒⵕⵑⴲ.defaultOnChat = ⵂⵐⵊⴲ.onChat;
                        ⵂⵐⵊⴲ.onChat = function (ⵒⴵⴷⴳ) {
                          return function () {
                            var ⵂⴰⴰⴳ = arguments;
                            return ⵂⴰⵀⵖ.asyncExecutePromiseGeneratorProgram(function (ⴲⵋⴳⴳ) {
                              return ⴲⵋⴳⴳ.return(ⵒⴵⴷⴳ.defaultOnChat.apply(null, ⵂⴰⵀⵖ.arrayFromIterable(ⵂⴰⴰⴳ)));
                            });
                          };
                        }(ⵒⵕⵑⴲ);
                      }
                      ⵂⵐⵊⴲ.onChat(Object.assign({}, ⵒⴵⵗⴳⴳ, {
                        isUserCallCommand: ⵂⴰⵐⴳⴳ,
                        args: ⴲⴻⵎⴶ,
                        commandName: ⵒⵕⵑⴲ.commandName$jscomp$6,
                        getLang: ⵒⴵⵇⴲ
                      })).then(function (ⵂⵀⴵⴴ) {
                        return function (ⵂⵐⵚⴳ) {
                          var ⴲⵋⵓⴳ;
                          return ⵂⴰⵀⵖ.asyncExecutePromiseGeneratorProgram(function (ⵒⴵⵗⴳ) {
                            var ⵂⴰⵐⴳ = 20;
                            while (ⵂⴰⵐⴳ < 34) {
                              switch (ⵂⴰⵐⴳ) {
                                case 25:
                                  ⵂⴰⵐⴳ = 34;
                                  {
                                    var ⴲⴻⵎⴴ = 12;
                                    while (ⴲⴻⵎⴴ < 26) {
                                      switch (ⴲⴻⵎⴴ) {
                                        case 12:
                                          ⴲⴻⵎⴴ = typeof ⵂⵐⵚⴳ != "function" ? 22 : 26;
                                          break;
                                        case 22:
                                          ⴲⴻⵎⴴ = 26;
                                          return ⵒⴵⵗⴳ.jumpTo(0);
                                      }
                                    }
                                    var ⵒⵕⵑⴴ = 9;
                                    while (ⵒⵕⵑⴴ < 38) {
                                      switch (ⵒⵕⵑⴴ) {
                                        case 9:
                                          ⵒⵕⵑⴴ = ⵒⵕⵑⵆ(ⵂⵐⵚⴳⴳ, ⵂⵀⴵⴴⴳ, ⵒⵕⴱⴴⴳ, ⵂⴰⴰⴳⴳ, ⴲⵋⴳⴳⴳ, ⵂⵀⴵⴴ.commandName$jscomp$6, ⵒⵕⵁⵁ, ⵒⵅⵌⴳⴳ) ? 23 : 38;
                                          break;
                                        case 23:
                                          ⵒⵕⵑⴴ = 38;
                                          return ⵒⴵⵗⴳ.return();
                                      }
                                    }
                                    ⵒⴵⵗⴳ.setCatchFinallyBlocks(3);
                                    return ⵒⴵⵗⴳ.yield(ⵂⵐⵚⴳ(), 5);
                                  }
                                  break;
                                case 20:
                                  ⵂⴰⵐⴳ = ⵒⴵⵗⴳ.nextAddress == 1 ? 25 : 34;
                                  break;
                              }
                            }
                            var ⵒⴵⵇⴴ = 21;
                            while (ⵒⴵⵇⴴ < 38) {
                              switch (ⵒⴵⵇⴴ) {
                                case 21:
                                  ⵒⴵⵇⴴ = ⵒⴵⵗⴳ.nextAddress != 3 ? 37 : 38;
                                  break;
                                case 37:
                                  ⵒⴵⵇⴴ = 38;
                                  ⴲⴻⵎⴶⴳ.info("onChat", ⵂⵀⴵⴴ.commandName$jscomp$6 + " | " + ⵂⵐⵚⴳⴳ.name + " | " + ⵒⵕⴱⴴⴳ + " | " + ⵂⴰⴰⴳⴳ + " | " + ⴲⴻⵎⴶ.join(" "));
                                  return ⵒⴵⵗⴳ.leaveTryBlock(0);
                              }
                            }
                            ⴲⵋⵓⴳ = ⵒⴵⵗⴳ.enterCatchBlock();
                            return ⵒⴵⵗⴳ.yield(ⵒⵕⵁⵁ.reply(ⴲⵋⴳⴷⴳ.getText({
                              lang: ⵒⵅⵌⴳⴳ,
                              head: "handlerEvents"
                            }, "errorOccurred2", ⵂⵀⴵⴴ.time$jscomp$2, ⵂⵀⴵⴴ.commandName$jscomp$6, ⵂⵐⵊⴶⴳ(ⴲⵋⵓⴳ.stack ? ⴲⵋⵓⴳ.stack.split("\n").slice(0, 5).join("\n") : JSON.stringify(ⴲⵋⵓⴳ, null, 2)))), 0);
                          });
                        };
                      }(ⵒⵕⵑⴲ)).catch(function (ⵂⵐⵊⴴ) {
                        return function (ⵂⴰⵀⴴ) {
                          ⴲⴻⵎⴶⴳ.err("onChat", "An error occurred when calling the command onChat " + ⵂⵐⵊⴴ.commandName$jscomp$6, ⵂⴰⵀⴴ);
                        };
                      }(ⵒⵕⵑⴲ));
                    }
                    break;
                  case 22:
                    ⵒⵕⵁⴳ = (ⵂⵀⵕⴲ = ⵒⵅⵜⴲ.value, ⵂⵐⵊⴲ = ⵒⵅⵜⴶⴳ.commands.get(ⵂⵀⵕⴲ)) ? 20 : 26;
                    break;
                }
              }
              break;
            case 22:
              ⴲⴻⴾⴳ = !ⵒⵅⵜⴲ.done ? 20 : 26;
              break;
          }
        }
        ⵂⵀⵅⴳ.jumpToEnd();
      });
    }
    function ⴲⵛⴸⴴ() {
      function ⵒⴵⵇ(ⵂⵐⵊ, ⵂⴰⵀ, ⴲⵋⵃ) {
        var ⵒⵅⴼ = 33;
        while (ⵒⵅⴼ < 37) {
          switch (ⵒⵅⴼ) {
            case 27:
              ⵒⵅⴼ = 37;
              {
                var ⵒⵕⴱ = 8;
                while (ⵒⵕⴱ < 39) {
                  switch (ⵒⵕⴱ) {
                    case 11:
                      ⵒⵕⴱ = 39;
                      throw Error("The first argument (body) must be a string, but got \"" + ⴲⵋⵃⵈ(ⵂⵐⵊ) + "\"");
                    case 8:
                      ⵒⵕⴱ = typeof ⵂⵐⵊ != "string" ? 11 : 39;
                      break;
                  }
                }
                var ⵂⵀⴵ = 11;
                while (ⵂⵀⴵ < 39) {
                  switch (ⵂⵀⴵ) {
                    case 38:
                      ⵂⵀⴵ = 39;
                      throw Error("The second argument (prefix) must be a string, but got \"" + ⴲⵋⵃⵈ(ⵂⴰⵀ) + "\"");
                    case 11:
                      ⵂⵀⴵ = typeof ⵂⴰⵀ != "string" ? 38 : 39;
                      break;
                  }
                }
                var ⴲⵋⴳⴱ = 37;
                while (ⴲⵋⴳⴱ < 39) {
                  switch (ⴲⵋⴳⴱ) {
                    case 37:
                      ⴲⵋⴳⴱ = typeof ⴲⵋⵃ != "string" ? 8 : 39;
                      break;
                    case 8:
                      ⴲⵋⴳⴱ = 39;
                      throw Error("The third argument (commandName) must be a string, but got \"" + ⴲⵋⵃⵈ(ⴲⵋⵃ) + "\"");
                  }
                }
                return ⵂⵐⵊ.replace(new RegExp("^" + ⵂⴰⵀ + "(\\s+|)" + ⴲⵋⵃ, "i"), "").trim();
              }
              break;
            case 33:
              ⵒⵅⴼ = arguments.length ? 27 : 37;
              break;
          }
        }
        return ⵒⴵⴷⴳⴳ.replace(new RegExp("^" + ⴲⴻⵞⴳⴳ + "(\\s+|)" + ⵂⴰⴰⴱ, "i"), "").trim();
      }
      var ⵒⴵⴷⴱ;
      var ⵒⵅⵜ;
      var ⵂⴰⴰⴱ;
      var ⵂⵀⵕ;
      var ⴲⵛⵘ;
      var ⴲⴻⵎ;
      var ⵒⵕⵑ;
      var ⵂⴰⵐⴱ;
      var ⴲⵋⵓⴱ;
      var ⴲⵛⵈⴱ;
      var ⵒⵅⵌⴱ;
      var ⵒⵕⵁⴱ;
      var ⵂⵀⵅⴱ;
      var ⵂⵐⴺⴱ;
      var ⴲⴻⴾⴱ;
      return ⵂⴰⵀⵖ.asyncExecutePromiseGeneratorProgram(function (ⵒⵅⴼⴲ) {
        switch (ⵒⵅⴼⴲ.nextAddress) {
          case 1:
            var ⵂⵀⴵⴲ = 24;
            while (ⵂⵀⴵⴲ < 36) {
              switch (ⵂⵀⴵⴲ) {
                case 7:
                  ⵂⵀⴵⴲ = 36;
                  return ⵒⵅⴼⴲ.return();
                case 24:
                  ⵂⵀⴵⴲ = !ⵒⴵⴷⴳⴳ || !ⵒⴵⴷⴳⴳ.startsWith(ⴲⴻⵞⴳⴳ) ? 7 : 36;
                  break;
              }
            }
            ⵒⴵⴷⴱ = Date.now();
            ⵒⵅⵜ = ⵒⴵⴷⴳⴳ.slice(ⴲⴻⵞⴳⴳ.length).trim().split(/ +/);
            ⵂⴰⴰⴱ = ⵒⵅⵜ.shift().toLowerCase();
            ⵂⵀⵕ = ⵒⵅⵜⴶⴳ.commands.get(ⵂⴰⴰⴱ) || ⵒⵅⵜⴶⴳ.commands.get(ⵒⵅⵜⴶⴳ.aliases.get(ⵂⴰⴰⴱ));
            ⴲⵛⵘ = ⵂⵀⴵⴴⴳ.data.aliases || {};
            ⵂⴰⴰⵁⴱ: for (ⴲⴻⵎ in ⴲⵛⵘ) {
              var U3jo = 35;
              while (U3jo < 36) {
                switch (U3jo) {
                  case 35:
                    U3jo = ⴲⵛⵘ[ⴲⴻⵎ].includes(ⵂⴰⴰⴱ) ? 28 : 36;
                    break;
                  case 28:
                    U3jo = 36;
                    {
                      ⵂⵀⵕ = ⵒⵅⵜⴶⴳ.commands.get(ⴲⴻⵎ);
                      break ⵂⴰⴰⵁⴱ;
                    }
                    break;
                }
              }
            }
            if (ⵂⵀⵕ) {
              ⵂⴰⴰⴱ = ⵂⵀⵕ.config.name;
            }
            var ⴲⴻⵞⴱ = 23;
            while (ⴲⴻⵞⴱ < 38) {
              switch (ⴲⴻⵞⴱ) {
                case 21:
                  ⴲⴻⵞⴱ = 38;
                  return ⵒⵅⴼⴲ.return();
                case 23:
                  ⴲⴻⵞⴱ = ⵒⵕⵑⵆ(ⵂⵐⵚⴳⴳ, ⵂⵀⴵⴴⴳ, ⵒⵕⴱⴴⴳ, ⵂⴰⴰⴳⴳ, ⴲⵋⴳⴳⴳ, ⵂⴰⴰⴱ, ⵒⵕⵁⵁ, ⵒⵅⵌⴳⴳ) ? 21 : 38;
                  break;
              }
            }
            var ⵒⵕⴱⴲ = 23;
            while (ⵒⵕⴱⴲ < 38) {
              switch (ⵒⵕⴱⴲ) {
                case 21:
                  ⵒⵕⴱⴲ = 38;
                  {
                    ⵒⵅⴼⴲ.jumpTo(2);
                    ⵒⵕⴱⴲ = 39;
                  }
                  break;
                case 23:
                  ⵒⵕⴱⴲ = ⵂⵀⵕ ? 21 : 38;
                  break;
              }
            }
            if (ⵒⵕⴱⴲ === 39) {
              break;
            }
            if (ⴲⴻⴾⴳⴳ.commandNotFound) {
              return ⵒⵅⴼⴲ.return(true);
            } else {
              return ⵒⵅⴼⴲ.yield(ⵒⵕⵁⵁ.reply(ⵂⴰⴰⴱ ? ⴲⵋⴳⴷⴳ.getText({
                lang: ⵒⵅⵌⴳⴳ,
                head: "handlerEvents"
              }, "commandNotFound", ⵂⴰⴰⴱ, ⴲⴻⵞⴳⴳ) : ⴲⵋⴳⴷⴳ.getText({
                lang: ⵒⵅⵌⴳⴳ,
                head: "handlerEvents"
              }, "commandNotFound2", ⴲⴻⵞⴳⴳ)), 4);
            }
          case 4:
            return ⵒⵅⴼⴲ.return(ⵒⵅⴼⴲ.yieldResult);
          case 2:
            ⵒⵕⵑ = ⵒⴵⵇⵆ(ⴲⵋⴳⴷⴳ, ⵂⵀⵕ, ⴲⵋⴳⴳⴳ, ⵂⵀⴵⴴⴳ, ⵂⴰⴰⴱ);
            ⵂⴰⵐⴱ = ⵒⵕⵑ.onStart;
            var ⵒⴵⵗⴱ = 37;
            while (ⵒⴵⵗⴱ < 39) {
              switch (ⵒⴵⵗⴱ) {
                case 37:
                  ⵒⴵⵗⴱ = !(ⵂⴰⵐⴱ > ⴲⵋⵓⴳⴳ) ? 8 : 39;
                  break;
                case 8:
                  ⵒⴵⵗⴱ = 39;
                  {
                    ⵒⵅⴼⴲ.jumpTo(5);
                    ⵒⴵⵗⴱ = 40;
                  }
                  break;
              }
            }
            if (ⵒⴵⵗⴱ === 40) {
              break;
            }
            var ⵂⵐⵚⴱ = 15;
            while (ⵂⵐⵚⴱ < 23) {
              switch (ⵂⵐⵚⴱ) {
                case 12:
                  ⵂⵐⵚⴱ = 23;
                  return ⵒⵅⴼⴲ.return(true);
                case 15:
                  ⵂⵐⵚⴱ = ⴲⴻⴾⴳⴳ.needRoleToUseCmd ? 12 : 23;
                  break;
              }
            }
            var ⵒⴵⵗⴵⴳ = 38;
            while (ⵒⴵⵗⴵⴳ < 39) {
              switch (ⵒⴵⵗⴵⴳ) {
                case 38:
                  ⵒⴵⵗⴵⴳ = ⵂⴰⵐⴱ == 1 ? 14 : 39;
                  break;
                case 14:
                  ⵒⴵⵗⴵⴳ = 39;
                  return ⵒⵅⴼⴲ.yield(ⵒⵕⵁⵁ.reply(ⴲⵋⴳⴷⴳ.getText({
                    lang: ⵒⵅⵌⴳⴳ,
                    head: "handlerEvents"
                  }, "onlyAdmin", ⵂⴰⴰⴱ)), 11);
              }
            }
            var ⵂⵐⵚⴵⴳ = 8;
            while (ⵂⵐⵚⴵⴳ < 39) {
              switch (ⵂⵐⵚⴵⴳ) {
                case 11:
                  ⵂⵐⵚⴵⴳ = 39;
                  {
                    ⵒⵅⴼⴲ.jumpTo(5);
                    ⵂⵐⵚⴵⴳ = 40;
                  }
                  break;
                case 8:
                  ⵂⵐⵚⴵⴳ = ⵂⴰⵐⴱ != 2 ? 11 : 39;
                  break;
              }
            }
            if (ⵂⵐⵚⴵⴳ === 40) {
              break;
            }
            return ⵒⵅⴼⴲ.yield(ⵒⵕⵁⵁ.reply(ⴲⵋⴳⴷⴳ.getText({
              lang: ⵒⵅⵌⴳⴳ,
              head: "handlerEvents"
            }, "onlyAdminBot2", ⵂⴰⴰⴱ)), 10);
          case 10:
            return ⵒⵅⴼⴲ.return(ⵒⵅⴼⴲ.yieldResult);
          case 11:
            return ⵒⵅⴼⴲ.return(ⵒⵅⴼⴲ.yieldResult);
          case 5:
            ⴲⵛⵘⴶⴳ.countDown[ⵂⴰⴰⴱ] ||= {};
            ⴲⵋⵓⴱ = ⴲⵛⵘⴶⴳ.countDown[ⵂⴰⴰⴱ];
            ⴲⵛⵈⴱ = ⵂⵀⵕ.config.countDown;
            var ⵂⴰⵐⴵⴳ = 35;
            while (ⵂⴰⵐⴵⴳ < 36) {
              switch (ⵂⴰⵐⴵⴳ) {
                case 35:
                  ⵂⴰⵐⴵⴳ = !ⴲⵛⵈⴱ && ⴲⵛⵈⴱ != 0 || isNaN(ⴲⵛⵈⴱ) ? 28 : 36;
                  break;
                case 28:
                  ⵂⴰⵐⴵⴳ = 36;
                  ⴲⵛⵈⴱ = 1;
                  break;
              }
            }
            ⵒⵅⵌⴱ = ⴲⵛⵈⴱ * 1000;
            var ⴲⵋⵓⴵⴳ = 21;
            while (ⴲⵋⵓⴵⴳ < 38) {
              switch (ⴲⵋⵓⴵⴳ) {
                case 37:
                  ⴲⵋⵓⴵⴳ = 38;
                  {
                    ⵒⵅⴼⴲ.jumpTo(12);
                    ⴲⵋⵓⴵⴳ = 39;
                  }
                  break;
                case 21:
                  ⴲⵋⵓⴵⴳ = !ⴲⵋⵓⴱ[ⵒⵕⴱⴴⴳ] ? 37 : 38;
                  break;
              }
            }
            if (ⴲⵋⵓⴵⴳ === 39) {
              break;
            }
            ⵒⵕⵁⴱ = ⴲⵋⵓⴱ[ⵒⵕⴱⴴⴳ] + ⵒⵅⵌⴱ;
            var ⴲⵛⵈⴵⴳ = 8;
            while (ⴲⵛⵈⴵⴳ < 39) {
              switch (ⴲⵛⵈⴵⴳ) {
                case 11:
                  ⴲⵛⵈⴵⴳ = 39;
                  {
                    ⵒⵅⴼⴲ.jumpTo(12);
                    ⴲⵛⵈⴵⴳ = 40;
                  }
                  break;
                case 8:
                  ⴲⵛⵈⴵⴳ = !(ⵒⴵⴷⴱ < ⵒⵕⵁⴱ) ? 11 : 39;
                  break;
              }
            }
            if (ⴲⵛⵈⴵⴳ === 40) {
              break;
            }
            return ⵒⵅⴼⴲ.yield(ⵒⵕⵁⵁ.reply(ⴲⵋⴳⴷⴳ.getText({
              lang: ⵒⵅⵌⴳⴳ,
              head: "handlerEvents"
            }, "waitingForCommand", ((ⵒⵕⵁⴱ - ⵒⴵⴷⴱ) / 1000).toString().slice(0, 3))), 14);
          case 14:
            return ⵒⵅⴼⴲ.return(ⵒⵅⴼⴲ.yieldResult);
          case 12:
            ⵂⵀⵅⴱ = ⵒⵅⵌⴷⴳ("DD/MM/YYYY HH:mm:ss");
            ⵂⴰⵐⴳⴳ = true;
            ⵒⵅⴼⴲ.setCatchFinallyBlocks(15);
            (function () {
              var ⵒⵕⵁⴵⴳ;
              return ⵂⴰⵀⵖ.asyncExecutePromiseGeneratorProgram(function (ⵂⵀⵅⴵⴳ) {
                var ⵒⴵⵇⴶⴳ = 7;
                while (ⵒⴵⵇⴶⴳ < 36) {
                  switch (ⵒⴵⵇⴶⴳ) {
                    case 7:
                      ⵒⴵⵇⴶⴳ = ⵂⵀⵅⴵⴳ.nextAddress == 1 ? 35 : 36;
                      break;
                    case 35:
                      ⵒⴵⵇⴶⴳ = 36;
                      return ⵂⵀⵅⴵⴳ.yield(ⴲⵛⵈⵁ.get("analytics", "data", {}), 2);
                  }
                }
                ⵒⵕⵁⴵⴳ = ⵂⵀⵅⴵⴳ.yieldResult;
                ⵒⵕⵁⴵⴳ[ⵂⴰⴰⴱ] ||= 0;
                ⵒⵕⵁⴵⴳ[ⵂⴰⴰⴱ]++;
                return ⵂⵀⵅⴵⴳ.yield(ⴲⵛⵈⵁ.set("analytics", ⵒⵕⵁⴵⴳ, "data"), 0);
              });
            })();
            ⵒⵅⴼⴶⴳ(ⵂⴰⴰⴱ);
            ⵂⵐⴺⴱ = ⵂⴰⵐⵃ(ⵒⵅⵌⴳⴳ, process.cwd() + "/languages/cmds/" + ⵒⵅⵌⴳⴳ + ".js", ⴲⴻⵞⴳⴳ, ⵂⵀⵕ);
            return ⵒⵅⴼⴲ.yield(ⵂⵀⵕ.onStart(Object.assign({}, ⵒⴵⵗⴳⴳ, {
              args: ⵒⵅⵜ,
              commandName: ⵂⴰⴰⴱ,
              getLang: ⵂⵐⴺⴱ,
              removeCommandNameFromBody: ⵒⴵⵇ
            })), 17);
          case 17:
            ⴲⵋⵓⴱ[ⵒⵕⴱⴴⴳ] = ⵒⴵⴷⴱ;
            ⴲⴻⵎⴶⴳ.info("CALL COMMAND", ⵂⴰⴰⴱ + " | " + ⵂⵐⵚⴳⴳ.name + " | " + ⵒⵕⴱⴴⴳ + " | " + ⵂⴰⴰⴳⴳ + " | " + ⵒⵅⵜ.join(" "));
            ⵒⵅⴼⴲ.leaveTryBlock(0);
            break;
          case 15:
            ⴲⴻⴾⴱ = ⵒⵅⴼⴲ.enterCatchBlock();
            ⴲⴻⵎⴶⴳ.err("CALL COMMAND", "An error occurred when calling the command " + ⵂⴰⴰⴱ, ⴲⴻⴾⴱ);
            return ⵒⵅⴼⴲ.yield(ⵒⵕⵁⵁ.reply(ⴲⵋⴳⴷⴳ.getText({
              lang: ⵒⵅⵌⴳⴳ,
              head: "handlerEvents"
            }, "errorOccurred", ⵂⵀⵅⴱ, ⵂⴰⴰⴱ, ⵂⵐⵊⴶⴳ(ⴲⴻⴾⴱ.stack ? ⴲⴻⴾⴱ.stack.split("\n").slice(0, 5).join("\n") : JSON.stringify(ⴲⴻⴾⴱ, null, 2)))), 18);
          case 18:
            return ⵒⵅⴼⴲ.return(ⵒⵅⴼⴲ.yieldResult);
        }
      });
    }
    function ⵒⵅⴼⴶⴳ(ⵂⴰⵀⴶⴳ) {
      ⵒⵕⵁⵁ.SyntaxError = function () {
        return ⵂⴰⵀⵖ.asyncExecutePromiseGeneratorProgram(function (ⴲⴻⵞⴵⴳ) {
          if (ⴲⴻⵞⴵⴳ.nextAddress == 1) {
            return ⴲⴻⵞⴵⴳ.yield(ⵒⵕⵁⵁ.reply(ⴲⵋⴳⴷⴳ.getText({
              lang: ⵒⵅⵌⴳⴳ,
              head: "handlerEvents"
            }, "commandSyntaxError", ⴲⴻⵞⴳⴳ, ⵂⴰⵀⴶⴳ)), 2);
          } else {
            return ⴲⴻⵞⴵⴳ.return(ⴲⴻⵞⴵⴳ.yieldResult);
          }
        });
      };
    }
    var ⵂⴰⴰⴷⴳ;
    var ⴲⵋⴳⴷⴳ;
    var ⴲⵛⵘⴶⴳ;
    var ⵒⵅⵜⴶⴳ;
    var ⵒⵕⵑⴶⴳ;
    var ⵂⵀⵕⴶⴳ;
    var ⵂⵐⵊⴶⴳ;
    var ⴲⴻⵎⴶⴳ;
    var ⵒⵅⵌⴷⴳ;
    var ⵂⴰⵐⴷⴳ;
    var ⵂⵀⵅⴷⴳ;
    var ⴲⵛⵈⴷⴳ;
    var ⴲⴻⴾⴷⴳ;
    var ⵒⵕⵁⴷⴳ;
    var ⵒⴵⴷⴷⴳ;
    var ⵂⵐⴺⴷⴳ;
    var ⵂⵀⵅⴳⴳ;
    var ⴲⵛⵈⴳⴳ;
    var ⴲⴻⴾⴳⴳ;
    var ⵒⵕⵁⴳⴳ;
    var ⵒⴵⴷⴳⴳ;
    var ⵂⵐⴺⴳⴳ;
    var ⵂⴰⴰⴳⴳ;
    var ⴲⵋⴳⴳⴳ;
    var ⵒⵕⴱⴴⴳ;
    var ⵂⵀⴵⴴⴳ;
    var ⵂⵐⵚⴳⴳ;
    var ⴲⴻⵞⴳⴳ;
    var ⴲⵋⵓⴳⴳ;
    var ⵒⴵⵗⴳⴳ;
    var ⵒⵅⵌⴳⴳ;
    var ⵂⴰⵐⴳⴳ;
    return ⵂⴰⵀⵖ.asyncExecutePromiseGeneratorProgram(function (ⴲⴻⵎⴴⴳ) {
      switch (ⴲⴻⵎⴴⴳ.nextAddress) {
        case 1:
          ⵂⴰⴰⴷⴳ = global;
          ⴲⵋⴳⴷⴳ = ⵂⴰⴰⴷⴳ.utils;
          ⴲⵛⵘⴶⴳ = ⵂⴰⴰⴷⴳ.client;
          ⵒⵅⵜⴶⴳ = ⵂⴰⴰⴷⴳ.GoatBot;
          ⵒⵕⵑⴶⴳ = ⴲⵋⴳⴷⴳ;
          ⵂⵀⵕⴶⴳ = ⵒⵕⵑⴶⴳ.getPrefix;
          ⵂⵐⵊⴶⴳ = ⵒⵕⵑⴶⴳ.removeHomeDir;
          ⴲⴻⵎⴶⴳ = ⵒⵕⵑⴶⴳ.log;
          ⵒⵅⵌⴷⴳ = ⵒⵕⵑⴶⴳ.getTime;
          ⵂⴰⵐⴷⴳ = ⵒⵅⵜⴶⴳ;
          ⵂⵀⵅⴷⴳ = ⵂⴰⵐⴷⴳ.config;
          ⴲⵛⵈⴷⴳ = ⵂⴰⵐⴷⴳ.configCommands;
          ⴲⴻⴾⴷⴳ = ⴲⵛⵈⴷⴳ.envGlobal;
          ⵒⵕⵁⴷⴳ = ⴲⵛⵈⴷⴳ.envCommands;
          ⵒⴵⴷⴷⴳ = ⴲⵛⵈⴷⴳ.envEvents;
          ⵂⵐⴺⴷⴳ = ⵂⵀⵅⴷⴳ.database;
          ⵂⵀⵅⴳⴳ = ⵂⵐⴺⴷⴳ.autoRefreshThreadInfoFirstTime;
          ⴲⵛⵈⴳⴳ = ⵂⵀⵅⴷⴳ;
          ⴲⴻⴾⴳⴳ = ⴲⵛⵈⴳⴳ.hideNotiMessage === undefined ? {} : ⴲⵛⵈⴳⴳ.hideNotiMessage;
          ⵒⵕⵁⴳⴳ = ⵒⵅⵌⵁ;
          ⵒⴵⴷⴳⴳ = ⵒⵕⵁⴳⴳ.body;
          ⵂⵐⴺⴳⴳ = ⵒⵕⵁⴳⴳ.messageID;
          ⵂⴰⴰⴳⴳ = ⵒⵕⵁⴳⴳ.threadID;
          ⴲⵋⴳⴳⴳ = ⵒⵕⵁⴳⴳ.isGroup;
          var ⵒⴵⵇⴴⴳ = 35;
          while (ⵒⴵⵇⴴⴳ < 36) {
            switch (ⵒⴵⵇⴴⴳ) {
              case 35:
                ⵒⴵⵇⴴⴳ = !ⵂⴰⴰⴳⴳ ? 28 : 36;
                break;
              case 28:
                ⵒⴵⵇⴴⴳ = 36;
                return ⴲⴻⵎⴴⴳ.return();
            }
          }
          ⵒⵕⴱⴴⴳ = ⵒⵅⵌⵁ.userID || ⵒⵅⵌⵁ.senderID || ⵒⵅⵌⵁ.author;
          ⵂⵀⴵⴴⴳ = global.db.allThreadData.find(function (ⵂⵐⵊⴴⴳ) {
            return ⵂⵐⵊⴴⴳ.threadID == ⵂⴰⴰⴳⴳ;
          });
          var ⴲⵋⵃⴴⴳ = 24;
          while (ⴲⵋⵃⴴⴳ < 36) {
            switch (ⴲⵋⵃⴴⴳ) {
              case 24:
                ⴲⵋⵃⴴⴳ = (ⵂⵐⵚⴳⴳ = global.db.allUserData.find(function (ⴲⵛⴸⴴⴳ) {
                  return ⴲⵛⴸⴴⴳ.userID == ⵒⵕⴱⴴⴳ;
                })) || isNaN(ⵒⵕⴱⴴⴳ) ? 7 : 36;
                break;
              case 7:
                ⴲⵋⵃⴴⴳ = 36;
                {
                  ⴲⴻⵎⴴⴳ.jumpTo(2);
                  ⴲⵋⵃⴴⴳ = 37;
                }
                break;
            }
          }
          if (ⴲⵋⵃⴴⴳ === 37) {
            break;
          }
          return ⴲⴻⵎⴴⴳ.yield(ⵒⵕⵑⵀ.create(ⵒⵕⴱⴴⴳ), 3);
        case 3:
          ⵂⵐⵚⴳⴳ = ⴲⴻⵎⴴⴳ.yieldResult;
        case 2:
          var ⵂⵐⴺⴵⴳ = 24;
          while (ⵂⵐⴺⴵⴳ < 36) {
            switch (ⵂⵐⴺⴵⴳ) {
              case 24:
                ⵂⵐⴺⴵⴳ = !ⵂⵀⴵⴴⴳ && !isNaN(ⵂⴰⴰⴳⴳ) ? 7 : 36;
                break;
              case 7:
                ⵂⵐⴺⴵⴳ = 36;
                if (global.temp.createThreadDataError.includes(ⵂⴰⴰⴳⴳ)) {
                  return ⴲⴻⵎⴴⴳ.return();
                } else {
                  return ⴲⴻⵎⴴⴳ.yield(ⵂⴰⵐⵁ.create(ⵂⴰⴰⴳⴳ), 8);
                }
            }
          }
          var ⴲⴻⴾⴵⴳ = 23;
          while (ⴲⴻⴾⴵⴳ < 38) {
            switch (ⴲⴻⴾⴵⴳ) {
              case 21:
                ⴲⴻⴾⴵⴳ = 38;
                {
                  ⴲⴻⵎⴴⴳ.jumpTo(5);
                  ⴲⴻⴾⴵⴳ = 39;
                }
                break;
              case 23:
                ⴲⴻⴾⴵⴳ = ⵂⵀⵅⴳⴳ !== true || global.db.receivedTheFirstMessage[ⵂⴰⴰⴳⴳ] ? 21 : 38;
                break;
            }
          }
          if (ⴲⴻⴾⴵⴳ === 39) {
            break;
          }
          global.db.receivedTheFirstMessage[ⵂⴰⴰⴳⴳ] = true;
          return ⴲⴻⵎⴴⴳ.yield(ⵂⴰⵐⵁ.refreshInfo(ⵂⴰⴰⴳⴳ), 5);
        case 8:
          ⵂⵀⴵⴴⴳ = ⴲⴻⵎⴴⴳ.yieldResult;
          global.db.receivedTheFirstMessage[ⵂⴰⴰⴳⴳ] = true;
        case 5:
          if (typeof ⵂⵀⴵⴴⴳ.settings.hideNotiMessage == "object") {
            ⴲⴻⴾⴳⴳ = ⵂⵀⴵⴴⴳ.settings.hideNotiMessage;
          }
          ⴲⴻⵞⴳⴳ = ⵂⵀⵕⴶⴳ(ⵂⴰⴰⴳⴳ);
          ⴲⵋⵓⴳⴳ = ⵂⵐⴺⵉ(ⵂⵀⴵⴴⴳ, ⵒⵕⴱⴴⴳ);
          ⵒⴵⵗⴳⴳ = {
            api: ⵒⵅⵜⵀ,
            usersData: ⵒⵕⵑⵀ,
            threadsData: ⵂⴰⵐⵁ,
            message: ⵒⵕⵁⵁ,
            event: ⵒⵅⵌⵁ,
            userModel: ⵂⵀⵕⵀ,
            threadModel: ⵂⴰⴰⵁ,
            prefix: ⴲⴻⵞⴳⴳ,
            dashBoardModel: ⴲⵛⵘⵀ,
            globalModel: ⴲⴻⵎⵀ,
            dashBoardData: ⴲⵋⵓⵁ,
            globalData: ⴲⵛⵈⵁ,
            envCommands: ⵒⵕⵁⴷⴳ,
            envEvents: ⵒⴵⴷⴷⴳ,
            envGlobal: ⴲⴻⴾⴷⴳ,
            role: ⴲⵋⵓⴳⴳ,
            removeCommandNameFromBody: function (ⴲⵋⴳⴵⴳ, ⵒⴵⴷⴵⴳ, ⵒⵅⵜⴴⴳ) {
              var ⵂⵀⵕⴴⴳ = 25;
              while (ⵂⵀⵕⴴⴳ < 34) {
                switch (ⵂⵀⵕⴴⴳ) {
                  case 17:
                    ⵂⵀⵕⴴⴳ = 34;
                    throw Error("Please provide body, prefix and commandName to use this function, this function without parameters only support for onStart");
                  case 25:
                    ⵂⵀⵕⴴⴳ = [ⴲⵋⴳⴵⴳ, ⵒⴵⴷⴵⴳ, ⵒⵅⵜⴴⴳ].every(function (ⴲⵛⵘⴴⴳ) {
                      return ⵂⴰⵀⵈ.includes(ⴲⵛⵘⴴⴳ);
                    }) ? 17 : 34;
                    break;
                }
              }
              var ⴲⵋⴳⴱⴳ = 23;
              while (ⴲⵋⴳⴱⴳ < 38) {
                switch (ⴲⵋⴳⴱⴳ) {
                  case 37:
                    ⴲⵋⴳⴱⴳ = 8;
                    var ⵒⴵⴷⴱⴳ = 28;
                    while (ⵒⴵⴷⴱⴳ < 29) {
                      switch (ⵒⴵⴷⴱⴳ) {
                        case 16:
                          ⵒⴵⴷⴱⴳ = 29;
                          throw Error("The parameter \"" + (ⵒⵅⵜⴰⴳ + 1) + "\" must be a string, but got \"" + ⴲⵋⵃⵈ(arguments[ⵒⵅⵜⴰⴳ]) + "\"");
                        case 28:
                          ⵒⴵⴷⴱⴳ = typeof arguments[ⵒⵅⵜⴰⴳ] != "string" ? 16 : 29;
                          break;
                      }
                    }
                    break;
                  case 23:
                    ⴲⵋⴳⴱⴳ = 21;
                    var ⵒⵅⵜⴰⴳ = 0;
                    break;
                  case 21:
                    ⴲⵋⴳⴱⴳ = ⵒⵅⵜⴰⴳ < arguments.length ? 37 : 38;
                    break;
                  case 8:
                    ⴲⵋⴳⴱⴳ = 21;
                    ⵒⵅⵜⴰⴳ++;
                    break;
                }
              }
              return ⴲⵋⴳⴵⴳ.replace(new RegExp("^" + ⵒⴵⴷⴵⴳ + "(\\s+|)" + ⵒⵅⵜⴴⴳ, "i"), "").trim();
            }
          };
          ⵒⵅⵌⴳⴳ = ⵂⵀⴵⴴⴳ.data.lang || ⵂⵀⵅⴷⴳ.language || "en";
          ⵂⴰⵐⴳⴳ = false;
          return ⴲⴻⵎⴴⴳ.return({
            onAnyEvent: ⵂⴰⴰⴹ,
            onFirstChat: ⴲⴻⴾⴻ,
            onChat: ⵂⵀⵕⴶ,
            onStart: ⴲⵛⴸⴴ,
            onReaction: ⵒⴵⵇⴼ,
            onReply: ⴲⵛⵈⴹ,
            onEvent: ⴲⵛⵘⵂ,
            handlerEvent: ⵂⵐⵊⵀ,
            presence: ⵒⵕⴱⵂ,
            read_receipt: ⵂⴰⵀⵂ,
            typ: ⵂⵐⴺⵁ
          });
      }
    });
  };
};
