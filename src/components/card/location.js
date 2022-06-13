import React from 'react'
import {
  Card,
  CardHeader,
  Avatar,
  CardActions,
  Typography
} from '@mui/material'
import PropTypes from 'prop-types'

const LocationCard = ({
  name,
  type,
  dimension
}) => (
  <Card>
    <CardHeader
      avatar={
        <Avatar>
          { name.at(0).toUpperCase() }
        </Avatar>
      }
      title={ type }
      subheader={ dimension }/>
    <CardActions>
      <Typography>
        { name }
      </Typography>
    </CardActions>
  </Card>
)

LocationCard.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  dimension: PropTypes.string
}

export default LocationCard
