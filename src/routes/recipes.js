const express = require('express');
const router = express.Router();

const RecipeModel = require('../database/models/recipeModel')

//Get methods

router.get('/', (req, res) => {
  res.render('index');
})
router.get('/admin', (req, res) => {
  res.render('error/oops');
})
router.get('/addRecipe', (req, res) => {
  res.render('partials/addRecipe')
})
router.get('/allRecipes', (req, res) => {
  res.render('error/oops', { errorMessage: "Sajnos a receptgyüjtemény még nem elérhető!" })
})



//Post methods


router.post('/sendRecipe', async (req, res) => {
  try {
    const newRecipe = await new RecipeModel({
      title: req.body.title,
      portion: req.body.portion,
      cost: req.body.cost,
      difficult: req.body.difficult,
      preparationTime: req.body.preparationTime,
      duration: req.body.duration,
      ingredient: req.body.ingredient,
      comment: req.body.comment,
      steps: req.body.steps,
    })
    await newRecipe.save();
    console.log(newRecipe);
    res.render('partials/allRecipes');
  } catch (error) {
    console.error(error);
    res.render('error/oops', { errorMessage: "Sajnos még nem tudsz hozzáadni receptet a gyüjteményedhez!"});
  }
})




module.exports = router;