var mongoose = require("mongoose")
var Schema = mongoose.Schema

var IngredientSchema = new Schema({
  name: String,
  measurement: String,
  amount: Number,
})

var RecipeSchema = new Schema({
  name: String,
  servingSize: Number,
  cookTime: Number,
  instructions: String,
  ingredients: [IngredientSchema],
})

var Ingredient = mongoose.model("Ingredient", IngredientSchema)
var Recipe = mongoose.model("Recipe", RecipeSchema)

var pB = new Ingredient({
  name: "Peanut Butter",
  measurement: "Jar",
  amount: 1
})

var sugar = new Ingredient({
  name: "Confectioners Sugar",
  measurement: "Pound",
  amount: 1
})

var pBFudge = new Recipe({
  name: "Peanut Butter Fudge",
  servingSize: 48,
  cookTime: 80,
  instructuons: "Line an 8x8-inch baking dish with plastic wrap long enough to overhang the dish by several inches on each side. Place broken coating into a large glass microwave-safe bowl and melt on low power in microwave oven, about 5 minutes, stirring after every 30 seconds to 1 minute. When coating is smooth and creamy, stir peanut butter into coating until fudge is thoroughly combined. Spread fudge into the prepared baking dish. Refrigerate fudge until set, 1 to 2 hours. Lift fudge out of the pan using the plastic wrap for handles and slice into squares with a pizza cutter.",
  // ingredients: [pb, sugar]
})

pBFudge.ingredients.push(sugar)
pBFudge.ingredients.push(pB)

var gin = new Ingredient({
  name: "Gin",
  measurement: "Ounce",
  amount: 2
})

var vermouth = new Ingredient({
  name: "Dry Vermouth",
  measurment: "Ounce",
  amount: .5
})

var martini = new Recipe({
  name: "Martini",
  servingSize: 1,
  cookTime: 1,
  instructions: "Mix the two together and chug."
})

martini.ingredients.push(gin)
martini.ingredients.push(vermouth)

mongoose.connect("mongodb://localhost/recipies")

module.exports = mongoose
