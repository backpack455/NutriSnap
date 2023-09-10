import React, {useState, useEffect} from "react";
import { Pressable, Text, Box, HStack, Spacer, Flex, Badge, Center, NativeBaseProvider } from "native-base";

function Example() {

  return <Box alignItems="center">
      <Pressable onPress={() => console.log("I'm Pressed")} rounded="8" overflow="hidden" borderWidth="1" borderColor="coolGray.300" maxW="96" shadow="3" bg="coolGray.100" p="5">
        <Box>
          <HStack alignItems="center">
            <Badge colorScheme="darkBlue" _text={{
            color: "white"
          }} variant="solid" rounded="4">
              Detected Nutritional Information
            </Badge>
            <Spacer />
          </HStack>
          <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="xl">
            Food Item 
          </Text>
          <Text mt="2" fontSize="sm" color="coolGray.700">
            Food Product
          </Text>
          <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="xl">
            Volume Detected
          </Text>
          <Text mt="2" fontSize="sm" color="coolGray.700">
            Unlock powerfull time-saving tools for creating email delivery and
            collecting marketing data
          </Text>
          <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="xl">
            Protein
          </Text>
          <Text mt="2" fontSize="sm" color="coolGray.700">
            Unlock powerfull time-saving tools for creating email delivery and
            collecting marketing data
          </Text>
          <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="xl">
            Vitamin D
          </Text>
          <Text mt="2" fontSize="sm" color="coolGray.700">
            Unlock powerfull time-saving tools for creating email delivery and
            collecting marketing data
          </Text>
          <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="xl">
            Fat
          </Text>
          <Text mt="2" fontSize="sm" color="coolGray.700">
            Unlock powerfull time-saving tools for creating email delivery and
            collecting marketing data
          </Text>
          <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="xl">
            Sugar
          </Text>
          <Text mt="2" fontSize="sm" color="coolGray.700">
            Unlock powerfull time-saving tools for creating email delivery and
            collecting marketing data
          </Text>
          <Flex>
            {/* <Text mt="2" fontSize={12} fontWeight="medium" color="darkBlue.600">
              Read More
            </Text> */}
          </Flex>
        </Box>
      </Pressable>
    </Box>;
}

    export default () => {
        return (
          <NativeBaseProvider>
            <Center flex={1} px="3">
                <Example />
            </Center>
          </NativeBaseProvider>
        );
    };