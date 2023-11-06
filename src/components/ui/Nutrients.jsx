import { Flex, Text } from "@chakra-ui/react";

export const Nutrients = ({ recipe }) => {
  return (
    <>
      <Text fontSize={"sm"} fontWeight={"bold"} mt={5}>
        Total nutrients:
      </Text>

      <Flex wrap={"wrap"} columns={6} direction={"row"} gap={4}>
        <Flex columns={1} direction="column">
          <Text fontWeight={"semibold"} fontSize={"sm"}>
            {Math.floor(recipe.recipe.totalNutrients.ENERC_KCAL.quantity)}
          </Text>
          <Text fontWeight={"semibold"} fontSize={"xs"}>
            CALORIES
          </Text>
        </Flex>
        <Flex columns={1} direction="column">
          <Flex columns={2} direction="row">
            <Text fontWeight={"semibold"} fontSize={"sm"}>
              {Math.floor(recipe.recipe.totalNutrients.CHOCDF.quantity)}
            </Text>
            <Text fontWeight={"semibold"} fontSize={"sm"} ml={1}>
              {recipe.recipe.totalNutrients.CHOCDF.unit}
            </Text>
          </Flex>
          <Text fontWeight={"semibold"} fontSize={"xs"}>
            CARBS
          </Text>
        </Flex>
        <Flex columns={1} direction="column">
          <Flex columns={2} direction="row">
            <Text fontWeight={"semibold"} fontSize={"sm"}>
              {Math.floor(recipe.recipe.totalNutrients.PROCNT.quantity)}
            </Text>
            <Text fontWeight={"semibold"} fontSize={"sm"} ml={1}>
              {recipe.recipe.totalNutrients.PROCNT.unit}
            </Text>
          </Flex>
          <Text fontWeight={"semibold"} fontSize={"xs"}>
            PROTEIN
          </Text>
        </Flex>
        <Flex columns={1} direction="column">
          <Flex columns={2} direction="row">
            <Text fontWeight={"semibold"} fontSize={"sm"}>
              {Math.floor(recipe.recipe.totalNutrients.FAT.quantity)}
            </Text>
            <Text fontWeight={"semibold"} fontSize={"sm"} ml={1}>
              {recipe.recipe.totalNutrients.FAT.unit}
            </Text>
          </Flex>
          <Text fontWeight={"semibold"} fontSize={"xs"}>
            FAT
          </Text>
        </Flex>

        <Flex columns={1} direction="column">
          <Flex columns={2} direction={"row"} gap={1}>
            <Text fontWeight={"semibold"} fontSize={"sm"}>
              {Math.floor(recipe.recipe.totalNutrients.CHOLE.quantity)}
            </Text>
            <Text fontWeight={"semibold"} fontSize={"sm"} ml={1}>
              {recipe.recipe.totalNutrients.CHOLE.unit}
            </Text>
          </Flex>
          <Text fontWeight={"semibold"} fontSize={"xs"}>
            CHOLESTEROL
          </Text>
        </Flex>
        <Flex columns={1} direction="column">
          <Flex columns={2} direction={"row"} gap={1}>
            <Text fontWeight={"semibold"} fontSize={"sm"}>
              {Math.floor(recipe.recipe.totalNutrients.NA.quantity)}
            </Text>
            <Text fontWeight={"semibold"} fontSize={"sm"} ml={1}>
              {recipe.recipe.totalNutrients.NA.unit}
            </Text>
          </Flex>
          <Text fontWeight={"semibold"} fontSize={"xs"}>
            SODIUM
          </Text>
        </Flex>
      </Flex>
    </>
  );
};
