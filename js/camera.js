function openCamera() {
    var video = document.querySelector('video');
    navigator.mediaDevices = navigator.mediaDevices
    || ((navigator.mozGetUserMedia 
    || navigator.webkitGetUserMedia) ? {
        getUserMedia: function(c) {
            return new Promise(function(y, n) {
                (navigator.mozGetUserMedia ||
                navigator.webkitGetUserMedia).call(navigator, c, y, n);
            });
        }
    } : null);
    var constraints = { video: { facingMode: 'environment', width: 1280, height: 720 } };
    navigator.mediaDevices.getUserMedia(constraints)
        .then(function(stream) {
            video.srcObject = stream;
            video.onloadedmetadata = function(e) {
                video.play();
            };
        })
        .catch(function(err) {
            console.log(err);
        });
}

function shot(){
    alert("1");
    var video = document.querySelector('video');
    alert("2");
    canvas.getContext("2d").drawImage(video, 0, 0, 300, 300, 0, 0, 300, 300);
    alert("3");
    var img = canvas.toDataURL("image/png");
    alert("done");
}
