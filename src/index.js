import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import Calendar from "./Calendar.jsx";

const rootElement = document.querySelector("#root");

ReactDOM.render(<Calendar />, rootElement);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

