import React, { useState } from "react";
import './App.css';

function App() {

  // Properties
  const [showResults, setResults] = useState(false);
  const [score, setScore] = useState(0);
  const [question, setQuestion] = useState(0);
  const [answers, setAnswers] = useState([]); // qNum, T/F -> set by user
  const [showReview, setReview] = useState(false);

  const questions = [
    {
      text: "Maria is staying at a hotel that charges $99.95 per night plus tax for a room. A tax of 8% is applied to the room rate, and an additional onetime untaxed fee of $5.00 is charged by the hotel. Which of the following represents Maria’s total charge, in dollars, for staying x nights?",
      options: [
        { id: 0, text: "(99.95 + 0.08x) + 5", isCorrect: false },
        { id: 1, text: "1.08(99.95x) + 5", isCorrect: true },
        { id: 2, text: "1.08(99.95x + 5)", isCorrect: false },
        { id: 3, text: "1.08(99.95 + 5)x", isCorrect: false },
      ],
      type: "Math (no calc)",
      explanation: "The room rate is $99.95 for every night. Since you stay for x nights, the price becomes 99.95x. However, there is a tax of 8% on the room rate, so the pice is 0.08(99.95x). Lastly, with the addition of a one time untaxed fee, the answer is the second option — 1.08(99.95x) + 5.",
    },
    {
      text: "Given y = a(x-2)(x+4) and a is a nonzero constant: The graph of the equation in the xy-plane is a parabola with vertex (c,d), Which of the following is equal to d?",
      options: [
        { id: 0, text: "-9a", isCorrect: true },
        { id: 1, text: "-8a", isCorrect: false },
        { id: 2, text: "-5a", isCorrect: false },
        { id: 3, text: "-2a", isCorrect: false },
      ],
      type: "Math (no calc)",
      explanation: "TBD 1",
    },
    {
      text: "At a lunch stand, each hamburger has 50 more calories than each order of fries. If 2 hamburgers and 3 orders of fries have a total of 1700 calories, how many calories does a hamburger have?",
      options: [
        { id: 0, text: "320", isCorrect: false },
        { id: 1, text: "370", isCorrect: true },
        { id: 2, text: "270", isCorrect: false },
        { id: 3, text: "warren", isCorrect: false },
      ],
      type: "Math (no calc)",
      explanation: "TBD 2",
    },
    {
      text: "At Luffy's High School, approximately 7 percent of enrolled juniors and 5 percent of enrolled seniors were inducted into the National Pirate Society last year. If there were 562 juniors and 602 seniors enrolled at Luffy's High School last year, which is closest to the total number of juniors and seniors at Luffy's High School last year who were inducted into the National Pirate Society?",
      options: [
        { id: 0, text: "140", isCorrect: false },
        { id: 1, text: "30", isCorrect: false },
        { id: 2, text: "69", isCorrect: true },
        { id: 3, text: "39", isCorrect: false },
      ],
      type: "Math (calc)",
      explanation: "TBD 3",
    },
    {
      text: "Neal walks 25 meters in 13.7 seconds. If he walks at this same rate, which of the following is closest to the distance he will walk in 4 minutes?",
      options: [
        { id: 0, text: "150 meters", isCorrect: false },
        { id: 1, text: "450 meters", isCorrect: true },
        { id: 2, text: "700 meters", isCorrect: false },
        { id: 3, text: "1000 meters", isCorrect: false },
      ],
      type: "Math (calc)",
      explanation: "TBD 4",
    },
  ];

  // Helper funcs
  const optionClicked = (isCorrect, id) => {
    // .push() creates copy, use ... to make new array with all items and new id
    console.log(isCorrect);
    setAnswers([
      ...answers,
      {id: question, response: isCorrect, choice: id}
    ]);
    //console.log(answers);

    if (isCorrect) {
      setScore(score + 1);
    }

    if (question + 1 < questions.length) {
      setQuestion(question + 1);
    } else {
      setResults(true);
    }
  }

  const nextReviewQ = () => {
    setQuestion(question + 1);
  }

  // begin review
  const startReview = () => {
    //setAnswers([]);
    //setScore(0);
    console.log(answers);
    setQuestion(0);
    setResults(false);
    setReview(true);
  };

  // not sure why CSS not being inherited so having to do like this for some classes to save time
  const ecstyle = {
    color: "black",
    backgroundColor: "white",
    width: "40%",
    padding: "16px",

    position: "relative",

    borderRadius: "22px",
    boxShadow: "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px",
    
  };
  
  
  const rcstyle = {
    justifyContent: "center",
    display: "flex",
  };

  //action={understand(question)} in form
  function ECard() {
    return (
      <div style={ecstyle}>
        <h2>Explanation</h2>
        <h3 style={{fontWeight: "400"}}>{questions[question].explanation}</h3>
        <div className="checkandnext">
          <form >
            <input type="checkbox" name="cb" />
            <label for="cb" style={{fontWeight: "600", fontSize:"18.72px", verticalAlign: "middle"}}>I understand this problem</label>
          </form>
          <p style={{color:"#858585"}}>Don't fully understand? Skip for now!</p>
        </div>
        <span onClick={() => nextReviewQ()} style={{position: "absolute", fontSize:"50px", float:"right", bottom: "20px", right:"20px", cursor: "pointer"}}>&#8658;</span> 
        
      </div>
    )
  }

  // qustion card component
  function QCard() {
    /* question card */
    if (showReview) {

      return (
        <div div style={rcstyle}>
          <div className="review-question-card">
            <h2 className="review-questionNum">Review Q{question+1} — {questions[question].type}</h2>
            <h3>{questions[question].text}</h3>
            <ul>
              {questions[question].options.map((option) => {
                if (option.isCorrect) {
                  return (
                    <li style={{backgroundColor: "#33FF00"}} key={option.id}>{option.text}</li>
                  );
                } else {
                  if (answers[question].choice === option.id) {
                    return (
                      <li style={{backgroundColor: "#FF0001"}} key={option.id}>{option.text}</li>
                    );
                  }
                  return (
                    <li key={option.id}>{option.text}</li>
                  );
                }
              })}
            </ul>
          </div>
        <ECard />
        </div>
      )

    } else {

      return (
        <div className="question-card">
          <h2 className="questionNum">Q{question+1} — {questions[question].type}</h2>
          <h3>{questions[question].text}</h3>
          <ul>
            {questions[question].options.map((option) => {
              return (
                <li onClick={() => optionClicked(option.isCorrect, option.id)} key={option.id}>{option.text}</li>
              );
            })}
          </ul>
      </div>)

    }
    
  }

  return (
    <div className="App">
    

    <h1 className="timer">SB</h1>

    
      { showResults ? (
        /* results card */
        <div className="final-results">
        <h1>Results</h1>
        <h2>
          {score} out of 5 correct
        </h2>
        <ul>
          {answers.map((resp) => {
            if (resp.response) {
              return (
                <li style={{color: "#33FF00"}} key={resp.id}>Question {resp.id+1} <span style={{color: "white"}}>{questions[resp.id].type}</span></li>
              );
            } else {
              return (
                <li style={{color: "#FF0001"}} key={resp.id}>Question {resp.id+1} <span style={{color: "white"}}>{questions[resp.id].type}</span></li>
              );
            }
          })}
        </ul>
        <button onClick={() => startReview()}>Start Review</button>
      </div>
      ) : (

        <QCard />

      )}
      
    </div>
  );
}

export default App;
