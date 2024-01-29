import React, { useState } from "react";
import './App.css';
import HomePage from './components/HomePage';
import ChooseSATorACT from "./components/ChooseSATorACT"; 

function App() {

  // Properties
  const [showHome, setShowHome] = useState(true);
  const [satORact, setsatORact] = useState(false);
  const [choiceSAT, setchoiceSAT] = useState(true); // true for SAT, false for ACT
  const [enterScore, setenterScore] = useState(false);
  const [beginPractice, setbeginPractice] = useState(false);

  if (showHome) {
    return (
      <HomePage setShowHome={setShowHome} setsatORact={setsatORact}/> 
    );
  } else if (satORact) {
    return (
      <ChooseSATorACT setsatORact={setsatORact} setchoiceSAT={setchoiceSAT} setenterScore={setenterScore} setbeginPractice={setbeginPractice}/>
    )
  }

  
}

export default App;
