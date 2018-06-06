<template>
<div class="content">
  <div v-if="isAuthenticated">
    <p> Hello authenticated user!</p>
    <button class="button is-primary" @click="logout()">
      Logout
    </button>
  </div>
  <div v-else>
    <h2>Login</h2>
    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">Username</label>
      </div>
      <div class="field-body">
        <div class="field">
          <div class="control">
            <input v-model="username" type="text" class="input" placeholder="Your username">
          </div>
        </div>
      </div>
    </div>
    <!-- end user field -->

    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">Password</label>
      </div>
      <div class="field-body">
        <div class="field">
          <div class="control">
            <input v-model="password" type="password" class="input" placeholder="Your password">
          </div>
        </div>
      </div>
    </div>
    <!-- end password -->
    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <!-- Left empty for spacing -->
      </div>
      <div class="field-body">
        <div class="field">
          <div class="control">
            <button @click="login()" class="button is-primary">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script type="text/javascript">
  import { mapGetters, mapActions } from 'vuex'

  export default {
    data() {
      return {
        username: '',
        password: ''
      }
    },
    computed: {
      ...mapGetters(['isAuthenticated'])
    },
    methods: {
      ...mapActions({
        logout: 'logout'
      }),
      login() {
        this.$store.dispatch('login', {username: this.username, password: this.password})
        .then(() => {
          this.username = ''
          this.password = ''
        })
      }
    }
  }
</script>
