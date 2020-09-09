import React, {Component} from 'react';

import './tool-timer.styles.scss'

class ToolTimer extends Component {
  constructor(props){
    super(props)
    this.loop = undefined;
    this.state = {
      sessionCount: 10,
      clockCount: 0,
      sound: 'audio-beep',
      isPlaying: false
    }
  }
  componentWillUnmount () {
    clearInterval(this.loop);
  }
  render() {
    return (
      <div className="timer">
        <audio id="audio-beep" preload="auto" src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"></audio>
        
        <div className="timer-clock">
          <div className="timer-show">
            
            <button className="controls-button no-format">
              <i className="fas fa-minus"></i>
            </button>
            <div className="time-container">
              <div style={{display: "none"}} className="timer-icon"><span role="img" aria-label="">⏰</span></div>
              <div className="time">12:45</div>
            </div>
            <button className="controls-button no-format">
              <i className="fas fa-plus"></i>
            </button>
          </div>
          <div className="timer-controls">
            <button className="no-format controls-button" id="start_stop" onClick={this.handlePlayPause}>
              <i className={`fas fa-${this.state.isPlaying ? "pause" : "play"}`}></i>
            </button>
            <button className="no-format controls-button" id="reset" onClick={this.handleReset}>
              <i className="fas fa-sync-alt"></i>
            </button>
          </div>
        </div>
        <div className="timer-options">
          <h3>Sons</h3>
          <div className="sound-icons">
            <div className="sound-icons-row">
              <div className="sound-icon"><span role="img" aria-label="">⏰</span></div>
              <div className="sound-icon"><span role="img" aria-label="">💣</span></div>
            </div>
            <div className="sound-icons-row">
              <div className="sound-icon"><span role="img" aria-label="">🔔</span></div>
              <div className="sound-icon"><span role="img" aria-label="">🔕</span></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ToolTimer;
