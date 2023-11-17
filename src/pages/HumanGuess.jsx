import './CompGuess.css';
import { useEffect, useState } from 'react';

const Result = ({ term, secretNum }) => {
    let result;
    if (term) {
        if (secretNum > term) {
            result = 'Lower'
        }
        else if (secretNum < term) {
            result = 'Higher'
        }
        else if (secretNum == term) {
            result = 'Yippee, correct!'
        }
        else {
            result = "Enter Valid Input"
        }
    }
    return <h3>You Guessed: {result}</h3>
}

function HumanGuess() {
  const [guess, setGuess] = useState(0)
  const [ans, setAns] = useState(0);

  useEffect(()=>{
    setAns(Math.floor(Math.random() * (101)));
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <p>Guessing game</p>
        <input
            id='term'
            type='text'
            name='term'
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
        />

        <Result term={guess}
            secretNum={ans} />
      </header>
    </div>
  );
}

export default HumanGuess;
