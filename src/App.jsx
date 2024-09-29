import { useState } from "react";

function App() {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [winner, setWinner] = useState("");
  const choices = ['rock', 'paper', 'scissors'];
  
  const handlePlayerChoice = (choice) => {
    setPlayerChoice(choice);
    const computerChoice = handleComputerChoice();
    determineWinner(choice, computerChoice);
  };

  const handleComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * 3)]
    setComputerChoice(randomChoice)
    return randomChoice;
  }

  const determineWinner = (player, computer) => {
    if (player === computer) {
        setWinner('It`s a draw!');
    } else if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'scissors' && computer === 'paper') ||
        (player === 'paper' && computer === 'rock')
    ) {
        setWinner("You")
    } else {
        setWinner("Computer")
    }
  };

  return (
    <div className="container">
      <h1>Rock Paper Scissors</h1>
      <h3>By Viktor Kysil</h3>
      <p>Your choice: {playerChoice}</p>
      <p>Computer choice: {computerChoice}</p>
      <p>{winner ? `${winner} won!` : "Make your move"}</p>
      <button onClick={() => handlePlayerChoice('rock')}>Rock</button>
      <button onClick={() => handlePlayerChoice('paper')}>Paper</button>
      <button onClick={() => handlePlayerChoice('scissors')}>Scissors</button>
    </div>
  );
}

export default App;
