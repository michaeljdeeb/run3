import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Contact from '../contact';

import { unsetLastViewed } from '../redux/lastViewed';

import { H1, H5 } from '../styles/headings';
import { NoMarginP } from'../styles/paragraph';

class Acknowledgements extends PureComponent {
  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch(unsetLastViewed());
  }

  render() {
    return (
      <div>
        <H1>About</H1>
        <Contact />
        <H5>Acknowledgements</H5>
        <NoMarginP>
          Treadmill icon provided by <a href="https://thenounproject.com/smashicons/">Ben Davis</a> from <a href="https://thenounproject.com">The Noun Project</a>.
        </NoMarginP>
        <p>All other icons provided by Font Awesome.</p>
        <H5>Font Awesome Free 5.0.10</H5>
        <a href="https://fontawesome.com">https://fontawesome.com</a>
        <H5>License</H5>
        <a href="https://fontawesome.com/license">https://fontawesome.com/license</a>
        <div>(Icons: CC BY 4.0, Code: MIT License)</div>
      </div>
    );
  }
}

Acknowledgements.propTypes = {
  dispatch: PropTypes.any.isRequired,
};

export default Acknowledgements;
