import "babel-polyfill";
import "react-app-polyfill/ie11";

import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>)

serviceWorker.unregister();
