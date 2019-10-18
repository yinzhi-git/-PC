// JavaScript Document
function goTopEx() {
    var obj = document.getElementById("zhiding");
    function getScrollTop() {
        return $(window).scrollTop();
    }
    function setScrollTop(value) {
        $(window).scrollTop(value);
    }
    window.onscroll = function () { getScrollTop() > 0 ? obj.style.display = "" : obj.style.display = "block"; }
    obj.onclick = function () {
        var goTop = setInterval(scrollMove, 10);
        function scrollMove() {
            setScrollTop(getScrollTop() / 1.1);
            if (getScrollTop() < 1) clearInterval(goTop);
        }
    }
}