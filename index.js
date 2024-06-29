const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const getRoute = require("./routes/getRoute");
const postRoute = require("./routes/postRoute");
const updateRoute = require("./routes/updateRoute");
const deleteRoute = require("./routes/deleteRoute");
const findById = require("./routes/findbyidRoute");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
}
connectDB();
app.use(getRoute);
app.use(postRoute);
app.use(updateRoute);
app.use(deleteRoute);
app.use(findById);

const PORT = process.env.PORT || 2000;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
