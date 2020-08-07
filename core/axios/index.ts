import axios from 'axios'

export const AUTH_URL = 'https://bettabets-app.chalklineapi.com'
export const CHALK_URL = 'https://chalkbet.chalklineapi.com/api/v3'

const instance = axios.create()

instance.interceptors.request.use(function (config) {
  config.headers['X-API-KEY'] = '7F30FC1011344C898E2E9ED7AF7CC2D3'

  return config
})

export default instance
