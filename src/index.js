import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import "./styles/app.css";
const container = document.getElementById("container");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  container
);
