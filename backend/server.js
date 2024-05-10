const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();

// Database connection
const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to DB");
  } catch (error) {
    console.error("Error connecting to DB:", error);
  }
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// 404 route
app.use((req, res) => {
  res.status(404).send("404: Page not found");
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("500: Internal Server Error");
});

// Start the server
connectDb().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server listening at http://localhost:${process.env.PORT}`);
  });
});
