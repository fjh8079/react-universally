/* eslint-disable no-console */
import xhr from './xhr';

const getSearchMovie = (keyword = '') => {
  const params = {
    query: keyword,
  };
  return xhr.get('/search/movie', params);
};

module.exports = {
  getSearchMovie,
};
