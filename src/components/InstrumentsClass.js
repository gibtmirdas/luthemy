import { Component } from "react";
import MIDISounds from "midi-sounds-react";
import PlayingStates from "../states/playingStates";

const instrumentId = 246;

class InstrumentsClass extends Component {
constructor(props) {
  super(props);

  this.state = { played: false, init: false };
}

  componentDidUpdate() {

    if (this.props.state === PlayingStates.SOUND && !!this.props.note && !this.state.played) {
      this.midiSounds.playChordNow(instrumentId, this.props.note.pitch, 2.5);
      this.setState({ played: true });
    } else
    if (this.props.state === PlayingStates.NEXT && this.state.played) {
      this.setState({ played: false });

    }
}
  playTestInstrument() {
    console.debug('===> PLAY', this.midiSounds);
    this.midiSounds.playChordNow(instrumentId, [60], 2.5);
    this.setState({ init: true });
  }
  render() {
    this.playTestInstrument.bind(this);
    return (
      <div className="App">
        <p><button onClick={this.playTestInstrument.bind(this)}>{this.state.init ? 'ready' : 'Please init !!'}</button></p>
        <MIDISounds ref={(ref) => (this.midiSounds = ref)} appElementName="root" instruments={[instrumentId]} />
      </div>
    );
  }
}

export default InstrumentsClass;

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
