import arrow from "../../images/Arrow.png"
import disc from "../../images/blue-discord.png"
import thumbs_up from "../../images/thumbs-up.png"
import green_thumbs_up from "../../images/green-thumbs-up.png"
import thumbs_down from "../../images/thumbs-down.png"
import red_thumbs_down from "../../images/red-thumbs-down.png"
import React, { useState, useRef } from "react";

export default function TheEcard({prob, bgNum, setbgNum, currQIndex, setcurrQIndex, chosenAnswers}) {
    const [showCard, setshowCard] = useState(true);
    const [selectedChoice, setselectedChoice] = useState('0');
    const [exit, setexit] = useState('0');
    const [thumbUp, setthumbUp] = useState('0');
    const [thumbDown, setthumbDown] = useState('0');

    function nextQ() {
        
    }
    function clickThumbs() {
        // v:0 black thumbs up to green
        if (thumbUp == '0') {
            setthumbUp('1');
            if (thumbDown == '1') {
                setthumbDown('0');
            }
        }
        else if (thumbUp == '1') {
            setthumbUp('0');
        }
    }
    function clickThumbsDown() {
        if (thumbDown == '0') {
            setthumbDown('1');
            if (thumbUp == '1') {
                setthumbUp('0');
            }
        }
        else if (thumbDown == '1') {
            setthumbDown('0');
        }
    }

    // check here to see which format to display qcard in
    // question + 4 answer choices
    if (showCard) {
        if (prob.type == 'Reading') {
            return (
                <div className='the-qcard' exit={exit} format={prob.type}>
                </div>
            )
        } else if (prob.has_img) { // has sameish format as reading
            return (
                <div className='the-qcard' exit={exit} format='Image'> 
                </div>
            )
        } else { // default format
            return (
                <div className='the-ecard' exit={exit}>
                    <div className="the-e-question">
                        <h2>{prob.text}</h2>
                    </div>
                    <div className="the-left-e-line"><div className="the-left-e-real-line"></div></div>
                    <div className="answer-choice" id="e-choice1">
                        <button className="the-e-button" choice="c1" chosen={+(chosenAnswers[0][1])} bg={""+(prob.options[0].isCorrect)}><p>{prob.options[0].text}</p></button>
                    </div>
                    <div className="answer-choice" id="e-choice2">
                        <button className="the-e-button" choice="c2" chosen={+(chosenAnswers[0][1])} bg={""+(prob.options[1].isCorrect)}><p>{prob.options[1].text}</p></button>
                    </div>
                    <div className="answer-choice" id="e-choice3">
                        <button className="the-e-button" choice="c3" chosen={+(chosenAnswers[0][1])} bg={""+(prob.options[2].isCorrect)}><p>{prob.options[2].text}</p></button>
                    </div>
                    <div className="answer-choice" id="e-choice4">
                        <button className="the-e-button" choice="c4" chosen={+(chosenAnswers[0][1])} bg={""+(prob.options[3].isCorrect)}><p>{prob.options[3].text}</p></button>
                    </div>
                    <div className="the-e-line"><div className="the-e-real-line"></div></div>
                    <div className="the-e-explanation">
                        <h2><b>Explanation</b></h2>
                        <h2>{prob.explanation}</h2> 
                        <img src={thumbs_up} className="thumbs-up" version={thumbUp} onClick={() => {clickThumbs()}}/>
                        <img src={green_thumbs_up} className="green-thumbs-up" version={thumbUp} onClick={() => {clickThumbs()}}/>
                        <img src={thumbs_down} className="thumbs-down" version={thumbDown} onClick={() => {clickThumbsDown()}}/>
                        <img src={red_thumbs_down} className="red-thumbs-down" version={thumbDown} onClick={() => {clickThumbsDown()}}/>
                    </div>
                    <div className="the-right-e-line"><div className="the-left-e-real-line"></div></div>
                    <div className="the-e-check">
                        <input type="checkbox" id="e-understood" name="check"/>
                        <label><h2>I understand this problem</h2></label>
                    </div>
                    <div className="the-e-help">
                        <h4>Don't understand? Skip {"&"} ask for help in the discord!</h4>
                        <img src={disc} />
                        <img src={arrow} id="the-e-arrow" onClick={() => {nextQ()}}/>
                    </div>
                </div>
            )
        }
    }
};
  