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

  const getLocationById = async ({
    id
  }) => {
    try {
      const response = await fetch(`${apiBaseUrl}/location/${id}`)
      return await response.json()
    } catch (error) {
      console.error(error)
      return false
    }
  }

  const getMultipleCharacters = async ({
    ids
  }) => {
    try {
      const response = await fetch(`${apiBaseUrl}/character/${ids}`)
      return await response.json()
    } catch (error) {
      console.error(error)
      return false
    }
  }

  return {
    getLocationsByPagination,
    getLocationById,
    getMultipleCharacters
  }
})()

export default Api
