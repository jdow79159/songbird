import React, { useState } from 'react';

export default () => {
  const [score, setScore] = useState(0);
  return (
    <header className="row">
      <h1 className="col-sm-6 col text-center">
        Songbird
        <span role="img" aria-label="bird">
          🐦
        </span>
      </h1>
      <div className="col-sm-6 text-center h1 text-primary">
        Score:
        <span> </span>
        <span className="badge badge-pill badge-primary score">{score}</span>
      </div>
    </header>
  );
};
