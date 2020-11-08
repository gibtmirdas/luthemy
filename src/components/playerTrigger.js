import { Button } from "@material-ui/core";
import { PlayArrow, Stop } from "@material-ui/icons";
import React, { useContext } from "react";
import styled from "styled-components";
import StateContext from "../contexts/stateContext";

const Container = styled.div`
  margin-top: 2em;
`;

const PlayerTrigger = () => {
  const { isPlaying, triggerPlaying } = useContext(StateContext);
  return (
    <Container>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => triggerPlaying(!isPlaying)}
      >
        {isPlaying ? <Stop /> : <PlayArrow />}
      </Button>
    </Container>
  );
};

export default PlayerTrigger;
