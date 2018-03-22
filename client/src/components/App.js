import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import 'materialize-css/dist/js/materialize.min.js';
import 'materialize-css/dist/css/materialize.min.css';
import PaymentForm from './PaymentForm';
import LoginForm from './LoginForm';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className="container">
					<Route exact path="/login" component={LoginForm} />
					<Route exact path="/" component={PaymentForm} />
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
