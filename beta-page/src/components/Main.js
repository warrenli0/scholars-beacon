import './Main.css'
import peng from '../images/ping-bubble.png';
import FirstWave from './main-comps/FirstWave';
import React, { useState } from "react";

export default function Main({showMain}) {
    const [showfirstwave, setshowfirstwave] = useState(true);

    if (showMain == '1') {
        return (
            <div>
                <FirstWave showfirstwave={showfirstwave} setshowfirstwave={setshowfirstwave} />
            </div>
        )
    }

};
  