import React, { useState, useEffect } from 'react'
import { Link, MemoryRouter, Route, Routes, useLocation, useParams } from 'react-router-dom';
import BaseLayout from "../components/layout/base"
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid';

const Character = () => {
  const [currentCharacter, setCurrentCharacter] = useState([])
  const { id } = useParams();
  const apiBaseUrl = 'https://rickandmortyapi.com/api/character'

  const getCharacter = async () => {
    try{
      const response = await fetch(`${apiBaseUrl}/${id}`)
      return await response.json()
    } catch(error){
      console.error(error)
    }
  }

  useEffect(() => {
    const fetchApi = async () => {
      const character = await getCharacter()
      setCurrentCharacter(character)
      console.log(character)
     }
     fetchApi()
       
   }, [])

  return (
    <BaseLayout maxWidth={"xl"}>
      <Grid container spacing={2} style={{marginTop:"10px"}}>
        <Grid item xs={4}>
          <Paper elevation={4} style={{padding:"2px"}} >
            <img src={currentCharacter.image} style={{width:"100%", borderRadius:"5px "}} />
          </Paper>
        </Grid>
        <Grid item xs={8}>
          <h1>{currentCharacter.name}</h1>
          <Paper elevation={4}>
            <h6>Gender: {currentCharacter.gender}</h6>
            {currentCharacter.type}
          </Paper>
        </Grid>
        
      </Grid>
      
        
    </BaseLayout>
  )
}

export default Character