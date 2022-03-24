import React from "react";

const ScoreBoard = ({ winnerScore }) => {
  console.log(winnerScore, "score");

  if (winnerScore[0]?.count > winnerScore[1]?.count) {
    alert("Congratulation you are the top scorerer");
  }
  // console.log(winnerScore[0]?.count , "0")
  // console.log(winnerScore[1]?.count , "1")

  return (
    <div>
      <h4> Score Board </h4>
      <br />
      <br />
      {winnerScore
        .sort((a, b) => a.count - b.count)
        .slice(0, 5)
        .map((win) => {
          return (
            <>
              <h5>
                {" "}
                Winner: {win.name} & Count: {win.count}{" "}
              </h5>
            </>
          );
        })}
    </div>
  );
};

export default ScoreBoard;
