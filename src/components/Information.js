import React, { useState } from 'react';
import BirdInfo from './BirdInfo';
import { useSelector } from 'react-redux';

export default () => {
  const isClickedSomeAnswer = useSelector(state => {
    const correct = state.birds.currentQuestionId;
    return state.birds.questions[correct].some(el => el.clicked);
  });
  return (
    <section className="col-md-7 d-flex justify-content-center align-items-center">
      {isClickedSomeAnswer ? (
        <BirdInfo />
      ) : (
        <p className="text-center h4 p-2">
          Послушайте плеер и выберите название птицы, чей голос прозвучал...
        </p>
      )}
    </section>
  );
};
