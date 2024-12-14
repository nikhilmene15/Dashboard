import { useState, useEffect } from "react";
import "./App.css";
import Dashboard from "./Dashboard";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Dashboard />
    </>
  );
}

export default App;
