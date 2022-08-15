import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import rick from "../lib/images/Rick&Morty.png";
import Container from "@mui/material/Container";

const SplashScreen = ({ timeoutMilliseconds, navigationPath }) => {
  const navigation = useNavigate();

  useEffect(() => {
    const timeoutReference = setTimeout(() => {
      navigation(navigationPath);
    }, timeoutMilliseconds);

    return () => clearTimeout(timeoutReference);
  }, [navigation, navigationPath, timeoutMilliseconds]);

  return (
    <Container
      maxWidth="xl"
      sx={{ height: "100%", textAlign: "center", marginTop: "100px" }}
    >
      <img src={rick} style={{ width: "50%" }} alt="Rick" />
    </Container>
  );
};

SplashScreen.propTypes = {
  timeoutMilliseconds: PropTypes.number,
  navigationPath: PropTypes.string,
};

SplashScreen.defaultProps = {
  timeoutMilliseconds: 3000,
  navigationPath: "/home",
};

export default SplashScreen;
