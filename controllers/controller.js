const Todo = require("../model/model");

const getTodos = async (req, res) => {
  try {
    const data = await Todo.find();
    res.status(200).json({ data });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const setTodo = async (req, res) => {
  const data = await Todo.create(req.body);
  res.status(201).json({ data });
};

const updateTodo = async (req, res) => {
  try {
    const data = await Todo.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ data });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteTodo = async (req, res) => {
  try {
    const data = await Todo.findByIdAndRemove(req.params.id);
    res.status(200).json({ message: "element deleted", data });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { getTodos, setTodo, updateTodo, deleteTodo };
