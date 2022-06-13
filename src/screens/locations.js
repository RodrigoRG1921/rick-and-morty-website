import React, {
  useEffect,
  useState
} from 'react'
import {
  Grid,
  Pagination
} from '@mui/material'
import { Link } from 'react-router-dom'

import Api from '../lib/api'

import BaseLayout from '../components/layout/base'
import LocationCard from '../components/card/location'

const LocationsScreen = () => {
  const [locations, setLocations] = useState([])
  const [pagination, setPagination] = useState({
    page: 1,
    pages: 0
  })

  useEffect(() => {
    const fetchApi = async () => {
      const { info, results } = await Api.getLocationsByPagination({ page: pagination.page })
      setLocations(results)
      setPagination(prevPagination => ({ ...prevPagination, pages: info.pages }))
    }

    fetchApi()
  }, [pagination.page])

  return (
    <BaseLayout>
      <Grid container spacing={ 2 }>
        <Grid
          item
          xs={ 12 }
          container
          spacing={ 2 }>
          { locations.map(location => (
            <Grid item key={ location.id } xs={ 6 }>
              <Link className='link' to={ `${location.id}` }>
                <LocationCard { ...location } />
              </Link>
            </Grid>
          )) }
        </Grid>
        <Grid
          xs={ 12 }
          item
          container>
          <Grid
            item
            container
            justifyContent='center'
            xs={ 12 }>
            <Pagination
              onChange={(event, value) => setPagination(prevPagination => ({ ...prevPagination, page: value }))}
              page={ pagination.page }
              count={ pagination.pages } />
          </Grid>
        </Grid>
      </Grid>
    </BaseLayout>
  )
}

export default LocationsScreen
