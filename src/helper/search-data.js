import mockData from "../../public/data/mock-data.json"

export const searchData = (keyWord) => {
  let result = []
  mockData.item[1].response.map((item) => {
    const parsedBody = JSON.parse(item.body)
    const searchObject = parsedBody.caption
    const searchKeyword = keyWord.search

    if (searchObject.toLowerCase().includes(searchKeyword.toLowerCase())) {
      result.push(item)
    }
  })
  return result
}
