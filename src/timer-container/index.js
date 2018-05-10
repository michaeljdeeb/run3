import React, { Component } from 'react';
import styled from 'styled-components';

import ElapsedRemaining from '../elapsed-remaining';
import HeroTimer from '../hero-timer';
import PlayPause from '../play-pause';
import schedule from '../utils/schedule';
import { Duration } from '../luxon';

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
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    const { duration, elapsed, set, setIndex } = this.state;
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
      clearInterval(this.timerID);
    } else {
      this.setState({
        duration: duration - 1,
        elapsed: elapsed + 1,
      });
    }
  }

  controlTimer(shouldPlay) {
    if (shouldPlay) {
      this.timerID = setInterval(() => this.tick(), 1000);
      this.setState({ paused: false });
    } else {
      clearInterval(this.timerID);
      this.setState({ paused: true });
    }
  }

  render() {
    const { duration, elapsed, paused, set, setIndex, status } = this.state;
    const { week, workout } = this.props.match.params;
    const prettyDuration = Duration.fromObject({ seconds: duration }).toFormat('mm:ss');
    const prettyElapsed = Duration.fromObject({ seconds: elapsed }).toFormat('mm:ss');
    const remainingSets = set.slice(setIndex + 1);
    const remaining = remainingSets.length ?
      remainingSets.reduce((accumulator, currentValue) => accumulator + currentValue) + duration :
      duration;
    const prettyRemaining = Duration.fromObject({ seconds: remaining }).toFormat('mm:ss');

    return (
      <div>
        <h1>Week {week}<br />Workout {workout}</h1>
        <FlexContainer>
          <HeroTimer status={status} duration={prettyDuration} />
          <ElapsedRemaining elapsed={prettyElapsed} remaining={prettyRemaining} />
          <PlayPause paused={paused} controlTimer={this.controlTimer} />
        </FlexContainer>
      </div>
    );
  }
}

export default TimerContainer;
