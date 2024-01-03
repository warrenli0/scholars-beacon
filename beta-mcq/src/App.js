import React, { useState } from "react";
import './App.css';

function App() {

  // Properties
  const [showResults, setResults] = useState(false);
  const [score, setScore] = useState(0);
  const [question, setQuestion] = useState(0);

  const questions = [
    {
      text: "Maria is staying at a hotel that charges $99.95 per night plus tax for a room. A tax of 8% is applied to the room rate, and an additional onetime untaxed fee of $5.00 is charged by the hotel. Which of the following represents Maria’s total charge, in dollars, for staying x nights?",
      options: [
        { id: 0, text: "(99.95 + 0.08x) + 5", isCorrect: false },
        { id: 1, text: "1.08(99.95x) + 5", isCorrect: true },
        { id: 2, text: "1.08(99.95x + 5)", isCorrect: false },
        { id: 3, text: "1.08(99.95 + 5)x", isCorrect: false },
      ],
    },
    {
      text: "Given y = a(x-2)(x+4) and a is a nonzero constant: The graph of the equation in the xy-plane is a parabola with vertex (c,d), Which of the following is equal to d?",
      options: [
        { id: 0, text: "-9a", isCorrect: true },
        { id: 1, text: "-8a", isCorrect: false },
        { id: 2, text: "-5a", isCorrect: false },
        { id: 3, text: "-2a", isCorrect: false },
      ],
    },
    {
      text: "At a lunch stand, each hamburger has 50 more calories than each order of fries. If 2 hamburgers and 3 orders of fries have a total of 1700 calories, how many calories does a hamburger have?",
      options: [
        { id: 0, text: "320", isCorrect: false },
        { id: 1, text: "370", isCorrect: true },
        { id: 2, text: "270", isCorrect: false },
        { id: 3, text: "warren", isCorrect: false },
      ],
    },
    {
      text: "At Luffy's High School, approximately 7 percent of enrolled juniors and 5 percent of enrolled seniors were inducted into the National Pirate Society last year. If there were 562 juniors and 602 seniors enrolled at Luffy's High School last year, which is closest to the total number of juniors and seniors at Luffy's High School last year who were inducted into the National Pirate Society?",
      options: [
        { id: 0, text: "140", isCorrect: false },
        { id: 1, text: "30", isCorrect: false },
        { id: 2, text: "69", isCorrect: true },
        { id: 3, text: "39", isCorrect: false },
      ],
    },
    {
      text: "Nate walks 25 meters in 13.7 seconds. If he walks at this same rate, which of the following is closest to the distance he will walk in 4 minutes?",
      options: [
        { id: 0, text: "150 meters", isCorrect: false },
        { id: 1, text: "450 meters", isCorrect: true },
        { id: 2, text: "700 meters", isCorrect: false },
        { id: 3, text: "1000 meters", isCorrect: false },
      ],
    },
  ];

  // Helper funcs
  const optionClicked = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    if (question + 1 < questions.length) {
      setQuestion(question + 1);
    } else {
      setResults(true);
    }
  }

  // begin review
  const startReview = () => {
    setScore(0);
    setQuestion(0);
    setResults(false);
  };

  return (
    <div className="App">

    <h1 className="timer">00:00:00</h1>
    
      { showResults ? (
        /* results card */
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button onClick={() => startReview()}>Start Review</button>
        </div>
      ) : (
        /* timer */

        /* question card */
        <div className="question-card">
          <h2 className="questionNum">Q{question+1}</h2>
          <h3>{questions[question].text}</h3>
          <ul>
            {questions[question].options.map((option) => {
              return (
                <li onClick={() => optionClicked(option.isCorrect)} key={option.id}>{option.text}</li>
              );
            })}
          </ul>
        </div>

      )}
      
    </div>
  );
}

export default App;
