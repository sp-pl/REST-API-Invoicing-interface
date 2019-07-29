import React from 'react';

import './api_key_input.scss';

class apiKeyInput extends React.Component{
	render(){
		return(
			<div className="container-fluid api-key-input">
				<div className="row">
					<h2 className="col-md-12 text-center m-bottom-50">Podaj swój klucz api aby móc dodawać i wyświetlać faktury</h2>
					<div className="col-md-4">
						<p className="col-md-12">Testowe dane użytkownika, ważne 30 dni od 25.07.19:</p>
						<p className="col-md-12"><span className="bold">API-KEY:</span> 2qTB3r337KzJq5fQ0p3a/bcaoo8</p>
						<p className="col-md-12"><span className="bold">NAZWA UŻYTKOWNIKA:</span> bcaoo8</p>
						<p className="col-md-12"><span className="bold">HASŁO:</span> haslo1234</p>
					</div>
					<div className="col-md-8">
						<div className="row">
							<div className="col-md-6">	
								<div
									className="form-group">
									<h4 className="title">klucz api</h4>
									<input
										className="form-control" 
										onInput={(evt) => this.props.setKeyName(evt)} 
										type="text"
										name="apiKey" />
								</div>
								<div 
									className="form-group">
									<h4 className="title">Nazwa użytkownika</h4>
									<input 
										className="form-control" 
										onInput={(evt) => this.props.setKeyName(evt)} 
										type="text"
										name="userName" />
								</div>
								<button className="btn btn-success" style={{display:'none'}}>Zapisz</button>
							</div>
							<div className="col-md-6 api-key-output">
								<div className="holder">
									<h4 className="title">Aktualny klucz API:</h4>
									<p>
										{this.props.apis[0] === '' ? 
										<span style={{color:'red'}}>Wprowadź klucz</span> 
										: 
										<span style={{color:'#808080'}}>{this.props.apis[0]}</span>}
									</p>
								</div>
								<div className="holder">
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
				</div>
			</div>
		)
	}
}

export default apiKeyInput;