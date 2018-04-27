$("body").scroll(function (e) {
    if ($("body").scrollTop()) {
        $('nav').addClass('black');
    }
    else {
        $('nav').removeClass('black');
    }
})

