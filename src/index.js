/* eslint-disable */
import React, { Component } from 'react';
import './styles/style';

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
		return (
			<div>
				<button type="button" onClick={this.clickButton}>click me!</button>
				<span className={this.state.isTest ? 'frame react' : 'frame tmon'}></span>
			</div>
		);
	}
}
