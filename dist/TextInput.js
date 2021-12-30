"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _window$t;

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

var TextInputStyled = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\n   text-align: left;\n   margin-bottom: 20px;\n   button, input{\n    \n      outline:none;\n   }\n   >div.control{\n      background-color: #FAFBFC;\n      //border: 2px solid #DFE1E6;\n      border: 1px solid #999;\n      box-sizing: border-box;\n      //border-radius: 3px;\n      //height: 44px;\n      transition: background-color .2s ease-in-out 0s,border-color .2s ease-in-out 0s;\n      label{\n        font-size: 12px;\n        margin: 5px 10px 0 10px;\n      }\n      input{\n        padding: 3px 10px 3px 10px;\n        max-width: 400px;\n        width: 100%;\n        font-size: 16px;\n        margin: 0;\n      }\n      >div{\n        display: flex;\n        >input{\n          flex:1;\n          border: 0;\n        }\n        >button{\n          background: transparent;\n          border-width: 0;\n        }\n      }\n      &.error{\n        border-color: rgb(222, 53, 11);\n      }\n   }\n   >div.msg{\n      margin-top:8px;\n      font-size:14px;\n      line-height:17px;      \n      color: rgb(222, 53, 11);\n   }\n"])));

var t = (_window$t = window.t) !== null && _window$t !== void 0 ? _window$t : function (t) {
  return t;
};

var TextInput = /*#__PURE__*/function (_PureComponent) {
  _inherits(TextInput, _PureComponent);

  var _super = _createSuper(TextInput);

  function TextInput() {
    var _this;

    _classCallCheck(this, TextInput);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      showPassword: false
    });

    _defineProperty(_assertThisInitialized(_this), "validators", {
      name: function name(_name) {
        var valid = _name.trim().length >= 2;
        return {
          valid: valid,
          msg: valid ? '' : t('Must contain at least 2 chars.')
        };
      },
      password: function password(_password) {
        var valid = _password.trim().length >= 6;
        return {
          valid: valid,
          msg: valid ? '' : t('Must contain at least 6 chars.')
        };
      },
      phone: function phone(_phone) {
        var clean = _phone.replace(/[^0-9]+/gi, '');

        var valid = clean.length >= 11 && clean.length <= 11;
        return {
          valid: valid,
          msg: valid ? '' : t('Must be a correct phone number.')
        };
      },
      email: function email(_email) {
        var valid = !!_email.match(/^[a-zA-Z0-9!#$%&\'*+\\/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&\'*+\\/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$/);
        return {
          valid: valid,
          msg: valid ? '' : t('Must be a valid email.')
        };
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onChange", function (e) {
      var value = e.target.value;

      if (_this.props.westChars) {
        value = value.replace(/[^-0-9a-zA-Zа-яА-Я\s.\[\]!@#$%^&*()_+="']/gim, '');
      }

      var name = _this.props.name;
      console.log(_this.validators[name](value));

      _this.props.onChange(name, value, _this.validators[name](value).valid);
    });

    return _this;
  }

  _createClass(TextInput, [{
    key: "getMsg",
    value: function getMsg(key) {
      if (this.props.msg && this.props.msg[key]) {
        if (Array.isArray(this.props.msg[key])) {
          return this.props.msg[key].join('\n');
        } else {
          return this.props.msg[key];
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _p$value,
          _p$value2,
          _this2 = this;

      var p = this.props;
      var s = this.state;
      var valid = this.validators[p.name]((_p$value = p.value) !== null && _p$value !== void 0 ? _p$value : '');
      return /*#__PURE__*/_react.default.createElement(TextInputStyled, {
        className: ''
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: 'control' + (valid.valid ? '' : ' error')
      }, p.label && /*#__PURE__*/_react.default.createElement("label", null, p.label), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("input", {
        value: (_p$value2 = p.value) !== null && _p$value2 !== void 0 ? _p$value2 : '',
        onChange: this.onChange,
        name: p.name,
        title: p.title,
        disabled: p.progress || p.disabled,
        type: !p.password || s.showPassword ? 'text' : 'password',
        placeholder: p.placeholder
      }), p.password && /*#__PURE__*/_react.default.createElement("button", {
        onClick: function onClick() {
          _this2.setState({
            showPassword: !s.showPassword
          });
        }
      }, s.showPassword ? /*#__PURE__*/_react.default.createElement("svg", {
        width: "22",
        height: "15",
        viewBox: "0 0 22 15",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, /*#__PURE__*/_react.default.createElement("path", {
        d: "M11 0C6 0 1.73 3.11 0 7.5C1.73 11.89 6 15 11 15C16 15 20.27 11.89 22 7.5C20.27 3.11 16 0 11 0ZM11 12.5C8.24 12.5 6 10.26 6 7.5C6 4.74 8.24 2.5 11 2.5C13.76 2.5 16 4.74 16 7.5C16 10.26 13.76 12.5 11 12.5ZM11 4.5C9.34 4.5 8 5.84 8 7.5C8 9.16 9.34 10.5 11 10.5C12.66 10.5 14 9.16 14 7.5C14 5.84 12.66 4.5 11 4.5Z",
        fill: "#4B4B4B"
      })) : /*#__PURE__*/_react.default.createElement("svg", {
        width: "22",
        height: "19",
        viewBox: "0 0 22 19",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, /*#__PURE__*/_react.default.createElement("path", {
        d: "M11 4C13.76 4 16 6.24 16 9C16 9.65 15.87 10.26 15.64 10.83L18.56 13.75C20.07 12.49 21.26 10.86 21.99 9C20.26 4.61 15.99 1.5 10.99 1.5C9.59 1.5 8.25 1.75 7.01 2.2L9.17 4.36C9.74 4.13 10.35 4 11 4ZM1 1.27L3.28 3.55L3.74 4.01C2.08 5.3 0.78 7.02 0 9C1.73 13.39 6 16.5 11 16.5C12.55 16.5 14.03 16.2 15.38 15.66L15.8 16.08L18.73 19L20 17.73L2.27 0L1 1.27ZM6.53 6.8L8.08 8.35C8.03 8.56 8 8.78 8 9C8 10.66 9.34 12 11 12C11.22 12 11.44 11.97 11.65 11.92L13.2 13.47C12.53 13.8 11.79 14 11 14C8.24 14 6 11.76 6 9C6 8.21 6.2 7.47 6.53 6.8V6.8ZM10.84 6.02L13.99 9.17L14.01 9.01C14.01 7.35 12.67 6.01 11.01 6.01L10.84 6.02Z",
        fill: "#4B4B4B"
      }))))), /*#__PURE__*/_react.default.createElement("div", {
        className: "msg"
      }, valid.msg ? valid.msg : this.getMsg(p.name)));
    }
  }]);

  return TextInput;
}(_react.PureComponent);

exports.default = TextInput;