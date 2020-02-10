import React from 'react';
import Quiz from './Quiz';
import { useSelector } from 'react-redux';
import Report from './Report';

export default () => {
  const isFinished = useSelector(
    state =>
      state.birds.isGetCorrectAnswer &&
      state.birds.questions.length - 1 === state.birds.currentQuestionId
  );
  const content = isFinished ? <Report/> : <Quiz />;
  return <main>{content}</main>;
};
