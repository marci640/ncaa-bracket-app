import React from 'react';

const Score = (props) => (
  <div className="score_section">
    <div>
      <h1 className="current_score"> Current Score: </h1>
      <h3 className="current_score"> {props.score} </h3>
    </div>
  </div>
);

export default Score;