import React, { useState } from 'react';
import AnswerItem from '../AnswerItem';

export default () => {
  const [isGetCorrectAnswer, setIsGetCorrectAnswer] = useState(false);
  const [answers, setAnswers] = useState([
    {
      id: 1,
      name: 'Птица1',
      clicked: false,
      correct: false,
    },
    {
      id: 2,
      name: 'Птица2',
      clicked: false,
      correct: false,
    },
    {
      id: 3,
      name: 'Птица3',
      clicked: false,
      correct: false,
    },
    {
      id: 4,
      name: 'Птица4',
      clicked: false,
      correct: true,
    },
    {
      id: 5,
      name: 'Птица5',
      clicked: false,
      correct: false,
    },
    {
      id: 6,
      name: 'Птица6',
      clicked: false,
      correct: false,
    },
  ]);
  const onAnswerClick = id => {
    if (!isGetCorrectAnswer) {
      const idx = answers.findIndex(el => el.id === id);
      const answer = { ...answers[idx], clicked: true };
      setAnswers([...answers.slice(0, idx), answer, ...answers.slice(idx + 1)]);
      if (answer.correct) {
         setIsGetCorrectAnswer(true);
      }
    }
  };
  return (
    <div className="btn-group-vertical d-flex">
      {answers.map(el => (
        <AnswerItem key={el.id} answer={el} onAnswerClick={onAnswerClick} />
      ))}
    </div>
  );
};
