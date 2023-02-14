import { useParams } from "react-router-dom";
import {CLOUD_IMG_URL} from '../config';
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import { addItem, removeItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantPage =()=>{
    const params = useParams();
     const {id} = params;
     const restaurant = useRestaurant(id);

     const dispatch = useDispatch();

    
    const addFoodItem =(item)=>{
        dispatch(addItem(item))
   };
   const removeFoodItem =()=>{
    dispatch(removeItem())
   };

    if(!restaurant) {
        return <Shimmer />
    }
    return (
        <div className="flex">
            <div className="m-4">
                <h1>Restaurant id: {id} </h1> 
                <h4 className="font-bold">{ restaurant?.name}</h4>
                <img className="rounded" src= {CLOUD_IMG_URL + restaurant?.cloudinaryImageId}/>
                 <h4 className="text-left">{ restaurant?.cuisines?.join(', ')}</h4> 
                <h4 className="text-left">{restaurant?.city}</h4>
            </div>
            
            <div className="m-4">
                <h3>Items List: </h3>
                <ul>
                    {Object.values(restaurant?.menu?.items)
                .map(item=><li key={item.id}> {item.name} - {" "}<button 
                className="p-1 bg-slate-300 rounded mr-1" onClick={()=>addFoodItem(item)}>Add</button>
            
                <button className="p-1 bg-slate-300 rounded ml-1" onClick={()=>removeFoodItem()}>Remove</button>
                
                </li>)}
                </ul>  
            </div>
        </div>
    );
}
export default RestaurantPage;
