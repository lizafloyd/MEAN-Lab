var express = require("express")
var hbs = require("express-handlebars")
var parser = require("body-parser")
var mongoose = require("./db")

var Ingredient = mongoose.model("Ingredient")
var Recipe = mongoose.model("Recipe")

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

app.get("/", function(req, res){
  Recipe.find({}).then(function(recipes){
    console.log(recipes);
  res.render("home", {
    recipes
  })
  })
})

app.get("/recipes/:name", function(req, res){
  Recipe.findOne({name: req.params.name}).then(recipe => {
    res.render("show", {
      recipe
    })
  })
})

app.listen(app.get("port"), function(){
  console.log("whatever");
})
