import React from 'react';

class NewInvoiceTemplate extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			dates:{
				issue_date: '',
				place:'',
				sell_date:''
			},
			sides:[
				{
					seller_name:'',
					nip:'',
					street:'',
					post_code:'',
					city:'',
					account_no:'',
					bank:''
				},
				{
					buyer_name:'',
					nip:'',
					street:'',
					post_code:'',
					city:''
				}
			],
			invoice_pos:[
				{
					name:'',
					quantity:'',
					unit:'',
					vat:'',
					netto:'',
					brutto:''
				}
			]
		}
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event){
		this.setState({
			[event.target.name]: event.target.value
		});
		console.log(event.target.value)
	}

	render(){
		return(
			<div className="container newInvoice">
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
							onChange={this.handleChange} />
						<div>
							<h4>NIP</h4>
							<input 
								className="form-control" 
								type="text"
								onChange={this.handleChange} />
						</div>
						<div>
							<h4>Ulica i numer</h4>
							<input 
								className="form-control" 
								type="text"
								onChange={this.handleChange}/>
						</div>
						<div>
							<div>
								<h4>Kod pocztowy</h4>
								<input 
									className="form-control" 
									type="text"
									onChange={this.handleChange}/>
							</div>
							<div>
								<h4>Miejscowość</h4>
								<input 
									className="form-control" 
									type="text"
									onChange={this.handleChange}/>
							</div>
						</div>
						<div>
							<div>
								<h4>Konto</h4>
								<input 
									className="form-control" 
									type="text"
									onChange={this.handleChange}/>
							</div>
							<div>
								<h4>Bank</h4>
								<input 
									className="form-control" 
									type="text"
									onChange={this.handleChange}/>
							</div>
						</div>
					</div>
					<div className="col-md-6">
						<h3>Nabywca</h3>
						<input 
							className="form-control" 
							type="text" />
						<div>
							<h4>NIP</h4>
							<div>
								<input 
									className="form-control" 
									type="text"
									onChange={this.handleChange} />
							</div>
						</div>
						<div>
							<h4>Ulica i numer</h4>
							<div>
								<input 
									className="form-control" 
									type="text"
									onChange={this.handleChange} />
							</div>
						</div>
						<div>
							<div>
								<h4>Kod pocztowy</h4>
								<input 
									className="form-control" 
									type="text"
									onChange={this.handleChange} />
							</div>
							<div className="form-group">
								<h4>Miejscowość</h4>
								<input 
									className="form-control" 
									type="text"
									onChange={this.handleChange}/>
							</div>
						</div>
					</div>
				</div>
				<div className="row newPos">
					<div>
						<h4>Nazwa</h4>
						<input type="text" />
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
			</div>
		)
	}
}

export default NewInvoiceTemplate