import { useState } from "react";
import "./App.css";

const App = () => {
  const [index, setIndex] = useState(0);
  const [err, setErr] = useState("");
  const questions = [
    {
      id: 1,
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      answer: "Paris",
    },
    {
      id: 2,
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Venus"],
      answer: "Mars",
    },
    {
      id: 3,
      question: "What programming language is React built with?",
      options: ["Python", "Java", "JavaScript", "C++"],
      answer: "JavaScript",
    },
  ];

  const answerChecker = (option) => {
    console.log(option);
    if (option === questions?.[index].answer) {
      setIndex((previousCount) => previousCount + 1);
      setErr("");
    } else {
      setErr("Your answer is wrong try again");
    }
  };

  if (index >= questions.length) {
    return (
      <div className="container">
        <div className="card">
          <p className="tracker">Crongatulation!</p>
          <h1 className="title">Youve finished your task</h1>
            <div className="option-list">
              <button onClick={(()=> setIndex(0))} className="btn">
                Go back
              </button>
            </div>
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="container">
        <div className="card">
          <p className="tracker">{questions?.[index].id} questions out of 3</p>
          <h1 className="title">{questions?.[index].question}</h1>
          {questions?.[index].options.map((option) => (
            <div className="option-list">
              <button onClick={() => answerChecker(option)} className="btn">
                {option}
              </button>
            </div>
          ))}
          <p className="err-msg">{err}</p>
        </div>
      </div>
    </>
  );
};

export default App;
