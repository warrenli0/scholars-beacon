import './Thx.css'
import React, { useState, useEffect } from "react";

export default function ThxPage({showThx, setshowThx, choseSAT, actScores, actData, actWeightage, currProblemSet, satWeightage,
    satScores, satData, firstBetaButton, log}) {
        const [email, setemail] = useState("");

    function ShowData() {
        
        if (choseSAT) { // SAT
            console.log("SAT");
            console.log(satScores);
            console.log(satWeightage);
        } else { // ACT
            console.log("ACT");
            console.log(actScores);
            console.log(actWeightage);
        }
        console.log(log);
        console.log("first beta button pushed:", firstBetaButton);
    }

    function Enter() {
        // send data
        console.log("beep boop");
    }

    if (showThx) {
        
        return (
            <div className="thx-cont">
                <h1>hi wo-lun</h1>
                <input type="text" id="user-email" onChange={(e) => setemail(e.target.value)}></input>
                <button onClick={() => {Enter()}}>Submit</button>
                <ShowData />
            </div>
        )
    }
}   