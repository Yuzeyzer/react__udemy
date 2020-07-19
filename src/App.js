import React from 'react';
import Header from './components/header';
import Sidebar from './components/sidebar';
import './scss/index.scss';

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <Header />
    </div>
  );
}

export default App;
