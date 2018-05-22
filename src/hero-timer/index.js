import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import pulseStyle from '../styles/pulseStyle';
import { FlexCenterContainer, FlexColumnCenterContainer } from '../styles/containers';

const Wrapper = FlexColumnCenterContainer.extend`
  margin: 1.647rem 0;
`;

const Container = FlexCenterContainer.extend`
  animation: ${props => (props.pulse ? `${pulseStyle} 1s infinite` : 'none')};
  font-size: 1.647rem;
  font-weight: 700;
  text-transform: uppercase;
`;

const HeroText = styled.div`
  padding-right: 1rem;
`;

const Congratulations = styled.div`
  animation: ${pulseStyle} 1s infinite;
`;

const HeroTimer = (props) => {
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

HeroTimer.defaultProps = {
  duration: '00:00',
  pulse: false,

};

HeroTimer.propTypes = {
  duration: PropTypes.string,
  pulse: PropTypes.bool,
  status: PropTypes.string.isRequired,
};

export default HeroTimer;
