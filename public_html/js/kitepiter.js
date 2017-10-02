$(document).ready(function () {
    $("#mobile-menu-trigger").click(function () {
        $(this).toggleClass("active");
        $(".menu").toggleClass("active");
        $("body").toggleClass("mobile-menu-active");
    });
    $(".menu-item-has-submenu > a").click(function (e) {
        e.preventDefault();
    });
    $(".menu-item-has-submenu").click(function () {
        $(this).toggleClass("active");
    });
});
