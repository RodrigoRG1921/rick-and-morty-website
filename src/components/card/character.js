import React from 'react'
import {
  Card,
  Chip,
  CardActions,
  Typography,
  CardMedia,
  CardContent
} from '@mui/material'
import PropTypes from 'prop-types'

const CharacterCard = ({
  name,
  image,
  status,
  species
}) => (
  <Card>
    <CardMedia
      component='img'
      image={ image }
      alt={ name }/>
    <CardContent>
      <Typography gutterBottom variant='h5' component='div'>
        { name }
      </Typography>
    </CardContent>
    <CardActions>
      <Chip label={ status }/>
      <Chip label={ species }/>
    </CardActions>
  </Card>
)

CharacterCard.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  status: PropTypes.string,
  species: PropTypes.string
}

export default CharacterCard
