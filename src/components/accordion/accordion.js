import React from 'react'
import PropTypes from 'prop-types'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './accordion.css'

const Trait = ({
  title,
  content
}) => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
         >
          <Typography>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {content}
          </Typography>
          </AccordionDetails>
      </Accordion>
  )
}

Accordion.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string
}

Accordion.defaultProps = {
}

export default Trait