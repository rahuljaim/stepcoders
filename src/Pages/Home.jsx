import React, { Component } from "react";
import Banner from "../components/Banner";

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
              <h3 className="display-4">How to Hire?</h3>
              <p>
                If you need a coder to create your website or Apps, just post
                your description or question
              </p>
              <p>
                Coders around the world will bid on your project, if you select
                any of them. They will begin
              </p>
            </div>
            <div className="col-sm-4">
              <h3 className="display-4">Want to earn?</h3>
              <p>Want to earn income using your hard earned technical skill?</p>
              <p>
                Step Coders brings you out among many proects and apps to work
                from the world
              </p>
            </div>
            <div className="col-sm-4">
              <h3 className="display-4">know More?</h3>
              <p>Just visit our F and Q section to see all your questions</p>
              <p>
                If you didn't found any solution, just reach-reach out to use at
                logicalcreation@gmail.com
              </p>
            </div>
          </div>
          <figure className="text-center">
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
