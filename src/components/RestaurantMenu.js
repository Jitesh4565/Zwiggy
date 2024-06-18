import Shimmer from "./Shimmer";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurnatMenu from "./useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
  const RestaurantMenu=()=>{   
    const{resId}=useParams();

    const [showIndex,setShowIndex]=useState(0); 

    const resInfo=useRestaurnatMenu(resId);
     if(resInfo===null) return  <Shimmer/>;
     const{name,cuisines,costForTwoMessage}=resInfo?.cards[2]?.card?.card?.info;

     const Menu=resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards;      //  //cards[2].card.card;
    
     const categories=Menu.filter(item => item.card.card && item.card.card['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory');

    console.log(categories);
    return(
      <div className="w-[900px] ml-80 text-center ">
        <h1 className="font-bold text-2xl">{name}</h1>
        <p className="font-bold text-1xl">
        {cuisines.join()},{costForTwoMessage}
        </p>
      {categories.map((category,index)=>(
            <RestaurantCategory 
            key={category?.card?.card.title} 
            data={category?.card?.card}
            showItems={index=== showIndex? true:false}
            setShowIndex={()=>setShowIndex(index)}
            />
      ))}
      </div>
    );
}

export default RestaurantMenu;