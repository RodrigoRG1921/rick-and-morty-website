import React, {
  useEffect,
  useState
} from 'react'
import {
  Grid
} from '@mui/material'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

import ApiService from '../lib/api'

import BaseLayout from '../components/layout/base'
import EpisodeCard from '../components/card/episode'
import CharacterCard from '../components/card/character'

const Episode = () => {
  const [currentEpisode, setCurrentEpisode] = useState({})
  const [currentCharacters, setCurrentCharacters] = useState([])
  const { id } = useParams()
  const [isFetching, setIsFetching] = useState(true)
 

  useEffect(() => {
    const fetchApi = async() => {
      const episode = await ApiService.getEpisodeById(id)
      setCurrentEpisode(episode)
      
      const idsArray = episode.characters.map((character) => {
        return character.split("/").pop()
      })
      const ids = idsArray.join(",") 
      const characters = await ApiService.getMultipleCharacters({ ids })
      setCurrentCharacters(characters)
      setIsFetching(false)
    }
    fetchApi()
  }, [])


  return (
    <BaseLayout>
      <Grid container spacing={ 2 }>
        <Grid item container spacing={ 2 }>
          <Grid item xs={ 12 }>
            { !isFetching && <EpisodeCard { ...currentEpisode }/> }
          </Grid>
        </Grid>
        <Grid item container spacing={ 2 }>
          { currentCharacters.map((resident, index) => (
            <Grid item key={ `${resident.name}-${index}` } xs={ 6 } sm={ 4 }>
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

export default Episode