import { resLogo } from "../Utilities/constants";

export const RestaurantCard = ( props ) => {

	const {resData}=props;

	const {name,cuisines,avgRating,costForTwo ,sla ,cloudinaryImageId}=resData?.info;
	return (
		<div className="restaurant-card m-5 p-5 w-[270px] bg-pink-50 hover:bg-pink-200 rounded-2xl shadow-amber-100 " 
		// style={{backgroundColor:"#f0f0f0",
        // padding:"10px",margin:"10px",width:"300px",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2)",
        // borderRadius:"10px"}}
		>
			<img
				className="restaurant-logo"
				alt="Thali"
				src={
					resLogo +
					cloudinaryImageId
				}
			/>
			
			<h3 className="font-bold">{name}</h3>
			<h3 className="pu-5">{cuisines.join(",")}</h3>
			<h3>{avgRating}</h3>
			<h3>{costForTwo}</h3>
			<h3>{sla.slaString}</h3>
			<h4> </h4>
			
		</div>
	);
};