import React from 'react';
import Header from './components/header';
import Sidebar from './components/sidebar';
import './scss/index.scss';

function App() {
  return (
    <div>
      <Sidebar />
      <Header />
    </div>
  );
}

export default App;
