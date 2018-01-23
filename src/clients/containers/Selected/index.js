/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import { get as _get } from 'lodash';
import { connect } from 'react-redux';
import CoverBlock from '../../components/CoverBlock';

const Selected = ({ selectedIds }) => (
  <section>
    <CoverBlock results={selectedIds} />
  </section>
);

Selected.propTypes = {
  selectedIds: PropTypes.arrayOf(PropTypes.number),
};

Selected.defaultProps = {
  selectedIds: [],
};

function mapStateToProps(state) {
  const pages = _get(state, 'pages', {});
  const moviesPage = _get(pages, 'movies', {});
  const selectedIds = _get(moviesPage, 'selectedIds', []);
  return {
    selectedIds,
  };
}

export default connect(mapStateToProps)(Selected);

