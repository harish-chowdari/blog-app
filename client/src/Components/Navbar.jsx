import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/logo.png";
import { AuthContext } from '../Context/AuthContext';



const Navbar = () => {

  const {currentUser, Logout} = useContext(AuthContext)

  return (
    <div className='navbar'>
      <div className='container'>
        <div className='logo'><img src={logo} alt='' /></div>
        <div className="links">
          <Link className="link" to="/?cat=art">
            <h6>ART</h6>
          </Link>
          <Link className="link" to="/?cat=science">
            <h6>SCIENCE</h6>
          </Link>
          <Link className="link" to="/?cat=technology">
            <h6>TECHNOLOGY</h6>
          </Link>
          <Link className="link" to="/?cat=cinema">
            <h6>CINEMA</h6>
          </Link>
          <Link className="link" to="/?cat=design">
            <h6>DESIGN</h6>
          </Link>
          <Link className="link" to="/?cat=food">
            <h6>FOOD</h6>
          </Link>
            
            <span>{currentUser?.username}</span>
          
            <span>
              {currentUser? <span onClick={Logout}>Logout</span>
              :
              <Link className='link' to="/login">Login</Link>}
            </span>
          
          <span className="write">
            <Link className="link" to="/write">
              Write
            </Link>
          </span>
          
        </div>
      </div>
    </div>
  )
}

export default Navbar