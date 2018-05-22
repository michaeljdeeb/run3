import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Disclaimer from '../disclaimer';
import ElapsedRemaining from '../elapsed-remaining';
import HeroTimer from '../hero-timer';
import Next from '../next';
import PlayPause from '../play-pause';

import schedule from '../utils/schedule';
import { Duration } from '../luxon';
import { setProgress } from '../redux/progress';

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
`;


class TimerContainer extends Component {
  constructor(props) {
    super(props);
    const { week, workout } = props.match.params;
    this.state = {
      duration: schedule[week][workout][0],
      elapsed: 0,
      paused: true,
      set: schedule[week][workout],
      setIndex: 0,
      status: 'Warmup',
    };
    this.controlTimer = this.controlTimer.bind(this);
    this.stepThrough = this.stepThrough.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    const {
      duration,
      set,
      setIndex,
      status,
    } = this.state;
    const { tts } = this.props;

    let message;
    if (tts && (prevState.status !== status || (setIndex === 0 && duration === set[setIndex]))) {
      switch (status) {
        case 'Warmup':
          message = 'Start your warmup.';
          break;
        case 'Run':
          message = 'Start running.';
          break;
        case 'Walk':
          message = 'Start walking.';
          break;
        case 'Cooldown':
          message = 'Start your cooldown.';
          break;
        case 'Complete':
          message = 'Congrats, You\'re finished! Let\'s run again in two days.';
          break;
        default:
          break;
      }
      const speechObject = new SpeechSynthesisUtterance(message);
      speechObject.lang = 'en-US';
      window.speechSynthesis.speak(speechObject);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    const { dispatch } = this.props;
    const { week, workout } = this.props.match.params;
    const {
      duration,
      elapsed,
      set,
      setIndex,
    } = this.state;
    const nextSetIndex = setIndex + 1;

    if (duration === 0 && set[nextSetIndex] !== undefined) {
      this.setState({
        duration: set[nextSetIndex] - 1,
        elapsed: elapsed + 1,
        setIndex: nextSetIndex,
      });
      if (nextSetIndex === set.length - 1) {
        this.setState({ status: 'Cooldown' });
      } else if (nextSetIndex % 2 === 1) {
        this.setState({ status: 'Run' });
      } else {
        this.setState({ status: 'Walk' });
      }
    } else if (duration === 0 && set[nextSetIndex] === undefined) {
      this.setState({ status: 'Complete' });
      this.controlTimer(false);
      dispatch(setProgress(`${week}-${workout}`));
      clearInterval(this.timerID);
    } else {
      this.setState({
        duration: duration - 1,
        elapsed: elapsed + 1,
      });
    }
  }


  controlTimer(shouldPlay) {
    const { set, status } = this.state;
    if (shouldPlay) {
      if (status === 'Complete') {
        this.setState({
          duration: set[0],
          elapsed: 0,
          setIndex: 0,
          status: this.renderStatus(set, 0),
        });
      }
      this.timerID = setInterval(() => this.tick(), 1000);
      this.setState({ paused: false });
    } else {
      clearInterval(this.timerID);
      this.setState({ paused: true });
    }
  }

  stepThrough(direction) {
    const { set, setIndex } = this.state;
    if (direction === 'back') {
      if (setIndex === 0) {
        this.setState({
          duration: set[0],
        });
      } else {
        this.setState({
          duration: set[setIndex - 1],
          setIndex: setIndex - 1,
          status: this.renderStatus(set, setIndex - 1),
        });
      }
    } else if (setIndex === set.length - 1) {
      this.setState({ duration: 0 });
    } else {
      this.setState({
        duration: set[setIndex + 1],
        setIndex: setIndex + 1,
        status: this.renderStatus(set, setIndex + 1),
      });
    }
  }

  prettyMinutes(seconds) {
    return Duration.fromObject({ seconds }).toFormat('mm:ss');
  }

  renderStatus(set, setIndex) {
    if (setIndex === 0) {
      return 'Warmup';
    } else if (setIndex === set.length - 1) {
      return 'Cooldown';
    } else if (setIndex % 2 === 1) {
      return 'Run';
    }

    return 'Walk';
  }

  render() {
    const {
      duration,
      elapsed,
      paused,
      set,
      setIndex,
      status,
    } = this.state;
    const { week, workout } = this.props.match.params;
    const prettyDuration = this.prettyMinutes(duration);
    const prettyElapsed = this.prettyMinutes(elapsed);
    const remainingSets = set.slice(setIndex + 1);
    const remaining = remainingSets.length ?
      remainingSets.reduce((accumulator, currentValue) => accumulator + currentValue) + duration :
      duration;
    const prettyRemaining = this.prettyMinutes(remaining);

    return (
      <div>
        <h1>Week {week}<br />Workout {workout}</h1>
        <FlexContainer>
          <HeroTimer
            status={status}
            duration={prettyDuration}
            pulse={duration <= 5 && setIndex !== set.length - 1}
          />
          <ElapsedRemaining elapsed={prettyElapsed} remaining={prettyRemaining} />
          <PlayPause
            controlTimer={this.controlTimer}
            disableBack={(setIndex === 0 && duration === set[0]) || status === 'Complete'}
            disableForward={status === 'Complete'}
            paused={paused}
            stepThrough={this.stepThrough}
          />
          { set[setIndex + 1] ? <Next prettyDuration={this.prettyMinutes(set[setIndex + 1])} status={this.renderStatus(set, setIndex + 1)} /> : '' }
          <Disclaimer />
        </FlexContainer>
      </div>
    );
  }
}

TimerContainer.defaultProps = {
  tts: false,
  week: 1,
  workout: 1,
};

TimerContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  tts: PropTypes.bool,
  week: PropTypes.number,
  workout: PropTypes.number,
};

const mapStateToProps = state => (
  {
    progress: state.progress,
    tts: state.settings.tts,
  }
);

export default connect(mapStateToProps)(TimerContainer);
