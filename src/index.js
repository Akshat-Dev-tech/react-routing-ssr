import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


//This is the entry point for the client-side application.
//on first load, the server sends a fully rendered HTML page.
//The client-side JavaScript then "hydrates" this HTML, attaching event listeners and making it interactive.
//on route change, the client-side React Router will take over and render the appropriate components without needing to go to the server.
//added this change because every req is going to the server, and the server is sending a fully rendered HTML page.
try {
    const rootElement = document.getElementById('root');
    
    if (rootElement) {
      console.log('Starting hydration...');
      
      hydrateRoot(
        rootElement,
        <BrowserRouter>
          <App />
        </BrowserRouter>
      );
      
      console.log('Hydration completed!');
    } else {
      console.error('Root element not found!');
    }
  } catch (error) {
    console.error('Hydration failed:', error);
  }

reportWebVitals();
