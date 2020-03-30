import axios from 'axios';

const unsplash = axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization:
      'Client-ID 87042568c15b55933c302b278565942e06a80356e041ebe6ba273ff93186a67a'
  }
});

export default unsplash;
