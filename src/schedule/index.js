import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import schedule from '../utils/schedule';

const WorkoutList = styled.ol`
  list-style: none;
  padding: 0;
`;

class Schedule extends Component {
  render() {
    const renderSchedule = Object.keys(schedule).map((week) => {
      const renderWeek = Object.keys(schedule[week]).map(workout => (
        <li key={`${week}-${workout}`}><Link to={`/week/${week}/workout/${workout}`}>Workout {workout}</Link></li>
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
