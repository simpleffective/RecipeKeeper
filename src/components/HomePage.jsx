import RecipeGrid from "./RecipeGrid";
import ControlBar from "./ControlBar";

export default function HomePage({ recipes }) {
  return (
    <>
      <h1>Recipe Keeper</h1>
      <ControlBar />
      <RecipeGrid recipes={recipes} />
    </>
  );
}
