import { useState } from "react"
import { Box, Image } from "@chakra-ui/react"
import { useRouter } from "next/router"
import { searchById } from "../../helper/search-data"
import ImageBox from "../../components/image-page/ImageBox"

const ImagePage = () => {
  const router = useRouter()
  const { id } = router.query
  const res = searchById(id)

  return (
    <Box>
      <ImageBox data={res} />
    </Box>
  )
}

export default ImagePage
