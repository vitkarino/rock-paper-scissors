import { useState } from "react";
import { Icon } from "@iconify/react";

function App() {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [winner, setWinner] = useState("");
  const choices = ["rock", "paper", "scissors"];

  const handlePlayerChoice = (choice) => {
    setPlayerChoice(choice);
    const computerChoice = handleComputerChoice();
    determineWinner(choice, computerChoice);
  };

  const handleComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * 3)];
    setComputerChoice(randomChoice);
    return randomChoice;
  };

  const determineWinner = (player, computer) => {
    if (player === computer) {
      setWinner("It`s a draw!");
    } else if (
      (player === "rock" && computer === "scissors") ||
      (player === "scissors" && computer === "paper") ||
      (player === "paper" && computer === "rock")
    ) {
      setWinner("You WON!");
    } else {
      setWinner("Computer WON!");
    }
  };

  return (
    <div className="container mx-auto flex items-center justify-center h-screen flex-col">
      <div className="title-container flex flex-col text-center">
        <h1 className="text-3xl">Rock Paper Scissors</h1>
        <h3 className="text-xs">By Viktor Kysil</h3>
      </div>
      <div className="info-container text-center">
        <p>Your choice: {playerChoice}</p>
        <p>Computer choice: {computerChoice}</p>
      </div>
      <p>{winner ? `${winner}` : "Make your move"}</p>
      <div className="buttons-container flex">
        <button onClick={() => handlePlayerChoice("rock")}>
          Rock <Icon icon="fa-regular:hand-rock" />
        </button>
        <button onClick={() => handlePlayerChoice("paper")}>
          Paper <Icon icon="fa-regular:hand-paper" />
        </button>
        <button onClick={() => handlePlayerChoice("scissors")}>
          Scissors <Icon icon="fa-regular:hand-scissors" />
        </button>
      </div>

      <p className="font-bold">Hello world!</p>
    </div>
  );
}

export default App;
