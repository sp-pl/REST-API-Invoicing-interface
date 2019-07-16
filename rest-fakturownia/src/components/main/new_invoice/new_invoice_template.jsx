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
					"buyer_street": "aaa",
					"buyer_post_code": "",
					"buyer_city": "",
					"seller_name":'aaa',
					"seller_street":'',
					"seller_post_code":'',
					"seller_city":'',
					"seller_bank_account":'',
					"seller_tax_no": '',
					positions:[
						{
						 "name":"",
						 "tax":'',
						 "total_price_gross":'10.23',
						 "quantity":'',
						 "unit": null
						},
						{
						 "name":"",
						 "tax":23,
						 "total_price_gross":10.23,
						 "quantity":'',
						 "unit": null
						}
					]
				}
			}
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleRowDataChange = this.handleRowDataChange.bind(this);
		this.addProductRow = this.addProductRow.bind(this);
		this.removeProductRow = this.removeProductRow.bind(this);
		this.validateFields = this.validateFields.bind(this);
		this.validateRowFields = this.validateRowFields.bind(this);
		this.submitInvoice = this.submitInvoice.bind(this);
	}

	handleChange(event){
		let invoice = this.state.params.invoice;
		invoice[event.target.name] = event.target.value;
		this.setState({
			invoice
		});
	};

	handleRowDataChange(event,id){
		let invoice = this.state.params.invoice;
		invoice.positions[id][event.target.name] = event.target.value;
		console.log(event.target.value)
		this.setState({
			invoice
		})
	}
	
	addProductRow(event){
		event.preventDefault();
		let positions = this.state.params.invoice.positions;
		this.setState({
			positions: positions.push({
				"name":"dups",
				"tax":null,
				"total_price_gross":null,
				"quantity":null,
				"unit":''
			})
		},this.forceUpdate());		
	};

	removeProductRow(index) {
		let positionsUpdated = this.state.params.invoice.positions.filter(
	      (_, idx) => idx !== index
	    );
		
		let paramsUpdated = this.state.params;
	    paramsUpdated.invoice.positions = positionsUpdated;

	    this.setState({ params: paramsUpdated });
	};

	//invoice to be valid and saved need to have not empty fields like:
	//seller_name, buyer_name
	validateFields(){
		var checkedField = {...this.state.params.invoice};
		if(this.state.params.invoice.seller_name === ''){
			return false;
		}else if(this.state.params.invoice.buyer_name === ''){
			return false
		}else{
			return true
		}
	};

	validateRowFields(event){
	    console.log('dupa')
	}

	submitInvoice(event){
		event.preventDefault();
		if(this.validateFields()){
			$.ajax({
			  type: "POST",
			  url: this.state.endpoint,
			  data: this.state.params,
			  dataType: 'json',
			  success: function(data) { alert('invoice created! ' + data['number'])},
			  error: function(data){console.log()}
			});
		}else{
			console.log('popraw pola')
			return
		}
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
								<h4 className='title'>
									Sprzedawca
								</h4>
								<input 
									className={
										this.state.params.invoice.seller_name === '' ?
										'form-error form-control'
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

					{
						this.state.params.invoice.positions.map((position, index) =>(
				          <ItemRow
				            key={index}
				            itemIndex={index}
				            position={position}
				            remove={this.removeProductRow}
				            updateInvoice={this.handleRowDataChange}
				            validateFields={this.validateRowFields}
				            posName={this.state.params.invoice.positions[index].name}
				            posQt={this.state.params.invoice.positions[index].quantity} />
			        ))}

					<button
						className="btn btn-primary" 
						onClick={this.addProductRow}>
						dodaj produkt 
					</button>

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
						className="btn btn-success"
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