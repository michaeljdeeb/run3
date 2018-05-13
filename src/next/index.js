import React from 'react';
import styled from 'styled-components';

const FlexColumn = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
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

export default Next;
