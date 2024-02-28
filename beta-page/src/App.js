import React, { useState } from "react";
import './App.css';
import LandingPage from "./components/LandingPage";
import WaveTransition from "./components/WaveTransition";
import Start from "./components/Start";
import Main from "./components/Main";

function App() {
  // Properties
  const [showLP, setshowLandingPage] = useState(true);
  const [showTopWave, setShowTopWave] = useState(0);
  const [wavesFinished, setWavesFinished] = useState(false);
  const [showStart, setshowwholeStart] = useState(true); // true
  const [showMain, setshowMain] = useState('0'); // 1

  const [actScores, setActScores] = useState(["","","",""]);
  const [actWeightage, setActWeightage] = useState([25, 25, 25, 25]);
  const [satScores, setSatScores] = useState(["","","",""]);

  const [currProblemSet, setcurrProblemSet] = useState(1);
  const [actData, setActData] = useState({Math: {Set1:[0, 0, 0, 0], Set2:[0, 0, 0, 0], Set3:[0, 0, 0, 0], Set4:[0, 0, 0, 0], Set5:[0, 0, 0, 0]}, 
                                          English: {Set1:[0, 0, 0, 0], Set2:[0, 0, 0, 0], Set3:[0, 0, 0, 0], Set4:[0, 0, 0, 0], Set5:[0, 0, 0, 0]}, 
                                          Reading: {Set1:[0, 0, 0, 0], Set2:[0, 0, 0, 0], Set3:[0, 0, 0, 0], Set4:[0, 0, 0, 0], Set5:[0, 0, 0, 0]}, 
                                          Science: {Set1:[0, 0, 0, 0], Set2:[0, 0, 0, 0], Set3:[0, 0, 0, 0], Set4:[0, 0, 0, 0], Set5:[0, 0, 0, 0]}, }); // 5 [] for 5 problem set cap

  return (
    <div>
      <LandingPage setShowTopWave={setShowTopWave} showLP={showLP} setshowLandingPage={setshowLandingPage} setWavesFinished={setWavesFinished}/>
      <WaveTransition showTopWave={showTopWave} wavesFinished={wavesFinished} setWavesFinished={setWavesFinished}/>
      <Start showLP={showLP} setshowMain={setshowMain} showMain={showMain} showStart={showStart} setshowwholeStart={setshowwholeStart} 
      setActScores={setActScores} setSatScores={setSatScores} setActWeightage={setActWeightage}/>
      <Main showMain={showMain} actScores={actScores} setActData={setActData} actData={actData} setActWeightage={setActWeightage} actWeightage={actWeightage}/>
    </div>
  )
}

export default App;
