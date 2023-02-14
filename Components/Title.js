import React from 'react';
import homefood from '../Assests/homefood.jpg';
import {useState,useContext} from 'react';
import { Link } from 'react-router-dom';
import useOnline from '../utils/useOnline';
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';




const Title = () => {
  const [isLogged, setIsLogged] = useState(false);
  const isOnline = useOnline();
  const {user} = useContext(UserContext);

  const cartItems = useSelector(store => store.cart.items);
  console.log(cartItems);

  return (
    <div className="flex bg-orange-300 rounded p-2 m-4 justify-between" >
       <a href="/">
        <img className="h-28 p-2 rounded-full"src={homefood} alt="logo" />
      </a>
      <ul className='flex py-10 '>
        <Link to="/"><li className='px-2'>Home</li></Link>
        <Link to="/about"><li className='px-2'>About</li></Link>
        <Link to="/contact"><li className='px-2'>Contact</li></Link>
        <Link to="/offers"><li className='px-2'>Offers</li></Link>
        <Link to="/cart"><li className='px-2'>Cart - {cartItems.length} items</li></Link>
      </ul>
      <h4 className='px-2 py-10'>{isOnline ? '🟢' : '🔴'}</h4>
      <h4 className='p-10'>{user.name}</h4>
      <div>
        {isLogged ?  <button className='px-2 py-10' onClick={()=>setIsLogged(false)}>Logout</button> :
        <button className='px-2 py-10' onClick={()=>setIsLogged(true)}>Login</button>}
      </div>
      
    </div>
  )
}

export default Title;