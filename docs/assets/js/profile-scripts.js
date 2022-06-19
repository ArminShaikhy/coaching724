$("#avatar").click(function() {
    $("#avatar-file").trigger("click");
});

$("#my-profile-link").click(function() {
    $("#my-profile-link").addClass("active");
    $("#transactions").removeClass("active");
    $("#my-sessions-link").removeClass("active");
    $("#my-courses-link").removeClass("active");

    $(".profile-section").removeClass("active");

    $("#default-profile").addClass("active");
});

$("#my-sessions-link").click(function() {
    $("#my-sessions-link").addClass("active");
    $("#transactions").removeClass("active");
    $("#my-profile-link").removeClass("active");
    $("#my-courses-link").removeClass("active");

    $(".profile-section").removeClass("active");

    $("#my-sessions").addClass("active");
});

$("#my-courses-link").click(function() {
    $("#my-sessions-link").removeClass("active");
    $("#my-profile-link").removeClass("active");
    $("#my-courses-link").addClass("active");
    $("#transactions").removeClass("active");

    $(".profile-section").removeClass("active");

    $("#my-courses").addClass("active");
});

$("#transactions").click(function() {
    $("#my-sessions-link").removeClass("active");
    $("#my-profile-link").removeClass("active");
    $("#transactions").addClass("active");
    $("#my-courses-link").removeClass("active");

    $(".profile-section").removeClass("active");

    $("#transaction-history").addClass("active");
});

$("#edit-profile").click(function() {

    $(".profile-section").removeClass("active");

    $("#personnal-info").addClass("active");
});

$(".session-details").click(function() {

    $(".profile-section").removeClass("active");

    $("#session-details").addClass("active");
});