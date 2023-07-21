import React from 'react';   //this package brings everyhing related to react
import ReactDOM from 'react-dom/client';   //this brings react virtual DOM 
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //  JSX ->  JS SYNTAX EXTENSION; mixture of javascript and HTML
  <React.StrictMode>     
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
