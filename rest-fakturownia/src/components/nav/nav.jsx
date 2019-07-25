import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import apiKeyInput from '../main/api_key_input/api_key_input.jsx';
import newInvoiceTemplate from '../main/new_invoice/new_invoice_template.jsx';

class Nav extends React.Component{

	render(){
		return(
			<Router>
				<nav class="navbar navbar-expand-lg navbar-light bg-light">
				  <a class="navbar-brand" href="#">Navbar</a>
				  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				    <span class="navbar-toggler-icon"></span>
				  </button>
				  <div class="collapse navbar-collapse" id="navbarSupportedContent">
				    <ul class="navbar-nav mr-auto">
				      <li class="nav-item active">
				      	<Link className="nav-link" to="/">Kod autoryzacyjny</Link>
				      </li>
				      <li class="nav-item">
				        <a class="nav-link" href="#">Lista faktur</a>
				      </li>
				      <li class="nav-item">
				        <Link className="nav-link" to="/dodaj_fakture">Dodaj fakturę</Link>
				      </li>
				    </ul>
				  </div>
				</nav>
				<Route path="/" exact component={apiKeyInput} />
				<Route path="/dodaj_fakture" exact component={newInvoiceTemplate} />
			</Router>
		)
	}
}

export default Nav;