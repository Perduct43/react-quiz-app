import { useState } from "react";
import "./App.css";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [saving, setSaving] = useState(0);
  console.log(inputValue);

  const handleAdd = () => {
    const num = Number(inputValue);
    if (num > 0) {
      setSaving(() => saving + num);
      setInputValue("");
    }
  };

  const handleSpend = () => {
    const num = Number(inputValue);
    if (num > 0) {
      setSaving(() => saving - num);
      setInputValue("");
    }
  };

  return (
    <>
      <div className="container">
        <div className="card-container">
          <div className="card">
            <h1 className="main-h1">🐷 Smart piggy bank</h1>
            <div className="list">
              <h2 className="main-h1">
                Saving for : <span className="normal-p">Headphones</span>
              </h2>
              <h2 className="main-h1">
                Target Goal: <span className="normal-p">100$</span>
              </h2>
            </div>
            <h1 className="cureency">Current Saving: {saving}</h1>
            <h2>Goal Procces: {saving}%🎯</h2>
            <input
              onChange={(e) => setInputValue(e.target.value)}
              value={inputValue}
              className="input"
              type="number"
              name=""
              id=""
              placeholder="Enter Amount ($)"
            ></input>
            <div className="buttons">
              <button className="Add" onClick={handleAdd}>
                + Add
              </button>
              <button className="Spend" onClick={handleSpend}>
                - Spend
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
