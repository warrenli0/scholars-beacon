import ping_tree from '../../images/peng-on-tree.png';
import SatAct from './SatAct';
import EnterSat from './EnterSat';
import EnterAct from './EnterAct';
import { useState, useEffect } from "react";

export default function Choose({}) {

    const [peng_text, setpengText] = useState("Hey there! What test are you preparing for?");
    const [speak, setspeak] = useState("0");
    const [showChoice, setshowChoice] = useState(true);
    const [chooseSATorACT, setchooseSATorACT] = useState('0'); // '1' for SAT, '2' for ACT
    const [showEnterSAT, setshowEnterSAT] = useState(false);
    const [showEnterACT, setshowEnterACT] = useState(false);

    useEffect(() => {
        //Runs on the first render
        //And any time any dependency value changes
        if (chooseSATorACT == '1') {
            setspeak("reset");
            setpengText("Enter in your current SAT score!");
            setshowEnterSAT(true); // this is where we render in the enter SAT score component
            setTimeout(function(){
                setspeak("1");
            }, 2000);
        } else if (chooseSATorACT == '2') {
            setspeak("reset");
            setpengText("Enter in your current ACT score!");
            setshowEnterACT(true); // ACT
            setTimeout(function(){
                setspeak("1");
            }, 2000);
        }
    }, [chooseSATorACT]);

    return (
        <div className='start-page'>
            <h1 className='sb-top-right'>SB</h1>
            <div className='start-text'>
                <SatAct showChoice={showChoice} setshowChoice={setshowChoice} setchooseSATorACT={setchooseSATorACT}/>
                <EnterSat showEnterSAT={showEnterSAT}/>
                <EnterAct showEnterACT={showEnterACT}/>
            </div>
            <div className='start-beach'></div>

            <div className='tree-container'>
                <img src={ping_tree} className="coconut-tree"/>
            </div>
            
            <div className='text-container'>
                <div className='typed-out' speak={speak}>
                    {peng_text}
                </div>
            </div>


            <h2 className='start-skip'>Skip for now</h2>

        </div>
    )

}

