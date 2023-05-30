
import axios from "axios";

const API_URL = 'http://localhost:8000/api/';

export const postRequest = (endpoint, data) => {
  return axios.post(API_URL + endpoint, data);
};

export const getRequest = (endpoint) => {
  return axios.get(API_URL + endpoint);
};



    