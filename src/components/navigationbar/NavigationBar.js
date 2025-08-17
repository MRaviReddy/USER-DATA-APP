import react from 'react'

import './NavigationBar.css'
import {Link, NavLink} from 'react-router-dom' 
import { FaUsers,FaUsersSlash } from "react-icons/fa6";


function NavigationBar(){



  const activeLink={
    color:"#EEF0F1",
    fontSize:"1.2rem",
    fontWeight:"bold"
  };
  const inactiveLink={
    color:"#EEF0F1",
     fontSize:"1.2rem",
   

  }
    return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
  <a className="navbar-brand" href="#"><img src="https://www.nicepng.com/png/full/882-8823238_user-friendly-design-icon-people-icon-png.png" width="50px" alt=""/></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto">
         <li className="nav-item ">
        <NavLink className="nav-link"  to="/users" style={({isActive})=>{return isActive? activeLink:inactiveLink;}} > <FaUsers className='users-icon'/>Users</NavLink>
      </li>
      <li className="nav-item ">
        <NavLink className="nav-link"  to="/removed-users" style={({isActive})=>{return isActive? activeLink:inactiveLink;}} ><FaUsersSlash className='removed-users-icon'/>Removed Users</NavLink>
      </li>
     
     
      
    </ul>
    
  </div>
</nav>
    )
}


export default NavigationBar