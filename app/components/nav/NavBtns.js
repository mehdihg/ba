import React, { useEffect } from 'react';
import Link from 'next/link';

import './NavBtns.css'
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaTelegramPlane } from 'react-icons/fa';
import { Poppins } from 'next/font/google'

import CartBtn from './CartBtn';
import MenuBtn from './MenuBtn';
import Menu from './Menu';
import ContactData from '../contact/ContactData';

const popins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '700','900'],
  display: 'swap'
  
})
const NavBtns = ({handleElementLeave,handleElementHover}) => {

 

  return (
    <>
      <div className="navbar-btn cursor-link">
        <MenuBtn handleElementHover={handleElementHover} handleElementLeave={handleElementLeave}/>
        <Link href="./cart">
          <CartBtn handleElementHover={handleElementHover} handleElementLeave={handleElementLeave}/>
        </Link>
      </div>

      <div className="menu-overly">
        <div className="menu-data row">
          <Menu handleElementHover={handleElementHover} handleElementLeave={handleElementLeave}/>

          <ContactData contactCol={"menu-col-address"} contactContent={"menu-content-address"} contactIcon='menu-social-media-data-icon'/>
        </div>
        
      </div>
    </>
  );
};

export default NavBtns;
