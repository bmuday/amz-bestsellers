import React, { Fragment } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Sections from "./components/Sections";
import Sidebar from "./components/Sidebar";
import Produits from "./components/Produits";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Sections />
      <Sidebar />
      <Produits />
    </Fragment>
  );
}

export default App;
