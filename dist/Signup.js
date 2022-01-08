"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Screen2 = _interopRequireDefault(require("./Screen"));

var _SLInner = _interopRequireDefault(require("./SLInner"));

var _TextInput = _interopRequireDefault(require("./TextInput"));

var _ActionButton = _interopRequireDefault(require("./ActionButton"));

var _MsgResult = _interopRequireDefault(require("./MsgResult"));

var _window$t;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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

var t = (_window$t = window.t) !== null && _window$t !== void 0 ? _window$t : function (t) {
  return t;
};

var Signup = /*#__PURE__*/function (_Screen) {
  _inherits(Signup, _Screen);

  var _super = _createSuper(Signup);

  function Signup() {
    var _this;

    _classCallCheck(this, Signup);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "defaultFields", [{
      type: 'name',
      westChars: true,
      placeholder: 'Your Name'
    }, {
      type: 'email',
      placeholder: 'Your Email'
    }, {
      type: 'password',
      isPassword: true
    }]);

    _defineProperty(_assertThisInitialized(_this), "capitalizeFirstLetter", function (_ref) {
      var _ref2 = _toArray(_ref),
          first = _ref2[0],
          rest = _ref2.slice(1);

      var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : navigator.language;
      return first.toLocaleUpperCase(locale) + rest.join('');
    });

    _defineProperty(_assertThisInitialized(_this), "renderFields", function () {
      var _p$fields;

      var fields = [];
      var p = _this.props;
      var s = _this.state;
      var key = 0;

      var _iterator = _createForOfIteratorHelper((_p$fields = p.fields) !== null && _p$fields !== void 0 ? _p$fields : _this.defaultFields),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _field$label, _field$placeholder;

          var field = _step.value;
          var label = (_field$label = field.label) !== null && _field$label !== void 0 ? _field$label : _this.capitalizeFirstLetter(field.type);
          var placeholder = (_field$placeholder = field.placeholder) !== null && _field$placeholder !== void 0 ? _field$placeholder : 'Enter ' + _this.capitalizeFirstLetter(field.type);

          if (typeof field.type === 'string' && field.type.length) {
            fields.push( /*#__PURE__*/_react.default.createElement(_TextInput.default, {
              key: key++,
              onChange: _this.onChangeValue.bind(_assertThisInitialized(_this)),
              westChars: field.westChars,
              progress: p.progress,
              msg: p.msg,
              label: t(label),
              disabled: p.success,
              name: field.type,
              password: field.isPassword,
              value: s[field.type],
              placeholder: t(placeholder)
            }));
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return fields;
    });

    return _this;
  }

  _createClass(Signup, [{
    key: "render",
    value: function render() {
      var _p$fields2;

      var p = this.props;
      var s = this.state;
      var valid = true;
      var requestData = {};

      var _iterator2 = _createForOfIteratorHelper((_p$fields2 = p.fields) !== null && _p$fields2 !== void 0 ? _p$fields2 : this.defaultFields),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var field = _step2.value;
          valid = valid && s[field.type];
          requestData[field.type] = s[field.type];
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      return /*#__PURE__*/_react.default.createElement(_SLInner.default, {
        onClose: p.onClose,
        ref: "content"
      }, /*#__PURE__*/_react.default.createElement("h4", null, t('Sign up')), this.renderFields(), /*#__PURE__*/_react.default.createElement(_MsgResult.default, {
        msg: p.msg,
        error: p.error
      }), p.success ? /*#__PURE__*/_react.default.createElement(_ActionButton.default, {
        onClick: p.onAction.bind(this, 'resend-verification-email', {
          email: s.email
        }),
        label: t('Resend Email'),
        progress: p.progress
      }) : /*#__PURE__*/_react.default.createElement(_ActionButton.default, {
        onClick: p.onAction.bind(this, 'signup', requestData),
        className: "gt-signup-action",
        label: t('Sign up'),
        disabled: !valid || p.success,
        progress: p.progress
      }), /*#__PURE__*/_react.default.createElement("ul", {
        className: "bottom-form-link"
      }, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
        href: "#",
        onClick: p.onChangeMode.bind(this, 'login'),
        "data-analytics-event": "clickedLoginLink"
      }, t('Already have an account? Log In')))));
    }
  }]);

  return Signup;
}(_Screen2.default);

exports.default = Signup;