import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { FlexColumnCenterContainer } from '../styles/containers';

const FlexColumn = FlexColumnCenterContainer.extend`
  font-size: 1.176rem;
  margin: 0 0 1.647rem;
  text-transform: uppercase;
`;

const PadRight = styled.span`
  padding-right: 0.75rem;
`;

const Heading = styled.div`
  text-transform: uppercase;
`;


const Next = props => (
  <FlexColumn>
    <Heading>Next</Heading>
    <div>
      <PadRight>{props.status}</PadRight>
      {props.prettyDuration}
    </div>
  </FlexColumn>
);

Next.propTypes = {
  status: PropTypes.string.isRequired,
  prettyDuration: PropTypes.string.isRequired,
};

export default Next;
