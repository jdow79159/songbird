import React from 'react';
import Logo from './Logo';
import { useDispatch, useSelector } from 'react-redux';
import { onClickRestart } from '../store/actions/birds';

export default () => {
  const dispatch = useDispatch();
  const onClickHandler = () => {
    dispatch(onClickRestart());
  };
  const score = useSelector(state=>state.birds.totalScore)
  const restart = (
    <button
      className="btn btn-primary btn-lg btn-block mt-2"
      type="button"
      onClick={onClickHandler}
    >
      Попробовать еще раз
    </button>
  );
  const win = (
    <div>
      <div>Вот ваш приз</div>
      <div style={{fontSize: 150}}>
        <span role="img" aria-label="bird">
          🎂
        </span>
      </div>
    </div>
  );
  return (
    <div className="d-flex flex-grow-1 justify-content-center align-items-center vh-100">
      <div className="text-center">
        <Logo />
        <h2>Поздравляю!</h2>
        <p className="h4">{`Вы набрали ${score} из 30 баллов`}</p>
        {score === 30 ? win : restart}
      </div>
    </div>
  );
};
