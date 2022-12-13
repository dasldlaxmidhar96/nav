import React from 'react'
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className='Navbar'>
        <span className='nav-log'>Chief Complaints</span>
        <div className='nav-items'>
          <a href='/home'>Import from Previous</a>
          <a href='/about'><i class="fal fa-save">Save</i></a>
        </div>
        <div className="nav-toggle">
          <div className=' bar'>
            
          </div>
        </div>
    </div>
  )
}

export default Navbar