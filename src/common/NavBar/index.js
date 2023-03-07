import React from "react";
import "./index.css";

function NavBar() {
  return (
    <nav
      className="navbar mt-6 mx-6"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand has-background-black-ter">
        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>
      <div
        id="navbarBasicExample"
        className="navbar-menu has-background-black-ter"
      >
        <div className="navbar-end has-background-black-ter mt-3 ml-2">
          <a className="navbar-item is-active">
            <span style={{ color: "#7B4AE2" }}>Home</span>
          </a>
          <a className="navbar-item has-text-grey" href="/about">
            About me
          </a>
          <a className="navbar-item has-text-grey" href="/skills">
            Skills
          </a>
          <a className="navbar-item has-text-grey" href="/education">
            Education
          </a>
          <a className="navbar-item has-text-grey" href="/contact">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
