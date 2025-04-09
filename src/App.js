// src/App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes';  // Make sure this import is correct

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;

