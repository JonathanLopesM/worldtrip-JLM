import { Flex, Heading, Popover, PopoverTrigger, Text, Icon, Button, PopoverContent, PopoverArrow, PopoverCloseButton, PopoverHeader, PopoverBody, IconButton } from "@chakra-ui/react";
import { RiInformationLine } from 'react-icons/ri'

export default function Infos(){
  return(
      <Flex
        align="center"
        justify="space-between"
      >
        <Flex 
          direction="column"
          justify="center"
          align={["flex-start", "flex-start", "center"]}
        >
          <Heading 
            fontSize={["2xl", "5xl"]}
            color="yellow.400"
            fontWeight="600"
          >50</Heading>
          <Text 
            fontWeight="600"
            fontSize={["md", "xl"]}
            color="gray.700"
          >países</Text>
        </Flex>
        <Flex 
          direction="column"
          justify="center"
          align={["flex-start", "flex-start", "center"]}
        >
          <Heading 
            fontSize={["2xl", "5xl"]}
            color="yellow.400"
            fontWeight="600"
          >60</Heading>
          <Text 
            fontWeight="600"
            fontSize={["md", "xl"]}
            color="gray.700"
          >línguas</Text>
        </Flex>
        <Flex 
          direction="column"
          justify="center"
          align={["flex-start", "flex-start", "center"]}
        >
          <Heading 
            fontSize={["2xl", "5xl"]}
            color="yellow.400"
            fontWeight="600"
          >27</Heading>
          <Flex >
          <Text 
            fontWeight="600"
            fontSize={["md", "xl"]}
            color="gray.700"
          >
            cidades +100
            </Text>
            <Popover>
              <PopoverTrigger>
                <Button>
                  <Icon 
                    cursor="pointer" 
                    as={RiInformationLine} 
                    mr="0"
                    p={ 0}
                    color="gray.400"
                    w={["10px", "16px"]}
                  />
                </Button>
              </PopoverTrigger>

              <PopoverContent bg="gray.700" color="yellow.400">
                <PopoverArrow bg="gray.700"/>
              <PopoverCloseButton />
                <PopoverBody fontWeight="400" fontSize="lg"
                >
                  París, Europa, Chile, Canadá, China</PopoverBody>
              </PopoverContent>
            </Popover>
            </Flex>
        </Flex>

        
      </Flex>
  )
}