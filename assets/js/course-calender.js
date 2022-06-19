$(".drop-arrow").click(function() {
    $(this).toggleClass('active');
    $(this).parents('.full-width').siblings('.drop-down-box').slideToggle("slows");
});