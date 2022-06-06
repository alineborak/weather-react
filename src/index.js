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
          <a href="https://github.com/alineborak/weather-react" target="blank" rel="noreferrer" >Open-source code </a> by Aline Bora-Kloppert
        </small>
      </div>
    </div>
  );
}
<img src="./sky.png" alt="sky" class="sky" />

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
