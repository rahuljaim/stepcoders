import React, { Component } from "react";
import Banner from "../components/Banner";

class SearchJobs extends Component {
  render() {
    return (
      <>
        <Banner
          headline="Browse Number of Projects"
          firstpara="Start your earning -Join Now"
          secondpara="This is your plateform, If you are seeking work."
        />
        <div className="container-md">
          <h1 className="display-4">Register your Profile and Get Access</h1>
          <form className="row g-3">
            <div className="col-md-4">
              <label for="validationDefault01" className="form-label">
                First name
              </label>
              <input
                type="text"
                className="form-control"
                id="validationDefault01"
                required
              />
            </div>
            <div className="col-md-4">
              <label for="validationDefault02" className="form-label">
                Last name
              </label>
              <input
                type="text"
                className="form-control"
                id="validationDefault02"
                required
              />
            </div>
            <div className="col-md-4">
              <label for="validationDefaultUsername" className="form-label">
                Username
              </label>
              <div className="input-group">
                <span className="input-group-text" id="inputGroupPrepend2">
                  @
                </span>
                <input
                  type="text"
                  className="form-control"
                  id="validationDefaultUsername"
                  aria-describedby="inputGroupPrepend2"
                  required
                />
              </div>
            </div>
            <div className="col-md-6">
              <label for="validationDefault03" className="form-label">
                City
              </label>
              <input
                type="text"
                className="form-control"
                id="validationDefault03"
                required
              />
            </div>
            <div className="col-md-3">
              <label for="validationDefault04" className="form-label">
                State
              </label>
              <select className="form-select" id="validationDefault04" required>
                <option selected disabled value="">
                  Choose...
                </option>
                <option>...</option>
              </select>
            </div>
            <div className="col-md-3">
              <label for="validationDefault05" className="form-label">
                Zip
              </label>
              <input
                type="text"
                className="form-control"
                id="validationDefault05"
                required
              />
            </div>
            <div className="col-12">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="invalidCheck2"
                  required
                />
                <label className="form-check-label" for="invalidCheck2">
                  Agree to terms and conditions
                </label>
              </div>
            </div>
            <div className="col-12">
              <button className="btn btn-primary" type="submit">
                Submit form
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default SearchJobs;
