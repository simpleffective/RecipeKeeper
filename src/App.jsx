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
      ingridients: ["chicken", "lo", "mein"],
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
      ingridients: [],
      steps: [],
    },
    {
      id: "recipe2",
      name: "Goulash",
      description: "",
      ingridients: [],
      steps: [],
    },
    {
      id: "recipe3",
      name: "Yprah",
      description: "",
      ingridients: [],
      steps: [],
    },
    {
      id: "recipe4",
      name: "Prasa",
      description: "",
      ingridients: [],
      steps: [],
    },
    {
      id: "recipe5",
      name: "Borsht",
      description: "",
      ingridients: [],
      steps: [],
    },
    {
      id: "recipe6",
      name: "Biscuit Cake",
      description: "",
      ingridients: [],
      steps: [],
    },
    {
      id: "recipe7",
      name: "Aba's Sufganiot",
      description: "",
      ingridients: [],
      steps: [],
    },
    {
      id: "recipe8",
      name: "Ima's Levivot",
      description: "",
      ingridients: [],
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
