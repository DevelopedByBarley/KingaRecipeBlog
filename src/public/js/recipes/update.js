let title = document.getElementById('recipe-title');
let portion = document.getElementById('portion');
let cost = document.getElementById('cost');
let difficult = document.getElementById('difficult');
let preparationTime = document.getElementById('preparationTime');
let cookDuration = document.getElementById('cookDuration');
let comment = document.getElementById('comment');


let ingredientsContainer = document.getElementById('ingredients-container')
let addIngredients = document.getElementById('addIngredients');
let removeIngredients = document.getElementById('removeIngredients');
let ingredient = document.getElementById('ingredient')


let stepsContainer = document.getElementById('steps-container');
let steps = document.getElementById('step');
let addSteps = document.getElementById('addSteps');
let removeSteps = document.getElementById('removeSteps');

let updateRecipe = document.getElementById('update-recipe');



addIngredients.addEventListener('click', (event) => {
  event.preventDefault();
  let clone = ingredient.cloneNode(true);
  clone.value = '';
  ingredientsContainer.appendChild(clone);
})

removeIngredients.addEventListener('click', (event) => {
  event.preventDefault();
  ingredientsContainer.removeChild(ingredientsContainer.lastChild)
})



addSteps.addEventListener('click', (event) => {
  event.preventDefault();
  let clone = steps.cloneNode(true);
  clone.value = '';
  stepsContainer.appendChild(clone);
})

removeSteps.addEventListener('click', (event) => {
  event.preventDefault();
  stepsContainer.removeChild(stepsContainer.lastChild);
})

let ingredientsArray = [];
let stepsArray = [];

updateRecipe.addEventListener('click', async (event) => {

  let ingredients = document.querySelectorAll('input[name="ingredients"]');
  let steps = document.querySelectorAll('input[name="steps"]');
  let id = event.target.dataset.id;

  event.preventDefault();

  for (let ingredient of ingredients) {
    ingredientsArray.push(ingredient.value)
  }

  for (let step of steps) {
    stepsArray.push(step.value)
  }


  let newUpdateRecipe = {
    title: title.value,
    portion: portion.value,
    cost: cost.value,
    difficult: difficult.value,
    preparationTime: Number(preparationTime.value),
    cookDuration: Number(cookDuration.value),
    title: title.value,
    comment: comment.value,
    ingredients: ingredientsArray,
    steps: stepsArray,
  }



  try {
    await fetch(`/recipes/recipe/update/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newUpdateRecipe)
    })
    window.location.assign('/recipes')
  } catch (error) {
    window.location.assign('/')
    console.log(error);
  }


})

