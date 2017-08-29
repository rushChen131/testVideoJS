/**
 * Created by cfc on 2017/8/29.
 */
function addVideo() {
    $("#file").click();
    $("#videoList").append("<li><a onclick='' /></li>");
}
function replaceVideo(src) {
    $("#Video1").src(src);
}