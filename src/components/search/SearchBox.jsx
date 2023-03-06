import { Box } from "@chakra-ui/react"
import SearchInput from "./SearchInput"

const SearchBox = ({ searchValue, setSearchValue }) => {
  return (
    <Box bg="#F4F3F0" h="200">
      <SearchInput searchValue={searchValue} setSearchValue={setSearchValue} />
    </Box>
  )
}

export default SearchBox
