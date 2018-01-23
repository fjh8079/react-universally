import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { get as _get } from 'lodash';
import CoverView from '../CoverView';
import { movieItemShape } from '../../../constants/itemShape';

const CoverBlock = ({ results, entities }) => {
  let renderItems = null;
  if (results.length > 0) {
    renderItems = results.map((item) => {
      const itemDetail = entities[item];
      return <CoverView item={itemDetail} key={item} />;
    });
  }

  const CoverBlockStyled = styled.div`
    display: block;
    padding: 2rem 5%;
  `;

  return (
    <CoverBlockStyled>
      <div className="block__section">
        { renderItems }
      </div>
    </CoverBlockStyled>
  );
};

CoverBlock.propTypes = {
  results: propTypes.arrayOf(propTypes.number).isRequired,
  entities: propTypes.shape(movieItemShape).isRequired,
};

function mapStateToProps(state) {
  const entities = _get(state, 'entities.entities.movies', {});
  return {
    entities,
  };
}

export default connect(mapStateToProps)(CoverBlock);
