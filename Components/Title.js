import React from 'react';
import homefood from '../Assests/homefood.jpg';
import {useState} from 'react';


const Title = () => {
  const [isLogged, setIsLogged] = useState(false);
  
  return (
    <div className='title-bar'>
      <img className= 'image'src={homefood} alt="logo" />
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
      <div>
        {isLogged ?  <button onClick={()=>setIsLogged(false)}>Logout</button> :
        <button onClick={()=>setIsLogged(true)}>Login</button>}
      </div>
      
    </div>
  )
}

export default Title;