import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import CoverView from '../CoverView';

const CoverBlock = ({ results }) => {
  let renderItems = null;
  if (results.length > 0) {
    renderItems = results.map(item => (
      <CoverView item={item} key={item.id} />
    ));
  }

  const CoverBlockStyled = styled.div`
    display: block;
    padding: 2rem 5%;
    cursor: pointer;
  `;

  return (
    <CoverBlockStyled>
      <div className="block__section">
        { renderItems }
      </div>
    </CoverBlockStyled>
  );
};

const coverBlockItemShape = {
  id: propTypes.number,
};

CoverBlock.propTypes = {
  results: propTypes.arrayOf(propTypes.shape(coverBlockItemShape)).isRequired,
};

export default CoverBlock;
