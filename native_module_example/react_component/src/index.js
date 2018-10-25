import React, { Component } from 'react'

import ExampleModule from 'native_module_example'

import styles from './styles.css'

class ExampleComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: ''
        }
    }

    componentDidMount() {
        const { text } = this.props
        this.example = new ExampleModule(text)
        this.setState({ text: this.example.getText() })
    }

    render() {
        return (
            <div className={styles.test}>
                Example Component: {this.state.text}
            </div>
        )
    }
}

export default ExampleComponent;
