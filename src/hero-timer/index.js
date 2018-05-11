import React from 'react';
import styled from 'styled-components';

import pulse from '../utils/pulseStyle';

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 1.647rem 0;
`;

const Container = styled.div`
  animation: ${props => props.pulse ? `${pulse} 1s infinite` : 'none'};
  display: flex;
  font-size: 1.647rem;
  font-weight: 700;
  justify-content: center;
  text-transform: uppercase;
`;

const HeroText = styled.div`
  padding-right: 1rem;
`;

const Congratulations = styled.div`
  animation: ${pulse} 1s infinite;
`;

const HeroTimer = props => {
  const { duration, pulse, status } = props;
  const congratulations = (
    <Congratulations>
      You did it! Let&#39;s run again in 2 days.
    </Congratulations>
  );
  return (
    <Wrapper>
      <Container pulse={pulse}>
        <HeroText>
          { status }
        </HeroText>
        <div>
          { duration }
        </div>
      </Container>
      { status === 'Complete' ? congratulations : '' }
    </Wrapper>
  );
};

export default HeroTimer;
