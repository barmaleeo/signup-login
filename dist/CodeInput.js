"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2;

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

var CodeInputStyled = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  margin-bottom: 20px;\n  .digits-container{\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n  }\n"])));

var CodeDigitStyled = _styledComponents.default.input(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: 26px;\n  height: 36px;\n  text-align: center;\n  font-size: 30px;\n  font-weight: bold;\n"])));

var CodeInput = /*#__PURE__*/function (_Component) {
  _inherits(CodeInput, _Component);

  var _super = _createSuper(CodeInput);

  function CodeInput() {
    var _this;

    _classCallCheck(this, CodeInput);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      digits: []
    });

    _defineProperty(_assertThisInitialized(_this), "digits", {});

    _defineProperty(_assertThisInitialized(_this), "onKeydown", function (k, e) {
      console.log(k, e.keyCode, e.target.value);
      var p = _this.props;
      var s = _this.state;
      var kc = e.keyCode;

      if ([46, 9].includes(kc)) {
        console.log('backspace-del');
      } else if (kc === 37) {
        _this.focusDigit(k - 1);
      } else if (kc === 8) {
        var digits = s.digits;

        if (digits.length >= k) {
          digits[k] = '';

          _this.focusDigit(k - 1);

          _this.setState({
            digits: digits
          }, function () {
            var str = digits.join('');
            p.onChange(str, str.length === p.size);
          });
        }
      } else if ([39, 13].includes(kc)) {
        _this.focusDigit(k + 1);
      } else if (kc >= 48 && kc <= 59 || kc >= 96 && kc <= 105) {
        var _digits = s.digits;

        do {
          if (_digits.length > +k) {
            _digits[k] = e.key;
          } else if (_digits.length === +k) {
            _digits.push(e.key);
          } else {
            _digits.push('');
          }
        } while (_digits.length + 1 < k);

        _this.focusDigit(k + 1); //e.preventDefault();


        var state = {
          digits: _digits
        };

        _this.setState(state, function () {
          var str = _digits.join('');

          p.onChange(str, str.length === p.size);
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "focusDigit", function (k) {
      if (_this.digits[k]) {
        _this.digits[k].focus();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "renderDigit", function (i, k) {
      return /*#__PURE__*/_react.default.createElement(CodeDigitStyled, {
        value: i,
        ref: function ref(_ref) {
          _this.digits[k] = _ref;
        },
        onKeyDown: _this.onKeydown.bind(_assertThisInitialized(_this), k)
      });
    });

    return _this;
  }

  _createClass(CodeInput, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.focusDigit(0);
    }
  }, {
    key: "render",
    value: function render() {
      var p = this.props;
      var s = this.state;
      var digits = [];

      for (var i = 0; i < p.size; i++) {
        if (s.digits.length <= i) {
          digits.push('');
        } else {
          digits.push(s.digits[i]);
        }
      }

      return /*#__PURE__*/_react.default.createElement(CodeInputStyled, {
        className: ""
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "digits-container"
      }, digits.map(this.renderDigit)));
    }
  }]);

  return CodeInput;
}(_react.Component);

exports.default = CodeInput;