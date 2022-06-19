function createToast(type ,heading,text) {
    $.toast({
        heading: heading,
        textAlign: 'right',
        hideAfter:5000,
        text: text,
        position: 'top-right',
        stack: true,
        allowToastClose: false,
        showHideTransition: 'fade',
        bgColor: type === 'sucess' ? '#4BB543' : '#cc0000'
    })
}
