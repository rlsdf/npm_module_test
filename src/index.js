import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class MyModule extends Component {
	constructor() {
		super();
		this.state = {
			isTest: false
		};
	}

	clickButton = () => {
		this.setState({isTest: !this.state.isTest});
	}

	render() {
		<div className={this.state.isTest ? 'react' : 'tmon'}>
			<button onClick={this.clickButton}>click me!</button>
			<span className="frame"></span>
		</div>
	}
}