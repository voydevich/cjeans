var docWidth, docHeight, docScroll;
resize();
$(document).ready(function () {
    resize();
});
$(document).resize(function () {
    resize();
});
$(document).scroll(function () {
    docScroll = $(window).scrollTop();
});
function resize() {
    docWidth = $(window).width();
    docHeight = $(window).height();
    docScroll = $(window).scrollTop();
}