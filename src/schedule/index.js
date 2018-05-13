import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Icon from '../icon';

import schedule from '../utils/schedule';

const WorkoutList = styled.ol`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  list-style: none;
  padding: 0;
`;

const FlexLink = styled(Link)`
  align-items: center;
  background: rgba(255, 255, 255, 0.2);
  border-bottom: ${props => props.workout === '3' ? '0.2rem solid #fff' : 'none'};
  border-top: 0.2rem solid #fff;
  display: flex;
  justify-content: flex-start;
  padding: 0.5rem 1.5rem;
  text-decoration: none;
`;

const ListText = styled.div`
  margin-left: 1rem;
  // text-transform: uppercase;
`;


class Schedule extends Component {
  render() {
    const { progress } = this.props;
    const renderSchedule = Object.keys(schedule).map((week) => {
      const renderWeek = Object.keys(schedule[week]).map(workout => (
        <li key={`${week}-${workout}`}>
          <FlexLink to={`/week/${week}/workout/${workout}`} workout={workout}>
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
