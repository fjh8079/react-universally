function renderDefaultLayout(html, preloadedState) {
  return `
    <!doctype html>
    <html>
      <head>
        <title>React Universally</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <link type="text/css" rel="stylesheet" href="/assets/css/normalize.css" />
      </head>
      <body>
        <div id="app-mount-point">${html}</div>
        <script>
          window.__REDUX_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\x3c')}
        </script>
        <script src="/build/bundle.js"></script>
      </body>
    </html>
  `;
}

module.exports = {
  renderDefaultLayout,
};
