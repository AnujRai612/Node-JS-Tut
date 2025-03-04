const mongoose = require("mongoose");

const mongoURL = "mongodb://127.0.0.1:27017/hotels";
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
