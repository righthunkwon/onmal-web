import axios from 'axios';

const instance = axios.create({
  baseURL: '',
  withCredentials: true,
});

instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

instance.interceptors.response.use(
  // when 200
  (res) => {
    return res;
  },

  // when except 200
  async (err) => {
    return Promise.reject(err);
  }
);

export default instance;
