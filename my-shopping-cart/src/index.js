import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from 'react-router-dom';
import ShoppingCartProvider from './context/ShoppingCartContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <ShoppingCartProvider>
  
   <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>

 </ShoppingCartProvider> 
  
);

