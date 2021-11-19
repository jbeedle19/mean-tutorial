require('dotenv').config();
require('./users');
const mongoose = require('mongoose');
const dbURI = 'mongodb+srv://jbeedle:<password>@cluster0.noh2c.mongodb.net/mean_tutorial?retryWrites=true&w=majority';

// Below commented code is deprecated and should be removed
//mongoose.set('useCreateIndex', true);
mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${dbURI}`);
});
mongoose.connection.on('error', (err) => {
    console.log(`Mongoose connection error: ${err}`);
});
mongoose.connection.on(`disconnected`, () => {
    console.log('Mongoose disconnected');
});