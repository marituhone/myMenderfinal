import axios from 'axios';
import { API_URL } from './api';

import authHeader from './auth-header';



class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'all');
  }

  getUserNormal() {
    return axios.get(API_URL + 'user', { headers: authHeader() });
  }

  getSuperAdmin() {
    return axios.get(API_URL + 'superadmin', { headers: authHeader() });
  }

  getAdmin() {
    return axios.get(API_URL + 'admin', { headers: authHeader() });
  }
}

export default new UserService();
