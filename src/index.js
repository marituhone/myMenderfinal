import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';

// import { Provider } from 'react-redux';
import { AuthContext } from './providers/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        
          <App />
        
 
  </React.StrictMode>
);
reportWebVitals();