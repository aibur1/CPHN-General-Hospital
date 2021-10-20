import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Navbar.css';


const Navbar = () => {
  const { user, logout } = useAuth();
  return (
    <div className="nav-link py-4 d-flex" >

      <nav className="d-flex "  >
        <NavLink className="navbar" to="/home">HOME</NavLink>
        <NavLink className="navbar" to="/services">SERVICES</NavLink>
        <NavLink className="navbar" to="/doctors">DOCTORS</NavLink>
        <NavLink className="navbar" to="/camp">FREECAMP</NavLink>
        <NavLink className="navbar" to="/about">ABOUT</NavLink>
        <NavLink className="navbar" to="/contact">CONTACT</NavLink>
        <NavLink className="navbar" to="/login">LOGIN</NavLink>
        <span>{user?.displayName}</span>
        {user?.email && <button onClick={logout} >LOGOUT</button>}

      </nav>
      <input className="mx-auto input" type="text" placeholder="BOOK AN APPOINMENT"></input>


    </div>

  );
};

export default Navbar;