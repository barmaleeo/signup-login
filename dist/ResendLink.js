"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Screen2 = _interopRequireDefault(require("./Screen"));

var _SLInner = _interopRequireDefault(require("./SLInner"));

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

var ResendLink = /*#__PURE__*/function (_Screen) {
  _inherits(ResendLink, _Screen);

  var _super = _createSuper(ResendLink);

  function ResendLink() {
    _classCallCheck(this, ResendLink);

    return _super.apply(this, arguments);
  }

  _createClass(ResendLink, [{
    key: "render",
    value: function render() {
      var p = this.props;
      var s = this.state;
      return /*#__PURE__*/_react.default.createElement(_SLInner.default, {
        onClose: p.onClose,
        ref: "content"
      }, /*#__PURE__*/_react.default.createElement("h4", null, t('Waiting for confirmation')), /*#__PURE__*/_react.default.createElement("p", null, t('We have sent an email with a confirmation link to'), " "), /*#__PURE__*/_react.default.createElement("p", {
        className: "text-center"
      }, /*#__PURE__*/_react.default.createElement("b", null, p.data.email)), /*#__PURE__*/_react.default.createElement("p", null, t('Please, click on link in confirmation email.')), /*#__PURE__*/_react.default.createElement("p", null, t('If you have not received a confirmation email, please click on the button below to resend it.')), /*#__PURE__*/_react.default.createElement(_MsgResult.default, {
        msg: p.msg,
        error: p.error
      }), /*#__PURE__*/_react.default.createElement(_ActionButton.default, {
        onClick: p.onAction.bind(this, 'resend-verification-email', {
          email: p.data.email
        }),
        label: t('Resend Email'),
        progress: p.progress
      }), /*#__PURE__*/_react.default.createElement("ul", {
        className: "bottom-form-link"
      }, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
        href: "",
        onClick: p.onChangeMode.bind(this, 'signup'),
        "data-analytics-event": "clickedResendLink"
      }, t('Sign up')))));
    }
  }]);

  return ResendLink;
}(_Screen2.default);

exports.default = ResendLink;