import React from "react";
import ReactDOM from "react-dom/client";
import Routing from "navigation/Routing";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import storeConfig, { storePersist } from "store/storeConfig";
import { PersistGate } from "redux-persist/integration/react";
import "normalize.css";
import "index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={storeConfig}>
      <PersistGate loading={null} persistor={storePersist}>
        <BrowserRouter>
          <Routing />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
