const epxress = require('express');
const router = epxress.Router()

//import data
const { feedback } = require('../data/data');

//POST /feedback
router.post('/', (req, res) => { //creates new feedback with an id and a body for the feedback text
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

//PUT /feedback
router.put('/:id', (req, res) => {
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

//DELETE /feedback
router.delete('/:id', (req, res) => {
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

//GET /feedback
router.get('/', (req, res) => //get feedback data
    res.status(200).json(feedback)
);

module.exports = router;
