import React from 'react'
import {
  Container
} from '@mui/material'
import {
  styled
} from '@mui/material/styles'
import PropTypes from 'prop-types'

import Header from '../header'
import Footer from '../footer'

const BaseContainer = styled(Container)`
  padding-top: 16px;
  padding-bottom: 16px;
`

const BaseLayout = ({
  children,
  title,
  maxWidth
}) => (
  <>
    <Header title={ title }/>
    <BaseContainer maxWidth={ maxWidth }>
      { children }
    </BaseContainer>
    <Footer />
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
