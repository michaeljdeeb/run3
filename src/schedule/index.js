import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Icon from '../icon';
import schedule from '../utils/schedule';

const WorkoutList = styled.ol`
  display: flex;
  justify-content: space-around;
  list-style: none;
  padding: 0;
`;

const FlexLink = styled(Link)`
  align-items: center;
  border: 0.2rem solid #fff;
  border-radius: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0.5rem 1.5rem;
  text-decoration: none;
`;

const ListText = styled.div`
  margin-top: 0.5rem;
  text-transform: uppercase;
`;

class Schedule extends Component {
  render() {
    const { progress } = this.props;
    const renderSchedule = Object.keys(schedule).map((week) => {
      const renderWeek = Object.keys(schedule[week]).map(workout => (
        <li key={`${week}-${workout}`}>
          <FlexLink to={`/week/${week}/workout/${workout}`}>
            <Icon icon={progress[`${week}-${workout}`] ? 'complete' : 'incomplete'} size="2x" />
            <ListText>Run {workout}</ListText>
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
