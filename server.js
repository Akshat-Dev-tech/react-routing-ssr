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
        <head><title>SSR Example</title></head>
        <body>
          <div id="root">${appString}</div>
          <script src="/static/js/main.7be96c83.js"></script>
        </body>
      </html>
    `);
  });
  
  
  


app.listen(3000,()=>{
    console.log('Server running on http://localhost:3000');
})