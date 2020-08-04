import Vue from 'vue'
import VueRouter from 'vue-router'
import EventCreate from '../views/EventCreate.vue'
import EventList from '../views/EventList.vue'
import EventShow from '../views/EventShow.vue'

Vue.use(VueRouter)
const mode = 'history'
const routes = [
  {
    path: '/',
    name: 'event-list',
    component: EventList
  },
  {
    path: '/event/:id', // dynamic segment
    name: 'event-show',
    component: EventShow,
    props: true // Sending parameter via props
  },
  {
    path: '/event/create',
    name: 'event-create',
    component: EventCreate
  }
]

const router = new VueRouter({
  mode,
  routes
})

export default router
