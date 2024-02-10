import show_icon from '../../images/Show.png'
import hide_icon from '../../images/Hide.png'
import TheNotepad from './TheNotepad';
import TheQcard from './TheQcard';

import React, { useState, useRef } from "react";

const questions = [
    {
      text: "Maria is staying at a hotel that charges $99.95 per night plus tax for a room. A tax of 8% is applied to the room rate, and an additional onetime untaxed fee of $5.00 is charged by the hotel. Which of the following represents Maria’s total charge, in dollars, for staying x nights?",
      options: [
        { id: 0, text: "(99.95 + 0.08x) + 5", isCorrect: false },
        { id: 1, text: "1.08(99.95x) + 5", isCorrect: true },
        { id: 2, text: "1.08(99.95x + 5)", isCorrect: false },
        { id: 3, text: "1.08(99.95 + 5)x", isCorrect: false },
      ],
      type: "Math (no calc)",
      explanation: "The room rate is $99.95 for every night. Since you stay for x nights, the price becomes 99.95x. However, there is a tax of 8% on the room rate, so the price is 0.08(99.95x). Lastly, with the addition of a one time untaxed fee of $5, the answer is the second option: 1.08(99.95x) + 5.",
    },
    {
      text: "Greek yogurt business have found many methods of controlling and eliminating most environmental threats. Given these solutions as well as the many health benefits of the food, the advantages of Greek yogurt 'outdo' the potential drawbacks of its production.",
      options: [
        { id: 0, text: "NO CHANGE", isCorrect: false },
        { id: 1, text: "defeat", isCorrect: false },
        { id: 2, text: "outperform", isCorrect: false },
        { id: 3, text: "outweigh", isCorrect: true },
      ],
      type: "Grammar",
      explanation: "“Outweigh” is the only choice between “advantages” and “drawbacks.” Choices 1, 2, and 3 are incorrect because each implies a competitive relationship that is inappropriate in this context.",
    },
    {
      text: "Given y = a(x-2)(x+4) and a is a nonzero constant: The graph of the equation in the xy-plane is a parabola with vertex (c,d), Which of the following is equal to d?",
      options: [
        { id: 0, text: "-9a", isCorrect: true },
        { id: 1, text: "-8a", isCorrect: false },
        { id: 2, text: "-5a", isCorrect: false },
        { id: 3, text: "-2a", isCorrect: false },
      ],
      type: "Math (no calc)",
      explanation: "The vertex is in the middle of the x-intercepts. The x-intercepts are where y = 0, so when x - 2 = 0 and x + 4 = 0. The x-intercepts are (2,0) and (-4,0). The x-value for the vertex is in the middle of 2 and -4, so it is -1. Substituting -1 for x, we get y = -9a, so the vertex is (-1, -9a). The answer is -9a.",
    },
    {
      text: "At Luffy's High School, approximately 7 percent of enrolled juniors and 5 percent of enrolled seniors were inducted into the National Pirate Society last year. If there were 562 juniors and 602 seniors enrolled at Luffy's High School last year, which is closest to the total number of juniors and seniors at Luffy's High School last year who were inducted into the National Pirate Society?",
      options: [
        { id: 0, text: "140", isCorrect: false },
        { id: 1, text: "30", isCorrect: false },
        { id: 2, text: "69", isCorrect: true },
        { id: 3, text: "39", isCorrect: false },
      ],
      type: "Math (calc)",
      explanation: "Since 7 percent of the 562 juniors is 0.07(562) and 5 percent of the 602 seniors is 0.05(602), the expression 0.07(562) + 0.05(602) can be evaluated to determine the total number of juniors and seniors inducted into the National Pirate Society. Of the given choices, 69 is closest to the value of the expression.",
    },
    {
      text: "Yogurt manufacturers, food 'scientists; and' government officials are also working together to develop additional solutions for reusing whey.",
      options: [
        { id: 0, text: "NO CHANGE", isCorrect: false },
        { id: 1, text: "scientists: and", isCorrect: false },
        { id: 2, text: "scientists, and", isCorrect: true },
        { id: 3, text: "scientists, and,", isCorrect: false },
      ],
      type: "Grammar",
      explanation: "Choice 3 is the best answer because it utilizes proper punctuation for items listed in a series. In this case those items are nouns: “Yogurt manufacturers, food scientists, and government officials. Choices 1 and 2 are incorrect because both fail to recognize that the items are a part of a series. Since a comma is used after “manufacturers,” a semicolon or colon should not be used after “scientists.” Choice 4 is incorrect because the comma after “and” is unnecessary and deviates from grammatical conventions for presenting items in a series.",
    },
    {
      text: "At a lunch stand, each hamburger has 50 more calories than each order of fries. If 2 hamburgers and 3 orders of fries have a total of 1700 calories, how many calories does a hamburger have?",
      options: [
        { id: 0, text: "320", isCorrect: false },
        { id: 1, text: "370", isCorrect: true },
        { id: 2, text: "270", isCorrect: false },
        { id: 3, text: "warren", isCorrect: false },
      ],
      type: "Math (no calc)",
      explanation: "The equation 2h + 3f = 1700 represents the fact that 2 hamburgers and 3 orders of fries contain a total of 1700 calories, and the equation h = f + 50 represents the fact that one hamburger contains 50 more calories than an order of fries. Substituting f + 50 for h in 2h + 3f = 1700 gives 2(f + 50) + 3f = 1700, meaning f = 320. Therefore, h = 370.",
    },
    {
      text: "Which choice most effectively combines the two sentences at the quoted portion? Typically, the ice sheet begins to show evidence of thawing in late ‘summer. This’ follows several weeks of higher temperatures.",
      options: [
        { id: 0, text: "summer, following", isCorrect: true },
        { id: 1, text: "summer, and this thawing follows", isCorrect: false },
        { id: 2, text: "summer, and such thawing follows", isCorrect: false },
        { id: 3, text: "summer and this evidence follows", isCorrect: false },
      ],
      type: "Grammar",
      explanation: "Choice 1 is the best answer because it concisely combines the two sentences while maintaining the original meaning. Choices 2, 3, and 4 are incorrect because each is unnecessarily wordy, thus undermining one purpose of combining two sentences: to make the phrasing more concise.",
    },
    {
      text: "Because consumers reap the nutritional benefits of Greek yogurt and support those who make and sell ‘it, therefore farmers’ and businesses should continue finding safe and effective methods of producing the food.",
      options: [
        { id: 0, text: "NO CHANGE", isCorrect: false },
        { id: 1, text: "it, farmers", isCorrect: true },
        { id: 2, text: "it, so farmers", isCorrect: false },
        { id: 3, text: "it: farmers", isCorrect: false },
      ],
      type: "Grammar",
      explanation: "Choice 2 is the best answer because it provides a syntactically coherent and grammatically correct sentence. Choices 1 and 3 are incorrect because the adverbial conjunctions “therefore” and “so,” respectively, are unnecessary following “Because.” Choice 4 is incorrect because it results in a grammatically incomplete sentence (the part of the sentence before the colon must be an independent clause).",
    },
    {
      text: "Neal walks 25 meters in 13.7 seconds. If he walks at this same rate, which of the following is closest to the distance he will walk in 4 minutes?",
      options: [
        { id: 0, text: "150 meters", isCorrect: false },
        { id: 1, text: "450 meters", isCorrect: true },
        { id: 2, text: "700 meters", isCorrect: false },
        { id: 3, text: "1000 meters", isCorrect: false },
      ],
      type: "Math (calc)",
      explanation: "25 meters in 13.7 seconds is a rate of about 1.82 m/s. He walks for 4 minutes which is 240 seconds. The total distance is then (1.82 m/s) * (240 s) = 436.8 m, which is closest to 450 meters.",
    },
    {
      text: "Having become frustrated trying to solve difficult problems, ‘no colleagues were nearby to share ideas’.",
      options: [
        { id: 0, text: "NO CHANGE", isCorrect: false },
        { id: 1, text: "colleagues were important for sharing ideas.", isCorrect: false },
        { id: 2, text: "ideas couldn’t be shared with colleagues.", isCorrect: false },
        { id: 3, text: "I missed having colleagues nearby to consult.", isCorrect: true },
      ],
      type: "Grammar",
      explanation: "Choice 4 is the best answer because it is the only choice that provides a grammatically standard and coherent sentence. The participial phrase “Having become frustrated. . .” functions as an adjective modifying “I,” the writer.",
    },
];

function Timer({show}) {
  const [seconds, setSeconds] = useState(-4);
  const [minutes, setMinutes] = useState(0);
  var showseconds = '';
  var showminutes = '';

  setTimeout(function(){
    setSeconds(seconds + 1);
  }, 1000);

  if (seconds < 10) {
    showseconds = '0' + seconds;
  } else if (seconds > 59) {
    showseconds = '00';
    setSeconds(0);
    setMinutes(minutes + 1);
  } else {
    showseconds = '' + seconds;
  }

  if (minutes < 10) {
    showminutes = '0' + minutes;
  } else {
    showminutes = '' + minutes;
  }

  return (
    <h1 show={show}>{showminutes}:{showseconds}</h1>
  )
};

export default function QCard({showQCards}) {
    const [currQIndex, setcurrQIndex] = useState(0);
    const [showIcon, setshowIcon] = useState('1');

    /* One reason to use useCallback is to prevent a component from re-rendering unless its props have changed. source: w3 */

    if (showQCards) {
        return (
            <div className='question-page'> {/* Fixed container to position off of */}
                
                <div className='surf-wave-bottom'></div> {/* First bg that moves up */}
                <div className='question-grid'> {/* Used to position misc + qcards */}
                    <div className='qcard-header'> 
                        <h1>Q.{currQIndex+1}</h1>
                        <h3><i>{questions[currQIndex].type}</i></h3>
                    </div>
                    <div className='qcard-misc'> 
                        <img src={show_icon} id='show_icon' show={showIcon} onClick={() => {setshowIcon('0')}}/>
                        <img src={hide_icon} id='hide_icon' show={showIcon} onClick={() => {setshowIcon('1')}}/>
                        <Timer show={showIcon}/>
                    </div>
                    <div className='qcard-notepad'> 
                        <TheNotepad/>
                    </div>
                    <div className='qcard-container'> {/* qcard */}
                        <TheQcard prob={questions[currQIndex]}/>
                    </div>
                </div>
            </div>
        )
    }
};
  