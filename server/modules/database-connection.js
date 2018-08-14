const mongoose = require('mongoose');

// Mongo Connection //
// process.env.MONGODB_URI will only be defined if you
// are running on Heroku
// use the string value of the environment variable
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/tasklist';

mongoose.connect(mongoURI, { useNewUrlParser: true });

mongoose.connection.on('connected', () => {
    console.log('Connected to mongo on', databaseUrl);
});

mongoose.connection.on('error', (error) => {
    console.log('error connecting to database', error);
});

module.exports = mongoose;