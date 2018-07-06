/*!
 * vue-cookie-law v1.6.0
 * (c) 2018 Jakub Juszczak <jakub@posteo.de>
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("CookieLaw", [], factory);
	else if(typeof exports === 'object')
		exports["CookieLaw"] = factory();
	else
		root["CookieLaw"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 38);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 1 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 2 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(49);
var defined = __webpack_require__(15);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(5);
var createDesc = __webpack_require__(14);
module.exports = __webpack_require__(6) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(13);
var IE8_DOM_DEFINE = __webpack_require__(31);
var toPrimitive = __webpack_require__(21);
var dP = Object.defineProperty;

exports.f = __webpack_require__(6) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(9)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(18)('wks');
var uid = __webpack_require__(12);
var Symbol = __webpack_require__(0).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(29);
var enumBugKeys = __webpack_require__(19);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 12 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(8);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 15 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 16 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(18)('keys');
var uid = __webpack_require__(12);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(1);
var global = __webpack_require__(0);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(11) ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 19 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var core = __webpack_require__(1);
var ctx = __webpack_require__(54);
var hide = __webpack_require__(4);
var has = __webpack_require__(2);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(8);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(5).f;
var has = __webpack_require__(2);
var TAG = __webpack_require__(7)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(7);


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var core = __webpack_require__(1);
var LIBRARY = __webpack_require__(11);
var wksExt = __webpack_require__(24);
var defineProperty = __webpack_require__(5).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 26 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(44);

var _stringify2 = _interopRequireDefault(_stringify);

var _keys = __webpack_require__(46);

var _keys2 = _interopRequireDefault(_keys);

var _typeof2 = __webpack_require__(56);

var _typeof3 = _interopRequireDefault(_typeof2);

var _tinyCookie = __webpack_require__(80);

var Cookie = _interopRequireWildcard(_tinyCookie);

var _hollerTagCookieLicence = __webpack_require__(82);

var _hollerTagCookieLicence2 = _interopRequireDefault(_hollerTagCookieLicence);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  props: {
    buttonText: {
      type: String,
      default: 'Got it!'
    },
    buttonLink: {
      type: [String, Object],
      required: false
    },
    buttonLinkText: {
      type: String,
      default: 'More info'
    },
    buttonLinkNewTab: {
      type: Boolean,
      default: false
    },
    message: {
      type: String,
      default: 'We use technologies, such as cookies, to customise content and advertising, to provide social media features and to analyse traffic to the site. We also share information about your use of our site with our trusted social media, advertising and analytics partners.'
    },
    theme: {
      type: String,
      default: 'base'
    },

    position: {
      type: String,
      default: 'bottom'
    },

    transitionName: {
      type: String,
      default: 'slideFromBottom'
    },
    buttonClass: {
      type: String,
      default: 'Cookie__button'
    }
  },
  data: function data() {
    return {
      supportsLocalStorage: true,
      isOpen: false,
      selected: ['Necessary'],
      showMore: false,
      showMoreTab: 0,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      cookieDecalration: ['Necessary', 'Statistics', 'Others'],
      cookieTabClicked: 'Necessary',
      cookieLicenceJson: _hollerTagCookieLicence2.default,
      headers: [{ text: 'Name', value: 'name' }, { text: 'Provider', value: 'provider' }, { text: 'Purpose', value: 'purpose' }, { text: 'Expiry', value: 'expiry' }, { text: 'Type', value: 'type' }]

    };
  },
  mounted: function mounted() {
    console.log('mounted');
    console.log(this.cookieLicenceJson);
  },

  computed: {
    containerPosition: function containerPosition() {
      return 'Cookie--' + this.position;
    },
    cookieTheme: function cookieTheme() {
      return 'Cookie--' + this.theme;
    },
    externalButtonLink: function externalButtonLink() {
      return typeof this.buttonLink === 'string' && this.buttonLink.length;
    },
    internalButtonLink: function internalButtonLink() {
      return (0, _typeof3.default)(this.buttonLink) === 'object' && this.buttonLink != null && (0, _keys2.default)(this.buttonLink).length;
    },
    target: function target() {
      return this.buttonLinkNewTab ? '_blank' : '_self';
    }
  },
  created: function created() {
    try {
      var test = '__vue-cookielaw-check-localStorage';

      window.localStorage.setItem(test, test);
      window.localStorage.removeItem(test);
    } catch (e) {
      console.error('Local storage is not supported, falling back to cookie use');
      this.supportsLocalStorage = false;
    }

    if (!this.getVisited() === true) {
      this.isOpen = true;
    }
  },

  methods: {
    setVisited: function setVisited(data) {
      if (this.supportsLocalStorage) {
        localStorage.setItem('cookie:accepted', (0, _stringify2.default)(data));
      } else {
        Cookie.set('cookie:accepted', (0, _stringify2.default)(data));
      }
    },
    getVisited: function getVisited() {
      if (this.supportsLocalStorage) {
        return JSON.parse(localStorage.getItem('cookie:accepted'));
      } else {
        return JSON.parse(Cookie.get('cookie:accepted'));
      }
    },
    accept: function accept() {
      this.setVisited(this.selected);
      this.isOpen = false;
      this.$emit('accept', this.selected);
    },
    cookieTab: function cookieTab(item) {
      console.log(item);
      this.cookieTabClicked = item;
    }
  }
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(15);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(2);
var toIObject = __webpack_require__(3);
var arrayIndexOf = __webpack_require__(50)(false);
var IE_PROTO = __webpack_require__(17)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 30 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(6) && !__webpack_require__(9)(function () {
  return Object.defineProperty(__webpack_require__(32)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(8);
var document = __webpack_require__(0).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(11);
var $export = __webpack_require__(20);
var redefine = __webpack_require__(34);
var hide = __webpack_require__(4);
var Iterators = __webpack_require__(22);
var $iterCreate = __webpack_require__(61);
var setToStringTag = __webpack_require__(23);
var getPrototypeOf = __webpack_require__(64);
var ITERATOR = __webpack_require__(7)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4);


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(13);
var dPs = __webpack_require__(62);
var enumBugKeys = __webpack_require__(19);
var IE_PROTO = __webpack_require__(17)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(32)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(63).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 36 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(29);
var hiddenKeys = __webpack_require__(19).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_CookieLaw_vue__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_CookieLaw_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_CookieLaw_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_CookieLaw_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_CookieLaw_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3d45cd9e_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_CookieLaw_vue__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(84);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(39)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_CookieLaw_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3d45cd9e_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_CookieLaw_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3d45cd9e_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_CookieLaw_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/CookieLaw.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3d45cd9e", Component.options)
  } else {
    hotAPI.reload("data-v-3d45cd9e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(40);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(42)("b913e876", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":false}!../../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./CookieLaw.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":false}!../../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./CookieLaw.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(41)(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/icon?family=Material+Icons);", ""]);

// module
exports.push([module.i, "\n.Cookie {\n  position: fixed;\n  overflow: hidden;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  z-index: 9999;\n  width: 100%;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n.Cookie > * {\n    margin: 0.9375rem 0;\n    -ms-flex-item-align: center;\n        align-self: center;\n}\n@media screen and (min-width: 48rem) {\n.Cookie {\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-flow: row;\n              flex-flow: row;\n}\n.Cookie > * {\n        margin: 0;\n}\n}\n.Cookie--top {\n  top: 0;\n  left: 0;\n  right: 0;\n}\n.Cookie--bottom {\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.Cookie__buttons {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n.Cookie__buttons > * {\n    margin: 0.3125rem 0;\n}\n@media screen and (min-width: 48rem) {\n.Cookie__buttons {\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n}\n.Cookie__buttons > * {\n        margin: 0 0.9375rem;\n}\n}\n.Cookie__buttons > div:nth-child(4) > button {\n  margin: 0 !important;\n}\n.Cookie__button {\n  cursor: pointer;\n  -ms-flex-item-align: center;\n      align-self: center;\n}\n.Cookie_checkbox {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.Cookie_header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 20px 0;\n  -webkit-box-align: baseline;\n      -ms-flex-align: baseline;\n          align-items: baseline;\n}\n.Cookie-tab a {\n  font-size: 12px !important;\n  height: 40px;\n}\n.Cookie-show-more {\n  position: relative;\n  bottom: 10px;\n}\n.Cookie-tab .tabs__items {\n  overflow-y: visible;\n  height: 100px;\n}\n.Cookie-active-tab {\n  background-color: rgba(0, 0, 0, 0.12) !important;\n  text-shadow: none;\n}\n.Cookie--base {\n  background: #f1f1f1;\n  color: #232323;\n  padding: 1.25em;\n}\n.Cookie--base .Cookie__button {\n    background: #97d058 !important;\n    padding: 0 3.125em;\n    color: #fff;\n    border-radius: 0;\n}\n.Cookie--base .Cookie__button:hover {\n      background: #7ebf36;\n}\n.Cookie--base--rounded {\n  background: #f1f1f1;\n  color: #232323;\n  padding: 1.25em;\n}\n.Cookie--base--rounded .Cookie__button {\n    background: #97d058 !important;\n    padding: 0 3.125em;\n    color: #fff;\n    border-radius: 20px;\n}\n.Cookie--base--rounded .Cookie__button:hover {\n      background: #7ebf36;\n}\n.Cookie--blood-orange {\n  background: #424851;\n  color: #fff;\n  padding: 1.25em;\n}\n.Cookie--blood-orange .Cookie__button {\n    background: #ad2624 !important;\n    padding: 0 3.125em;\n    color: #fff;\n    border-radius: 0;\n}\n.Cookie--blood-orange .Cookie__button:hover {\n      background: #831d1b;\n}\n.Cookie--blood-orange--rounded {\n  background: #424851;\n  color: #fff;\n  padding: 1.25em;\n}\n.Cookie--blood-orange--rounded .Cookie__button {\n    background: #e76a68 !important;\n    padding: 0 3.125em;\n    color: #fff;\n    border-radius: 20px;\n}\n.Cookie--blood-orange--rounded .Cookie__button:hover {\n      background: #e03f3c;\n}\n.Cookie--dark-lime {\n  background: #424851;\n  color: #fff;\n  padding: 1.25em;\n}\n.Cookie--dark-lime .Cookie__button {\n    background: #97d058 !important;\n    padding: 0 3.125em;\n    color: #fff;\n    border-radius: 0;\n}\n.Cookie--dark-lime .Cookie__button:hover {\n      background: #7ebf36;\n}\n.Cookie--dark-lime--rounded {\n  background: #424851;\n  color: #fff;\n  padding: 1.25em;\n}\n.Cookie--dark-lime--rounded .Cookie__button {\n    background: #97d058 !important;\n    padding: 0 3.125em;\n    color: #fff;\n    border-radius: 20px;\n}\n.Cookie--dark-lime--rounded .Cookie__button:hover {\n      background: #7ebf36;\n}\n.Cookie--royal {\n  background: #fbc227;\n  color: #232323;\n  padding: 1.25em;\n}\n.Cookie--royal .Cookie__button {\n    background: #726cea !important;\n    padding: 0 3.125em;\n    color: #fff;\n    border-radius: 0;\n}\n.Cookie--royal .Cookie__button:hover {\n      background: #473fe4;\n}\n.Cookie--royal--rounded {\n  background: #fbc227;\n  color: #232323;\n  padding: 1.25em;\n}\n.Cookie--royal--rounded .Cookie__button {\n    background: #726cea !important;\n    padding: 0 3.125em;\n    color: #fff;\n    border-radius: 20px;\n}\n.Cookie--royal--rounded .Cookie__button:hover {\n      background: #473fe4;\n}\n.slideFromTop-enter,\n.slideFromTop-leave-to {\n  -webkit-transform: translate(0px, -12.5em);\n          transform: translate(0px, -12.5em);\n}\n.slideFromTop-enter-to,\n.slideFromTop-leave {\n  -webkit-transform: translate(0px, 0px);\n          transform: translate(0px, 0px);\n}\n.slideFromBottom-enter,\n.slideFromBottom-leave-to {\n  -webkit-transform: translate(0px, 12.5em);\n          transform: translate(0px, 12.5em);\n}\n.slideFromBottom-enter-to,\n.slideFromBottom-leave {\n  -webkit-transform: translate(0px, 0px);\n          transform: translate(0px, 0px);\n}\n.slideFromBottom-enter-active,\n.slideFromBottom-leave-active,\n.slideFromTop-enter-active,\n.slideFromTop-leave-active {\n  -webkit-transition: -webkit-transform 0.4s ease-in;\n  transition: -webkit-transform 0.4s ease-in;\n  transition: transform 0.4s ease-in;\n  transition: transform 0.4s ease-in, -webkit-transform 0.4s ease-in;\n}\n.fade-enter-active,\n.fade-leave-active {\n  -webkit-transition: opacity 0.5s;\n  transition: opacity 0.5s;\n}\n.fade-enter,\n.fade-leave-to {\n  opacity: 0;\n}\n", ""]);

// exports


/***/ }),
/* 41 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(43)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 43 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(45), __esModule: true };

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(1);
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(47), __esModule: true };

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(48);
module.exports = __webpack_require__(1).Object.keys;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(28);
var $keys = __webpack_require__(10);

__webpack_require__(53)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(30);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(3);
var toLength = __webpack_require__(51);
var toAbsoluteIndex = __webpack_require__(52);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(16);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(16);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(20);
var core = __webpack_require__(1);
var fails = __webpack_require__(9);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(55);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(57);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(69);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(58), __esModule: true };

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(59);
__webpack_require__(65);
module.exports = __webpack_require__(24).f('iterator');


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(60)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(33)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(16);
var defined = __webpack_require__(15);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(35);
var descriptor = __webpack_require__(14);
var setToStringTag = __webpack_require__(23);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(4)(IteratorPrototype, __webpack_require__(7)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(5);
var anObject = __webpack_require__(13);
var getKeys = __webpack_require__(10);

module.exports = __webpack_require__(6) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(0).document;
module.exports = document && document.documentElement;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(2);
var toObject = __webpack_require__(28);
var IE_PROTO = __webpack_require__(17)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(66);
var global = __webpack_require__(0);
var hide = __webpack_require__(4);
var Iterators = __webpack_require__(22);
var TO_STRING_TAG = __webpack_require__(7)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(67);
var step = __webpack_require__(68);
var Iterators = __webpack_require__(22);
var toIObject = __webpack_require__(3);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(33)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(70), __esModule: true };

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(71);
__webpack_require__(77);
__webpack_require__(78);
__webpack_require__(79);
module.exports = __webpack_require__(1).Symbol;


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(0);
var has = __webpack_require__(2);
var DESCRIPTORS = __webpack_require__(6);
var $export = __webpack_require__(20);
var redefine = __webpack_require__(34);
var META = __webpack_require__(72).KEY;
var $fails = __webpack_require__(9);
var shared = __webpack_require__(18);
var setToStringTag = __webpack_require__(23);
var uid = __webpack_require__(12);
var wks = __webpack_require__(7);
var wksExt = __webpack_require__(24);
var wksDefine = __webpack_require__(25);
var enumKeys = __webpack_require__(73);
var isArray = __webpack_require__(74);
var anObject = __webpack_require__(13);
var isObject = __webpack_require__(8);
var toIObject = __webpack_require__(3);
var toPrimitive = __webpack_require__(21);
var createDesc = __webpack_require__(14);
var _create = __webpack_require__(35);
var gOPNExt = __webpack_require__(75);
var $GOPD = __webpack_require__(76);
var $DP = __webpack_require__(5);
var $keys = __webpack_require__(10);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(37).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(26).f = $propertyIsEnumerable;
  __webpack_require__(36).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(11)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(4)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(12)('meta');
var isObject = __webpack_require__(8);
var has = __webpack_require__(2);
var setDesc = __webpack_require__(5).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(9)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(10);
var gOPS = __webpack_require__(36);
var pIE = __webpack_require__(26);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(30);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(3);
var gOPN = __webpack_require__(37).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(26);
var createDesc = __webpack_require__(14);
var toIObject = __webpack_require__(3);
var toPrimitive = __webpack_require__(21);
var has = __webpack_require__(2);
var IE8_DOM_DEFINE = __webpack_require__(31);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(6) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 77 */
/***/ (function(module, exports) {



/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(25)('asyncIterator');


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(25)('observable');


/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEnabled", function() { return isEnabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAll", function() { return getAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRaw", function() { return getRaw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setRaw", function() { return setRaw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCookieEnabled", function() { return isEnabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCookie", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllCookies", function() { return getAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCookie", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRawCookie", function() { return getRaw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setRawCookie", function() { return setRaw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeCookie", function() { return remove; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(81);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };



// Check if the browser cookie is enabled.
function isEnabled() {
  var key = '@key@';
  var value = '1';
  var re = new RegExp('(?:^|; )' + key + '=' + value + '(?:;|$)');

  document.cookie = key + '=' + value;

  var enabled = re.test(document.cookie);

  if (enabled) {
    // eslint-disable-next-line
    remove(key);
  }

  return enabled;
}

// Get the cookie value by key.
function get(key) {
  var decoder = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : decodeURIComponent;

  if (typeof key !== 'string' || !key) {
    return null;
  }

  var reKey = new RegExp('(?:^|; )' + Object(__WEBPACK_IMPORTED_MODULE_0__util__["b" /* escapeRe */])(key) + '(?:=([^;]*))?(?:;|$)');
  var match = reKey.exec(document.cookie);

  if (match === null) {
    return null;
  }

  return typeof decoder === 'function' ? decoder(match[1]) : match[1];
}

// The all cookies
function getAll() {
  var decoder = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : decodeURIComponent;

  var reKey = /(?:^|; )([^=]+?)(?:=([^;]*))?(?:;|$)/g;
  var cookies = {};
  var match = void 0;

  /* eslint-disable no-cond-assign */
  while (match = reKey.exec(document.cookie)) {
    reKey.lastIndex = match.index + match.length - 1;
    cookies[match[1]] = typeof decoder === 'function' ? decoder(match[2]) : match[2];
  }

  return cookies;
}

// Set a cookie.
function set(key, value) {
  var encoder = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : encodeURIComponent;
  var attrs = arguments[3];

  if ((typeof encoder === 'undefined' ? 'undefined' : _typeof(encoder)) === 'object' && encoder !== null) {
    /* eslint-disable no-param-reassign */
    attrs = encoder;
    encoder = encodeURIComponent;
    /* eslint-enable no-param-reassign */
  }
  var attrsStr = Object(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* convert */])(attrs || {});
  var valueStr = typeof encoder === 'function' ? encoder(value) : value;
  var newCookie = key + '=' + valueStr + attrsStr;
  document.cookie = newCookie;
}

// Remove a cookie by the specified key.
function remove(key, options) {
  var opts = { expires: -1 };

  if (options && options.domain) {
    opts.domain = options.domain;
  }

  return set(key, 'a', opts);
}

// Get the cookie's value without decoding.
function getRaw(key) {
  return get(key, null);
}

// Set a cookie without encoding the value.
function setRaw(key, value, opts) {
  return set(key, value, null, opts);
}



/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export hasOwn */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return escapeRe; });
/* unused harmony export computeExpires */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return convert; });
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function hasOwn(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

// Escape special characters.
function escapeRe(str) {
  return str.replace(/[.*+?^$|[\](){}\\-]/g, '\\$&');
}

// Return a future date by the given string.
function computeExpires(str) {
  var lastCh = str.charAt(str.length - 1);
  var value = parseInt(str, 10);
  var expires = new Date();

  switch (lastCh) {
    case 'Y':
      expires.setFullYear(expires.getFullYear() + value);break;
    case 'M':
      expires.setMonth(expires.getMonth() + value);break;
    case 'D':
      expires.setDate(expires.getDate() + value);break;
    case 'h':
      expires.setHours(expires.getHours() + value);break;
    case 'm':
      expires.setMinutes(expires.getMinutes() + value);break;
    case 's':
      expires.setSeconds(expires.getSeconds() + value);break;
    default:
      expires = new Date(str);
  }

  return expires;
}

// Convert an object to a cookie option string.
function convert(opts) {
  var res = '';

  // eslint-disable-next-line
  for (var key in opts) {
    if (hasOwn(opts, key)) {
      if (/^expires$/i.test(key)) {
        var expires = opts[key];

        if ((typeof expires === 'undefined' ? 'undefined' : _typeof(expires)) !== 'object') {
          expires += typeof expires === 'number' ? 'D' : '';
          expires = computeExpires(expires);
        }
        res += ';' + key + '=' + expires.toUTCString();
      } else if (/^secure$/.test(key)) {
        if (opts[key]) {
          res += ';' + key;
        }
      } else {
        res += ';' + key + '=' + opts[key];
      }
    }
  }

  if (!hasOwn(opts, 'path')) {
    res += ';path=/';
  }

  return res;
}



/***/ }),
/* 82 */
/***/ (function(module, exports) {

module.exports = {"Necessary":[{"Name":"CookieConsent","Provider":"www.hollertag.com","Purpose":"Stores the user's cookie consent state for the current domain","Expiry":"1 year","Type":"HTTP"}],"Statistics":[{"Name":"_dc_gtm_UA-#  ","Provider":"www.hollertag.com","Purpose":"Used by Google Tag Manager to control the loading of a Google Analytics script tag.","Expiry":"Session","Type":"HTTP"},{"Name":"_ga","Provider":"www.hollertag.com","Purpose":"Registers a unique ID that is used to generate statistical data on how the visitor uses the website.","Expiry":"2 Years","Type":"HTTP"},{"Name":"_gid","Provider":"www.hollertag.com","Purpose":"Registers a unique ID that is used to generate statistical data on how the visitor uses the website.","Expiry":"Session","Type":"HTTP"},{"Name":"fr","Provider":"facebook.com","Purpose":"Used by Facebook to deliver a series of advertisement products such as real time bidding from third party advertisers.","Expiry":"3 months","Type":"HTTP"},{"Name":"tr","Provider":"facebook.com","Purpose":"Used by Facebook to deliver a series of advertisement products such as real time bidding from third party advertisers.","Expiry":"Session","Type":"Pixel"}],"Unclassified":[],"Flag":[{"Name":"ads/ga-audiences","Provider":"google.com","Purpose":"Used by Google AdWords to re-engage visitors that are likely to convert to customers based on the visitor's online behaviour across websites.","Expiry":"Session","Type":"Pixel"},{"Name":"ads/user-lists/#","Provider":"google.com","Purpose":"Used by Google AdWords to re-engage visitors across the web in ad groups","Expiry":"Session","Type":"Pixel"},{"Name":"NID","Provider":"google.com","Purpose":"Registers a unique ID that identifies a returning user's device. The ID is used for targeted ads.","Expiry":"6 months","Type":"HTTP"}]}

/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("transition", { attrs: { appear: "", name: _vm.transitionName } }, [
    _vm.isOpen
      ? _c(
          "div",
          {
            staticClass: "Cookie",
            class: [_vm.containerPosition, _vm.cookieTheme]
          },
          [
            _c(
              "v-layout",
              { staticClass: "Cookie_header" },
              [
                _c(
                  "v-flex",
                  { staticClass: "text-xs-left Cookie__content" },
                  [_vm._t("message", [_vm._v(_vm._s(_vm.message))])],
                  2
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "Cookie_checkbox" },
              [
                _c(
                  "v-layout",
                  { staticClass: "Cookie__buttons", attrs: { row: "" } },
                  [
                    _c(
                      "v-flex",
                      { attrs: { xs1: "" } },
                      [
                        _c("v-checkbox", {
                          staticClass: "text--white",
                          attrs: {
                            dark: "",
                            disabled: "",
                            label: "Necessary",
                            value: "Necessary"
                          },
                          model: {
                            value: _vm.selected,
                            callback: function($$v) {
                              _vm.selected = $$v
                            },
                            expression: "selected"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-flex",
                      { attrs: { xs1: "" } },
                      [
                        _c("v-checkbox", {
                          staticClass: "text--white",
                          attrs: {
                            dark: "",
                            label: "Statistics",
                            value: "Statistics"
                          },
                          model: {
                            value: _vm.selected,
                            callback: function($$v) {
                              _vm.selected = $$v
                            },
                            expression: "selected"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-flex",
                      { staticClass: "mr-0", attrs: { xs1: "" } },
                      [
                        _c("v-checkbox", {
                          staticClass: "text--white",
                          attrs: { dark: "", label: "Others", value: "Others" },
                          model: {
                            value: _vm.selected,
                            callback: function($$v) {
                              _vm.selected = $$v
                            },
                            expression: "selected"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-flex",
                      { staticClass: "mt-3", attrs: { xs1: "" } },
                      [
                        _c(
                          "v-btn",
                          {
                            attrs: { dark: "", flat: "", small: "" },
                            on: {
                              click: function($event) {
                                $event.stopPropagation()
                                _vm.showMore = !_vm.showMore
                              }
                            }
                          },
                          [
                            _vm._v("Show More"),
                            _vm.showMore
                              ? _c("v-icon", { attrs: { dark: "" } }, [
                                  _vm._v("mdi-chevron-up")
                                ])
                              : !_vm.showMore
                                ? _c("v-icon", { attrs: { dark: "" } }, [
                                    _vm._v("mdi-chevron-down")
                                  ])
                                : _vm._e()
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-flex",
                      { staticClass: "text-xs-right mt-3" },
                      [
                        _c(
                          "v-btn",
                          {
                            staticClass: "ma-0",
                            class: _vm.buttonClass,
                            attrs: { depressed: "" },
                            on: { click: _vm.accept }
                          },
                          [_vm._v(_vm._s(_vm.buttonText))]
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _vm.showMore
              ? _c(
                  "v-layout",
                  { staticClass: "Cookie-show-more px-3", attrs: { row: "" } },
                  [
                    _c(
                      "v-flex",
                      { staticClass: "px-3" },
                      [
                        _c(
                          "v-tabs",
                          {
                            staticClass: "Cookie-tab",
                            attrs: { dark: "" },
                            model: {
                              value: _vm.showMoreTab,
                              callback: function($$v) {
                                _vm.showMoreTab = $$v
                              },
                              expression: "showMoreTab"
                            }
                          },
                          [
                            _c(
                              "v-tab",
                              {
                                key: "0",
                                attrs: {
                                  "active-class": "Cookie-active-tab",
                                  ripple: ""
                                }
                              },
                              [_c("strong", [_vm._v("Cookie Declaration")])]
                            ),
                            _vm._v(" "),
                            _c(
                              "v-tab",
                              {
                                key: "1",
                                attrs: {
                                  "active-class": "Cookie-active-tab",
                                  ripple: ""
                                }
                              },
                              [_c("strong", [_vm._v("About Cookie")])]
                            ),
                            _vm._v(" "),
                            _c(
                              "v-tab-item",
                              { key: "0" },
                              [
                                _c(
                                  "v-card",
                                  {
                                    staticClass: "d-flex",
                                    attrs: { flat: "", dark: "" }
                                  },
                                  [
                                    _c(
                                      "v-flex",
                                      { attrs: { xs1: "" } },
                                      [
                                        _c(
                                          "v-list",
                                          {
                                            staticClass: "pt-0",
                                            attrs: { dense: "" }
                                          },
                                          _vm._l(
                                            _vm.cookieDecalration,
                                            function(item) {
                                              return _c(
                                                "v-list-tile",
                                                {
                                                  key: item,
                                                  class: {
                                                    "Cookie-active-tab":
                                                      _vm.cookieTabClicked ===
                                                      item
                                                  },
                                                  attrs: { ripple: "" },
                                                  on: {
                                                    click: function($event) {
                                                      _vm.cookieTab(item)
                                                    }
                                                  }
                                                },
                                                [
                                                  _vm._v(
                                                    " " + _vm._s(item) + " "
                                                  )
                                                ]
                                              )
                                            }
                                          )
                                        )
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _vm.cookieTabClicked === "Necessary"
                                      ? _c(
                                          "v-flex",
                                          {
                                            staticClass:
                                              "text-xs-left pa-2 caption"
                                          },
                                          [
                                            _vm._v(
                                              "\n                  These cookies are necessary for the Website to function and cannot be turned off in our systems. They are usually only set in response to actions made by you which amount to a request for information or services, such as logging in or filling in forms on our Website. You can set your browser to block or alert you about these cookies, but some parts of the Website will not then work. These cookies do not store any personally identifiable information.\n                  "
                                            ),
                                            _c("div", { staticClass: "py-2" }),
                                            _vm._v(" "),
                                            _c("v-data-table", {
                                              staticClass: "elevation-5",
                                              attrs: {
                                                "hide-actions": "",
                                                headers: _vm.headers,
                                                items:
                                                  _vm.cookieLicenceJson
                                                    .Necessary
                                              },
                                              scopedSlots: _vm._u([
                                                {
                                                  key: "items",
                                                  fn: function(props) {
                                                    return [
                                                      _c("td", [
                                                        _vm._v(
                                                          _vm._s(
                                                            props.item.Name
                                                          )
                                                        )
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("td", [
                                                        _vm._v(
                                                          _vm._s(
                                                            props.item.Provider
                                                          )
                                                        )
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("td", [
                                                        _vm._v(
                                                          _vm._s(
                                                            props.item.Purpose
                                                          )
                                                        )
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("td", [
                                                        _vm._v(
                                                          _vm._s(
                                                            props.item.Expiry
                                                          )
                                                        )
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("td", [
                                                        _vm._v(
                                                          _vm._s(
                                                            props.item.Type
                                                          )
                                                        )
                                                      ])
                                                    ]
                                                  }
                                                }
                                              ])
                                            })
                                          ],
                                          1
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.cookieTabClicked === "Statistics"
                                      ? _c(
                                          "v-flex",
                                          {
                                            staticClass:
                                              "text-xs-left pa-2 caption"
                                          },
                                          [
                                            _c("p", [
                                              _vm._v(
                                                "\n                    These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other websites. They do not store directly personal information, but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising.\n                  "
                                              )
                                            ]),
                                            _vm._v(" "),
                                            _c("div", { staticClass: "py-2" }),
                                            _vm._v(" "),
                                            _c("v-data-table", {
                                              staticClass: "elevation-5",
                                              attrs: {
                                                "hide-actions": "",
                                                headers: _vm.headers,
                                                items:
                                                  _vm.cookieLicenceJson
                                                    .Statistics
                                              },
                                              scopedSlots: _vm._u([
                                                {
                                                  key: "items",
                                                  fn: function(props) {
                                                    return [
                                                      _c("td", [
                                                        _vm._v(
                                                          _vm._s(
                                                            props.item.Name
                                                          )
                                                        )
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("td", [
                                                        _vm._v(
                                                          _vm._s(
                                                            props.item.Provider
                                                          )
                                                        )
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("td", [
                                                        _vm._v(
                                                          _vm._s(
                                                            props.item.Purpose
                                                          )
                                                        )
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("td", [
                                                        _vm._v(
                                                          _vm._s(
                                                            props.item.Expiry
                                                          )
                                                        )
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("td", [
                                                        _vm._v(
                                                          _vm._s(
                                                            props.item.Type
                                                          )
                                                        )
                                                      ])
                                                    ]
                                                  }
                                                }
                                              ])
                                            })
                                          ],
                                          1
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.cookieTabClicked === "Others"
                                      ? _c(
                                          "v-flex",
                                          {
                                            staticClass:
                                              "text-xs-left pa-2 caption"
                                          },
                                          [
                                            _c("p", [
                                              _vm._v(
                                                "\n                    Unclassified cookies are cookies that we are in the process of classifying, together with the providers of individual cookies.\n                  "
                                              )
                                            ]),
                                            _vm._v(" "),
                                            _c("div", { staticClass: "py-2" }),
                                            _vm._v(" "),
                                            _c("v-data-table", {
                                              staticClass: "elevation-5",
                                              attrs: {
                                                "hide-actions": "",
                                                headers: _vm.headers,
                                                items:
                                                  _vm.cookieLicenceJson
                                                    .Unclassified
                                              },
                                              scopedSlots: _vm._u([
                                                {
                                                  key: "items",
                                                  fn: function(props) {
                                                    return [
                                                      _c("td", [
                                                        _vm._v(
                                                          _vm._s(
                                                            props.item.Name
                                                          )
                                                        )
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("td", [
                                                        _vm._v(
                                                          _vm._s(
                                                            props.item.Provider
                                                          )
                                                        )
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("td", [
                                                        _vm._v(
                                                          _vm._s(
                                                            props.item.Purpose
                                                          )
                                                        )
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("td", [
                                                        _vm._v(
                                                          _vm._s(
                                                            props.item.Expiry
                                                          )
                                                        )
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("td", [
                                                        _vm._v(
                                                          _vm._s(
                                                            props.item.Type
                                                          )
                                                        )
                                                      ])
                                                    ]
                                                  }
                                                }
                                              ])
                                            })
                                          ],
                                          1
                                        )
                                      : _vm._e()
                                  ],
                                  1
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "v-tab-item",
                              { key: "1" },
                              [
                                _c(
                                  "v-card",
                                  { attrs: { flat: "" } },
                                  [
                                    _c(
                                      "v-card-text",
                                      {
                                        staticClass: "text-xs-left caption pt-0"
                                      },
                                      [
                                        _c("v-flex", { staticClass: "py-2" }, [
                                          _c("p", [
                                            _vm._v(
                                              "Cookies are small text files that can be used by websites to make a user's experience more efficient."
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("p", [
                                            _vm._v(
                                              "The law states that we can store cookies on your device if they are strictly necessary for the operation of this site. For all other types of cookies we need your permission."
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("p", [
                                            _vm._v(
                                              "This site uses different types of cookies. Some cookies are placed by third party services that appear on our pages."
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("p", [
                                            _vm._v(
                                              "You can at any time change or withdraw your consent from the Cookie Declaration on our website."
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("p", [
                                            _vm._v(
                                              "Learn more about who we are, how you can contact us and how we process personal data in our Privacy Policy."
                                            )
                                          ])
                                        ])
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              : _vm._e()
          ],
          1
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3d45cd9e", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = normalizeComponent;
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  scriptExports = scriptExports || {}

  // ES6 modules interop
  var type = typeof scriptExports.default
  if (type === 'object' || type === 'function') {
    scriptExports = scriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })
/******/ ]);
});