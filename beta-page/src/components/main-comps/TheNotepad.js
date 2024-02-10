import note from "../../images/note-icon.png"
import draw from "../../images/draw-icon.png"
import ping from "../../images/ping-icon.png"
import React, { useState } from "react";

function Content({version}) {
    if (version == '1'){
        return (
            <textarea className="note-input" placeholder="Notes..."></textarea>
        )
    } else if (version == '2') {
        return (
            <h1>drawing time</h1>
        )
    } else if (version == '3') {
        return (
            <h1>ping time</h1>
        )
    }
}

export default function TheNotepad({}) {
    const [selectedChoice, setselectedChoice] = useState('1');

    return (
        <div className="the-notepad">
            <div className="note-cont icon-note" onClick={() => {setselectedChoice('1')}} chosen={selectedChoice}><img src={note}/></div>
            <div className="note-cont draw-note" onClick={() => {setselectedChoice('2')}} chosen={selectedChoice}><img src={draw}/></div>
            <div className="note-cont ping-note" onClick={() => {setselectedChoice('3')}} chosen={selectedChoice}><img src={ping}/></div>
            <div className="the-notepad-line"><div className="the-real-line"></div></div>
            <div className="notepad-content">
                <Content version={selectedChoice}/>
            </div>
        </div>
    )
}