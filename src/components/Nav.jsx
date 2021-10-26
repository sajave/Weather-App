import React from "react";
import SearchBar from "./SearchBar.jsx";
import "./Nav.css";
import {Link, NavLink} from "react-router-dom";

function Nav({onSearch}) {
  return (
    <nav className='navbar navbar-dark bg-dark'>
      <div class='container-fluid'>
        <span className='navbar-brand'>
          <NavLink to='/' style={{textDecoration: "none", color: "white"}}>
            <div>Santi's Weather</div>
          </NavLink>
        </span>
        <NavLink style={{textDecoration: "none", color: "white"}} to='/about'>
          <span>About</span>
        </NavLink>
        <SearchBar onSearch={onSearch} />
      </div>
    </nav>
  );
}

export default Nav;
