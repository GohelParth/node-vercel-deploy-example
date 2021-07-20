const app = require('express')();
const { v4 } = require('uuid');

app.get('/api', (req, res) => {
    const path = `/api/item/${v4()}`;

    res.send(`Hello! Go to item: <a href="${path}">${path}</a>`);
});

app.get('/api/item/:slug', (req, res) => {
    const { slug } = req.params;
    res.send(`Item: ${slug}`);
});

module.exports = app;
