// import "babel-polyfill";
// import "react-app-polyfill/ie11";

// import React from "react";
// import ReactDOM from "react-dom/client";
// // import * as serviceWorker from "./serviceWorker";
// import App from "./App";

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <React.StrictMode>
//     <App/>
//   </React.StrictMode>)

// // serviceWorker.unregister();

import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
