import React, { useState } from "react";
import './App.css';

function App() {

  // Properties
  const [showResults, setResults] = useState(false);
  const [score, setScore] = useState(0);
  const [question, setQuestion] = useState(0);
  const [answers, setAnswers] = useState([]); // qNum, T/F -> set by user
  const [showReview, setReview] = useState(false);
  const [finishReview, setFinishReview] = useState(false);
  const [endofSession, setFinishSession] = useState(false);
  const [satORact, setsatORact] = useState(true);
  const [choiceSAT, setchoiceSAT] = useState(true);
  const [enterScore, setenterScore] = useState(false);
  const [beginPractice, setbeginPractice] = useState(false);
  const [enterEmail, setenteremail] = useState(false);
  const [showHome, setShowHome] = useState(true);
  const [mathWeight, setMathWeight] = useState(50);
  const [englishWeight, setenglishWeight] = useState(50);

  
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
      explanation: "The room rate is $99.95 for every night. Since you stay for x nights, the price becomes 99.95x. However, there is a tax of 8% on the room rate, so the price is 0.08(99.95x). Lastly, with the addition of a one time untaxed fee of $5, the answer is the second option: 1.08(99.95x) + 5.",
    },
    {
      text: "Greek yogurt business have found many methods of controlling and eliminating most environmental threats. Given these solutions as well as the many health benefits of the food, the advantages of Greek yogurt 'outdo' the potential drawbacks of its production.",
      options: [
        { id: 0, text: "NO CHANGE", isCorrect: false },
        { id: 1, text: "defeat", isCorrect: false },
        { id: 2, text: "outperform", isCorrect: false },
        { id: 3, text: "outweigh", isCorrect: true },
      ],
      type: "Grammar",
      explanation: "“Outweigh” is the only choice between “advantages” and “drawbacks.” Choices 1, 2, and 3 are incorrect because each implies a competitive relationship that is inappropriate in this context.",
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
      explanation: "The vertex is in the middle of the x-intercepts. The x-intercepts are where y = 0, so when x - 2 = 0 and x + 4 = 0. The x-intercepts are (2,0) and (-4,0). The x-value for the vertex is in the middle of 2 and -4, so it is -1. Substituting -1 for x, we get y = -9a, so the vertex is (-1, -9a). The answer is -9a.",
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
      explanation: "Since 7 percent of the 562 juniors is 0.07(562) and 5 percent of the 602 seniors is 0.05(602), the expression 0.07(562) + 0.05(602) can be evaluated to determine the total number of juniors and seniors inducted into the National Pirate Society. Of the given choices, 69 is closest to the value of the expression.",
    },
    {
      text: "Yogurt manufacturers, food 'scientists; and' government officials are also working together to develop additional solutions for reusing whey.",
      options: [
        { id: 0, text: "NO CHANGE", isCorrect: false },
        { id: 1, text: "scientists: and", isCorrect: false },
        { id: 2, text: "scientists, and", isCorrect: true },
        { id: 3, text: "scientists, and,", isCorrect: false },
      ],
      type: "Grammar",
      explanation: "Choice 3 is the best answer because it utilizes proper punctuation for items listed in a series. In this case those items are nouns: “Yogurt manufacturers, food scientists, and government officials. Choices 1 and 2 are incorrect because both fail to recognize that the items are a part of a series. Since a comma is used after “manufacturers,” a semicolon or colon should not be used after “scientists.” Choice 4 is incorrect because the comma after “and” is unnecessary and deviates from grammatical conventions for presenting items in a series.",
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
      explanation: "The equation 2h + 3f = 1700 represents the fact that 2 hamburgers and 3 orders of fries contain a total of 1700 calories, and the equation h = f + 50 represents the fact that one hamburger contains 50 more calories than an order of fries. Substituting f + 50 for h in 2h + 3f = 1700 gives 2(f + 50) + 3f = 1700, meaning f = 320. Therefore, h = 370.",
    },
    {
      text: "Which choice most effectively combines the two sentences at the quoted portion? Typically, the ice sheet begins to show evidence of thawing in late ‘summer. This’ follows several weeks of higher temperatures.",
      options: [
        { id: 0, text: "summer, following", isCorrect: true },
        { id: 1, text: "summer, and this thawing follows", isCorrect: false },
        { id: 2, text: "summer, and such thawing follows", isCorrect: false },
        { id: 3, text: "summer and this evidence follows", isCorrect: false },
      ],
      type: "Grammar",
      explanation: "Choice 1 is the best answer because it concisely combines the two sentences while maintaining the original meaning. Choices 2, 3, and 4 are incorrect because each is unnecessarily wordy, thus undermining one purpose of combining two sentences: to make the phrasing more concise.",
    },
    {
      text: "Because consumers reap the nutritional benefits of Greek yogurt and support those who make and sell ‘it, therefore farmers’ and businesses should continue finding safe and effective methods of producing the food.",
      options: [
        { id: 0, text: "NO CHANGE", isCorrect: false },
        { id: 1, text: "it, farmers", isCorrect: true },
        { id: 2, text: "it, so farmers", isCorrect: false },
        { id: 3, text: "it: farmers", isCorrect: false },
      ],
      type: "Grammar",
      explanation: "Choice 2 is the best answer because it provides a syntactically coherent and grammatically correct sentence. Choices 1 and 3 are incorrect because the adverbial conjunctions “therefore” and “so,” respectively, are unnecessary following “Because.” Choice 4 is incorrect because it results in a grammatically incomplete sentence (the part of the sentence before the colon must be an independent clause).",
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
      explanation: "25 meters in 13.7 seconds is a rate of about 1.82 m/s. He walks for 4 minutes which is 240 seconds. The total distance is then (1.82 m/s) * (240 s) = 436.8 m, which is closest to 450 meters.",
    },
    {
      text: "Having become frustrated trying to solve difficult problems, ‘no colleagues were nearby to share ideas’.",
      options: [
        { id: 0, text: "NO CHANGE", isCorrect: false },
        { id: 1, text: "colleagues were important for sharing ideas.", isCorrect: false },
        { id: 2, text: "ideas couldn’t be shared with colleagues.", isCorrect: false },
        { id: 3, text: "I missed having colleagues nearby to consult.", isCorrect: true },
      ],
      type: "Grammar",
      explanation: "Choice 4 is the best answer because it is the only choice that provides a grammatically standard and coherent sentence. The participial phrase “Having become frustrated. . .” functions as an adjective modifying “I,” the writer.",
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

    // taking every 5th question
    if ((question + 1) % 5 === 0) {
      setResults(true);
    } else {
      setQuestion(question + 1);
    }
  }

  const nextReviewQ = () => {
    if ((question + 1) % 5 === 0) {
      setFinishReview(true);
    } else {
      setQuestion(question + 1);
    }
  }

  // begin review
  const startReview = () => {
    //setAnswers([]);
    //setScore(0);
    //console.log(answers);
    setFinishReview(false);
    setQuestion(question-4);
    setResults(false);
    setReview(true);
  };

  // next problems
  const nextProblems = () => {
    setScore(0);
    setAnswers([]);
    setFinishReview(false);
    if ((question + 1) >= questions.length) {
      setQuestion(0);
    } else {
      setQuestion(question+1);
    }
    setResults(false);
    setReview(false);
  }

  // choose SATorACT
  const chooseSATorACT = (param) => {
    setsatORact(false);
    setchoiceSAT(param);
    setenterScore(true);
    //document.body.style.backgroundColor = "#001E2B";
  }

  const backToChoose = () => {
    setsatORact(true);
    setenterScore(false);
  }

  const beginPracticing = () => {
    setsatORact(false);
    setenterScore(false);
    setbeginPractice(true);
  }

  const startTheQuestions = () => {
    setbeginPractice(false);
    document.body.style.backgroundColor = "#001E2B";
  }

  const finishTheSession = () => {
    setFinishSession(true);
    setFinishReview(false);
    document.body.style.backgroundColor = "black";
  }

  const goToEmail = () => {
    setFinishSession(false);
    setenteremail(true);
    document.body.style.backgroundColor = "#002839";
  }

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
  // explanation card component
  function ECard() {
    return (
      <div style={ecstyle}>
        <h2>Explanation</h2>
        <h3 style={{fontSize: "1.1em", fontWeight: "400"}}>{questions[question].explanation}</h3>
        <div className="checkandnext">
          <form >
            <input type="checkbox" name="cb" />
            <label for="cb" style={{fontWeight: "600", fontSize:"18.72px", verticalAlign: "middle"}}>I understand this problem</label>
          </form>
          <p style={{color:"#858585"}}>Don't fully understand? Skip for now or ask on Discord!</p>
        </div>
        <span onClick={() => nextReviewQ()} style={{position: "absolute", fontSize:"50px", float:"right", bottom: "20px", right:"20px", cursor: "pointer"}}>&#8658;</span> 
        
      </div>
    )
  }

  // results card component
  function RCard() {
    return (
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
    )
  }

   // old finished review card component
  function oldFinishedReviewCard() {
    return (
      <div className="finish-review">
        <h1>You completed the review!</h1>
        <button onClick={() => startReview()}>Review Again</button>
        <button onClick={() => nextProblems()}>Try 5 new problems</button>
        <button onClick={() => finishTheSession()}>Finish!</button>
      </div>
    )
  }

  const pie = {
    background: "conic-gradient(#F73508 0% " + mathWeight + "%, #08CAF7 " + mathWeight + "%)"
  };

  const oc_style = {
    display: "flex",
  };

  const chart_style = {
    width: "100px",
    height: "100px",
    border: "10px solid transparent",
    borderRadius: "50%",
    background: "linear-gradient(black, black) padding-box, conic-gradient(#13EC88 " + ((score/5)*100) + "%, #31343F "  + ((score/5)*100) + "%) border-box",
    position: "static",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontSize: "2em",
  }

  // https://stackoverflow.com/questions/52205399/percent-pie-chart-with-css-only
  function FinishedReviewCard() {
    return (
      <div className="finish-review">
        <h1>Your Analysis</h1>
        <h3>The algorithm has been personalized to help you practice more efficiently and effectively.</h3>
        <div classname="over-container" style={oc_style}>
          <div className="pie-chart-container">
            <h2>Your algorithm</h2>
            <div id="my-pie-chart" style={pie}></div>
            <div id="legend">
              <div class="entry">
                <div id="color-math" class="entry-color"></div>
                <div class="entry-text">Math {mathWeight}%</div>
              </div>
              <div class="entry">
                <div id="color-english" class="entry-color"></div>
                <div class="entry-text">English {englishWeight}%</div>
              </div>
            </div>
            <p>This determines the types of questions you will get in the future, based on your understanding, accuracy, and scores.</p>
          </div>
          <div className="accuracy-container">
            <h2>Accuracy</h2>
            <div class="chart" style={chart_style}>
              <p>{(score/5)*100}%</p>
            </div>
            <p>1/2 Correct Math | 2/2 Understood</p>
            <div class="math-score"></div>
            <p>2/3 Correct English | 2/3 Understood</p>
            <div class="english-score"></div>
          </div>
          <div className="right-text-container">
            <p>We also keep track of your performance in subsections from relative clauses to linear inequalities, and the questions you understood vs. are still confused on, to make you test ready.</p>
            
            <h3>The goal of our algorithm-chosen questions is to</h3>
            <h3>1. Have you work on questions in weak areas</h3>
            <h3>2. Repeat problems until you fully understand them</h3>
            
            <p>This is the key to growing your SAT/ACT score — learn from your mistakes, improve on your weak areas, and strength your fundamentals!</p>
            <button onClick={() => nextProblems()}>Try 5 new problems</button>
            <button onClick={() => finishTheSession()}>Finish!</button>
          </div>
        </div>
      </div>
    )
  }

  //end of session card style
  const eos_style = {
    color: "white",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  function EndofSessionCard() {
    return (
      <div style={eos_style}>
        <h1>You finished the review!</h1>
        <h2 style={{color: "#FFB800", cursor: "pointer"}} onClick={() => goToEmail()}>Continue</h2>
      </div>
    )
  }

  //https://www.w3schools.com/css/tryit.asp?filename=trycss_form_responsive
  function UserEmail() {
    return (
      <div className="user-email">
        <h1>Congrats on being student <span style={{color: "#FFB800"}}>#64</span> to fully finish!</h1>
        <p>All of us on the SB team thank you for taking the time to go through this demo.</p>
        <p>If you would like to receive updates on SB or have any feedback, please fill out the form below.</p>

        <div className="form-for-email">
          <div>
            <label for="email">Email: </label>
            <input type="text" id="email"></input>
          </div>
          <div>
            <label for="grade">Grade: </label>
            <select id="grade">
              <option value="below">Below 9th</option>
              <option value="9th">9th</option>
              <option value="10th">10th</option>
              <option value="11th" selected="selected">11th</option>
              <option value="12th">12th</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <textarea id="comments" placeholder="Comments... (optional)" style={{height: "200px", width: "80%", fontFamily: "Poppins", borderRadius: "5px", padding: "5px"}}></textarea>
          </div>
          <button>Submit</button>
        </div>
          
      </div>
    )
  }

  function SATorACT() {
    document.body.style.backgroundColor = "black";
    return (
      <div className="satoract">
        <h2>What are you preparing for?</h2>
        <button onClick={() => chooseSATorACT(true)}>SAT</button>
        <button onClick={() => chooseSATorACT(false)}>ACT</button>
        <p onClick={() => beginPracticing()}>I am unsure which to take yet</p>
      </div>
    )
  }

  function HomePage() {
    document.body.style.backgroundColor = "#001E2B";
    const handleClick = () => {
        setShowHome(false);
        setsatORact(true);
    };

    return (
        <div className="home-page-container">
            <div className="sb-title">
                <h1>Scholars Beacon</h1>
            </div>
            <div className="your-sat">
                <h2>your SAT & ACT prep platform</h2>
            </div>
            <div className="get-started">
                <h3>We are developing the only tool you’ll need to crack the SAT & ACT, click below to try out our beta and reach the end to be the first to get access.</h3>
                <h2 onClick={handleClick}>Get started!</h2>
            </div>
            
        </div>
    )
}

  function EnterTestScore() {

    if (choiceSAT) {

      return (
        <div>
          <div className="test-score">
          <h1>Your Latest SAT Score</h1>
          <input type="text"></input>
          <table>
            <tr>
              <th>Reading/Writing:</th>
              <th>Math:</th>
            </tr>
            <tr>
              <td><input type="text"></input></td>
              <td><input type="text"></input></td>
            </tr>
          </table>
          <h2 onClick={() => beginPracticing()}>Start Practice</h2>
          <p>No need to input score if you don't want to or haven't take one yet!</p>

          </div>
          <div>
            <h3 onClick={() => backToChoose()} style={{cursor: "pointer", color: "white", position: "absolute", float:"left", bottom: "30px", left:"30px"}}>Back</h3>
          </div>
          
        </div>
        
      )

    } else {

      return (
        <div>
            <div className="test-score">
            <h1>Your Latest ACT Score</h1>
            <input type="text"></input>
            <table>
              <tr>
                <th>English:</th>
                <th>Reading:</th>
                <th>Math:</th>
                <th>Science:</th>
              </tr>
              <tr>
                <td><input type="text"></input></td>
                <td><input type="text"></input></td>
                <td><input type="text"></input></td>
                <td><input type="text"></input></td>
              </tr>
            </table>
            <h2 onClick={() => beginPracticing()}>Start Practice</h2>
            <p>No need to input score if you don't want to or haven't take one yet!</p>
          </div>
          <div>
            <h3 onClick={() => backToChoose()} style={{cursor: "pointer", color: "white", position: "absolute", float:"left", bottom: "30px", left:"30px"}}>Back</h3>
          </div>
        </div>
        
      )

    }

    
  }

  function BeginPracticeCard() {
    return (
      <div className="begin-practice">
        <h1>5 questions</h1>
        <h3>Give it your best shot!</h3>
        <button onClick={() => startTheQuestions()}>Start :D</button>
      </div>
    )
  }

  // qustion card component
  function QCard() {

    if (showHome) {
      return (
        <HomePage />
      )
    }

    else if (satORact) {
      return (
        <SATorACT />
      )
    }

    else if (enterScore) {
      return (
        <EnterTestScore />
      )
    }

    else if (beginPractice) {
      return (
        <BeginPracticeCard />
      )
    }

    else if (showResults) {
      return (
        <RCard />
      )
    }

    // we out
    else if (endofSession) {
      return (
        <EndofSessionCard />
      )
    }

    // review done
    else if (finishReview) {
      return (
        <FinishedReviewCard />
      )
    }

    else if (enterEmail) {
      return (
        <UserEmail />
      )
    }

    /* question card */
    else if (showReview) {

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
                  if (answers[question%5].choice === option.id) {
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
    
    
      { showHome ? (
        /* results card */
        <HomePage />
      ) : (
        
        <div>
          <h1 className="timer">SB</h1>
          <QCard />
        </div>
      )}
      
    </div>
  );
}

export default App;
