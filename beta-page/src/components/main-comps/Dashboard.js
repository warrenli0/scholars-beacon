import './Dashboard.css'
import beach from '../../images/dash-beach.png';
import cont from '../../images/dash-continue.png';
import stars from '../../images/starsbg.png';

import React, { useState, useEffect } from "react";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Pie, Line } from 'react-chartjs-2';

defaults.maintainAspectRatio = false;
defaults.responsive = true;
defaults.font.size = 14;
defaults.font.weight = 500;     
defaults.font.family = 'Poppins';
defaults.color = 'white';

const data2 = {
    labels: [1, 2, 3, 4, 5],
    datasets: [{
      label: 'English',
      data: [0, 50, 75, 50, 40],
      fill: false,
      backgroundColor: '#EF6C00',
      borderColor: '#d56000',
      tension: 0.1
    },
    {
        label: 'Math',
        data: [100, 50, 75, 30, 40],
        fill: false,
        backgroundColor: '#F73508',
        borderColor: '#d62800',
        tension: 0.1
    },
    {
        label: 'Reading',
        data: [0, 50, 75, 90, 80],
        fill: false,
        backgroundColor: '#08CAF7',
        borderColor: '#00a8ce',
        tension: 0.1
    },
    {
        label: 'Science',
        data: [100, 100, 100, 80, 75],
        fill: false,
        backgroundColor: '#00ED0B',
        borderColor: '#00be09',
        tension: 0.1
    }]
  };
  const data3 = {
    labels: [1, 2, 3, 4],
    datasets: [{
      label: 'English',
      data: [0, 10, 75, 50],
      fill: false,
      backgroundColor: '#EF6C00',
      borderColor: '#d56000',
      tension: 0.1
    },
    {
        label: 'Math',
        data: [10, 50, 75, 30],
        fill: false,
        backgroundColor: '#F73508',
        borderColor: '#d62800',
        tension: 0.1
    },
    {
        label: 'Reading',
        data: [0, 5, 75, 90],
        fill: false,
        backgroundColor: '#08CAF7',
        borderColor: '#00a8ce',
        tension: 0.1
    },
    {
        label: 'Science',
        data: [100, 10, 0, 80],
        fill: false,
        backgroundColor: '#00ED0B',
        borderColor: '#00be09',
        tension: 0.1
    }]
  };

/* index by types[v]
{
    english: [[# attempted set1, # correct set1, # understood set1, avg time set1], [repeated set2, ...]],
    math: [],
    reading: [],
    science: [],
}*/

function ScoreChart({v, actScores, actData}) {
    const types = ['English', 'Math', 'Reading', 'Science'];
    const colors = [
        '#EF6C00',
        '#F73508',
        '#08CAF7',
        '#00ED0B',
    ]
    //score-cont0 for english
    const [width, setWidth] = useState('0%');
    const [width2, setWidth2] = useState('0%');
    useEffect(() => {
        //Runs only on the first render
        // actdata: [# attempted set1, # correct set1, # understood set1, avg time set1]
        setTimeout(function(){
            setWidth(''+((actData[types[v]]["Overall"][1]/actData[types[v]]["Overall"][0])*100)+'%');
            setWidth2(''+((actData[types[v]]["Overall"][2]/actData[types[v]]["Overall"][0])*100)+'%');
        }, 3100); // reduce lower
      }, []);
    return (
        <div className={'score-style score-cont'+v}>
            <div className='score-head'>
                <h2 style={{color: colors[v]}}>{types[v]}</h2> 
                <h2>{actScores[v]}</h2>
            </div>
            <div className='correct-chart'>
                <h3>{actData[types[v]]["Overall"][1]}/{actData[types[v]]["Overall"][0]} Correct</h3>
                <div className='correct-bar'>
                    {actData[types[v]]["Overall"][1]
                    ? <div style={{backgroundColor: colors[v], width: width}} className='inside-correct-bar'></div>
                    : <div></div>}
                    
                </div>
            </div>
            <div className='correct-chart'>
                <h3>{actData[types[v]]["Overall"][2]}/{actData[types[v]]["Overall"][0]} Understood</h3>
                <div className='correct-bar'>
                    {actData[types[v]]["Overall"][2]
                    ? <div style={{backgroundColor: colors[v], width: width2}} className='inside-correct-bar'></div>
                    : <div></div>}
                    
                </div>
            </div>
        </div>
    )
}

export default function Dashboard({showDashoard, setshowDashoard, actScores, actData, actWeightage, currProblemSet, setcurrProblemSet}) {
    //console.log(actData); DELETEs
    const [graphID, setgraphID] = useState('1');
    const [exit, setexit] = useState('0');

    const pie_data = {
        labels: ['English', 'Math', 'Reading', 'Science'],
        datasets: [
        {
            label: 'weightage %',
            data: actWeightage,
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
            borderWidth: 5,
        },
        ],
    };

    function tryFive(){
        if (exit == '0') {
            setexit('1'); // moves bbg up
            setcurrProblemSet(currProblemSet + 1);
            setTimeout(function(){
                setshowDashoard(false);
                setexit('0');
                setgraphID('1');
            }, 6100);
        }
    };

    if (showDashoard) {
        // different version if its SAT or ACT
        return (
            <div className='dashboard-bg' exit={exit}>
                <div className='dash-stars'>
                    <img src={stars}/>
                </div>
                <div className='dash-header'>
                    <h1>Let's <span style={{color: "#FFB800"}}>analyze</span>  how you did...</h1>
                </div>
                <ScoreChart v={0} actScores={actScores} actData={actData}/>
                <ScoreChart v={1} actScores={actScores} actData={actData}/>
                <ScoreChart v={2} actScores={actScores} actData={actData}/>
                <ScoreChart v={3} actScores={actScores} actData={actData}/>
                <div className='line-chart'>
                    <form className='line-header'>
                        <label htmlFor="cars">Set vs</label>
                        <select name="cars" id="cars" onChange={(e=> setgraphID(e.target.value))}>
                            <option value = "1">Avg Solve Time</option>
                            <option value = "2">% Correct</option>
                            <option value = "3">% Understood</option>
                        </select>
                    </form>
                    <div className='line-container' version={graphID}>
                        <Line 
                        data={data2} 
                        options= {{
                            plugins: {
                                legend: {
                                    position: "bottom",
                                    labels: {
                                        boxWidth: 20,
                                    },
                                },
                            },
                            layout: {
                                padding: 10,
                            },
                            scales: {
                                x: {
                                    title: {
                                        display: true,
                                        text: 'Problem Set',
                                        align: 'center',
                                    }
                                },
                                y: {
                                    title: {
                                        display: true,
                                        text: '% Correct',
                                        align: 'center',
                                    }
                                }
                            }
                        }}/>
                    </div>
                    <div className='line-container2' version={graphID}>
                        <Line 
                        data={data3} 
                        options= {{
                            plugins: {
                                legend: {
                                    position: "bottom",
                                    labels: {
                                        boxWidth: 20,
                                    },
                                },
                            },
                            layout: {
                                padding: 10,
                            },
                            scales: {
                                x: {
                                    title: {
                                        display: true,
                                        text: 'Problem Set',
                                        align: 'center',
                                    }
                                },
                                y: {
                                    title: {
                                        display: true,
                                        text: '% Correct',
                                        align: 'center',
                                    }
                                }
                            }
                        }}/>
                    </div>
                    <div className='line-container3' version={graphID}>
                        <Line 
                        data={data2} 
                        options= {{
                            plugins: {
                                legend: {
                                    position: "bottom",
                                    labels: {
                                        boxWidth: 20,
                                    },
                                },
                            },
                            layout: {
                                padding: 10,
                            },
                            scales: {
                                x: {
                                    title: {
                                        display: true,
                                        text: 'Problem Set',
                                        align: 'center',
                                    }
                                },
                                y: {
                                    title: {
                                        display: true,
                                        text: '% Correct',
                                        align: 'center',
                                    }
                                }
                            }
                        }}/>
                    </div>
                </div>
                <div className='dash-pie'>
                    <div className='pie-text'>
                        <h2>Personalized Algorithm</h2>
                        <h4><i>This is how we determine what questions you get in the future based on your accuracy, understanding, and scores. We prioritize your weak areas and reinforce your strong ones.</i></h4>
                    </div>
                    <div className='pie-container'>
                        <Pie 
                        data={pie_data} 
                        options= {{
                            plugins: {
                                legend: {
                                    display: false,
                                    position: "right",
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
                    {/*<div className='pie-legend'>
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
                    </div>*/}
                </div>
                <div className='dash-try'>
                    <h1 onClick={() => {tryFive()}}>Try <span style={{color: "#FFB800"}}>5 new</span>  problems</h1>
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