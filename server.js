const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");

// Importing router modules
let item = require("./router/items");

// Importing keys
const keys = require("./config/keys");

// Create express instance
const app = express();

// Body Parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Setting up static folder
app.use("/", express.static(path.join(__dirname, "public")));

// Connect to MongoDB
// mongoose
//   .connect(
//     keys.docker_mongo_url,
//     { useNewUrlParser: true }
//   )
//   .then(() => console.log("MongoDB Connected"))
//   .catch(err => console.log(err));

// const Item = require("./models/Items");

// Registering routes
app.use("/api/items", item);

// Serve index.html as default web page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const port = 3000;

app.listen(port, () => console.log(`Server started on port ${port}`));
