/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import { get as _get } from 'lodash';
import { connect } from 'react-redux';
import CoverBlock from '../../components/CoverBlock';

const Search = ({ searchResult }) => (
  <section>
    <CoverBlock results={searchResult} />
  </section>
);

Search.propTypes = {
  searchResult: PropTypes.arrayOf(PropTypes.number),
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

