<template>
  <div>
    <h1>Event Listing</h1>
    <EventCard />
  </div>
</template>

<script lang="ts">
import EventCard from '@/components/EventCard.vue'
export default {
  components: {
    EventCard // ES6 shorthand
  }
}
</script>
