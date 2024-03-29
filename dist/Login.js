"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _SLInner = _interopRequireDefault(require("./SLInner"));

var _Screen2 = _interopRequireDefault(require("./Screen"));

var _TextInput = _interopRequireDefault(require("./TextInput"));

var _ActionButton = _interopRequireDefault(require("./ActionButton"));

var _MsgResult = _interopRequireDefault(require("./MsgResult"));

var _window$t;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var t = (_window$t = window.t) !== null && _window$t !== void 0 ? _window$t : function (t) {
  return t;
};

var Login = /*#__PURE__*/function (_Screen) {
  _inherits(Login, _Screen);

  var _super = _createSuper(Login);

  function Login() {
    _classCallCheck(this, Login);

    return _super.apply(this, arguments);
  }

  _createClass(Login, [{
    key: "render",
    value: function render() {
      var _p$fields;

      var p = this.props;
      var s = this.state;
      var valid = s.emailValid && s.passwordValid;
      var fields = (_p$fields = p.fields) !== null && _p$fields !== void 0 ? _p$fields : ['email', 'password'];
      return /*#__PURE__*/_react.default.createElement(_SLInner.default, {
        onClose: p.onClose,
        ref: "content"
      }, /*#__PURE__*/_react.default.createElement("h4", null, t('Log in')), fields.includes('phone') && /*#__PURE__*/_react.default.createElement(_TextInput.default, {
        onChange: this.onChangeValue.bind(this),
        progress: p.progress,
        msg: p.msg,
        label: t('Phone'),
        disabled: p.success,
        name: "phone",
        value: s.phone,
        placeholder: t('Your Phone')
      }), fields.includes('email') && /*#__PURE__*/_react.default.createElement(_TextInput.default, {
        onChange: this.onChangeValue.bind(this),
        progress: p.progress,
        msg: p.msg,
        label: t('Email'),
        name: "email",
        value: s.email,
        placeholder: t('Your Email')
      }), /*#__PURE__*/_react.default.createElement(_TextInput.default, {
        onChange: this.onChangeValue.bind(this),
        progress: p.progress,
        msg: p.msg,
        label: t('Password'),
        name: "password",
        password: "true",
        value: s.password,
        placeholder: t('Enter password')
      }), /*#__PURE__*/_react.default.createElement(_MsgResult.default, {
        msg: p.msg,
        error: p.error
      }), /*#__PURE__*/_react.default.createElement(_ActionButton.default, {
        onClick: p.onAction.bind(this, 'login', {
          email: s.email,
          password: s.password
        }),
        label: t('Log in'),
        disabled: !valid,
        progress: p.progress
      }), /*#__PURE__*/_react.default.createElement("ul", {
        className: "bottom-form-link"
      }, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
        href: "",
        onClick: p.onChangeMode.bind(this, 'restore'),
        "data-analytics-event": "clickedForgotPasswordLink"
      }, t('Forgot password?'))), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
        href: "",
        onClick: p.onChangeMode.bind(this, 'signup'),
        "data-analytics-event": "clickedLoginLink"
      }, t('Sign up')))));
    }
  }]);

  return Login;
}(_Screen2.default);

exports.default = Login;