import React from 'react';
import jQuery from 'jquery';
import Popper from 'popper.js';
import Bootstrap from 'bootstrap';

import Nav from './components/nav/nav.jsx';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';


class App extends React.Component{
	render(){
		return (
				<div className="App">
				  <Nav />
				</div>
		);
	}
}

export default App;
