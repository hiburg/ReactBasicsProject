import { RecipeListItem } from "../components/RecipeListItem";

export const RecipeListPage = ({ recipes, clickFn }) => {
  return (
    <>
      {recipes.map((recipe) => (
        <RecipeListItem
          recipe={recipe}
          key={recipe.recipe.label}
          clickFn={clickFn}
        />
      ))}
    </>
  );
};
