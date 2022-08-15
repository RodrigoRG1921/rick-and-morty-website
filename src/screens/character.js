import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BaseLayout from "../components/layout/base";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Trait from "../components/accordion/accordion";
import Stack from "@mui/material/Stack";
import { GiDeadHead } from "react-icons/gi";
import { GoSmiley } from "react-icons/go";

const Character = () => {
  const [currentCharacter, setCurrentCharacter] = useState([]);
  const { id } = useParams();
  const [isFetching, setIsFetching] = useState(true);
  const apiBaseUrl = "https://rickandmortyapi.com/api/character";

  useEffect(() => {
    const getCharacter = async () => {
      try {
        const response = await fetch(`${apiBaseUrl}/${id}`);
        return await response.json();
      } catch (error) {
        console.error(error);
      }
    };

    const fetchApi = async () => {
      const character = await getCharacter();
      setCurrentCharacter(character);
      setIsFetching(false);
    };
    getCharacter();
    fetchApi();
  }, [id]);

  return (
    <BaseLayout maxWidth={"xl"}>
      {!isFetching && (
        <Grid container spacing={2} style={{ marginTop: "10px" }}>
          <Grid item xs={12} sm={4}>
            <Paper elevation={4} style={{ padding: "2px" }}>
              <img
                src={currentCharacter.image}
                style={{ width: "100%", borderRadius: "5px " }}
                alt="Current character"
              />
            </Paper>
            <Paper
              elevation={4}
              style={{ padding: "2px", textAlign: "center", marginTop: "10px" }}
            >
              <h4>Last seen - {currentCharacter.location.name}</h4>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Stack spacing={2}>
              <h1>{currentCharacter.name}</h1>
              <Paper elevation={2}>
                <h2>
                  Status -{" "}
                  {currentCharacter.status === "Alive" ? (
                    <span>
                      Alive{" "}
                      <GoSmiley
                        style={{
                          position: "absolute",
                          marginLeft: "5px",
                          marginTop: "4px",
                          color: "green",
                        }}
                      />
                    </span>
                  ) : (
                    <span>
                      Dead
                      <GiDeadHead
                        size={30}
                        style={{
                          position: "absolute",
                          marginLeft: "5px",
                          color: "red",
                        }}
                      />{" "}
                    </span>
                  )}
                </h2>
                <h2>Origin - {currentCharacter.origin.name}</h2>
              </Paper>
              <Trait title="Species" content={currentCharacter.species} />
              <Trait title="Gender" content={currentCharacter.gender} />
              <Trait
                title="Type"
                content={
                  currentCharacter.type !== ""
                    ? currentCharacter.type
                    : "Unknown"
                }
              />
            </Stack>
          </Grid>
        </Grid>
      )}
    </BaseLayout>
  );
};

export default Character;
