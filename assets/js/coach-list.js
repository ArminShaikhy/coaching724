$("#coaching-field-header").click(function() {
    $("#coaching-field-header").toggleClass("active");
});

$("#gender-header").click(function() {
    $("#gender-header").toggleClass("active");
});

$(".field-label").click(function() {
    $(".checkbox-label").removeClass("active");
    $(".checkbox-label").siblings('.tick').removeClass("active");

    $(this).addClass("active");
    $(this).siblings('.tick').addClass("active");

    $('#order-filter-box').show();
});

$(".gender-label").click(function() {
    $(".gender-label").removeClass("active");
    $(".gender-label").siblings('.tick').removeClass("active");

    $(this).addClass("active");
    $(this).siblings('.tick').addClass("active");
});

$("#coaching-field-header").click(function() {
    $("#coaching-field-box").slideToggle();
});

$("#gender-header").click(function() {
    $("#gender-box").slideToggle();
});

$("#cost-order-header").click(function() {
    $(".cost-order-box").slideToggle();
});

$("#rating-order-header").click(function() {
    $(".rating-order-box").slideToggle();
});

$("#cost-order-header").click(function() {
    $("#cost-order-header").toggleClass("active");
});

$("#rating-order-header").click(function() {
    $("#rating-order-header").toggleClass("active");
});


$(".cost-label").click(function() {
    $(".cost-label").removeClass("active");
    $(".cost-label").siblings('.tick').removeClass("active");

    $(this).addClass("active");
    $(this).siblings('.tick').addClass("active");
});

$(".rating-label").click(function() {
    $(".rating-label").removeClass("active");
    $(".rating-label").siblings('.tick').removeClass("active");

    $(this).addClass("active");
    $(this).siblings('.tick').addClass("active");
});

$("#remove-filter-setting-btn").click(function(e) {
    e.preventDefault();

    $('#default-value').prop('selected', true)

    $('#male').prop('checked', false);
    $('#male').siblings().removeClass('active');
    $('#female').prop('checked', false);
    $('#female').siblings().removeClass('active');

    $('#life-coach').prop('checked', false);
    $('#life-coach').siblings().removeClass('active');
    $('#business-coach').prop('checked', false);
    $('#business-coach').siblings().removeClass('active');
    $('#career-coach').prop('checked', false);
    $('#career-coach').siblings().removeClass('active');
    $('#other').prop('checked', false);
    $('#other').siblings().removeClass('active');

    $('#rating-highest').prop('checked', false);
    $('#rating-lowest').prop('checked', false);

    $('#cost-highest').prop('checked', false);
    $('#cost-lowest').prop('checked', false);

    $('#order-filter-box').hide();
});