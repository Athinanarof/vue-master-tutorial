import EventService from '@/services/EventService.js'

export const namespaced = true

export const state = {
  events: [],
  eventsTotal: 0,
  event: {}
}

// mutations/update of state
// Write them down in UPPERCASE to make a distinction between calling an Action o a Mutation (also it is because in FLUX are written like that)  mutations: {},
export const mutations = {
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
}

// Actions wrap business logic for the mutations
export const actions = {
  // commit comes from the context object -> all the information of Store
  createEvent({ commit, rootState }, event) {
    // Calling a state inside a module
    console.log('User creating event is ' + rootState.user.user.name)

    // Calling action in other namespace
    // module/action, payload, root
    distpatch('moduleName/actionToCall', null, { root: true })
    return EventService.postEvent(event).then(() => {
      commit('ADD_EVENT', event)
    })
  },
  fetchEvents({ commit }, { perPage, page }) {
    EventService.getEvents(perPage, page)
      .then(response => {
        commit('SET_EVENTS_TOTAL', parseInt(response.headers['x-total-count']))
        commit('SET_EVENTS', response.data) // <--- set the events data
      })
      .catch(error => {
        console.log('There was an error:', error.response)
      })
  },
  fetchEvent({ commit, getters }, id) {
    var event = getters.getEventById(id)

    if (event) {
      commit('SET_EVENT', event)
    } else {
      // <--- Send the prop id to our EventService
      EventService.getEvent(id)
        .then(response => {
          commit('SET_EVENT', response.data)
        })
        .catch(error => {
          console.log('There was an error:', error.response)
        })
    }
  }
}

export const getters = {
  getEventById: state => id => {
    return state.events.find(event => event.id === id)
  }
}
