import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react"

export default function City() {
  return (
    <Box borderRadius="4px" overflow="hidden">
      <Image 
        src="/londres.png" 
        alt="Londres ponte"
        h="170px"
        w="100%"
        />
      <Flex 
        p="6"
        align="center"
        justify="space-between"
        bg="white"
        border="1px"
        borderColor="yellow.300"
        borderTop="0"
      >
        <Flex direction="column">
          <Heading fontSize="xl" fontWeight="500">
            Londres
          </Heading>
          <Text 
            mt="3"
            fontSize="md"
          >
            Reino Unido
          </Text>
        </Flex>
        <Image 
          src="/bandLondres.png" 
          alt="Londres bandeira"
          w="30px"
          h="30px"
          borderRadius="50%"
          objectFit="cover"
        />
      </Flex>
    </Box>
  )
}