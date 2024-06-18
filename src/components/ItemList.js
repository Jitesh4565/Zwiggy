import { useDispatch } from 'react-redux';
import { addItem } from "../utils/cartSlice"
import { CDN_URL } from "../utils/constants"
const ItemList=({items})=>{
  const dispatch=useDispatch();
      const handleAddItem=(item)=>{
       dispatch(addItem(item));
       console.log(item);
     };

  return (
    <div>
        {items.map(item=>(
            <div key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between items-center">
              <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>-₹{ item.card.info.price ?item.card.info.price/100:item.card.info.defaultPrice/100}</span>
              <p className="text-xs w-[600px]">{item.card.info.description}</p>  
             </div>
             <div className="text-center">
             <img src={CDN_URL+item.card.info.imageId}className="w-[150px]"></img>
             <div className="">
              <button className="bg-red-400 rounded p-2 ml-2 mt-1 text-base text-white"onClick={()=>handleAddItem(item)}>Add+</button>
              </div>
             </div>
            </div>
        ))} 
    </div>
  )
}

export default ItemList