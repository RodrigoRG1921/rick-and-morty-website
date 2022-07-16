import React, {useEffect, useState} from 'react'
import Paginations from '../components/Pagination'
import BaseLayout from "../components/layout/base"
import CharacterCard from '../components/card/character'
import { Grid } from '@mui/material'
import { Link } from 'react-router-dom'
import ApiService from '../lib/api'

const Characters = () => {
  
  const [currentCharacters, setCurrentCharacters] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  
  

  useEffect(() => {
    const fetchApi = async () => {
      const characters = await ApiService.getAllCharacters({page: currentPage})
      setCurrentCharacters(characters.results)
     }
     fetchApi()
       
   }, [currentPage])
   

  const handlePageClick = (e, value) => {
      setCurrentPage(value)
  }

  return (
    <BaseLayout>
      <Grid container>
        <Grid item container spacing={ 2 }>
          {currentCharacters.map((character) => {
              return(
                <Grid item key={ character.id } xs={ 12 } sm={6} md={4} >
                  <Link to={`${character.id}`}>
                    <CharacterCard {...character} />
                  </Link>
                </Grid>
              )
            })}
          <Paginations handlePageClick={handlePageClick} count={42} />
        </Grid>
        
      </Grid>
      
        
     
    </BaseLayout>
    
  )
}

export default Characters