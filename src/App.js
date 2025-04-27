import React from "react";
import Weather from "./Weather"; // Import the Weather component
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Weather defaultCity="New York" /> {/* Make sure this line is included */}
      <footer>
        This project is coded by Ricquel Harper and is{" "}
        <a
          href="https://github.com/Ricquel215/rjh-react-weather"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on GitHub
        </a>
      </footer>
    </div>
  );
}
