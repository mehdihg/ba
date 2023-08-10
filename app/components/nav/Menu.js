import React from 'react'
import { Poppins } from 'next/font/google'
import Link from 'next/link'
const popins = Poppins({ 
    subsets: ['latin'],
    weight: ['400', '700','900'],
    display: 'swap'
    
  })

function Menu({handleElementHover,handleElementLeave}) {
  return (
    <div className="menu-col-data">
    <ul className="menu-content-data">
      <li className={popins.className}>Navigation</li>
      <li>
        <Link href="./" className={`${"aaa"} ${popins.className}`} onMouseEnter={handleElementHover} onMouseLeave={handleElementLeave}>
          Home
        </Link>
      </li>
      <li>
        <Link href="./products" className={`${"aaa pro"} ${popins.className}`} onMouseEnter={handleElementHover} onMouseLeave={handleElementLeave}>
          Products
        </Link>
      </li>
      <li>
        <Link href="./collections" className={`${"aaa coll"} ${popins.className}`} onMouseEnter={handleElementHover} onMouseLeave={handleElementLeave}> 
          Collections
        </Link>
      </li>
      <li>
        <Link href="#" className={`${"aaa"} ${popins.className}`} onMouseEnter={handleElementHover} onMouseLeave={handleElementLeave}>
          Blog
        </Link>
      </li>
      <li>
        <Link href="./about" className={`${"aaa"} ${popins.className}`} onMouseEnter={handleElementHover} onMouseLeave={handleElementLeave}>
          About
        </Link>
      </li>
      <li>
        <Link href="./contact" className={`${"aaa"} ${popins.className}`} onMouseEnter={handleElementHover} onMouseLeave={handleElementLeave}>
          Contact
        </Link>
      </li>
      <li className="menu-language">
        <Link href="#" className={`${"aaa menu-language"} ${popins.className}`} onMouseEnter={handleElementHover} onMouseLeave={handleElementLeave}>
          EN
        </Link>
        <Link href="#" className={`${"aaa menu-language"} ${popins.className}`} onMouseEnter={handleElementHover} onMouseLeave={handleElementLeave}>
          العربية
        </Link>
        <Link href="#" className={`${"aaa menu-language"} ${popins.className}`} onMouseEnter={handleElementHover} onMouseLeave={handleElementLeave}>
          فا
        </Link>
      </li>
    </ul>
  </div>
  )
}

export default Menu