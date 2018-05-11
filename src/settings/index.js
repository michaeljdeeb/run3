import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Toggle from 'react-toggle';
import 'react-toggle/style.css';

import { setColors } from '../redux/colors';
import { toggleThemeLock } from '../redux/settings';
import generateColors from '../utils/generateColors';

const Button = styled.button`
  border: 0.2rem solid #fff;
  border-radius: 3rem;
  padding: 0.5rem 1rem;
  margin-bottom: 0.5rem;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
`;

const StyledToggle = styled(Toggle)`
  &.react-toggle .react-toggle-track {
    background-color: ${props => props.background};
  }
  &.react-toggle--checked .react-toggle-track {
    background-color: ${props => props.accent}

  }
  &.react-toggle--checked:hover .react-toggle-track {
    background-color: ${props => props.accent} !important;
  }
  &.react-toggle--checked .react-toggle--thumb {
    border-color: ${props => props.accent} !important;
  }
`;

class Settings extends Component {
  render() {
    const { accent, background, dispatch, themeLocked } = this.props;
    return (
      <div>
        <h1>Settings</h1>
        <h2>Theme</h2>
        <div>
          <Button onClick={() => dispatch(setColors(generateColors()))}>Change Theme Colors</Button>
        </div>
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
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    accent: state.colors.accent,
    background: state.colors.background,
    themeLocked: state.settings.themeLocked,
  }
);

export default connect(mapStateToProps)(Settings);
