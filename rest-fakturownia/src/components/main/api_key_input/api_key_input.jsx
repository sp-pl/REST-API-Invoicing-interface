import React from 'react';

import WarningField from '../warnings/warning_field.jsx';

import './api_key_input.scss';

class apiKeyInput extends React.Component{
	render(){
		return(
			<div className="container-fluid d-flex justify-content-center flex-column ">
				<WarningField warns={this.props.warns}/>
				<div className="api-key-input">
					<h2 className="col-md-12 text-center m-bottom-50">Podaj swój klucz api aby móc dodawać i wyświetlać faktury</h2>
					<div className="row test-data text-center m-bottom-50">
						<p className="col-md-12 bold">Testowe dane użytkownika, ważne 30 dni od 25.07.19:</p>
						<p className="col-md-12"><span className="bold">API-KEY:</span> 2qTB3r337KzJq5fQ0p3a/bcaoo8</p>
						<p className="col-md-12"><span className="bold">NAZWA UŻYTKOWNIKA:</span> bcaoo8</p>
						<p className="col-md-12"><span className="bold">HASŁO:</span> haslo1234</p>
					</div>
					<div className="row m-bottom-50">	
						<div className="form-group col-md-12">
							<h4 className="title">klucz api</h4>
							<input
								className="form-control" 
								onInput={(evt) => {this.props.setKeyName(evt); this.props.warnControl();}} 
								type="text"
								name="apiKey" />
						</div>
						<div className="form-group col-md-12">
							<h4 className="title">Nazwa użytkownika</h4>
							<input 
								className="form-control" 
								onInput={(evt) => this.props.setKeyName(evt)} 
								type="text"
								name="userName" />
						</div>
						<button className="btn btn-success" style={{display:'none'}}>Zapisz</button>
					</div>
					<div className="row api-key-output">
						<div className="holder col-md-12">
							<h4 className="title">Aktualny klucz API:</h4>
							<p>
								{this.props.apis[0] === '' ? 
								<span style={{color:'red'}}>Wprowadź klucz</span> 
								: 
								<span style={{color:'#808080'}}>{this.props.apis[0]}</span>}
							</p>
						</div>
						<div className="holder col-md-12">
							<h4 className="title">Aktualna nazwa użytkownika:</h4>
							<p>
								{this.props.apis[1] === '' ?
								<span style={{color:'red'}}>Wprowadź nazwę</span>
								: 
								<span style={{color:'#808080'}}>{this.props.apis[1]}</span>}</p>
						</div>	
					</div>
				</div>
			</div>
		)
	}
}

export default apiKeyInput;