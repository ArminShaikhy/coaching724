var DocCount = 1;


function getElement(DCount) {
    return `<div class="coaching-doc flex-r space-between align-center full-width">\
    <div class="input-container">\
        <select name="" id="field-${DCount}">\
            <option disabled selected>مدرک کوچینگ</option>\
            <option value="ACC">ACC</option>\
            <option value="PCC">PCC</option>\
            <option value="MCC">MCC</option>\
        </select>\
        <span>با مشکل رو به رو شده اید</span>\
    </div>\
    <div class="input-container">\
        <input type="text" name="" id="institute-${DCount}" placeholder="نام موسسه">\
        <span>با مشکل رو به رو شده اید</span>\
    </div>\
    <div class="input-container">\
        <div class="upload-field flex-r align-center space-between">\
            <p>مدرک کوچینگ</p>\
            <div id="coaching-doc-btn-1" class="coaching-doc-btn btn btn-md btn-primary text-dark">\
                انتخاب فایل\
            </div>\
        </div>\
        <input class="coaching-doc-file file-input" type="file" name="" id="coaching-doc-file-${DCount}">\
        <span>با مشکل رو به رو شده اید</span>\
    </div>\
    <div class="input-container">\
        <div class="delete-btn btn btn-md-wide">\
            حذف\
        </div>\
    </div>\
</div>`;
}

var DocumentRowElement = $("#add-doc-btn").click(function() {
    DocCount++;
    var DocumentRowElement = getElement(DocCount);
    $(".coaching-info").append(DocumentRowElement);
});

$("#resume-btn").click(function() {
    $("#resume-file").trigger("click");
});

$("#national-id-btn").click(function() {
    $("#national-id-file").trigger("click");
});

$("#profile-btn").click(function() {
    $("#profile-file").trigger("click");
});

$(".coaching-info").on("click", ".coaching-doc-btn", function() {
    $(this).parent('.upload-field').siblings('.coaching-doc-file').trigger("click");
});

$(".coaching-info").on("click", ".delete-btn", function() {
    DocCount--;
    $(this).parent('.input-container').parent('.coaching-doc').remove();
});