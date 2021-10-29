import React, { Component } from "react";
import Banner from "../components/Banner";

class HireCoder extends Component {
  render() {
    return (
      <>
        <Banner
          headline="Hire a Coder"
          firstpara="Looking a coder to write a program"
          secondpara="Review and select the coder worldwide"
        />
        <div className="container mt-4">
          <h1 className="display-4">Select Category for Project</h1>
          <ul className="list-group">
            <li className="list-group-item">
              <input
                className="form-check-input me-1"
                type="checkbox"
                value=""
                aria-label="..."
              />
              HTML 5
            </li>
            <li className="list-group-item">
              <input
                className="form-check-input me-1"
                type="checkbox"
                value=""
                aria-label="..."
              />
              CSS 3
            </li>
            <li className="list-group-item">
              <input
                className="form-check-input me-1"
                type="checkbox"
                value=""
                aria-label="..."
              />
              JavaScript
            </li>
            <li className="list-group-item">
              <input
                className="form-check-input me-1"
                type="checkbox"
                value=""
                aria-label="..."
              />
              React JS
            </li>
            <li className="list-group-item">
              <input
                className="form-check-input me-1"
                type="checkbox"
                value=""
                aria-label="..."
              />
              MongoDB
            </li>
            <li className="list-group-item">
              <input
                className="form-check-input me-1"
                type="checkbox"
                value=""
                aria-label="..."
              />
              Express
            </li>
            <li className="list-group-item">
              <input
                className="form-check-input me-1"
                type="checkbox"
                value=""
                aria-label="..."
              />
              Angular JS
            </li>
            <li className="list-group-item">
              <input
                className="form-check-input me-1"
                type="checkbox"
                value=""
                aria-label="..."
              />
              Vue JS
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default HireCoder;
