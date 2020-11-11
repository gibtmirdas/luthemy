import { useContext, useEffect, useState } from "react";
import MIDISounds from "midi-sounds-react";
import StateContext from "../contexts/stateContext";
import PlayingStates from "../states/playingStates";

const instrumentId = 246;

function Instruments() {
  const [midiSounds, setMidiSounds] = useState(null);
  const { state, note } = useContext(StateContext);
  useEffect(() => {
    if (midiSounds) {
      midiSounds.cacheInstrument(instrumentId);
    }
  }, [midiSounds]);

  useEffect(() => {
    if (state === PlayingStates.SOUND) {
      midiSounds.playChordNow(instrumentId, note.pitch, 2);
    }
  }, [state, midiSounds, note]);

  return <MIDISounds ref={(ref) => setMidiSounds(ref)} appElementName="root" />;
}

export default Instruments;

// https://surikov.github.io/midi-sounds-react-examples/examples/midi-sounds-example7/build/

// acoustic guitar (nylon): 244 - 255
// acoustic guitar (steel): 256 - 273

// do  0+12*3
// re  2+12*3
// mi  4+12*3
// fa  5+12*3
// sol 7+12*3
// la  9+12*3
// si  11+12*3
// do  0+12*4
// re  2+12*4
// mi  4+12*4
// fa  5+12*4
// sol 7+12*4
// la  9+12*4
// si  11+12*4
// do  0+12*5
// re  2+12*5
// mi  4+12*5
// fa  5+12*5
// sol 7+12*5
// la  9+12*5
// si  11+12*5
