import { Link } from "react-router-dom";
import { FoodLogo } from "../Utilities/constants";
import { useState } from "react";
import About from './About';
import useOnlineStatus from "../Utilities/useOnlineStatus";
import Bringo from './Bringo';
const HeaderComponent = () => {
	const [btnName, setBtnName] = useState("login");
	const onlineStatus=useOnlineStatus();
	return (
		<div className="flex justify-between bg-pink-100 shadow-lg mb-3">
			<div className="logo-container">
				<img className="w-60" alt="logo" src={FoodLogo} />
			</div>
			<div className="flex items-center ">
				<ul className="flex p-4 m-4">
				    <li className="px-6 text-3xl" >Online Status: {onlineStatus? "🟢": "🔴"  }</li>
					<li className="px-6 text-3xl"> <Link to="/bringo"> Bringo </Link></li>
					<li className="px-6 text-3xl"> <Link to="/"> Home </Link></li>
					<li className="px-6 text-3xl"> <Link to="/contact"> Contact </Link></li>
					<li className="px-6 text-3xl"> <Link to="/contact"> Contact </Link></li>
					<li className="px-6 text-3xl"> <Link to="/about"> About </Link></li>
					<li className="px-6 text-3xl">Cart</li>
					<button className="px-6 text-3xl" onClick={() => {
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
