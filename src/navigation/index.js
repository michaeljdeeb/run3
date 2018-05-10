import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faInfo, faSlidersH } from '@fortawesome/fontawesome-free-solid';
import { faCalendar } from '@fortawesome/fontawesome-free-regular';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
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
  display: flex;
  flex-direction: column;
  padding: 0.45rem 0;
  text-decoration: none;
  text-transform: uppercase;
`;

const Icon = styled(FontAwesomeIcon)`
  padding-bottom: 0.125rem;
`;

const NavLinkTitle = styled.span`
  font-size: 0.75rem;
  font-weight: 700;
`;

const active = {
  color: '#fff',
};

const linkStyle = background => ({
  color: background,
});

const Navigation = props => (
  <Nav style={{ backgroundColor: props.accent }}>
    <StyledNavLink exact to="/" style={linkStyle(props.background)} activeStyle={active}>
      <Icon icon={faInfo} size="2x" />
      <NavLinkTitle>Home</NavLinkTitle>
    </StyledNavLink>
    <StyledNavLink to="/schedule" style={linkStyle(props.background)} activeStyle={active}>
      <Icon icon={faCalendar} size="2x" />
      <NavLinkTitle>Schedule</NavLinkTitle>
    </StyledNavLink>
    <StyledNavLink to="/settings" style={linkStyle(props.background)} activeStyle={active}>
      <Icon icon={faSlidersH} size="2x" />
      <NavLinkTitle>Settings</NavLinkTitle>
    </StyledNavLink>
  </Nav>
);

export default Navigation;
