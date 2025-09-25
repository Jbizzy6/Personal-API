//TODO: re-write routes into thier own files
//TODO: write GET method for posted feedback, possibly add searching by id, maybe add id searching for projects too
//TODO: write PUT method for updating feedback
//TODO: write DELETE method for feedback
//TODO: add input validation to the feedback POST

const express = require('express');

//create app and set port
const app = express();
const PORT = process.env.PORT || 3000;

//import data
const { welcome } = require('./src/data/data')
const { about } = require('./src/data/data');
const { projects } = require('./src/data/data');
const { feedback } = require('./src/data/data');

// Middleware to parse JSON requests
app.use(express.json());

//POST endpoints
app.post('/feedback', (req, res) => { //creates new feedback with an id and a body for the feedback text
    const newFeedback = {
        id: feedback.length + 1,
        name: req.body.name,
        feedbackDetails: req.body.feedbackDetails
    };

    feedback.push(newFeedback); //adds new feedback to the end of the feedback array
    res.status(201).json(newFeedback); //respond with json
}
);

//PUT endpoints

//GET endpoints
app.get('/', (req, res) => res.json(welcome));//get a welcome message

app.get('/about', (req, res) => //get about data
    res.status(201).json(about)
);

app.get('/projects', (req, res) => //get projects data
    res.status(201).json(projects)
);

app.get('/feedback', (req, res) =>
    res.status(201).json(feedback)
);

//DELETE endpoints

//listen for the server
app.listen(PORT, () => 
    console.log(`your server is running on port ${PORT}`)
);