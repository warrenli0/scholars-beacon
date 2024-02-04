import React, { useState } from "react";
import './App.css';
import LandingPage from "./components/LandingPage";

function App() {
  // Properties
  const [showLandingPage, setshowLandingPage] = useState(true);

  if (showLandingPage) {
    return <LandingPage />;
  }
}

export default App;
