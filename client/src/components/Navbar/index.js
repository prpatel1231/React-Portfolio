import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavBar() {
  const location = useLocation();

  return (
    <div>
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper">
            <a href="/" className="brand-logo">Randall Pharr</a>
            <a href="/#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            <ul className="right hide-on-med-and-down">
              <li className={location.pathname === "/about" ? "active" : ""}>
                <Link to="/about">
                  About
                </Link>
              </li>
              <li className={location.pathname === "/portfolio" ? "active" : ""}>
                <Link to="/portfolio">
                  Portfolio
                </Link>
              </li>
              <li className={location.pathname === "/contact" ? "active" : ""}>
                <Link to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <ul className="sidenav" id="slide-out">
        <li>
          <Link to="/about" className="sidenav-close">
            About
          </Link>
        </li>
        <li>
          <Link to="/portfolio" className="sidenav-close">
            Portfolio
          </Link>
        </li>
        <li>
          <Link to="/contact" className="sidenav-close">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;