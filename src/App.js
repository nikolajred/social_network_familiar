import React from "react";
import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Navigate from "./components/Navigate";

const App = () => {
  return (
    <div className="app-wraper">
      <Header />
      <Navigate />
      <Content />

      </div>
  );
};

export default App;
