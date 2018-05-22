import React from 'react';
import PropTypes from 'prop-types';
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
  font-weight: 700;
  padding: 1rem 4rem;
  text-decoration: none;
  text-transform: uppercase;
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

GetStarted.defaultProps = {
  week: 1,
  workout: 1,
};

GetStarted.propTypes = {
  week: PropTypes.number,
  workout: PropTypes.number,
};

export default GetStarted;
