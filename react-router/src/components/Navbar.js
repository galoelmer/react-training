import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

const Navbar = (props) => {
  // 
  // setTimeout(() => {
  //   props.history.push("/about");
  // }, 2000);
  return (
    <nav>
      <div className="nav-wrapper">
        <div className="container">
          <a href="#!" className="brand-logo hide-on-med-and-down">
            React Router
          </a>
          <ul className="right">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
