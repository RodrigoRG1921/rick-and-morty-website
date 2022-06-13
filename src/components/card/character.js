import React from 'react'
import {
  Card,
  CardHeader,
  Avatar
} from '@mui/material'

const CharacterCard = ({
  id,
  name,
  species,
  status,
  handleClick,
  image
}) => (
  <Card onClick={ () => handleClick({ id }) }>
    <CardHeader
      avatar={
        <Avatar>
          { name }
        </Avatar>
      }
      title={ name }
      subheader={ species }/>
  </Card>
)

export default CharacterCard
