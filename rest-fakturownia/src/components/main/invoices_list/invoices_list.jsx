import React from 'react';

import $ from 'jquery';

import InvoicesListRow from './invoices_list_row.jsx';

class InvoicesList extends React.Component{
	constructor(){
		super();
		this.state={
			response: null
		}
		this.fetchInvoices = this.fetchInvoices.bind(this);
	}
	fetchInvoices(){
		fetch("https://bcaoo8.fakturownia.pl/invoices.json?period=this_month&api_token=2qTB3r337KzJq5fQ0p3a/bcaoo8")
			.then( resp => {
				return resp.json();
			})
			.then( json => {
				this.setState({
					response:json
				})
			})
	}

	componentDidMount(){
		this.fetchInvoices();
	}
	render(){
		return(
			<div className="container-fluid">
				<table className="table">
					<thead>
						<tr>
							<th>NUMER</th>
							<th>WARTOŚĆ NETTO</th>
							<th>WARTOŚĆ BRUTTO</th>
							<th>KLIENT</th>
							<th>DATA WYSTAWIENIA</th>
							<th>DATA PŁATNOŚCI</th>
							<th>PRODUKT/USŁUGA</th>
							<th>STATUS</th>
						</tr>
					</thead>
					<InvoicesListRow invoiceData={this.state.response}/>
				</table>
			</div>
		)
	};
};

export default InvoicesList;