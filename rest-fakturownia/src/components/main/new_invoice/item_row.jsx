import React from 'react';


class ItemRow extends React.Component{

	constructor(props){
		super(props);
		this.state={

		}
	}
	render(){
		return(
			<div className="row newPos form-group">
				<div className="col-md-6">
					<h4 className="title">Nazwa</h4>
					<input 
						type="text"
						className={
							this.props.posName == '' ?
							'form-control form-error' 
							: 
							'form-control'
						}
						name="name"
						onInput={(event) => (this.props.updateInvoice(event,this.props.itemIndex), this.props.validateFields(event))} />
				</div>
				<div className="col-md-1">
					<h4 className="title">Ilość</h4>
					<input 
						type="number"
						name="quantity"
						className={
							this.props.posQt == '' ||
							this.props.posQt == 0 ||
							this.props.posQt < 0 ?
							'form-control form-error' 
							: 
							'form-control'
						}
						onInput={(event) => this.props.updateInvoice(event,this.props.itemIndex)} />
				</div>
				<div className="col-md-1">
					<h4 className="title">Jednostka</h4>
					<input 
						type="text"
						name="unit"
						className="form-control" 
						onInput={(event) => this.props.updateInvoice(event,this.props.itemIndex)} />
				</div>
				<div className="col-md-1">
					<h4 className="title">Cena Netto</h4>
					<input 
						type="text"
						name="unit_price_net"
						className="form-control"
						onInput={(event) => this.props.updateInvoice(event,this.props.itemIndex)}  />
				</div>
				<div className="col-md-1">
					<h4 className="title">Vat %</h4>
					<select 
						class="form-control"
						name="tax"
						onChange={(event) => this.props.updateInvoice(event,this.props.itemIndex)}>
						<option>23</option>
						<option>8</option>
						<option>7</option>
						<option>5</option>
						<option>8</option>
					</select>
				</div>

				<div className="col-md-1">
					<h4 className="title"> netto</h4>
					<input 
						type="number"
						name="total_price_net"
						className="form-control"
						onInput={(event) => this.props.updateInvoice(event,this.props.itemIndex)}  />
				</div>
				<div className="col-md-1">
					<h4 className="title"> brutto</h4>
					<input 
						type="number"
						name="total_price_gross"
						className="form-control"
						onInput={(event) => this.props.updateInvoice(event,this.props.itemIndex)}  />
				</div>
				<div 
					className="remove btn btn-danger"
					onClick={() => this.props.remove(this.props.itemIndex)}>
					X
				</div>		
			</div>
		)
	}
}

export default ItemRow;