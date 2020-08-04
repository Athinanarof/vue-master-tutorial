import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: { id: 1, name: 'Araceli Sanchez' },
    categories: ['sustainability', 'education', 'food', 'community'],
    todos: [
      { id: 1, text: 'abc', done: false },
      { id: 2, text: 'def', done: false },
      { id: 3, text: 'ghi', done: false },
      { id: 4, text: 'jkl', done: true },
      { id: 5, text: 'mnn', done: true }
    ]
  },
  mutations: {},
  actions: {},
  modules: {},
  getters: {
    // This is in case we want to access to this value from multiple values in our app
    catLength: state => {
      return state.categories.length
    },
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    // Getter inside of getter
    activeTodos: (state, getters) => {
      return state.todos.length - getters.doneTodos.length
    },
    // Getter using parameter id
    getTodoById: state => id => {
      return state.todos.find(event => event.id === id)
    }
  }
})
