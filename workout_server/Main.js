const express = require("express");
const app = express();
const port = 5000;
const path = require('path');

app.use(express.static(path.join(__dirname, "build")));

let data = { "squat": [10, 15, 20, 25], "bench": [30, 35, 40, 45], "deadlift": [50, 55, 60, 65] };
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get("/registerUser", (req, res) => {
    console.log("registering user");
    res.send(data);
})

app.listen(port);