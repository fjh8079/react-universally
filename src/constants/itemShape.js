import PropTypes from 'prop-types';

const movieItemShape = {
  adult: PropTypes.bool,
  backdrop_path: PropTypes.string,
  genre_ids: PropTypes.arrayOf(PropTypes.number),
  id: PropTypes.number,
  original_language: PropTypes.string,
  original_title: PropTypes.string,
  overview: PropTypes.string,
  popularity: PropTypes.number,
  poster_path: PropTypes.string,
  release_date: PropTypes.string,
  title: PropTypes.string,
  video: PropTypes.bool,
  vote_average: PropTypes.number,
  vote_count: PropTypes.number,
};

exports = {
  movieItemShape,
};
