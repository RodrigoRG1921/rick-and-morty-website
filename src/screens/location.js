import React, {
  useEffect,
  useState
} from 'react'
import {
  Grid
} from '@mui/material'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

import Api from '../lib/api'

import BaseLayout from '../components/layout/base'
import LocationCard from '../components/card/location'
import CharacterCard from '../components/card/character'

const subtractIdFromUrl = url => url.split('/').pop()

const LocationScreen = () => {
  const { id } = useParams()

  const [location, setLocation] = useState({})
  const [residents, setResidents] = useState([])
  const [isFetching, setIsFetching] = useState(true)

  useEffect(() => {
    const fetchApi = async () => {
      const response = await Api.getLocationById({ id })
      setLocation(response)

      const ids = response.residents.reduce((accumulator, residentUrl) =>
        `${accumulator}${subtractIdFromUrl(residentUrl)},`, '')
      const charactersResponse = await Api.getMultipleCharacters({ ids: ids.slice(0, -1) })
      setResidents(charactersResponse)

      setIsFetching(false)
    }

    fetchApi()
  }, [])

  return (
    <BaseLayout>
      <Grid container spacing={ 2 }>
        <Grid item container spacing={ 2 }>
          <Grid item xs={ 12 }>
            { !isFetching && <LocationCard { ...location }/> }
          </Grid>
        </Grid>
        <Grid item container spacing={ 2 }>
          { residents.map((resident, index) => (
            <Grid item key={ `${resident.name}-${index}` } xs={ 4 }>
              <Link to={{ pathname: `/characters/${resident.id}` }} className='link'>
                <CharacterCard { ...resident }/>
              </Link>
            </Grid>
          )) }
        </Grid>
      </Grid>
    </BaseLayout>
  )
}

export default LocationScreen
