import React from "react";
import { render } from "react-dom";
import "./css/styles.css";
import App from "./components/App";
import Header from "./components/Header";
import Footer from "./components/Footer";

render(
  <>
    <Header />
    <div className="middle-container">
      <App />
    </div>
    <Footer />
  </>,
  document.querySelector("#main")
);
