const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const postroutes = require("./routes/products.js");
const userroutes = require("./routes/users.js");

const app = express();

mongoose
  .connect(
    "mongodb://mongo:27017/"
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use("/api/products", postroutes);
app.use("/api/users", userroutes);

module.exports = app;
