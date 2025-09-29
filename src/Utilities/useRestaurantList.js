import { useState ,useEffect} from "react";

const useRestaurantList=()=>{

    const [resList,setResList]=useState([]);
    


    useEffect(()=>{
        fetchRestaurantList();
    },[]);

    const fetchRestaurantList=async ()=> {

        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json=await data.json();

        setResList(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);


    }
    return resList;
}
export default useRestaurantList;