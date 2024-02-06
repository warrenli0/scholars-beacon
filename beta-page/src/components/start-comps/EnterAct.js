import math from '../../images/act-math.png';
import writing from '../../images/act-writing.png';
import reading from '../../images/act-reading.png';
import science from '../../images/act-science.png';
import { useState } from "react";

export default function EnterAct({showEnterACT}) {

    // used to trigger the exit animation
    const [exit, setExit] = useState('0');

    if (showEnterACT) {
        return (
            <div className='enter-act-container'>
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

