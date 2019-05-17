<template>
  <section class="container">
    <video id="videoElement" ref="video" autoplay="true" />
  </section>
</template>

<script lang="js">
export default {
  data() {
    return {
      stream: undefined
    }
  },
  mounted() {
    const video = this.$refs.video
    // const canvas = document.querySelector('canvas')
    // const ctx = canvas.getContext('2d')

    /** @type {MediaStreamConstraints} */
    const constraints = {
      video: { facingMode: 'user' }
    }

    // Combine RTCPeerConnection with getUserMedia
    navigator.mediaDevices.getUserMedia(constraints)
      .then((stream) => {
        video.srcObject = stream

        // peerConnection.addStream(stream)
        // peerConnection.createOffer()
        //   .then(sdp => peerConnection.setLocalDescription(sdp))
        //   .then(() => {
        //     socket.emit('offer', peerConnection.localDescription)
        //   })
        //   .catch(err => console.warn('[peerConnection]: Could not create offer', err))
      })
      .catch(err => console.error(err))
  }
}
</script>

<style lang="scss">
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/

html { overflow: hidden; height: 100%;}
video { width: 100%; height: 100%; position: absolute; display: block; top: 0; left: 0; object-fit: cover;}
body {
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: black;
  margin: 0;
}

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
