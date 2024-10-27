import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Layout from "./components/Layout/Layout";

// Importation des composants avec lazy loading pour optimiser le chargement initial
const HomePage = lazy(() => import("./pages/HomePage"));
const CharacterTable = lazy(() => import("./components/CharacterTable"));
const Max = lazy(() => import("./pages/Max"));
const Chloe = lazy(() => import("./pages/Chloe"));
const Rachel = lazy(() => import("./pages/Rachel"));
const Quiz = lazy(() => import("./pages/QuizPage"));
const MemoryGame = lazy(() => import("./pages/MemoryGame"));

// Fonction ErrorBoundary pour afficher une erreur proprement si un composant échoue au chargement
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error in lazy-loaded component:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div>Une erreur est survenue lors du chargement de la page.</div>;
    }
    return this.props.children;
  }
}

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <ErrorBoundary>
          <Suspense fallback={<div>Chargement en cours...</div>}>
            <Routes>
              {/* Route pour la HomePage */}
              <Route path="/" element={<HomePage />} />

              {/* Layout appliqué aux routes enfants */}
              <Route element={<Layout />}>
                <Route path="/personnages" element={<CharacterTable />} />
                <Route path="/max" element={<Max />} />
                <Route path="/chloe" element={<Chloe />} />
                <Route path="/rachel" element={<Rachel />} />
                <Route path="/quiz" element={<Quiz />} />
                <Route path="/memoryGame" element={<MemoryGame />} />
              </Route>
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </Router>
    </Provider>
  );
};

export default App;
