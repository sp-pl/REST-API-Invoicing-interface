import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import ApiKeyInput from '../main/api_key_input/api_key_input.jsx';
import InvoicesList from '../main/invoices_list/invoices_list.jsx';
import NewInvoiceTemplate from '../main/new_invoice/new_invoice_template.jsx';

import Navbar from './nav.scss';

class Nav extends React.Component{
	constructor(){
		super();
		this.state = {
			apiKey:'',
			userName:'',
			warns:{
				apiKey: '',
				userName: ''
			}
		};
		this.setApiKeyAndUserName = this.setApiKeyAndUserName.bind(this);
		this.warnControl = this.warnControl.bind(this);
	};
	setApiKeyAndUserName(evt){
		evt.persist();
		let name = evt.target.name;
		this.setState({
			[name] : evt.target.value
		});
	}
	warnControl(){
		let warns = this.state.warns;
		if(this.state.apiKey.length < 15){
			warns.apiKey = 'Klucz Api wydaje się nieprawidłowy, sprawdź go.';
			this.setState({
				warns
			})
		}else{
			warns.apiKey = '';
			this.setState({
				warns
			})
		}
		if(this.state.userName.length < 1){
			warns.userName = 'Nazwa użytkownika wydaje się nieprawidłowa, sprawdź ją.'
			this.setState({
				warns
			})
		}else{
			warns.userName = '';
			this.setState({
				warns
			})
		}
	}
	componentDidMount(){
		this.warnControl();
	}
	render(){
		return(
			<Router>
				<nav className="navbar navbar-expand-lg navbar-light bg-light">
					<a className="navbar-brand" href="#">Navbar</a>
					<button className="navbar-toggler" 
					type="button" 
					data-toggle="collapse" 
					data-target="#navbarSupportedContent" 
					aria-controls="navbarSupportedContent" 
					aria-expanded="false" 
					aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav mr-auto">
							<li className="nav-item active">
								<Link className="nav-link" to="/">Kod autoryzacyjny</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/lista_faktur">Lista faktur</Link>
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
					 	warnControl={this.warnControl}
					 	warns={this.state.warns}					 	
					 	apis={[this.state.apiKey,this.state.userName]} />} 
					 />
				<Route
					exact 
					path="/lista_faktur"  
					render={(props) => 
					 <InvoicesList
					 warns={this.state.warns} />}
					/>	 
				<Route
					exact 
					path="/dodaj_fakture"  
					render={(props) => 
					 <NewInvoiceTemplate
					  warns={this.state.warns}
					  apis={[this.state.apiKey,this.state.userName]} />}
				/>
			</Router>
		)
	}
}

export default Nav;