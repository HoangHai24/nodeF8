const path = require("path");
const express = require("express");
// import express from 'express';
// import morgan from 'morgan';
var morgan = require("morgan");
// const handlebars = require('express-handlebars');
const { engine } = require("express-handlebars");

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));
//http logger
app.use(morgan("combined"));

//template engine
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

console.log("PATH: ", path.join(__dirname, "resources/views"));

app.get("/", (req, res) => {
  // res.send('Hello World!');
  res.render("home");
});
app.get("/news", (req, res) => {
  // res.send('Hello World!');
  res.render("news");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
