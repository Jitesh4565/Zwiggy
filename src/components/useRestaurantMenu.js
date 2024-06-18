import { useEffect,useState } from "react";
import { MENU_API_URL } from "../utils/constants";
const useRestaurnatMenu=(resId)=>{
    const [resInfo,setResInfo]=useState(null);  
   useEffect(()=>{
    fetchData();
   },[]);

   const fetchData=async()=>{
    try {
        const data = await fetch(MENU_API_URL+resId);
        const json = await data.json();
        console.log(json); 
        setResInfo(json.data);
      } catch (error) {
        console.error("Error fetching menu:", error);
      }
   };
    return resInfo
};

export default useRestaurnatMenu;