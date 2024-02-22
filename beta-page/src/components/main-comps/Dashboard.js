import './Dashboard.css'
import beach from '../../images/dash-beach.png';
import cont from '../../images/dash-continue.png';
import stars from '../../images/starsbg.png';

import React, { useState } from "react";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Pie } from 'react-chartjs-2';

defaults.maintainAspectRatio = false;
defaults.responsive = true;
defaults.font.size = 14;
defaults.font.weight = 500;     
defaults.font.family = 'Poppins';
defaults.color = 'white';

const data = {
    labels: ['English', 'Math', 'Reading', 'Science'],
    datasets: [
      {
        label: 'weightage %',
        data: [12, 19, 3, 5],
        backgroundColor: [
          '#EF6C00',
          '#F73508',
          '#08CAF7',
          '#00ED0B',
        ],
        borderColor: [
          '#d56000',
          '#d62800',
          '#00a8ce',
          '#00be09',
        ],
        borderWidth: 1,
      },
    ],
};

function ScoreChart({v}) {
    const types = ['English', 'Math', 'Reading', 'Science'];
    const colors = [
        '#EF6C00',
        '#F73508',
        '#08CAF7',
        '#00ED0B',
    ]
    const answers = [{correct: [1, 5], understood: [2,5]}, {correct: [0, 5], understood: [1,5]}, {correct: [3, 5], understood: [3,5]}, {correct: [5, 5], understood: [4,5]},]
    //score-cont0 for english
    return (
        <div className={'score-style score-cont'+v}>
            <div className='score-head'>
                <h2 style={{color: colors[v]}}>{types[v]}</h2>
                <h2>{36}</h2>
            </div>
            <div className='correct-chart'>
                <h3>{answers[v].correct[0]}/{answers[v].correct[1]} Correct</h3>
                <div className='correct-bar'>
                    {answers[v].correct[0]
                    ? <div style={{backgroundColor: colors[v], width: ''+((answers[v].correct[0]/answers[v].correct[1])*100)+'%'}} className='inside-correct-bar'></div>
                    : <div></div>}
                    
                </div>
            </div>
            <div className='correct-chart'>
                <h3>{answers[v].understood[0]}/{answers[v].understood[1]} Understood</h3>
                <div className='correct-bar'>
                    {answers[v].understood[0]
                    ? <div style={{backgroundColor: colors[v], width: ''+((answers[v].understood[0]/answers[v].understood[1])*100)+'%'}} className='inside-correct-bar'></div>
                    : <div></div>}
                    
                </div>
            </div>
        </div>
    )
}

export default function Dashboard({showDashoard, setshowDashoard}) {

    if (showDashoard) {
        // different version if its SAT or ACT
        return (
            <div className='dashboard-bg'>
                <div className='dash-stars'>
                    <img src={stars}/>
                </div>
                <div className='dash-header'>
                    <h1>Let's <span style={{color: "#FFB800"}}>analyze</span>  how you did...</h1>
                </div>
                <ScoreChart v={0}/>
                <ScoreChart v={1}/>
                <ScoreChart v={2}/>
                <ScoreChart v={3}/>
                <div className='line-container'>

                </div>
                <div className='dash-pie'>
                    <div>
                        <h2>Personalized Algorithm</h2>
                        <h4><i>This is how we determine what questions you get in the future based on your accuracy, understanding, and scores. We prioritize your weak areas and reinforce your strong ones.</i></h4>
                    </div>
                    <div className='pie-container'>
                        <Pie 
                        data={data} 
                        options= {{
                            plugins: {
                                legend: {
                                    display: false,
                                    position: "bottom",
                                    labels: {
                                        boxWidth: 20,
                                    },
                                    onClick: null,
                                },
                            },
                            layout: {
                                padding: 50,
                            }
                        }}/>
                    </div>
                    <div className='pie-legend'>
                        <div className='legend-cont'>
                            <div className='pie-box english-orange'></div>
                            <h4>English</h4>
                        </div>
                        <div className='legend-cont'>
                            <div className='pie-box math-red'></div>
                            <h4>Math</h4>
                        </div>
                        <div className='legend-cont'>
                            <div className='pie-box reading-blue'></div>
                            <h4>Reading</h4>
                        </div>
                        <div className='legend-cont'>
                            <div className='pie-box science-green'></div>
                            <h4>Science</h4>
                        </div>
                    </div>
                </div>
                <div className='dash-try'>
                    <h1>Try <span style={{color: "#FFB800"}}>5 new</span>  problems</h1>
                    <h4><i>adjusted to fit your algorithm!</i></h4>
                </div>
                <div className='dash-beach'>
                    <img src={beach}/>
                </div>
                <div className='dash-cont'>
                    <img src={cont}/>
                </div>
            </div>
        ) 
    }
}