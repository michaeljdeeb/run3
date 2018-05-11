import React from 'react';
import styled from 'styled-components';

import Icon from '../icon';

const PlayPauseFlex = styled.div`
  display: flex;
  justify-content: center;
  margin: 1.647rem 0;
`;

const PlayPauseButton = styled.button`
  padding: 0.5rem;
`;

const PlayPause = props => {
  const { paused, controlTimer } = props;
  return (
    <PlayPauseFlex>
      <PlayPauseButton onClick={() => controlTimer(paused)}>
        <Icon icon={paused ? 'play' : 'pause'} size="5x" />
      </PlayPauseButton>
    </PlayPauseFlex>

  );
};

export default PlayPause;
