import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Layout from "./components/Layout/Layout";
import ProtectedRoute from "./components/ProtectedRoute"; // Pour protéger les routes

// Importation des composants de manière paresseuse (lazy loading)
const HomePage = lazy(() => import("./pages/HomePage"));
const CharacterTable = lazy(() => import("./components/CharacterTable"));
const Max = lazy(() => import("./pages/Max"));
const Chloe = lazy(() => import("./pages/Chloe"));
const Rachel = lazy(() => import("./pages/Rachel"));
const Quiz = lazy(() => import("./pages/QuizPage"));
const UserForm = lazy(() => import("./components/UserForm"));
const Login = lazy(() => import("./components/Login"));
const Signup = lazy(() => import("./components/Signup"));
const Profile = lazy(() => import("./pages/Profil")); // Page protégée (Profil)

// Importation paresseuse des composants de gestion des sauces
const SauceList = lazy(() => import("./components/SauceList")); // Liste des sauces
const SingleSauce = lazy(() => import("./components/SingleSauce")); // Détails d'une sauce
const SauceForm = lazy(() => import("./components/SauceForm")); // Création/édition de sauce

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
              <Route path="/create-user" element={<UserForm />} />{" "}
              {/* Formulaire de création d'utilisateur */}
            </Route>

            {/* Route protégée (profil utilisateur) */}
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />

            {/* Routes publiques pour les utilisateurs */}
            <Route element={<Layout />}>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Route>
            {/* Routes pour la gestion des sauces */}
            <Route path="/sauces" element={<SauceList />} />
        <Route path="/sauces/:id" element={<SingleSauce />} />
        <Route path="/new-sauce" element={<SauceForm mode="create" />} />
        <Route path="/modify-sauce/:id" element={<SauceForm mode="modify" />} />
            {/* Route pour les erreurs 404 */}
            <Route path="*" element={<div>404 Not Found</div>} />
          </Routes>
        </Suspense>
      </Router>
    </Provider>
  );
};

export default App;
