import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Toggle from 'react-toggle';

import { setColors } from '../redux/colors';
import { toggleThemeLock, toggleTts } from '../redux/settings';
import generateColors from '../utils/generateColors';

const Button = styled.button`
  border: 0.2rem solid #fff;
  border-radius: 3rem;
  font-weight: 700;
  padding: 0.5rem 1rem;
  margin-top: 0.5rem;
  text-transform: uppercase;
`;

const Label = styled.label`
  align-items: center;
  display: flex;
  font-size: 1.1rem;
  padding: .4rem 0;
  text-transform: uppercase;
`;

const StyledToggle = styled(Toggle)`
  margin-right: 1.17647rem;

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

const SettingsCategory = styled.h3`
  margin-bottom: 0.25rem;
`;

const SubHeading = styled.h5`
  margin-bottom: 0.25rem;
  margin-top: 0.25rem;
  text-transform: uppercase;
`;

class Settings extends Component {
  render() {
    const { accent, background, dispatch, themeLocked, tts } = this.props;
    const ttsWarning = tts ? (
      <div>
        <SubHeading>Note</SubHeading>
        Speaking instructions requires the use of headphones or your device to not be silenced. The app may also pause your music indefinitely, even after the app has finished speaking.
      </div>
    ) : '';
    return (
        <div>
          <h1>Settings</h1>
          <SettingsCategory>Theme</SettingsCategory>
          <Label>
            <StyledToggle
              accent={accent}
              background={background}
              defaultChecked={themeLocked}
              icons={false}
              onChange={() => dispatch(toggleThemeLock(!themeLocked))}
            />
            Lock Theme Colors
          </Label>
          <div>
            <Button onClick={() => dispatch(setColors(generateColors()))}>Change Theme Colors</Button>
          </div>
          <SettingsCategory>Other</SettingsCategory>
          <Label>
            <StyledToggle
              accent={accent}
              background={background}
              defaultChecked={tts}
              disabled={!('speechSynthesis' in window)}
              icons={false}
              onChange={() => dispatch(toggleTts(!tts))}
            />
            Speak Instructions
          </Label>
          { ttsWarning }
        </div>
    );
  }
}

const mapStateToProps = state => (
  {
    accent: state.colors.accent,
    background: state.colors.background,
    themeLocked: state.settings.themeLocked,
    tts: state.settings.tts,
  }
);

export default connect(mapStateToProps)(Settings);
