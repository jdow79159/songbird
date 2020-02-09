import { data } from '../../data';
import { makeQuestions } from '../../utils/myLib';

const initialState = {
  currentQuestionId: 0,
  questionsNames: ['Разминка', 'Вопрос 1', 'Вопрос 2', 'Вопрос 3', 'Вопрос 4'],
  questions: makeQuestions(data),
};
export default (state = initialState) => state;
