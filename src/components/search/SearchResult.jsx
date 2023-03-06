import { Box, Image } from "@chakra-ui/react"
import Link from "next/link"

const SearchResult = ({ searchValue }) => {
  const parseBody = (body) => {
    return JSON.parse(body)
  }

  return (
    <Box>
      <Box padding={4} m="8" sx={{ columnCount: [1, 2, 3], columnGap: "8px" }}>
        {searchValue.map((item) => {
          return (
            <Link
              key={item.name}
              href={{
                pathname: `/image/${parseBody(item.body).mediaid}`,
                query: { id: parseBody(item.body).mediaid },
              }}
            >
              <Image
                w="100%"
                h="100%"
                src={parseBody(item.body).mediasrc}
                alt={item.name}
                mb={2}
                display="inline-block"
              />
            </Link>
          )
        })}
      </Box>
    </Box>
  )
}

export default SearchResult
