import { Box, Center, Flex, Spacer } from "@chakra-ui/react"
import { Checkbox, CheckboxGroup } from "@chakra-ui/react"

const ImageLicense = ({ data }) => {
  return (
    <Box bg="gray.100" m="4">
      <Flex h="100" borderBottom="1px solid">
        <Center mx="4">
          <Checkbox defaultChecked>Checkbox</Checkbox>
          Basic
        </Center>
        <Spacer />
        <Center mx="4">asdf</Center>
      </Flex>
      <Flex h="100" borderBottom="1px solid">
        <Center mx="4">
          <Checkbox>Checkbox</Checkbox>
          Full
        </Center>
        <Spacer />
        <Center mx="4">asdf</Center>
      </Flex>
    </Box>
  )
}

export default ImageLicense
