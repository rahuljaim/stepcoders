import React, { Component } from "react";
import Banner from "../../components/Banner";

class Employers_FAQ extends Component {
  render() {
    return (
      <div>
        <Banner
          headline="Employee FAQ"
          firstpara="(Frequently Asked Questions)"
          secondpara="Below are the answers to common questions about the site."
        />
        <p> Employers FAQ page </p>
      </div>
    );
  }
}

export default Employers_FAQ;
