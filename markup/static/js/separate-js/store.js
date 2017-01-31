var canvas = document.getElementById('store');
canvas.width = $('.content').width();
canvas.height = $('.content').height();
var ctx = canvas.getContext('2d');
var r = 25;
var elem = $('.store_btn');
var line = {x: window.innerWidth / 2, y: window.innerHeight / 2};
var line2 = {x: $(elem).offset().left + r, y: $(elem).offset().top + r};

$('.store_btn').css({'top': line.y, 'left': line.x})
var _count2 = 0;
$(document).scroll(function () {
    docScroll = $(window).scrollTop();

    // line = {x: Math.sin(docScroll / 500) * 500 + window.innerWidth / 2, y: docScroll + window.innerHeight / 2};
    loadProces(docScroll);

    line.y = docScroll + window.innerHeight / 2;

});

function render() {
    requestAnimationFrame(render);
    animBtn()
}
render();

function animBtn() {
    ctx.beginPath();
    ctx.moveTo(line2.x, line2.y);
    line2 = {x: $(elem).offset().left + r, y: $(elem).offset().top + r};
    ctx.lineTo(line2.x, line2.y);
    ctx.stroke();
    ctx.globalAlpha = 0.1;
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.globalAlpha = 1.0;
}

function loadProces(_count) {
    $(elem).each(function () {
        $(this).stop().prop('Counter', _count2).animate({
            Counter: _count
        }, {
            duration: 100,
            step: function (now) {
                line.x = Math.sin(_count2 / 500) * 500 + window.innerWidth / 2;
                _count2 = Math.ceil(now);
                elem.css({'top': line.y, 'left': line.x})
            }
        });
    });
}