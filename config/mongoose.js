const mongoose = require('mongoose');

//Connecting to database
mongoose.connect('mongodb://localhost/todo_list_db');

const db = mongoose.connection;

//If error connecting to database
db.on('error', console.error.bind(console, 'Error connecting to database'));


//Once connected to database
db.once('open', function(){
    console.log('Successfully connected to the database');
});