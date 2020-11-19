const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt user to select media stream, pass it to video element, then play:
async function selectMediaStream(){
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch(err){
        console.error('ah jeeze, error: ', err)
    }
}

button.addEventListener('click', async () => {
    // Disable Button on click
    button.disabled = true;

    // Start Picture in Picture
    await videoElement.requestPictureInPicture();

    // reset Button state
    button.disabled = false;
});


// On Load:
selectMediaStream();