import { useState } from "react"
import Head from "next/head"
import Image from "next/image"
import Layout from "../components/global/layout"
import SearchBox from "../components/search/SearchBox"
import SearchResult from "../components/search/SearchResult"

export default function Home() {
  const [searchValue, setSearchValue] = useState([])

  return (
    <>
      <Head>
        <title>Imago Test</title>
        <meta name="description" content="Imago Coding Test Demo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
        <SearchResult searchValue={searchValue} />
      </Layout>
    </>
  )
}
