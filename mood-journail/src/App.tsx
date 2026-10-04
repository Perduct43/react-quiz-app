import { useState } from "react";
import "./App.css";

const App = () => {
  const [mood, setMood] = useState("happy");
  const [todoList, setTodoList] = useState([""]);
  const [input, setInput] = useState("");

  const handleSave = (e) => {
    e.preventDefault();
    setTodoList([...todoList, input]);
  };
  const handleDelete = (index) => {
    console.log(index);
    setTodoList(todoList.filter((todo, idx) => idx !== index));
  };
  return (
    <>
      <div className={`card ${mood}`}>
        <h1>🎭My Mood Journal</h1>
        <div className="buttons">
          <button onClick={() => setMood("happy")}>😊Happy</button>
          <button onClick={() => setMood("sad")}>😢Sad</button>
          <button onClick={() => setMood("angry")}>😡Angry</button>
          <button onClick={() => setMood("sleepy")}>😴Sleepy</button>
        </div>
        <div className={`${mood}-box`}>
          {mood === "happy" && <h2>🎉Keep Spreading that great energy!</h2>}
          {mood === "sad" && (
            <h2>💙Its ok to feel sad. Listen to favorate music!</h2>
          )}
          {mood === "angry" && <h2>💨Take 3 deep breaths in and out...</h2>}
          {mood === "sleepy" && <h2>🥛Drink a warm glass of water or rest!</h2>}
        </div>
        <form onSubmit={handleSave}>
          <input
            onChange={(e) => {
              setInput(e.target.value);
            }}
            value={input}
            className="input-box"
            type="text"
          />
          <button type="submit">Log Entry📝</button>
        </form>
        <h1>Past Entries:</h1>
        <ul>
          {todoList.map((answer, index) => (
            <li key={index}>
              {answer}
              <button type="button" onClick={() => handleDelete(index)}>
                x
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default App;
