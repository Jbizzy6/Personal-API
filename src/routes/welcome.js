const epxress = require('express');
const router = epxress.Router()

const { welcome } = require('../data/data');

//GET /
router.get('/', (req, res) => res.json(welcome));//get a welcome message

module.exports = router;
