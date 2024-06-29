const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  title: { type: String, required: ["title is required"] },
  disc: { type: String, required: ["discription is required"] },
});

const todoModel = mongoose.model("todos", todoSchema);

module.exports = todoModel;
