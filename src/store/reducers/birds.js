import { makeQuestions } from '../../utils/myLib';
import {
  LOAD_DATA,
  ON_CLICK_ANSWER,
  ON_CLICK_NEXT_QUESTION,
  ON_CLICK_RESTART,
  ON_SET_PLAYING,
  START_LOADING,
} from '../types';
import {
  LOSE_SCORE_FOR_MISTAKE,
  MAX_SCORE_FOR_QUESTION,
  QUESTION_NAMES,
} from '../../data';

export const initialState = {
  loading: true,
  data: [],
  error: false,
  currentQuestionId: 0,
  questionsNames: QUESTION_NAMES,
  questions: [],
  isGetCorrectAnswer: false,
  activeId: null,
  totalScore: 0,
  localScore: MAX_SCORE_FOR_QUESTION,
  playing: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_DATA: {
      const { error } = action.payload;
      return {
        ...state,
        data: action.payload.data,
        questions: error ? [] : makeQuestions(action.payload.data),
        loading: false,
        error,
      };
    }
    case START_LOADING:
      return {
        ...state,
        error: false,
        loading: true,
      };
    case ON_CLICK_ANSWER: {
      const { currentQuestionId } = state;
      const idx = state.questions[currentQuestionId].findIndex(
        (el) => el.id === action.payload,
      );
      const answer = { ...state.questions[currentQuestionId][idx] };
      if (!state.isGetCorrectAnswer && !answer.clicked) {
        answer.clicked = true;
        const isGetCorrectAnswer = answer.correct;
        const totalScore = isGetCorrectAnswer
          ? state.totalScore + state.localScore
          : state.totalScore;
        const localScore = isGetCorrectAnswer
          ? MAX_SCORE_FOR_QUESTION
          : state.localScore - LOSE_SCORE_FOR_MISTAKE;
        const playing = isGetCorrectAnswer ? false : state.playing;
        const question = [
          ...state.questions[currentQuestionId].slice(0, idx),
          answer,
          ...state.questions[currentQuestionId].slice(idx + 1),
        ];
        const questions = [
          ...state.questions.slice(0, currentQuestionId),
          question,
          ...state.questions.slice(currentQuestionId + 1),
        ];
        return {
          ...state,
          questions,
          isGetCorrectAnswer,
          activeId: action.payload,
          localScore,
          totalScore,
          playing,
        };
      }
      return { ...state, activeId: action.payload };
    }
    case ON_CLICK_NEXT_QUESTION:
      return state.questions.length - 1 > state.currentQuestionId
        && state.isGetCorrectAnswer
        ? {
          ...state,
          currentQuestionId: state.currentQuestionId + 1,
          isGetCorrectAnswer: false,
          activeId: null,
        }
        : state;
    case ON_CLICK_RESTART:
      return {
        ...initialState,
        loading: false,
        data: state.data,
        questions: makeQuestions(state.data),
      };
    case ON_SET_PLAYING:
      return {
        ...state,
        playing: !state.playing,
      };

    default:
      return state;
  }
};
