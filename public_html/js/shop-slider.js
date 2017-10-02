$(".shop").ready(function () {
    $(".shop li a.icon-arrow_2").click(function () {
        wpapper = $(this).siblings(".shop-item-wrapper");
        items = wpapper.children();
        active = wpapper.children(".active");
        itemCount = wpapper.children().length;

        active.toggleClass("active");
        if (active.index() + 1 < itemCount) {
            items.eq(active.index() + 1).toggleClass("active");
        } else {
            items.eq(0).toggleClass("active");
        }
    });

    $(".shop li a.icon-arrow").click(function () {
        wpapper = $(this).siblings(".shop-item-wrapper");
        items = wpapper.children();
        active = wpapper.children(".active");
        itemCount = wpapper.children().length;

        active.toggleClass("active");
        if (active.index() !== 0) {
            items.eq(active.index() - 1).toggleClass("active");
        } else {
            items.eq(itemCount - 1).toggleClass("active");
        }
    });
});