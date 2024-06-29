const express = require("express");
const todoModel = require("../Models/todoModel");
const router = express.Router();

router.put("/api/task/update/:id", async (req, res) => {
  const { id } = req.params;
  const { title, disc } = req.body;
  try {
    const updatedResult = await todoModel.findByIdAndUpdate(
      id,
      { title: title, disc: disc },
      { new: true }
    );
    res.json(updatedResult);
  } catch (error) {
    console.log(error);
    res.status(400).send("error in updating");
  }
});

module.exports = router;
