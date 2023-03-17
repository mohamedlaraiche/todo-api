const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  Todo: {
    type: String,
    required: true,
  },
  Detail: {
    type: String,
  },  
});

const Todo = mongoose.model("Todo", TodoSchema);

module.exports = Todo;
