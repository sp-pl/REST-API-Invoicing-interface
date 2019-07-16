import React from 'react';


class ItemRow extends React.Component{

	constructor(props){
		super(props);
		this.state={

		}
		this.unitPriceInputRef = React.createRef();
		this.netPriceInputRef = React.createRef();
		this.calculatePrices = this.calculatePrices.bind(this);
	}

	calculatePrices(){
		let taxVal = null;
		let input = this.unitPriceInputRef.current
		let input2 = this.netPriceInputRef.current
		console.log(input)

		input2.value = input.value
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
					<select
						name="unit"
						className="form-control"
						onInput={(event) => this.props.updateInvoice(event,this.props.itemIndex)}>
						<option>szt</option>
						<option>godz</option>
						<option>dni</option>
						<option>mc</option>
						<option>km</option>
						<option>m2</option>
						<option>kg</option>
					</select>
				</div>
				<div className="col-md-1">
					<h4 className="title">Jd. / netto</h4>
					<input 
						type="text"
						name="unit_price_net"
						className={
							this.props.posUnitPrice == '' ||
							this.props.posUnitPrice == 0 ||
							this.props.posUnitPrice < 0 ?
							'form-control form-error' 
							: 
							'form-control'
						}
						ref={this.unitPriceInputRef}
						onInput={(event) => (this.props.updateInvoice(event,this.props.itemIndex),this.calculatePrices())}  />
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
						type="text"
						name="total_price_net"
						className='form-control'
						ref={this.netPriceInputRef}
						onInput={(event) => this.props.updateInvoice(event,this.props.itemIndex)}  />
				</div>
				<div className="col-md-1">
					<h4 className="title"> brutto</h4>
					<input 
						type="text"
						name="total_price_gross"
						className='form-control'
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