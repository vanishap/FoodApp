import React from 'react';
import { useContext } from 'react';
import UserContext from '../utils/UserContext';

const Footer = () => {
  const {user} = useContext(UserContext);
  return (
    <div>
      <h4 className='m-4 text-center bg-orange-300 rounded'> © {" "}{user.name} - {user.email}</h4>
    </div>
  )
}

export default Footer;
