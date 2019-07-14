import React from 'react';
import $ from 'jquery'
class NewInvoiceTemplate extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			endpoint:'https://jolapatola5.fakturownia.pl/invoices.json',
			params:{
				api_token:'B5Lg3uPBCMcDNX5lsQOM/jolapatola5',
				invoice:{
					"kind":"vat", 
					"number": null, 
					"sell_date": "2019-07-14",
					"place":'Lublin',
					"issue_date": "2019-07-14", 
					"payment_to": "2019-07-21",
					"buyer_name": "Client1 SA",
					"seller_name":'',
					"buyer_tax_no": "5252445767",
					positions:[
						{"name":"Produkt A1", "tax":23, "total_price_gross":10.23, "quantity":1}
					]
				}
			}
		}
		this.handleChange = this.handleChange.bind(this);
		this.submitInvoice = this.submitInvoice.bind(this);
	}
	handleChange(event){
		let invoice = this.state.params.invoice
		invoice[event.target.name] = event.target.value
		
		this.setState({
			invoice
		})
		console.log(this.state)
	}
	submitInvoice(event){

		event.preventDefault();
		$.ajax({
		  type: "POST",
		  url: this.state.endpoint,
		  data: this.state.params,
		  dataType: 'json',
		  success: function(data) { alert('invoice created! ' + data['number'])},
		  error: function(data){console.log()}
		});
	}

	render(){
		return(
			<div className="container newInvoice">
				<form 
					onSubmit={this.submitInvoice}>
					<div className="row  newInvoice-dates">
						<div className="col-md-4">
							<h4>Data wystawienia</h4>
							<input 
								className="form-control" 
								type="date"
								name="issue_date"
								onChange={this.handleChange} />
						</div>
						<div className="col-md-4">
							<h4>Miejsce wystawienia</h4>
							<input 
								className="form-control" 
								type="text"
								name="place"
								onChange={this.handleChange} />
						</div>
						<div className="col-md-4">
							<h4>Data sprzedaży</h4>
							<input 
								className="form-control" 
								type="date"
								name="sell_date"
								onChange={this.handleChange} />
						</div>
					</div>
					<div className="row sides">
						<div className="col-md-6">
							<h3>Sprzedawca</h3>
							<input 
								className="form-control" 
								type="text"
								name="seller_name"
								onChange={this.handleChange} />
							<div>
								<h4>NIP</h4>
								<input 
									className="form-control" 
									type="text"
									name="seller_tax_no"
									onChange={this.handleChange} />
							</div>
							<div>
								<h4>Ulica i numer</h4>
								<input 
									className="form-control" 
									type="text"
									name="seller_street"
									onChange={this.handleChange}/>
							</div>
							<div>
								<div>
									<h4>Kod pocztowy</h4>
									<input 
										className="form-control" 
										type="text"
										name="seller_post_code"
										onChange={this.handleChange}/>
								</div>
								<div>
									<h4>Miejscowość</h4>
									<input 
										className="form-control" 
										type="text"
										name="seller_city"
										onChange={this.handleChange}/>
								</div>
							</div>
							<div>
								<div>
									<h4>Konto</h4>
									<input 
										className="form-control" 
										type="text"
										name="seller_account_no"
										onChange={this.handleChange}/>
								</div>
								<div>
									<h4>Bank</h4>
									<input 
										className="form-control" 
										type="text"
										name="seller_bank"
										onChange={this.handleChange}/>
								</div>
							</div>
						</div>
						<div className="col-md-6">
							<h3>Nabywca</h3>
							<input 
								className="form-control" 
								type="text"
								name="buyer_name" />
							<div>
								<h4>NIP</h4>
								<div>
									<input 
										className="form-control" 
										type="text"
										name="buyer_tax_no"
										onChange={this.handleChange} />
								</div>
							</div>
							<div>
								<h4>Ulica i numer</h4>
								<div>
									<input 
										className="form-control" 
										type="text"
										name="buyer_street"
										onChange={this.handleChange} />
								</div>
							</div>
							<div>
								<div>
									<h4>Kod pocztowy</h4>
									<input 
										className="form-control" 
										type="text"
										name="buyer_post_code"
										onChange={this.handleChange} />
								</div>
								<div className="form-group">
									<h4>Miejscowość</h4>
									<input 
										className="form-control" 
										type="text"
										name="buyer_city"
										onChange={this.handleChange}/>
								</div>
							</div>
						</div>
					</div>
					<div className="row newPos">
						<div>
							<h4>Nazwa</h4>
							<input 
							type="text" />
						</div>
						<div>
							<h4>Ilość</h4>
							<input type="number" />
						</div>
						<div>
							<h4>Jednostka</h4>
							<input type="text" />
						</div>
						<div>
							<h4>Cena Netto</h4>
							<input type="text" />
						</div>
						<div>
							<h4>Vat %</h4>
							<input type="text" />
						</div>
						<div>
							<h4>Wartość netto</h4>
							<input type="number" />
						</div>
						<div>
							<h4>Wartość brutto</h4>
							<input type="number" />
						</div>		
					</div>
					<div className="summary">
						<div className="">
							<span className="">Suma netto</span>
							<span></span>
						</div>
						<div className="">
							<span>Suma VAT</span>
							<span></span>
						</div>
						<div className="">
							<span>Suma Brutto</span>
							<span></span>
						</div>
					</div>
					<div className="">

					</div>
					<button type="submit">
						Zapisz
					</button>
				</form>	
			</div>
		)
	}
}

export default NewInvoiceTemplate