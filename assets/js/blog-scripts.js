$('#cat-1').click(function() {
    $(this).children('.triangle-link').toggleClass('blog-triangle-active');
    $(this).children('p').toggleClass('blog-text-active');
    $(this).children('#chevron-arrow').toggleClass('blog-arrow-active');
    $("#subcat-1").slideToggle();
});
$('#cat-2').click(function() {
    $(this).children('.triangle-link').toggleClass('blog-triangle-active');
    $(this).children('p').toggleClass('blog-text-active');
    $(this).children('#chevron-arrow').toggleClass('blog-arrow-active');
    $("#subcat-2").slideToggle();
});
$('#cat-3').click(function() {
    $(this).children('.triangle-link').toggleClass('blog-triangle-active');
    $(this).children('p').toggleClass('blog-text-active');
    $(this).children('#chevron-arrow').toggleClass('blog-arrow-active');
    $("#subcat-3").slideToggle();
});
$('#cat-4').click(function() {
    $(this).children('.triangle-link').toggleClass('blog-triangle-active');
    $(this).children('p').toggleClass('blog-text-active');
    $(this).children('#chevron-arrow').toggleClass('blog-arrow-active');
    $("#subcat-4").slideToggle();
});
$('#cat-5').click(function() {
    $(this).children('.triangle-link').toggleClass('blog-triangle-active');
    $(this).children('p').toggleClass('blog-text-active');
    $(this).children('#chevron-arrow').toggleClass('blog-arrow-active');
    $("#subcat-5").slideToggle();
});


$('#blog-podcast-link').click(function() {
    $('#blog-podcast-triangle').show();
    $('.blog-podcast-section').fadeIn();

    $('#blog-video-triangle').hide();
    $('.blog-video-section').hide();

    $('#blog-article-triangle').hide();
    $('.blog-article-section').hide();

});

$('#blog-video-link').click(function() {
    $('#blog-podcast-triangle').hide();
    $('.blog-podcast-section').hide();

    $('#blog-video-triangle').show();
    $('.blog-video-section').fadeIn();

    $('#blog-article-triangle').hide();
    $('.blog-article-section').hide();

});

$('#blog-article-link').click(function() {
    $('#blog-podcast-triangle').hide();
    $('.blog-podcast-section').hide();

    $('#blog-video-triangle').hide();
    $('.blog-video-section').hide();

    $('#blog-article-triangle').show();
    $('.blog-article-section').fadeIn();

});

$('#article-filter-btn').click(function() {
    $("#article-filter-box").slideToggle();
});

$('#video-filter-btn').click(function() {
    $("#video-filter-box").slideToggle();
});

$('#podcast-filter-btn').click(function() {
    $("#podcast-filter-box").slideToggle();
});