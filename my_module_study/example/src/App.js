import React, { Component } from 'react'

import MyModule from 'my_module_study'
import 'my_module_study/style/index.css'
export default class App extends Component {
  render () {
    return (
      <div>
        <MyModule text='Modern React component module' />
      </div>
    )
  }
}
