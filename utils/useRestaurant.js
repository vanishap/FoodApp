import {useState,useEffect} from 'react';
import {FETCH_MENU_URL} from '../config'

const useRestaurant = (id)=>{
    const [restaurant, setRestaurant] = useState(null);

    useEffect(()=>{
        getRestaurantDetails();
    },[]);

    async function getRestaurantDetails(){
        const data = await fetch(FETCH_MENU_URL + id);
        const json = await data.json();
        console.log(json);
        setRestaurant(json.data);
    }
   //should return restaurant details
    return restaurant;
}
export default useRestaurant;