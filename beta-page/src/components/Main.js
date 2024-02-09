import './Main.css'
import FirstWave from './main-comps/FirstWave';
import QCard from './main-comps/QCard';

import React, { useState } from "react";

export default function Main({showMain}) {
    const [showfirstwave, setshowfirstwave] = useState(true);
    const [showQCards, setshowQCards] = useState(true);

    if (showMain == '1') {
        return (
            <div>
                {/* Wave */}
                <FirstWave showfirstwave={showfirstwave} setshowfirstwave={setshowfirstwave} />

                <h1 className='top-right-sb'>SB</h1>

                {/* Qcards */}
                <QCard showQCards={showQCards}/>

            </div>
        )
    }

};
  