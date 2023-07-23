import React, { useState } from "react";

function GuessInput({ guesses, setGuesses, end }) {
  const [guess, setGuess] = useState('')
  function handler(event) {
      event.preventDefault();
      if(guess.length !== 5) {
        alert('Please enter atleast 5 letters');
        return
      }
      console.log({guess})
      let nextGuess = [...guesses, guess]
      setGuesses(nextGuess)
      setGuess('')
  }

  return (
    <form className="guess-input-wrapper"
      onSubmit={event => {
        handler(event);
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        minLength={5}
        maxLength={5}
        disabled={end}  
        id="guess-input" 
        type="text" 
        value={guess} 
        name="guess" 
        onChange={(event) => {
          setGuess(event.target.value.toUpperCase())
      }}/>
    </form>
  );
}

export default GuessInput;
