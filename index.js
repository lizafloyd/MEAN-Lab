var mongoose = require("./db")
var express = require("express")
var hbs = require("express-handlebars")
var parser = require("body-parser")

var app = express()

app.set("port", process.env.PORT || 3001)
app.set("view engine", "hbs")
app.engine(".hbs", hbs({
  extname: ".hbs",
  partialsDir: "views/",
  layoutsDir: "views/",
  defaultLayout: "layout"
}))
app.use(parser.urlencoded({extended:true}))
// var db = mongoose.connection;
//
// mongoose.on('error', err => {
//   console.log(err);
// })
//
// mongoose.once('open', () => {
//   console.log("database has been connected!");
// })
app.get("/", function(req, res){
  res.render("home")
})



app.listen(app.get("port"), function(){
  console.log("whatever");
})
