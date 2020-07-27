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
    try{
        var video = document.querySelector('video');
        var canvas = document.createElement('canvas');
        var width = video.offsetWidth;
        var height = video.offsetHeight;
        canvas.width = width;
        canvas.height = height;
        alert("video width:" + canvas.width + "\nvideo height:" + canvas.height);
        var context = canvas.getContext('2d');
        context.drawImage(video, 0, 0, width, height);
        var img = canvas.toDataURL('image/png');
        alert("img width:" + img.width + "\nimg height:" + img.height);
    }
    catch(err) {
    alert(err.message);
    }
}
