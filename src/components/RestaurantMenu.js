import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { resCard } from "../Utilities/constants";
import useRestaurantData from "../Utilities/useRestaurantData";
const RestaurantMenu=()=>{

    const {resId}=useParams();

    
    // const [menuData,setMenuData]=useState(null);
    // useEffect(()=>{
    //     //API call
    //     //get the restaurant Id from the URL
    //     //https://www.swiggy.com/dapi/menu/v4/full?lat=28.6448&lng=77.216721&menuId=229
    //     //https://www.swiggy.com/dapi/menu/v4/full?lat=28.6448&lng=77.216721&menuId={resId}
    //     fetchData();
    // },[]);

    // const fetchData=async () =>{
    //     const data=await fetch(resCard+resId);
    //     const json=await data.json();
    //     setMenuData(json.data);
    //     // console.log(json.data);
    //     // console.log(json?.data?.cards[2]?.card.card);
    //     // console.log(json?.data?.cards[2]?.card.card?.info);
    //     // console.log(json?.data?.cards[5].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards);
    //     // setItems(json?.data?.cards[5].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards);
    //     // console.log(json?.data?.groupedCard);
    //     // console.log(json?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
    //     // console.log(data.cards[5].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards);
        
    // }





    const menuData=useRestaurantData(resId);

    if(menuData===null) return <Shimmer/>;



    const {name,cuisines,city,costForTwoMessage,avgRating,totalRatingsString}=menuData?.cards[2]?.card?.card?.info || {};
    const items=menuData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards || [];
    return (
        <div>
        <h1>{name}</h1>
        <h3>{cuisines.join(" ,")} </h3>
        <h5>{city} </h5>
        <h4>{costForTwoMessage} </h4>
        <h3>{avgRating} </h3>
        <h3>{totalRatingsString} </h3>
        <ul>
            {items.map((item)=>( <li key={item.card.info.id}>{item.card.info.name }  -  {(item.card.info.price ?? 0)/100} Rs.</li> ))}
        </ul>
        
        </div>
    )
}
export default RestaurantMenu;