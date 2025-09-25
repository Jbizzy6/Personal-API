const express = require('express');

//create app and set port
const app = express();
const PORT = 3000;

//import data
const { about } = require('./src/data/data');
const { projects } = require('./src/data/data');
const { feedback } = require('./src/data/data');

//endpoints
app.get('/about', (req, res) =>
    res.json(about)
);

app.get('/projects', (req, res) =>
    res.json(projects)
);

app.post('/feedback', (req, res) =>
    req.json(feedback)
);

//listen for the server
app.listen(PORT, () => 
    console.log(`your server is running on port ${PORT}`)
);