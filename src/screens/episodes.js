import React, {useEffect, useState} from 'react'
import BaseLayout from '../components/layout/base'
import ApiService from '../lib/api'
import { getPaginationUtilityClass, Grid, Pagination } from '@mui/material'
import { Link } from 'react-router-dom'
import EpisodeCard from '../components/card/episode'

const Episodes = () => {
const [pagination, setPagination] = useState({page: 3, pages: ""})
const [currentEpisodes, setCurrentEpisodes] = useState([])
  useEffect(() => {
    const fetchApi = async() => {
      const {info, results} = await ApiService.getAllEpisodesById(pagination.page)
      setPagination(prevPagination => ({ ...prevPagination, pages: info.pages }))
      setCurrentEpisodes(results)

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
          { currentEpisodes.map(episode => (
            <Grid item xs={ 12 } sm={ 6 }>
              <Link className='link' to={ `${episode.id}` }>
                <EpisodeCard
                  name={episode.name}
                  episode={episode.episode}
                  air_date={episode.air_date}
                />
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

export default Episodes