import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "react-bootstrap";
import ScoreBoard from "./ScoreBoard";

const Game = () => {
  const { state } = useLocation();
  const [count, setCount] = useState(0);
  const [randomNo, setRandomNo] = useState(0);
  const [sum, setSum] = useState([]);
  const [win, setWin] = useState(false);
  const [winnerScore, setWinnerScore] = useState([]);
  const [draw, setDraw] = useState(false);
  const [powerUp, setPowerUp] = useState(0);

  console.log(winnerScore, "wins");
  const handleGame = () => {
    setCount(count + 1);

    let random = 0;
    if (sum >= 45) {
      random = Math.floor(Math.random() * 3);
    } else {
      random = Math.floor(Math.random() * 10);
    }

    setRandomNo(random);

    sum.push(random);
    const total = sum.reduce((pre, cur) => {
      return (pre = pre + cur);
    });

    setSum([total]);

    if (total === 50) {
      setWin(true);
      setWinnerScore([
        ...winnerScore,
        { name: state.playerName, count: count + 1 },
      ]);
      localStorage.setItem("Player", JSON.stringify(state.playerName));
      localStorage.setItem("count", JSON.stringify(count + 1));
    }
    if (total > 50) {
      setDraw(true);
    }
  };

  const PowerUpEven = () => {
    setCount(count + 1);
    setPowerUp(powerUp + 1);
    let random = Math.floor(Math.random() * 10);
    if (random % 2 === 0) {
      random = random + 2;
    }

    if (random % 2 !== 0) {
      random = random + 1;
    }

    setRandomNo(random);

    sum.push(random);
    const total = sum.reduce((pre, cur) => {
      return (pre = pre + cur);
    });

    setSum([total]);

    if (total === 50) {
      setWin(true);
      setWinnerScore([
        ...winnerScore,
        { name: state.playerName, count: count + 1 },
      ]);
    }
    if (total > 50) {
      setDraw(true);
    }
  };

  const PowerUpOdd = () => {
    setCount(count + 1);
    setPowerUp(powerUp + 1);

    let random = Math.floor(Math.random() * 10);
    if (random % 2 === 1) {
      random = random +1;
    }
    setRandomNo(random);

    sum.push(random);
    const total = sum.reduce((pre, cur) => {
      return (pre = pre + cur);
    });

    setSum([total]);

    if (total === 50) {
      setWin(true);
      setWinnerScore([
        ...winnerScore,
        { name: state.playerName, count: count + 1 },
      ]);
    }
    if (total > 50) {
      setDraw(true);
    }
  };

  const Restart = () => {
    setCount(0);
    setRandomNo(0);
    setSum([]);
    setWin(false);
    setDraw(false);
    setPowerUp(0);
  };

  return (
    <div>
      <div className="score">
        <ScoreBoard winnerScore={winnerScore} />
      </div>
      <div className="game">
        <h3> Player Name : {state.playerName}</h3> <br />
        <h4> Roll Count : {count} </h4>
        <h4> Random No : {randomNo} </h4>
        <h4> Total Score : {sum} </h4>
        <Button
          variant="secondary"
          onClick={() => handleGame()}
          disabled={sum >= 50}
        >
          Roll the Game
        </Button>{" "}
        <br />
        <br />
        <Button
          variant="secondary"
          onClick={() => PowerUpEven()}
          disabled={powerUp == 2 || sum >= 50}
        >
          Power Up Even
        </Button>
        {"   "}
        <Button
          variant="secondary"
          onClick={() => PowerUpOdd()}
          disabled={powerUp == 2 || sum >= 50}
        >
          Power Up Odd
        </Button>
        <br />
        <br />
        {win && (
          <>
            <h4>{state.playerName} You Win the Game</h4>
            <h5 style={{ color: "blue" }}>{state.playerName} Congratulation</h5>

            <Button variant="outline-secondary" onClick={() => Restart()}>
              Restart Game
            </Button>
          </>
        )}
        {draw && (
          <>
            <h4>{state.playerName} Lose the Game</h4>
            <h5 style={{ color: "blue" }}>
              {state.playerName} Oopppsss!!!!!! Try Again
            </h5>

            <Button variant="outline-secondary" onClick={() => Restart()}>
              Restart Game
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default Game;
