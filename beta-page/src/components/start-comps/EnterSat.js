import math from '../../images/sat-math.png';
import english from '../../images/sat-english.png';
import { useState } from "react";

export default function EnterSat({showEnterSAT}) {

    // used to trigger the exit animation
    const [exit, setExit] = useState('0');

    if (showEnterSAT) {
        return (
            <div className='enter-sat-container'>
                <div className='sat-cen'>
                    <img src={math} id="math-pic"/>
                </div>

                <div className='sat-cen'>
                    <input type="text" id="math-score"></input>
                </div>

                <div className='sat-cen'>
                    <img src={english} id="english-pic"/>
                </div>

                <div className='sat-cen'>
                    <input type="text" id="english-score"></input>
                </div>

                <h2 className='sat-con'><span>Continue</span></h2>
            </div>
        )
    }
}

