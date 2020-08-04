import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://chalkbet.chalklineapi.com/api/v3',
})

instance.interceptors.request.use(function (config) {
  config.headers['X-API-KEY'] = '7F30FC1011344C898E2E9ED7AF7CC2D3'
  return config
})

export default instance
