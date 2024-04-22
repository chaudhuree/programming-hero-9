import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BookContextProvider } from "./contextApi/Contextapi.jsx";
import 'react-tabs/style/react-tabs.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BookContextProvider>
      <App />
      <ToastContainer />
    </BookContextProvider>
  </React.StrictMode>
);
