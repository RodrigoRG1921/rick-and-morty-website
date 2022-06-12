const Api = (() => {
  const apiBaseUrl = 'https://rickandmortyapi.com/api'

  const getLocationsByPagination = async ({
    page
  }) => {
    try {
      const response = await fetch(`${apiBaseUrl}/location?page=${page}`)
      return await response.json()
    } catch (error) {
      console.error(error)
      return false
    }
  }

  return {
    getLocationsByPagination
  }
})()

export default Api
