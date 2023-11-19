const videoElement = document.getElementById("video");
const button = document.getElementById("button");

// Prompt to select Media stream, pass to video element, then play
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
        videoElement.play();
        }

    } catch (error) {
        // Catch Error here
        console.log("whoops, error here", error);
    }
}   

button.addEventListener("click", async () => {
    // disable the button
    button.disabled = true;
    // Start picture in picture
    await videoElement.requestPictureInPicture();
    // Reset the button
    button.disabled = false; 
})

// On Load

selectMediaStream();