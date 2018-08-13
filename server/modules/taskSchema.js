const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    initial: { type: String },
    complete: { type: Boolean, default: false }
});  

module.exports = mongoose.model('List-Tasks', TaskSchema);