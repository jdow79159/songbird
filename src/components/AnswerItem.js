import React from 'react';

export default ({ answer, onAnswerClick }) => {
  let className = 'btn btn-secondary my-1';
  if (answer.clicked && answer.correct) {
    className = 'btn btn-outline-success my-1';
  } else if (answer.clicked && !answer.correct) {
    className = 'btn btn-outline-danger my-1';
  }
  return (
    <button type="button" id={`d${answer.id}`} className={className} onClick={ () => {
      onAnswerClick(answer.id);
    }}
    >
      { answer.name }
    </button>
  );
};
