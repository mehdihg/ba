import React from 'react'
import './ContactData.css'
import { Poppins } from 'next/font/google'
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaTelegramPlane } from 'react-icons/fa';
const popins = Poppins({ 
    subsets: ['latin'],
    weight: ['400', '700','900'],
    display: 'swap'
    
  })
function ContactData({contactCol,contactContent,contactIcon}) {
  return (
    <div className={contactCol}>
    <ul className={contactContent}>
        <li>Let’s talk</li>
        <li><a href="#" className={`${"email"} ${popins.className}`}>info@dar.band</a></li>
        <li>+98 990 011 5787</li>
        <li className="menu-social-media-data-icon">
            <a href="#" className={contactIcon}><FaTwitter/></a>
            <a href="#" className={contactIcon}><FaInstagram/></a>
            <a href="#" className={contactIcon}><FaTelegramPlane/></a>
        </li>
    </ul>
</div>
  )
}

export default ContactData