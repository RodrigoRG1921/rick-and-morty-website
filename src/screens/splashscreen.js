import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

const SplashScreen = ({
  timeoutMilliseconds,
  navigationPath
}) => {
  const navigation = useNavigate()

  useEffect(() => {
    const timeoutReference = setTimeout(() => {
      navigation(navigationPath)
    }, timeoutMilliseconds)

    return () => clearTimeout(timeoutReference)
  }, [])

  return (
    <>
      <p>SplashScreen</p>
    </>
  )
}

SplashScreen.propTypes = {
  timeoutMilliseconds: PropTypes.number,
  navigationPath: PropTypes.string
}

SplashScreen.defaultProps = {
  timeoutMilliseconds: 3000,
  navigationPath: '/home'
}

export default SplashScreen
