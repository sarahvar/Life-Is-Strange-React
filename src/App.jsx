import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Layout from "./components/Layout/Layout";

// Importation des composants de manière paresseuse (lazy loading)
const HomePage = lazy(() => import("./pages/HomePage"));
const CharacterTable = lazy(() => import("./components/CharacterTable"));
const Max = lazy(() => import("./pages/Max"));
const Chloe = lazy(() => import("./pages/Chloe"));
const Rachel = lazy(() => import("./pages/Rachel"));
const Quiz = lazy(() => import("./pages/QuizPage"));

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {/* Route pour la HomePage */}
            <Route path="/" element={<HomePage />} />

            {/* Routes publiques pour les personnages */}
            <Route element={<Layout />}>
              <Route path="/personnages" element={<CharacterTable />} />
              <Route path="/max" element={<Max />} />
              <Route path="/chloe" element={<Chloe />} />
              <Route path="/rachel" element={<Rachel />} />
              <Route path="/quiz" element={<Quiz />} />
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </Provider>
  );
};

export default App;
