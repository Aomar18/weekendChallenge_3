const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TasklistSchema = new Schema({
    taskIn: { type: String } 
});  

module.exports = mongoose.model('taskList', TasklistSchema);