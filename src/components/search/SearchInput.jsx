import {
  Box,
  Button,
  Center,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react"
import { CloseIcon } from "@chakra-ui/icons"

const SearchInput = () => {
  const CloseBtnClicked = () => {
    console.log("Close button clicked")
  }
  
  return (
    <Box bg="#F4F3F0" h="200" w="100%">
      <Center h="200">
        <InputGroup mx="8">
          <Input
            w="100%"
            bg="white"
            borderRadius="none"
            placeholder="Search.."
          />
          <InputRightElement color="gray.300" fontSize="1.2em">
            <Button size="xs" variant="ghost" onClick={CloseBtnClicked}>
              <CloseIcon />
            </Button>
          </InputRightElement>
        </InputGroup>
      </Center>
    </Box>
  )
}

export default SearchInput
