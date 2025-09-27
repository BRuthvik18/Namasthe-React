import { Link } from "react-router-dom";
import { FoodLogo } from "../Utilities/constants";
import { useState } from "react";
import About from './About';
const HeaderComponent = () => {
	return (
		<div className="header">
			<div className="logo-container">
				<img className="logo" alt="logo" src={FoodLogo} />
			</div>
			<div className="nav-items">
				<ul>
					<li> <Link to="/"> Home </Link></li>
					<li> <Link to="/contact"> Contact </Link></li>
					<li> <Link to="/about"> About </Link></li>
					<li>Cart</li>
					<button className="login" onClick={() => {
						// btnName==="login"?setBtnName("logout"):setBtnName("login")
						setBtnName(btnName==="login"?"logout":"login")
					}}>
						{btnName}
					</button>
				</ul>
			</div>
		</div>
	);
};

export default HeaderComponent;
