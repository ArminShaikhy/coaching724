$("#login-authentication-btn").click(function () {
    $("#login-main").hide();
    $("#login-send-pass").show();
});

$("#login-authentication-btn-2").click(function (e) {
    $(".field-validation-valid").text("");
    var phoneNo = $("#phoneNumber").val();
    if (phoneNo.trim() !== "") {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "/ResendCodeSms",
            data: { PhoneNumber: phoneNo },
            success: (response) => {
                var result = $.parseJSON(response);
                console.log(result);
                if (result.status !== 200) {
                    //$(".field-validation-valid").text(result.message);
                    createToast('error', "خطا", result.message)
                } else {
                    createToast('success', "موفقیت", "پیامک حاوی کد برای شما ارسال شد");
                    $("#login-send-pass").hide();
                    $("#login-temp-pass").show();
                    $("#PhoneNumber").val(phoneNo);
                }
            },
            error: (response) => {
                createToast('error', "خطا", "مشکل در ارتباط با سرور")
                                                    
            }
        })
    }
    else {
        $(".field-validation-valid").text("وارد کردن شماره ی همراه الزامی میباشد");
    }
});

$("#loginUser").click(function (e) {
    e.preventDefault();
    var phoneNo = $("#PhoneNumber").val();
    var code = $("#Code").val();
    if (code.trim !== "") {
        $.ajax({
            url: "/LoginWithPhoneNo",
            method: "POST",
            data: { PhoneNumber: phoneNo, Code: code },
            success: (response) => {
                var result = $.parseJSON(response);
                console.log(result);
                if (result.status !== 200) {
                    //$(".field-validation-valid").text(result.message);
                    createToast('error', "خطا", result.message)

                } else {
                    createToast('success', "موفقیت", "ورود شما با موفقیت انجام شد");
                    setTimeout(function () {
                     window.location.href = "/Profile";
                    }, 900);
                }
                
            
            },
            error: (response) => {
                createToast('error', "خطا", "مشکل در ارتباط با سرور")
            }
        })
    } else {
        $(".field-validation-valid").text("وارد کردن رمز یک بار مصرف الزامی میباشد");
    }
});

var phoneNo = $("#PhoneNumber").val();
$("#resend-code").prop('disabled', true);
var counter = 59;
setInterval(function () {
    counter--;
    if (counter >= 0) {
        $("#counter").text("0:" + counter.toString());
        if (counter < 10) {
            $("#count").text("0:" + counter.toString().padStart(2, '0'));
        }
    }
    if (counter === 0) {
        clearInterval(counter);
        $("#resend-code").prop('disabled', false);
        $("#counter").text("ارسال مجدد")
    }
}, 1000);

$("#resend-code").click(function () {
    var phoneNo = $("#PhoneNumber").val();
    $("#resend-code").prop('disabled', true);
    var counter = 59;
    setInterval(function () {
        counter--;
        if (counter >= 0) {
            $("#counter").text("0:" + counter.toString());
            if (counter < 10) {
                $("#counter").text("0:" + counter.toString().padStart(2, '0'));
            }
        }
        if (counter === 0) {
            clearInterval(counter);
            $("#resend-code").prop('disabled', false);
            $("#counter").text("ارسال مجدد")
        }
    }, 1000);

    $.ajax({
        type: "POST",
        url: "/ResendCodeSms",
        data: { phoneNumber: phoneNo },
        success: () => {
            createToast('success', "موفقیت", "پیامک حاوی کد برای شما مجددا ارسال شد");
        },
        error: (response) => {
            $("#counter").text("خطایی رخ داده مجددا تلاش کنید")
        }
    });
})

$(document)
    .ajaxStart(function () {
        $("#loginUser").text("");
        $("#loginUser").append("<i class='fas fa-spinner fa-pulse'></i>");
        $("#login-authentication-btn-2").text("");
        $("#login-authentication-btn-2").append("<i class='fas fa-spinner fa-pulse'></i>");
    })
    .ajaxStop(function () {
        setTimeout(() => {
            $("#loginUser").removeClass("fas fa-spinner fa-pulse");
            $("#loginUser").text("ورود");
            $("#login-authentication-btn-2").removeClass("fas fa-spinner fa-pulse");
            $("#login-authentication-btn-2").text("ارسال رمز یک بار مصرف");
        }, 300)
    })

