import { Box, Image, Text } from "@chakra-ui/react"

const ImageBox = ({ data }) => {
  console.log(typeof data)
  if (data) {
    return (
      <Box w="60vw">
        <Box m="8">
          <Box mt="2" mb="4">
            <Text>{data.caption}</Text>
          </Box>
          <Box>
            <Image src={data.mediasrc} alt={data.name} />
          </Box>
        </Box>
      </Box>
    )
  }
}

export default ImageBox
