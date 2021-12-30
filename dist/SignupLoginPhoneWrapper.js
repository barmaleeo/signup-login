"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

var _SignupLogin = _interopRequireDefault(require("./SignupLogin"));

var _SignupLoginPhone = _interopRequireDefault(require("./SignupLoginPhone"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SignupLoginWrapper = function SignupLoginWrapper() {
  var _this = this;

  _classCallCheck(this, SignupLoginWrapper);

  _defineProperty(this, "container", null);

  _defineProperty(this, "mountComponent", function (e) {
    var _e$currentTarget$data;

    e.preventDefault();
    (0, _reactDom.render)( /*#__PURE__*/_react.default.createElement(_SignupLoginPhone.default, {
      onClose: _this.unmountComponent,
      mode: (_e$currentTarget$data = e.currentTarget.dataset.mode) !== null && _e$currentTarget$data !== void 0 ? _e$currentTarget$data : 'signup',
      lang: 'en'
    }), _this.container);
  });

  _defineProperty(this, "unmountComponent", function (e) {
    setTimeout(function () {
      (0, _reactDom.unmountComponentAtNode)(_this.container);
    }, 250);
  });

  this.container = document.getElementById('js-signup-login-phone-container');

  if (!this.container) {
    var elem = document.createElement('div');
    elem.id = "js-signup-login-phone-container";
    this.container = document.body.appendChild(elem);
  }

  var mode = this.container.dataset.mode;
  var self = this;
  var match = RegExp('[?&]token=([^&]*)').exec(window.location.search);
  var token = match && decodeURIComponent(match[1].replace(/\+/g, ' '));

  if (token || mode) {
    (0, _reactDom.render)( /*#__PURE__*/_react.default.createElement(_SignupLoginPhone.default, {
      onClose: this.unmountComponent,
      token: token,
      mode: token ? 'changePassword' : mode,
      lang: 'en'
    }), self.container);
  }

  var _iterator = _createForOfIteratorHelper(document.getElementsByClassName('js-login-signup-phone')),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var item = _step.value;
      item.addEventListener('click', this.mountComponent);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return this;
};

exports.default = SignupLoginWrapper;