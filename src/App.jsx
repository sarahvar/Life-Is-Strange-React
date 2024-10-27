import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Layout from './components/Layout/Layout';
import { MemoryGameProvider } from './context/MemoryGameContext';

// Import des pages avec Lazy loading
const HomePage = lazy(() => import('./pages/HomePage'));
const CharacterTable = lazy(() => import('./components/CharacterTable'));
const Max = lazy(() => import('./pages/Max'));
const Chloe = lazy(() => import('./pages/Chloe'));
const Rachel = lazy(() => import('./pages/Rachel'));
const Quiz = lazy(() => import('./pages/QuizPage'));
const MemoryGame = lazy(() => import('./pages/MemoryGame'));
const ErrorPage = lazy(() => import('./pages/ErrorPage')); // Import de la page d'erreur 404

const App = () => {
  return (
    <Provider store={store}>
      <MemoryGameProvider>
        <Router>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route element={<Layout />}>
                <Route path="/personnages" element={<CharacterTable />} />
                <Route path="/max" element={<Max />} />
                <Route path="/chloe" element={<Chloe />} />
                <Route path="/rachel" element={<Rachel />} />
                <Route path="/quiz" element={<Quiz />} />
                <Route path="/memoryGame" element={<MemoryGame />} />
              </Route>
              {/* Route pour capturer toutes les autres URL non définies */}
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </Suspense>
        </Router>
      </MemoryGameProvider>
    </Provider>
  );
};

export default App;
