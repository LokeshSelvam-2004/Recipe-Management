let recipes = [];
let selectedRecipeIndex = -1;

function showForm() {
    document.getElementById("recipeForm").style.display = "block";
    document.getElementById("addRecipeButton").style.display = "none";
    document.getElementById("saveRecipeButton").style.display = "inline-block";
    document.getElementById("updateRecipeButton").style.display = "none";
}

function cancel() {
    document.getElementById("recipeForm").style.display = "none";
    document.getElementById("addRecipeButton").style.display = "inline-block";
    clearForm();
}

function clearForm() {
    document.getElementById("recipeName").value = "";
    document.getElementById("recipeDescription").value = "";
    selectedRecipeIndex = -1;
}

function saveRecipe() {
    let recipeName = document.getElementById("recipeName").value.trim();
    let recipeDescription = document.getElementById("recipeDescription").value.trim();

    if (recipeName !== "" && recipeDescription !== "") {
        let recipe = {
            name: recipeName,
            description: recipeDescription
        };

        recipes.push(recipe);
        displayRecipes();
        clearForm();
        document.getElementById("recipeForm").style.display = "none";
        document.getElementById("addRecipeButton").style.display = "inline-block";
    } else {
        alert("Please enter both recipe name and description!");
    }
}

function displayRecipes() {
    let recipeListElement = document.getElementById("recipeList");
    recipeListElement.innerHTML = "";

    recipes.forEach((recipe, index) => {
        let recipeItem = document.createElement("li");
        recipeItem.classList.add("recipe");

        let heading = document.createElement("h2");
        heading.textContent = recipe.name;

        let description = document.createElement("p");
        description.textContent = recipe.description;

        let editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.onclick = () => editRecipe(index);

        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-btn");
        deleteButton.onclick = () => deleteRecipe(index);

        recipeItem.appendChild(heading);
        recipeItem.appendChild(description);
        recipeItem.appendChild(editButton);
        recipeItem.appendChild(deleteButton);

        recipeListElement.appendChild(recipeItem);
    });
}

function editRecipe(index) {
    selectedRecipeIndex = index;
    let selectedRecipe = recipes[index];
    document.getElementById("recipeName").value = selectedRecipe.name;
    document.getElementById("recipeDescription").value = selectedRecipe.description;
    document.getElementById("recipeForm").style.display = "block";
    document.getElementById("addRecipeButton").style.display = "none";
    document.getElementById("saveRecipeButton").style.display = "none";
    document.getElementById("updateRecipeButton").style.display = "inline-block";
}

function updateRecipe() {
    let recipeName = document.getElementById("recipeName").value.trim();
    let recipeDescription = document.getElementById("recipeDescription").value.trim();

    if (recipeName !== "" && recipeDescription !== "") {
        let updatedRecipe = {
            name: recipeName,
            description: recipeDescription
        };

        recipes[selectedRecipeIndex] = updatedRecipe;
        displayRecipes();
        clearForm();
        document.getElementById("recipeForm").style.display = "none";
        document.getElementById("addRecipeButton").style.display = "inline-block";
    } else {
        alert("Please enter both recipe name and description!");
    }

}
function deleteRecipe(index) {
    recipes.splice(index, 1);
    displayRecipes();
}
document.addEventListener('DOMContentLoaded', function () {
    const stars = document.querySelectorAll('.star');
  
    stars.forEach(function (star) {
      star.addEventListener('click', function () {
        const value = parseInt(star.getAttribute('data-value'));
        setRating(value);
      });
    });
  
    function setRating(value) {
      const stars = document.querySelectorAll('.star');
      stars.forEach(function (star, index) {
        if (index < value) {
          star.classList.add('active');
        } else {
          star.classList.remove('active');
        }
      });
      document.getElementById('ratingValue').innerText = 'You rated ' + value + ' stars.';
    }
  });
  
  function submitRating() {
    const rating = document.getElementById('ratingValue').innerText;
    const comment = document.getElementById('commentBox').value;
  
    const submittedRatings = document.getElementById('submittedRatings');
    const newRating = document.createElement('div');
    newRating.innerHTML = '<strong>' + rating + '</strong><br>' + comment;
    submittedRatings.appendChild(newRating);
  }
  
