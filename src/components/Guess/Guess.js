import React from "react";

import { range } from '../../utils';
import { checkGuess } from '../../../src/game-helpers'

function Guess({guess, answer}) {
  let resultStatus;
  if(guess) {
    resultStatus = checkGuess(guess, answer)
  }

  return (
    <p className="guess">
      {range(5).map((num) => (
        <span key={num} className={`cell ${resultStatus ? resultStatus[num].status : undefined}`} >
          { guess ? guess[num] : undefined }
        </span>
      ))}
    </p>
  );
}

export default Guess;
