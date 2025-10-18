import React from "react";
import "./ChatPage.css";
import blackMan from "../../assets/black-man.png";
import blackWoman from "../../assets/black-woman.png";
import whiteMan from "../../assets/white-man.png";
const ChatPage = () => {
  return (
    <div>
      <div className="chat-page-container">
        <div className="top-bar">
          <div className="window-controls">
            <span style={{ backgroundColor: "#FF4E56" }}></span>
            <span style={{ backgroundColor: "#FBBC05" }}></span>
            <span style={{ backgroundColor: "#43E48A" }}></span>
          </div>
          <div className="line-bar">
            <div className="bar1" style={{ position: "absolute" }}></div>
            <div className="bar2"></div>
          </div>
        </div>
        <div className="hero-chat">
          <div className="box">
            <div className="bar1" style={{ backgroundColor: "#BABABA" }}></div>
          </div>
          <div className="bar1" style={{ backgroundColor: "#DADADA" }}></div>
        </div>
        <div className="chat-box">
          <img src={blackMan} />
          <div>
            <div
              className="bar1"
              style={{ width: "180px", backgroundColor: "#BABABA" }}></div>
            <div
              className="bar1"
              style={{ width: "130px", backgroundColor: "#DADADA" }}></div>
          </div>
        </div>
        <div className="chat-box">
          <img src={blackWoman} />
          <div>
            <div
              className="bar1"
              style={{ width: "130px", backgroundColor: "#BABABA" }}></div>
            <div
              className="bar1"
              style={{ width: "170px", backgroundColor: "#DADADA" }}></div>
          </div>
        </div>{" "}
        <div className="chat-box">
          <img src={whiteMan} />
          <div>
            <div
              className="bar1"
              style={{ width: "170px", backgroundColor: "#BABABA" }}></div>
            <div
              className="bar1"
              style={{ width: "130px", backgroundColor: "#DADADA" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
