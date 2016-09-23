import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api/v1';

const createApi = (url) => axios.create({
  baseURL: url,
  headers: {'X-Requested-With': 'XMLHttpRequest'},
  responseType: 'json',
});

export function createUser(email, password) {
  return createApi(BASE_URL).post(`/users`, {
    email,
    password,
  });
}

export function deleteUser(userId) {
  return createApi(BASE_URL).delete(`/users/${userId}`);
}

export function updateUser(userId, { email, password }) {
  return createApi(BASE_URL).put(`/users/${userId}`, {
    email,
    password
  });
}
