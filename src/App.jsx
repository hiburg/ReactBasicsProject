import { useState } from "react";
import { RecipePage } from "./pages/RecipePage";
import { data } from "./utils/data";
import { RecipeSearch } from "./components/RecipeSearch";
import { Box } from "@chakra-ui/react";

export const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState();

  return (
    <>
      <Box bg={"blue.400"} p={"3"}>
        {selectedRecipe ? (
          <RecipePage recipe={selectedRecipe} clickFn={setSelectedRecipe} />
        ) : (
          <RecipeSearch
            recipes={data.hits}
            clickFn={setSelectedRecipe}
          ></RecipeSearch>
        )}
      </Box>
    </>
  );
};
