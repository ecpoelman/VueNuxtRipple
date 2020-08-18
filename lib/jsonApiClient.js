/**
 * Client for JSON API server.
 * We use "jsonapi-parse" package to format responses :
 * It resolves relationships and included objects nicely in the final data object.
 */
import jsonapiParse from 'jsonapi-parse';
import axios from 'axios';
import qs from 'qs';

// Add a response interceptor to format response with jsonapi-parse
// axios.interceptors.response.use(response => {
//   console.log(response);
//   return jsonapiParse.parse(response.data).data;
// });

export default {
  get: async (uri, params = null) => {
    const query = params ? '?' + qs.stringify(params, {indices: false}) : '';
    const url = `${process.env.serverApiUrl}/${uri}${query}`;
    let response = await axios.get(url);
    console.log(response);
    return jsonapiParse.parse(response.data).data;
  },
  post: async (uri, data = null) => {
    const url = `${process.env.serverApiUrl}/${uri}`;
    const options = {
      headers: {
        'Content-Type': 'application/vnd.api+json',
      }
    };
    let response = await axios.post(url, data, options);
    return jsonapiParse.parse(response.data).data;
  },
};

