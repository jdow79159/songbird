import React from 'react';
import { useSelector } from 'react-redux';
import Logo from './Logo';

export default () => {
  const score = useSelector((state) => state.birds.totalScore);
  return (
    <header className="row">
      <div className="col-sm-6 col text-center">
        <Logo />
      </div>
      <div className="col-sm-6 text-center h1 text-primary">
        Score:
        <span> </span>
        <span className="badge badge-pill badge-primary score">{score}</span>
      </div>
    </header>
  );
};
