let deleteRecipeBtn = document.querySelectorAll('.deleteRecipeBtn');

for (let deleteBtn of deleteRecipeBtn) {
  deleteBtn.addEventListener('click', async (event) => {
    let id = event.currentTarget.dataset.id;
    console.log(id);
    try {

      await fetch(`/recipes/recipe/${id}`, {
        method: 'DELETE',
      })
      window.location.assign('/recipes')


    } catch (error) {
      window.location.assign('/')
      console.log(error)
    }
  })
}

let ingredientsContainer = document.getElementById('ingredients-container')
let addIngredients = document.getElementById('addIngredients');
let ingredients = document.getElementById('ingredients')
addIngredients.addEventListener('click', (event) => {
  event.preventDefault();
  if (ingredients.value === '' || ingredients.value === null) {
    alert('A mező kitöltése kötelező!')
  } else {
    let clone = ingredients.cloneNode(true);
    clone.value = '';
    ingredientsContainer.appendChild(clone);
    
  }
})

let stepsContainer = document.getElementById('steps-container');
let steps = document.getElementById('steps');
let addSteps = document.getElementById('addSteps');

addSteps.addEventListener('click', (event) => {
  event.preventDefault();
  let clone = steps.cloneNode(true);
  clone.value = '';
  stepsContainer.appendChild(clone);
})
