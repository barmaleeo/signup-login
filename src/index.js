//import React from 'react';
//import ReactDOM from 'react-dom';
import './lib/translation.js'
import './simulateJQuery.js'
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import SignupLoginWrapper from "./lib/SignupLoginWrapper";
import SignupLoginPhoneWrapper from "./lib/SignupLoginPhoneWrapper";




new SignupLoginWrapper();
new SignupLoginPhoneWrapper();

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
//
// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
 reportWebVitals();
