import superagent from 'superagent';
import { get as _get } from 'lodash';
import { MOVIE_DB } from '../constants';

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return true;
  }
  return false;
}

exports.get = (url, params = {}) => {
  let fetchUrl = `${MOVIE_DB.BASE_URI}${url}?api_key=${MOVIE_DB.AUTH_KEY_V3}`;

  const keys = Object.keys(params);
  const values = Object.values(params);
  for (let i = 0; i < keys.length; i += 1) {
    fetchUrl += `&${keys[i]}=${encodeURIComponent(values[i])}`;
  }
  fetchUrl += '&language=zh-TW&region=TW';

  return new Promise((resolve, reject) => {
    superagent
      .get(fetchUrl)
      .set('Content-Type', 'application/json')
      .end((err, res) => {
        if (err || !checkStatus(res)) reject(err);
        const resBody = _get(res, 'body', {});
        resolve(resBody);
      });
  });
};
