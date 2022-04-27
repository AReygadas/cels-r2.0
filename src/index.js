import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./fonts/gotham-ultra-italic.ttf";
import { CookiesProvider } from "react-cookie";
import {DataProvider} from "./Context/Context"; 


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <DataProvider>
      <CookiesProvider>
        <App />
      </CookiesProvider>
    </DataProvider>
  </React.StrictMode>
);

reportWebVitals();
