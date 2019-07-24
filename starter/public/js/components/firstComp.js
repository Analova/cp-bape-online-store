webpackJsonp([1],{

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(100);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(101);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Layout = function (_Component) {
  _inherits(Layout, _Component);

  function Layout() {
    _classCallCheck(this, Layout);

    var _this = _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).call(this));

    _this.clickedBtn = function () {
      console.log("swag");
    };

    _this.state = {
      name: "Joe"
    };
    return _this;
  }

  _createClass(Layout, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "app" },
        _react2.default.createElement(
          "section",
          { className: "container" },
          _react2.default.createElement(
            "header",
            { id: "header" },
            _react2.default.createElement(
              "div",
              { className: "logo" },
              "Bape"
            ),
            _react2.default.createElement(
              "div",
              { className: "menu" },
              _react2.default.createElement(
                "nav",
                null,
                _react2.default.createElement(
                  "a",
                  { href: "lookbook.html" },
                  "Home "
                ),
                _react2.default.createElement(
                  "a",
                  { href: "lookbook.html" },
                  "Lookbook"
                ),
                _react2.default.createElement(
                  "a",
                  { href: "lookbook.html" },
                  "Menue"
                ),
                _react2.default.createElement(
                  "a",
                  { href: "lookbook.html" },
                  "Woman"
                ),
                _react2.default.createElement(
                  "a",
                  { href: "lookbook.html" },
                  "News"
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          "section",
          { id: "content-area" },
          _react2.default.createElement(
            "div",
            { className: "col-md-6 model" },
            _react2.default.createElement("img", { src: "/img/bape2.png", alt: "" })
          ),
          _react2.default.createElement(
            "div",
            { className: "col-md-6 info" },
            _react2.default.createElement(
              "div",
              { className: "insider" },
              _react2.default.createElement(
                "h5",
                null,
                "Mens"
              ),
              _react2.default.createElement(
                "h1",
                null,
                "JAKET DRIPPING SOUSE"
              ),
              _react2.default.createElement(
                "p",
                null,
                "Mustache church-key man braid meh YOLO blue bottle pitchfork pabst normcore cred vice lumbersexual etsy fashion axe. Raclette intelligentsia microdosing, gochujang cred hot chicken flannel pabst. Austin air plant humblebrag retro kinfolk hammock. Tofu listicle copper mug, cronut kickstarter lomo poke drinking vinegar chillwave. Distillery cardigan lomo, la croix tote bag asymmetrical lo-fi tousled."
              ),
              _react2.default.createElement(
                "div",
                { className: "size" },
                _react2.default.createElement(
                  "div",
                  { className: "title" },
                  "size"
                ),
                _react2.default.createElement(
                  "ul",
                  { className: "sizes" },
                  _react2.default.createElement(
                    "li",
                    { className: "circle" },
                    "S"
                  ),
                  _react2.default.createElement(
                    "li",
                    { className: "circle" },
                    "M"
                  ),
                  _react2.default.createElement(
                    "li",
                    { className: "circle" },
                    "L"
                  ),
                  _react2.default.createElement(
                    "li",
                    { className: "semi-circle" },
                    "XL"
                  ),
                  _react2.default.createElement(
                    "li",
                    { className: "semi-circle" },
                    "XXL"
                  ),
                  _react2.default.createElement(
                    "li",
                    { className: "semi-circle" },
                    "CUSTOM"
                  )
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "action-btn" },
                _react2.default.createElement(
                  "a",
                  { href: "#", className: "col-md-6 red-hollow-btn" },
                  _react2.default.createElement(
                    "span",
                    { className: " price" },
                    "$495"
                  ),
                  "add to cart"
                ),
                _react2.default.createElement(
                  "a",
                  { href: "#", className: " col-md-6 lightgrey-btn" },
                  "find a store"
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Layout;
}(_react.Component);

var app = document.getElementById("app");

_reactDom2.default.render(_react2.default.createElement(Layout, null), app);

/***/ })

},[233]);