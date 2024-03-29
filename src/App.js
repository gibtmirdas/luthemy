// @ts-nocheck
import {
  LinearProgress,
  MuiThemeProvider,
} from "@material-ui/core";
import { createTheme } from '@material-ui/core/styles';
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import "./App.css";
import MusicSheet from "./components/musicSheet";
import Params from "./components/params";
import PlayerTrigger from "./components/playerTrigger";
import StateContext from "./contexts/stateContext";
import SpeedContext from "./contexts/speedContext";
import { GetNote } from "./utils/noteProvider";
import PlayingStates from "./states/playingStates";
import { getProgressValue, SPEED_STORAGE_KEY } from "./utils/libs";
import InstrumentsClass from "./components/InstrumentsClass";

const AppStyled = styled.div`
  margin: 0 auto;
  width: 24em;
`;

const LinearProgressStyled = styled.div`
  margin: 2em 0 0em 0;
`;

const theme = createTheme({
  palette: {
    secondary: {
      main: "#686852",
    },
  },
});

const Version = styled.div``;

function App() {
  const [timeoutRef, setTimeoutRef] = useState(null);
  const [speed, setSpeed] = useState(2.0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [state, setStateTmp] = useState(PlayingStates.STOPPED);
  const [note, setNote] = useState(null);
  const [nextNote, setNextNote] = useState(null);
  const [initTime, setIniTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(null);

  useEffect(() => {
    setNote(GetNote());
    setNextNote(GetNote());
    const speedStr = localStorage.getItem(SPEED_STORAGE_KEY);
    if (speedStr) setSpeed(parseInt(speedStr));
  }, []);

  // timers & states
  const stateSound = () =>
    setTimeout(() => {
      nextState(PlayingStates.NEXT);
    }, 2000);

  const stateNext = () =>
    setTimeout(() => {
      const next = nextNote;
      setNextNote(GetNote(next));
      setNote(next);
      nextState(PlayingStates.DISPLAY);
    }, 1000);

  // button trigger
  const triggerPlaying = (triggered) => {
    setIsPlaying(triggered);
    nextState(triggered ? PlayingStates.DISPLAY : PlayingStates.STOPPED);
  };
  // data reset
  const resetData = () => {
    setElapsedTime(null);
    setIniTime(null);
  };

  const nextState = (newState) => {
    switch (newState) {
      case PlayingStates.STOPPED:
        clearTimeout(timeoutRef);
        resetData();
        break;
      case PlayingStates.DISPLAY:
        setIniTime(Date.now());
        break;
      case PlayingStates.SOUND:
        setElapsedTime(speed);
        setTimeoutRef(stateSound());
        break;
      case PlayingStates.NEXT:
        setTimeoutRef(stateNext());
        resetData();
        break;
      default:
        return;
    }
    setStateTmp(newState);
  };

  useEffect(() => {
    localStorage.setItem(SPEED_STORAGE_KEY, speed);
  }, [speed]);

  const useInterval = (callback, delay) => {
    const savedCallback = useRef();
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
    useEffect(() => {
      function tick() {
        if (savedCallback) savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  };

  useInterval(() => {
    if (initTime && state === PlayingStates.DISPLAY && elapsedTime < speed) {
      setElapsedTime((Date.now() - initTime) / 1000);
    } else if (elapsedTime >= speed && state === PlayingStates.DISPLAY) {
      nextState(PlayingStates.SOUND);
    }
  }, 200);

  return (
    <SpeedContext.Provider value={{ speed, setSpeed }}>
      <StateContext.Provider
        value={{ isPlaying, triggerPlaying, state, note, setNote, nextNote, setNextNote }}
      >
        <AppStyled className="App">
          <MuiThemeProvider theme={theme}>
            <MusicSheet />
            <LinearProgressStyled>
              <LinearProgress
                variant="determinate"
                value={getProgressValue(elapsedTime, speed)}
                color={"secondary"}
              />
            </LinearProgressStyled>
            <PlayerTrigger />
            <Params />
            <StateContext.Consumer>
              {value => <InstrumentsClass state={value.state} note={note}/>}
            </StateContext.Consumer>
            
            <Version>v1.5</Version>
          </MuiThemeProvider>
        </AppStyled>
      </StateContext.Provider>
    </SpeedContext.Provider>
  );
}

export default App;
