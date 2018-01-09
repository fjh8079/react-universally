import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  min-height: 100vh;
  background-color: #F7F8F8;
`;

const Input = styled.input`
`;

const Movies = () => (
  <Wrapper className="page--movies">
    <Input type="search" />
  </Wrapper>
);

export default Movies;
