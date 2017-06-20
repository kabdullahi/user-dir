const express = require('express');
const mustacheExpress = require('mustache-express');
const data = require('./data.js');

const app = express();
app.use(express.static("public"));

app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.set('view engine', 'mustache')


app.get("/site", function(req, res) {
  res.render("index", data);
});

app.listen(3000, function(){
  console.log("working");
});
