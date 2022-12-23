import "./assets/index.css";
import React from "react";
import App from "./App";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./components/Redux/Store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
