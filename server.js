const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'))

const routes = require('./routes');
app.use(routes)

app.listen(PORT, function () {
  console.log("now listening to port", PORT);
})