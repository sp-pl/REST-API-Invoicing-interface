import React from 'react';
import jQuery from 'jquery';
import Popper from 'popper.js';
import Bootstrap from 'bootstrap';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Nav from './components/nav/nav.jsx';
import NewInvoiceTemplate from './components/main/new_invoice/new_invoice_template.jsx';

class App extends React.Component{
	constructor(){
		super();
		this.state = {

		}
	}

	render(){
		return (
				<div className="App">
				  <Nav />
				</div>
		);
	}
}

export default App;
