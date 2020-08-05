import Vue from 'vue'
import Vuex from 'vuex'
import EventService from '@/services/EventService.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: { id: 1, name: 'Araceli Sanchez' },
    categories: ['sustainability', 'education', 'food', 'community'],
    events: [],
    eventsTotal: 0,
    event: {}
  },
  modules: {},
  // mutations/update of state
  // Write them down in UPPERCASE to make a distinction between calling an Action o a Mutation (also it is because in FLUX are written like that)  mutations: {},
  mutations: {
    // event -> new payload
    ADD_EVENT(state, event) {
      state.events.push(event)
    },
    SET_EVENTS(state, events) {
      state.events = events
    },
    SET_EVENTS_TOTAL(state, eventsTotal) {
      state.eventsTotal = eventsTotal
    },
    SET_EVENT(state, event) {
      state.event = event
    }
  },
  // Actions wrap business logic for the mutations
  actions: {
    // commit comes from the context object -> all the information of Store
    createEvent({ commit }, event) {
      return EventService.postEvent(event).then(() => {
        commit('ADD_EVENT', event)
      })
    },
    fetchEvents({ commit }, { perPage, page }) {
      EventService.getEvents(perPage, page)
        .then(response => {
          commit(
            'SET_EVENTS_TOTAL',
            parseInt(response.headers['x-total-count'])
          )
          commit('SET_EVENTS', response.data) // <--- set the events data
        })
        .catch(error => {
          console.log('There was an error:', error.response)
        })
    },
    fetchEvent({ commit }, id) {
      var event = getters.getEventById(id) // See if we already have this event

      if (event) {
        // If we do, set the event
        commit('SET_EVENT', event)
      } else {
        // If not, get it with the API.
        EventService.getEvent(id) // <--- Send the prop id to our EventService
          .then(response => {
            commit('SET_EVENT', response.data)
          })
          .catch(error => {
            console.log('There was an error:', error.response)
          })
      }
    }
  },
  getters: {
    getEventById: state => id => {
      return state.events.find(event => event.id === id)
    }
  }
})
