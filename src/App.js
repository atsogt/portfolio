import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import routes from "./components/routes/routes";

import Home from "./components/home/home";
import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <HashRouter>
      <div>
        <Navbar />
        {routes}
      </div>
    </HashRouter>
  );
}

export default App;
