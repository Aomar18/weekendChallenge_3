const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TasklistSchema = new Schema({
    taskIn: { type: String } ,
    taskDone: {type: Boolean, default: true}
});  

module.exports = mongoose.model('taskList', TasklistSchema);