//requires
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const taskRouter = require('./routes/taskrouter.js');


//GLOBAL
const PORT = process.env.PORT || 5000;
const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017/task';

//uses
app.use(bodyParser.json()); // AngularJS
app.use('/task', taskRouter);
app.use(express.static('server/public'));

// CONNECT TO MONGO
mongoose.connect(mongoURI, { useNewUrlParser: true });
mongoose.connection.on('open', () => {
    
    console.log('MONGO INITIALIZD');
});
mongoose.connection.on('error', (error) => {
    console.log('ERROR', error);
});

// spin up server
app.listen(PORT, () => {
    console.log('server up on:', PORT);
}) // end spin up server