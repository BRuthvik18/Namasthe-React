import { RestaurantCard } from "./RestaurantCard";
import { resObj } from "../Utilities/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurantList from "../Utilities/useRestaurantList";
import useOnlineStatus from "./../Utilities/useOnlineStatus";

const Body = () => {
	// const resList=useRestaurantList();

	const [resList, setResList] = useState([]);

	const [searchRes, setSearchRes] = useState([]);

	const [serRes, setSerRes] = useState("");

	useEffect(() => {
		console.log("useEffect called");
		fetchData();
	}, []);
	console.log("render");
	const fetchData = async () => {
		const data = await fetch(
			"https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
			// "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7041&lng=77.1025&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
			// "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
		);
		const json = await data.json();

		// console.log(json);
		// console.log(
		// 	json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
		// );
		// console.log(
		// 	json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
		// );
		setResList(
			json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
		);
		setSearchRes(
			json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
		);
	};
	// console.log(searchRes)

	const onlineStatus = useOnlineStatus();
	if (onlineStatus == false)
		return (
			<h1> OOPS! Something is wrong !, Check Your Internet Connection! </h1>
		);

	return resList.length === 0 ? (
		<Shimmer />
	) : (
		<div className="body">
			<div className="flex">
				<div className="search m-5 p-5">
					<input
						type="text"
						value={serRes}
						className="border-solid border-black border-2 rounded-sm bg-pink-50 shadow-lg"
						placeholder="search for Restaurants"
						onChange={(res) => {
							setSerRes(res.target.value);
						}}
					/>
					<button
						className="px-4 bg-green-100 m-4 py-2 font-bold rounded-lg ml-9"
						onClick={() => {
							console.log(serRes);
							const filteredRestaurants = resList.filter((res) =>
								res.info.name.toLowerCase().includes(serRes.toLowerCase())
							);
							setSearchRes(filteredRestaurants);
						}}
					>
						Search
					</button>
				</div>
				<div className="search m-5 p-5">
				<button
					className="px-4 bg-green-100 m-4 py-2 font-bold rounded-lg"
					onClick={() => {
						const filteredList = resList.filter(
							(res) => res.info.avgRating > 4.5
						);
						setSearchRes(filteredList);
					}}
				>
					Filter Restaurants Based On Rating
				</button>
				</div>
			</div>
			<div className="restaurant-container flex flex-wrap">
				{searchRes.map((restaurant) => (
					<Link
						key={restaurant.info.id}
						to={"restaurant/" + restaurant.info.id}
					>
						{" "}
						<RestaurantCard resData={restaurant} />{" "}
					</Link>
				))}
			</div>
		</div>
	);
};
export default Body;
