import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onClickNextQuestion } from '../store/actions/birds';

export default () => {
  const disabled = useSelector(
    (state) => !((state.birds.questions.length - 1 > state.birds.currentQuestionId)
    && state.birds.isGetCorrectAnswer),
  );
  const className = disabled
    ? 'btn btn-primary btn-lg btn-block mt-2 disabled'
    : 'btn btn-primary btn-lg btn-block mt-2';
  const dispatch = useDispatch();
  const onclickHandler = () => {
    dispatch(onClickNextQuestion());
  };
  return (
    <section>
      <button
        type="button"
        disabled={disabled}
        className={className}
        onClick={onclickHandler}
      >
        Дальше
      </button>
    </section>
  );
};
