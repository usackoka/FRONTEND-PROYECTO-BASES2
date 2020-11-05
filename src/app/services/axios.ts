import axios from 'axios';

const baseUrl = 'http://localhost:3100/api/';

export default {
  post: async (endpoint: string, body: any) => {
    return axios.post(`${baseUrl}${endpoint}`, body);
  },
  get: async (endpoint: string) => {
    return axios.get(`${baseUrl}${endpoint}`);
  }
};
