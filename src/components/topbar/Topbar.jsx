import React from 'react'
import "./topbar.css"
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import {useContext} from "react";


function Topbar() {
  const {user, dispatch} = useContext(Context);
  const PF = "http://localhost:5000/images/"

  const handleLogout = () => {
    dispatch({type: "LOGOUT"})
  }

  return (
    <div className='top'>
      <div className="topLeft">
      <i className="topIcon fa-brands fa-square-facebook"></i>
      <i className="topIcon fa-brands fa-square-twitter"></i>
      <i className="topIcon fa-brands fa-square-pinterest"></i>
      <i className="topIcon fa-brands fa-instagram"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
            <li className="topListItem"><Link to="/" className='link'>HOME</Link></li>
            <li className="topListItem"><Link to="/" className='link'>ABOUT</Link></li>
            <li className="topListItem"><Link to="/" className='link'>CONTACT</Link></li>
            <li className="topListItem"><Link to="/write" className='link'>{user && "WRITE"}</Link></li>
            <li className="topListItem"><Link to="/register" className='link' onClick={handleLogout}>{user && "LOGOUT" }</Link></li>
        </ul>
      </div>
      <div className="topRight">
        {
          user ? (
            <Link to={"/settings"} className='link'>
              <img className="topImg" src={PF + user.profilePic} alt="smart-man" />
            </Link>  
          ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link to="/login" className='link' style={{ marginRight:"10px"}}>LOGIN</Link>
              <Link to="/register" className='link' style={{ marginRight:"10px"}}>REGISTER</Link>
            </li>
          </ul>
          )
        }
        
        <i class=" topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}

export default Topbar
