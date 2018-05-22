import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Toggle from 'react-toggle';

import { setColors } from '../redux/colors';
import { toggleThemeLock, toggleTts } from '../redux/settings';
import generateColors from '../utils/generateColors';

import { H1, H5 } from '../styles/headings';
import { DefaultButton } from '../styles/buttons';
import { FlexCenterContainer } from '../styles/containers';

const ButtonContainer = FlexCenterContainer.extend`
  margin-top: 0.5rem;
`;

const Label = styled.label`
  align-items: center;
  background: rgba(255, 255, 255, 0.15);
  display: flex;
  font-size: 1.1rem;
  justify-content: space-between;
  margin: 0 -0.75rem;
  padding: 0.82rem 0.75rem;
`;

const StyledToggle = styled(Toggle)`
  // margin-right: 1.17647rem;

  &.react-toggle {
    touch-action: pan-x;

    display: inline-block;
    position: relative;
    cursor: pointer;
    background-color: transparent;
    border: 0;
    padding: 0;

    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-tap-highlight-color: transparent;
  }

  & .react-toggle-screenreader-only {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }

  &.react-toggle--disabled {
    cursor: not-allowed;
    opacity: 0.5;
    -webkit-transition: opacity 0.25s;
    transition: opacity 0.25s;
  }

  & .react-toggle-track {
    width: 50px;
    height: 24px;
    padding: 0;
    border-radius: 30px;
    background-color: #4D4D4D;
    -webkit-transition: all 0.2s ease;
    -moz-transition: all 0.2s ease;
    transition: all 0.2s ease;
  }

  &.react-toggle:hover:not(.react-toggle--disabled) .react-toggle-track {
    background-color: #000000;
  }

  &.react-toggle--checked .react-toggle-track {
    background-color: ${props => props.accent};
  }

  &.react-toggle--checked:hover:not(.react-toggle--disabled) .react-toggle-track {
    background-color: #FAFAFA;
  }

  & .react-toggle-track-check {
    position: absolute;
    width: 14px;
    height: 10px;
    top: 0px;
    bottom: 0px;
    margin-top: auto;
    margin-bottom: auto;
    line-height: 0;
    left: 8px;
    opacity: 0;
    -webkit-transition: opacity 0.25s ease;
    -moz-transition: opacity 0.25s ease;
    transition: opacity 0.25s ease;
  }

  &.react-toggle--checked .react-toggle-track-check {
    opacity: 1;
    -webkit-transition: opacity 0.25s ease;
    -moz-transition: opacity 0.25s ease;
    transition: opacity 0.25s ease;
  }
  
  & .react-toggle-track-x {
    position: absolute;
    width: 10px;
    height: 10px;
    top: 0px;
    bottom: 0px;
    margin-top: auto;
    margin-bottom: auto;
    line-height: 0;
    right: 10px;
    opacity: 1;
    -webkit-transition: opacity 0.25s ease;
    -moz-transition: opacity 0.25s ease;
    transition: opacity 0.25s ease;
  }

  &.react-toggle--checked .react-toggle-track-x {
    opacity: 0;
  }

  & .react-toggle-thumb {
    transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1) 0ms;
    position: absolute;
    top: 1px;
    left: 1px;
    width: 22px;
    height: 22px;
    border: 1px solid ${props => props.accent};
    border-radius: 50%;
    background-color: #FAFAFA;

    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;

    -webkit-transition: all 0.25s ease;
    -moz-transition: all 0.25s ease;
    transition: all 0.25s ease;
  }

  &.react-toggle--checked .react-toggle-thumb {
    left: 27px;
    border-color: ${props => props.background}
  }

  &.react-toggle--focus .react-toggle-thumb {
    -webkit-box-shadow: 0px 0px 3px 2px #0099E0;
    -moz-box-shadow: 0px 0px 3px 2px #0099E0;
    box-shadow: 0px 0px 2px 3px #0099E0;
  }

  &.react-toggle:active:not(.react-toggle--disabled) .react-toggle-thumb {
    -webkit-box-shadow: 0px 0px 5px 5px #0099E0;
    -moz-box-shadow: 0px 0px 5px 5px #0099E0;
    box-shadow: 0px 0px 5px 5px #0099E0;
  }
`;

const Warning = styled.div`
  font-size: 0.9rem;
  margin-top: 0.25rem;
`;

const Settings = (props) => {
  const {
    accent,
    background,
    dispatch,
    themeLocked,
    tts,
  } = props;
  const ttsWarning = tts ? (
    <Warning>
      Speaking instructions requires the use of headphones or your device to not be silenced. The app may also pause your music indefinitely, even after the app has finished speaking.
    </Warning>
  ) : '';
  return (
    <div>
      <H1>Settings</H1>
      <H5>Theme</H5>
      <Label>
        Lock Theme Colors
        <StyledToggle
          accent={accent}
          background={background}
          defaultChecked={themeLocked}
          icons={false}
          onChange={() => dispatch(toggleThemeLock(!themeLocked))}
        />
      </Label>
      <ButtonContainer>
        <DefaultButton
          onClick={() => dispatch(setColors(generateColors()))}
        >
          Change Theme Colors
        </DefaultButton>
      </ButtonContainer>
      <H5>Other</H5>
      <Label>
        Speak Instructions
        <StyledToggle
          accent={accent}
          background={background}
          defaultChecked={tts}
          disabled={!('speechSynthesis' in window)}
          icons={false}
          onChange={() => dispatch(toggleTts(!tts))}
        />
      </Label>
      { ttsWarning }
    </div>
  );
};

Settings.defaultProps = {
  themeLocked: false,
  tts: false,
};

Settings.propTypes = {
  accent: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  themeLocked: PropTypes.bool,
  tts: PropTypes.bool,
};

const mapStateToProps = state => (
  {
    accent: state.colors.accent,
    background: state.colors.background,
    themeLocked: state.settings.themeLocked,
    tts: state.settings.tts,
  }
);

export default connect(mapStateToProps)(Settings);
