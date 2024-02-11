import arrow from "../../images/Arrow.png"
import React, { useState, useRef } from "react";

export default function TheQcard({prob, bgNum, setbgNum, currQIndex, setcurrQIndex}) {
    const [showCard, setshowCard] = useState(true);
    const [selectedChoice, setselectedChoice] = useState('0');
    const [exit, setexit] = useState('0');

    function nextQ() {
        if (exit == '0' || exit == '2') {
            setexit('1');
            setbgNum(bgNum + 1);
            setTimeout(function(){
                setcurrQIndex(currQIndex + 1);
                setselectedChoice('0');
                setexit('2'); // reset card to bottom of screen
            }, 1500);
        }
    }

    // check here to see which format to display qcard in
    // question + 4 answer choices
    if (showCard) {
        if (prob.type == 'Reading') {
            return (
                <div className='the-qcard' exit={exit} format={prob.type}>
                   <div className="the-passage">
                        <h2>{prob.passage}</h2>
                    </div>
                    <div className="the-line" format={prob.type}><div className="the-real-line" format={prob.type}></div></div>
                    <div className="the-question" format={prob.type}>
                        <h2>{prob.text}</h2>
                    </div>
                    <div className="answer-choice">
                        <button className="the-button" id="choice1" onClick={() => {setselectedChoice('1')}} chosen={selectedChoice}><p>{prob.options[0].text}</p></button>
                    </div>
                    <div className="answer-choice">
                        <button className="the-button" id="choice2" onClick={() => {setselectedChoice('2')}} chosen={selectedChoice}><p>{prob.options[1].text}</p></button>
                    </div>
                    <div className="answer-choice">
                        <button className="the-button" id="choice3" onClick={() => {setselectedChoice('3')}} chosen={selectedChoice}><p>{prob.options[2].text}</p></button>
                    </div>
                    <div className="answer-choice">
                        <button className="the-button" id="choice4" onClick={() => {setselectedChoice('4')}} chosen={selectedChoice}><p>{prob.options[3].text}</p></button>
                    </div>
                    <div className="the-arrow" format={prob.type}><img src={arrow} chosen={selectedChoice} exit={exit} onClick={() => {nextQ()}}/></div>
                </div>
            )
        } else if (prob.has_img) { // has sameish format as reading
            return (
                <div className='the-qcard' exit={exit} format='Reading'> 
                   <div className="the-passage" format='for-img'>
                        <h2>{prob.img_text}</h2>
                    </div>
                    <div className="the-image">
                        <img src={prob.img_link}/>
                    </div>
                    <div className="the-line" format='Reading'><div className="the-real-line" format='Reading'></div></div>
                    <div className="the-question" format='Reading'>
                        <h2>{prob.text}</h2>
                    </div>
                    <div className="answer-choice">
                        <button className="the-button" id="choice1" onClick={() => {setselectedChoice('1')}} chosen={selectedChoice}><p>{prob.options[0].text}</p></button>
                    </div>
                    <div className="answer-choice">
                        <button className="the-button" id="choice2" onClick={() => {setselectedChoice('2')}} chosen={selectedChoice}><p>{prob.options[1].text}</p></button>
                    </div>
                    <div className="answer-choice">
                        <button className="the-button" id="choice3" onClick={() => {setselectedChoice('3')}} chosen={selectedChoice}><p>{prob.options[2].text}</p></button>
                    </div>
                    <div className="answer-choice">
                        <button className="the-button" id="choice4" onClick={() => {setselectedChoice('4')}} chosen={selectedChoice}><p>{prob.options[3].text}</p></button>
                    </div>
                    <div className="the-arrow" format='Reading'><img src={arrow} chosen={selectedChoice} exit={exit} onClick={() => {nextQ()}}/></div>
                </div>
            )
        } else { // default format
            return (
                <div className='the-qcard' exit={exit}>
                    <div className="the-question">
                        <h2>{prob.text}</h2>
                    </div>
                    <div className="the-line"><div className="the-real-line"></div></div>
                    <div className="answer-choice">
                        <button className="the-button" id="choice1" onClick={() => {setselectedChoice('1')}} chosen={selectedChoice}><p>{prob.options[0].text}</p></button>
                    </div>
                    <div className="answer-choice">
                        <button className="the-button" id="choice2" onClick={() => {setselectedChoice('2')}} chosen={selectedChoice}><p>{prob.options[1].text}</p></button>
                    </div>
                    <div className="answer-choice">
                        <button className="the-button" id="choice3" onClick={() => {setselectedChoice('3')}} chosen={selectedChoice}><p>{prob.options[2].text}</p></button>
                    </div>
                    <div className="answer-choice">
                        <button className="the-button" id="choice4" onClick={() => {setselectedChoice('4')}} chosen={selectedChoice}><p>{prob.options[3].text}</p></button>
                    </div>
                    {/* on click triggers move up and the removal make sure click can only happen max onc*/}
                    <div className="the-arrow"><img src={arrow} chosen={selectedChoice} exit={exit} onClick={() => {nextQ()}}/></div>
                </div>
            )
        }
    }
};
  