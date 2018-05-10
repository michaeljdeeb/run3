import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 2.5rem 0;
`;
const HeroLink = styled(Link)`
  border: 0.2rem solid #fff;
  border-radius: 3rem;
  padding: 1rem 4rem;
  text-decoration: none;
`;

const GetStarted = (props) => {
  const { week, workout } = props;
  const text = (week === 1 && workout === 1) ? 'Get Started!' : `Start ${week}-${workout}`;
  return (
    <HeroContainer>
      <HeroLink to={`/week/${week}/workout/${workout}`}>{text}</HeroLink>
    </HeroContainer>
  );
};

export default GetStarted;
