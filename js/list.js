/**
 * Created by cfc on 2017/8/29.
 */
function addLi(){
    $("#videoList").append("<li><a onclick='' /></li>");
}


function addVideo() {
    $("#file").click();
}
function replaceVideo(src) {
    $("#Video1").src(src);
}