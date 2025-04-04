import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Загрузка переменных окружения из файла env-config.js при запуске через Docker
if (window.env) {
  console.log('Загружены переменные окружения из Docker');
  Object.keys(window.env).forEach(key => {
    import.meta.env[key] = window.env[key];
  });
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
) 