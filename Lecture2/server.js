const express = require("express");
const app = express();
const db = require("./db");
require("dotenv").config();
const bodyParser = require("body-parser");
app.use(bodyParser.json()); //req.body

const PORT = process.env.PORT || 3000;

app.get("/", function (req, res) {
  res.send("Hi, Welcome to our hotel Dost");
});

//Import the router files
const personRoutes = require("./routes/personRoutes.js");
const menuRoutes = require("./routes/menuRoutes.js");

//Use the routers
app.use("/person", personRoutes);
app.use("/menu", menuRoutes);

//Listening to port 3000
app.listen(PORT, () => {
  console.log("Server is live");
});
