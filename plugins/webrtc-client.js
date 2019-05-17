if (process.client) {
  const peerConnection = new RTCPeerConnection()

  // Combine RTCPeerConnection with getUserMedia
  navigator.mediaDevices.getUserMedia({
    audio: true,
    vide: true
  })
    .then((stream) => {
      peerConnection.addStream(stream)
      peerConnection.createOffer()
        .then(sdp => peerConnection.setLocalDescription(sdp))
        .then(() => console.log(peerConnection.localDescription))
    })
}
