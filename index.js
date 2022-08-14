const express = require('express');
const port = 8000;

const app = express();

app.use('/', require('./routes'));

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('assets'));


app.listen(port, function(err){
    if(err){
        console.log('Error in running the server', err);
        return;
    }

    console.log(`Server is running on port: ${port}`); 
})