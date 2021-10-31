import React, { Component } from "react";

class Banner extends Component {
  render() {
    return (
      <div className="container-fluid p-5 bg-banner text-center text-white-50">
        <h1 className="display-1 text-dark">{this.props.headline}</h1>
        <p className="display-6 text-black">{this.props.firstpara}</p>
        <p className="blockquote text-center text-black-50">
          {this.props.secondpara}
        </p>
      </div>
    );
  }
}

export default Banner;
