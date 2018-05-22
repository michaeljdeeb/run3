import styled from 'styled-components';

export const Input = styled.input`
  appearance: none;
  background: none;
  box-sizing: border-box;
  border: 0.2rem solid #fff;
  border-radius: 0;
  color: #fff;
  margin-bottom: 1rem;
  padding: 0.47rem;
  width: 100%;

  &::placeholder {
    color: #fff;
  }
`;

export const TextArea = styled.textarea`
  appearance: none;
  background: none;
  box-sizing: border-box;
  border: 0.2rem solid #fff;
  border-radius: 0;
  color: #fff;
  margin-bottom: 1rem;
  padding: 0.47rem;
  width: 100%;

  &::placeholder {
    color: #fff;
  }
`;

export default Input;
