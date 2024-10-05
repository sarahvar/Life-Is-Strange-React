// src/redux/reducers/authReducer.js

const initialAuthState = {
  token: localStorage.getItem('token') || null, // Récupère le token depuis localStorage si disponible
};

const authReducer = (state = initialAuthState, action) => {
  switch (action.type) {
    case 'SET_AUTH': // Nouvelle action pour définir le token et l'userId
      return {
        ...state,
        token: action.payload.token,
      };
    case 'CLEAR_AUTH': // Action pour nettoyer le token et l'userId
      return {
        ...state,
        token: null,
      };
    default:
      return state;
  }
};

export default authReducer;
