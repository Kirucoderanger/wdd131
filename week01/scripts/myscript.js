// Get access to the camera
navigator.mediaDevices.getUserMedia({ video: true })
    .then(function(stream) {
        // Get the video element
        var video = document.querySelector('video');
        // Set the video source to the stream from the camera
        video.srcObject = stream;
        // Play the video
        video.play();
    })
    .catch(function(err) {
        console.log("An error occurred: " + err);
    });