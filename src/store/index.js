import Vue from 'vue'
import Vuex from 'vuex'
import EventService from '@/services/EventService.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: { id: 1, name: 'Araceli Sanchez' },
    categories: ['sustainability', 'education', 'food', 'community'],
    events: []
  },

  // Actions wrap business logic for the mutations
  actions: {
    // commit comes from the context object -> all the information of Store
    createEvent({ commit }, event) {
      return EventService.postEvent(event).then(() => {
        commit('ADD_EVENT', event)
      })
    }
  },
  modules: {},
  // mutations/update of state
  // Write them down in UPPERCASE to make a distinction between calling an Action o a Mutation (also it is because in FLUX are written like that)  mutations: {},
  mutations: {
    // event -> new payload
    ADD_EVENT(state, event) {
      state.events.push(event)
    }
  },
  getters: {
    getEventById: state => id => {
      return state.events.find(event => event.id === id)
    }
  }
})
