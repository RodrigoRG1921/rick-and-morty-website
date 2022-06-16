import React, {
  useState
} from 'react'
import PropTypes from 'prop-types'
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography
} from '@mui/material'




const Footer = ({
  title
}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  return (
    <AppBar position='static' sx={{display:'flex', alignContent:'center', flexDirection:'column'}}>
      <Toolbar >
        <Typography variant='h6' component='div' >
          footer
        </Typography>
        <Typography variant='h6' component='div' >
          footer
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

Footer.propTypes = {
  title: PropTypes.string
}

Footer.defaultProps = {
  title: 'Rick & Morty'
}

export default Footer
