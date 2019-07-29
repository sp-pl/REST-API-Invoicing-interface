import React from 'react';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

function InvoicesListRow(props){
	let invoiceData = props.invoiceData;
	let allInvoicesRows = null;
	if(invoiceData){
		allInvoicesRows = invoiceData.map((item,index) => {
			return <tr key={invoiceData[index].id}>
					<td>{invoiceData[index].number}</td>
					<td>{invoiceData[index].price_net}</td>
					<td>{invoiceData[index].price_gross}</td>
					<td>{invoiceData[index].buyer_name}</td>
					<td>{invoiceData[index].transaction_date}</td>
					<td>{invoiceData[index].payment_to}</td>
					<td>{invoiceData[index].product_cache}</td>
					<td>{invoiceData[index].status}</td>
				   </tr>; 
		})
	};	
	return(
		<tbody>
			{allInvoicesRows}
		</tbody>
	)
}

export default InvoicesListRow;