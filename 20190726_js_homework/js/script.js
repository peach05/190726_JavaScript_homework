var number = 0;
var stopPlay = 0;
var runTimes = 0;
var sec = 50;

init();
function play() {
    number++;
    runTimes++;
    if (number >= 11) {
        number = 1;
    }
    if (runTimes > stopPlay) {
        $("button").attr("disabled", false);

    } else if (runTimes + 10 > stopPlay) {
        $(".g" + number)
            .addClass("active")
            .siblings()
            .removeClass("active");
        setTimeout(play, (sec = sec * 1.4));
    } else {
        $(".g" + number)
            .addClass("active")
            .siblings()
            .removeClass("active");
        setTimeout(play, sec);
        $(".light").css("animation-duration", ".3s");
    }
}
function init() {
    runTimes = 0;
    sec = 50;
    number = number - 1;
    $("button").attr("disabled", false);
}
$("button").click(function () {
    if (runTimes > 0) return;
    stopPlay = Math.floor(Math.random() * (20 - 0) + 20);
    $(this).attr("disabled", true);
    play();
});