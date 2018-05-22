import styled from 'styled-components';

export const Button = styled.button`
  appearance: none;
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  padding: 0.1rem;
`;

export const DefaultButton = Button.extend`
  border: 0.2rem solid #fff;
  border-radius: 3rem;
  font-weight: 700;
  margin-top: ${props => (props.message ? '1rem' : 0)};
  padding: 0.5rem 1rem;
  text-transform: uppercase;
`;

export default Button;
