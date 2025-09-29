import { useEffect,useState } from "react";
import { resCard } from "./constants";

const useRestaurantData=(resId)=>{

    const [resInfo,setResInfo]=useState(null);

    useEffect(()=>{
        fetchRestaurantData();
    },[])

    const fetchRestaurantData=async ()=>{
        const data= await fetch(resCard+resId);
        const json=await data.json();

        setResInfo(json.data);



    } 

    return resInfo;
}
export default useRestaurantData;