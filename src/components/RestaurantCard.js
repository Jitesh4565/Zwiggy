import { CDN_URL } from "../utils/constants";

const RestaurantCard=(props)=>{
    const{resData}=props;
    const{
     cloudinaryImageId,
     name,
     avgRating,
     cuisines,
     costForTwo,
     sla,
    }=resData?.info;
  return(
     <div data-testid="resCard" className="border-2 w-64  p-4  m-[30px] h-[450px] overflow-hidden rounded bg-gray-200">
      <div className="mb-3">
       <img  className="rounded"
       src={CDN_URL+cloudinaryImageId}/>
       </div>
       <div className="border-2 overflow-hidden">
       <h3>{name}</h3>
       <h3>{cuisines.join(",")}</h3>
       <h3>{costForTwo}</h3>
       <h3>{avgRating}⭐</h3>
       <h4>{sla.slaString}</h4> 
       </div>
     </div>
  )
}
 export const withPromotedLabel=(RestaurantCard)=> {

  return(props)=>{
    const { resData } = props;
    return(
      <div>
        <label className="absolute ml-8 bg-red-400 text-white rounded">{resData.info.aggregatedDiscountInfoV3.header} {resData.info.aggregatedDiscountInfoV3.subHeader}</label>
        <RestaurantCard {...props}/>
      </div>
    );
  };
 };

export default RestaurantCard;
