const epxress = require('express');
const router = epxress.Router()

//import data
const { about } = require('../data/data');

//GET /about
router.get('/', (req, res) =>
    res.status(200).json(about)
);

module.exports = router;
