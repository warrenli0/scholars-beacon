import show_icon from '../../images/Show.png'
import hide_icon from '../../images/Hide.png'
import TheNotepad from './TheNotepad';
import TheQcard from './TheQcard';

import React, { useState, useEffect } from "react";

function Timer({show, seconds, setSeconds}) {
    // measures total seconds passed
    var showseconds = '';
    var showminutes = '00';
  
    setTimeout(function(){
      setSeconds(seconds + 1);
    }, 1000);
  
    if (seconds % 60 < 10) {
      showseconds = '0' + seconds % 60;
    } else if (seconds % 60 == 0) {
      showseconds = '00';
    } else {
      showseconds = '' + seconds % 60;
    }
  
    showminutes = Math.floor(seconds / 60);
    if (showminutes < 10) {
      showminutes = '0' + showminutes;
    }
  
    return (
      <h1 show={show}>{showminutes}:{showseconds}</h1>
    )
  };

export default function QGrid({questions, notesArray, setnotesArray, bgNum, setbgNum, chosenAnswers, setchosenAnswers, 
  drawingArray, setdrawingArray, setActData, actData, setActWeightage, actWeightage, currProblemSet, choseSAT, satWeightage,
  setsatWeightage, satData, setsatData}) {
    const [showQgrid, setshowQgrid] = useState(true);
    const [currQIndex, setcurrQIndex] = useState(0);
    const [showIcon, setshowIcon] = useState('1');
    const [seconds, setSeconds] = useState(-4);

    if (bgNum == 5) { // last question done
        setTimeout(function(){
            setshowQgrid(false); // remove qcard after everything goes away
        }, 1500);
    }

    useEffect(() => {
      // 5 new problems has been selected, reset vars
      if (currProblemSet > 1) {
        //console.log("done1");
        setcurrQIndex(0);
        setSeconds(-4);
        setshowQgrid(true);
      }
    }, [currProblemSet]);

    if (showQgrid) {
        return (
            <div className='question-grid' move={+bgNum}> {/* Used to position misc + qcards */}
                    <div className='qcard-header' move={+bgNum}> 
                        <h1>Q.{((currProblemSet - 1) * 5) + currQIndex+1}</h1>
                        <h3><i>{questions[currQIndex].type}</i></h3>
                    </div>
                    <div className='qcard-question-type' move={+bgNum}>
                      <h3><i>{questions[currQIndex].type}</i></h3>
                    </div>
                    <div className='qcard-misc' move={+bgNum}> 
                        <img src={show_icon} id='show_icon' show={showIcon} onClick={() => {setshowIcon('0')}}/>
                        <img src={hide_icon} id='hide_icon' show={showIcon} onClick={() => {setshowIcon('1')}}/>
                        <Timer show={showIcon} seconds={seconds} setSeconds={setSeconds}/>
                    </div>
                    <div className='qcard-version-note' move={+bgNum}>
                      <h3>experience the full version on a larger screen</h3>
                    </div>
                    <div className='qcard-notepad' move={+bgNum}> 
                        <TheNotepad currQIndex={currQIndex} notesArray={notesArray} setnotesArray={setnotesArray} calc={''+(questions[currQIndex].type == 'Math (calc)')} bgNum={bgNum} drawingArray={drawingArray} setdrawingArray={setdrawingArray}/>
                    </div>
                    <div className='qcard-container'> {/* qcard */}
                        <TheQcard prob={questions[currQIndex]} bgNum={bgNum} setbgNum={setbgNum} currQIndex={currQIndex} 
                        setcurrQIndex={setcurrQIndex} chosenAnswers={chosenAnswers} setchosenAnswers={setchosenAnswers} 
                        setActData={setActData} actData={actData} setActWeightage={setActWeightage} actWeightage={actWeightage}
                        seconds={seconds} currProblemSet={currProblemSet} choseSAT={choseSAT} satWeightage={satWeightage} setsatWeightage={setsatWeightage}
                        satData={satData} setsatData={setsatData}/>
                    </div>
            </div>
        )
    }
}