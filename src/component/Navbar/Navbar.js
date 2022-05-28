import React from 'react';
import './Navbar.css'
import { NavHashLink } from "react-router-hash-link";
const Navbar = () => {
    return (
        <div className="navber">
      <NavHashLink smooth to="#home">
        Home
      </NavHashLink>

      <NavHashLink smooth to="#about">
        About
      </NavHashLink>

      <NavHashLink smooth to="#skill">
        Skill
      </NavHashLink>
      <NavHashLink smooth to="#project">
        Project
      </NavHashLink>
      <NavHashLink smooth to="#contact">
        Contact
      </NavHashLink>
    </div>
    );
};

export default Navbar;