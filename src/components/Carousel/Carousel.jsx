import React from "react";
import icon1 from "../../assets/dotwork.svg";
import icon2 from "../../assets/slack.svg";
import icon3 from "../../assets/Google.svg";
import circle from "../../assets/circle.svg";
import circleGradient from "../../assets/circle-gradient.svg";
import "./Carousel.css";
import ChatPage from "../ChatPage/ChatPage";
const Carousel = () => {
  return (
    <div className="master-div">
      <div className="top-div">
        <div className="carousel-wrapper">
          <div className="circle-container">
            <img
              src={circleGradient}
              className="circle-gradient"
              alt="gradient circle"
            />
            <img src={circle} className="circle" alt="center circle" />
            <div className="icon icon--1">
              <img src={icon2} alt="icon 1" />
            </div>
            <div className="icon icon--2">
              <img src={icon1} alt="icon 2" />
            </div>
            <div className="icon icon--3">
              <img src={icon3} alt="icon 3" />
            </div>
            <div className="chat-div">
              <ChatPage />
            </div>
          </div>
        </div>
        <div className="white-text">
          <h1>Connect with every application</h1>
          <p>Everything you need in a customizable dashboard</p>
        </div>
        <div className="carousel-pointer">
          <span style={{ backgroundColor: "#FFFFFF" }}></span>
          <span style={{ backgroundColor: "#0D7DE7DD" }}></span>
          <span style={{ backgroundColor: "#0D7DE7DD" }}></span>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
