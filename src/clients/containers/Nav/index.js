import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Section } from '../Styled';

const HeaderSection = Section.extend`
  background-color: #FAE4D2;
`;

const Header = styled.header`
  padding: 2rem 0;
`;

const StyledLink = styled(Link)`
  color: #BF9086;
  text-decoration: none;
  padding-right: 2rem;
`;

const Nav = () => (
  <HeaderSection>
    <Header className="nav">
      <nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/about">About</StyledLink>
        <StyledLink to="/todos">todos</StyledLink>
      </nav>
    </Header>
  </HeaderSection>
);

export default Nav;
