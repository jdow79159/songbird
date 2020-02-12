import {
  LOAD_DATA,
  ON_CLICK_ANSWER,
  ON_CLICK_NEXT_QUESTION,
  ON_CLICK_RESTART,
  ON_SET_PLAYING, START_LOADING,
} from '../types';
import { SERVER } from '../../data';

export const loadData = () => async (dispatch) => {
  try {
    const response = await fetch(SERVER || '/api/questions/');
    if (!response.ok) {
      throw new Error('Данные с сервера не получены.');
    }
    const data = await response.json();
    dispatch({
      type: LOAD_DATA,
      payload: {
        data,
        error: false,
      },
    });
  } catch (e) {
    dispatch({
      type: LOAD_DATA,
      payload: {
        data: [],
        error: true,
      },
    });
  }
};

export const startLoading = () => ({
  type: START_LOADING,
});

export const onClickAnswer = (id) => ({
  type: ON_CLICK_ANSWER,
  payload: id,
});

export const onClickNextQuestion = () => ({
  type: ON_CLICK_NEXT_QUESTION,
});

export const onClickRestart = () => ({
  type: ON_CLICK_RESTART,
});

export const onSetPlaying = () => ({
  type: ON_SET_PLAYING,
});
