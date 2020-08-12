// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"models/Other/FLower.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Flower = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Flower = /*#__PURE__*/function () {
  function Flower(title, price, image) {
    _classCallCheck(this, Flower);

    this.quantity = 1;
    this.title = title;
    this.price = price;
    this.image = image;
    this.id = "f".concat((~~(Math.random() * 1e8)).toString(16));
  }

  _createClass(Flower, [{
    key: "renderFlo",
    get: function get() {
      return "\n            <section class=\"product-item\">\n                <img src = '".concat(this.image, "' alt='").concat(this.title, "'></img>\n                    <h1 class=\"product-title\">").concat(this.title, "</h1>\n                    <div class=\"product-info\">\n                        <span>\n                            <strong>\n                                ").concat(this.price, " UAH\n                            </strong>\n                        </span>\n                        <span>\n                            <button class=\"buy-btn\" data-id='").concat(this.id, "'>BUY</button>\n                        </span>\n                    </div>\n            </section>\n        ");
    }
  }]);

  return Flower;
}();

exports.Flower = Flower;
},{}],"models/Other/CartFlower.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CartFlower = void 0;

var _ = require("./");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CartFlower = function CartFlower() {
  _classCallCheck(this, CartFlower);
};

exports.CartFlower = CartFlower;
},{"./":"models/Other/index.js"}],"models/Other/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Flower", {
  enumerable: true,
  get: function () {
    return _FLower.Flower;
  }
});
Object.defineProperty(exports, "CartFlower", {
  enumerable: true,
  get: function () {
    return _CartFlower.CartFlower;
  }
});

var _FLower = require("./FLower");

var _CartFlower = require("./CartFlower");
},{"./FLower":"models/Other/FLower.js","./CartFlower":"models/Other/CartFlower.js"}],"models/Shop/Catalog.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Catalog = void 0;

var _Other = require("../Other");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to get private field on non-instance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

var _products = new WeakMap();

var Catalog = /*#__PURE__*/function () {
  function Catalog() {
    _classCallCheck(this, Catalog);

    _products.set(this, {
      writable: true,
      value: []
    });
  }

  _createClass(Catalog, [{
    key: "loadProducts",
    value: function loadProducts() {
      for (var i = 0; i < 20; i++) {
        var price = Math.round(Math.random() * 150);

        _classPrivateFieldGet(this, _products).push(new _Other.Flower('Flower' + " " + (i + 1), price, "https://findicons.com/files/icons/1243/hello_kitty/256/flowers.png"));
      }
    }
  }, {
    key: "getProductById",
    value: function getProductById(id) {
      return _classPrivateFieldGet(this, _products).find(function (p) {
        return p.id === id;
      });
    }
  }, {
    key: "productsRender",
    get: function get() {
      var htmlt = _classPrivateFieldGet(this, _products).reduce(function (html, p) {
        return html + p.renderFlo;
      }, '');

      return htmlt;
    }
  }]);

  return Catalog;
}();

exports.Catalog = Catalog;
},{"../Other":"models/Other/index.js"}],"models/Shop/Cart.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Cart = void 0;

var _Other = require("../Other/");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to get private field on non-instance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

var _products = new WeakMap();

var _events = new WeakMap();

var Cart = /*#__PURE__*/function (_Flower) {
  _inherits(Cart, _Flower);

  var _super = _createSuper(Cart);

  function Cart() {
    var _this;

    _classCallCheck(this, Cart);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _products.set(_assertThisInitialized(_this), {
      writable: true,
      value: []
    });

    _events.set(_assertThisInitialized(_this), {
      writable: true,
      value: {}
    });

    return _this;
  }

  _createClass(Cart, [{
    key: "loadCart",
    value: function loadCart() {
      TODO;
    }
  }, {
    key: "on",
    value: function on(eventName, listener) {
      if (!_classPrivateFieldGet(this, _events).hasOwnProperty(eventName)) {
        _classPrivateFieldGet(this, _events)[eventName] = [listener];
      } else {
        _classPrivateFieldGet(this, _events)[eventName].push(listener);
      }
    }
  }, {
    key: "addFlowerToCart",
    value: function addFlowerToCart(flower) {
      var _this2 = this;

      var flowerIndex = _classPrivateFieldGet(this, _products).findIndex(function (f) {
        return f.id === flower.id;
      });

      if (flowerIndex === -1) {
        _classPrivateFieldGet(this, _products).push(flower);

        console.log("Hi");
      } else {
        _classPrivateFieldGet(this, _products)[flowerIndex].quantity += 1;
        console.log("Hello");
      }

      _classPrivateFieldGet(this, _events).add.forEach(function (listener) {
        return listener(_this2.renderSmallCart);
      });
    }
  }, {
    key: "quantityInCart",
    get: function get() {
      console.log(_classPrivateFieldGet(this, _products).reduce(function (count, p) {
        return p.quantity + count;
      }, 0));
      return _classPrivateFieldGet(this, _products).reduce(function (count, p) {
        return p.quantity + count;
      }, 0);
    }
  }, {
    key: "totalPrice",
    get: function get() {
      return _classPrivateFieldGet(this, _products).reduce(function (price, p) {
        return price + p.quantity * p.price;
      }, 0);
    }
  }, {
    key: "renderSmallCart",
    get: function get() {
      return "<img src=\"./shopping-basket.png\" alt=\"\">\n        <stong> \n        Cart: </strong>(".concat(this.totalPrice, " UAH, ").concat(this.quantityInCart, " qt) ");
    }
  }, {
    key: "renerCart",
    get: function get() {}
  }]);

  return Cart;
}(_Other.Flower);

exports.Cart = Cart;
},{"../Other/":"models/Other/index.js"}],"models/Shop/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Catalog", {
  enumerable: true,
  get: function () {
    return _Catalog.Catalog;
  }
});
Object.defineProperty(exports, "Cart", {
  enumerable: true,
  get: function () {
    return _Cart.Cart;
  }
});

var _Catalog = require("./Catalog");

var _Cart = require("./Cart");
},{"./Catalog":"models/Shop/Catalog.js","./Cart":"models/Shop/Cart.js"}],"app.js":[function(require,module,exports) {
'use strict';

var _Shop = require("./models/Shop");

//containers
var productsContainer = document.querySelector('.product-container');
var smallCartContainer = document.querySelector('.small-cart'); //conteiners
//main

var cart = new _Shop.Cart();
var catalog = new _Shop.Catalog();
catalog.loadProducts();
productsContainer.innerHTML = catalog.productsRender;
smallCartContainer.innerHTML = cart.renderSmallCart; //main
//events

cart.on('add', function (html) {
  console.log('test 1');
  smallCartContainer.innerHTML = html;
});
cart.on('del', function () {});
cart.on('qch', function () {});
productsContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('buy-btn')) {
    var productId = e.target.getAttribute('data-id');
    var flower = catalog.getProductById(productId);
    console.log(flower);
    cart.addFlowerToCart(flower);
    console.log(cart.totalPrice);
  }
}); //events
},{"./models/Shop":"models/Shop/index.js"}],"../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "57201" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","app.js"], null)
//# sourceMappingURL=/app.c328ef1a.js.map