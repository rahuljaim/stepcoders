import React, { Component } from "react";
import logo from "./../images/step-coders-logo-tr.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HireCoder from "../Pages/HireCoder";
import SearchJobs from "../Pages/SearchJobs";
import Home from "../Pages/Home";

class Navbar extends Component {
  render() {
    return (
      <Router>
        <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light">
          <div className="container-fluid">
            <Link to="/">
              <img src={logo} className="navbar-brand" alt="Step Coder" />{" "}
            </Link>

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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/hire-a-coder"
                  >
                    Hire a Coder
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/search-a-job">
                    Search a Job
                  </Link>
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
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/hire-a-coder">
            <HireCoder />
          </Route>
          <Route exact path="/search-a-job">
            <SearchJobs />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default Navbar;
