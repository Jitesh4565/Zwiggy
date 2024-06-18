import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";
const Header=()=>{
    const onlineStatus=useOnlineStatus();
// Subscribing to the store using a selector
    const cartItems=useSelector((store)=>store.cart.items);
    return(
        <div className="flex justify-between items-center border-2">
            <div className="logo-container flex items-center justify-between w-20">
            <img src={LOGO_URL}
            alt="App Logo" className="w-24 rounded"></img>
             <h2 className="ml-2 font-bold text-2xl ">Zwiggy</h2>
            </div>
           <div> 
            <ul className="flex">
                <li className="mx-1">
                 Online Status:{onlineStatus ? "🟢" :"🔴"}
                </li>
                <li className="mx-1">
                <Link to="/">Home</Link>
                </li>
                <li className="mx-1">
                <Link to="/about">About Us</Link>
                </li>
                <li className="mx-1">
                <Link to="/contact">Contact Us</Link>
                </li>
                <li className="mx-1 cursor-pointer">
                 <Link to="/cart">Cart({cartItems.length})</Link>
                </li>
            </ul>
            </div> 
        </div>
    )
}

export default Header;