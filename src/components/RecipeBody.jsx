import styles from "../styles/Recipe.module.css";

export default function RecipeBody({ ingredients, steps }) {
  return (
    <div className={styles.body}>
      <div>
        {" "}
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
        {" "}
        <h3>Directions:</h3>
        <ol className={styles.directions}>
          {steps.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}
