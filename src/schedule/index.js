import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Icon from '../icon';

import schedule from '../utils/schedule';

const WorkoutList = styled.ol`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const FlexLink = styled(Link)`
  align-items: center;
  background: rgba(255, 255, 255, 0.15);
  display: flex;
  justify-content: space-between;
  margin: 0.1rem -0.75rem 0.1rem;
  padding: 0.5rem 0.75rem;
  text-decoration: none;
`;

const Week = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0.3rem;
  margin-top: 2rem;
  text-transform: uppercase;
`;


class Schedule extends Component {
  render() {
    const { progress } = this.props;
    const renderSchedule = Object.keys(schedule).map((week) => {
      const renderWeek = Object.keys(schedule[week]).map(workout => (
        <li key={`${week}-${workout}`}>
          <FlexLink to={`/week/${week}/workout/${workout}`} workout={workout}>
            Workout {workout}
            <Icon icon={progress[`${week}-${workout}`] ? 'complete' : 'incomplete'} size="2x" />
          </FlexLink>
        </li>
      ));

      return [
        <Week key={`h3-${week}`}>Week {week}</Week>,
        <WorkoutList key={`ol-${week}`}>
          { renderWeek }
        </WorkoutList>,
      ];
    });

    return (
      <div>
        <h1>Schedule</h1>
        { renderSchedule }
      </div>
    );
  }
}

Schedule.propTypes = {
  progress: PropTypes.object.isRequired,
};

export default Schedule;
