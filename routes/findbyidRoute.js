const express = require("express");
const todoModel = require("../Models/todoModel");
const router = express.Router();

router.get("/api/task/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await todoModel.findById(id);
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(400).send("error occured while fetching by id");
  }
});
module.exports = router;
