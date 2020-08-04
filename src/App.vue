<template>
  <div id="app">
    <div id="nav">
      <!-- component to create a link -->
      <router-link :to="{ name: 'event-list' }">List</router-link>&nbsp;|&nbsp;
      <router-link :to="{ name: 'event-create' }">Create Event</router-link>
    </div>
    <!-- Here it will be render the component -->
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
