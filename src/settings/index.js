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
`;

const AttributionTitle = styled.h5`
  text-transform: uppercase;
  margin: 0.5rem 0;
`;

class Settings extends Component {
  render() {
    const { dispatch, themeLocked } = this.props;
    return (
      <div>
        <h1>Settings</h1>
        <h2>Theme</h2>
        <Button onClick={() => dispatch(setColors(generateColors()))}>Change Theme Colors</Button>
        <label>
          <Toggle
            defaultChecked={themeLocked}
            icons={false}
            onChange={() => dispatch(toggleThemeLock(!themeLocked))}
          />
          Lock Theme Colors
        </label>
        <p>Icons provided by Font Awesome.</p>
        <AttributionTitle>Font Awesome Free 5.0.10</AttributionTitle>
        <a href="https://fontawesome.com">https://fontawesome.com</a>
        <AttributionTitle>License</AttributionTitle>
        <a href="https://fontawesome.com/license">https://fontawesome.com/license</a>
        <div>(Icons: CC BY 4.0, Code: MIT License)</div>
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    themeLocked: state.settings.themeLocked,
  }
);

export default connect(mapStateToProps)(Settings);
