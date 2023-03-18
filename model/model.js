const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  Todo: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
});

const Todo = mongoose.model("Todo", TodoSchema);

module.exports = Todo;
