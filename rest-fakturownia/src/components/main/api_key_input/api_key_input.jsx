import React from 'react';

class apiKeyInput extends React.Component{
	render(){
		return(
			<div>
				<h2>Podaj swój klucz api aby móc dodawać i wyświetlać faktury</h2>
				<p>Testowe dane użytkownika, ważne 30 dni od 25.07.19:</p>
				<p>API-KEY: wWscxLqHfkny3Xkv9Wr/bcaoo5</p>
				<p>NAZWA UŻYTKOWNIKA: bcaoo5</p>
				<input type="text" />
				<input type="text" />
				<button>Zapisz</button>
			</div>
		)
	}
}

export default apiKeyInput;