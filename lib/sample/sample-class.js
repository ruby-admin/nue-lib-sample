"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var SampleClass = /*#__PURE__*/function () {
  function SampleClass(message) {
    _classCallCheck(this, SampleClass);

    this.message = message;
  }

  _createClass(SampleClass, [{
    key: "greet",
    value: function greet() {
      return 'Hello, ' + this.message;
    }
  }]);

  return SampleClass;
}();

var _default = {
  SampleClass: SampleClass
};
exports["default"] = _default;