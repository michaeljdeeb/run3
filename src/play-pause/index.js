import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faPauseCircle, faPlayCircle  } from '@fortawesome/fontawesome-free-regular';
import styled from 'styled-components';

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
        <FontAwesomeIcon icon={paused ? faPlayCircle : faPauseCircle} size="5x" />
      </PlayPauseButton>
    </PlayPauseFlex>

  );
};

export default PlayPause;
