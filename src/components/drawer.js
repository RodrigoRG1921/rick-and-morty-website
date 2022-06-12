import React, { useMemo, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import {
  Drawer as DrawerMaterial,
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemButton
} from '@mui/material'
import {
  People,
  Map,
  Tv
} from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

const Drawer = ({
  isOpen,
  drawerOptions,
  handleClose
}) => {
  const navigation = useNavigate()

  const [currentPath, setCurrentPath] = useState('')

  useEffect(() => {
    navigation(currentPath)
  }, [currentPath])

  const renderList = useMemo(() => (
    <Box
      role='presentation'>
      <List>
        { drawerOptions.map(drawerOption => (
          <ListItem key={ drawerOption.text }>
            <ListItemButton onClick={ () => setCurrentPath(drawerOption.path) }>
              <ListItemIcon>
                { drawerOption.icon }
              </ListItemIcon>
              <ListItemText primary={ drawerOption.text } />
            </ListItemButton>
          </ListItem>
        )) }
      </List>
    </Box>
  ), [drawerOptions])

  return (
    <DrawerMaterial
      open={ isOpen }
      onClose={ handleClose }>
      { renderList }
    </DrawerMaterial>
  )
}

Drawer.propTypes = {
  isOpen: PropTypes.bool,
  drawerOptions: PropTypes.array,
  handleClose: PropTypes.func
}

Drawer.defaultProps = {
  isOpen: false,
  drawerOptions: [
    { text: 'Characters', path: '/characters', icon: <People /> },
    { text: 'Locations', path: '/locations', icon: <Map /> },
    { text: 'Episodes', path: '/episodes', icon: <Tv /> }
  ]
}

export default Drawer
