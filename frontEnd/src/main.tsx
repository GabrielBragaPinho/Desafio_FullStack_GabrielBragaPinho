import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

import App from './App.tsx';
import { ClientProvider } from './providers/ClientContext/ClientContext.tsx';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ClientProvider>
        <App />
      </ClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
