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

// mongoose.connect(process.env.MONGODB_URI || "", { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout" , { useNewUrlParser: true, useUnifiedTopology: true });
//use external routes folder 
app.use(routes)

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });
  