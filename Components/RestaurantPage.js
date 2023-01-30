import { useParams } from "react-router-dom";
import {CLOUD_IMG_URL} from '../config';
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";

const RestaurantPage =()=>{
    const params = useParams();
     const {id} = params;
     const restaurant = useRestaurant(id);
   
console.log(CLOUD_IMG_URL);
    if(!restaurant) {
        return <Shimmer />
    }
    return (
        <div>
            <div className="m-4">
                <h1>Restaurant id: {id} </h1> 
                <h4 className="font-bold">{ restaurant?.name}</h4>
                <img className="rounded" src= {CLOUD_IMG_URL + restaurant?.cloudinaryImageId}/>
                 <h4 className="text-left">{ restaurant?.cuisines?.join(', ')}</h4> 
                <h4 className="text-left">{restaurant?.city}</h4>
            </div>
            <div className="m-4">
                <h3>Items List: </h3>
                <ol>
                    {Object.values(restaurant?.menu?.items)
                .map(e=><li key={e.id}> {e.name} </li>)}
                </ol>
                
               
            </div>
        </div>
    );
}
export default RestaurantPage;