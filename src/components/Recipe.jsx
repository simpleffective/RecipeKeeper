import { useParams } from "react-router-dom";
import { RecipesContext } from "../store/recipes-context";
import { useContext } from "react";
import Hub from "./Hub";
import RecipeHeader from "./RecipeHeader";
import styles from "../styles/Recipe.module.css";
import RecipeBody from "./RecipeBody";

const records = [{ recipe_id: "recipe0" }];

export default function Recipe() {
  const params = useParams();
  const RecipesCtx = useContext(RecipesContext);
  const recipes = RecipesCtx.recipes;

  const recipe = recipes.find((recipe) => recipe.id === params.id);
  if (!recipe) return <h1>Recipe Not Found!</h1>;

  const record = records.filter((record) => record.recipe_id === recipe.id);
  const cooked_count = record.length;

  return (
    <article className={styles.recipe}>
      <RecipeHeader {...recipe} count={cooked_count} />
      <RecipeBody {...recipe} />
      <Hub recipe={recipe} />
    </article>
  );
}
