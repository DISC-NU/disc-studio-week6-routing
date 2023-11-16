import './CompGuess.css';
import { useEffect, useState } from 'react';

function Buttons(props) {
  return (
    <button onClick={props.function}>{props.text}</button>
  )
}

function CompGuess() {
  const [guess, setGuess] = useState(0);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(100);

  useEffect(()=>{
    setGuess(Math.floor(Math.random() * (max - min + 1) + min));
  }, [min, max])

  const tooHigh = () => {
    setMax(guess);
  };

  const tooLow = () => {
    setMin(guess);
  }

  const correct = () => {
    setMax(100);
    setMin(0);
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Guessing game</p>
        <p>Guess: {guess}</p>
        <Buttons text="Too high" function={tooHigh}/>
        <Buttons text="Correct, restart" function={correct} />
        <Buttons text="Too low" function={tooLow}/>
      </header>
    </div>
  );
}

export default CompGuess;
