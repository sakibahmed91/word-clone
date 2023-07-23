import React from "react";

function LoseBanner({answer, lose}) {
  let className;
  if(lose) {
    className = 'sad banner'
  } else {
    className = 'hide'
  }
  return (
    <div className={`${className}`}>
      <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
    </div>
  );
}

export default LoseBanner;
