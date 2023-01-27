import React, {useEffect, useState} from 'react';
import {FaRegStar} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { CLOUD_IMG_URL } from '../config';
import Shimmer from './Shimmer'
import { filterData } from '../utils/helper';
import useOnline from '../utils/useOnline';
import useRestaurants from '../utils/useRestaurants';


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
  
  const allRestaurants = useRestaurants([]);
  const filteredRestaurants = useRestaurants([]);

 const isOnline = useOnline();
  if(!isOnline){
    return <h3>🔴You are offline!, please check your internet connection!</h3>
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
        {(filteredRestaurants.length ===0)? <h6>Loading....</h6> : //<h3>No restaurants matched your search</h3>//  
        filteredRestaurants && filteredRestaurants.map(restaurant =>{
      return (
        <div className= "card" >
          <Link to={"/restaurant/" + restaurant?.data?.id} key={restaurant?.data?.id}>
            <img className='image'src={CLOUD_IMG_URL +restaurant?.data?.cloudinaryImageId} />
            <h3 className='card-title'>{restaurant?.data?.name}</h3>
            <h4 className='card-cuisines'>{restaurant?.data?.cuisines.join(', ')}</h4>
            <h4 className='card-discount'>{restaurant?.data?.aggregatedDiscountInfo?.shortDescriptionList[0]?.meta}</h4>
            <h4 className='card-rating'>{restaurant?.data?.avgRating}</h4>
            <StarRating sCount ={restaurant?.data?.avgRating} count={5}/>
          </Link>
        </div>
      )
    })}
      </div> 
    </div>
  )
}

export default Body;
 

