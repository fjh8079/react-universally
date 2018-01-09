import superagent from 'superagent';
import nocache from 'superagent-no-cache';
import { MOVIE_DB } from '../constants';

exports.get = (url, params) => {
  let fetchUrl = `${MOVIE_DB.BASE_URI}?api_key=${MOVIE_DB.AUTH_KEY_V3}`;

  const keys = Object.keys(params);
  const values = Object.values(params);
  for (let i = 0; i <= keys.length; i += 1) {
    fetchUrl += `&${keys[i]}=${encodeURIComponent(values[i])}`;
  }

  return new Promise((resolve, reject) => {
    superagent
      .get(fetchUrl)
      .use(nocache) // Prevents caching of *only* this request
      .end((err, res) => {
        if (err) reject(err);
        resolve(res);
      });
  });
};

