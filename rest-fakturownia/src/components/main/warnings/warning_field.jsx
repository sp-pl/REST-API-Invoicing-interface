import React from 'react';

import './warning_field.scss';

function WarningField(props){
	console.log(props)
	let allWarnings = Object.keys(props.warns).map((keyName,i) => {
			if(props.warns[keyName]){
				return <p className="singleWarning" key={i}>{props.warns[keyName]}</p>;
			}
		}
	)
	return(
		<div className="warning bg-warning">
			{allWarnings}
		</div>
	)
}
export default WarningField;