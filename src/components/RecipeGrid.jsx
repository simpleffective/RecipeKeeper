import { Link } from "react-router-dom";
import RecipeCard from "./RecipeCard";

export default function Grid({ recipes }) {
  return (
    <div id="grid">
      {recipes.map((recipe) => (
        <Link key={recipe.id} to={`recipes/${recipe.id}`}>
          <RecipeCard name={recipe.name} />
        </Link>
      ))}
    </div>
  );
}
