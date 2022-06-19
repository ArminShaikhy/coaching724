$('#personal').click(function() {
    $(this).children('.triangle-link').addClass('active');
    $(this).children('a').addClass('tarrif-text-active');

    $('#team').children('.triangle-link').removeClass('active');
    $('#team').children('a').removeClass('tarrif-text-active');

    $('#oraganizational').children('.triangle-link').removeClass('active');
    $('#oraganizational').children('a').removeClass('tarrif-text-active');
    $('#oraganizational').children('#chevron-arrow').removeClass('chevron-active');
    $('.organizational-coaching').slideUp();
    $('.plan-type-container').fadeOut();

    $('#personal-tarrifs').fadeIn();
    $('#Team-tarrifs').fadeOut();
    $('#organization-tarrifs').fadeOut();
});

$('#team').click(function() {
    $(this).children('.triangle-link').addClass('active');
    $(this).children('a').addClass('tarrif-text-active');

    $('#personal').children('.triangle-link').removeClass('active');
    $('#personal').children('a').removeClass('tarrif-text-active');

    $('#oraganizational').children('.triangle-link').removeClass('active');
    $('#oraganizational').children('a').removeClass('tarrif-text-active');
    $('#oraganizational').children('#chevron-arrow').removeClass('chevron-active');
    $('.organizational-coaching').slideUp();
    $('.plan-type-container').fadeOut();

    $('#personal-tarrifs').fadeOut();
    $('#Team-tarrifs').fadeIn();
    $('#organization-tarrifs').fadeOut();
});

$('#oraganizational').click(function() {
    $(this).children('.triangle-link').addClass('active');
    $(this).children('a').addClass('tarrif-text-active');
    $(this).children('#chevron-arrow').addClass('chevron-active');
    $('.organizational-coaching').slideDown();
    $('.plan-type-container').fadeIn();

    $('#team').children('.triangle-link').removeClass('active');
    $('#team').children('a').removeClass('tarrif-text-active');


    $('#personal').children('.triangle-link').removeClass('active');
    $('#personal').children('a').removeClass('tarrif-text-active');


    $('#personal-tarrifs').fadeOut();
    $('#Team-tarrifs').fadeOut();
    $('#organization-tarrifs').fadeIn();
});

$('#monthly').click(function() {
    $(this).addClass('active');
    $('#yearly').removeClass('active');
});

$('#yearly').click(function() {
    $(this).addClass('active');
    $('#monthly').removeClass('active');
});