import React from 'react';

import $ from 'jquery';

class InvoicesList extends React.Component{
	constructor(){
		super();
		this.fetchInvoices = this.fetchInvoices.bind(this);
	}
	fetchInvoices(){
		$.ajax({
			type: "GET",
			url:"https://bcaoo8.fakturownia.pl/invoices.json?period=this_month&api_token=2qTB3r337KzJq5fQ0p3a/bcaoo8",
			success:function(data){console.log(data)}
		})
	}
	componentDidMount(){
		this.fetchInvoices();
	}
	render(){
		return(
			<div>
				

			</div>
		)
	};
};

export default InvoicesList;