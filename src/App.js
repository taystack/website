import React from 'react';
import Layer from "./components/Layer";
import './App.css';
import colors from "./constants/colors";


const message = [
  "At Stack Attack Studios we strive to bring a warm, fuzzy feeling to the work we do.",
];


function App() {
  return (
    <div className="App" style={{
      background: colors.backgroundLight,
      display: "flex",
      alignItems: "stretch",
      position: "relative",
    }}>
      <div style={{ marginLeft: 40 }}>
        <Layer>
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 style={{fontFamily:"monospace",fontWeight:"lighter"}}>STACK ATTACK STUDIOS</h1>
        </Layer>
        <Layer>
          <p>{message}</p>
        </Layer>
        <Layer style={{fontSize: 20}}>
        </Layer>
      </div>
    </div>
  );
}

export default App;
