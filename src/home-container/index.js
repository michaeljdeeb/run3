import React, { Component } from 'react';
import { connect } from 'react-redux';

import Home from '../home';
import Disclaimer from '../disclaimer';
import GetStarted from '../get-started';

class HomeContainer extends Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    const { week, workout } = prevState;
    const { progress } = nextProps;

    const workouts = Object.keys(progress);
    let current;
    let next;
    for (let i = 0; i < workouts.length; i += 1) {
      if (progress[workouts[i]]) {
        current = workouts[i];
        if (workouts[i] === '9-3') {
          next = '9-3';
        }
      } else if (current && !progress[workouts[i]]) {
        next = workouts[i];
        break;
      }
    }

    next = next || '1-1';
    if (next === `${week}-${workout}`) {
      return null;
    }

    return {
      week: Number(next[0]),
      workout: Number(next[2]),
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      week: 1,
      workout: 1,
    };
  }

  render() {
    const { week, workout } = this.state;
    return (
      <div>
        <Home />
        <GetStarted week={week} workout={workout} />
        <Disclaimer />
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    progress: state.progress,
  }
);

export default connect(mapStateToProps)(HomeContainer);
