//imports
import express from 'express';
import routes from `./src/routes`;

//run our routes into our app
routes(app);

//create app and set port
const app = express();
const PORT = 3000;



//endpoints
app.get('/', (req, res) =>
    res.send(`Node and express server is running on poert ${PORT}`)
);

app.listen(PORT, () => 
    console.log(`your server is running on port ${PORT}`)
);