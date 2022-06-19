$("#Culture-btn").on('click', function() {
    $("#Coaching-tutorial").hide();
    $("#Tutorial-tri").hide();
    $("#Personal-coaching").hide();
    $("#Personal-tri").hide();
    $("#Consult-coaching").hide();
    $("#Consult-tri").hide();
    $("#Coaching-culture").fadeIn("slow");
    $("#Culture-tri").show();

    $("Culture-btn").css("font-weight", "bold");
    $("Tutorial-btn").css("font-weight", "normal");
    $("Personal-btn").css("font-weight", "normal");
    $("Consult-btn").css("font-weight", "normal");
})


$("#Tutorial-btn").on('click', function() {
    $("#Coaching-culture").hide();
    $("#Culture-tri").hide();
    $("#Personal-coaching").hide();
    $("#Personal-tri").hide();
    $("#Consult-coaching").hide();
    $("#Consult-tri").hide();
    $("#Coaching-tutorial").fadeIn("slow");
    $("#Tutorial-tri").show();

    $("Culture-btn").css("font-weight", "normal");
    $("Tutorial-btn").css("font-weight", "bold");
    $("Personal-btn").css("font-weight", "normal");
    $("Consult-btn").css("font-weight", "normal");
});

$("#Personal-btn").on('click', function() {
    $("#Coaching-culture").hide();
    $("#Culture-tri").hide();
    $("#Coaching-tutorial").hide();
    $("#Tutorial-tri").hide();
    $("#Consult-coaching").hide();
    $("#Consult-tri").hide();
    $("#Personal-coaching").fadeIn("slow");
    $("#Personal-tri").show();

    $("Culture-btn").css("font-weight", "normal");
    $("Tutorial-btn").css("font-weight", "normal");
    $("Personal-btn").css("font-weight", "bold");
    $("Consult-btn").css("font-weight", "normal");
});

$("#Consult-btn").on('click', function() {
    $("#Coaching-culture").hide();
    $("#Culture-tri").hide();
    $("#Coaching-tutorial").hide();
    $("#Tutorial-tri").hide();
    $("#Personal-coaching").hide();
    $("#Personal-tri").hide();
    $("#Consult-coaching").fadeIn("slow");
    $("#Consult-tri").show();

    $("Culture-btn").css("font-weight", "normal");
    $("Tutorial-btn").css("font-weight", "normal");
    $("Personal-btn").css("font-weight", "normal");
    $("Consult-btn").css("font-weight", "bold");
});


$("#articles-btn").on('click', function() {
    $("#articles-slider").css("opacity", "1").hide().fadeIn("slow");
    $("#articles-tri").show();

    $("#videos-slider").fadeOut("slow");
    $("#videos-tri").hide();

    $("#podcasts-slider").fadeOut("slow");
    $("#podcasts-tri").hide();

});

$("#videos-btn").on('click', function() {
    $("#articles-slider").fadeOut("slow");
    $("#articles-tri").hide();

    $("#videos-slider").css("opacity", "1").hide().fadeIn("slow");
    $("#videos-tri").show();

    $("#podcasts-slider").fadeOut("slow");
    $("#podcasts-tri").hide();

});


$("#podcasts-btn").on('click', function() {
    $("#articles-slider").fadeOut("slow");
    $("#articles-tri").hide();

    $("#videos-slider").fadeOut("slow");
    $("#videos-tri").hide();

    $("#podcasts-slider").css("opacity", "1").hide().fadeIn("slow");
    $("#podcasts-tri").show();

});




$("#services-link").on('click', function() {
    $("#dorp-down-box").slideToggle();
});


$("#hamburger-btn").on('click', function() {
    $("#hamburger-menu").slideToggle();
});

$("#hamburger-services").on('click', function() {
    $("#services-sub-cat").slideToggle();
});



$(document).on("click", 'a[href^="/#"]', function(e) {
    // target element id
    var id = $(this).attr("href");
    var replacedId = id.replace("/", "")
        // target element
    console.log(replacedId);
    var $id = $(replacedId);
    if ($id.length === 0) {
        return;
    }

    // prevent standard hash navigation (avoid blinking in IE)
    e.preventDefault();

    // top position relative to the document
    var pos = $id.offset().top;

    // animated top scrolling
    $("body, html").animate({ scrollTop: pos - 25 });
});

$("#search-btn").on('click', function() {
    $("#search-icon").toggle();
    $("#close-icon").toggle();
    $("#search-dropdown").toggle();
});