import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import {cloudImg} from '../config'
import Shimmer from "./Shimmer";

const RestaurantPage =()=>{
    const params = useParams();
     const {id} = params;
     const [restaurant, setRestaurant] = useState(null);
   
     useEffect(()=>{
        getRestaurantDetails();
    },[]);

async function getRestaurantDetails(){
        const data = await fetch("https://www.swiggy.com/dapi/menu/v4/full?lat=17.4016307&lng=78.40060079999999&menuId=" + id);
        const json = await data.json();
        console.log(json);
        setRestaurant(json.data);
    }

    if(!restaurant) {
        return <Shimmer />
    }
    return (
        <div>
            <div>
                <h1>Restaurant id: {id} </h1> 
                <h4>{ restaurant?.name}</h4>
                <img src= {cloudImg + restaurant?.cloudinaryImageId}/>
                 <h4>{ restaurant?.cuisines?.join(', ')}</h4> 
                <h4>{restaurant?.city}</h4>
            </div>
            <div>
                <h3>Items List</h3>
                <ol>
                {Object.values(restaurant?.menu?.items).map(e=><li key={e.id}>{e.name}</li>)}
                </ol>
            </div>
        </div>
    );
}
export default RestaurantPage;