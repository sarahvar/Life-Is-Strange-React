import { createStore } from 'redux';
import rootReducer from './quizReducer';

// Fonction pour charger l'état depuis localStorage
const loadStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('quizState');
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    console.error('Could not load state', e);
    return undefined;
  }
};

const preloadedState = loadStateFromLocalStorage();

const store = createStore(
  rootReducer,
  preloadedState, // initial state from localStorage
);

export default store;
