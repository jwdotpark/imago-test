import {
  Box,
  Image,
  Text,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react"
import ImageInfoTable from "./ImageInfoTable"
import ImageLicense from "./ImageLicense"
const ImageInfo = ({ data }) => {
  console.log(data)
  return (
    <Box w="40vw" borderLeft="1px solid" borderColor="gray.200">
      <ImageLicense data={data} />
      <ImageInfoTable data={data} />
    </Box>
  )
}

export default ImageInfo
