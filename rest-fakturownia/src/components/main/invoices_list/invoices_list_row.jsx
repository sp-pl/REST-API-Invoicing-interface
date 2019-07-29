import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import InvoiceSingle from './invoice_single.jsx';



function InvoicesListRow(props){
	let invoiceData = props.invoiceData;
	let allInvoicesRows = null;
	if(invoiceData){
		allInvoicesRows = invoiceData.map((item,index) => {
			return <tr key={invoiceData[index].id}>
					<td>
						<Link to='/dups' > 
							{invoiceData[index].number}
						</Link>
						</td>
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
		<Router>
			<tbody>
			{allInvoicesRows}

		<Route exact path="/dups" render={(props) => <InvoiceSingle/>} />				
			</tbody>
		</Router>
	)
}


export default InvoicesListRow;