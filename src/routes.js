// src/routes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';  // Importing correctly
import Dashboard from './components/Dashboard';  // Importing correctly

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Login />} />  // Using correct components here
    <Route path="/dashboard" element={<Dashboard />} />
  </Routes>
);

export default AppRoutes;

