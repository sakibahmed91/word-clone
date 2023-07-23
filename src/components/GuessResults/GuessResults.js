
import { NUM_OF_GUESSES_ALLOWED} from '../../constants';
import { range } from '../../utils';

import Guess from '../Guess';

function GuessResults({ guesses, answer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => {
        return <Guess answer={answer} key={num} guess={guesses[num]} />
      })}
    </div>
  );
}

export default GuessResults;
