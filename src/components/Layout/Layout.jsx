import React from 'react';
import NavBar from './Navbar';
import Header from './Header';
import { Outlet } from 'react-router-dom'; // Importez Outlet depuis react-router-dom
import AudioPlayer from '../AudioPlayer';
const Layout = () => {
  return (
    <div>
      <Header />
      <NavBar />
      <AudioPlayer />
      <main>
        <Outlet /> {/* Outlet rendra le composant enfant de la route actuelle */}
      </main>
    </div>
  );
};

export default Layout;
