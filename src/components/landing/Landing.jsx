import React from "react";
import "./landing.css";
import { HiOutlineBarsArrowDown } from "react-icons/hi2";

const Landing = () => {
  return (
    <div className="landing">
      <div className="container">
        <div className="wrapper">
          <div className="text">
            <h1>Welcome, To Logo World</h1>
            <p>
              Here Iam gonna share everything about my life. Books Iam reading,
              Games Iam Playing, Stories and Events
            </p>
          </div>
          <div className="image">
            <img src="/assets/images/cat-01.jpg" alt="landing-page" />
            <img src="/assets/images/cat-02.jpg" alt="" />
            <img src="/assets/images/cat-03.jpg" alt="" />
            <img src="/assets/images/cat-04.jpg" alt="cat" />
          </div>
        </div>
        <a className="go-down" href="#articles">
          <HiOutlineBarsArrowDown className="icon" />
        </a>
      </div>
    </div>
  );
};

export default Landing;
