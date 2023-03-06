import { Box, Image } from "@chakra-ui/react"

const SearchResult = ({ searchValue }) => {
  const parseBody = (body) => {
    return JSON.parse(body)
  }

  return (
    <Box>
      <Box padding={4} m="8" sx={{ columnCount: [1, 2, 3], columnGap: "8px" }}>
        {searchValue.map((item) => {
          return (
            <Image
              key={item.name}
              w="100%"
              h="100%"
              src={parseBody(item.body).mediasrc}
              alt={item.name}
              mb={2}
              display="inline-block"
            />
          )
        })}
      </Box>
    </Box>
  )
}

export default SearchResult
