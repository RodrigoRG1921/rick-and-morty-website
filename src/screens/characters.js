import React, {useEffect, useState, useRef} from 'react'
import Paginations from '../components/Pagination'
import BaseLayout from "../components/layout/base"
import { GiDeadHead } from 'react-icons/gi'
import { GoSmiley } from 'react-icons/go'
import CharacterCard from '../components/card/character'

const Characters = () => {
  const apiBaseUrl = 'https://rickandmortyapi.com/api/character'
  const [currentCharacters, setCurrentCharacters] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  
  
  const getAllCharacters = async (page) => {
    try{
      const response = await fetch(`${apiBaseUrl}?page=${page}`)
      return await response.json()
    } catch(error){
      console.error(error)
    }
  }
  useEffect(() => {
    const fetchApi = async () => {
      const characters = await getAllCharacters(currentPage)
      setCurrentCharacters(characters.results)
     }
     fetchApi()
       
   }, [currentPage])
   

  const handlePageClick = (e, value) => {
      setCurrentPage(value)
  }

  return (
    <BaseLayout>
      <div>
      <div>
        {currentCharacters.map((character) => {
          return(
            <div style={{display:"flex", justifyContent:"space-between"}} key={character.id}>
              <a href={`characters/${character.id}`} >{character.name}</a>
              <CharacterCard {...character} />
            </div> 
          )
        })}
      </div>
      <Paginations handlePageClick={handlePageClick} count={42} />
     </div>
    </BaseLayout>
    
  )
}

export default Characters