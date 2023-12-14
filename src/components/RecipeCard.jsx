import "../styles/RecipeCard.css";

export default function RecipeCard({ name }) {
  return (
    <div className="recipe-card">
      <h3>{name}</h3>
    </div>
  );
}
