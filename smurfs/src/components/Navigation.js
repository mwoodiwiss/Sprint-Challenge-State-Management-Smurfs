import React from "react";
import { NavLink } from 'react-router-dom';
import './Navigation.css'

const Navigation = () => {

	return (
		<div className="navigation">
			<NavLink to="/">Smurfs</NavLink>
			<NavLink to="/form">Add A Smurf</NavLink>
		</div>
	);
};

export default Navigation;