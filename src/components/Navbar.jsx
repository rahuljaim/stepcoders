import React, { Component } from "react";
import logo from "./../images/step-coders-logo-tr.png";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light">
        <div className="container-fluid">
          <img src={logo} className="navbar-brand" alt="Step Coder" />

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Hire a Coder
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Search a Job
                </a>
              </li>
            </ul>
            <form class="d-flex">
              <input
                class="form-control"
                list="datalistOptions"
                id="exampleDataList"
                placeholder="Type to search..."
              />
              <datalist id="datalistOptions">
                <option value="Hire a Coder"></option>
                <option value="Browse Projects"></option>
                <option value="Search a Job"></option>
              </datalist>
            </form>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
