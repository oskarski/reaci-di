import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { TemperatureCard } from "./TemperatureCard/TemperatureCard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TemperatureCard />
      </header>
    </div>
  );
}

export default App;
