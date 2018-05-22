import styled from 'styled-components';

export const UL = styled.ul`
  list-style: none;
  margin: 0;
  padding-left: 0;
`;

export const DashedLI = styled.li`
  &::before {
    content: '- ';
  }
`;

export default UL;
