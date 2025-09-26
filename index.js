//import express, create app and set port
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

//import routes
const aboutRoute = require('./src/routes/about');
const projectsRoute = require('./src/routes/projects');
const feedbackRoutes = require('./src/routes/feedback');
const welcomeRoutes = require('./src/routes/welcome');

//use routes to serve endpoints
app.use('/', welcomeRoutes);
app.use('/about', aboutRoute);
app.use('/projects', projectsRoute);
app.use('/feedback', feedbackRoutes);

//listen for port
app.listen(PORT, () =>
    console.log(`server is running on localhost ${PORT}`)
);