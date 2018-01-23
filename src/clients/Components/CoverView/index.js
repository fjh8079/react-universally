/* eslint-disable no-console */
import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { MOVIE_DB, COVER_SIZE } from '../../../constants';

class CoverView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width: 100,
      height: 100,
    };

    this.caculateElementSize = this.caculateElementSize.bind(this);
  }
  componentDidMount() {
    this.caculateElementSize();
    window.addEventListener('resize', this.caculateElementSize);
  }
  caculateElementSize() {
    const { clientWidth } = document.querySelector('.block__section');

    setTimeout(() => {
      this.setState({
        width: clientWidth / 8,
        height: ((clientWidth / 8) / 3) * 4,
      });
    });
  }
  render() {
    const { width, height } = this.state;
    const { item } = this.props;
    const CoverDivStyled = styled.div`
      display: inline-block;
      padding: .5rem;
      width: ${width}px;
      height: ${height}px;
      box-sizing: border-box;
    `;
    const CoverImgStyle = styled.div`
      background-image: url('${MOVIE_DB.IMAGES_URI}${COVER_SIZE.SMALL}${item.poster_path}');
      background-repeat: no-repeat;
      background-size: cover;
      width: 100%;
      height: 100%;
    `;

    return (
      <CoverDivStyled key={item.id}>
        <CoverImgStyle />
        <div className="icon-eye" />
      </CoverDivStyled>
    );
  }
}

const coverItemShape = {
  id: propTypes.number,
};

CoverView.propTypes = {
  item: propTypes.shape(coverItemShape).isRequired,
};

export default CoverView;
