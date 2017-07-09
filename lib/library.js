(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Library", [], factory);
	else if(typeof exports === 'object')
		exports["Library"] = factory();
	else
		root["Library"] = factory();
})(this, function() {
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Breadcrumb = function () {
  function Breadcrumb() {
    _classCallCheck(this, Breadcrumb);

    this._name = 'Breadcrumb';
  }

  _createClass(Breadcrumb, [{
    key: 'name',
    get: function get() {
      return this._name;
    }
  }]);

  return Breadcrumb;
}();

exports.default = Breadcrumb;
module.exports = exports['default'];

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Menu = function () {
  function Menu() {
    _classCallCheck(this, Menu);
  }

  _createClass(Menu, [{
    key: 'childrenToTree',


    /**
     * Given a flast list of object and the id of
     * the root element it returns a tree
     * @param {0bject[]} items
     * @param {string} rootId
     * @return {Object}
     */
    value: function childrenToTree(items, rootId) {
      var _this = this;

      var tree = [];

      items.map(function (i) {
        if (i.parent.id === rootId && i.type === 'visible') {
          var children = _this.childrenToTree(items, i._doc);

          if (children.length) {
            i.children = children;
          }

          tree.push(i);
        }
      });
      return tree;
    }

    /**
     * Given an object with children stored under a children
     * key it returns an object with an additional path
     * property build with the slugs of the menu
     * items' targets, targets are sorted
     * @param {Object[]} items
     * @param {string} [path]
     * @return {Object}
     */

  }, {
    key: 'parse',
    value: function parse(items, path) {
      var _this2 = this;

      path = path || '';

      return items.map(function (i) {
        var keys = Object.keys(i);

        if (keys.indexOf(i.contentType) !== -1) {
          i.path = path + ('/' + i[i.contentType].slug);
        }

        if (keys.indexOf('children') !== -1) {
          var p = i.path;

          _this2.parse(i.children, p);

          if (keys.indexOf('ordering')) {
            i.children = _this2.sortBy(i.children, i.ordering);
          }
        }

        return i;
      });
    }

    /**
     * Given an array sorts it with the appropriate method
     * @param {Objec[]} items - array of objects
     * @param {string} method - order, reverse order, a-z, z-a
     * @return {Object[]} - sorted array
     * @todo perfect this method to sortBy by property e.g title or date(s), ...
     */

  }, {
    key: 'sortBy',
    value: function sortBy(items, method) {
      if (method === 'order' || method === 'reverse order') {
        items.sort(function (a, b) {
          return a.order - b.order;
        });
        return method === 'reverse order' ? items.reverse() : items;
      }

      if (method === 'a-z' || method === 'z-a') {
        items.sort(function (a, b) {
          var titleA = a.title.toLowerCase(),
              titleB = b.title.toLowerCase();

          if (titleA < titleB) return -1;
          if (titleA > titleB) return 1;
          return 0;
        });
        return method === 'z-a' ? items.reverse() : items;
      }

      return items;
    }

    /**
     * Given an array, a property and value removes any
     * matching elements. Returns a new array. 
     * @param {Object[]} array 
     * @param {string} property 
     * @param {*} value
     * @return {Object[]} 
     */

  }, {
    key: 'remove',
    value: function remove(array, property, value) {
      return array.filter(function (e) {
        return e[property] !== value;
      });
    }
  }]);

  return Menu;
}();

exports.default = Menu;
;
module.exports = exports['default'];

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Menu = exports.Breadcrumb = undefined;

var _menu = __webpack_require__(1);

var _menu2 = _interopRequireDefault(_menu);

var _breadcrumb = __webpack_require__(0);

var _breadcrumb2 = _interopRequireDefault(_breadcrumb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Breadcrumb = _breadcrumb2.default;
exports.Menu = _menu2.default;

/***/ })
/******/ ]);
});
//# sourceMappingURL=Library.js.map