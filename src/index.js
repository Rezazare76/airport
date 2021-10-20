import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Airport from "./Airport"

import './font/Vazir.woff';
import './font/Vazir-Bold.woff';
import './font/Vazir-Thin.woff';
import './font/Vazir2.woff2';
ReactDOM.render(
  <React.StrictMode>

    <Airport />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
