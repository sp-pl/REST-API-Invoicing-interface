import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import ApiKeyInput from '../main/api_key_input/api_key_input.jsx';
import NewInvoiceTemplate from '../main/new_invoice/new_invoice_template.jsx';

class Nav extends React.Component{
	constructor(){
		super();
		this.state = {
			apiKey:'',
			userName:''
		};
		this.setApiKeyAndUserName = this.setApiKeyAndUserName.bind(this);
	};
	setApiKeyAndUserName(evt){
		evt.persist();
		let name = evt.target.name;
		this.setState({
			[name] : evt.target.value
		});
	}
	render(){
		return(
			<Router>
				<nav className="navbar navbar-expand-lg navbar-light bg-light">
				  <a className="navbar-brand" href="#">Navbar</a>
				  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				    <span className="navbar-toggler-icon"></span>
				  </button>
				  <div className="collapse navbar-collapse" id="navbarSupportedContent">
				    <ul className="navbar-nav mr-auto">
				      <li className="nav-item active">
				      	<Link className="nav-link" to="/">Kod autoryzacyjny</Link>
				      </li>
				      <li className="nav-item">
				        <a className="nav-link" href="#">Lista faktur</a>
				      </li>
				      <li className="nav-item">
				        <Link className="nav-link" to="/dodaj_fakture">Dodaj fakturę</Link>
				      </li>
				    </ul>
				  </div>
				</nav>
				<Route 
					exact 
					path="/" 
					render={(props) =>
					 <ApiKeyInput 
					 	setKeyName={this.setApiKeyAndUserName} 
					 />} />
				<Route
					exact 
					path="/dodaj_fakture"  
					render={(props) => 
					 <NewInvoiceTemplate
					  apis={[this.state.apiKey,this.state.userName]} 
					 />} />
			</Router>
		)
	}
}

export default Nav;