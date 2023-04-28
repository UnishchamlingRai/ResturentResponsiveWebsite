import React, { useState } from 'react'
import './Navbar.scss'
const Navbar = () => {
  const[toggleMenu,setToggleMenu]=useState(false)

  const Menu=()=>{
    return(
      <>
       <li><a href="#Home">Home</a></li>
          <li><a href="#Pages">Pages</a></li>
          <li><a href="#ContactUs">Home</a></li>
          <li><a href="#Blog">Blog</a></li>
          <li><a href="#Landing">Landing</a></li>
      </>
    )
  }
  return (
    <div className='navbar'>
      <div className="log">
        <h4>CERICHT</h4>
      </div>
      <div className="nav_link">
        <ul>
         <Menu />
        </ul>
      </div>
      <div className="nav_login">
        <p>Log In /Registration</p>
        <hr />
        <p>Book Table</p>
      </div>

      {/* Mobile Responsive ToggleMenu */}
      {toggleMenu?<li className='toggleBtn' onClick={()=>{setToggleMenu(false);}}><i class="bi bi-x-octagon-fill"></i></li>
      :<li className='toggleBtn' onClick={()=>{setToggleMenu(true);}}><i class="bi bi-list"></i></li>}
      {toggleMenu&&(
        <div className="nav_Menu_link">
        <ul>
         <Menu />
         <div className="nav_Menu_login">
        <p>Log In /Registration</p>
        <hr />
        <p>Book Table</p>
      </div>
        </ul>
      </div>
      )}
    </div>
  )
}

export default Navbar