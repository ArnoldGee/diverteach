import React, {Component} from 'react';

import './tool-timer.styles.scss';

const INITIAL_STATE = {
  sessionCount: 5,
  clockCount: 5 * 60,
  sound: 'audio-beep',
  isPlaying: false,
  isRinging: false,
  audio: undefined,
};

class ToolTimer extends Component {
  constructor(props) {
    super(props);
    this.loop = undefined;
    this.state = INITIAL_STATE;
  }
  componentDidMount() {
    this.audio = document.getElementById(this.state.sound);
  }
  componentWillUnmount() {
    clearInterval(this.loop);
  }

  convertToTime = (count) => {
    const minutes = Math.floor(count / 60);
    const seconds = count % 60;
    const secondsDisplay = seconds < 10 ? '0' + seconds : seconds;
    const minutesDisplay = minutes < 10 ? '0' + minutes : minutes;
    return `${minutesDisplay}:${secondsDisplay}`;
  };

  handleSessionIncrease = () => {
    const {sessionCount, isPlaying} = this.state;

    if (sessionCount < 60) {
      if (!isPlaying) {
        this.setState({
          sessionCount: sessionCount + 1,
          clockCount: (sessionCount + 1) * 60,
        });
      }
    }
  };

  handleSessionDecrease = () => {
    const {sessionCount, isPlaying} = this.state;

    if (sessionCount > 1) {
      if (!isPlaying) {
        this.setState({
          sessionCount: sessionCount + -1,
          clockCount: (sessionCount + -1) * 60,
        });
      }
    }
  };

  handlePlayPause = () => {
    const {isPlaying} = this.state;
    if (!isPlaying) {
      this.loop = setInterval(() => {
        if (this.state.clockCount === 0) {
          this.setState({
            isRinging: true,
          });
          this.audio.play();
        } else {
          this.setState((prevState) => ({
            clockCount: prevState.clockCount - 1,
          }));
        }
      }, 1000);

      this.setState({
        isPlaying: true,
      });
    } else {
      clearInterval(this.loop);
      this.setState({
        isPlaying: false,
      });
    }
  };

  handleReset = () => {
    this.setState((prevState) => ({...INITIAL_STATE, sound: prevState.sound}));
    clearInterval(this.loop);
    this.audio.pause();
    this.audio.currentTime = 0;
  };

  render() {
    const {clockCount, isRinging} = this.state;
    return (
      <div className="timer">
        <audio
          id="audio-beep"
          preload="auto"
          src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
        ></audio>

        <div className="timer-clock">
          <div className="timer-show">
            <button
              className="controls-button no-format"
              onClick={this.handleSessionDecrease}
            >
              <i className="fas fa-minus"></i>
            </button>
            <div className="time-container">
              {isRinging && (
                <div className="timer-icon" onClick={this.handleReset}>
                  <span role="img" aria-label="">
                    ⏰
                  </span>
                </div>
              )}
              {!isRinging && (
                <div className="time">{this.convertToTime(clockCount)}</div>
              )}
            </div>
            <button
              className="controls-button no-format"
              onClick={this.handleSessionIncrease}
            >
              <i className="fas fa-plus"></i>
            </button>
          </div>
          <div className="timer-controls">
            {!isRinging && (
              <button
                className="no-format controls-button"
                id="start_stop"
                onClick={this.handlePlayPause}
              >
                <i
                  className={`fas fa-${
                    this.state.isPlaying ? 'pause' : 'play'
                  }`}
                ></i>
              </button>
            )}
            <button
              className="no-format controls-button"
              id="reset"
              onClick={this.handleReset}
            >
              <i className="fas fa-sync-alt"></i>
            </button>
          </div>
        </div>
        <div className="timer-options">
          <h3>Sons</h3>
          <div className="sound-icons">
            <div className="sound-icons-row">
              <div className="sound-icon">
                <span role="img" aria-label="">
                  ⏰
                </span>
              </div>
              <div className="sound-icon">
                <span role="img" aria-label="">
                  💣
                </span>
              </div>
            </div>
            <div className="sound-icons-row">
              <div className="sound-icon">
                <span role="img" aria-label="">
                  🔔
                </span>
              </div>
              <div className="sound-icon">
                <span role="img" aria-label="">
                  🔕
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ToolTimer;
