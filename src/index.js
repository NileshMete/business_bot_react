import React from 'react';
import { createRoot } from 'react-dom/client'; // Use createRoot for React 18
import App from './App';
import './styles/styles.css'; // Import global styles here if not imported in App.js

const container = document.getElementById('root');
const root = createRoot(container); // Create a root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
