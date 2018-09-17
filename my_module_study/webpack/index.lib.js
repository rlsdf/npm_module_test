import MyModule from 'my_module_study'
import ReactDOM from 'react-dom'
import React from 'react'

const MyModuleApp = (text, element) => {
  ReactDOM.render(<MyModule text={text} />,
    element);
};

module.exports = MyModuleApp;
