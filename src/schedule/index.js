import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Icon from '../icon';
import schedule from '../utils/schedule';

const WorkoutList = styled.ol`
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding: 0;
`;

const FlexLink = styled(Link)`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ListText = styled.div`
  margin-top: 0.5rem;
`;

class Schedule extends Component {
  render() {
    const { progress } = this.props;
    const renderSchedule = Object.keys(schedule).map((week) => {
      const renderWeek = Object.keys(schedule[week]).map(workout => (
        <li key={`${week}-${workout}`}>
          <FlexLink to={`/week/${week}/workout/${workout}`}>
            <Icon icon={progress[`${week}-${workout}`] ? 'complete' : 'incomplete'} size="2x" />
            <ListText>Workout {workout}</ListText>
          </FlexLink>
        </li>
      ));

      return [
        <h3 key={`h3-${week}`}>Week {week}</h3>,
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

export default Schedule;
