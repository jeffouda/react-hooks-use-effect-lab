import React, { useState, useEffect } from "react";

function Question({ question, onAnswered }) {
  const { question: prompt, answers, correctIndex } = question;
  const [timeRemaining, setTimeRemaining] = useState(10);

  useEffect(() => {
    if (timeRemaining === 0) {
      setTimeRemaining(10);
      onAnswered(false);
      return;
    }

    const timeout = setTimeout(() => {
      setTimeRemaining((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [timeRemaining, onAnswered]);

  return (
    <div>
      <h2>{prompt}</h2>
      <ul>
        {answers.map((answer) => (
          <li key={answer}>{answer}</li>
        ))}
      </ul>
      <p>{timeRemaining} seconds remaining</p>
    </div>
  );
}

export default Question;
