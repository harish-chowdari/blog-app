import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='container'>
        <div className='logo'>Logo</div>
        <div className='links'>
          <Link className='link'>ART</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar