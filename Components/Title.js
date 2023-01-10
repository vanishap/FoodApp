import React from 'react';
import homefood from '../Assests/homefood.jpg';


const Title = () => {
  return (
    <div className='title-bar'>
      <img className= 'image'src={homefood} alt="logo" />
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}

export default Title;