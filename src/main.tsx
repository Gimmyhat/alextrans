import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import { StrapiProvider } from './context/StrapiContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StrapiProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrapiProvider>
  </StrictMode>
);
