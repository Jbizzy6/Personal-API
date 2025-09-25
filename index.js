//TODO: re-write routes into thier own files

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
app.post('/feedback/', (req, res) => { //creates new feedback with an id and a body for the feedback text
      const { feedbackDetails } = req.body;

  // Check if feedback details field has been filled in
  if (!feedbackDetails || feedbackDetails.trim() === "") {
    return res.status(400).json({ error: "Message is required" });
  }
    
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
app.put('/feedback/:id', (req, res) => {
    const id = req.params.id;
    const updateFeedback = req.body;

    //validate that feedback exists
    if (feedback.id !== parseInt(id)) {
        return res.status(404).send("feedback does not exist");
    }

    //update feedback
    feedback = { ...feedback, ...updateFeedback };

    //respond
    res.status(200).json(feedback)
}
);

//GET endpoints
app.get('/', (req, res) => res.json(welcome));//get a welcome message

app.get('/about', (req, res) => //get about data
    res.status(200).json(about)
);

app.get('/projects', (req, res) => //get projects data
    res.status(200).json(projects)
);

app.get('/feedback', (req, res) => //get feedback data
    res.status(200).json(feedback)
);

//DELETE endpoints
app.delete('/feedback/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = feedback.findIndex(item => item.id === id);

    //check if id exists
    if (index === -1) {
        return res.status(404).send("data not found")
    }
    
    //remove feedback from the array
    feedback.splice(index, 1);

    //respond
    res.status(200).send("feedback successfully deleted");
}
);

//listen for port
app.listen(PORT, () =>
    console.log(`server is running on localhost ${PORT}`)
);