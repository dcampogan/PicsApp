import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID -eIXjOY3xVMmIhRDB6k3fPJyW0rKeC7G7ynPb-ph5Mk'
  }
});