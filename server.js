const next = require('next');
const routes = require('./routes.js');
const PORT = parseInt(process.env.PORT, 10) || 3000;
const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handler = routes.getRequestHandler(app);

const express = require('express');

app.prepare().then(() => {
    express()
    .use(handler)
    .listen(PORT, () => process.stdout.write(`Point Your Browser To: http://localhost:${PORT}\n`))
});

