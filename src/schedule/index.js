import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Icon from '../icon';

import { H1, H5 } from '../styles/headings';
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
        <H5 key={`h3-${week}`}>Week {week}</H5>,
        <WorkoutList key={`ol-${week}`}>
          { renderWeek }
        </WorkoutList>,
      ];
    });

    return (
      <div>
        <H1>Schedule</H1>
        { renderSchedule }
      </div>
    );
  }
}

Schedule.propTypes = {
  progress: PropTypes.object.isRequired,
};

export default Schedule;
