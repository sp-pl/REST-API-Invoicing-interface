import React from 'react';
import $ from 'jquery'

import ItemRow from './item_row.jsx';

import './newInvoice.scss';

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
					"sell_date": "2019-07-14",
					"issue_date": "2019-07-14", 
					"payment_to": "2019-07-21",
					"buyer_name": "",
					"buyer_tax_no": "5252445767",
					"buyer_street": "",
					"buyer_post_code": "",
					"buyer_city": "",
					"seller_name":'',
					"seller_street":'',
					"seller_post_code":'',
					"seller_city":'',
					"seller_bank_account":'',
					"seller_tax_no": '',
					positions:[
						{
						 "name":"Produkt A1",
						 "tax":23,
						 "total_price_gross":10.23,
						 "quantity":1
						}
					]
				}
			}
		}
		this.handleChange = this.handleChange.bind(this);
		this.submitInvoice = this.submitInvoice.bind(this);
		this.validateFields = this.validateFields.bind(this);
		this.addProductRow = this.addProductRow.bind(this);
	}

	handleChange(event){
		let invoice = this.state.params.invoice
		invoice[event.target.name] = event.target.value
		
		this.setState({
			invoice
		})
		console.log(this.state.params.invoice[event.target.name])
	}

	validateFields(){
		var checkedField = {...this.state.params.invoice};

		if(this.state.params.invoice.seller_name === ''){
			checkedField.seller_name = false;
			this.setState({
				checkedField: false
			})
			return false;
		}else if(this.state.params.invoice.buyer_name === ''){
			checkedField.buyer_name = false
			this.setState({
				checkedField: false
			})
			return false
		}else{
			return true
		}
	}

	submitInvoice(event){
		event.preventDefault();
		if(this.validateFieds()){
			$.ajax({
			  type: "POST",
			  url: this.state.endpoint,
			  data: this.state.params,
			  dataType: 'json',
			  success: function(data) { alert('invoice created! ' + data['number'])},
			  error: function(data){console.log()}
			});
		}else{
			return
		}
	}
	addProductRow(event){
		event.preventDefault();
		var positions = {...this.state.params.invoice.positions}
		this.setState={
			positions : Object.assign({}, positions, positions)

		}
		console.log(positions)		
	}

	render(){
		return(
			<div className="container newInvoice">
				<form 
					className="main-form"
					onSubmit={this.submitInvoice}>
					<div className="row  newInvoice-dates">
						<div className="col-md-4 form-group">
							<h4 className="title">Data wystawienia</h4>
							<input 
								className="form-control" 
								type="date"
								name="issue_date"
								onChange={this.handleChange} />
						</div>
						<div className="col-md-4 form-group">
							<h4 className="title">Miejsce wystawienia</h4>
							<input 
								className="form-control" 
								type="text"
								name="place"
								onChange={this.handleChange} />
						</div>
						<div className="col-md-4 form-group">
							<h4 className="title">Data sprzedaży</h4>
							<input 
								className="form-control" 
								type="date"
								name="sell_date"
								onChange={this.handleChange} />
						</div>
					</div>
					<div className="row sides">
						<div className="col-md-6 ">
							<div className="form-group">
								<h4 className="title">Sprzedawca</h4>
								<input 
									className={
										this.state.params.invoice.seller_name === '' || 
										this.state.params.invoice.seller_name === false ?
										'error form-control'
										:
										'form-control'
									} 
									type="text"
									name="seller_name"
									onChange={this.handleChange} />
							</div>
							<div className="form-group">
								<h4 className="title">NIP</h4>
								<input 
									className="form-control" 
									type="text"
									name="seller_tax_no"
									onChange={this.handleChange} />
							</div>
							<div className="form-group">
								<h4 className="title">Ulica i numer</h4>
								<input 
									className="form-control" 
									type="text"
									name="seller_street"
									onChange={this.handleChange}/>
							</div>
							<div className="form-group row">
								<div className="col-md-4">
									<h4 className="title">Kod pocztowy</h4>
									<input 
										className="form-control" 
										type="text"
										name="seller_post_code"
										onChange={this.handleChange}/>
								</div>
								<div className="col-md-8">
									<h4 className="title">Miejscowość</h4>
									<input 
										className="form-control" 
										type="text"
										name="seller_city"
										onChange={this.handleChange}/>
								</div>
							</div>
							<div className="form-group row">
								<div className="col-md-8">
									<h4 className="title">Konto</h4>
									<input 
										className="form-control" 
										type="text"
										name="seller_account_no"
										onChange={this.handleChange}/>
								</div>
								<div className="col-md-4">
									<h4 className="title">Bank</h4>
									<input 
										className="form-control" 
										type="text"
										name="seller_bank"
										onChange={this.handleChange}/>
								</div>
							</div>
						</div>
						<div className="col-md-6">
							<div className="form-group">
								<h4 className="title">Nabywca</h4>
								<input 
									className="form-control" 
									type="text"
									name="buyer_name"
									className={
										this.state.params.invoice.buyer_name === '' || 
										this.state.params.invoice.buyer_name === false ?
										'error form-control'
										:
										'form-control'
									}  />
							</div>
							<div className="form-group">
								<h4 className="title">NIP</h4>
								<div>
									<input 
										className="form-control" 
										type="text"
										name="buyer_tax_no"
										onChange={this.handleChange} />
								</div>
							</div>
							<div className="form-group">
								<h4 className="title">Ulica i numer</h4>
								<div>
									<input 
										className="form-control" 
										type="text"
										name="buyer_street"
										onChange={this.handleChange} />
								</div>
							</div>
							<div className="form-group row">
								<div className="col-md-4">
									<h4 className="title">Kod pocztowy</h4>
									<input 
										className="form-control" 
										type="text"
										name="buyer_post_code"
										onChange={this.handleChange} />
								</div>
								<div className="col-md-8">
									<h4 className="title">Miejscowość</h4>
									<input 
										className="form-control" 
										type="text"
										name="buyer_city"
										onChange={this.handleChange}/>
								</div>
							</div>
						</div>
					</div>
					<ItemRow addProductRow={this.addProductRow}/>
					<div className="summary">
						<div className="">
							<span className="">Netto</span>
							<span></span>
						</div>
						<div className="">
							<span>Suma VAT</span>
							<span></span>
						</div>
						<div className="">
							<span>Brutto</span>
							<span></span>
						</div>
					</div>
					<div className="">

					</div>
					<button 
						type="submit"
						onClick={this.submitInvoice}>
						Zapisz
					</button>
				</form>	
			</div>
		)
	}
}

export default NewInvoiceTemplate