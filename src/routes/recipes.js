const express = require('express');
const router = express.Router();

const RecipeModel = require('../database/models/recipeModel')

//Get methods

router.get('/', (req, res) => {
  res.render('index');
})

router.get('/recipes', async (req,res) => {
  try {
    let recipes = await RecipeModel.find({});
    res.render('recipes/index', {recipes: recipes})
  } catch (error) {
    console.log(error)
    res.render('error/oops', { errorMessage: "Sajnos a receptgyüjtemény még nem elérhető!" })
  }
})

router.get('/admin', (req, res) => {
  res.render('error/oops', {errorMessage: "Sajnos az admin felület még nem elérhető!" });
})
router.get('/addRecipe', (req, res) => {
  res.render('recipes/new')
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
    let recipes = await RecipeModel.find({});
    res.render('recipes/index', {recipes: recipes});
  } catch (error) {
    console.error(error);
    res.render('error/oops', { errorMessage: "Sajnos még nem tudsz hozzáadni receptet a gyüjteményedhez!"});
  }
})




module.exports = router;