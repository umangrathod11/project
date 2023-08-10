import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import FormPage from './FormPage';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/form" element={<FormPage />} />
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </div>
  );
}





export default App;
