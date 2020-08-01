const express = require("express");
const logger = require("morgan");
const mongoose = require('mongoose');
const routes = require("./routes");
//setting up Port
const PORT = process.env.PORT || 3000;
//Setting up app and model require

const app = express();
//activate logger
app.use(logger("dev"));
//activate express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//seperate public js out
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://wojeil:root1992@ds331548.mlab.com:31548/heroku_p8jkfm0w", { useNewUrlParser: true, useUnifiedTopology: true });

//use external routes folder 
app.use(routes)

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });