import React from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Weather defaultCity="Amsterdam" />
      <div>
        <small>
          Open-source{" "}
          <a
            href="https://github.com/alineborak/weather-react"
            target="blank"
            rel="noopener noreferrer"
          >
            code on Github{" "}
          </a>
          by <a
            href="https://www.linkedin.com/in/aline-bora-kloppert/"
            target="blank"
            rel="noopener noreferrer"
          >
            Aline Bora-Kloppert
          </a>
        </small>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);