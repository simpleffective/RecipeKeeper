import { createContext } from "react";

export const RecipesContext = createContext({
  recipes: [],
  onAdd() {},
});
