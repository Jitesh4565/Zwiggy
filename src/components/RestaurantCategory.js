import { useState } from "react";
import ItemList from "./ItemList";
const RestaurantCategory=({data,showItems,setShowIndex})=>{
   
    //console.log(data);

     const handleClick=()=>{
        setShowIndex();
     }
    return( 
    <div className="w-full bg-gray-50 shadow-lg p-4 mx-auto my-4 rounded">
     <div className="flex justify-between cursor-pointer"onClick={handleClick}>
     <span className="font-bold text-lg">{data.title}({data.itemCards.length})</span>
     <span className="text-lg">🔽</span>
    </div>
    {showItems && <ItemList items={data.itemCards}/>}
    </div>
);
};

export default RestaurantCategory;