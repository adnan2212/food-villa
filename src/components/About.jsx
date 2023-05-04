import React from "react";
import { Outlet } from "react-router-dom";

import ProfileFunctionalComponent from "./Profile";
import ProfileClass from "./ProfileClass";

import food from "../assets/img/burger-image.png";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-left">
        <h1>
          Welcome to <br /> The world of <br /> <span>Tasty & Fresh Food</span>
        </h1>
        <h4>
          "Better you will feel if you eat a Food<span>Villa</span> healthy
          meal"
        </h4>
      </div>
      <div className="about-right">
        <img src={food} alt="Food Image" />
      </div>
    </div>
  );
};

class About2 extends React.Component {
  constructor(props) {
    super(props);

    // console.log("Parent - Constructor");
  }

  // componentDidMount() {
  //   console.log("Parent - componentDidMount");
  // }

  render() {
    {
      // console.log("Parent - render");
    }
    return (
      <div className="about-container">
        <div className="about-left">
          <h1>
            Welcome to <br /> The world of <br />{" "}
            <span>Tasty & Fresh Food</span>
          </h1>
          <h4>
            "Better you will feel if you eat a Food<span>Villa</span> healthy
            meal"
          </h4>
        </div>
        <div className="about-right">
          <img src={food} alt="Food Image" />
        </div>
        <ProfileFunctionalComponent name={"Adnan"} />

        <ProfileClass name={" First Child "} />
      </div>
    );
  }
}

export default About;
