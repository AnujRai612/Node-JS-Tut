const mongoose = require("mongoose");
require("dotenv").config();
const PORT = process.env.PORT || 3000;

// const mongoURL = process.env.local_db_url;
const mongoURL = process.env.online_url;
mongoose.set("strictQuery", false);

mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("connected", () => {
  console.log("Connected to MongoDB server");
});

db.on("error", (err) => {
  console.log("Connected to MongoDB server", err);
});

db.on("disconnected", () => {
  console.log("Disconnected to MongoDB server");
});

module.exports = db;
