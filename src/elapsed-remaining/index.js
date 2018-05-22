import React from 'react';
import PropTypes from 'prop-types';

import { FlexContainer, FlexColumnCenterContainer } from '../styles/containers';

const Container = FlexContainer.extend`
  font-size: 1.176rem;
  justify-content: space-around;
  text-transform: uppercase;
`;

const ElapsedRemaining = (props) => {
  const { elapsed, remaining } = props;
  return (
    <Container>
      <FlexColumnCenterContainer>
        <span>Elapsed</span>
        { elapsed }
      </FlexColumnCenterContainer>
      <FlexColumnCenterContainer>
        <span>Remaining</span>
        { remaining }
      </FlexColumnCenterContainer>
    </Container>
  );
};

ElapsedRemaining.defaultProps = {
  elapsed: '00:00',
  remaining: '00:00',
};

ElapsedRemaining.propTypes = {
  elapsed: PropTypes.string,
  remaining: PropTypes.string,
};

export default ElapsedRemaining;
