import { useState, useEffect } from "react";
import RestaurantCard,{withPromotedLabel} from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState('');

  const RestaurantCardPromoted=withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0185905&lng=72.831977&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json();
    const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setListOfRestaurant(restaurants);
    setFilteredRestaurant(restaurants);
    console.log(restaurants);
  };

  const handleSearch = () => {
    const filtered = listOfRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurant(filtered);
  };

  const handleFilterByRating = () => {
    const filteredList = listOfRestaurants.filter(
      (res) => res.info.avgRating > 4
    );
    setFilteredRestaurant(filteredList);
  };
   const onLineStatus=useOnlineStatus();
   if(onLineStatus ===false)
     return(
      <h1>
        Looks like you're offline! Please Check your Internet Connection
      </h1>
    )

  return filteredRestaurant.length === 0 && listOfRestaurants.length===0 ? (
    <Shimmer />
  ) : (
    <div className="border-2">
      <div className="w-3/4 flex justify-center ml-52 mt-1">
        <div className="flex justify-center w-96">
          <input
            type="text"
            data-testid="searchInput"
            placeholder="Search a restaurant you want..."
            className="w-96 border-2 rounded"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button onClick={handleSearch} className="mx-2 rounded bg-red-500 text-white p-1">
            Search
          </button>
        </div>
        <button
          className="rounded bg-red-500 text-white p-1"
          onClick={handleFilterByRating}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="flex flex-wrap w-full justify-center">
        {filteredRestaurant.map((restaurant) => (
         <Link className="link" key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}> 
           {restaurant.info.aggregatedDiscountInfoV3 ?(
            <RestaurantCardPromoted resData={restaurant}/>
          ):(
            <RestaurantCard resData={restaurant} />
          )}
        </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
