import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class MyModule extends Component {
  static propTypes = {
    text: PropTypes.string
  }

  render() {
    const {
      text
    } = this.props

    return (
      <div className={styles.test}>
        Module Example: {text}
      </div>
    )
  }
}
