import React, { Component } from 'react'

import ExampleComponent from 'native_react_example'
import 'native_react_example/style/index.css'

export default class App extends Component {
  render () {
    return (
      <div>
        <ExampleComponent text='Modern React component module' />
      </div>
    )
  }
}
