import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import "./index.css";
import Home from "./pages/home/home";
import Twitterversary from "./pages/twitterversary/twitterversary";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="twitterversary" element={<Twitterversary />} />
      </Routes>
      <footer>
        Copyright © 2022{" "}
        <Link to="/">
          <span>Luis Escarrilla</span>
        </Link>
        . All Rights Reserved. This website doesn't use cookies.
      </footer>
    </BrowserRouter>
  </React.StrictMode>
);
