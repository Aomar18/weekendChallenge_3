const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const taskRouter = require('./routes/task.router.js');
const PORT = process.env.PORT || 5000;
const Schema = mongoose.Schema;
const TaskSchema = new Schema({
    name: { type: String }
});
const tasks = mongoose.model('tasks', TaskSchema);

//USE

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); //ANGULAR

app.use(express.static('server/public'));
app.use('/tasks', taskRouter);

const mongoURI = 'mongodb://localhost:27017/tasks';
//CONNECTION

mongoose.connect(mongoURI, { useNewUrlParser: true });
mongoose.connection.on('open', () => {
    console.log('connected to Mongo');
});
mongoose.connection.on('error', (error) => {
    console.log('did not connect to Mongo', error);
});

//POST


//GET


//LISTEN
app.listen(PORT, () => {
    console.log('listening on port', PORT);
})