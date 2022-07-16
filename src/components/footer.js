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
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom';


const Footer = ({
  title
}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  return (
    <AppBar position='static' sx={{height:'100px', marginBottom:'0', display: 'flex', flexDirection:'column', textAlign:'center'}}>
        <Typography variant='h6' component='div' >
            Rick & Morty Website
          </Typography>
          <Typography variant='h6' component='div' >
            Created by Rodieq
          </Typography>
          <a href="https://github.com/RodrigoRG1921/rick-and-morty-website" target="_blank" style={{color: 'white'}}>
           <GitHubIcon />
          </a>
          
          
          
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
