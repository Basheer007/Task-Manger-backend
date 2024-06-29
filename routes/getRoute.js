const express = require("express");
const todoModel = require("../Models/todoModel");
const router = express.Router();

router.get("/api/task", async (req, res) => {
  try {
    const result = await todoModel.find();
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(400).send("error occured while fetching db");
  }
});

module.exports = router;
