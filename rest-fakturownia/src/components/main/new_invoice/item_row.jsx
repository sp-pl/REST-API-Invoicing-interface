import React from 'react';


class ItemRow extends React.Component{

	constructor(){
		super();
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
						className="form-control" />
				</div>
				<div className="col-md-1">
					<h4 className="title">Ilość</h4>
					<input 
						type="number"
						className="form-control" />
				</div>
				<div className="col-md-1">
					<h4 className="title">Jednostka</h4>
					<input 
						type="text"
						className="form-control" />
				</div>
				<div className="col-md-1">
					<h4 className="title">Cena Netto</h4>
					<input 
						type="text"
						className="form-control" />
				</div>
				<div className="col-md-1">
					<h4 className="title">Vat %</h4>
					<input 
						type="text"
						className="form-control" />
				</div>
				<div className="col-md-1">
					<h4 className="title"> netto</h4>
					<input 
						type="number"
						className="form-control" />
				</div>
				<div className="col-md-1">
					<h4 className="title"> brutto</h4>
					<input 
						type="number"
						className="form-control" />
				</div>		
			</div>
		)
	}
}

export default ItemRow;