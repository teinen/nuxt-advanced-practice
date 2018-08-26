<template>
  <div>
    <h1>This is secret page.</h1>
    <nuxt-link to="/">Back to home page.</nuxt-link>
  </div>
</template>

<script>
export default {
  middleware: 'authenticated'
}
</script>
