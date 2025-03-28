import { useEffect, useState } from "react";
import { MENU_API_URL } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const proxyUrl =`https://api.allorigins.win/get?url=${encodeURIComponent(MENU_API_URL+resId)}`;
      const response = await fetch(proxyUrl);
      
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }

      const data = await response.json(); // Convert outer response to JSON
      const jsonData = JSON.parse(data.contents); // Parse the string inside `contents`
      
      console.log(jsonData); // Now it's a proper JSON object

      setResInfo(jsonData.data);
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  };

  return resInfo;
};

export default useRestaurantMenu;









// import { useEffect,useState } from "react";
// import { MENU_API_URL } from "../utils/constants";
// const useRestaurnatMenu=(resId)=>{
//     const [resInfo,setResInfo]=useState(null);  
//    useEffect(()=>{
//     fetchData();
//    },[]);

//    const fetchData=async()=>{
//     try {
//         const data = await fetch(MENU_API_URL+resId);
//         const json = await data.json();
//         console.log(json); 
//         setResInfo(json.data);
//       } catch (error) {
//         console.error("Error fetching menu:", error);
//       }
//    };
//     return resInfo
// };

// export default useRestaurnatMenu;