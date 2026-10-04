import { useState } from "react";
import "./App.css";

const App = () => {
  const [level, setLevel] = useState(0);

  const handleTrain = () => {
    if(level <= 9) {
      setLevel((previousValue)=> previousValue + 1) 
    }
  }

  const handleTrainLess = () => {
    if(level > 0) {
      setLevel(()=> level - 1) 
    }
  }
  return (
    <div className="app-wrapper">
      <div className="hero-card">
        <h1 className="hero-title">🦸 Hero Training Ground</h1>

        <div className="avatar-display">{ level > 5 ?"⚡🦸‍♂️⚡" : "🧑‍🌾"}</div>

        <h1 className="rank-badge">Rank: { level > 5 ? "God" : "Rookie Trainee"}</h1>
        <h2 className="level-counter">Hero Level: {level}/ 10</h2>

        <div className="action-panel">
          <button className="action-btn" onClick={handleTrainLess}>➖ Train Less</button>
          <button className="action-btn" onClick={handleTrain}>➕ Level Up!</button>
        </div>

        <hr className="divider-line" />

        <div className="perks-panel">
          <h3 className="perks-heading">Abilities Unlocked:</h3>
          { level > 0 && <p className="perk-item">✅ Basic Punch Unlocked</p>}
          { level > 2 && <p className="perk-item fireball-skill">
            🔥 Fireball Unlocked at Lv 3!
          </p>}
         { level > 6 &&  <p className="perk-item forcefield-skill">
            🛡️ Force Field Unlocked at Lv 7!
          </p>}
          { level > 9 && <p className="perk-item godmode-skill">👑 GOD MODE MAX LEVEL!</p>}
        </div>
        <button>Hit with Stun Ray!</button>
      </div>
    </div>
  );
};

export default App;
