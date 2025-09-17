require('@babel/register');
const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const { StaticRouter } = require('react-router-dom/server');
const path = require('path');
// Import your actual React app
const App = require('./src/App').default;



  const app = express();

  // Serve only static assets (CSS, JS, images) but NOT index.html
  app.use('/static', express.static(path.join(__dirname, 'build/static')));
  app.use('/favicon.ico', express.static(path.join(__dirname, 'build/favicon.ico')));
  app.use('/logo192.png', express.static(path.join(__dirname, 'build/logo192.png')));
  app.use('/manifest.json', express.static(path.join(__dirname, 'build/manifest.json')));



  // this is NOT your actual React app! This is just a simple hardcoded component that says "Hello from Server!".
  // we just setted up our server to render this component on the server side, and we will use this to test our server side rendering.
  app.get('/*', (req, res) => {
    let appString = '';
    const currentUrl = req.url;
    console.log("Current URL:", currentUrl);
    try {
      appString = ReactDOMServer.renderToString(
        React.createElement(
          StaticRouter,
          { location: currentUrl },
          React.createElement(App)
        )
      );
    } catch (err) {
      console.error('SSR render error:', err);
      res.status(500).send(`<pre>${err.stack}</pre>`);
      return;
    }
  
    res.send(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>SSR Example</title>
          <link href="/static/css/main.f855e6bc.css" rel="stylesheet">
        </head>
        <body>
          <div id="root">${appString}</div>
          <script src="/static/js/main.1fa23025.js"></script>
        </body>
      </html>
    `);
  });
  
  
  


app.listen(3000,()=>{
    console.log('Server running on http://localhost:3000');
})


// Stage 1: The Server (What happens first)

// A user requests a page from your website.
// Your Node.js server (server.js) gets the request.
// The server uses import App from './src/App'; to load your React components in its own memory.
// It calls ReactDOMServer.renderToString(<App />). This runs your React code (including the App component you selected) on the server and generates a plain HTML string of your page. This HTML is just a snapshot; it has no interactivity, no onClick handlers, etc.
// The server sends this HTML string to the browser, but it also includes the line <script src="/static/js/main.1fa23025.js"></script>.
// Result of Stage 1: The browser quickly receives and displays a fully-rendered, but static, non-interactive page.

// Stage 2: The Browser (What happens second)

// The browser displays the HTML it received from the server.
// It then sees the <script> tag and downloads the main.1fa23025.js file. This file contains all the same React code (your App component, etc.) but compiled for the browser.
// The browser runs this script. The script calls hydrateRoot.
// Hydration is the key step: React attaches itself to the existing HTML that the server sent. It doesn't re-create the HTML; it just attaches all the event listeners and state, making the static page a fully interactive Single-Page Application.
// In short:

// Server (renderToString): Creates the initial visual structure (HTML) for a fast first-load experience.
// Browser (<script> bundle): Adds the brain and interactivity (JavaScript) to that structure.
// Both use the same App.jsx source code, but for two different purposes at two different times.