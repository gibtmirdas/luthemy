const PlayingStates = {
  STOPPED: "STOPPED", // initial state or after clicking stop
  DISPLAY: "DISPLAY", // Display a note and wait _speed_ seconds
  SOUND: "SOUND", // play sounds, wait for _SOUND_TIMEOUT_ seconds
  NEXT: "NEXT", // hide note for _NEXT_TIMEOUT_ seconds before displaying new one
};

export default PlayingStates;
