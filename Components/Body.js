import React, {useState} from 'react';
import { restaurantsList } from '../config';

const filterData = (searchValue,restaurants)=>{
  return  restaurants.filter(restaurant=>restaurant.card.card.info.name.includes(searchValue));
 
}

const Body = () => {
  const [searchValue,setSearchValue] = useState();
  const [restaurants, setRestaurants] = useState(restaurantsList);
  return (
    <div>
      <input type="text" 
      value={searchValue}
       onChange={(e)=>setSearchValue(e.target.value)}
        />
      <button className="btn" 
      type='submit'
      onClick={()=>{
        const data = filterData(searchValue,restaurants);
        setRestaurants(data);
        }}>
        Search
        </button>
      <div className="list"  > 
        {restaurants.map(restaurant =>{
      return (
        <div className= "card" key={restaurant.card.card.info.id}>
          <img  className='image'src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +restaurant.card.card.info.cloudinaryImageId} />
          <h3>{restaurant.card.card.info.name}</h3>
          <h4>{restaurant.card.card.info.cuisines.join(', ')}</h4>
          <h4>{restaurant.card.card.info.avgRating}stars</h4>
        </div>
      )
    })}
      </div> 
    </div>
  )
}

export default Body;
