const Todo = require("../models/todo");


module.exports.home = function(req,res){
    // res.end('<h1>Hello</h1>');
    // res.render('home',{
    //     title: "Home"
    // })

    Todo.find({}, function(err, list){
        if(err){
            console.log('Error in fetching the contacts from db');
            return;
        };
        
        return res.render('home', {
            title : 'Todo List',
            todo_list : list,
        });
        
    });
}

module.exports.create = function(req,res){
    Todo.create({
        description: req.body.description,
        category: req.body.category,
    },function(err, newTask){
        if(err){
            console.log('Error in creating new task');
            return;
        };

        console.log('*****', newTask);
        return res.redirect('back');
    });
    // console.log(req.body.description);
    
}