import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  font-size: 1.647rem;
  font-weight: 700;
  justify-content: center;
  margin: 1.647rem 0;
  text-transform: uppercase;
`;

const HeroText = styled.div`
  padding-right: 1rem;
`;

const HeroTime = styled.div`
`;

const HeroTimer = props => {
  const { status, duration } = props;
  return (
    <Container>
      <HeroText>
      { status }
      </HeroText>
      <HeroTime>
      { duration }
      </HeroTime>
    </Container>
  );
};

export default HeroTimer;
