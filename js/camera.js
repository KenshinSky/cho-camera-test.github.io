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
    var video = document.querySelector('video');
    var canvas = canvas || document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    alert("width" + canvas.width);
    alert("height" + canvas.height);
    context = canvas.getContext('2d');
    context.drawImage(video, 0, 0, width, height);
    alert("dramcanvas done")
    var img = new Image();
    img.src = canvas.toDataURL('image/png');
    var img = canvas.toDataURL("image/png");
    alert("done");
}
