import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';



// 1. User visits /about
//    ↓
// 2. Express server receives request
//    ↓
// 3. StaticRouter renders App with location="/about"
//    ↓
// 4. ReactDOMServer.renderToString() creates HTML
//    ↓
// 5. Server sends HTML + JavaScript bundle
//    ↓
// 6. Browser displays HTML (immediate content)
//    ↓
// 7. JavaScript loads and runs
//    ↓
// 8. BrowserRouter takes over routing
//    ↓
// 9. hydrateRoot() attaches React to existing DOM
//    ↓
// 10. App is now fully interactive



const ClientApp = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

hydrateRoot(document.getElementById('root'), <ClientApp />);