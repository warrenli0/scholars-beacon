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

    /*
    log variable : {

        Set1: {
            problemId1: {
                qTime: 10,
                eTime: 5,
                eThumbs: 0,
                understood: false,
                correct: true,
            },
            totalQtime: 30,
            totalEtime: 20, 
        },
        totalSolved: 5
    
    }*/

    /* EXAMPLE:
        {
            "Set1": {
                "1": {
                "qTime": 3,
                "eTime": 3,
                "eThumbs": 0,
                "understood": false,
                "correct": false
                },
                "2": {
                "qTime": 2,
                "eTime": 2,
                "eThumbs": 0,
                "understood": false,
                "correct": false
                },
                "3": {
                "qTime": 3,
                "eTime": 2,
                "eThumbs": 0,
                "understood": false,
                "correct": false
                },
                "4": {
                "qTime": 3,
                "eTime": 2,
                "eThumbs": 0,
                "understood": false,
                "correct": true
                },
                "5": {
                "qTime": 3,
                "eTime": 3,
                "eThumbs": 0,
                "understood": false,
                "correct": false
                },
                "totalQtime": 14,
                "totalEtime": 12
            },
            "totalSolved": 5
            }

    */
    

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