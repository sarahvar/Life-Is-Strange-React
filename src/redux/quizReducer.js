import { combineReducers } from 'redux';
import { SET_RESPONSES, SET_RESULTS, RESET_QUIZ } from './actions';

const initialQuizState = {
  responses: {},
  results: [],
  correctAnswers: 0,
};

const quizReducer = (state = initialQuizState, action) => {
  switch (action.type) {
    case SET_RESPONSES:
      return {
        ...state,
        responses: action.payload,
      };
    case SET_RESULTS:
      return {
        ...state,
        results: action.payload.results,
        correctAnswers: action.payload.correctAnswers,
      };
    case RESET_QUIZ:
      return initialQuizState;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  quiz: quizReducer,
});

export default rootReducer;
