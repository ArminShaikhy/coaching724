var SessionCount = 0;

function getElement(sesstionCount) {
    return `<div class="input-container">\
<a class="text flex-r align-center">\
    جلسه ${sesstionCount}\
    <svg xmlns="http://www.w3.org/2000/svg" width="14.828" height="7.829" viewBox="0 0 16.828 9.829">\
        <path id="arrow" d="M7,0,0,7l7,7" transform="translate(1.414 8.414) rotate(-90)" fill="none" stroke="#333" stroke-linecap="round" stroke-width="2"/>\
    </svg>\
</a>\
<div class="date-time-pick">\
    <div class="flex-c align-center">\
        <input class="date mg-auto mg-t-5 mg-b-5" type="date" name="" id="">\
        <div class="time ">\
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="13.625" viewBox="0 0 24 17.625">\
                <g id="tick" transform="translate(-5 -70.997)">\
                  <path id="Path_167" data-name="Path 167" d="M23.648,68.349a1.2,1.2,0,0,0-1.7,0L7.574,82.726,2.048,77.2a1.2,1.2,0,0,0-1.7,1.7l6.375,6.375a1.2,1.2,0,0,0,1.7,0L23.648,70.046A1.2,1.2,0,0,0,23.648,68.349Z" transform="translate(5 3)" fill="#0c9833"/>\
                </g>\
              </svg>\
            <input class="time-radio" type="radio" name="session-${sesstionCount}" id="${sesstionCount}-1">\
            <label for="${sesstionCount}-1">ساعت 9 تا 12</label>\
        </div>\
        <div class="time">\
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="13.625" viewBox="0 0 24 17.625">\
                <g id="tick" transform="translate(-5 -70.997)">\
                  <path id="Path_167" data-name="Path 167" d="M23.648,68.349a1.2,1.2,0,0,0-1.7,0L7.574,82.726,2.048,77.2a1.2,1.2,0,0,0-1.7,1.7l6.375,6.375a1.2,1.2,0,0,0,1.7,0L23.648,70.046A1.2,1.2,0,0,0,23.648,68.349Z" transform="translate(5 3)" fill="#0c9833"/>\
                </g>\
              </svg>\
            <input class="time-radio" type="radio" name="session-${sesstionCount}" id="${sesstionCount}-2">\
            <label for="${sesstionCount}-2">ساعت 12 تا 1</label>\
        </div>\
        <div class="time">\
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="13.625" viewBox="0 0 24 17.625">\
                <g id="tick" transform="translate(-5 -70.997)">\
                  <path id="Path_167" data-name="Path 167" d="M23.648,68.349a1.2,1.2,0,0,0-1.7,0L7.574,82.726,2.048,77.2a1.2,1.2,0,0,0-1.7,1.7l6.375,6.375a1.2,1.2,0,0,0,1.7,0L23.648,70.046A1.2,1.2,0,0,0,23.648,68.349Z" transform="translate(5 3)" fill="#0c9833"/>\
                </g>\
              </svg>\
            <input class="time-radio" type="radio" name="session-1" id="1-3">\
            <label for="1-3">ساعت 3 تا 4</label>\
        </div>\
    </div>\
</div>\
</div>\
<hr>`;
}

var SessionRowElement = $("#add-session-btn").click(function() {
    SessionCount++;
    var sessionRowElement = getElement(SessionCount);
    $("#sessions-container").append(sessionRowElement);
});

$("#time-selection-form").on("click", ".time", function() {
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
});

$("#time-selection-form").on("click", ".text", function() {
    $(this).children("svg").toggleClass("down");
    $(this).siblings(".date-time-pick").slideToggle();
});

$(".reserve-sessions-btn").click(function() {
    $("#reserve-box").hide();
    $("#time-selection-box").show();
});

$("#session-return-btn").click(function() {
    $("#time-selection-box").hide();
    $("#reserve-box").show();
});

$(".session-zero-btn").click(function() {
    swal({
        title: "جلسه رزرو شد",
        text: "مربی به زودی با شما تماس خواهد گرفت",
        icon: "success",
        button: "بستن",
    });
});