<template>
  <section class="container">
    <div>
      <h1 class="title">
        turtles-webrtc-stream
      </h1>
      <h2 class="subtitle">
        WebRTC video streaming implementation in nuxt
      </h2>
    </div>
  </section>
</template>

<script lang="js">
import socket from '~/plugins/socket.io.js'

export default {
  computed: {
    $socket() {
      return socket
    }
  },
  mounted() {
    socket.emit('broadcaster')
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
