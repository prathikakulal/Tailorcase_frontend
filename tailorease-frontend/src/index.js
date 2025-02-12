// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


// import React from "react";
// import ReactDOM from "react-dom";
// import { BrowserRouter as Router } from "react-router-dom";
// import App from "./App";
// import "bootstrap/dist/css/bootstrap.min.css";

// ReactDOM.render(
//   <Router>
//     <App />
//   </Router>,
//   document.getElementById("root")
// );


// import React from "react";
// import ReactDOM from "react-dom/client"; // <-- Correct import for React 18
// import App from "./App";
// import "./styles/index.css"; // Ensure styles are correctly imported

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/index.css";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
