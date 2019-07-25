import React from 'react';

function WarningField(props){
	console.log(props.warns)
	let allWarnings = Object.keys(props.warns).map((keyName,i) => {
			if(props.warns[keyName]){
				return <p key={i}>{props.warns[keyName]}</p>;
			}
		}
	)
	return(
		<div className="bg-warning">
			{allWarnings}
		</div>
	)
}
export default WarningField;