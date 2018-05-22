import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../icon';

import { Button } from '../styles/buttons';
import { FlexCenterContainer } from '../styles/containers';

const PlayPauseFlex = FlexCenterContainer.extend`
  margin: 1.647rem 0;
`;

const PlayPauseButton = Button.extend`
  padding: 0.5rem;
`;

const StepButton = Button.extend`
  margin: 0 0.5rem;
  padding: 0.5rem;

  &[disabled] {
    filter: blur(3px);
    opacity: 0.5;
  }
`;

const PlayPause = (props) => {
  const {
    controlTimer,
    disableBack,
    disableForward,
    paused,
    stepThrough,
  } = props;

  return (
    <PlayPauseFlex>
      <StepButton onClick={() => stepThrough('back')} disabled={disableBack}>
        <Icon icon="back" size="3x" />
      </StepButton>
      <PlayPauseButton onClick={() => controlTimer(paused)}>
        <Icon icon={paused ? 'play' : 'pause'} size="5x" />
      </PlayPauseButton>
      <StepButton onClick={() => stepThrough('forward')} disabled={disableForward}>
        <Icon icon="forward" size="3x" />
      </StepButton>
    </PlayPauseFlex>

  );
};

PlayPause.defaultProps = {
  disableBack: true,
  disableForward: true,
  paused: true,
};

PlayPause.propTypes = {
  controlTimer: PropTypes.func.isRequired,
  disableBack: PropTypes.bool,
  disableForward: PropTypes.bool,
  paused: PropTypes.bool,
  stepThrough: PropTypes.func.isRequired,
};

export default PlayPause;
