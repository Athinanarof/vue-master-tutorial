import axios from 'axios'

// A single axios instance for the entire app
const apliClient = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: false,
  // For authentication and configuration
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getEvents() {
    return apliClient.get('/events')
  },
  getEvent(id) {
    return apliClient.get('/events/' + id)
  },
  postEvent(event) {
    return apliClient.post('/events', event)
  }
}
