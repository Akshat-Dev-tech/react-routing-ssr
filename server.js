const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
 
// Your existing App component (copy it here for now)
function App() {
    return React.createElement('div', null, 
      React.createElement('h1', null, 'Hello from Server!'),
      React.createElement('p', null, 'This was made on the server!')
    );
  }

  const app = express();


  // this is NOT your actual React app! This is just a simple hardcoded component that says "Hello from Server!".
  // we just setted up our server to render this component on the server side, and we will use this to test our server side rendering.
  app.get('/*', (req, res) => {
    let appString = '';
    try {
      appString = ReactDOMServer.renderToString(
        React.createElement(App)
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
        </body>
      </html>
    `);
  });
  
  
  


app.listen(3000,()=>{
    console.log('Server running on http://localhost:3000');
})