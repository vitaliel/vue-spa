<template>
  <nav class="navbar has-shadow" role="navigation">
    <div class="navbar-brand">
      <router-link to="/category/front-end" exact>
        <img src="http://bit.ly/vue-img" alt="Vue SPA" />
      </router-link>
      <router-link class="navbar-item is-tab" to="/category/front-end" exact>Front-end</router-link>
            <router-link class="navbar-item is-tab" to="/category/mobile" exact>Mobile</router-link>
      <router-link class="navbar-item is-tab" to="/login">Login</router-link>
    </div>
  </nav>
</template>
