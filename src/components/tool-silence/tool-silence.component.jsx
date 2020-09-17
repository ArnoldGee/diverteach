import React, { Component } from 'react'

import {createAudioMeter} from './volumeMeter'

import Button from '../button/button.component'

import './tool-silence.styles.scss'

export default class ToolSilence extends Component {
  constructor(props){
    super(props)
    this.state={
      microphoneActive: false,
      volume: 0
    }
    this.audioStart = this.audioStart.bind(this)
  }
  audioStart(){
    var audioContext = null;
    var meter = null;

    // monkeypatch Web Audio
    window.AudioContext = window.AudioContext || window.webkitAudioContext;
	
    // grab an audio context
    audioContext = new AudioContext();


    const onMicrophoneGranted = (stream)=> {
      // Create an AudioNode from the stream.
      mediaStreamSource = audioContext.createMediaStreamSource(stream);
  
      // Create a new volume meter and connect it.
      meter = createAudioMeter(audioContext);
      mediaStreamSource.connect(meter);
  
      // kick off the visual updating
      
      onLevelChange(meter);
    }

    // Attempt to get audio input
    try {
          // monkeypatch getUserMedia
          navigator.getUserMedia = 
            navigator.getUserMedia ||
            navigator.webkitGetUserMedia ||
            navigator.mozGetUserMedia;

          // ask for an audio input
          navigator.getUserMedia(
          {
              "audio": {
                  "mandatory": {
                      "googEchoCancellation": "false",
                      "googAutoGainControl": "false",
                      "googNoiseSuppression": "false",
                      "googHighpassFilter": "false"
                  },
                  "optional": []
              },
          }, onMicrophoneGranted, onMicrophoneDenied);
      } catch (e) {
          alert('getUserMedia threw exception :' + e);
          return
      }
      function onMicrophoneDenied() {
        alert('Stream generation failed.');
        return
    }
  
    var mediaStreamSource = null;
    
    
    const onLevelChange=(meter)=>{
      this.setState({volume: meter.volume})
      setTimeout(function(){  onLevelChange(meter); }, 100);
      
    }
    this.setState({microphoneActive: true})
  }
  
  render() {
    return (
      <div className="tool-silence">
        <div className="volume-bar" style={{
          width: `${1000 * this.state.volume}px`,
          backgroundColor: this.state.volume < 0.05 ? "#33C1B1" : "#E76F51"
          }} />
        {
          (this.state.volume > 0.06)&&<div className="silence-icon"><span role="img" aria-label="">🤫</span></div>
        }
        <Button color="green" onClick={this.audioStart} >{!this.state.microphoneActive&&"Activa el mesurador de silenci "}<i className="fas fa-microphone"></i></Button>
      </div>
    )
  }
}
