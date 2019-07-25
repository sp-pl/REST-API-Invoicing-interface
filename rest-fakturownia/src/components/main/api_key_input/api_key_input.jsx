import React from 'react';

class apiKeyInput extends React.Component{
	render(){
		return(
			<div>
				<h2>Podaj swój klucz api aby móc dodawać i wyświetlać faktury</h2>
				<p>Testowe dane użytkownika, ważne 30 dni od 25.07.19:</p>
				<p>API-KEY: wWscxLqHfkny3Xkv9Wr/bcaoo5</p>
				<p>NAZWA UŻYTKOWNIKA: bcaoo5</p>
				<label 
					className="form-group">
					<h3>klucz api</h3>
					<input
						className="form-control" 
						onInput={(evt) => this.props.setKeyName(evt)} 
						type="text"
						name="userName" />
				</label>
				<br/>
				<label 
					className="form-group">
					<h3>Nazwa użytkownika</h3>
					<input 
						className="form-control" 
						onInput={(evt) => this.props.setKeyName(evt)} 
						type="text"
						name="apiKey" />
				</label>	
				<button>Zapisz</button>
			</div>
		)
	}
}

export default apiKeyInput;