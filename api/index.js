const app = require('express')();
const { v4 } = require('uuid');

app.get('/api', (req, res) => {
    res.send("hello")

});

app.get('/api/item/:slug', (req, res) => {
    const { slug } = req.params;
    res.send(`Item: ${slug}`);
});

module.exports = app;
