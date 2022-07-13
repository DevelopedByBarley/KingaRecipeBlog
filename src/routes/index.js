const express = require('express');
const router = express.Router();
const RecipeModel = require('../database/models/recipeModel')

router.get('/', async (req, res) => {
  await new RecipeModel()
  let latestRecipes = await RecipeModel.find({}).sort({ _id: -1 }).limit(5)
  console.log(latestRecipes)
  res.render('index', { latestRecipes: latestRecipes })
})

module.exports = router;