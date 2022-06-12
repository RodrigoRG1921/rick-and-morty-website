import React from 'react'
import {
  Card,
  CardHeader,
  Avatar
} from '@mui/material'

const LocationCard = ({
  id,
  name,
  type,
  dimension,
  handleClick
}) => (
  <Card onClick={ () => handleClick({ id }) }>
    <CardHeader
      avatar={
        <Avatar>
          { name.at(0).toUpperCase() }
        </Avatar>
      }
      title={ type }
      subheader={ dimension }/>
  </Card>
)

export default LocationCard
