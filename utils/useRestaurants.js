import {useState, useEffect} from 'react';
import {ALL_RESTAURANTS_API} from '../config';

 const useRestaurants = ()=>{
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  
  useEffect(()=>{
    getRestaurants();
  },[]);
 
  async function getRestaurants(){
    const data = await fetch(ALL_RESTAURANTS_API);
    const json = await data.json();
    let temp = json?.data?.cards[2]?.data?.data?.cards;
    setAllRestaurants(temp);
    setFilteredRestaurants(temp);
  }
  return allRestaurants, filteredRestaurants;
}

 export default useRestaurants;
  