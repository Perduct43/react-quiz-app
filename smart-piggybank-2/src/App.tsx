import { useState } from "react";
import "./App.css";

const App = () => {
  const [saving, setSaving] = useState("");
  const [target, setTarget] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [currency, setCurrency] = useState(0);
  const [isTrue, setIsTrue] = useState(true);

  const handleAdd = () => {
    const num = Number(inputValue);
    if (num > 0) {
      setCurrency(() => currency + num);
    }
  };
  const handleSpend = () => {
    const num = Number(inputValue);
    if (num > 0) {
      setCurrency(() => currency - num);
    }
  };

  const percentage = (currency / Number(target)) * 100;
  return (
    <>
      <div className="container">
        {isTrue ? (
          <>
            <div className="card">
              <h1>🐷Smart Piggy Bank</h1>
              <h2>Set Your saving goal!</h2>
              <div className="input-container">
                <input
                  value={saving}
                  onChange={(e) => {
                    setSaving(e.target.value);
                  }}
                  placeholder="What are you saving for? (e.g., PS5, Bike)"
                  className="Inputs"
                  type="text"
                />
                <input
                  value={target}
                  onChange={(e) => {
                    setTarget(e.target.value);
                  }}
                  placeholder="Target Price($)"
                  className="Inputs"
                  type="number"
                  name=""
                  id=""
                />
              </div>{" "}
              <br />
              <button
                onClick={() => setIsTrue((prev) => !prev)}
                className="start-save-btn"
              >
                Start Saving🚀
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="second-card">
              <h1 className="main-h1">🐷Smart Piggy Bank</h1>
              <div className="list">
                <h1>
                  Saving for:<span className="normal-p">{saving}</span>
                </h1>
                <h1>
                  Target price:<span className="normal-p">{target}$</span>
                </h1>
              </div>
              <h1 className="currency">Current Saving: {currency}$</h1>
              <h2>Progress: {percentage}%🎯</h2>
              <input
                value={inputValue}
                onChange={(e) => {
                  setInputValue(e.target.value);
                }}
                className="input"
                type="text"
                placeholder="Enter amout ($)"
              />
              <div className="buttons">
                <button className="Add" onClick={handleAdd}>
                  ➕Add
                </button>
                <button className="Spend" onClick={handleSpend}>
                  ➖Spend
                </button>
              </div>
              <button onClick={()=>(setIsTrue((prev)=>!prev))} className="Change-btn">⚙️Change goal</button>
            </div>
            +
          </>
        )}
      </div>
    </>
  );
};

export default App;
