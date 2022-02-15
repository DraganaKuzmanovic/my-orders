import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { OrderProvider } from "./contexts/OrderContext";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <OrderProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </OrderProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
