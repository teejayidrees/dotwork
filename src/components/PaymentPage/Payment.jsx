import React, { useState } from "react";
import { Mail } from "lucide-react";
import visaLogo from "../../assets/visa-logo.svg";
import mastercardLogo from "../../assets/mastercard-logo.svg";
import paypalLogo from "../../assets/paypal-logo.svg";
import cardIcon from "../../assets/card-icon.svg";
import num from "../../assets/123.svg";
import info from "../../assets/info.svg";
import Lock from "../../assets/Lock.svg";
import expiry from "../../assets/expiry.svg";
import Camera from "../../assets/camera.png";
import "./Payment.css";
const Payment = () => {
  const [selectedCard, setSelectedCard] = useState("mastercard");
  return (
    <div className="head-wrapper">
      <div className="payment-wrapper">
        <div>
          <h1>Payment Details</h1>
          <p>Complete your payment by providing your payment details</p>
          <div>
            <label>Email</label>
            <div className="input-div">
              <Mail className="icon-auth" />
              <input type="email" name="Email" />
            </div>
          </div>
        </div>
        <div>
          <label> Card type</label>
          <div className="card-div">
            <div
              className={`div1 ${
                selectedCard === "mastercard" ? "selected" : ""
              }`}
              onClick={() => setSelectedCard("mastercard")}>
              <img src={mastercardLogo} alt="Mastercard" />
            </div>
            <div
              className={`${selectedCard === "visa" ? "selected" : ""}`}
              onClick={() => setSelectedCard("visa")}>
              <img src={visaLogo} alt="VISA" />
            </div>
            <div
              className={`div2 ${selectedCard === "paypal" ? "selected" : ""}`}
              onClick={() => setSelectedCard("paypal")}>
              <img src={paypalLogo} alt="PayPal" />
            </div>
          </div>
        </div>

        <div>
          <label>Card Number</label>
          <div className="input-div">
            <img src={cardIcon} alt="" />
            <input type="number" name="Card Number" placeholder="" />
          </div>
        </div>
        <div className="expiry-cvv">
          {" "}
          <div>
            <label>Expiry</label>
            <div className="input-div">
              <img src={expiry} alt="" />
              <input type="number" name="Expiry" placeholder="" />
            </div>
          </div>
          <div>
            <label className="info-cvv">
              CVV{" "}
              <span>
                <img src={info} alt="" />
              </span>
            </label>
            <div className="input-div">
              <img src={num} alt="" />

              <input type="number" name="CVV" placeholder="" />
            </div>
          </div>
        </div>
        <div className="pay">
          <button>Pay $490.00</button>
          <p>
            <img src={Lock} alt="" /> Payment is secure and encrypted
          </p>
        </div>
      </div>
      <div className="camera-details">
        <img style={{ margin: "40px" }} src={Camera} alt="camera" />
        <div className="camera-div">
          <p>Canon Camera</p>
          <p>$480.00</p>
        </div>
        <p className="model">Model: EOS R6</p>
        <hr />
        <div className="details-div">
          <p>Sub Total</p>
          <p>$470.00</p>
        </div>
        <div className="details-div">
          <p>Shipping Fee</p>
          <p>$10.00</p>
        </div>
        <hr />
        <div className="camera-div">
          <p>Total</p>
          <p>$490.00</p>
        </div>
      </div>
    </div>
  );
};

export default Payment;
