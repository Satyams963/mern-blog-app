// import { useEffect, useState } from 'react';
import './sidebar.css';
// import axios from '../../axios';
// import { Link } from 'react-router-dom';

function Sidebar() {
  // const [cats, setCats] = useState([]);

  // useEffect(() => {
  //   const getCats = async () => {
  //     const res = await axios.get('/categories');
  //     setCats(res.data);
  //   }
  //   getCats();
  // },[])

  return (
    <div className='sidebar'>
      <div className="sidebarItem">
        <span className='sidebarTitle'> ABOUT ME</span>
        <img className='sidebarImg' src="https://plus.unsplash.com/premium_photo-1673697240011-76f7f9220300?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="road" />
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro molestias minus excepturi voluptates blanditiis ratione laudantium in ut magni possimus?</p>
      </div>
      <div className="sidebarItem">
      <span className='sidebarTitle'>CATEGORIES</span>
      <ul className="sidebarList">
        {/* {cats.map((c) => (
          <Link to={`/?cat=${c.name}`} className="link"> */}
            {/* <li className="sidebarListItem">{c.name}</li> */}
          {/* </Link> */}
        {/* ))} */}
      </ul>
      </div>
      <div className="sidebarItem">
        <span className='sidebarTitle'>FOLLOW US</span>
        <div className="sidebarSocial">
        <i className="sidebarIcon fa-brands fa-square-facebook"></i>
        <i className="sidebarIcon fa-brands fa-square-twitter"></i>
        <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
        <i className="sidebarIcon fa-brands fa-instagram"></i>
        </div>
      </div>
    </div>

  )
}

export default Sidebar
