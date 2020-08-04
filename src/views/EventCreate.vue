<template>
  <div>
    <h1>Create an Event, {{ user.name }}</h1>
    <p>This event was created by {{ user.id }}</p>
    <p>There are {{ catLength }} categories:</p>

    <ul>
      <li v-for="(cat, index) in categories" :key="index">{{ cat }}</li>
    </ul>

    <p>{{ getTodoById(1) }}</p>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  computed:
    //   {
    //     userName() {
    //       return this.$store.state.user.name
    //     }
    //   }

    // mapState({
    //   userName: state => state.user.name,
    //   userID: state => state.user.id,
    //   categories: state => state.categories
    // })

    // // simplest way to do mapping
    // mapState({
    //   user: 'user',
    //   categories: 'categories'
    // })

    // Other way to do it
    // computed: mapState['user', 'categories']

    // Latest, in case we want to declare also a local computed method
    {
      catLength() {
        return this.$store.getters.catLength
      },
      ...mapState(['user', 'categories']),
      //   getTodo() {
      //     return this.$store.getters.getTodoById
      //   }
      // getting todos with mapGetters
      ...mapGetters(['getTodoById'])
    }
}
</script>

<style lang="scss" scoped></style>
