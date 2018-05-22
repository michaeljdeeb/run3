import styled from 'styled-components';

export const FlexContainer = styled.div`
  display: flex;
`;

export const FlexCenterContainer = FlexContainer.extend`
  justify-content: center;
`;

export const FlexColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FlexColumnCenterContainer = FlexColumnContainer.extend`
  align-items: center;
`;

export default FlexContainer;
