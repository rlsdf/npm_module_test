var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var ExampleModule = function () {
    function ExampleModule(text) {
        classCallCheck(this, ExampleModule);

        this.text = text;
    }

    createClass(ExampleModule, [{
        key: "getText",
        value: function getText() {
            return "Hello, " + this.text;
        }
    }]);
    return ExampleModule;
}();

export default ExampleModule;
//# sourceMappingURL=index.es.js.map
