export const SET_RESPONSES = 'SET_RESPONSES';
export const SET_RESULTS = 'SET_RESULTS';
export const RESET_QUIZ = 'RESET_QUIZ';

export const setResponses = (responses) => ({
  type: SET_RESPONSES,
  payload: responses,
});

export const setResults = (results, correctAnswers) => ({
  type: SET_RESULTS,
  payload: { results, correctAnswers },
});

export const resetQuiz = () => ({
  type: RESET_QUIZ,
});
