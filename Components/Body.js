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
    <div className='flex text-center'>
    {collections.map((ele, index)=>{
      return <Star key= {index} selected ={index<props.sCount? true : false}  />
    })}
    </div> 
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
    <div >
      <div className="p-5 m-4 bg-orange-100 rounded">
      <input  type="text" 
      value={searchValue}
       onChange={(e)=>setSearchValue(e.target.value)}
        />
      <button 
      className='p-2 m-2 bg-orange-300 rounded'
      type='submit'
      onClick={()=>{
        const data = filterData(searchValue,allRestaurants);
        setFilteredRestaurants(data);
        }}>
        Search
        </button>
        </div>
      <div className="flex flex-wrap"  > 
        {(filteredRestaurants.length ===0)? <h6>Loading....</h6> : //<h3>No restaurants matched your search</h3>//  
        filteredRestaurants && filteredRestaurants.map(restaurant =>{
      return (
        <div className= " m-4 w-52 p-2 shadow-xl bg-orange-50" align-items>
          <Link to={"/restaurant/" + restaurant?.data?.id} key={restaurant?.data?.id}>
            <img className='w-52 h-25 rounded'src={CLOUD_IMG_URL +restaurant?.data?.cloudinaryImageId} />
            <h3 className='font-bold text-xl text-center'>{restaurant?.data?.name}</h3>
            <h4 className='text-blue-300 text-center'>{restaurant?.data?.cuisines.join(', ')}</h4>
            <h4 className='text-orange-400 text-center'>{restaurant?.data?.aggregatedDiscountInfo?.shortDescriptionList[0]?.meta}</h4>
             <h4 className='text-center'>{restaurant?.data?.avgRating} stars</h4> 
            {/* <StarRating sCount ={restaurant?.data?.avgRating} count={5}/> */}
          </Link>
        </div>
      )
    })}
      </div> 
    </div>
  )
}

export default Body;
 

