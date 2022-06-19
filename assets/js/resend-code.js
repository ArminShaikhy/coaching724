$("#resend-code").click(() => {
    var email = $("#email").val();
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
            $("#counter").text("ارسال کد")
        }
    }, 1000);

    $.ajax({
        type: "POST",
        url: "/ResendActivationCode",
        data: { email: email },
        success: (response) => {
            $("#content").append(`<p style="margin:auto">در صورت ارسال نشدن ایمیل مجددا تلاش کنید</p>`);
        }
    });
});