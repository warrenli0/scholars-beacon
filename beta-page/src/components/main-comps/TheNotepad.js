import note from "../../images/note-icon.png"
import draw from "../../images/draw-icon.png"
import ping from "../../images/ping-icon.png"
import React, { useState } from "react";

export default function TheNotepad({}) {
    const [selectedChoice, setselectedChoice] = useState('1');

    return (
        <div className="the-notepad">
            <div className="note-cont icon-note" onClick={() => {setselectedChoice('1')}} chosen={selectedChoice}><img src={note}/></div>
            <div className="note-cont draw-note" onClick={() => {setselectedChoice('2')}} chosen={selectedChoice}><img src={draw}/></div>
            <div className="note-cont ping-note" onClick={() => {setselectedChoice('3')}} chosen={selectedChoice}><img src={ping}/></div>
            <div className="the-notepad-line"><div className="the-real-line"></div></div>
        </div>
    )
}