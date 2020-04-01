const express = require("express");
const app = express();
const mongoose = require ("mongoose");
const PORT = process.env.PORT || 3000;

app.use(express.static('public'))


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

const routes = require('./routes');
app.use(routes)

app.listen(PORT, function () {
  console.log("now listening to port", PORT);
})