import React from 'react'
import {
  Card,
  CardHeader,
  Avatar,
  CardActions,
  Typography
} from '@mui/material'
import PropTypes from 'prop-types'

const EpisodeCard = ({
  name,
  episode,
  airDate
}) => (
  <Card>
    <CardHeader
      avatar={
        <Avatar>
          { name.at(0).toUpperCase() }
        </Avatar>
      }
      title={ name }
      subheader={ episode }/>
    <CardActions>
      <Typography>
        Air Date: { airDate }
      </Typography>
    </CardActions>
  </Card>
)

EpisodeCard.propTypes = {
  name: PropTypes.string,
  episode: PropTypes.string,
  airDate: PropTypes.string
}

export default EpisodeCard
