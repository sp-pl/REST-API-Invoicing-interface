import React from 'react';



function InvoicesListRow(props){

	console.log(props.invoiceData)
	let invoiceData = props.invoiceData;
	let allInvoicesRows = null;
	if(invoiceData){
		allInvoicesRows = invoiceData.map((item,index) => {
			return <td>{invoiceData[index].number}</td>
		})
	};	
		return(
			<tr className="singleRow">
				{allInvoicesRows}
			</tr>
		)
}

export default InvoicesListRow;