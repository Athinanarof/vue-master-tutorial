<template>
  <div>
    <h1>Event Listing</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
    <template v-if="page != 1">
      <router-link
        :to="{ name: 'event-list', query: { page: page - 1 } }"
        rel="prev"
        >Prev Page</router-link
      >
      &nbsp;|&nbsp;
    </template>
    <router-link
      v-if="hasNextPage"
      :to="{ name: 'event-list', query: { page: page + 1 } }"
      rel="prev"
      >Next Page</router-link
    >
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
import { mapState } from 'vuex'
export default {
  components: {
    EventCard // ES6, shorthand
  },
  created() {
    this.perPage = 3 // Setting perPage here and not in data means it won't be reactive.
    // We don't need it to be reactive, and this way our component has access to it.

    this.$store.dispatch('fetchEvents', {
      perPage: this.perPage,
      page: this.page
    })
  },
  computed: {
    page() {
      return parseInt(this.$route.query.page) || 1 // getting from query parameters if null then first page
    },
    hasNextPage() {
      return this.eventsTotal > this.page * this.perPage
    },
    ...mapState(['events', 'eventsTotal'])
  }
}
</script>
