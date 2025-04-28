import React from 'react'
import { createRoot } from 'react-dom/client' // ReactDOM yerine createRoot import edilmelidir
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

// createRoot kullanarak doğru şekilde render işlemi yapılır
const rootElement = document.getElementById('root')!;
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
