import React, { useState } from 'react';
import { QUESTIONS } from '../data';

export default () => {
  const questions = QUESTIONS;
  const [activeItem, setActiveItem] = useState(0);
  const activeClassName = 'list-group-item text-center active';
  const passiveClassName = 'list-group-item text-center';
  const questionsContent = questions.map((q, id) => (
    <li className={id === activeItem ? activeClassName : passiveClassName} key={id}>
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
