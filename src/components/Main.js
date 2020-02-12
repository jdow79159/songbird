import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Quiz from './Quiz';
import Report from './Report/Report';
import Loading from './Loading';
import { loadData } from '../store/actions/birds';
import ErrorLoading from './ErrorLoading';

export default () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadData());
  }, [dispatch]);
  const isError = useSelector((state) => state.birds.error);
  const isLoading = useSelector((state) => state.birds.loading);
  const isFinished = useSelector(
    (state) => state.birds.isGetCorrectAnswer
      && state.birds.questions.length - 1 === state.birds.currentQuestionId,
  );

  if (isError) {
    return (
      <main>
        <ErrorLoading />
      </main>
    );
  }

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  const content = isFinished ? <Report /> : <Quiz />;
  return <main>{content}</main>;
};
