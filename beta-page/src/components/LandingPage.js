import './LandingPage.css'
import Hero from './lp-comps/Hero'
import Hook from './lp-comps/Hook';
import ThreePingus from './lp-comps/ThreePingus';
import SbInfo from './lp-comps/SbInfo';
import Bottom from './lp-comps/Bottom';
import { useState, useRef, useEffect } from "react";

export default function LandingPage() {
    // fade in on scroll : https://www.freecodecamp.org/news/reveal-on-scroll-in-react-using-the-intersection-observer-api/

    return (
      <div>
        <Hero />
        <Hook />
        <ThreePingus />
        <SbInfo />
        <Bottom />
      </div>
    )
};
  