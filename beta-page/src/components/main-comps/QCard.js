import show_icon from '../../images/Show.png'
import hide_icon from '../../images/Hide.png'
import TheNotepad from './TheNotepad';
import TheQcard from './TheQcard';

import React, { useState, useRef } from "react";

function Timer({show}) {
  // measures total seconds passed
  const [seconds, setSeconds] = useState(-4);
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

export default function QCard({questions, showQCards, notesArray, setnotesArray}) {
    const [currQIndex, setcurrQIndex] = useState(0);
    const [showIcon, setshowIcon] = useState('1');
    const [bgNum, setbgNum] = useState(0);

    if (showQCards) {
        return (
            <div className='question-page'> {/* Fixed container to position off of */}
                
                <div className='surf-wave-bottom' move={+bgNum}></div> {/* First bg that moves up */}
                <div className='second-bg' move={+bgNum}></div>
                <div className='third-bg' move={+bgNum}></div>
                <div className='fourth-bg' move={+bgNum}></div>
                <div className='fifth-bg' move={+bgNum}></div>

                <div className='question-grid'> {/* Used to position misc + qcards */}
                    <div className='qcard-header'> 
                        <h1>Q.{currQIndex+1}</h1>
                        <h3><i>{questions[currQIndex].type}</i></h3>
                    </div>
                    <div className='qcard-question-type'>
                      <h3><i>{questions[currQIndex].type}</i></h3>
                    </div>
                    <div className='qcard-misc'> 
                        <img src={show_icon} id='show_icon' show={showIcon} onClick={() => {setshowIcon('0')}}/>
                        <img src={hide_icon} id='hide_icon' show={showIcon} onClick={() => {setshowIcon('1')}}/>
                        <Timer show={showIcon}/>
                    </div>
                    <div className='qcard-version-note'>
                      <h3>experience the full version on larger screen</h3>
                    </div>
                    <div className='qcard-notepad'> 
                        <TheNotepad currQIndex={currQIndex} notesArray={notesArray} setnotesArray={setnotesArray} calc={''+(questions[currQIndex].type == 'Math (calc)')}/>
                    </div>
                    <div className='qcard-container'> {/* qcard */}
                        <TheQcard prob={questions[currQIndex]} bgNum={bgNum} setbgNum={setbgNum} currQIndex={currQIndex} setcurrQIndex={setcurrQIndex}/>
                    </div>
                </div>
            </div>
        )
    }
};
