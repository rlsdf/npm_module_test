import ExampleModule from 'native_module_example';

const example = new ExampleModule('example module');
const text = example.getText();

document.getElementById('root').innerHTML = text;
