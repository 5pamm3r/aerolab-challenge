import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import App from "./App";
import {Provider as UserProvider} from "./Context/userContext";

import "./theme.css";
import History from "./components/History";
import NavUser from "./components/NavUser";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <NavUser />
        <Routes>
          <Route element={<App />} path="/" />
          <Route element={<History />} path="/history" />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root"),
);
