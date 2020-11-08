import { createContext } from "react";
import PlayingStates from "../states/playingStates";
export const StateContext = createContext({
  isPlaying: false,
  triggerPlaying: null,
  state: PlayingStates.STOPPED,
  note: null,
  setNote: null,
});

export default StateContext;
