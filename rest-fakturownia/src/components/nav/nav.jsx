import React from 'react';

class Nav extends React.Component{

	render(){
		return(
			<nav class="navbar navbar-expand-lg navbar-light bg-light">
			  <a class="navbar-brand" href="#">Navbar</a>
			  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			    <span class="navbar-toggler-icon"></span>
			  </button>

			  <div class="collapse navbar-collapse" id="navbarSupportedContent">
			    <ul class="navbar-nav mr-auto">
			      <li class="nav-item active">
			        <a class="nav-link" href="#">Kod autoryzacyjny</a>
			      </li>
			      <li class="nav-item">
			        <a class="nav-link" href="#">Lista faktur</a>
			      </li>
			      <li class="nav-item">
			        <a class="nav-link" href="#">Dodaj fakturę</a>
			      </li>
			    </ul>
			  </div>
			</nav>
		)
	}
}

export default Nav;