import {
  Heading,
  Flex,
  Card,
  Text,
  Image,
  CardBody,
  CardHeader,
} from "@chakra-ui/react";

export const RecipeListItem = ({ recipe, clickFn }) => {
  return (
    <>
      <Card
        borderRadius="xl"
        onClick={() => clickFn(recipe)}
        cursor="pointer"
        _hover={{ transform: "scale(1.01)" }}
        bgColor={"blue.100"}
      >
        <CardHeader h={200} p={0}>
          <Image
            src={recipe.recipe.image}
            alt={"Recipe"}
            borderRadius="5% 5% 0% 0%"
            boxSize={"100%"}
            objectFit={"cover"}
            objectPosition={"center"}
          />
        </CardHeader>

        <CardBody>
          <Text
            color="gray.500"
            textTransform={"uppercase"}
            textAlign={"center"}
            mb={2}
          >
            <strong>{recipe.recipe.mealType}</strong>
          </Text>
          <Heading size="md" textAlign={"Center"}>
            {recipe.recipe.label}
          </Heading>

          <Flex wrap="wrap" gap={2} mr={1} mt={3} justify={"center"}>
            {recipe.recipe.healthLabels.map((healthlabel) => {
              if (healthlabel === "Vegan" || healthlabel === "Vegetarian") {
                return (
                  <Text
                    key={healthlabel}
                    fontWeight={"bold"}
                    fontSize={"xs"}
                    backgroundColor={"purple.200"}
                    borderRadius={"md"}
                    border={"black"}
                    px={1}
                    textTransform={"uppercase"}
                  >
                    {healthlabel}
                  </Text>
                );
              }
            })}
          </Flex>

          {recipe.recipe.dietLabels.length > 0 && (
            <>
              <Flex wrap="wrap" gap={2} mr={1} mt={2} justify={"center"}>
                {recipe.recipe.dietLabels.map((dietlabel) => (
                  <Text
                    key={dietlabel}
                    fontWeight={"bold"}
                    fontSize={"xs"}
                    backgroundColor={"green.200"}
                    borderRadius={"md"}
                    border={"black"}
                    px={1}
                    textTransform={"uppercase"}
                  >
                    {dietlabel}
                  </Text>
                ))}
              </Flex>
            </>
          )}

          <Flex justify={"center"} mt={2}>
            <Text fontWeight={"semibold"}>Dish:</Text>
            <Text fontWeight={"bold"} ml={2}>
              {recipe.recipe.dishType}
            </Text>
          </Flex>

          {recipe.recipe.cautions.length > 0 && (
            <>
              <Text
                fontSize={"sm"}
                fontWeight={"semibold"}
                mt={2}
                textAlign={"center"}
              >
                Cautions:
              </Text>
              <Flex wrap="wrap" gap={2} mr={1} justify={"center"}>
                {recipe.recipe.cautions.map((caution) => (
                  <Text
                    key={caution}
                    fontWeight={"bold"}
                    fontSize={"xs"}
                    backgroundColor={"pink.200"}
                    borderRadius={"md"}
                    border={"black"}
                    px={1}
                    textTransform={"uppercase"}
                  >
                    {caution}
                  </Text>
                ))}
              </Flex>
            </>
          )}
        </CardBody>
      </Card>
    </>
  );
};
