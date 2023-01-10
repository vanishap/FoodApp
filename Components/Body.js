import React from 'react';
import { restaurantsList } from '../config';

const Restaurants = ()=>{
  return (
    <>
    {restaurantsList.map(restaurant =>{
      return (
        <div className= "card">
          <img  className='image'src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +restaurant.card.card.info.cloudinaryImageId} />
          <h3>{restaurant.card.card.info.name}</h3>
          <h4>{restaurant.card.card.info.cuisines.join(', ')}</h4>
          <h4>{restaurant.card.card.info.avgRating}stars</h4>
        </div>
      )
    })}
    </> 
  )
}

const Body = () => {
  return (
    <div>
      <input type="text" />
      <button className="btn"type='submit'>Search</button>
      <div className="list">
<Restaurants />
      </div>
      
    </div>
  )
}

export default Body;
