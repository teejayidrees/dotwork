import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthPage from "./components/AuthPage/AuthPage";
import Carousel from "./components/Carousel/Carousel";
import Payment from "./components/PaymentPage/Payment";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div className="homepage">
                <AuthPage />
                <Carousel />
              </div>
            }
          />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
