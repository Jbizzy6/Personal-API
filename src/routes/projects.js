const epxress = require('express');
const router = epxress.Router()

//import data
const { projects } = require('../data/data');

//GET /projects
router.get('/', (req, res) => //get projects data
    res.status(200).json(projects)
);

module.exports = router;
