import React from "react";

function WinBanner({guesses, win}) {
  let numGuesses = guesses ? guesses.length : 0;
  let className;
  if(win) {
    className = 'happy banner'
  } else {
    className = 'hide'
  }
  return (
  <div className={`${className}`}>
    <p>
      <strong>Congratulations!</strong> Got it in {''}
      <strong>{numGuesses} guesses</strong>.
    </p>
  </div>
)}

export default WinBanner;
