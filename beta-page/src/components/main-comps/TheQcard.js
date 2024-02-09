import arrow from "../../images/Arrow.png"
import QButton from "./QButton";
import React, { useState, useRef } from "react";

export default function TheQcard({prob}) {
    const [showCard, setshowCard] = useState(true);

    /* One reason to use useCallback is to prevent a component from re-rendering unless its props have changed. source: w3 */

    // check here to see which format to display qcard in
    // question + 4 answer choices
    if (showCard) {
        return (
            <div className='the-qcard'>
                <div className="the-question">
                    <h2>{prob.text}</h2>
                </div>
                <div className="the-line"><div className="the-real-line"></div></div>
                <div className="answer-choice">
                    <QButton choice={prob.options[0].text} />
                </div>
                <div className="answer-choice">
                    <QButton choice={prob.options[1].text} />
                </div>
                <div className="answer-choice">
                    <QButton choice={prob.options[2].text} />
                </div>
                <div className="answer-choice">
                    <QButton choice={prob.options[3].text} />
                </div>
                
                <div className="the-arrow"><img src={arrow}/></div>
            </div>
        )
    }
};
  