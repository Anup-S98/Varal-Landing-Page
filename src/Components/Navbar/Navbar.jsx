import React from "react";
import Container from "../../Container/Container";
import { NavLink } from "react-router-dom";
import primaryIcon from "../../Assets/Group 114.png";
// import { Nav, NavLink, NavMenu, NavBtn, NavBtnLink } from "./NavbarStyled";



const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary position-sticky top-0 z-2">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img alt="" className="img-fluid" srcSet={primaryIcon} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav align-items-lg-center">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#hero">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#service">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#price">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About Us
              </a>
            </li>
            <li className="nav-item ms-3 ">
              <a
                href="/"
                className="nav-link btn btn-lg btn-primary rounded-1 text-white py-3"
              >
                Start a Company
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
