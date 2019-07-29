import React from 'react';

class apiKeyInput extends React.Component{
	render(){
		return(
			<div className="container-fluid">
				<div className="row">
					<h2 className="col-md-12 text-center m-bottom-50">Podaj swój klucz api aby móc dodawać i wyświetlać faktury</h2>
					<div className="col-md-4">
						<p className="col-md-12">Testowe dane użytkownika, ważne 30 dni od 25.07.19:</p>
						<p className="col-md-12">API-KEY: 2qTB3r337KzJq5fQ0p3a/bcaoo8</p>
						<p className="col-md-12">NAZWA UŻYTKOWNIKA: bcaoo8</p>
						<p className="col-md-12">HASŁO: haslo1234</p>
					</div>
					<div className="col-md-8">
						<div className="row">
							<div className="col-md-6">	
								<div
									className="form-group">
									<h3>klucz api</h3>
									<input
										className="form-control" 
										onInput={(evt) => this.props.setKeyName(evt)} 
										type="text"
										name="apiKey" />
								</div>
								<div 
									className="form-group">
									<h3>Nazwa użytkownika</h3>
									<input 
										className="form-control" 
										onInput={(evt) => this.props.setKeyName(evt)} 
										type="text"
										name="userName" />
								</div>
								<button className="btn btn-success" style={{display:'none'}}>Zapisz</button>
							</div>
							<div className="col-md-6">
								<h3>Aktualny klucz API:</h3>
								<p>{this.props.apis[0] === '' ? 'Wprowadź klucz' : this.props.apis[0]} </p>
								<h3>Aktualna nazwa użytkownika:</h3>
								<p>{this.props.apis[1] === '' ? 'Wprowadź nazwę' : this.props.apis[1]}</p>
							</div>
						</div>		
					</div>
				</div>
			</div>
		)
	}
}

export default apiKeyInput;