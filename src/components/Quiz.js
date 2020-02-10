import React from 'react';
import QuestionNavigator from './QuestionNavigator';
import Question from './Question';
import Next from './Next';
import AnswersList from './AnswerList';
import Information from './Information';
import Header from './Header';

export default () => (
  <>
    <Header />
    <QuestionNavigator />
    <Question />
    <Next />
    <div className="row py-3 mx-0">
      <AnswersList />
      <Information />
    </div>
  </>
);
