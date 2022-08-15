const express = require('express');
const port = 8000;

const app = express();

const db = require('./config/mongoose');
const Todo = require('./models/todo');

app.use('/', require('./routes'));

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('assets'));
app.use(express.urlencoded());




app.listen(port, function(err){
    if(err){
        console.log('Error in running the server', err);
        return;
    }

    console.log(`Server is running on port: ${port}`); 
})