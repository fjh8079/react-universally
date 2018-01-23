/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import { get as _get } from 'lodash';
import { connect } from 'react-redux';
import { movieItemShape } from '../../../constants/itemShape';
import CoverBlock from '../../Components/CoverBlock';

const Search = ({ searchResult }) => (
  <section>
    <CoverBlock results={searchResult} />
  </section>
);

Search.propTypes = {
  searchResult: PropTypes.arrayOf(PropTypes.shape(movieItemShape)),
};

Search.defaultProps = {
  searchResult: [],
};

function mapStateToProps(state) {
  const pages = _get(state, 'pages', {});
  const moviesPage = _get(pages, 'movies', {});
  const searchResult = _get(moviesPage, 'searchResult', []);
  return {
    searchResult,
  };
}

export default connect(mapStateToProps)(Search);

