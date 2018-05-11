import React from 'react';
import styled from 'styled-components';

const AttributionTitle = styled.h5`
  text-transform: uppercase;
  margin: 0.5rem 0;
`;

const Acknowledgements = () => (
  <div>
    <h1>Acknowledgements</h1>
    <p>
      Treadmill icon provided by <a href="https://thenounproject.com/smashicons/">Ben Davis</a> from <a href="https://thenounproject.com">The Noun Project</a>.
    </p>
    <p>All other icons provided by Font Awesome.</p>
    <AttributionTitle>Font Awesome Free 5.0.10</AttributionTitle>
    <a href="https://fontawesome.com">https://fontawesome.com</a>
    <AttributionTitle>License</AttributionTitle>
    <a href="https://fontawesome.com/license">https://fontawesome.com/license</a>
    <div>(Icons: CC BY 4.0, Code: MIT License)</div>
  </div>
);

export default Acknowledgements;
