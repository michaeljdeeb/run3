import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faPauseCircle, faPlayCircle  } from '@fortawesome/fontawesome-free-regular';
import styled from 'styled-components';

const PlayPauseFlex = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.647rem;
`;

const PlayPauseButton = styled.button`
  appearance: none;
  background: none;
  border: none;
  color: #fff;
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
