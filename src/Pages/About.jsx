import React, { Component } from "react";
import Banner from "../components/Banner";

class About extends Component {
  render() {
    return (
      <div>
        <Banner
          headline="About Step Coder"
          firstpara="What does [STEP]Coders stand for?"
          secondpara="Why do you say StepCoders are more 'capable, accountable and affordable' than on-site workers?"
        />
        <div className="container mt-5">
          <p className="text">
            <em>[Step]Coders</em> connects number of businesses to remote
            experts in hundreds of fields (such as programmers, designers and
            writers). It saves them 35%-80% over on-site hiring and also
            protects them better with monitoring of worker desktops and a
            money-back guarantee. It also allows people to work from home,
            choose what they work on and set their own hours.
          </p>
        </div>
      </div>
    );
  }
}

export default About;
