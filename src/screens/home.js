import BaseLayout from "../components/layout/base";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import ricky from "../lib/images/rickymorty.webp";

const HomeScreen = () => (
  <BaseLayout>
    <Grid container spacing={3} textAlign="center">
      <Grid item xs={12} sm={6}>
        <Typography variant="h2" component="div" sx={{ flexGrow: 1 }}>
          Welcome to the Rick & Morty website
        </Typography>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Here you can find all the information about your favorite show, Rick
          and Morty!
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <img
          src={ricky}
          style={{ width: "30rem", height: "25rem", borderRadius: "10px" }}
          alt="Rick"
        />
      </Grid>
    </Grid>
  </BaseLayout>
);

export default HomeScreen;
