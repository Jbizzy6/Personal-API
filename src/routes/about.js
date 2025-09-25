const { about } = require('../data/data');

const aboutRoute = (app) => {
    app.aboutRoute('/about')

    .get((req, res) => {
        res.send(about)
    }
    )
};

module.exports = { aboutRoute };