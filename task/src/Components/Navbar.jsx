import "./Navbar.css";
import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Registration Form</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export { Navbar };
