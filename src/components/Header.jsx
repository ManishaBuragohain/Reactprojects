import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
  <nav>
    <h1>Manisha</h1>
    <main>
        <Link to={"/"} className='header-link'>Home </Link>
        <Link to={"/contact"} className='header-link'>Contact </Link>
        <Link to={"/#about"} className='header-link'>About </Link>
        <Link to={"/#brands"} className='header-link'>Brands </Link>
        <Link >Services </Link>
         </main>
  </nav>
  )
}

export default Header