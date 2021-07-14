import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});

export const fetchPost = (id) => API.get(`/posts/${id}`);
export const getPosts_ACTION = (page) => API.get(`/posts?page=${page}`);
export const fetchPostsBySearch = (searchQuery) => API.get(`/posts/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}`);

export const put_Posts_ACTION = (newposts) => API.post('/posts', newposts);
export const Like_Posts_ACTION = (id) => API.patch(`/posts/${id}/likepost`);
export const update_Posts_ACTION = (id, updateposts) => API.patch(`/posts/${id}`, updateposts);
export const Delete_Posts_ACTION = (id) => API.delete(`/posts/${id}`);

export const login_action = (formData) => API.post('/users/signin', formData);
export const signup_action = (formData) => API.post('/users/signup', formData);