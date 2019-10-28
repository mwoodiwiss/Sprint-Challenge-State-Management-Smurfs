import React from 'react';

const Smurf = props => {
	return (
		<div className='smurf'>

			<h1 className="name">{props.smurf.name}</h1>

			<p className="age">Age: {props.smurf.age}</p>

            <p className="height">Height: {props.smurf.height}</p>
		</div>
	);
};

export default Smurf;