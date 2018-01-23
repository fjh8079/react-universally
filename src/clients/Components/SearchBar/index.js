/* eslint-disable no-console */
import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { get as _get } from 'lodash';
import { onSearchMoviesAction } from '../../action';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.onHandleSearch = this.onHandleSearch.bind(this);
  }

  onHandleSearch(e) {
    if (e.key === 'Enter') {
      const { dispatch } = this.props;
      const inputText = this.textInput.value;
      dispatch(onSearchMoviesAction(inputText));
    }
  }

  render() {
    const { keyword } = this.props;
    const Input = styled.input`
      border: 1px solid #4F5D75;
      background-color: #4F5D75;
      padding: 0.5rem;
      border-radius: 20px;
      color: #D0CDD7;
      float: right;
    `;

    return (
      <Input type="search" innerRef={(input) => { this.textInput = input; }} defaultValue={keyword} onKeyDown={this.onHandleSearch} />
    );
  }
}

SearchBar.propTypes = {
  dispatch: propTypes.func.isRequired,
  keyword: propTypes.string,
};

SearchBar.defaultProps = {
  keyword: '',
};

function mapStateToProps(state) {
  const pages = _get(state, 'pages', {});
  const moviesPage = _get(pages, 'movies', {});
  const keyword = _get(moviesPage, 'keyword', '');
  return {
    keyword,
  };
}

export default connect(mapStateToProps)(SearchBar);
