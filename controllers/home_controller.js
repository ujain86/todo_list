const { findByIdAndDelete } = require("../models/todo");
const Todo = require("../models/todo");


//Home Function
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
        
        return res.render('home2', {
            title : 'Todo List',
            todo_list : list,
        });
        
    });
}

//Create Task function
module.exports.create = function(req,res){
    Todo.create({
        description: req.body.description,
        category: req.body.category,
        dueDate: req.body.due_date,
    },function(err, newTask){
        if(err){
            console.log('Error in creating new task');
            return;
        };

        console.log('*****', newTask);
        return res.redirect('back');
    });
    
};

//Delete task function
module.exports.delete = function(req,res){
    let id = req.query.id;
    Todo.findByIdAndDelete(id, function(err){
    if(err){
        console.log('Error in deleting task');
        return;
    }
        return res.redirect('back');
   });
};