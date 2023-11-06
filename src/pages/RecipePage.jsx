import {
  Flex,
  Text,
  Box,
  Image,
  Center,
  SimpleGrid,
  Button,
  Tooltip,
  Heading,
} from "@chakra-ui/react";
import { Nutrients } from "../components/ui/Nutrients";

export const RecipePage = ({ recipe, clickFn }) => {
  return (
    <>
      <Center>
        <Box
          width={["100%", "80%", "60%"]}
          height={["100%", "80%", "60%"]}
          bg={"blue.100"}
          borderRadius={"xl"}
        >
          <Tooltip label="Back to overview of all recipes">
            <Button
              onClick={() => clickFn()}
              fontWeight={"bold"}
              fontStyle={"italic"}
              textColor={"gray.500"}
              size={["xs", "sm", "md"]}
            >
              {"<< Back to overview"}
            </Button>
          </Tooltip>

          <Center flexDir="column">
            <Heading fontSize={["xl", "2xl"]} fontWeight={"bold"} pb={6} pt={6}>
              {recipe.recipe.label}
            </Heading>
          </Center>
          <Box w={"100%"} h={"300px"} mt={2} mb={4}>
            <Image
              src={recipe.recipe.image}
              alt={recipe.recipe.label}
              borderRadius={"sm"}
              boxSize={"100%"}
              objectFit={"cover"}
              objectPosition={"center"}
            ></Image>
          </Box>

          <SimpleGrid columns={2} spacing={5}>
            <Box p={4}>
              <Text
                fontSize={"sm"}
                fontWeight={"bold"}
                color={"gray.500"}
                textTransform={"uppercase"}
              >
                {recipe.recipe.mealType}
              </Text>

              <Flex mt={2}>
                <Text fontSize={"sm"} fontWeight={"bold"}>
                  Total cooking time:
                </Text>
                <Text fontSize={"sm"} fontWeight={"semibold"} pl={2}>
                  {recipe.recipe.totalTime}
                </Text>
                <Text fontSize={"sm"} fontWeight={"semibold"} pl={2}>
                  Minutes
                </Text>
              </Flex>

              <Flex mt={2}>
                <Text fontSize={"sm"} fontWeight={"bold"}>
                  Servings:
                </Text>
                <Text fontSize={"sm"} fontWeight={"semibold"} pl={2}>
                  {recipe.recipe.yield}
                </Text>
              </Flex>

              <Flex mt={2} flexDir={"column"}>
                <Text fontSize={"sm"} fontWeight={"bold"}>
                  Ingredients:
                </Text>
                <Flex columns={1} direction={"column"}>
                  {recipe.recipe.ingredientLines.map((ingredientLine) => (
                    <Text
                      key={ingredientLine}
                      fontWeight={"semibold"}
                      fontSize={"xs"}
                    >
                      {ingredientLine}
                    </Text>
                  ))}
                </Flex>
              </Flex>

              <Flex mt={2}>
                <Text fontSize={"sm"} fontWeight={"bold"}>
                  Dish type:
                </Text>
                <Text fontSize={"sm"} fontWeight={"semibold"} pl={2}>
                  {recipe.recipe.dishType}
                </Text>
              </Flex>
            </Box>

            <Box p={4}>
              <Text fontSize={"sm"} fontWeight={"bold"}>
                Health Labels:
              </Text>
              <Flex wrap="wrap" gap={2}>
                {recipe.recipe.healthLabels.map((healthlabel) => (
                  <Text
                    key={healthlabel}
                    fontWeight={"semibold"}
                    fontSize={"xs"}
                    backgroundColor={"purple.200"}
                    borderRadius={"md"}
                    px={1}
                    textTransform={"uppercase"}
                  >
                    {healthlabel}
                  </Text>
                ))}
              </Flex>

              {recipe.recipe.dietLabels.length > 0 && (
                <>
                  <Text fontSize={"sm"} fontWeight={"bold"} mt={2}>
                    Diet:
                  </Text>
                  <Flex wrap="wrap" gap={2} mr={1}>
                    {recipe.recipe.dietLabels.map((dietlabel) => (
                      <Text
                        key={dietlabel}
                        fontWeight={"semibold"}
                        fontSize={"xs"}
                        backgroundColor={"green.200"}
                        borderRadius={"md"}
                        px={1}
                        textTransform={"uppercase"}
                      >
                        {dietlabel}
                      </Text>
                    ))}
                  </Flex>
                </>
              )}

              {recipe.recipe.cautions.length > 0 && (
                <>
                  <Text fontSize={"sm"} fontWeight={"bold"} mt={2}>
                    Cautions:
                  </Text>
                  <Flex wrap="wrap" gap={2} mr={1}>
                    {recipe.recipe.cautions.map((caution) => (
                      <Text
                        key={caution}
                        fontWeight={"semibold"}
                        fontSize={"xs"}
                        backgroundColor={"pink.200"}
                        borderRadius={"md"}
                        px={1}
                        textTransform={"uppercase"}
                      >
                        {caution}
                      </Text>
                    ))}
                  </Flex>
                </>
              )}

              <Nutrients recipe={recipe}></Nutrients>
            </Box>
          </SimpleGrid>
        </Box>
      </Center>
    </>
  );
};
