const express = require("express");
const todoModel = require("../Models/todoModel");
const router = express.Router();

router.post("/api/task/create", async (req, res) => {
  const { title, disc } = req.body;

  try {
    const result = await todoModel.create({
      title: title,
      disc: disc,
    });
    const data = await result.save();
    res.json(data);
    console.log(data);
  } catch (error) {
    console.log(error);
    res.status(400).send("error occured while creating list");
  }
});

module.exports = router;
