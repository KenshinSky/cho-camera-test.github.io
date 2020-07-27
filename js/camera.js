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
    var constraints = { video: { facingMode: 'environment', width: 4000, height: 5000 } };
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
        //var img = canvas.toDataURL('image/png');
        //var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");  // here is the most important part because if you dont replace you will get a DOM 18 exception.
        //alert("img width:" + image.width + "\nimg height:" + image.height);
        var link = document.getElementById('link');
        link.setAttribute('download', 'test.png');
        link.setAttribute('href', canvas.toDataURL("image/png").replace("image/png", "image/octet-stream"));
        link.click();
    }
    catch(err) {
    alert(err.message);
    }
}
