import React, { useEffect }  from 'react';
import { useState } from "react";


import { sample } from '../../utils';
import { WORDS } from '../../data';
import  GuessInput  from '../GuessInput';
import GuessResults from '../GuessResults';
import WinBanner from '../WinBanner';
import LoseBanner from '../LoseBanner';


// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);
  const [win, setWin] = useState(false);
  const [lose, setLose] = useState(false);
  const [end, setEnd] = useState(false)

  useEffect(() => {
    if (guesses.includes(answer)) {
      setWin(true);
      setEnd(true)
    } else {
        setWin((currentWin) => {
          if (!currentWin && guesses.length === 6) {
            setLose(true);
            setEnd(true);
          }
          return currentWin;
        });
    }
  }, [guesses]);

  return <>
  <WinBanner 
    guesses={guesses}
    win={win} 
  />
  <LoseBanner 
    lose={lose}
    answer={answer}
  />
  <GuessResults 
    guesses={guesses}
    answer={answer}
  />
  <GuessInput 
    guesses={guesses}
    setGuesses={setGuesses}
    end={end}
  />
  
  </>;
}

export default Game;
