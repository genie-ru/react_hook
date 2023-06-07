import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app-2.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App initialCount={0} />
  </React.StrictMode>
);
