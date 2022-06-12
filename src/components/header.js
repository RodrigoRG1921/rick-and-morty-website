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
import {
  Menu as MenuIcon
} from '@mui/icons-material'

import Drawer from './drawer'

const Header = ({
  title
}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  return (
    <AppBar position='static'>
      <Toolbar>
        <IconButton
          size='large'
          edge='start'
          color='inherit'
          aria-label='menu'
          sx={{ mr: 2 }}
          onClick={ () => setIsDrawerOpen(true) }>
          <MenuIcon />
          <Drawer
            isOpen={ isDrawerOpen }
            handleClose={ () => setIsDrawerOpen(false) }/>
        </IconButton>
        <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
          { title }
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

Header.propTypes = {
  title: PropTypes.string
}

Header.defaultProps = {
  title: 'Rick & Morty'
}

export default Header
