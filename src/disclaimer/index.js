import React from 'react';
import styled from 'styled-components';

const Heading = styled.h5`
  margin: 0;
  text-transform: uppercase;
`;

const List = styled.ul`
  list-style: none;
  padding-left: 0;
`;

const ListItem = styled.li`
  font-weight: 700;

  &::before {
    content: '- ';
  }
`;

const Disclaimer = () => (
  <div>
    <Heading>
      Progressive Web App Limitations
    </Heading>
    <List>
      <ListItem>Add to your home screen before starting</ListItem>
      <ListItem>Run3 must stay open</ListItem>
      <ListItem>Your phone must stay unlocked</ListItem>
    </List>
    <p>
      Pick your running playlist and finish those replies before starting.
    </p>
  </div>
);

export default Disclaimer;
