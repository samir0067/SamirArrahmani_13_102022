import React from "react";
import ReactDOM from "react-dom/client";
import App from "App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import storeConfig from "store/storeConfig";
import "normalize.css";
import "index.css";

/**
 * root of the application
 */
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={storeConfig}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
