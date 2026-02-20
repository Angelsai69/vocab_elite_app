import { useState } from "react";

export default function Quiz({ quizData, onFinish }) {
  const questions = JSON.parse(quizData);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);

  const current = questions[index];

  const answer = (opt) => {
    if (opt === current.answer) setScore(score + 1);

    if (index + 1 < questions.length) {
      setIndex(index + 1);
    } else {
      onFinish(score);
    }
  };

  return (
    <div className="card">
      <h3>{current.question}</h3>

      {current.options.map((o, i) => (
        <button key={i} onClick={() => answer(o)}>
          {o}
        </button>
      ))}
    </div>
  );
}