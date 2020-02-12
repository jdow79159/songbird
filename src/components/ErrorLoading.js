import React from 'react';
import { useDispatch } from 'react-redux';
import Logo from './Logo';
import { loadData, startLoading } from '../store/actions/birds';

export default () => {
  const dispatch = useDispatch();
  const onClickHandler = () => {
    dispatch(startLoading());
    dispatch(loadData());
  };
  return (
    <div className="d-flex flex-grow-1 justify-content-center align-items-center vh-100">
      <div className="text-center">
        <Logo />
        <h2>Ошибка загрузки данных</h2>
        <div style={{ fontSize: 150 }}>
          <span role="img" aria-label="bird">
            ☹️
          </span>
        </div>
        <button
          className="btn btn-primary btn-lg btn-block mt-2"
          type="button"
          onClick={onClickHandler}
        >
          Попробовать еще раз
        </button>
      </div>
    </div>
  );
};
