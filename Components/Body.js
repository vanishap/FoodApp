import React, {useEffect, useState} from 'react';
import {FaRegStar} from 'react-icons/fa';
import { cloudImg } from '../config';
import Shimmer from './Shimmer'

const filterData = (searchValue,allRestaurants)=>{
  return  allRestaurants.filter(restaurant=>restaurant?.data?.name.toLowerCase().includes(searchValue.toLowerCase())); 
}

const Star =(props)=>{
   const [select, setSelect] = useState(false);
   return <FaRegStar style={{color: select? 'red':'gray'}} 
   onClick ={()=> setSelect((prev) => !prev)} />
}

const StarRating =(props)=>{
   const count =props.count;
   const collections = Array.from(new Array(count));
   return (
    <>
    {collections.map((ele, index)=>{
      return <Star key= {index} selected ={index<props.sCount? true : false}  />
    })}
    </> 
   )
}
const Body = () => {
  const [searchValue,setSearchValue] = useState();
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  
  useEffect(()=>{
    getRestaurants();
  },[]);
 
  async function getRestaurants(){
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4016307&lng=78.40060079999999&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log(json);
    let temp = json?.data?.cards[2]?.data?.data?.cards;
    setAllRestaurants(temp);
    setFilteredRestaurants(temp);
  }

  // if no restaurants available, early return
  if(!allRestaurants) return null;

  return (allRestaurants.length ===0)? <Shimmer /> : (
    <div>
      <input type="text" 
      value={searchValue}
       onChange={(e)=>setSearchValue(e.target.value)}
        />
      <button className="btn" 
      type='submit'
      onClick={()=>{
        const data = filterData(searchValue,allRestaurants);
        setFilteredRestaurants(data);
        }}>
        Search
        </button>
      <div className="list"  > 
        {(filteredRestaurants.length ===0)? <h3>No restaurants matched your search</h3>  :
        filteredRestaurants && filteredRestaurants.map(restaurant =>{
      return (
        <div className= "card" key={restaurant?.data?.id}>
          <img  className='image'src={cloudImg +restaurant?.data?.cloudinaryImageId} />
          <h3 className='card-title'>{restaurant?.data?.name}</h3>
          <h4 className='card-cuisines'>{restaurant?.data?.cuisines.join(', ')}</h4>
          <h4 className='card-discount'>{restaurant?.data?.aggregatedDiscountInfo?.shortDescriptionList[0]?.meta}</h4>
          <h4 className='card-rating'>{restaurant?.data?.avgRating}</h4>
          <StarRating sCount ={restaurant?.data?.avgRating} count={5}/>
        </div>
      )
    })}
      </div> 
    </div>
  )
}

export default Body;
 