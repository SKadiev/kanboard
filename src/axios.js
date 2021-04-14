import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://kanboard-34536-default-rtdb.firebaseio.com/',
});

export default instance;
