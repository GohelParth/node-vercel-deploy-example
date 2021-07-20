const app = require('express')();
const route = app.router();

app.use(app.json());

app.get('/', function (req, res) {
    res.send("home route !")
})

module.exports = app;
