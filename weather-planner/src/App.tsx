import { useState } from "react";
import "./App.css";

const App = () => {
  const [weather, setweather] = useState("sunny");
  return (
    <div className={`card ${weather}`}>
      <h1>🌥️Smart Weather Planner</h1>
      <h2 className="label">Select Weather:</h2>
      <button className="buttons" onClick={() => {setweather("sunny")}}>☀️sunny</button>
      <button className="buttons" onClick={() => {setweather("rainy")}}>🌧️rainy</button>
      <button className="buttons" onClick={() => {setweather("snowy")}}>❄️snowy</button>
      <h2>Time of day: ☀️Day Time (Have Fun!)</h2>
      <div className="outfit-box">
        <h3>Recommended oufit:</h3>
        {weather === "sunny" && <p>🕶️Sunglasses + 👕T-shirt + 🧢Cap</p>}
        {weather === "rainy" && <p>🧥raincoat + ☔umbrella + 👞waterproof Boots</p>}
        {weather === "snowy" && <p>🧤Heavy Jacket + 🧣Scarf + 🎧Beany</p>}
      </div>
      {weather === "snowy" && <h1 className="tip">☕Hot Drink Tip:<p>Perfect Weather for hot chocolade!</p></h1>}
    </div>
  );
};

export default App;
