/* eslint-disable no-console */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { get as _get } from 'lodash';
import { onAddToSelected } from '../../action';
import { MOVIE_DB, COVER_SIZE } from '../../../constants';

class CoverView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width: 100,
      height: 100,
    };

    this.caculateElementSize = this.caculateElementSize.bind(this);
    this.onSelected = this.onSelected.bind(this);
  }
  componentDidMount() {
    this.caculateElementSize();
    window.addEventListener('resize', this.caculateElementSize);
  }
  onSelected() {
    const { dispatch } = this.props;
    dispatch(onAddToSelected(this.selectId));
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
    const { item, selectedIds } = this.props;
    const CoverDivStyled = styled.div`
      display: inline-block;
      padding: .5rem;
      width: ${width}px;
      height: ${height}px;
      box-sizing: border-box;
    `;
    const CoverImgStyle = styled.div`
      box-sizing: border-box;
      background-image: url('${MOVIE_DB.IMAGES_URI}${COVER_SIZE.SMALL}${item.poster_path}');
      background-repeat: no-repeat;
      background-size: cover;
      width: 100%;
      height: 100%;
      cursor: pointer;
      border: 0 solid #EF8354;
      border-width: ${selectedIds.indexOf(item.id) !== -1 ? '4px' : 'none'};
    `;

    return (
      <CoverDivStyled key={item.id}>
        <CoverImgStyle onClick={this.onSelected} ref={() => { this.selectId = item.id; }} />
      </CoverDivStyled>
    );
  }
}

const coverItemShape = {
  id: propTypes.number,
};

CoverView.propTypes = {
  dispatch: propTypes.func.isRequired,
  item: propTypes.shape(coverItemShape).isRequired,
  selectedIds: propTypes.arrayOf(propTypes.number),
};

CoverView.defaultProps = {
  selectedIds: [],
};

function mapStateToProps(state) {
  const selectedIds = _get(state, 'pages.movies.selectedIds', []);
  return {
    selectedIds,
  };
}

export default connect(mapStateToProps)(CoverView);
