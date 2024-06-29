const express = require("express");
const mongoose = require("mongoose");
const getRoute = require("./routes/getRoute");
const postRoute = require("./routes/postRoute");
const updateRoute = require("./routes/updateRoute");
const deleteRoute = require("./routes/deleteRoute");
const findById = require("./routes/findbyidRoute");
require("dotenv").config();
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

async function connectDB() {
  const uri = process.env.MONGO_URI;
  try {
    const result = await mongoose.connect(uri);
    console.log(`mongodb connected..`);
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
