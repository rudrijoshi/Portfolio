import React from 'react';
import App from './App';
import '../src/style/style.css';
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,

);