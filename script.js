const videoElement = document.getElementById('video')
const button = document.getElementById('button')

// Prompt to select media stream, pass to video element and play

async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia()
    videoElement.srcObject = mediaStream
    videoElement.onloadedmetadata = () => {
      videoElement.play()
    }
  } catch (err) {
    console.log(err)
  }
}

button.addEventListener('click', async () => {
  // Disable the button on click
  button.disabled = true
  // start picture in picture
  await videoElement.requestPictureInPicture()
  // reset the button
  button.disabled = false
})

// ON load
selectMediaStream()
