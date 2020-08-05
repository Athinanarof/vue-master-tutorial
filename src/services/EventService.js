import axios from 'axios'

// A single axios instance for the entire app
const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: false,
  // For authentication and configuration
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getEvents(perPage, page) {
    return apiClient.get('/events?_limit=' + perPage + '&_page=' + page)
  },
  getEvent(id) {
    return apiClient.get('/events/' + id)
  },
  postEvent(event) {
    return apiClient.post('/events', event)
  }
}
