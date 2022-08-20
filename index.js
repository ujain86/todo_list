const express = require('express');
const port = 8000;

const app = express();

const db = require('./config/mongoose');
const Todo = require('./models/todo');

//Routes middleware
app.use('/', require('./routes'));

//Setting EJS as view engine
app.set('view engine', 'ejs');
app.set('views', './views');

//Setting static files path
app.use(express.static('assets'));

//Connecting to the server
app.listen(port, function(err){
    if(err){
        console.log('Error in running the server', err);
        return;
    }

    console.log(`Server is running on port: ${port}`); 
})