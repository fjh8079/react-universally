import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { get as _get } from 'lodash';
import { Section } from '../Styled';
import { onSearchMoviesAction } from '../../action';

class Movies extends Component {
  constructor(props) {
    super(props);

    // this.onKeyUp = this.onKeyUp.bind(this);
    this.onSearchMovies = this.onSearchMovies.bind(this);
  }

  onSearchMovies() {
    const { dispatch } = this.props;
    const inputText = this.textInput.value;
    dispatch(onSearchMoviesAction(inputText));
  }

  render() {
    const { keyword } = this.props;
    const Wrapper = styled.div`
      min-height: 100vh;
      background-color: #f7f8f8;
    `;
    const Input = styled.input`
      border: 2px solid #e8d5c4;
      width: 100%;
      padding: 0.5rem;
      color: #bf9086;
      margin-bottom: 1rem;
    `;
    const ContentSection = Section.extend`
      padding-top: 1.5rem;
    `;
    const Button = styled.div`
      background-color: #BF9086;
      color: #FAE4D2;
      border: 2px solid #BF9086;
      width: 100%;
      padding: .5rem;
      box-sizing: border-box;
      text-align: center;
      cursor: pointer;
    `;

    return (
      <Wrapper className="page--movies">
        <ContentSection>
          <Input type="search" innerRef={(input) => { this.textInput = input; }} defaultValue={keyword} />
          <Button onClick={this.onSearchMovies}>
            Submit
          </Button>
        </ContentSection>
      </Wrapper>
    );
  }
}

Movies.propTypes = {
  dispatch: propTypes.func.isRequired,
  keyword: propTypes.string,
};

Movies.defaultProps = {
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

export default connect(mapStateToProps)(Movies);
