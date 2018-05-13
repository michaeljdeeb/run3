import React, { PureComponent } from 'react';
import styled from 'styled-components';

import Contact from '../contact';

import { unsetLastViewed } from '../redux/lastViewed';

const AttributionTitle = styled.h5`
  text-transform: uppercase;
  margin: 0.5rem 0;
`;

class Acknowledgements extends PureComponent {
  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch(unsetLastViewed());
  }

  render() {
    return (
      <div>
        <h1>About</h1>
        <AttributionTitle>Feedback</AttributionTitle>
        <p>
          If you have any feedback about Run Three please fill out the form below. Your email address is only necessary if you would like a reply.
        </p>
        <Contact />
        <AttributionTitle>Acknowledgements</AttributionTitle>
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
  }
}

export default Acknowledgements;
