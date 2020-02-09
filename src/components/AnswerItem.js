import React from 'react';
import PropTypes from 'prop-types';

const AnswerItem = ({ answer, onAnswerClick }) => {
  let className = 'btn btn-secondary my-1';
  if (answer.clicked && answer.correct) {
    className = 'btn btn-outline-success my-1';
  } else if (answer.clicked && !answer.correct) {
    className = 'btn btn-outline-danger my-1';
  }
  return (
    <button
      type="button"
      id={`d${answer.id}`}
      className={className}
      onClick={() => {
        onAnswerClick(answer.id);
      }}
    >
      {answer.name}
    </button>
  );
};

AnswerItem.propTypes = {
  answer: PropTypes.object.isRequired,
  onAnswerClick: PropTypes.func.isRequired,
};

export default AnswerItem;
