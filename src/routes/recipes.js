const express = require('express');
const router = express.Router();

const RecipeModel = require('../database/models/recipeModel')


router.get('/admin', (req, res) => {
  res.render('error/oops', { errorMessage: "Sajnos az admin felület még nem elérhető!" });
})


//RECIPES REQUESTS

router.get('/', async (req, res) => {
  try {
    let recipes = await RecipeModel.find({});
    res.render('recipes/index', { recipes: recipes })
  } catch (error) {
    console.log(error)
    res.render('error/oops', { errorMessage: "Sajnos a receptgyüjtemény még nem elérhető!" })
  }
})

router.get('/new', (req, res) => {
  res.render('recipes/new')
})

router.get('/recipe/:id', async (req, res) => {
  let id = req.params.id;
  let recipe = await RecipeModel.findOne({
    _id: id
  })

  res.render('recipes/recipe', { recipe: recipe })
})

router.post('/new', async (req, res) => {
  try {
    const newRecipe = await new RecipeModel({
      title: req.body.title,
      portion: req.body.portion,
      cost: req.body.cost,
      difficult: req.body.difficult,
      preparationTime: req.body.preparationTime,
      cookDuration: req.body.cookDuration,
      fullTime: Number(req.body.preparationTime) + Number(req.body.cookDuration),
      ingredients: req.body.ingredients,
      comment: req.body.comment,
      steps: req.body.steps,
    })

    console.log(newRecipe);

    await newRecipe.save();
    res.redirect('/recipes')
  } catch (error) {
    console.error(error);
    res.render('error/oops', { errorMessage: "Valami lemaradt! Tölts ki minden mezőt!" });
  }
})



router.delete('/recipe/:id', async (req, res) => {
  try {
    let id = req.params.id;
    await RecipeModel.deleteOne({
      _id: id
    })
    res.redirect('/')
  } catch (error) {
    console.log(error);
  }
})


module.exports = router;