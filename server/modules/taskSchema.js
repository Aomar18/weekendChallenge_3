const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TasklistSchema = new Schema({
    taskIn: { type: String } ,
    taskDone: {type: Boolean}
});  

module.exports = mongoose.model('taskList', TasklistSchema);