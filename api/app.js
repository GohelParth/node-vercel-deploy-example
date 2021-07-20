const app = require('express')();
const cors = require('cors');
const route = app.router();

app.use(cors());

app.use(app.json());

route.post('/home', function (req, res) {
    res.send("home route !")
})

module.exports = app;
