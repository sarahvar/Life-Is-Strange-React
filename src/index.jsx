import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx'; // Assurez-vous que le chemin est correct
import './index.css'; // Assurez-vous que le chemin est correct
import '../src/components/CharacterTable.css';
import '../src/pages/Chloe.css'

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

