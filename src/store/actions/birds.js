import { ON_CLICK_ANSWER, ON_CLICK_NEXT_QUESTION, ON_CLICK_RESTART, ON_SET_PLAYING } from '../types';

export const onClickAnswer = id => ({
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
