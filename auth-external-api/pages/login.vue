<template>
  <div>
    <h1>Sign in to the secret page.</h1>
    <div>
      <label for="email">
        <input id="email" type="email" value="test">
      </label>
      <label for="password">
        <input id="password" type="password" value="test">
      </label>
      <button @click="postLogin">Login</button>
      <p>The crendentials are not verified for the example purpose.</p>
    </div>
  </div>
</template>

<script>
const Cookie = process.browser ? require('js-cookie') : undefined

export default {
  middleware: 'notAuthenticated',
  methods: {
    postLogin () {
      setTimeout(() => { // we simulate the async request with timeout.
        const auth = {
          accessToken: 'someStringGotFromApiServiceWithAjax'
        }
        this.$store.commit('setAuth', auth) // mutating to store for client rendering
        Cookie.set('auth', auth)
        this.$router.push('/')
      }, 1000);
    }
  }
}
</script>

<style scoped>

</style>
