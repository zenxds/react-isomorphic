(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

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

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 36);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("koa-swig");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.requestDetailData = exports.requestListData = undefined;

var _ActionTypes = __webpack_require__(6);

var types = _interopRequireWildcard(_ActionTypes);

var _api = __webpack_require__(26);

var _api2 = _interopRequireDefault(_api);

var _reduxActions = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var requestListData = exports.requestListData = (0, _reduxActions.createAction)(types.REQUEST_LIST_DATA, function () {
  return _api2.default.requestListData();
});

var requestDetailData = exports.requestDetailData = (0, _reduxActions.createAction)(types.REQUEST_DETAIL_DATA, function (id) {
  return _api2.default.requestDetailData(id);
});
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(requestListData, 'requestListData', '/Users/zenxds/repository/usee-node/app/actions/index.js');

  __REACT_HOT_LOADER__.register(requestDetailData, 'requestDetailData', '/Users/zenxds/repository/usee-node/app/actions/index.js');
}();

;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var REQUEST_LIST_DATA = exports.REQUEST_LIST_DATA = 'REQUEST_LIST_DATA';
var REQUEST_DETAIL_DATA = exports.REQUEST_DETAIL_DATA = 'REQUEST_DETAIL_DATA';
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(REQUEST_LIST_DATA, 'REQUEST_LIST_DATA', '/Users/zenxds/repository/usee-node/app/constants/ActionTypes.js');

  __REACT_HOT_LOADER__.register(REQUEST_DETAIL_DATA, 'REQUEST_DETAIL_DATA', '/Users/zenxds/repository/usee-node/app/constants/ActionTypes.js');
}();

;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("redux-actions");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(32);

var _reactRedux = __webpack_require__(2);

var _redux = __webpack_require__(3);

var _reactRouter = __webpack_require__(1);

var _routes = __webpack_require__(25);

var _routes2 = _interopRequireDefault(_routes);

var _configureStore = __webpack_require__(27);

var _configureStore2 = _interopRequireDefault(_configureStore);

var _koaSwig = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var template = _koaSwig.swig.compile('\n<!DOCTYPE html>\n<html>\n<head>\n    <meta charset="UTF-8">\n    <title></title>\n    <meta name="viewport" content="initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no">\n    <meta name="format-detection" content="telephone=no,address=no,email=no"/>\n    <meta name="apple-mobile-web-app-capable" content="yes"/>\n    <meta name="apple-mobile-web-app-status-bar-style" content="black"/>\n    <link rel="dns-prefetch" href="//g.alicdn.com" />\n    <link rel="dns-prefetch" href="//img.alicdn.com" />\n    <link rel="dns-prefetch" href="//gm.mmstat.com" />\n    <link rel="dns-prefetch" href="//log.mmstat.com" />\n    <script>\n      window.__INITIAL_STATE__ = {{ state | safe }};\n    </script>\n</head>\n<body>\n\n<div id="app">{{ renderString | safe }}</div>\n\n<script src="/bundle.js"></script>\n</body>\n</html>\n', {
  autoescape: true
});

module.exports = function (options) {

  return regeneratorRuntime.mark(function _callee(next) {
    var store, _ref, redirectLocation, renderProps, params, tasks, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, component, _tasks, renderString;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            store = (0, _configureStore2.default)();
            _context.next = 3;
            return _match({ routes: _routes2.default, location: this.url });

          case 3:
            _ref = _context.sent;
            redirectLocation = _ref.redirectLocation;
            renderProps = _ref.renderProps;

            if (!redirectLocation) {
              _context.next = 12;
              break;
            }

            _context.next = 9;
            return this.redirect(redirectLocation.pathname + redirectLocation.search);

          case 9:
            return _context.abrupt('return', _context.sent);

          case 12:
            if (renderProps) {
              _context.next = 16;
              break;
            }

            _context.next = 15;
            return next;

          case 15:
            return _context.abrupt('return', _context.sent);

          case 16:
            params = renderProps.params;
            tasks = [];
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            _context.prev = 21;


            for (_iterator = renderProps.components[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              component = _step.value;

              if (component && component.WrappedComponent && component.WrappedComponent.fetch) {
                _tasks = component.WrappedComponent.fetch(store.dispatch, params);

                if (Array.isArray(_tasks)) {
                  tasks = tasks.concat(_tasks);
                } else if (_tasks && _tasks.then) {
                  tasks.push(_tasks);
                }
              }
            }

            _context.next = 29;
            break;

          case 25:
            _context.prev = 25;
            _context.t0 = _context['catch'](21);
            _didIteratorError = true;
            _iteratorError = _context.t0;

          case 29:
            _context.prev = 29;
            _context.prev = 30;

            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }

          case 32:
            _context.prev = 32;

            if (!_didIteratorError) {
              _context.next = 35;
              break;
            }

            throw _iteratorError;

          case 35:
            return _context.finish(32);

          case 36:
            return _context.finish(29);

          case 37:
            _context.next = 39;
            return Promise.all(tasks);

          case 39:
            renderString = (0, _server.renderToString)(_react2.default.createElement(
              _reactRedux.Provider,
              { store: store },
              _react2.default.createElement(_reactRouter.RouterContext, renderProps)
            ));


            this.body = template({
              state: JSON.stringify(store.getState()),
              renderString: renderString
            });

          case 41:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[21, 25, 29, 37], [30,, 32, 36]]);
  });
};

function _match(location) {
  return new Promise(function (resolve, reject) {
    (0, _reactRouter.match)(location, function (error, redirectLocation, renderProps) {
      if (error) {
        reject(error);
      } else {
        resolve({
          redirectLocation: redirectLocation,
          renderProps: renderProps
        });
      }
    });
  });
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_match, '_match', '/Users/zenxds/repository/usee-node/server/middlewares/ssr-match.js');

  __REACT_HOT_LOADER__.register(template, 'template', '/Users/zenxds/repository/usee-node/server/middlewares/ssr-match.js');
}();

;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var router = __webpack_require__(31)();
var api = __webpack_require__(29);

/*
 * match all path
 */
router.get('/api/list.json', api.list);
router.get('/api/detail.json', api.detail);

module.exports = router.routes();
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(router, 'router', '/Users/zenxds/repository/usee-node/server/router.js');
}();

;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("config");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("koa-bodyparser");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("koa-json");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("koa-logger");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("koa-session");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("koa-static");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 18 */
/***/ (function(module, exports) {



/***/ }),
/* 19 */
/***/ (function(module, exports) {



/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _default2 = __webpack_require__(28);

var _default3 = _interopRequireDefault(_default2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var apis = {
  list: '/api/list.json',
  detail: '/api/detail.json'
};

if (true) {
  for (var key in apis) {
    apis[key] = 'http://127.0.0.1:' + _default3.default.port + apis[key];
  }
}

var _default = apis;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(apis, 'apis', '/Users/zenxds/repository/usee-node/app/constants/api.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/zenxds/repository/usee-node/app/constants/api.js');
}();

;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _reactRouter = __webpack_require__(1);

__webpack_require__(19);

__webpack_require__(18);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'app-container' },
        this.props.children
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }]);

  return App;
}(_react.Component);

App.propTypes = {};

var mapStateToProps = function mapStateToProps(state) {
  return state;
};

var _default = (0, _reactRedux.connect)(mapStateToProps)(App);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(App, 'App', '/Users/zenxds/repository/usee-node/app/containers/App.js');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/zenxds/repository/usee-node/app/containers/App.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/zenxds/repository/usee-node/app/containers/App.js');
}();

;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _reactRouter = __webpack_require__(1);

var _actions = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Detail = function (_Component) {
  _inherits(Detail, _Component);

  function Detail() {
    _classCallCheck(this, Detail);

    return _possibleConstructorReturn(this, (Detail.__proto__ || Object.getPrototypeOf(Detail)).apply(this, arguments));
  }

  _createClass(Detail, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var detail = this.props.detail;
      if (detail.id == this.props.params.id) {
        return;
      }

      this.constructor.fetch(this.props.dispatch, this.props.params);
    }
  }, {
    key: 'render',
    value: function render() {
      var detail = this.props.detail;
      return _react2.default.createElement(
        'div',
        { className: 'popular-container' },
        _react2.default.createElement(
          'div',
          { className: 'popular-title' },
          detail.title
        ),
        _react2.default.createElement(
          'p',
          { className: 'popular-reason' },
          detail.content
        ),
        _react2.default.createElement('img', { src: detail.thumdImage }),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            _reactRouter.Link,
            { to: '/' },
            '\u56DE\u5230\u5217\u8868'
          )
        )
      );
    }
  }], [{
    key: 'fetch',
    value: function fetch(dispatch, params) {
      return dispatch((0, _actions.requestDetailData)(params.id));
    }
  }]);

  return Detail;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return state;
};

var _default = (0, _reactRedux.connect)(mapStateToProps)(Detail);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Detail, 'Detail', '/Users/zenxds/repository/usee-node/app/containers/Detail.js');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/zenxds/repository/usee-node/app/containers/Detail.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/zenxds/repository/usee-node/app/containers/Detail.js');
}();

;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _reactRouter = __webpack_require__(1);

var _actions = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var List = function (_Component) {
  _inherits(List, _Component);

  function List() {
    _classCallCheck(this, List);

    return _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).apply(this, arguments));
  }

  _createClass(List, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.list.length) {
        return;
      }

      this.constructor.fetch(this.props.dispatch);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'popular-list' },
        this.props.list.map(function (item) {
          return _react2.default.createElement(
            _reactRouter.Link,
            { className: 'list-item', to: '/detail/' + item.contentId, key: item.contentId },
            _react2.default.createElement('img', { src: item.thumdImage, className: 'list-img' }),
            _react2.default.createElement(
              'div',
              { className: 'list-info' },
              _react2.default.createElement(
                'div',
                { className: 'list-title' },
                item.title
              ),
              _react2.default.createElement(
                'div',
                { className: 'list-reason' },
                item.content
              )
            )
          );
        })
      );
    }
  }], [{
    key: 'fetch',
    value: function fetch(dispatch) {
      return dispatch((0, _actions.requestListData)());
    }
  }]);

  return List;
}(_react.Component);

List.propTypes = {
  list: _react.PropTypes.array.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return state;
};

var _default = (0, _reactRedux.connect)(mapStateToProps)(List);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(List, 'List', '/Users/zenxds/repository/usee-node/app/containers/List.js');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/zenxds/repository/usee-node/app/containers/List.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/zenxds/repository/usee-node/app/containers/List.js');
}();

;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _handleActions;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _redux = __webpack_require__(3);

var _ActionTypes = __webpack_require__(6);

var types = _interopRequireWildcard(_ActionTypes);

var _reduxActions = __webpack_require__(7);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = (0, _reduxActions.handleActions)((_handleActions = {}, _defineProperty(_handleActions, types.REQUEST_LIST_DATA, function (state, action) {
  if (action.error) {
    return state;
  }

  return _extends({}, state, {
    list: action.payload
  });
}), _defineProperty(_handleActions, types.REQUEST_DETAIL_DATA, function (state, action) {
  if (action.error) {
    return state;
  }

  return _extends({}, state, {
    detail: action.payload
  });
}), _handleActions), {
  list: [],
  detail: {}
});

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/zenxds/repository/usee-node/app/reducers/index.js');
}();

;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(1);

var _App = __webpack_require__(21);

var _App2 = _interopRequireDefault(_App);

var _List = __webpack_require__(23);

var _List2 = _interopRequireDefault(_List);

var _Detail = __webpack_require__(22);

var _Detail2 = _interopRequireDefault(_Detail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _react2.default.createElement(
  _reactRouter.Router,
  { history: _reactRouter.browserHistory },
  _react2.default.createElement(
    _reactRouter.Route,
    { path: '/', component: _App2.default },
    _react2.default.createElement(_reactRouter.IndexRoute, { component: _List2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: 'detail/:id', component: _Detail2.default })
  )
);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/zenxds/repository/usee-node/app/routes.js');
}();

;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isomorphicFetch = __webpack_require__(30);

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _api = __webpack_require__(20);

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * api请求
 */
var _default = {
  requestListData: function requestListData() {
    return (0, _isomorphicFetch2.default)(_api2.default.list).then(function (response) {
      return response.json();
    }).then(function (response) {
      return response.result;
    });
  },
  requestDetailData: function requestDetailData(id) {
    return (0, _isomorphicFetch2.default)(_api2.default.detail + '?id=' + id).then(function (response) {
      return response.json();
    }).then(function (response) {
      return response.result;
    });
  }
};
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/zenxds/repository/usee-node/app/services/api.js');
}();

;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = configureStore;

var _redux = __webpack_require__(3);

var _reduxThunk = __webpack_require__(35);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxLogger = __webpack_require__(33);

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

var _reduxPromise = __webpack_require__(34);

var _reduxPromise2 = _interopRequireDefault(_reduxPromise);

var _reducers = __webpack_require__(24);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const middleware = process.env.NODE_ENV === 'production' ?
//   [ thunk, promise ] :
//   [ thunk, promise, logger() ]
var middleware = [_reduxThunk2.default, _reduxPromise2.default];

function configureStore(initialState) {
  var store = (0, _redux.createStore)(_reducers2.default, initialState, _redux.applyMiddleware.apply(undefined, middleware));
  return store;
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(configureStore, 'configureStore', '/Users/zenxds/repository/usee-node/app/store/configureStore.js');

  __REACT_HOT_LOADER__.register(middleware, 'middleware', '/Users/zenxds/repository/usee-node/app/store/configureStore.js');
}();

;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  keys: ['58f9014fb686fe9b6449f1769e37ec90a676e9c6'],
  port: 7001
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var data = [{
    "contentId": 326664,
    "thumdImage": "https://img.alicdn.com/imgextra/i2/1060815481/TB2V.JEd90jpuFjy0FlXXc0bpXa_!!0-mtopupload.jpg",
    "title": "美美春季装，你的轻盈仙女上线啦！",
    "content": "又到了万物复苏的春天了，仿佛一切美好都开始发酵。美美的春装已经开始不断上线了，终于可以脱下厚重的大衣，化身轻盈多姿，身材婀娜的小仙女啦，是不是对这个季节的爱又多了一分呢？都说小孩子不能输在起跑线上，我的小仙女们，你怎么甘心输在这一年的起跑线上呢？所以赶快整装待发，你爱的自己上线啦！"
}, {
    "contentId": 326662,
    "thumdImage": "https://img.alicdn.com/imgextra/i4/1060815481/TB2XU4CdYplpuFjSspiXXcdfFXa_!!2-mtopupload.png",
    "title": "美丽是你的权利，但必须取之有道",
    "content": "这不前几天在腾讯新闻上这么一件趣事，美国一名胖妞在一个月内竟然减去了210斤体重，让小编目瞪口呆，看完文章才发现原来她不是通过正规的运动减肥，而是在医院做了胃部切除手术，虽然她在短期减肥成功，但这是小编不提倡的，想要健康好身材必须要通过正规的运动来获得，否则危害健康，所以请收下侥幸，选好运动装备出发吧。"
}, {
    "contentId": 326661,
    "thumdImage": "https://img.alicdn.com/imgextra/i1/1060815481/TB23wUfeUhnpuFjSZFEXXX0PFXa_!!0-mtopupload.jpg",
    "title": "春天 你敢不敢和这样的装扮争艳",
    "content": "终于过完了漫长而寒冷的冬季，妹子们早就按耐不住脱下棉袄沐浴在春天的暖阳里，多么温暖。花儿开了，鸟儿叫了，草儿绿了，躲在闺房的年轻姑娘也出来了。它们想与春天比一比谁更美丽。今天小编要为菇娘们推荐潮流范儿的卫衣和多彩的衬衫，让你这个今年比春天还美丽啊。"
}, {
    "contentId": 326660,
    "thumdImage": "https://img.alicdn.com/imgextra/i2/1060815481/TB2Mfr1eHJmpuFjSZFwXXaE4VXa_!!0-mtopupload.jpg",
    "title": "过把混搭瘾 假两件怎么配都好看",
    "content": "年都过完了，妹子们是不是开始准备春装了呢？在这小编就要给大家推荐推荐下面10款假两件了~一件设计感十足的假两件可以告别普通穿搭，让你过把混搭瘾，上身瞬间就变得很有味道。换季时节，假两件衣柜里一定要备一件才安心哦～"
}, {
    "contentId": 326659,
    "thumdImage": "https://img.alicdn.com/imgextra/i4/1060815481/TB2RNdqd80lpuFjSszdXXcdxFXa_!!0-mtopupload.jpg",
    "title": "换季闹衣荒？套装穿搭最省心",
    "content": "又到换季时节，面对各种的春装轰炸，衣荒的妹子是不是眼睛都要挑花了呢？那么不妨试试套装啊~Ta从来都是一个好东西，准备好了一整套完美的搭配，省时省事~以下10款，优雅、职场、休闲、运动全都有，就等你穿啦~"
}, {
    "contentId": 326658,
    "thumdImage": "https://img.alicdn.com/imgextra/i2/1060815481/TB2JmIeeSFmpuFjSZFrXXayOXXa_!!2-mtopupload.png",
    "title": "厨房清洁小能手，get!",
    "content": "众所周知，厨房问题一向让人头痛，各种油渍与油垢的清洁都会让人心塞，还有很多锅碗瓢盆上长期累积而来的污垢也是十分让人痛苦，看着被油烟污染的墙壁也是十分不爽了，今天小编就是来送福利的了，有了这些各式各样清洁小能手，从此你的厨房生活也会变得十分愉悦了！"
}, {
    "contentId": 326657,
    "thumdImage": "https://img.alicdn.com/imgextra/i2/1060815481/TB2aPsdeS0mpuFjSZPiXXbssVXa_!!0-mtopupload.jpg",
    "title": "想在家中放松自己？试试这款家居服怎么样！",
    "content": "一天之中有一半时间是要呆在家中的，这时候选择一套舒适的睡衣就显得尤其重要了，因此如何能够让我们在家中有着舒适的穿着体验就取决于我们是否选择了一套真正合适的家居服啦，今天小编就为大家安利几款十分舒适的家居服，无论在家中活动还是睡觉都是十分不错的选择哦！"
}, {
    "contentId": 326656,
    "thumdImage": "https://img.alicdn.com/imgextra/i4/1060815481/TB2WEfzeJBopuFjSZPcXXc9EpXa_!!0-mtopupload.jpg",
    "title": "干燥的季节心烦意乱？让水杯来帮你！",
    "content": "随着初春的到来，天气是不是显得愈发干燥了呢？这时候补水就成为了我们的第一要务了！一个符合心意的可爱的水杯总是能够让我们时时刻刻记得喝水，让我们整个季节都元气满满哦！今天小编为大家安利几款超级超级棒，十分有个性的水杯，绝对满足你！"
}, {
    "contentId": 326655,
    "thumdImage": "https://img.alicdn.com/imgextra/i3/1060815481/TB2h.k8dR0kpuFjSsziXXa.oVXa_!!0-mtopupload.jpg",
    "title": "创意个性书架，找个理由邂逅书海吧",
    "content": "不得不说纸质书是最适合用来阅读的，无论是手感还是书香，都会令人沉醉在书的海洋里，都说&ldquo;书中自有黄金屋，书中自有颜如玉&rdquo;，在书中确实可以学到很多电子产品中学不到的东西。可是那么多的书放在哪里，小编为大家精心挑选了几款个性创意的书架，它既能帮你解决书本的盛放问题，还能为你的家居装饰增添几分美观。"
}, {
    "contentId": 326654,
    "thumdImage": "https://img.alicdn.com/imgextra/i3/1060815481/TB2QS3RdHBkpuFjy1zkXXbSpFXa_!!0-mtopupload.jpg",
    "title": "刷爆时尚圈的半身裙 总有小亮点",
    "content": "以包臀裙为代表的半身裙在勾勒女性曲线轮廓的同时，营造优雅、端庄的名媛小香风风格。而近来丝绒风琴褶裙那成簇的繁密纹路和点缀其中的金属光泽，同样姿态妖娆地令人炫目。因此，可以说，即使是司空见惯的半身裙，一旦与特定的面料和设计手法相组合，便能塑造出堪称惊艳的亮点，值得每一位爱好时装的姑娘珍藏。"
}, {
    "contentId": 326653,
    "thumdImage": "https://img.alicdn.com/imgextra/i3/1060815481/TB2qjRad88lpuFjSspaXXXJKpXa_!!0-mtopupload.jpg",
    "title": "春暖花开之季，夹克男闪亮登场之时",
    "content": "初春了，正是万物复苏的时候，一切都那么生机勃勃了，生机的季节对于我们男生来说当然要穿的帅帅的出门，你还在春天的季节穿着臃肿的棉衣出门吗？那也太low了吧，那么问题来了，怎么样在别人面前展现帅气和身形呢？那当然是看你穿啥衣服啦，小编为男生推荐帅男必备夹克，那一定是帅帅帅！"
}, {
    "contentId": 326652,
    "thumdImage": "https://img.alicdn.com/imgextra/i3/1060815481/TB2K3gSdMJlpuFjSspjXXcT.pXa_!!0-mtopupload.jpg",
    "title": "精美零食大礼包，承包你的味蕾",
    "content": "零食陪着一代又一代人长大了， 随着生活水平的慢慢提高，零食也在慢慢在升级。现在已经出现了精美版的零食大礼包了，里面全是各种美味的零食，有的还是进口的，对于口味挑剔的宝宝来说，也可以满足你的味蕾。无论是送女友还是送闺蜜都是不错的选择，宝宝们赶紧行动吧。"
}, {
    "contentId": 326651,
    "thumdImage": "https://img.alicdn.com/imgextra/i2/1060815481/TB2ndXkXutTMeFjSZFOXXaTiVXa_!!0-mtopupload.jpg",
    "title": "脸型不够小v？精美耳环帮你转移注意力",
    "content": "现在社会的审美对女生的要求还是挺高的，不仅要求肤白貌美，长胳膊小蛮腰，而且脸型也要足够小这样才会显得五官精致又立体。对于脸型不够小的宝宝们来说，就需要借助耳环来修饰啦，一副漂亮的耳环就可以转移别人对脸部的注意力，只要不细看我们依旧是&ldquo;小脸&rdquo;美女一枚嘛。"
}, {
    "contentId": 326650,
    "thumdImage": "https://img.alicdn.com/imgextra/i1/1060815481/TB2YT_eeS0mpuFjSZPiXXbssVXa_!!0-mtopupload.jpg",
    "title": "早春啦，又到一年外套上岗季",
    "content": "终于温度一天比一天高了，天气一天比一天好了，经常可以看到灿烂的蓝天。这个时候我们也该换下臃肿的羽绒服和棉服，换上薄一点但是又充满个性的外套了。搭配上不同的妆容，不同的裤子或裙子，轻轻松松又可演绎一春的时尚。"
}, {
    "contentId": 326649,
    "thumdImage": "https://img.alicdn.com/imgextra/i3/1060815481/TB2B4FiXutTMeFjSZFOXXaTiVXa_!!0-mtopupload.jpg",
    "title": "绝美卤味，开启深夜放毒模式",
    "content": "无论是正在减肥还是不减肥的宝宝们，本质上都是一个实打实的吃货。尤其是对于香辣可口的卤味绝对是减肥杀手，为了还击那些经常在朋友圈晒美食的筒子们，赶紧收下这些绝美的卤味吧，然后就可以天天晚上开启放毒模式，诱惑死他们，其实自己都是在白天吃的，享受到了美味又不会长胖哟！"
}, {
    "contentId": 326648,
    "thumdImage": "https://img.alicdn.com/imgextra/i2/1060815481/TB21hANdR8lpuFjy0FnXXcZyXXa_!!0-mtopupload.jpg",
    "title": "10款精致毛衣   让你成为现代白浅",
    "content": "相信大家最近都在追《三生三世十里桃花》，除了被剧情虐的不要不要以外，更是被女主的美貌所倾倒。我们都在梦想着能拥有想白浅一样倾国倾城的美貌。那么这个春天就得好好努力了，赶紧选几款适合自己的时尚范儿毛衣，化上淡妆，配上与毛衣相配的裤子和鞋子，我们就是春日里最美的现代白浅了。"
}, {
    "contentId": 326647,
    "thumdImage": "https://img.alicdn.com/imgextra/i3/1060815481/TB2zEqAeOpnpuFjSZFkXXc4ZpXa_!!0-mtopupload.jpg",
    "title": "别说自己不会生活，是你没选择好餐具！",
    "content": "即使是简单的生活，我们也可以过得有滋有味，吃饭当然也不例外，所以说美美的餐具当然就成为了我们很好的选择啦，今天小编就为大家安利几款十分有新意的餐具，每一款都十分的新颖别致，成为餐桌上一道亮丽的风景，听起来是不是就棒棒哒？赶紧和小编一起来看看吧！"
}, {
    "contentId": 326646,
    "thumdImage": "https://img.alicdn.com/imgextra/i2/1060815481/TB2DEH8dHJkpuFjy1zcXXa5FFXa_!!0-mtopupload.jpg",
    "title": "想要生活更有情调？你还需要这套餐具！",
    "content": "随着生活更加丰富多彩，我们对于生活品质、生活格调的需求也越来越高，因此，民以食为天的我们是不是也要提高我们餐桌上的格调呢？这样的话，一套好看的餐具就必不可少啦，今天小编就为大家安利一些超级超级棒的餐具，有了它们，是不是感觉生活是不是更多了一些色彩呢？"
}, {
    "contentId": 326645,
    "thumdImage": "https://img.alicdn.com/imgextra/i1/1060815481/TB21Tb5dHtlpuFjSspfXXXLUpXa_!!0-mtopupload.jpg",
    "title": "不吃早餐?  美味小零食拯救贪睡上班族",
    "content": "总有一些宝宝没有习惯吃早餐的习惯。久而久之身体容易出问题，所以说为了不在体检的时候发现身体出了些小毛病，现在开始一定要养成吃早餐的习惯。每天晚上临睡前在包包里准备一点可口的小零食，第二天就算快迟到了也可以吃到营养早餐啦，懒癌患者们赶紧准备去吧！"
}, {
    "contentId": 326644,
    "thumdImage": "https://img.alicdn.com/imgextra/i2/1060815481/TB2LCArdSFjpuFjSszhXXaBuVXa_!!0-mtopupload.jpg",
    "title": "健康舒适透气的内裤来一打",
    "content": "最常见的生活用品，内裤数其中之一，每天都要穿的贴身物品，所以呢，对于这种贴身的私人物品挑选的时候也得谨慎注意啦，这对身体有一定的影响，如果长期穿戴劣质的内裤，透气性差，那就会带来一系列的疾病隐患，特别是对于女性来说尤为注意，选对内裤就会减少一些疾病的发生，所以小编推荐以下几款舒适又透气的内裤。"
}, {
    "contentId": 326643,
    "thumdImage": "https://img.alicdn.com/imgextra/i4/1060815481/TB2sdv1dHBkpuFjy1zkXXbSpFXa_!!0-mtopupload.jpg",
    "title": "大长腿在冬眠吗？是时候唤醒它啦",
    "content": "冬天是一个苗条妹纸们们都很开心的季节了，因为衣服太厚根本看不到身材，无论是苗条还是丰满的彤彤裹得像熊一样。现在天气开始回暖了，那些冬眠的动物们已经慢慢苏醒了，姑凉们那一双双纤细的大长腿也该展现出来了，赶紧小短裙儿穿起来吧，迷倒一个又一个宅男。"
}, {
    "contentId": 326642,
    "thumdImage": "https://img.alicdn.com/imgextra/i3/1060815481/TB2FTGveUhnpuFjSZFEXXX0PFXa_!!0-mtopupload.jpg",
    "title": "情人节来点不一样，来一套内衣吧！",
    "content": "情人节即将到来，是不是开始纠结送女生什么礼物了呢？送巧克力？那太没有创意了。担心对方不喜欢？不如来一套内衣，相信对方绝对不会拒绝。情人节礼物选得好，能够让两个人的感情迅速升温。单身的妹子也完全可以买来送闺蜜，送自己哦。"
}, {
    "contentId": 326641,
    "thumdImage": "https://img.alicdn.com/imgextra/i4/1060815481/TB2BbmteHBmpuFjSZFAXXaQ0pXa_!!0-mtopupload.jpg",
    "title": "不一般的毛衣给不一般的你",
    "content": "早春依旧寒意袭人，虽然偶尔的阳光明媚，但是早上和晚上仍然是挺冷的。那么，就需要时尚又保暖的穿搭啦！所以，毛衣是首选。不过，不是什么毛衣我们都要穿的，要穿就要穿的不一般！你就是你，人间不一样的烟火！就要配上创意十足，超级个性的毛衣！所以，快快跟随小编来看一下这些意想不到的创意之作吧！"
}];

exports.list = regeneratorRuntime.mark(function _callee(next) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    this.body = {
                        result: data
                    };

                case 1:
                case "end":
                    return _context.stop();
            }
        }
    }, _callee, this);
});

exports.detail = regeneratorRuntime.mark(function _callee2(next) {
    var item, id;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
            switch (_context2.prev = _context2.next) {
                case 0:
                    item = void 0;
                    id = this.query.id;


                    data.forEach(function (d) {
                        if (d.contentId == id) {
                            item = d;
                        }
                    });

                    if (item) {
                        this.body = {
                            result: item
                        };
                    }

                case 4:
                case "end":
                    return _context2.stop();
            }
        }
    }, _callee2, this);
});
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(data, "data", "/Users/zenxds/repository/usee-node/server/controllers/api.js");
}();

;

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("koa-router");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("redux-logger");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("redux-promise");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  __webpack_require__(10);
}
var path = __webpack_require__(17);
var session = __webpack_require__(15);
var koaStatic = __webpack_require__(16);
var bodyparser = __webpack_require__(12);
var swig = __webpack_require__(4);
var json = __webpack_require__(13);
var logger = __webpack_require__(14);
var config = __webpack_require__(11);

module.exports = function (app) {
  app.context.swig = swig({
    root: path.join(__dirname, 'views'),
    autoescape: true,
    ext: 'html'
  });
  app.keys = config.get('keys');
  app.use(logger());
  app.use(bodyparser());
  app.use(session(app));
  app.use(json());
  app.use(koaStatic(path.join(__dirname, '../build')));
  app.use(koaStatic(path.join(__dirname, '../node_modules')));
  app.use(__webpack_require__(8)({}));
  app.use(__webpack_require__(9));

  app.on('error', function (err) {
    console.log(err);
  });

  app.listen(config.get('port'), function () {
    console.log('server is running on port ' + this.address().port);
  });
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ })
/******/ ])));