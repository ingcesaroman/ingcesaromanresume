import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App.tsx';
import App_es from './App_es.tsx';
import App_de from './App_de.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/es" element={<App_es />} />
        <Route path="/de" element={<App_de />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
