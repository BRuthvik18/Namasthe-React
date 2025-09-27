import { resLogo } from "../Utilities/constants";

export const RestaurantCard = ( props ) => {

	const {resData}=props;

	const {name,cuisines,avgRating,costForTwo ,sla ,cloudinaryImageId}=resData?.info;
	return (
		<div className="restaurant-card" 
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
			
			<h3>{name}</h3>
			<h3>{cuisines.join(",")}</h3>
			<h3>{avgRating}</h3>
			<h3>{costForTwo}</h3>
			<h3>{sla.slaString}</h3>
			<h4> </h4>
			
		</div>
	);
};