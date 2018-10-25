'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

var classCallCheck = function classCallCheck(instance, Constructor) {
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

var styles = { "test": "styles_test__32Qsm" };

var classCallCheck$1 = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass$1 = function () {
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

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var ExampleComponent = function (_Component) {
    inherits(ExampleComponent, _Component);

    function ExampleComponent(props) {
        classCallCheck$1(this, ExampleComponent);

        var _this = possibleConstructorReturn(this, (ExampleComponent.__proto__ || Object.getPrototypeOf(ExampleComponent)).call(this, props));

        _this.state = {
            text: ''
        };
        return _this;
    }

    createClass$1(ExampleComponent, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var text = this.props.text;

            this.example = new ExampleModule(text);
            this.setState({ text: this.example.getText() });
        }
    }, {
        key: 'render',
        value: function render() {
            return React__default.createElement(
                'div',
                { className: styles.test },
                'Example Component: ',
                this.state.text
            );
        }
    }]);
    return ExampleComponent;
}(React.Component);

module.exports = ExampleComponent;
//# sourceMappingURL=index.js.map
