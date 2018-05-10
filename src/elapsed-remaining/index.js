import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  font-size: 1.176rem;
  justify-content: space-around;
  text-transform: uppercase;
`;

const TimeContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const ElapsedRemaining = (props) => {
  const { elapsed, remaining } = props;
  return (
    <Container>
      <TimeContainer>
        <span>Elapsed</span>
        { elapsed }
      </TimeContainer>
      <TimeContainer>
        <span>Remaining</span>
        { remaining }
      </TimeContainer>
    </Container>
  );
};

export default ElapsedRemaining;
