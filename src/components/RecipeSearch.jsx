import { useState } from "react";
import { RecipeListPage } from "../pages/RecipeListPage";
import { SimpleGrid, Center, Flex, Input, Text } from "@chakra-ui/react";

export const RecipeSearch = ({ recipes, clickFn }) => {
  const [searchField, setSearchField] = useState("");

  const matchedRecipes = recipes.filter((recipe) => {
    return recipe.recipe.label
      .toLowerCase()
      .includes(searchField.toLowerCase());
  });

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };

  return (
    <>
      <Center>
        <Flex flexDir={"column"}>
          <Text
            textAlign={"Center"}
            pt={3}
            pb={3}
            fontSize={["xl", "2xl"]}
            color={"white"}
          >
            <strong>Winc Recipe Checker:</strong>
          </Text>
          <Input
            placeholder="Search for a recipe"
            textAlign={"left"}
            backgroundColor={"white"}
            textColor={"gray.800"}
            fontWeight={"semibold"}
            onChange={handleChange}
            w={[250, 400, 500]}
            mb={8}
          ></Input>
        </Flex>
      </Center>

      <SimpleGrid columns={["1", "2", "4"]} gap={8}>
        <RecipeListPage
          clickFn={clickFn}
          recipes={matchedRecipes}
        ></RecipeListPage>
      </SimpleGrid>
    </>
  );
};
