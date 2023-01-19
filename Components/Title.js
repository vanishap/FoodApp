import React from 'react';
import homefood from '../Assests/homefood.jpg';
import {useState} from 'react';
import { Link } from 'react-router-dom';



const Title = () => {
  const [isLogged, setIsLogged] = useState(false);
  
  return (
    <div className='title-bar'>
       <a href="/">
        <img className= 'image'src={homefood} alt="logo" />
      </a>
      <ul>
        <Link to="/"><li>Home</li></Link>
        <Link to="/about"><li>About</li></Link>
        <Link to="/contact"><li>Contact</li></Link>
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