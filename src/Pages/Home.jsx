import React, { Component } from "react";
import Banner from "../components/Banner";
import Hiring from "../images/hiring.jpg";
import FindWork from "../images/findwork.jpg";
import Knowmore from "../images/knowmore.jpg";

class Home extends Component {
  render() {
    return (
      <div>
        <Banner
          headline="World's virtual marketplace"
          firstpara="Hire a coder or Search a Job"
          secondpara="See, How your coding gets done"
        />
        <div className="container mt-5">
          <div className="row">
            <div className="col-sm-4">
              <div className="card">
                <img src={Hiring} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">How to Hire?</h5>
                  <p className="card-text">
                    If you need a coder to create your website or Apps, just
                    post your description or question
                  </p>
                  <p>
                    Coders around the world will bid on your project, if you
                    select any of them. They will begin
                  </p>
                  <button type="button" className="btn btn-primary">
                    Post your Project
                  </button>
                </div>
              </div>
            </div>

            <div className="col-sm-4">
              <div className="card">
                <img src={FindWork} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Want to earn?</h5>
                  <p className="card-text">
                    Want to earn income using your hard earned technical skill?
                  </p>
                  <p>
                    Step Coders brings you out among many proects and apps to
                    work from the world
                  </p>
                  <button type="button" className="btn btn-primary">
                    Register Now
                  </button>
                </div>
              </div>
            </div>

            <div className="col-sm-4">
              <div className="card">
                <img src={Knowmore} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Know More</h5>
                  <p className="card-text">
                    Just visit our F&amp;Q section to see all your questions and
                    doubts, click the link
                  </p>
                  <p>
                    If you didn't found any solution, just reach-reach out to
                    use at logicalcreation@gmail.com
                  </p>
                  <button type="button" className="btn btn-primary">
                    How Tos?{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <figure className="text-center mt-5">
            <blockquote className="blockquote">
              <strong>Step Coders</strong> is under development
            </blockquote>
            <figcaption className="blockquote-footer">
              We are going to live, hold on...
            </figcaption>
          </figure>
        </div>
      </div>
    );
  }
}

export default Home;
