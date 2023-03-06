import { useState } from "react"
import { Flex } from "@chakra-ui/react"
import Layout from "../../components/global/layout"
import { useRouter } from "next/router"
import { searchById } from "../../helper/search-data"
import ImageBox from "../../components/image-page/ImageBox"
import ImageInfo from "../../components/image-page/ImageInfo"

const ImagePage = () => {
  const router = useRouter()
  const { id } = router.query
  const res = searchById(id)

  return (
    <Layout>
      <Flex>
        <ImageBox data={res} />
        <ImageInfo data={res} />
      </Flex>
    </Layout>
  )
}

export default ImagePage
