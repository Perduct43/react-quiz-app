import { useState } from "react";
import "./App.css"

const App = () => {
  const [fullness, setFullness] = useState(50);
  const [happiness, setHappiness] = useState(50);

  const feedPet = () => {
    if (fullness < 100) {
      setFullness(fullness + 10);
    }
  };

  const playPet = () => {
    if (fullness > 0) {
      setFullness(fullness - 10);
    }
    if (happiness < 100) {
      setHappiness(happiness + 10);
    }
  };

  const restartPet = () => {
    setFullness(50);
    setHappiness(50);
  };

  return (
    <div className="pet-app">
      <div className="pet-card">
        <h1 className="pet-title">My Virtual Pet</h1>

        <div className="pet-display">
          <p className="pet-avatar">🐶</p>
          <p className="pet-status">(Happy)</p>
        </div>

        <div className="pet-stats">
          <div className="stat-row">
            <p>🍔 Fullness:</p>
            <p className="stat-value">{fullness} / 100</p>
          </div>
          <div className="stat-row">
            <p>❤️ Happiness:</p>
            <p className="stat-value">{happiness} / 100</p>
          </div>
        </div>

        <div className="button-group">
          <button className="btn" onClick={feedPet}>🍕 Feed</button>
          <button className="btn" onClick={playPet}>🎾 Play</button>
        </div>

        <button className="btn" onClick={restartPet}>🔄 Restart</button>
      </div>
    </div>
  );
};

export default App;