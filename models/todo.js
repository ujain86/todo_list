const mongoose = require('mongoose');

//Creating schema of database document
const todoSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
    },

    category: {
        type: String,
        required: true,
    },

    dueDate: {
        type: String,
        required: true,
    },
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;