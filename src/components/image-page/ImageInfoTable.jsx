import {
  Box,
  Text,
  Flex,
  Table,
  Tbody,
  Tr,
  Td,
  TableContainer,
} from "@chakra-ui/react"

const ImageInfoTable = ({ data }) => {
  console.log(data)
  return (
    <Box>
      <TableContainer>
        <Table variant="simple" as="kbd">
          <Tbody>
            <Tr>
              <Td>CREDIT</Td>
              <Td>{data.creator}</Td>
            </Tr>
            <Tr>
              <Td>IMAGE ID</Td>
              <Td>{data.mediaid}</Td>
            </Tr>
            <Tr>
              <Td>MAX SIZE</Td>
              <Td>
                {data.height} x {data.width} PIXELS
              </Td>
            </Tr>
            <Tr>
              <Td>DATE</Td>
              <Td>{data.creationdate}</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
      <Flex w="100%" mt="4">
        <Box w="600px" h="200px" as="kbd">
          <Text ml="6">INFO</Text>
        </Box>
        <Box as="kbd" ml="8">
          {data.caption}
        </Box>
      </Flex>
    </Box>
  )
}

export default ImageInfoTable
