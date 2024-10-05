// src/redux/reducers/index.js
import { combineReducers } from 'redux';
import quizReducer from './quizReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  quiz: quizReducer,
  auth: authReducer, // Authentification distincte
});

export default rootReducer;
