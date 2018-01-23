import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Section } from '../Styled';
import SearchBar from '../../components/SearchBar';

const HeaderSection = Section.extend`
`;

const Header = styled.header`
  padding: 2rem 0;
  border-bottom: 1px solid #4F5D75;
`;

const StyledLink = styled(Link)`
  color: #D0CDD7;
  text-decoration: none;
  padding: 0 1rem;
  font-size: 1rem;
  line-height: 40px;
  &:hover {
    color: #FFF;
  }
`;

const NavStyle = styled.nav`
  display: inline-block;
  float: left;
`;

const Nav = () => (
  <HeaderSection>
    <Header className="nav">
      <NavStyle>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/search">Search</StyledLink>
        <StyledLink to="/selected">Selected Movie</StyledLink>
      </NavStyle>
      <SearchBar />
      <div className="clearall" />
    </Header>
  </HeaderSection>
);

export default Nav;
