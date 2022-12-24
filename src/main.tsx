import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '@fontsource/ibm-plex-sans/400.css';
import '@fontsource/ibm-plex-sans/600.css';
import './index.css';

if (
  localStorage.theme === 'dark' ||
    (
      !localStorage.theme &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
    )
) {
  document.documentElement.classList.add('dark');
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
