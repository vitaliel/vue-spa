<template>
  <nav class="navbar has-shadow" role="navigation">
    <div class="navbar-brand">
      <router-link to="/category/front-end" exact>
        <img src="http://bit.ly/vue-img" alt="Vue SPA" />
      </router-link>
      <router-link class="navbar-item is-tab" :to="{name: 'category', params: {id:'front-end'}}">Front-end</router-link>
            <router-link class="navbar-item is-tab" to="/category/mobile">Mobile</router-link>
      <router-link class="navbar-item is-tab" to="/login">
        <span v-if="isAuthenticated">Logout</span>
        <span v-else>Login</span>
    </router-link>
    </div>
  </nav>
</template>
<script type="text/javascript">
  import eventBus from '../event-bus'
  export default {
    data() {
      return {
        isAuthenticated: false
      }
    },
    created() {
      eventBus.$on('authStatusUpdate', isAuthenticated => {
        this.isAuthenticated = isAuthenticated
      })
    }
  }
</script>
