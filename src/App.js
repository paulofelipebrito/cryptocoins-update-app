import React from 'react';

import './App.css';
import { Navbar } from './components';

const App = () => (
  <div className="app">
    <div className="navbar">
      <Navbar />
    </div>
    <div className="main" />
    <div className="footer" />
  </div>
);

export default App;
