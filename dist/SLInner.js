"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

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

var SLInnerStyled = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  max-width: 400px;\n  width: 100%;\n  box-sizing: border-box;\n  //height:90vh;\n  max-height: 90vh;\n  background: white;\n  border: 1px solid #a6a6a6;\n  color: #282c34;\n  border-radius: 3px;\n  padding: 25px 40px;\n  box-shadow: rgba(0,0,0,0.2) 0 0 10px;\n  font-size: 14px;\n  transition: opacity ease-in-out 0.25s;\n  opacity:0;\n  display:flex;\n  flex-direction:column;\n  align-items: center;\n  justify-content:center;\n  position:relative;\n  >div.close{\n    cursor: pointer;\n    font-size: 50px;\n    font-family: monospace;\n    font-weight: 100;\n    color: #666;\n    position:absolute;\n    right: 10px;\n    top:0px;\n  }\n  >div.inner{\n    width: 100%;\n    margin: 0 auto;\n    padding:20px 0;\n    >h4{\n      font-family: \"Montserrat Bold\", sans-serif;\n      text-align: center;\n      margin-bottom: 24px;\n    }\n    a{\n     color: #4B4B4B; \n    }\n  }\n  &.in{\n    opacity:1;\n    overflow-y: auto;\n  }\n  >h2, >h3, >h4{\n    margin-bottom: 20px;\n  }\n  div.submit{\n  }\n  ul{\n    text-align: center;\n    font-size: 14px;\n    display: block;\n    padding: 0;\n    >li{\n      display: inline-block;\n      list-style: none;\n      &:last-of-type{\n        :before{\n            content: \"\\2022\";\n            margin: 0 8px 0 4px;\n        }\n      }\n    }\n  }\n"], ["\n  max-width: 400px;\n  width: 100%;\n  box-sizing: border-box;\n  //height:90vh;\n  max-height: 90vh;\n  background: white;\n  border: 1px solid #a6a6a6;\n  color: #282c34;\n  border-radius: 3px;\n  padding: 25px 40px;\n  box-shadow: rgba(0,0,0,0.2) 0 0 10px;\n  font-size: 14px;\n  transition: opacity ease-in-out 0.25s;\n  opacity:0;\n  display:flex;\n  flex-direction:column;\n  align-items: center;\n  justify-content:center;\n  position:relative;\n  >div.close{\n    cursor: pointer;\n    font-size: 50px;\n    font-family: monospace;\n    font-weight: 100;\n    color: #666;\n    position:absolute;\n    right: 10px;\n    top:0px;\n  }\n  >div.inner{\n    width: 100%;\n    margin: 0 auto;\n    padding:20px 0;\n    >h4{\n      font-family: \"Montserrat Bold\", sans-serif;\n      text-align: center;\n      margin-bottom: 24px;\n    }\n    a{\n     color: #4B4B4B; \n    }\n  }\n  &.in{\n    opacity:1;\n    overflow-y: auto;\n  }\n  >h2, >h3, >h4{\n    margin-bottom: 20px;\n  }\n  div.submit{\n  }\n  ul{\n    text-align: center;\n    font-size: 14px;\n    display: block;\n    padding: 0;\n    >li{\n      display: inline-block;\n      list-style: none;\n      &:last-of-type{\n        :before{\n            content: \"\\\\2022\";\n            margin: 0 8px 0 4px;\n        }\n      }\n    }\n  }\n"])));

var SLinner = /*#__PURE__*/function (_PureComponent) {
  _inherits(SLinner, _PureComponent);

  var _super = _createSuper(SLinner);

  function SLinner() {
    var _this;

    _classCallCheck(this, SLinner);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      show: ''
    });

    _defineProperty(_assertThisInitialized(_this), "keyUpListener", function (event) {
      var e = event || window.event;

      if (e.code === 'Escape' && _this.state.show === ' in') {
        _this.handleClickClose();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "clickListener", function (event) {
      var e = event || window.event;

      if (_this.state.show === ' in' && !_this.state.element.contains(e.target)) {
        window.removeEventListener('keyup', _this.keyUpListener);
        window.removeEventListener('touchstart', _this.clickListener);
        window.removeEventListener('mousedown', _this.clickListener);

        _this.handleClickClose();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleClickClose", function () {
      var self = _assertThisInitialized(_this);

      self.setState({
        show: ' out'
      }, function () {
        self.props.onClose();
      });
    });

    _defineProperty(_assertThisInitialized(_this), "fade", function () {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'out';
      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

      _this.setState({
        show: value
      }, callback);
    });

    return _this;
  }

  _createClass(SLinner, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var element = _reactDom.default.findDOMNode(this.refs.content);

      window.addEventListener('keyup', this.keyUpListener);
      window.addEventListener('touchstart', this.clickListener);
      window.addEventListener('mousedown', this.clickListener);
      setTimeout(function () {
        _this2.setState({
          show: ' in',
          element: element
        });
      }, 0);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('keyup', this.keyUpListener);
      window.removeEventListener('touchstart', this.clickListener);
      window.removeEventListener('mousedown', this.clickListener);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement(SLInnerStyled, {
        className: this.state.show,
        ref: "content"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "close",
        onClick: this.handleClickClose
      }, "\xD7"), /*#__PURE__*/_react.default.createElement("div", {
        className: "inner"
      }, this.props.children));
    }
  }]);

  return SLinner;
}(_react.PureComponent);

exports.default = SLinner;