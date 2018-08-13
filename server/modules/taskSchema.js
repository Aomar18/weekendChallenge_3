const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    instruction: { type: String },
    complete: { type: Boolean, default: false }
});  

