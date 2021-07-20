const app = require('express')();
const route = app.router();


app.use(app.json());

route.post('/home', function (req, res) {
    res.send("home route !")
})

module.exports = app;
