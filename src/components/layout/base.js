import React from 'react'
import {
  Container
} from '@mui/material'
import PropTypes from 'prop-types'

import Header from '../header'

const BaseLayout = ({
  children,
  title,
  maxWidth
}) => (
  <>
    <Header title={ title }/>
    <Container maxWidth={ maxWidth }>
      { children }
    </Container>
  </>
)

BaseLayout.propTypes = {
  title: PropTypes.string,
  maxWidth: PropTypes.string
}

BaseLayout.defaultProps = {
  maxWidth: 'md'
}

export default BaseLayout
