import xhr from './xhr';

const getSearchMovie = (keyword = '') => {
  const params = {
    query: keyword,
  };
  xhr.get('/search/movie', params)
    .then(res => console.log(res));
};

module.exports = {
  getSearchMovie,
};
