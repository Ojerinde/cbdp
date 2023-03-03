import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
// import UserContextProvider from "./store/UserContext";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    {/* <UserContextProvider> */}
    <App />
    {/* </UserContextProvider> */}
  </BrowserRouter>
);
