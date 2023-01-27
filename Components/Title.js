import React from 'react';
import homefood from '../Assests/homefood.jpg';
import {useState} from 'react';
import { Link } from 'react-router-dom';
import useOnline from '../utils/useOnline';



const Title = () => {
  const [isLogged, setIsLogged] = useState(false);
  const isOnline = useOnline();

  return (
    <div className='title-bar'>
       <a href="/">
        <img className= 'image'src={homefood} alt="logo" />
      </a>
      <ul>
        <Link to="/"><li>Home</li></Link>
        <Link to="/about"><li>About</li></Link>
        <Link to="/contact"><li>Contact</li></Link>
        <Link to="/offers"><li>Offers</li></Link>
        <Link to="/cart"><li>Cart</li></Link>
      </ul>
      <h4>{isOnline ? '🟢' : '🔴'}</h4>
      <div>
        {isLogged ?  <button onClick={()=>setIsLogged(false)}>Logout</button> :
        <button onClick={()=>setIsLogged(true)}>Login</button>}
      </div>
      
    </div>
  )
}

export default Title;