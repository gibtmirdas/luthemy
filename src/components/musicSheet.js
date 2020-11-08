import { CircularProgress } from "@material-ui/core";
import { useContext } from "react";
import styled from "styled-components";
import StateContext from "../contexts/stateContext";
import PlayingStates from "../states/playingStates";
import Note from "./note";

const SheetContainer = styled.div`
  padding-top: 6em;
  padding-bottom: 0.4em;
  background-color: #f2eecb;
`;

const Sheet = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-top: none;
`;

const Ligne = styled.div`
  border-top: 1px solid black;
  height: 1.2em;
`;

const NoteContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  opacity: 0;
  &.displayed {
    opacity: 1;
  }
  transition: opacity 200ms ease-in;
  height: 2em;
`;

function MusicSheet() {
  const nbRows = 5;
  const { state, note } = useContext(StateContext);
  if (!note) return <CircularProgress color={"secondary"} />;
  return (
    <SheetContainer>
      <Sheet>
        {[...Array(nbRows)].map((_, index) => (
          <Ligne key={index} />
        ))}
      </Sheet>
      <NoteContainer
        className={
          [PlayingStates.DISPLAY, PlayingStates.SOUND].includes(state)
            ? "displayed"
            : ""
        }
      >
        <Note
          value={note.value}
          nbAccents={note.nbAccents}
          isTop={note.isTop}
        />
      </NoteContainer>
    </SheetContainer>
  );
}

export default MusicSheet;
