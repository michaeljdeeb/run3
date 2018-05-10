import React, { Component } from 'react';
import styled from 'styled-components';

const AttributionTitle = styled.h5`
  text-transform: uppercase;
  margin: 0.5rem 0;
`;

class Settings extends Component {
  render() {
    return (
      <div>
        <h1>Settings</h1>
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

export default Settings;
