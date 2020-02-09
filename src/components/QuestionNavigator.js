import React, { useState } from 'react';

import { useSelector } from 'react-redux';

export default () => {
  const questions = useSelector(state => state.birds.questions);
  const currentQuestion = useSelector(state => state.birds.currentQuestion)
  const activeClassName = 'list-group-item text-center active';
  const passiveClassName = 'list-group-item text-center';
  const questionsContent = questions.map((q, id) => (
    <li
      className={id === currentQuestion ? activeClassName : passiveClassName}
      key={id}
    >
      {q}
    </li>
  ));
  return (
    <section className="py-2">
      <ul className="list-group list-group-horizontal justify-content-center row">
        {questionsContent}
      </ul>
    </section>
  );
};
