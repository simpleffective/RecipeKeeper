import styles from "../styles/Recipe.module.css";

export default function RecipeBody({ ingredients, directions }) {
  return (
    <div className={styles.body}>
      <div>
        <h3>Ingredients:</h3>
        <ul className={styles.ingredients}>
          {ingredients.map((ingredient, i) => (
            <li key={i}>
              <span>{ingredient}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Directions:</h3>
        <ol className={styles.directions}>
          {directions.map((directions, i) => (
            <li key={i}>{directions}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}
