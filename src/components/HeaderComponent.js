import { FoodLogo } from "../Utilities/constants";
import { useState } from "react";
const HeaderComponent = () => {
	const [btnName,setBtnName]=useState("login");
	return (
		<div className="header">
			<div className="logo-container">
				<img className="logo" alt="logo" src={FoodLogo} />
			</div>
			<div className="nav-items">
				<ul>
					<li>Home</li>
					<li>about</li>
					<li>Contact</li>
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
