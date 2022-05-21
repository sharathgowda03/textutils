import React, { useState } from "react";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

Navbar.propTypes = {title:PropTypes.string.isRequired,
                    aboutText:PropTypes.string}
Navbar.defaultProps = {title:"TextUtils is here",
                        aboutText:"About TextUtils"}

function Navbar(props) {
  
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button className="navbar-toggler"type="button"data-bs-toggle="collapse"data-bs-target="#navbarSupportedContent"aria-controls="navbarSupportedContent"aria-expanded="false"aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.aboutText}
              </Link>
            </li>
          </ul>
          
          {/* <div className="d-flex">
              <div className="bg-primary rounded mx-2" onClick={() => props.toggleMode("primary")} style={{width:"30px",height:"30px"}}></div>
              <div className="bg-success rounded mx-2" onClick={() => props.toggleMode("success")} style={{width:"30px",height:"30px"}}></div>
              <div className="bg-danger rounded mx-2" onClick={() => props.toggleMode("danger")} style={{width:"30px",height:"30px"}}></div>
              <div className="bg-warning rounded mx-2" onClick={() => props.toggleMode("warning")} style={{width:"30px",height:"30px"}}></div>
          </div> */}
            <div className={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"}`}>
              <input className="form-check-input" onClick={() => props.toggleMode(null)} type="checkbox" role="switch" id="flexSwitchCheckDefault" style={{cursor:"pointer"}}/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode === "light" ? "Enable Dark mode" : "Disable Dark Mode"}</label>
            </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
