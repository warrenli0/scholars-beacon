import math from '../../images/act-math.png';
import writing from '../../images/act-writing.png';
import reading from '../../images/act-reading.png';
import science from '../../images/act-science.png';
import { useState } from "react";

export default function EnterAct({showEnterACT, setshowEnterACT, chooseSATorACT}) {

    // used to trigger the exit animation
    const [exit, setExit] = useState('0');

    if (chooseSATorACT == '3') { //skip condition
        if (exit == '0'){ // in case someone tries to click a couple buttons
            setExit('1'); // triggers animation
            setTimeout(function(){
                setshowEnterACT(false);
            }, 2000);
        }
    }

    if (showEnterACT) {
        return (
            <div className='enter-act-container' exit={exit}>
                <div className='act-cen'>
                    <img src={math} id="act-math-pic"/>
                </div>

                <div className='act-cen'>
                    <input type="text" id="act-math-score"></input>
                </div>

                <div className='act-cen'>
                    <img src={writing} id="act-writing-pic"/>
                </div>

                <div className='act-cen'>
                    <input type="text" id="act-writing-score"></input>
                </div>

                <div className='act-cen'>
                    <img src={reading} id="act-reading-pic"/>
                </div>

                <div className='act-cen'>
                    <input type="text" id="act-reading-score"></input>
                </div>

                <div className='act-cen'>
                    <img src={science} id="act-science-pic"/>
                </div>

                <div className='act-cen'>
                    <input type="text" id="act-science-score"></input>
                </div>

                <h2 className='act-con'><span>Continue</span></h2>
            </div>
        )
    }
}

