
import React, { Component } from 'react';
import MIDISounds from 'midi-sounds-react';

class Test extends Component {
  playTestInstrument() {
    console.debug('===> PLAY', this.midiSounds);
    this.midiSounds.playChordNow(3, [60], 2.5);
  }
  render() {
    return (
      <div className="App">
        <p><button onClick={this.playTestInstrument.bind(this)}>Play</button></p>
        <MIDISounds ref={(ref) => (this.midiSounds = ref)} appElementName="root" instruments={[246]} />
      </div>
    );
  }
}

export default Test;