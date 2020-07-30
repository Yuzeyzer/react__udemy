import React from 'react';
import Header from './components/header';
import Sidebar from './components/sidebar/index.js';
import Hero from './components/home'
import './scss/index.scss';

function App() {
  return (
    <div className="container">
      <Sidebar />
      <Header />
      <Hero />
    </div>
  );
}

export default App;
