import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import Icon from '../icon';

import supportsBackdrop from '../utils/supportsBackdrop';

const Nav = styled.nav`
  background-color: ${props => props.blur ? props.accentAlpha : props.accent};
  backdrop-filter: ${props => props.blur ? 'blur(20px)' : 'none'};
  bottom: 0;
  display: flex;
  justify-content: space-around;
  left: 0;
  margin: 0;
  padding-bottom: env(safe-area-inset-bottom);
  right: 0;
  position: fixed;
`;

const StyledNavLink = styled(NavLink)`
  align-items: center;
  color: ${props => props.background};
  display: flex;
  fill: ${props => props.background};
  flex-direction: column;
  justify-content: flex-end;
  padding: 0.45rem 0;
  text-decoration: none;
  text-transform: uppercase;
`;

const StyledIcon = styled(Icon)`
  padding-bottom: 0.125rem;
`;

const StyledSvg = styled.svg`
  padding-bottom: 0.125rem;
`;

const NavLinkTitle = styled.span`
  font-size: 0.75rem;
  font-weight: 700;
`;

const active = {
  color: '#fff',
  fill: '#fff',
};

const logo = (
  <StyledSvg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 0 24 23">
    <path d="M20.9996 17.004h-14.82l1.667-10h3.153c.553 0 1-.448 1-1s-.447-1-1-1h-5c-2.206 0-4-1.794-4-4 0-.552-.447-1-1-1-.553 0-1 .448-1 1 0 2.198 1.192 4.118 2.959 5.163l-1.933 11.595c-.624.551-1.026 1.346-1.026 2.242 0 1.654 1.346 3 3 3h18c1.654 0 3-1.346 3-3s-1.346-3-3-3" fillRule="evenodd" />
    <text y="39" fontSize="5" fontWeight="bold" fontFamily="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif">
      Created by Ben Davis
    </text>
    <text y="44" fontSize="5" fontWeight="bold" fontFamily="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif">
      from the Noun Project
    </text>
  </StyledSvg>
);

const Navigation = props => (
  <Nav accentAlpha={props.accentAlpha} accent={props.accent} blur={supportsBackdrop()}>
    <StyledNavLink exact to="/" background={props.background} activeStyle={active}>
      { logo }
      <NavLinkTitle>Home</NavLinkTitle>
    </StyledNavLink>
    <StyledNavLink to="/schedule" background={props.background} activeStyle={active}>
      <StyledIcon icon="schedule" size="2x" />
      <NavLinkTitle>Schedule</NavLinkTitle>
    </StyledNavLink>
    <StyledNavLink to="/settings" background={props.background} activeStyle={active}>
      <StyledIcon icon="settings" size="2x" />
      <NavLinkTitle>Settings</NavLinkTitle>
    </StyledNavLink>
  </Nav>
);

export default Navigation;
