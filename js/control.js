/**
 * Created by cfc on 2017/8/29.
 */
function vidplay(){
    var video = document.getElementById("Video1");
    var button = document.getElementById("play");
    if(video.paused) {
        video.play();
    }else{
        video.pause();
    }
}function restart() {
    var video = document.getElementById("Video1");
    video.currentTime = 0;
}
function skip(value) {
    var video = document.getElementById("Video1");
    video.currentTime += value;
}
onkeydown = function (e) {
    var e = event || window.event || arguments.caller.arguments[0];
    var video = document.getElementById("Video1");
    if (e && e.keyCode === 37 ) {
        video.currentTime  -= 10;
    }
    if (e && e.keyCode === 38 ) {
        video.volume  += 0.1;
    }
    if (e && e.keyCode === 40 ) {
        video.volume  -= 0.1;
    }
    if (e && e.keyCode === 39 ) {
        video.currentTime  += 10;
    }

}

function doubleClick(){
    document.getElementById("Video1").webkitRequestFullScreen();
}
