"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Login = _interopRequireDefault(require("./Login"));

var _Signup = _interopRequireDefault(require("./Signup"));

var _ResetPass = _interopRequireDefault(require("./ResetPass"));

var _ResendLink = _interopRequireDefault(require("./ResendLink"));

var _ChangePassword = _interopRequireDefault(require("./ChangePassword"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SignupLoginStyled = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: fixed;\n  top:0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 10000;\n  transition: background-color ease-in-out 0.5s;\n  &.in{\n    background: rgba(0,0,0, 0.1);  \n  }\n \n"])));

var $ = window.$;

var SignupLogin = /*#__PURE__*/function (_PureComponent) {
  _inherits(SignupLogin, _PureComponent);

  var _super = _createSuper(SignupLogin);

  function SignupLogin() {
    var _this;

    _classCallCheck(this, SignupLogin);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      mode: 'login',
      success: false,
      data: {},
      show: '',
      msg: {}
    });

    _defineProperty(_assertThisInitialized(_this), "onClose", function () {
      _this.setState({
        show: 'out'
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onAction", function (action, data, e) {
      e.preventDefault();

      var self = _assertThisInitialized(_this);

      self.setState({
        data: data,
        progress: true,
        msg: {},
        error: false
      });
      $.post('/' + _this.props.lang + '/' + action, data, function (r) {
        var _r$msg;

        console.log(r);
        var state = {
          progress: false,
          error: !(r.status === 'ok'),
          success: r.status === 'ok',
          msg: (_r$msg = r.msg) !== null && _r$msg !== void 0 ? _r$msg : {}
        };

        if (state.msg.confirmation) {
          state.mode = 'resend';
          state.success = false;
          state.msg = {};
        }

        self.setState(state);
      }, 'json').fail(function (e) {
        if (e.status !== 302) {
          //console.error(e);
          self.setState({
            progress: false,
            success: false,
            error: true,
            msg: {
              result: 'Something went wrong! Please try again later!'
            }
          });
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onChangeMode", function (mode, e) {
      e.preventDefault();

      _this.refs[_this.state.mode].fade('out', function () {
        setTimeout(function () {
          _this.setState({
            mode: mode,
            success: false,
            progress: false,
            msg: {}
          });
        }, 250);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onClickAction", function (action, params) {});

    _defineProperty(_assertThisInitialized(_this), "renderBlocks", function () {
      var p = _this.props;
      var s = _this.state;

      switch (s.mode) {
        case 'login':
          return /*#__PURE__*/_react.default.createElement(_Login.default, {
            onChangeMode: _this.onChangeMode,
            ref: "login",
            progress: s.progress,
            msg: s.msg,
            error: s.error,
            clearMsg: function clearMsg() {
              _this.setState({
                msg: {}
              });
            },
            onAction: _this.onAction,
            onClose: p.onClose
          });

        case 'signup':
          return /*#__PURE__*/_react.default.createElement(_Signup.default, {
            onChangeMode: _this.onChangeMode,
            ref: "signup",
            success: s.success,
            progress: s.progress,
            msg: s.msg,
            error: s.error,
            clearMsg: function clearMsg() {
              _this.setState({
                msg: {}
              });
            },
            onClose: p.onClose,
            onAction: _this.onAction
          });

        case 'restore':
          return /*#__PURE__*/_react.default.createElement(_ResetPass.default, {
            onChangeMode: _this.onChangeMode,
            ref: "restore",
            progress: s.progress,
            msg: s.msg,
            error: s.error,
            clearMsg: function clearMsg() {
              _this.setState({
                msg: {}
              });
            },
            onAction: _this.onAction,
            onClose: p.onClose
          });

        case 'resend':
          return /*#__PURE__*/_react.default.createElement(_ResendLink.default, {
            onChangeMode: _this.onChangeMode,
            ref: "resend",
            progress: s.progress,
            msg: s.msg,
            error: s.error,
            onAction: _this.onAction,
            onClose: p.onClose,
            data: s.data
          });

        case 'changePassword':
          return /*#__PURE__*/_react.default.createElement(_ChangePassword.default, {
            onChangeMode: _this.onChangeMode,
            ref: "changePassword",
            progress: s.progress,
            token: p.token,
            msg: s.msg,
            error: s.error,
            clearMsg: function clearMsg() {
              _this.setState({
                msg: {}
              });
            },
            onAction: _this.onAction,
            onClose: p.onClose,
            data: s.data
          });

        default:
          return null;
      }
    });

    return _this;
  }

  _createClass(SignupLogin, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        show: 'in',
        mode: this.props.token ? 'changePassword' : this.props.mode
      });
    }
  }, {
    key: "fade",
    value: function fade(callback) {}
  }, {
    key: "render",
    value: function render() {
      var p = this.props;
      var s = this.state;
      var blocks = this.renderBlocks();

      if (blocks) {
        return /*#__PURE__*/_react.default.createElement(SignupLoginStyled, {
          className: s.show
        }, blocks);
      } else {
        return null;
      }
    }
  }]);

  return SignupLogin;
}(_react.PureComponent);

exports.default = SignupLogin;