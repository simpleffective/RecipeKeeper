import { useState } from "react";
import "./App.css";
import HomePage from "./components/HomePage";
import Recipe from "./components/Recipe";
import NewRecipe from "./components/NewRecipe";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RecipesContext } from "./store/recipes-context";

function App() {
  const [recipes, setRecipes] = useState([
    {
      id: "recipe0",
      name: "Chicken Lo Mein",
      description: "best chicken lo mein in town",
      ingredients: ["chicken", "lo", "mein"],
      steps: [
        "prepare the lo",
        "stir the mein",
        "cook the chicken",
        "a very very really really long long step of the process which requires many lines of text to explain this is so annoying",
      ],
    },
    {
      id: "recipe1",
      name: "Majadra",
      description: "",
      ingredients: [],
      steps: [],
    },
    {
      id: "recipe2",
      name: "Goulash",
      description: "",
      ingredients: [],
      steps: [],
    },
    {
      id: "recipe3",
      name: "Yprah",
      description: "",
      ingredients: [],
      steps: [],
    },
    {
      id: "recipe4",
      name: "Prasa",
      description: "",
      ingredients: [],
      steps: [],
    },
    {
      id: "recipe5",
      name: "Borsht",
      description: "",
      ingredients: [],
      steps: [],
    },
    {
      id: "recipe6",
      name: "Biscuit Cake",
      description: "",
      ingredients: [],
      steps: [],
    },
    {
      id: "recipe7",
      name: "Aba's Sufganiot",
      description: "",
      ingredients: [],
      steps: [],
    },
    {
      id: "recipe8",
      name: "Ima's Levivot",
      description: "",
      ingredients: [],
      steps: [],
    },
  ]);

  function handleAdd(recipe) {
    recipe.id = `recipe${recipes.length}`;
    setRecipes((recipes) => [...recipes, recipe]);
  }

  const router = createBrowserRouter([
    { path: "/", element: <HomePage recipes={recipes} /> },
    { path: "/recipes/:id", element: <Recipe /> },
    {
      path: "/recipes/new",
      element: <NewRecipe onAdd={handleAdd} />,
    },
  ]);

  return (
    <RecipesContext.Provider value={{ recipes: recipes }}>
      <RouterProvider router={router} />
    </RecipesContext.Provider>
  );
}

export default App;
