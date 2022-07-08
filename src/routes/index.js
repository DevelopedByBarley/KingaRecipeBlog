const express = require('express');
const router = express.Router();
const RecipeModel = require('../database/models/recipeModel')

router.get('/', async (req,res) => {
  await new RecipeModel()
  res.render('index.ejs')
})

module.exports = router;