function initSelector() {
    $(".slider-navigation-selector a").remove();
    $(".slider .slide").each(function () {
        if ($(this).hasClass("active")) {
            $(".slider-navigation-selector").append("<a class = \"icon-btn_paginator_banner_hower\"> </a>");
        } else {
            $(".slider-navigation-selector").append("<a class = \"icon-btn_paginator_banner\"> </a>");
        }
    });
}

function getSelectorByIndex(index) {
    return $(".slider-navigation-selector a").eq(index);
}

function toggleSelectorActivity(selector) {
    selector.toggleClass("icon-btn_paginator_banner_hower");
    selector.toggleClass("icon-btn_paginator_banner");
}

function updateSelector() {
    toggleSelectorActivity($(".slider-navigation-selector a.icon-btn_paginator_banner_hower"));
    toggleSelectorActivity(getSelectorByIndex($(".slide.active").index()));
}

function getSlideByIndex(index) {
    return $(".slider .slide").eq(index);
}

function toggleSlideActivity(slide) {
    slide.toggleClass("active");
    slide.toggleClass("hidden");
}

function switchSlide(index) {
    toggleSlideActivity($(".slide.active"));
    toggleSlideActivity(getSlideByIndex(index));
    updateSelector();
}

function slideCount() {
    return $(".slide").length;
}

function switchNextSlide() {
    if ($(".slide.active").index() + 1 < slideCount())
        switchSlide($(".slide.active").index() + 1);
    else
        switchSlide(0);
}

function switchPrevSlide() {
    if ($(".slide.active").index() !== 0)
        switchSlide($(".slide.active").index() - 1);
    else
        switchSlide(slideCount() - 1);
}

var autoSwitch;

function initAutoSwitch() {
    autoSwitch = setInterval(switchNextSlide, 7000);
}

function resetAutoSwitch() {
    clearInterval(autoSwitch);
    initAutoSwitch();
}

$(".slider").ready(function () {
    initSelector();
    initAutoSwitch();

    $(".slider-navigation-selector a").click(function () {
        switchSlide($(this).index());
        resetAutoSwitch();
    });
    $(".slider-navigation-buttons .icon-arrow_2").click(function () {
        switchNextSlide();
        resetAutoSwitch();
    });
    $(".slider-navigation-buttons .icon-arrow").click(function () {
        switchPrevSlide();
        resetAutoSwitch();
    });
});
