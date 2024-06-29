const express = require("express");
const todoModel = require("../Models/todoModel");
const router = express.Router();
router.delete("/api/task/delete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await todoModel.findByIdAndDelete(id);
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(400).send("error occured while deleting list");
  }
});

module.exports = router;
