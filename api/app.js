const express = require("express");
const app = express();

const port = 5000;

app.get('/', (req, res) => {
    res.send("hello from server")
})

// Listen on port 5000
app.listen(port, () => {
    console.log(`Server is booming on port 5000
Visit http://localhost:5000`);
});