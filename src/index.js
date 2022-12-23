import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import "./index.css";
import Home from "./pages/home/home";
import TwtAnniv from "./pages/twt-anniv-gen/twt-anniv";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="twt-anniv" element={<TwtAnniv />} />
      </Routes>
      <footer>
        Copyright © 2022{" "} <Link to="/"><span>Luis Escarrilla</span></Link>
        . All Rights Reserved. This website doesn't use cookies.
      </footer>
    </BrowserRouter>
  </React.StrictMode>
);
