// import socket from './socket.io'

// if (process.client) {
// const peerConnection = new RTCPeerConnection()

const video = document.createElement('video')
// const canvas = document.querySelector('canvas')
// const ctx = canvas.getContext('2d')

/** @type {MediaStreamConstraints} */
const constraints = {
  audio: true,
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

// socket.on('answer', (message) => {
//   console.log('[ans wer]: message received =>', message)
//   peerConnection.setRemoteDescription(message)
// })
// }
