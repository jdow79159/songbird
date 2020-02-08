import React from 'react';

export default ({answer}) => {
  let className = 'btn btn-secondary my-1';
  if (answer.clicked && answer.correct) {
    className = 'btn btn-outline-success my-1'
  } else if (answer.clicked && !answer.correct){

  }
  return(  <button type="button" className="btn btn-secondary my-1">
    Button
  </button>
};
