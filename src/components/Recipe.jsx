import { useParams } from "react-router-dom";
import { RecipesContext } from "../store/recipes-context";
import { useContext } from "react";
import Hub from "./Hub";
import styles from "../styles/Recipe.module.css";

export default function Recipe() {
  const params = useParams();
  const RecipesCtx = useContext(RecipesContext);
  const recipes = RecipesCtx.recipes;

  const recipe = recipes.find((recipe) => recipe.id === params.id);
  if (!recipe) return <h1>Recipe Not Found!</h1>;

  return (
    <article className={styles.recipe}>
      <h1>{recipe.name}</h1>
      <p className={styles.description}>{recipe.description}</p>
      <h3>Ingridients</h3>
      <ul>
        {recipe.ingridients.map((ingridient, i) => (
          <li key={i}>
            <span>{ingridient}</span>
          </li>
        ))}
      </ul>
      <h3>Preperation</h3>
      <ol>
        {recipe.steps.map((step, i) => (
          <li key={i}>
            <p>{step}</p>
          </li>
        ))}
      </ol>
      <Hub recipe={recipe} />
    </article>
  );
}
