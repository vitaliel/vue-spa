<template>
<div class="content">
  <div v-if="isAuthenticated">
    <p> Hello authenticated user!</p>
    <p>Name: {{ profile.firstName }}</p>
    <p>Favorite Sandwich {{ profile.favoriteSandwich }}</p>
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
  import appService from '../app.service'

  export default {
    data() {
      return {
        isAuthenticated: false,
        profile: {},
        username: '',
        password: ''
      }
    },
    watch: {
      isAuthenticated: function(val) {
        if (val) {
          appService.getProfile().then(profile => {
            this.profile = profile
          }).catch(() => window.alert('Can not get profile info!'))
        } else {
          this.profile = {}
        }
      }
    },
    methods: {
      login() {
        appService.login({username: this.username, password: this.password})
        .then(data => {
          window.localStorage.setItem('token', data.token)
          window.localStorage.setItem('tokenExpiration', data.expiration)
          this.isAuthenticated = true
          this.username = ''
          this.password = ''
        }).catch((err) => {
          console.log(err)
          window.alert('Could not login!')
        })
      },
      logout() {
        this.isAuthenticated = false
        window.localStorage.setItem('token', '')
        window.localStorage.setItem('tokenExpiration', '0')
      }
    },
    created() {
      const expiration = window.localStorage.getItem('tokenExpiration')
      const unixTimestamp = new Date().getTime() / 1000
      if (expiration !== null && parseInt(expiration) - unixTimestamp > 0) {
        this.isAuthenticated = true
      }
    }
  }
</script>
